import { createStore } from 'redux';

const initalState = {
  whoToGreet: '',
  number: 0,
  nightMode: '',
};

const reducer = (state = initalState, action={}) => {
  switch(action.type){
      case 'SET_WHO_TO_GREET':
        return {...state, whoToGreet: action.payload}
      case 'SET_NUMBER':
          return {...state, number: action.payload}
      case 'SET_NIGHT_MODE':
        return {...state, nightMode: !state.nightMode}
      default:
        return state;
  }   
}

export const store = createStore(reducer);