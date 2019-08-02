function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }
  let state = {};
  let listeners = [];
  function subscribe(func) {
    listeners.push(func);
    return function unsubscribe() {
      listeners = listeners.filter(item => item !== func);
    };
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(item => item());
  }
  dispatch({ type: Symbol() });

  function getState() {
    return state;
  }
  return {
    subscribe,
    dispatch,
    getState,
  };
}

function combineReducer(reducers) {
  const reduceKeys = Object.keys(reducers);
  return (state = {}, action) => {
    const newState = {};
    reduceKeys.forEach((item) => {
      newState[item] = reducers[item](state[item], action);
    });
    return newState;
  };
}

function applyMiddleware(...arg) {
  return createStore => (reducer) => {
    const store = createStore(reducer);
    let next = store.dispatch;
    arg.forEach((item) => {
      next = item(store)(next);
    });
    store.dispatch = next;
    return store;
  };
}

// test
const loggerMiddleware = store => next => (action) => {
  console.log('this state', store.getState());
  console.log('action', action);
  next(action);
  console.log('next state', store.getState());
};
