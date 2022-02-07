// import { useState } from "react";
import "./App.css";
// import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";

import Register from "./components/register";
import Login from "./components/login";

function App() {
  // const baseURL = `${process.env.BASE_URL}`;

  return (
    <div className="App">
      <Register />
      <Login />
    </div>
  );
}

export default App;
