import React from "react";
import LoginButton from "./loginButton";
import ProductDirectory from "./productDirectory";
import Cart from "./cart"

const Navbar = (props) => {

    return (
        <React.Fragment>

            <div className="container">
                <div className="row align-content-center">
                    <h1> Welcome to our App</h1>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <button className="btn-lg btn-info m-3 w-100" name="Directory"
                                onClick={() => props.onClick(<ProductDirectory/>)}>Directory
                        </button>
                    </div>
                    <div className="col-sm">
                        <button className="btn-lg btn-light m-3 w-100" name="Cart"
                                onClick={() => props.onClick(<Cart/>)}>Cart
                        </button>
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