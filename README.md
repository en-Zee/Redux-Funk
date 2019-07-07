Redux Funk
=============

```js
npm install @enzee/redux-funk
```

```js
yarn add @enzee/redux-funk
```

## Importing and usage

```js
import {connect} from 'redux-funk';
import {store} from '../where/you/used/createStore';

const greetWho = (state) => "hello" + state.hello;

const mapStateToFuncs = retrieve => ({
    greetWho: retrieve(greetWho)
    //state: state
})

//Usage 1
connectedFunctions = connect(store)(mapStateToFuncs);
connectedFunctions.greetWho();

//Usage 2
export default connect(store)(mapStateToFuncs)
import {greetWho} from './connectedFunctions';
greetWho();
```

## How does it work?

The function ```mapStateToFuncs``` recieves the ```retrieve``` function as an argument and you use it to wrap it around the functions. You must wrap all functions that you want connected and they **must** all accept the parameter ```state``` as the first parameter! You can then access that state parameter within your function as you see fit. In the highest order component, the Redux store passes down your variables as props and calls for a re-render, which then uses the values returned by your funks.  You can renamed your exports within the ```mapStateToFuncs``` as well. 


## Why Do I Need This?

This is my solution to getting data from the Redux store as it updates. There are certain times where a dumb component might need data from the Redux store, but is nested too deeply to pass the data along using props withou causing a mess. Redux-Funk is just a thin wrapper that subscribes to state changes from withing the redux storemaking it immensely useful for grabbing variables from your syore to serve as globals as you send dispatched actions. In all complete honesty, you can replicate most if not all of the functionality yourself by 

1)passing down props by drilling down the variables down to the component that needs it or 
2)connecting each component to the Redux State wherever they need props.

# So why use this?
Redux-Funk was made to for reusability. Similar to how a Redux store is an extension of the concept of a component state, this is an attempt to extend the concept of component props using the Redux state. This builds upon React Redux and allows you to spread and reuse similar information across multiple components. Funks can be reused 100 times, but only subscribed once, making it easier for you to know which part of the state is being used and ensuring the operation done on the data is the same each and every time.

## Motivation

Redux-Funk allows setting up global traits of an app super easy. You can easily set up night mode or app-wide settings without having to drill down props to the component that needs them. An example project using React-Redux can be found in examples folder. This module somewhat combines elements of both React-Redux and Redux-Thunk. The usage is similar to the former while the style of usage is similar to the latter. It's moreso an extensiof of React Redux that requires less boilerplate and connecting and allows for more extensibility and reuseability.

## Why is it named Funk?

You subscribe functions, which can be shortened to func and a package named thunk already exists and this works similar but not really, so it's all funky.

## Future

Feel free to contribute, complain to me about bugs or bug me with complaints. The next step is to add a standalone way to connect to the Redux store without React Redux, and potentitally memoization.

## License

MIT