export const updateForm = (formName, formData) => {
  return {
    type: "UPDATE_FORM",
    payload: { formName, formData },
  };
};

export const resetForm = (formName) => {
  return {
    type: "RESET_FORM",
    payload: { formName },
  };
};

export const validateForm = (formName, errors) => {
  return {
    type: "VALIDATE_FORM",
    payload: { formName, errors },
  };
};
