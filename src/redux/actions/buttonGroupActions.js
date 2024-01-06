export const setButtonGruopMode = (mode, val) => {
  return {
    type: "SET_BUTTON_GROUP_MODE",
    payload: { mode, val },
  };
};

export const resetButtonGruopMode = () => {
  return {
    type: "RESET_BUTTON_GROUP_MODE",
  };
};
