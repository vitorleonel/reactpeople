import React from 'react';
import { withRouter } from 'react-router-dom';

const User = props => (
  <div onClick={() => props.history.push('/profile')} className="user">
    <img src={props.user.photo} alt={props.user.name} />
  </div>
);

export default withRouter(User);
