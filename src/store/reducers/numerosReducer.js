const initialState = {
  min: 7,
  max: 31
}

function numerosReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'NUM_MIN_ALTERADO':
      return {
        ...state,
        min: payload
      };
    case 'NUM_MAX_ALTERADO':
      return {
        ...state,
        max: payload
      };
    default:
      return state;
  }
}

export default numerosReducer;