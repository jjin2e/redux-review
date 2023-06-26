const initialState = [];

const reviews = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_REVIEW":
      return [...state, action.payload];

    case "DELETE_REVIEW":
      return state.filter((review) => review.id !== action.payload);
    default:
      return state;
  }
};

export default reviews;
