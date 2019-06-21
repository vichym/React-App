import React from 'react'

const summaryBar = (props) => {

    return (
        <div>
            <span className="badge badge-pill badge-secondary m-5"> Total Item:  </span>
            <span className="badge badge-pill badge-primary m-lg-1"> {props.totalCount} </span>
        </div>
    )
};
export default summaryBar;