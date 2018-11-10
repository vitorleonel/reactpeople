const INITIAL_STATE = null;

export default function auth(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SET_AUTH':
      return  { ...action.payload };
    case 'UNSET_AUTH':
      return  null;
    default:
      return state;
  }
}
