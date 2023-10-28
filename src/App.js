import{Fragment}from 'react';
import Cart from "./Cart"
import Meals from"./Meals"
import header from"./components/Layout/Header.module.css"
import { Fragment } from 'react';

import Header from './components/Layout/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <Main>
        <Meals/>
      </Main>
    </Fragment>
  );
}

export default App;