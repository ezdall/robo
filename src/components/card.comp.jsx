import React from 'react';

export default function Card({ id, name, email }) {
  return (
    <div className="bg-blue dib br3 pa3 ma2 grow">
      <img
        src={`https://robohash.org/${id}test?200x200&set=set3`}
        alt={`robot ${id}`}
      />
      <div>
        <h2>
          {id} {name}
        </h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
