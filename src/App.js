import './App.css';
import Nav from './Nav/Nav.js'
import MainPage from './MainPage/MainPage.js'
import ProjectPage from './ProjectPage/ProjectPage.js'
import { useInView } from 'react-intersection-observer'
import { Switch, Route, useLocation } from 'react-router-dom'
import { ProjectArray } from './Arrays/Arrays'
import React from 'react'

function App() { 


  //this needs to be placed in a variable since its retuns and cannot be used directly in the .map
  const projectArray = ProjectArray();

  const loc = useLocation()

  const [ refP, projectsInView ] = useInView();
  const [ refO, osakkuusInView ] = useInView();
  const [ refC, contactsInView ] = useInView();

  return (
    <div className="App" id="App">
      <Nav projectsInView={projectsInView} osakkuusInView={osakkuusInView} contactsInView={contactsInView}/>
      <Switch location={loc} key={loc.pathname}>
        {projectArray.map((project, index) => {
          //Makes each project their own page
          return (
            <Route path={project.projectPage} key={index}>
              <ProjectPage arrayObject={project} contactsInView={contactsInView} projectIndex={index}/>
            </Route>
          )
        })}
        <Route path="/">
          <MainPage refs={[refP, refO, refC]} contactsInView={contactsInView}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;