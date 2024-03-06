import { useReducer } from 'react';
import { VOLUMEDISCOUNT } from '../../reducer';


const initialState = [
            {
            title: "",
            subTitle: "",
            label: "",
            quantity: 1,
            discountType: "",
            amount: "",
        }
];
const volumeDiscountReducer = (state = initialState, action) => {
    switch (action.type) {
        case VOLUMEDISCOUNT:
            return {
                ...state,
                dataVolumeDiscount: action.data,
            };

        default:
            return state;
    }
};

export default volumeDiscountReducer;
