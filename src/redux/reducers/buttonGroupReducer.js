const initialState = {
  isSaveMode: true,
  isEditDisabledMode: false,
  isEditEnabledMode: false,
};

const buttonGroupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BUTTON_GROUP_MODE":
      return {
        ...state,
        [action.payload.mode]: action.payload.val,
      };
    case "RESET_BUTTON_GROUP_MODE":
      return {
        ...state,
        isSaveMode: true,
        isEditDisabledMode: false,
        isEditEnabledMode: false,
      };
    default:
      return state;
  }
};

export default buttonGroupReducer;
