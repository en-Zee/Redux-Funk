export const setWhoToGreet = (payload) => {
    return {
        type: 'SET_WHO_TO_GREET',
        payload: payload
    }
};

export const setNumber = (payload) => {
    return {
        type: 'SET_NUMBER',
        payload: payload
    }
};

export const setNightMode = () => {
    return {
        type: 'SET_NIGHT_MODE'
    }
};