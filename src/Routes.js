import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/";
import  WorkExperience from './pages/WorkExperience';
// import About from "./pages/About";
// import NotFound from "./pages/NotFound";
// import SignIn from "./pages/SignIn";

// eslint-disable-next-line
export default () => {
  return (
    <Switch>  
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/experiences">
        <WorkExperience />
      </Route> 
      {/* <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route>
        <NotFound />
      </Route> */}
    </Switch>
  );
};
