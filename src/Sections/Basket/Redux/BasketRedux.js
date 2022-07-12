export const NS = 'basket';

const INITIAL_STATE = {
    data: null,
    basket: {},
    basketSize: 0
}

export const Types = {
    SET_DATA: NS + '/set-data',
    SET_BASKET: NS + '/set-basket',
    FETCH_BASKET: NS + '/fetch-basket'
};

export const Selectors = {
    data: state => state[NS].data,
    basket: state => state[NS].basket,
    basketSize: state => state[NS].basketSize
};

export const ActionCreators = {
    setData: (data) => ({
        type: Types.SET_DATA,
        payload: data
    }),
    setBasket: (data) => ({
        type: Types.SET_BASKET,
        payload: data
    }),
    addBasket: (data) => ({
        type: Types.FETCH_BASKET,
        payload: data
    })
};

export const Reducer = (state = INITIAL_STATE, action) => {
    console.log('action payload:', action.type)
    switch (action.type) {
        case Types.SET_DATA:
            return {
                ...state,
                data: action.payload
            }
        case Types.SET_BASKET:
            return {
                ...state,
                basket: action.payload.data,
                basketSize: action.payload.size + 1
            }
        case Types.FETCH_BASKET:
            return {
                ...state
            }
        default:
            return state;
    }
}