export const NS = 'basket';

const INITIAL_STATE = {
    data: null,
    basket: {},
    basketSize: 0
}

export const Types = {
    SET_DATA: NS + '/set-data',
    SET_BASKET: NS + '/set-basket',
    FETCH_BASKET: NS + '/fetch-basket',
    ADD_PRODUCT: NS + '/add-product'
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
    }),
    addProduct: (data) => ({
        type: Types.ADD_PRODUCT,
        payload: data
    })
};

export const Reducer = (state = INITIAL_STATE, action) => {
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
                basketSize: action.payload.size
            }
        case Types.FETCH_BASKET:
            return {
                ...state
            }
        case Types.ADD_PRODUCT:
            return {
                ...state
            }
        default:
            return state;
    }
}