import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import "./App.css"
import Navbar from "./components/navbar"
import Directory from "./components/Directory/productDirectory"
import Cart from "./components/Cart/cart";

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <header className="App-header">
                        <Navbar/>
                    </header>
                    <hr/>
                    <main id="counter-list">

                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/directory" component={Directory}/>
                            <Route path="/cart" component={Cart}/>
                        </Switch>

                    </main>
                </Router>
            </div>
        );
    }
}

const Home = () => {
    return (
        <div>
            <h1 className="card-title">Home Page</h1>
        </div>
    )
};
export default App;
