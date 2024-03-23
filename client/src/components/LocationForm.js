import { Header, Form, Input } from "semantic-ui-react";

// the input form for to gather forecast and weather info on a location
function LocationForm({ handleSubmit, location, setLocation }) {
  const handleInput = (event) => {
    const input = event.target.value;
    setLocation(input);
  };

  const submitLocation = (event) => {
    event.preventDefault();
    handleSubmit(location); 
  };

  return (
    <>
      <Form className="form-box" onSubmit={submitLocation}>
        <Form.Field>
          <Header>Find Weather:</Header>
          <Input
            icon="search"
            placeholder="City, Lat/Lon, or Postcode..."
            onChange={handleInput}
          />
        </Form.Field>
      </Form>
    </>
  );
}

export default LocationForm;
