import React from 'react';
//
import CardList from '../components/card-list.comp';
//
import './App.css';
//
export default function App(robots) {
  return (
    <div>
      <CardList robots={robots} />
    </div>
  );
}
