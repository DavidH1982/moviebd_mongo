import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Login from "./LoginUser";


function Home() {
    const baseURL = "http://localhost/home"

    const [state, setState] = useState("");

    return (
        <>
        <div className="blankBG"></div>
        <div className="homeScreen">
            <Router>
                <div className="film">
                    <Link to="/Profile" id="profilelink" className="navlink">Profile</Link>
                    <Link to="/Favourites" id="favlink" className="navlink">Favourites</Link>
                    <Link to="/AddMovie" id="addlink" className="navlink">Add a Movie</Link>
                    <Link to="/Search" id="addlink" className="navlink">Search</Link>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <Link to="/Login" id="logoutlink" className="navlink">Log Out</Link>
                </div>
                <ul className="moviedbcards">
                    <li className="infocard"></li>
                    <li className="infocard"></li>
                    <li className="infocard"></li>
                    <li className="infocard"></li>
                    <li className="infocard"></li>
                    <li className="infocard"></li>
                    <li className="infocard"></li>
                    <li className="infocard"></li>
                    <li className="infocard"></li>
                    <li className="infocard"></li>
                </ul>
                <Switch>
                    <Route exact path="/Login">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </div>
        </>
    )
}

export default Home;