import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Header from './component/Header'
import SideMenu from './component/SideMenu'
import Body from './component/Body'
import AboutMe from './component/AboutMe';
import ContactMe from './component/ContactMe';
import Projects from './component/Projects';
import Drawer from './component/Drawer'
import SideButton from './component/SideButton'
import {CSSTransition, TransitionGroup} from 'react-transition-group'


const App = (props) => {
  const [open, setOpen] = useState(false)
  const handleDrawer = () => {
    if(open) {
      setOpen(false)
    }
    else {
      setOpen(true)
    }
  }
    return (
      <div className="App">
        <div className="ship-loader">
          {/* <button 
            type="button" 
            onClick={handleDrawer}>
              Clique aqui
          </button> */}
          <button id="menu-button" type="button" onClick={handleDrawer}>
            <SideButton/>
          </button>

          <Header />
          

      
            <Router>
            <CSSTransition 
              in={open} 
              timeout={300} 
              classNames="drawer">

              <Drawer>
                <div>
                  <ul>
                    <li onClick={handleDrawer}><Link to="/">About Me</Link></li>
                    <li onClick={handleDrawer}><Link to="/projects">Projects</Link></li>
                    <li onClick={handleDrawer}><Link to="/contact">Contact Me</Link></li>
                  </ul>
                  <button type="button" onClick={handleDrawer}>Close</button>
                </div>
              </Drawer>

            </CSSTransition>
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
