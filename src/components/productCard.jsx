import React from 'react'

const ProductCard = (props) => {
    return (
        <div>
            <div className="card m-2 w-25 text-left">
                <div className="card-body">
                    <h5 className="card-title"> {props.data.name} </h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.data.model}</h6>

                    <ul className="card-text ul-no-bullet">
                        <li>Crew: {props.data.crew}</li>
                        <li>Passengers: {props.data.passengers}</li>
                        <li>Cargo Capacity: {props.data.cargo_capacity}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default ProductCard