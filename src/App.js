import React from "react";
import classes from "./App.module.css";
import Main from "./Components/Main/Main";

function App() {
  return (
    <React.Fragment>
      <div className={classes.bg}></div>
      <Main></Main>
    </React.Fragment>
  );
}

export default App;
