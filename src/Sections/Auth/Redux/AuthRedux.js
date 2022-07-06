export const NS = 'auth';

const INITIAL_STATE = {
    data: null,
    loginData: null
}

export const Types = {
    SET_DATA: NS + '/set-data',
    SET_TOKEN: NS + '/set-token',
    FETCH_LOGIN: NS + '/fetch-login'
};

export const Selectors = {
    data: state => state[NS].data,
    loginData: state => state[NS].loginData
};

export const ActionCreators = {
    setData: (data) => ({
        type: Types.SET_DATA,
        payload: data
    }),
    setToken: (data) => ({
        type: Types.SET_TOKEN,
        payload: data
    }),
    fetchLogin: (data) => ({
        type: Types.FETCH_LOGIN,
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
        case Types.SET_TOKEN:
            return {
                ...state,
                loginData: action.payload
            }
        case Types.FETCH_LOGIN:
            return {
                ...state
            }
        default:
            return state;
    }
}