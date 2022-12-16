
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import Empresa from '../paginas/Empresa';
import Contacto from '../paginas/Contacto';

import React, { Component } from 'react'

export default class Pages extends Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/Empresa' element={<Empresa/>}/>
        <Route path='/Contacto' element={<Contacto/>}/>

      </Routes>
    )
  }
}
