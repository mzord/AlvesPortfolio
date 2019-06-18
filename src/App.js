import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './component/Header/Header'
import SideMenu from './component/SideMenu/SideMenu'
import Body from './component/Body/Body'
import AboutMe from './component/AboutMe/AboutMe';
import ContactMe from './component/ContactMe/ContactMe';
import Projects from './component/Projects/Projects';
import {CSSTransition, TransitionGroup} from 'react-transition-group'


const App = () => {
    return (
      <Router>
      <div className="App">
          <Header />
            <div className="content">
              <SideMenu />
                    <Body>
                    <Route render={({location}) => (
                      <TransitionGroup> 
                      <CSSTransition
                        key={location.key}
                        timeout={300}
                        classNames="textContent">
    
                          <Switch location={location}>
                            <Route exact path="/AlvesPortfolio" component={AboutMe} />
                            <Route exact path={process.env.PUBLIC_URL + '/'} component={AboutMe} />
                            <Route path="/AlvesPortfolio/contact" component={ContactMe} />
                            <Route path="/AlvesPortfolio/projects" component={Projects} />
                          </Switch>

                      </CSSTransition>
                    </TransitionGroup>
                    )} />
                    </Body>             
            </div>
        </div>
      </Router>
    )
  }




export default App;
