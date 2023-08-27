import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Form from "./Components/Form/Form";
import Information from "./Components/Information/Information";
import axios from "axios";

function App() {
  const [state, setState] = useState({});
  const getDataFromServer = (city) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=24594e148279b851d131156a2bc6262f`
      )
      .then(
        (res) => {
          console.log(res.data);
          setState(res.data);
        },
        () => {
          alert("Entered City Not Found");
        }
      );
  };
  return (
    <div className="App ">
      <h2 className="text-primary">Weather App</h2>
      <Form getDataFromServer={getDataFromServer} />
      {Object.keys(state).length === 0 ? (
        <div>
          <h2 className="text-warning">Data is not available</h2>
        </div>
      ) : (
        <Information info={state} />
      )}
    </div>
  );
}

export default App;
