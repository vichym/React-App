import React from 'react';
// import Cart from './components/cart'
import LoginButton from './components/loginButton'
import SpaceShipDirectory from "./components/spaceShipDirectory";
import "./App.css"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1> Welcome to our App</h1>
                <LoginButton/>
            </header>
            <hr/>
            <main id="counter-list">
                <SpaceShipDirectory/>
            </main>
        </div>
    );
}

export default App;
