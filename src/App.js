import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game';

function App() {
  return (
    <Fragment>
      <h1>TIC-TAC-TOE</h1>
      <Game />
      {/* <footer>© 2020 Copyright: Alba Yauri Ituccayasi</footer> */}
    </Fragment>

  );
}

export default App;
