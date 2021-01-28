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
        <>
            <Router>
                <Navbar/>
                <main className="content">
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/about' exact component={About}/>
                        <Route path='/my-work' component={MyWork}/>
                        <Route path='/contact' component={Contact}/>
                    </Switch>
                </main>
            </Router>
        </>
    );
}

export default App;
