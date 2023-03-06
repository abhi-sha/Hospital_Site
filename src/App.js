import "./App.css";

import { Navbar, Login, About, Core, Home, End, Doctors } from "./components";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Home />
      <div className="line"> </div>
      <Login />
      <div className="line"></div>

      <Core />
      <div className="line"></div>

      <End />
    </div>
  );
}

export default App;
