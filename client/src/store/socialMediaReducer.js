const initialState = {
  socialMediaData: [],
  socialMediaSelected: {},
  isLoading: false,
  error: null,
};

const socialMediaReducer = (state = initialState, { type, payload }) => {
  if (type === "fetchAll/socialMedia") {
    return {
      ...state,
      socialMediaData: payload,
    };
  }

  if (type === "fetchById/socialMedia") {
    return {
      ...state,
      socialMediaSelected: payload,
    };
  }

  if (type === "isLoading/socialMedia") {
    return {
      ...state,
      isLoading: payload,
    };
  }

  if (type === "error/socialMedia") {
    return {
      ...state,
      error: payload,
    };
  }

  return state;
};

export default socialMediaReducer;
