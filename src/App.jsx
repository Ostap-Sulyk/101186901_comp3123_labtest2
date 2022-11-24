import { useState } from "react";
import axios from "axios";
import Card from "./Components/Card";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const key = "e67d41ff7a8ad7be1f6841bbbe37c7f1";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${key}`;

  const getLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((resp) => {
        setData(resp.data);
      });
    }
  };
  const renderCard = (data) => {};
  return (
    <div className="main-container">
      <input
        type="text"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={getLocation}
        className="search-field"
        placeholder="Enter City"
      />
      {Object.keys(data).length === 0 ? <></> : <Card data={data} />}
      {/* <FakeCard /> */}
    </div>
  );
}

export default App;
