import React from "react";
import LoginButton from "./loginButton";
import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <React.Fragment>

            <div className="container">
                <div className="row align-content-center">
                    <h1> Welcome to our App</h1>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <Link to="/directory">
                            <button className="btn-lg btn-info m-3 w-100">Directory
                            </button>
                        </Link>
                    </div>
                    <div className="col-sm">
                        <Link to="/cart">
                            <button className="btn-lg btn-light m-3 w-100">Cart
                            </button>
                        </Link>
                    </div>
                    <div className="col-sm">
                        <LoginButton/>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )
};


export default Navbar