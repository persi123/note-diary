import React from 'react';
import './App.css';
import Home from "./components/home";
import { BrowserRouter, Route, Link } from "react-router-dom";
import note from './components/note';
import Demo from './components/Demo';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     {/* <Home/> */}
     <Route path="/"  exact component={Home} />
     <Route path="/demo" component={Demo}/>
     <Route path="/note/:id" component={note}/>
    </div>
    </BrowserRouter>
  );
}
export default App;
