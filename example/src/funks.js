import {store} from './redux/reducer';
import {connect} from '@enzee/redux-funk';

let a = 0;

const backgroundColor = state => {return {backgroundColor : state.nightMode ? "black" : "white"}};
const textColor = state => {return {color : state.nightMode ? "white" : "black"}};
const nightModeLabel = state => state.nightMode ? "Turn the sun on! " : "I want the night! ";
const greeting = state => state.whoToGreet ? `Hi ${state.whoToGreet}` : "";
const randomCalc = (state, secondValue = 1) => state.number * secondValue;

const mapStateToFuncs = retrieve => ({
    backgroundColor: retrieve(backgroundColor),
    textColor: retrieve(textColor),
    nightModeLabel: retrieve(nightModeLabel),
    greeting: retrieve(greeting),
    randomCalc: retrieve(randomCalc),
})

export default connect(store)(mapStateToFuncs);