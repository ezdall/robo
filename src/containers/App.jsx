import React from 'react';
//
import CardList from '../components/card-list.comp';
import ErrorBoundry from '../components/error-boundry.comp';

//
import './App.css';
//
export default function App({ robots }) {
  return (
    <>
      <ErrorBoundry>
        <CardList robots={robots} />
      </ErrorBoundry>
    </>
  );
}
