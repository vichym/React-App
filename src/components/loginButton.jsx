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
        let buttonStyle = this.state.login ? "btn-lg btn-success m-3 w-100" : "btn-lg btn-danger m-3 w-100";
        return (
            <button className={buttonStyle}
                    onClick={this.handleClick}>
                {buttonText}
            </button>
        );
    }
}

export default LoginButton