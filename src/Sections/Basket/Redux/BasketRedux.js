export const NS = 'basket';

const INITIAL_STATE = {
    data: null
}

export const Types = {
    SET_DATA: NS + '/set-data'
};

export const Selectors = {
    data: state => state[NS].data
};

export const ActionCreators = {
    setData: (data) => ({
        type: Types.SET_DATA,
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
        default:
            return state;
    }
}