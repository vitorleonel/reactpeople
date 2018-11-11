const INITIAL_STATE = {
  access_token: null,
  user: null,
  location: null,
};

export default function auth(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SET_AUTH':
      return  { ...state, ...action.payload };
    case 'UNSET_AUTH':
      return  INITIAL_STATE;
    case 'SET_LOCATION':
      return { ...state, location: action.payload }
    default:
      return state;
  }
}
