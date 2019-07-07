const connect = (store) => {
    return (mapStateToFuncs) => {
        let retrieve = (func) =>{
            let wrapper = (...rest) => {
                let currentState = store.getState();
                return func(currentState, ...rest)
            }
            store.subscribe(wrapper)
            return wrapper;
        }
        return mapStateToFuncs(retrieve)
    }
}
export { connect }