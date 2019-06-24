import React from 'react';
// import Cart from './components/cart'

import ProductDirectory from "./components/productDirectory";
import "./App.css"
import Navbar from "./components/navbar";

class App extends React.Component {
    state = {
        currentPage: <ProductDirectory/>
    };

    handleClick = (props) => {
        this.setState({currentPage: props})
    };


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Navbar onClick={this.handleClick}/>
                </header>
                <hr/>
                <main id="counter-list">
                    {this.state.currentPage}
                </main>
            </div>
        );
    }

}
export default App;
