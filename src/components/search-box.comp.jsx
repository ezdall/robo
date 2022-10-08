import React from 'react';

export default function SearchBox({ searchField, onSearchChange }) {
  return (
    <div className="tc">
      <input
        type="search"
        name="search"
        id="seach"
        placeholder="type name"
        onChange={onSearchChange}
        value={searchField}
      />
    </div>
  );
}
