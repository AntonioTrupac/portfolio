import React from 'react';
import Navbar from './components/navbar/navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './stylesheets/app.scss';

//pages
import About from "./pages/About";
import MyWork from "./pages/MyWork";
import Contact from "./pages/Contact";
import Home from "./pages/Home";


function App() {
    return (
        <div>
            <Router>
                    <Navbar/>
                    <main className="content">
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/about' component={About}/>
                            <Route exact path='/my-work' component={MyWork}/>
                            <Route exact path='/contact' component={Contact}/>
                        </Switch>
                    </main>
            </Router>
        </div>
    );
}

export default App;
