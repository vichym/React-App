import React from 'react'
import SpaceShip from "./spaceship";

class SpaceShipDirectory extends React.Component {
    state = {
        spaceShips: [],
        fetching: true
    };

    // Did get data
    componentDidMount(): void {
        console.log("Start");
        let resultList = [];
        fetch("https://swapi.co/api/starships/")
            .then(response => response.json())
            .then(resp => {
                resp.results.forEach(result => {
                    resultList.push(result)
                })
            });
        this.setState({spaceShips: resultList, fetching: false});
        console.log("Stop");
    }

    // Works !!!
    createSpaceShipCard() {
        return (
            <div className="table-bordered align-items-center">
                {this.state.spaceShips.map(spaceship =>
                    <SpaceShip key={spaceship.name}
                               spaceship={spaceship}/>)}
            </div>
        );
    }

    render() {
        let text = this.state.fetching && "Fetching...";

        // works !!!
        return (
            <div>
                {this.createSpaceShipCard()}
            </div>
        )
    }
}

export default SpaceShipDirectory