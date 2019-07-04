import chai from 'chai';
import {connect} from '../src/index';
import {createStore} from 'redux';

const setHello = (payload) => {
    return {
        type: 'SET_HELLO',
        payload: payload
    }
};

const initialState = {
    hello: ""
}
  
const testReducer = (state = initialState, action={}) => {
    switch(action.type){
        case 'SET_HELLO':
            return {hello: action.payload};
            break;
        default:
        return state;
    }   
}

const store = createStore(testReducer)

const greetWho = (state) => "hello" + state.hello

const greetWhoWithExtraParams = (state, customGreet, punctuation) => customGreet + state.hello + punctuation

const mapStateToFuncs = retrieve => ({
    greetWho: retrieve(greetWho),
    greetWhoWithExtraParams: retrieve(greetWhoWithExtraParams),
})

connect(store)(mapStateToFuncs);

describe('redux funk', () => {
  const subscribedFunctions = connect(store)(mapStateToFuncs);

  it('must return a list of functions', () => {
    chai.assert.isObject(subscribedFunctions);
  });

  it('must contain only functions', () => {
    for(let func in subscribedFunctions){
        chai.assert.isFunction(subscribedFunctions[func]);
    }
  });

  const connectedgreetWho = subscribedFunctions.greetWho;
  it('must return "helloWorld" after action is dispatched', () => {
        store.dispatch(setHello('World'))
        chai.assert.equal(connectedgreetWho(), 'helloWorld');
  });

  it('must return "helloMoto" after action is dispatched', () => {
    store.dispatch(setHello('Moto'))
    chai.assert.equal(connectedgreetWho(), 'helloMoto');
  });

  const connectedgreetWhoWithExtraParams = subscribedFunctions.greetWhoWithExtraParams;
  it('must return "Greetings MotoWorld!" after action is dispatched', () => {
    store.dispatch(setHello('MotoWorld'))
    chai.assert.equal(connectedgreetWhoWithExtraParams("Greetings ", "!"), 'Greetings MotoWorld!');
  });

});