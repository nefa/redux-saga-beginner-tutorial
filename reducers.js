let initialState = {
  counter: 0,
  data:{},
  dataReady:false
}

function handleFetch(state) {
  return Object.assign({}, state, {data: state.data, dataReady: true})
}

export /*default*/ function sagaInterceptor(state, action) {
  return mainReducer(action.data, action);
}

export default function mainReducer(state = initialState, action) {
  console.log("state / action in store ==>", state, action);
  
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, { counter: ++state.counter }) //eslint - disable - line no - use - before - define
    
    // case 'INCREMENT_IF_ODD':
    //   return (state % 2 !== 0) ? state + 1 : state;

    case 'DECREMENT':
      return Object.assign({}, state, { counter: --state.counter })/*state + 1;*/

    case 'FETCH_1':
      return handleFetch(action/*as state*/);

    default:
      return state;
  }
}
