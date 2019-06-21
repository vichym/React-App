import React, {Component} from 'react'

class LoginButton extends Component {
    state = {
        login: false
    }

    handleClick = () => {
        this.setState({login: !this.state.login})
    };

    render() {
        let buttonText = this.state.login ? "Log out" : "Log in";
        let buttonStyle = this.state.login ? "btn-md m-1 btn-success" : "btn-md m-1 btn-warning";
        return (
            <button className={buttonStyle}
                    onClick={this.handleClick}>
                {buttonText}
            </button>
        );
    }
}

export default LoginButton