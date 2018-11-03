// import styles from './index.scss';
import React from 'react';
import { render } from 'react-dom';

console.log(process.env.APP_NAME);
console.log('WKHP Clientside');

if (module.hot) {
  module.hot.accept();
}


const App = () => (
  <h1>Hello Reacto!</h1>
);

// render the app
render(<App />, document.getElementById('app'));
