export default (state, action) => {
  switch (action.type) {
    case "ADD_ANSWER":
      let idx = state.QuestionSet.findIndex(
        (item) => item.id === action.payload.id
      );
      state.QuestionSet.splice(idx, 1, action.payload);
      return {
        ...state,
        QuestionSet: [...state.QuestionSet],
      };
    case "FETCH_QUESTION":
      console.log(
        state.QuestionSet.find((item) => item.id === action.payload),
        action.payload
      );
      return {
        ...state,
        selectedQ: state.QuestionSet.find((item) => item.id === action.payload),
      };
    default:
      return state;
  }
};
