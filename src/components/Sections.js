
import React from 'react'
import ApiInstragram from './ApiInstragram';
import img7 from '../images/img7.png';
import img8 from '../images/img8.png';




const Sections = () => {
  return (
  <div className='container sections'>
    <div className='row top'>
     <div className='col sections Left'>
          <h1>Assets Designe</h1>
          <h2>Proyectamos y diseñamos</h2>
          <h3>Diseño Arquitectónico 💻 Modelado 3D Renders/Ilustraciones</h3>
          <p>Cada proyecto lo trabajamos desde la máxima exigencia para que la Arquitectura final sea el resultado de la mezcla perfecta entre las necesidades del cliente y el diseño exclusivo integrado en el lugar.</p>
          <p>Con este concepto conseguimos que cada proyecto se envuelva de la esencia arquitectónica necesaria para que todo fluya sin interferencias y consiguiendo viviendas de gran calidad con precios finales muy competitivos.</p>
          <h4>Hormigón visto, madera, piedra natural, materiales mediterráneos y vidrio...</h4>
          <p>Utilizamos los materiales nobles como elemento de distinción y integración creando espacios exteriores e interiores de gran calidez y dotando a cada vivienda de una evidente sensación de "hogar" y utilizando la luz como elemento vertebrador de cada espacio.</p>
     </div>

        <div className='col sections Rigth'>
          <img src={img7} className="img-fluid img7" alt="..."/>
          <img src={img8} className="img-fluid img8" alt="..."/>
        </div>
    </div>

    <div className='container Apilow'>
    <div className='row'>
      
      <div className='Apilow col' >
      <ApiInstragram/>
      </div>


      </div>
    </div>


    



        
    </div>

  )
}

export default Sections

