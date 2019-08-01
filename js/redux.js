function createStore(reducer, initState) {
  let state = initState || {};
  const listeners = [];
  function subscribe(func) {
    listeners.push(func);
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(item => item());
  }

  function getState() {
    return state;
  }

  return {
    subscribe,
    dispatch,
    getState,
  };
}

function combineReducer(reducer) {
  const reduceKeys = Object.keys(reducer);
  return (state, action) => {
    
  };
}
