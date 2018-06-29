import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import Counter from './Counter';
import reducer from './reducers';
import rootSaga, { helloSaga }  from './sagas';


const action = type => store.dispatch({type});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

function render() {
  ReactDOM.render(
    <Counter
      data={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() =>  action('INCREMENT_ASYNC')}
      onFetch1={() => action('FETCH_REQUESTED')}/>,
    document.getElementById('root')
  )
}

render();
store.subscribe(render);
