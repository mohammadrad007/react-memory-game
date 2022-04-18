import React from "react";
import { Link } from "react-router-dom";

import classes from "./home.module.css";
const Home = () => {
  return (
    <div className={classes.container}>
      <p>Welcome to React Memory App (RMA)</p>
      <span>if you are ready, then let start game</span>
      <Link to="levelone">go to game</Link>
    </div>
  );
};

export default Home;
