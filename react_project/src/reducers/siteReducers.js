function siteReducer(state, action) {
    switch (action.type) {
      case "SWITCH_THEME":
        return {
          ...state,
          theme: action.value,
        };
        case "SWITCH_LANG":
          return {
            ...state,
            language: action.value,
          };
      default:
        return;
    }
  }
  
  export default siteReducer;
  