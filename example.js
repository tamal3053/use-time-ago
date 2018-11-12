import React from 'react';
import { render } from 'react-dom';
import useTimeAgo from './';

function App() {
  return <h3>{useTimeAgo(new Date() - 360000)}</h3>;
}

render(<App />, document.getElementById('root'));
