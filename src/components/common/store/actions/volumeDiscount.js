import * as types from '../../reducer'

export const volumeDiscount = data => {
    return {
        type: types.VOLUMEDISCOUNT,
        data: data,
    };
};
