import React, {Component} from "react";

// eslint-disable-next-line react/require-render-return
class Product extends Component {

    // one way to writing CSS styling in react
    style = {
        fontSize: 15,
        fontWeight: "bold",
        padding: 20
    };

    // 2nd way to assign the style using bootstrap.
    // Conditional formatting: I can also just write this function inline the render method
    formatCountClass() {
        let classes = "badge m-2 badge-";
        classes += this.props.product.value === 0 ? "warning" : "primary";
        return classes;
    };

    // Conditional texting
    formatCountText() {
        const value = this.props.product.value;
        return value === 0 ? "Zero" : value;
    }

    formatDescription() {
        return !this.props.product.description && "none";
    }

    render() {
        return (
            <div>
                <img src={this.props.product.imageUrl}/>
                <h3>Product ID: {this.props.product.id}</h3>
                <p style={{display: this.formatDescription()}}>{this.props.product.description}</p>

                <span style={this.style}> Count: </span>
                <span className={this.formatCountClass()}> {this.formatCountText()}</span>
                <button
                    onClick={() => this.props.onIncrement(this.props.product)}
                    className={"btn-sm m-3 btn-primary"}> Increment
                </button>

                <button
                    onClick={() => this.props.onDelete(this.props.product.id)}
                    className={"btn-sm m-3 btn-danger"}>
                    Delete
                </button>
            </div>
        )
    }
}

export default Product;
