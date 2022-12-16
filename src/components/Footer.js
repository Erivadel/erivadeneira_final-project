/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logoSinFondo from '../images/logoSinFondo.png';

const Footer =()=>{
return(

        <footer className="text-white bg-dark">
        <div className="row">
            <div className="col columna">
                <nav>
                <a href="/" className="aling-items-center justyfy-content-center">
                    <img src={logoSinFondo} className="logoFooter mx-2" height="180"/>
                </a>
                </nav>
            </div>

            <div className="col columna">
            <ul>
                <h5>Síguenos y inspirate</h5>
                <li className="list-unstyled">
                    <a href="https://www.behance.net/alexarias7/projects" target="blank"><i className="bi bi-behance"/></a>
                    <a href="https://www.instagram.com/assets.designe/" target="blank"><i className="bi bi-instagram"/></a>
               
                </li>
            </ul>

            </div>
            <div className="col ms-auto columna">
                <ul className="list-unstyled">
                    
                    <h5 className="font-weight-bold mb-2">Cuentanos tus ideas, sueños, ilusión...</h5>           
                    <li className="text-center">Teléfono</li>                  
                    <i className="bi bi-whatsapp"/>
                    <li className="text-center">Correo</li>
                    <i className="bi bi-envelope-at"></i>
                </ul>
                
            </div>
        </div>
        
        <div className="row" >
            <a href="/"><div className="inicio col-12 ms-md-auto text-center" >
                <i className="bi bi-chevron-double-up"></i>
            </div>
            </a>
        </div>

        </footer>


            
    


)

}

export default Footer