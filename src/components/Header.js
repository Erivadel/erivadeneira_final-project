/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import { Link } from 'react-router-dom';
import logoSinFondo from '../images/logoSinFondo.png';





const Header = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand col-6" to="/">
     <img src={logoSinFondo} alt='Assets Designe' width='150'/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse col-6" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Assets Designe</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Empresa">Empresa</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Proyectos
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="https://www.instagram.com/assets.designe/reels/" target="blank">Videos</a></li>
            <li><a className="dropdown-item" href="https://www.behance.net/alexarias7/projects" target="blank">Fotos</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Cuentanos tus ideas, sueños, ilusión...</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contacto">Contacto</Link>
  
          
        </li>
      </ul>

    </div>
  </div>
</nav>
   )
}

export default Header
