function siteReducer(state, action) {
    switch (action.type) {
      case "SET_TODO":
        return {
          ...state,
          todo: action.value,
        };
      
      default:
        return;
    }
  }
  
  export default siteReducer;
  