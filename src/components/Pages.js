
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import Contacto from '../paginas/Contacto';

import React, { Component } from 'react'

export default class Pages extends Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/Contacto' element={<Contacto/>}/>

      </Routes>
    )
  }
}
