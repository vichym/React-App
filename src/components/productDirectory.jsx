import React from 'react'
import ProductCard from "./productCard";

class ProductDirectory extends React.Component {
    state = {
        dataArray: [],
        fetching: true,
    };

    // Did get data
    componentDidMount(): void {
        fetch("https://swapi.co/api/starships/")
            .then(response => response.json())
            .then((resp => {
                this.setState({dataArray: resp.results, fetching: false})
            }));
    }

    // Works !!!
    createProductCards() {
        let list = [...this.state.dataArray];
        return (
            <div className="table-bordered align-items-center">
                {list.map(data =>
                    <ProductCard key={data.name}
                                 data={data}/>)}
            </div>
        );
    }

    render() {
        let text = this.state.fetching && "Fetching...";
        // works !!!
        return (
            <div>
                {text}
                {this.createProductCards()}
            </div>
        )
    }
}

export default ProductDirectory