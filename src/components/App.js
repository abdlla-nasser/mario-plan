import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './layout/NavBar'
import Dashboard from './dashboard/Dashboard'
import ProjectDetails from './projects/ProjectDetails'
import ProjectCreate from './projects/ProjectCreate'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import CreateComment from './projects/CreateComment';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar />
      <Switch>
      <Route path="/" exact component={Dashboard}/>
      <Route path="/project/:id" exact component={ProjectDetails}/>
      <Route path="/signin" exact component={SignIn}/>
      <Route path="/signUp" exact component={SignUp}/>
      <Route path="/create" exact component={ProjectCreate}/>
      <Route path="/comment/:id" exact component={CreateComment}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
