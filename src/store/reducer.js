import * as actionTypes from "./actionTypes";
const initialState = {
    age: 30,
    posts: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENTASYNC:
            return {...state, age: state.age + action.payload};
        case actionTypes.DECREMENT:
            return {...state, age: state.age -1};
        case actionTypes.GETALLPOSTSSUCCESS:
            return {...state, posts: action.payload};
    }
    return state;
};

export default rootReducer;
