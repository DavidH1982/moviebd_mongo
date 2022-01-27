import { useState } from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import Login from "./LoginUser";

function App() {
  const baseURL = "http://localhost/registeruser";

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUserChange = (e) => setUser(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const submitForm = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      name: user,
      email: email,
      password: password,
    });
    const res =  await fetch(
      baseURL,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload
      });
    console.log(await res.json());
    };
  const payload = JSON.stringify({
    name: user,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  });
  
  const payloadArray = JSON.parse(payload);
  const passwordMatch = payloadArray.password === payloadArray.confirmPassword;
  const formIncomplete = !payloadArray.name || !payloadArray.email || !payloadArray.password || !payloadArray.confirmPassword || !passwordMatch;

  return (
    <>
    <Router>
    <div className="blankBG"></div>
      <div className="background"></div>
      <div className="homepage">
        <ul>
          <li className="registerBox">
            <div className="clapperImage" />
            <h2>New User Registration</h2>
            <p className="loginHere">Already registered? Log in <Link to="/Login" className='navLink' >here</Link></p>
            <form className="registerForm" onSubmit={submitForm}>
              <li className="registerLabel">
                <label>
                  User Name:{" "}
                  <input
                    type="input"
                    name="name"
                    value={user}
                    className="labelInput"
                    onChange={handleUserChange}
                  />
                </label>
              </li>
              <li className="registerLabel">
                <label>
                  Email:{" "}
                  <input
                    type="email"
                    name="name"
                    value={email}
                    className="labelInput"
                    onChange={handleEmailChange}
                  />
                </label>
              </li>
              <li className="registerLabel">
                <label>
                  Password:{" "}
                  <input
                    type="password"
                    name="password"
                    value={password}
                    className="labelInput"
                    onChange={handlePasswordChange}
                  />
                </label>
              </li>
              <li className="registerLabel">
                <label>
                  Confirm Password:{" "}
                  <input
                    type="password"
                    name="password"
                    value={confirmPassword}
                    className="labelInput"
                    onChange={handleConfirmPasswordChange}
                  />
                </label>
              </li>
              <li id="hiddenLine">
                <p className={formIncomplete ? "visible formComment" : "hidden formComment"}>Form is incomplete</p>
                <p className={passwordMatch ? "hidden formComment" : "visible formComment"}>Passwords do not match</p>
              </li>
              <li className="submitButton">
                <input type="submit" value="Submit" disabled={formIncomplete && "true"} />
              </li>
            </form>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/Login">
          <Login />
        </Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
