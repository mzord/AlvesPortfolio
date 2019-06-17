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
      <div className="App">
        <div className="ship-loader">

          <Header />
            <Router>
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
                            <Route exact path="/" component={AboutMe} />
                            <Route path={process.env.PUBLIC_URL + '/'} component={AboutMe} />
                            <Route path="/contact" component={ContactMe} />
                            <Route path="/projects" component={Projects} />
                          </Switch>

                      </CSSTransition>
                    </TransitionGroup>
                    )} />
                    </Body>             
            </div>
          </Router>
        </div>
      </div>
    )
  }




export default App;
