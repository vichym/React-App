import React from 'react';
import Product from './product';


const Counters = (props) => {
    // object destruction : to shorten the long similar code. Instead of saying props.list => list.
    const {list, onDelete, onIncrement, onReset} = props;

    return (
        <div>
            <ul>
                {list.map(product =>
                    <div>
                        <Product
                            key={product.id}
                            // 'selected' is being passed as a new parameter which can be used in the children 'counter' object in counter.jsx by calling 'this.prop.selected'
                            selected={true}

                            // we can simply delete the assignment of 'counter.id', and 'counter.value' if we just pass the 'counter' object to the prop. when we need to use id or value, we can simply call 'counter.id' or 'counter.value'
                            product={product}

                            // 'onDelete' parameter pass 'handleDelete()' function of the parent object to the child object using props so that when the delete button of Counter object is called, it can called parent method to delete the children object form the parent's list.
                            onDelete={onDelete}

                            onIncrement={onIncrement}/>

                    </div>
                )}

            </ul>
            <button
                onClick={onReset}
                className={"btn-sm m-3 btn-warning"}>
                Reset
            </button>
        </div>
    )
};


export default Counters;