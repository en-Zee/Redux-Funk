import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setWhoToGreet, setNumber, setNightMode} from './redux/actions';
import ComponentsContainer from './components/ComponentsContainer';
import funks from './funks';

class App extends Component {
  render() {
    return (
      <ComponentsContainer>
        <form>
          <label style={funks.textColor()}>Who are you? </label><input type="text" name="name" value={this.props.whoToGreet} onChange={(event)=>{this.props.setWhoToGreet(event.target.value)}}/>
          <br/>
          <label style={funks.textColor()}>Pick a number: </label><input type="number" name="number" value={this.props.number} onChange={(event)=>{this.props.setNumber(event.target.value)}}/>
          <br/>
          <label style={funks.textColor()}>{funks.nightModeLabel()}</label><input type="checkbox" name="name" onChange={this.props.setNightMode}/><br/>
        </form>
      </ComponentsContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  whoToGreet: state.whoToGreet,
  number: state.number,
  nightMode: state.nightMode,
  //state: state
})

const mapDispatchToProps = dispatch => ({
  setWhoToGreet: (name) => dispatch(setWhoToGreet(name)),
  setNumber: (number) => dispatch(setNumber(number)),
  setNightMode: (payload) => dispatch(setNightMode(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

