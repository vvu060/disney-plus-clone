import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/detail/:id" exact component={Detail} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
