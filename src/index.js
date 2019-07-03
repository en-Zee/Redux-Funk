const connect = (store) => {
    return (mapStateToFuncs) => {
        let retrieve = (func) =>{
            let wrapper = () => {
                let currentState = store.getState();
                return func(currentState)
            }
            store.subscribe(wrapper)
            return wrapper;
        }
        return mapStateToFuncs(retrieve)
    }
}
export { connect }