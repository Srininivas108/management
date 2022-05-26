import React from 'react';
import './App.css';
import  "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from './components/Layout/Navbar';
import Teacher from "./components/pages/Teacher";
import AddTeacher from "./components/teachers/AddTeacher";
import EditTeacher from "./components/teachers/EditTeacher";
import ViewTeacher from "./components/teachers/ViewTeacher";
import Student from "./components/pages/Student";
import AddStudent from "./components/students/AddStudent";
import EditStudent from "./components/students/EditStudent";
import ViewStudent from "./components/students/ViewStudent";

import {
  Route,
  Switch
} from "react-router-dom";


function App(props) {
  return (
 
      <div className="App">
         <Navbar/>
        <Switch>
          <Route exact path="/"   component={Home} />
          <Route exact path="/teacher" component={Teacher} />
          <Route exact path="/about"  component={About} />
          <Route exact path="/contact"   component={Contact} />
          <Route exact path="/teachers/add" component={AddTeacher} />
          <Route exact path="/teachers/edit/:id" component={EditTeacher} />
          <Route exact path="/teachers/:id" component={ViewTeacher} />
          <Route exact path="/student" component={Student} />
          <Route exact path="/students/add" component={AddStudent} />
          <Route exact path="/students/edit/:id" component={EditStudent} />
          <Route exact path="/students/:id" component={ViewStudent} />

        </Switch>
      </div>
   
  );
}

export default App;
