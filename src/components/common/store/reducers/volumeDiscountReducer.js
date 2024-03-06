import { useReducer } from 'react';
import { VOLUMEDISCOUNT } from '../../reducer';


const initialState = {};
const volumeDiscountReducer = (state = initialState, action) => {

    switch (action.type) {
        case VOLUMEDISCOUNT:
            return {
                ...state,
            };

        default:
            return state;
    }
};

export default volumeDiscountReducer;
