import React from 'react'
import web from "./web.png"
import react from "./react.png"
import js from "./js.png"
import "./titles.css"
import Slide from 'react-reveal/Slide';
import henry from "./henryTitle.png"
function Graduate() {
  return (
    <div className='titulosContainer' id='titulos'>
      <Slide left>

        <div className="titContainer">
            <div>
            <h3 className='titleGraduate'>Titulos</h3>
            </div>
            <div className="titulos">
            <img src={js} alt=""  className='image-titulo'/>
            <img src={web} alt=""  className='image-titulo'/>
            <img src={react} alt=""  className='image-titulo'/>
            <img src={henry} alt=""  className='image-titulo'/>
            </div>
            
        </div>
      </Slide>
    </div>
  )
}

export default Graduate