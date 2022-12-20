/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logoSinFondo from '../images/logoSinFondo.png';


const Footer = () => {
    return (

        <footer className="text-white bg-dark ">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <a href="/" className="aling-items-left justyfy-content-center">
                                <img src={logoSinFondo} className="logoFooter mx-5" height="200" />
                            </a>
                        </div>
                    </div>
                    
                    <div className="col abajo ">                                            
                        <div className="row divss">
                        <h5 className="font-weight-bold text-left mb-2">Síguenos y inspirate</h5>
                            <div className="col-md-2 ">
                                <a href="https://www.instagram.com/assets.designe/" target="blank"><i className="bi bi-instagram" /></a>
                            </div>
                            <div className="col-md-2">
                                <a href="https://www.instagram.com/assets.designe/" target="blank">Instagram</a>
                            </div>
                        </div>
                    </div>

                    <div className="col abajo ">
                       
                        <div className="row divss">
                        <h5 className="font-weight-bold text-left mb-2">Cuentanos tus ideas, sueños, ilusión...</h5>
                            <div className="col">
                                <div className="row">
                                    <div className="col-md-2 ">
                                        <i className="bi bi-whatsapp" />
                                    </div>
                                    <div className="col-md-2">
                                        <a href="https://chat.whatsapp.com/GiKwvMcUxAS4JDZsas3e7A">Teléfono</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <div className="col-md-2">
                                        <i className="bi bi-envelope-at "></i>
                                    </div>
                                    <div className="col-md-2">
                                        <a href="/Contacto">Correo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>

                <div className="footerInicio">
                    <a href="/"><div className="inicio col-12 ms-md-auto text-center"><br></br>
                        <i className="bi bi-chevron-double-up"></i>
                    </div>
                    </a>
                </div>
            </div>

        </footer>
    )

}

export default Footer