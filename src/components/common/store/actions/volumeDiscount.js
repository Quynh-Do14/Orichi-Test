import * as types from '../../reducer'

export const volumeDicount = data => {
    return {
        type: types.VOLUMEDISCOUNT,
        favorite: data,
    };
};
