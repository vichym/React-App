import React from 'react'

const SpaceShip = (props) => {
    return (
        <div>
            <div className="card m-2 w-25 text-left">
                <div className="card-body">
                    <h5 className="card-title"> {props.spaceship.name} </h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.spaceship.model}</h6>

                    <ul className="card-text ul-no-bullet">
                        <li>Crew: {props.spaceship.crew}</li>
                        <li>Passengers: {props.spaceship.passengers}</li>
                        <li>Cargo Capacity: {props.spaceship.cargo_capacity}</li>
                    </ul>

                </div>
            </div>
        </div>
    )
};

export default SpaceShip