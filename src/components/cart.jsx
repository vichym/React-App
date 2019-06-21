import React, {Component} from 'react';
import Counters from "./counters"
import SummaryBar from "./summaryBar"

class Cart extends Component {
    state = {
        list: [
            {
                id: 1,
                value: 0,
                imageUrl: "https://picsum.photos/200",
                description: "Description Text: dfhjkahsdfljhasdjklfhaskjdfhkjasdhfasdfjhlas" +
                    "fasdfasdfaasdfasdfasdfasdfasdfasds"
            },
            {id: 2, value: 0, imageUrl: "http://placekitten.com/202"},
            {id: 3, value: 0, imageUrl: "http://placekitten.com/201"},
            {id: 4, value: 0, imageUrl: "http://placekitten.com/200"},
            {id: 5, value: 0, imageUrl: "https://picsum.photos/200"}
        ]
    };

    handleIncrement = (counter) => {
        const list = [...this.state.list];
        const index = list.indexOf(counter);
        list[index] = {...counter}; // Why do we need to clone the object and not just change the value of the object. ANSWER: to preserve the state object
        list[index].value = list[index].value + 1;
        this.setState({list});
        console.log(list[index]);
    };

    handleDelete = (counterId) => {
        const list = this.state.list.filter(item => item.id !== counterId);
        this.setState({list})
    };

    handleReset = () => {
        console.log(this.state.list);
        const list = this.state.list.map(item => {
            item.value = 0;
            return item;
        });
        this.setState({list});
        console.log(list)
    };

    render() {
        return (
            <div>
                <main id="counter-list">
                    <SummaryBar totalCount={this.state.list.filter(item => item.value > 0).length}/>

                    <Counters
                        list={this.state.list}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        onReset={this.handleReset}
                    />
                </main>

            </div>
        );
    }
}

export default Cart;