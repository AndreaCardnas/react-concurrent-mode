import React from 'react';

export default function ProfileDetails({ resource }) {
  const user = resource.user.read();

  const location = [
    user.address.street,
    user.address.suite,
    user.address.city,
    user.address.zipcode,
  ].join(', ');

  const company = [
    user.company.name,
    user.company.catchPhrase,
    user.company.bs,
  ].join(', ');

  return (
    <section>
      <h1>{user.name}</h1>
      <p>
        <b>username: </b>
        <span>{user.username.toLowerCase()}</span>
        <br />
        <b>email: </b>
        <span>{user.email.toLowerCase()}</span>
        <br />
        <b>location: </b>
        <span>{location}</span>
        <br />
        <b>company: </b>
        <span>{company}</span>
        <br />
        <b>website: </b>
        <span>{user.website}</span>
      </p>
    </section>
  );
}
