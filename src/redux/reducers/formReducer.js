const initialState = {
  classRoomForm: {
    classRoomName: "",
    classRoomId: "",
    errors: {},
  },
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FORM":
      return {
        ...state,
        [action.payload.formName]: {
          ...state[action.payload.formName],
          ...action.payload.formData,
        },
      };
    case "RESET_FORM":
      return {
        ...state,
        [action.payload.formName]: initialState[action.payload.formName],
      };
    case "VALIDATE_FORM":
      return {
        ...state,
        [action.payload.formName]: {
          ...state[action.payload.formName],
          errors: action.payload.errors,
        },
      };
    default:
      return state;
  }
};

export default formReducer;
