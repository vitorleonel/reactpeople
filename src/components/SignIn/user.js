import React from 'react';

const User = props => (
  <div className="user">
    <img src={props.user.photo} alt={props.user.name} />
  </div>
);

export default User;
