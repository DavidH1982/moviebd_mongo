import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Home from "./home";

function Login() {
  const baseURL = "http://localhost/login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const submitForm = async (e) => {
    e.preventDefault();
  };
  const payload = JSON.stringify({
    email: email,
    password: password,
  });
  const payloadArray = JSON.parse(payload);
  const formIncomplete = !payloadArray.email || !payloadArray.password;

  return (
      <>
        <Router>
            <div className="blankBG"></div>
            <div className="background"></div>
            <div>
                <div className="loginpage">
                    <ul>
                        <li className="registerBox">
                            <div className="clapperImage" />
                            <h2 id="logintext">Log In</h2>
                            <form className="registerForm" onSubmit={submitForm}>
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
              <li className="registerLabel" id="registerLabelLogin">
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
              <li id="hiddenLine">
                <p className={formIncomplete ? "visible formComment" : "hidden formComment"}>Form is incomplete</p>
              </li>
              <li className="submitButton">
                <Link to="/Home"><input type="submit" value="Submit" disabled={formIncomplete && "true"} /></Link>
              </li>
            </form>
                        </li>
                    </ul>
                </div>
            </div>
            <Switch>
              <Route exact path="/Home">
                <Home />
              </Route>
            </Switch>
        </Router>
      </>
  );
}

export default Login;
