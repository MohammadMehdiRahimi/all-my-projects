const initialState = {
  currentTheme: "Light",
};
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
   
      return {
        ...state,
        currentTheme: state.currentTheme === "Light" ? "Dark" : "Light",
      };
    default:
      return state;
  }
};
export default themeReducer;
