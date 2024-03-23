const express = require("express");
const { ObjectId } = require("mongodb");

const createRouter = function (collection) {
  const router = express.Router();

  // SHOW ALL
  router.get("/", (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500).json({ status: 500, error: err });
      });
  });

  // SHOW BY ID
  router.get("/:id", (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: new ObjectId(id) })
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500).json({ status: 500, error: err });
      });
  });

  // CREATE
  router.post("/", (req, res) => {
    const newData = req.body;
    collection
      .insertOne(newData)
      .then((result) => {
        res.json({
          _id: result.insertedId,
          ...newData,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ status: 500, error: err });
      });
  });

  // UPDATE
  router.put("/:id", (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    collection
      .updateOne({ _id: new ObjectId(id) }, { $set: updatedData })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ status: 500, error: err });
      });
  });

  // DELETE - by id i.e one weather item
  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    collection
      .deleteOne({ _id: new ObjectId(id) })
      .then((result) => {
        if (result.deletedCount === 0) {
          return res.status(404).json({ error: "Not Found" });
        }
        res.status(200).json({ message: "Successfully deleted" });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ status: 500, error: err });
      });
  });

  return router;
};

module.exports = createRouter;
