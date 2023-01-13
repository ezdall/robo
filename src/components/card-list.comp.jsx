import React from 'react';
import Card from './card.comp';

export default function CardList({ robots }) {
  const { robotData } = robots;

  return (
    <div>
      {robotData.map(({ id, name, email }) => (
        <Card key={`key-${id}`} id={id} name={name} email={email} />
      ))}
    </div>
  );
}
