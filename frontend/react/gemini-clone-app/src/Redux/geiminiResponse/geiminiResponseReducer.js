const initialState = {
  loading: false,
  currentResponse: "",
  error: "false",
  history: [],
  inputValue: "",
  showResualt: false,
};
const geiminiResponseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REQ":
      return {
        ...state,
        loading: true,
        showResualt: true,
        inputValue: action.inputValue,
      };
    case "FETCH_SUCCESS":
      const newElement = [...state.history];
      newElement.push(action.payload);
      return {
        ...state,
        loading: false,
        error: "false",
        currentResponse: action.payload,
        history: newElement,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        error: action.payload,
        currentResponse: "",
        loading: false,
      };
    case "NEW_CHAT":
      return {
        ...state,
        loading: false,
        showResualt: false,
      };
    default:
      return state;
  }
};

export default geiminiResponseReducer;
