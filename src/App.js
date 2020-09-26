import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Business from "./components/Business";
import Team from "./components/Team";
import Partner from "./components/Partner";
import Contact from "./components/Contact";
import "./App.css"

function App(){
  return (
  <>
  <HashRouter>
    <Navigation/>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/business" component={Business} />
    <Route path="/team" component={Team} />
    <Route path="/partner" component={Partner} />
    <Route path="/contact" component={Contact} />
  
    <Business/>
    <Team/>
    <Partner/>
    <Contact/>
  </HashRouter>
  <footer>햐</footer>
  </>
  
  );
}

export default App;
