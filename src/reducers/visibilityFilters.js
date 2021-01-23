const initialState = "all";
const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER": {
      return action.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;