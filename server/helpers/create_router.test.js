const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');
const createRouter = require('./create_router');

// set up express application
const app = express();
app.use(bodyParser.json());

// mock MongoDB collection methods
const mockFind = jest.fn();
const mockFindOne = jest.fn();
const mockInsertOne = jest.fn();
const mockUpdateOne = jest.fn();
const mockDeleteOne = jest.fn();
const mockToArray = jest.fn();

// configure the router with a mocked collection for weather info
const mockWeatherCollection = {
  find: mockFind.mockReturnValue({ toArray: mockToArray }),
  findOne: mockFindOne,
  insertOne: mockInsertOne,
  updateOne: mockUpdateOne,
  deleteOne: mockDeleteOne,
};
app.use('/weathersaves', createRouter(mockWeatherCollection));

describe('MDB weathersaves collection CRUD operations', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('GET /weathersaves should return all in the weathersaves collection', async () => {
    const mockData = [{ _id: new ObjectId(), name: 'Sunny Day' }];
    // the ObjectId needs to be serialised to a string to match JSON response
    const expectedData = mockData.map(item => ({ ...item, _id: item._id.toString() }));
    mockToArray.mockResolvedValueOnce(mockData);
  
    const response = await request(app).get('/weathersaves');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(expectedData); 
  });
  

  // testing each weather forecast request sent has persisted by ID
  it('GET /weathersaves/:id should return an item from weathersaves by ID', async () => {
    const id = new ObjectId();
    const mockData = { _id: id, name: 'Rainy Day' };
    // the ObjectId needs to be serialised to a string to match JSON response
    const expectedData = { ...mockData, _id: mockData._id.toString() };
    mockFindOne.mockResolvedValueOnce(mockData);
  
    const response = await request(app).get(`/weathersaves/${id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(expectedData); 
  });
  

  it('POST /weathersaves should create a new weather object in weathersaves', async () => {
    const newWeathersave = { name: 'Cloudy Day' };
    const insertedId = new ObjectId();
    mockInsertOne.mockResolvedValueOnce({ insertedId, ...newWeathersave });

    const response = await request(app).post('/weathersaves').send(newWeathersave);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.name).toBe(newWeathersave.name);
  });

  it('PUT /weathersaves/:id should update an item in weathersaves by ID', async () => {
    const id = new ObjectId();
    const updateData = { name: 'Windy Day' };
    mockUpdateOne.mockResolvedValueOnce({ modifiedCount: 1 });

    const response = await request(app).put(`/weathersaves/${id}`).send(updateData);
    expect(response.statusCode).toBe(200);
    expect(mockUpdateOne).toHaveBeenCalledWith({ _id: id }, { $set: updateData });
  });

  // deleting search history results
  it('DELETE /weathersaves/:id should delete an item in the weathersaves collection based on its id', async () => {
    const id = new ObjectId();
    mockDeleteOne.mockResolvedValueOnce({ deletedCount: 1 });

    const response = await request(app).delete(`/weathersaves/${id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: "Successfully deleted" });
  });
});
