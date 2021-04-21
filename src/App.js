import React from 'react';
import {Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import ExercisesList from './Components/ExercisesList';
import EditExercise from './Components/EditExercise';
import CreateExercise from './Components/CreateExercise';
import CreateUser from './Components/CreateUser';

const App = () => {
  return (
    <>
    <h1>This is my exercise tracker</h1>
      <Navbar />
      <Route path='/' exact component={ExercisesList} />
      <Route path='/edit/:id' component={EditExercise} />
      <Route path='/create' component={CreateExercise} />
      <Route path='/user' component={CreateUser} />
    </>
  );
}

export default App;
