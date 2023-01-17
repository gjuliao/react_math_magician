/* eslint-disable quotes, jsx-quotes */
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quotes from './pages/Quotes';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='App container'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
    );
  }
}
