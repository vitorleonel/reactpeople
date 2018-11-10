const INITIAL_STATE = null;

export default function auth(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SET_AUTH':
      return  { ...action.payload };
    default:
      return state;
  }
}
