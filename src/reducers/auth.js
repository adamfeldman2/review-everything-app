const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid,
        email: action.email,
        accountCreation: action.accountCreation
      };

    case 'LOGOUT':
      return {};

    default:
      return state;
  }
};

export default authReducer;
