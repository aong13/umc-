const initialState = {
    id: '',
    pw: '',
    loading: false,
    loginSuccess: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ID':
        return { ...state, id: action.payload };
      case 'SET_PW':
        return { ...state, pw: action.payload };
      case 'SET_LOADING':
        return { ...state, loading: action.payload };
      case 'SET_LOGIN_SUCCESS':
        return { ...state, loginSuccess: action.payload };
      default:
        return state;
    }
  };
  
  export default authReducer;