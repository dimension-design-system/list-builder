import React from 'react';
import ReactDOM from 'react-dom';

const App = () => 'Hello world';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);