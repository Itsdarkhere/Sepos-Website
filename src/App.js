import './App.css';
import Nav from './Nav/Nav.js'
import MainPage from './MainPage/MainPage.js'
import ProjectPage from './ProjectPage/ProjectPage.js'
import { Switch, Route, useLocation } from 'react-router-dom'
import { ProjectArray } from './Arrays/Arrays'
import React from 'react'

function App() { 


  //this needs to be placed in a variable since its retuns and cannot be used directly in the .map
  const projectArray = ProjectArray();

  const loc = useLocation()

  return (
    <div className="App" id="App">
      <Nav/>
      <Switch location={loc} key={loc.pathname}>
        {projectArray.map((project, index) => {
          //Makes each project their own page
          return (
            <Route path={project.projectPage} key={index}>
              <ProjectPage arrayObject={project} projectIndex={index}/>
            </Route>
          )
        })}
        <Route path="/">
          <MainPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;