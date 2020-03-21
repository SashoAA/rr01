import { createStore, compose } from 'redux';

const initialState = {
    count: 1
};

const reducer = (state = initialState, action) => {
    console.log('reducer running', action);
    switch (action.type) {
        case "INCREMENT":
            return Object.assign({}, state, { count: state.count + 1 });
        default:
            return state;
    }
}

const store = createStore(reducer, compose(window.devToolsExtension ? window.devToolsExtension() : f => f));

export default store;