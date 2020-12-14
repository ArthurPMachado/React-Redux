import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
  numeros: function(state, action) {
    const { type, payload } = action;

    switch (type) {
      case 'NUM_MIN_ALTERADO':
        return {
          ...state,
          min: payload
        }
      case 'NUM_MAX_ALTERADO':
        return {
          ...state,
          max: payload
        }
      default:
        return {
          min: 7,
          max: 31
        }
    }
  }
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;