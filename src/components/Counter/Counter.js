import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
    console.log('render', props);
    return (
        <div>
            <h1>
                WELCOME
            </h1>
            <p>Counter: {props.count}</p>
            <button onClick={props.increment}>Increment</button>
        </div>
    )
}

function mapStateToProps(state) {
    console.log('mapStateToProps', state)
    return {
        count: state.count
    }
}

function mapDispatchToProps(dispatch) {
    console.log('dispatching', dispatch);
    return {
        increment : () => {
            console.log("clicking");
            const action = { type : "INCREMENT"};
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);