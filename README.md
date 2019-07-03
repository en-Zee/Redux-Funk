Redux Funk
=============

```js
npm install redux-funk
```

```js
yarn add redux-funk
```

## Importing and usage

```js
import {connect} from 'redux-funk';
import {store} from '../where/you/used/createStore';

const greetWho = (state) => "hello" + state.hello;

const mapStateToFuncs = retrieve => ({
    greetWho: retrieve(greetWho)
})

//Usage 1
connectedFunctions = connect(store)(mapStateToFuncs);
connectedFunctions.greetWho();

//Usage 2
export default connect(store)(mapStateToFuncs)
import {greetWho} from './connectedFunctions';
greetWho();
```

## Why Do I Need This?

This is my solution to getting data from the Redux store as it updates. There are certain times where a dumb component might need data from the Redux store, but is nested too deeply to pass the data along using props. Redux-Funk is just a thin wrapper that subscribes to state changes from withing the redux storemaking it immensely useful for grabbing variables from your syore to serve as globals as you send dispatched actions.

## Motivation

Redux-Funk allows setting up global traits of an app super easy. You can easily set up night mode or app-wide settings without having to drill down props to the component that needs them. An example project using React-Redux can be found in examples folder. This module somewhat combines elements of both React-Redux and Redux-Thunk. The usage is similar to the former while the style of usage is similar to the latter.

## Why Funk?

You subscribe functions, which can be shortened to func and a package named thunk already exists and this works similar but not really, so it's all funky.

## License

MIT