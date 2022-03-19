import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./App.sass";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
