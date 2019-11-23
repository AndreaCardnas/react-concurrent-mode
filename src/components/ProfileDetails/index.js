import React from 'react';

const ProfileDetails = ({ resource }) => {
  const user = resource.user.read();
  return (
    <div className="card card-body my-3">
      <h1 className="large text-primary">{user.username}</h1>
      <p>
        <b>username:</b> {user.username}
      </p>
      <p>
        <b>email:</b> {user.email}
      </p>
      <p>
        <b>city:</b> {user.address.city}
      </p>
    </div>
  );
};

export default ProfileDetails;
