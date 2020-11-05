const defaultState = { count: 0 };

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};
