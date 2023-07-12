import React from 'react'
import "./estilos.css"
import img from "./img/logo.png"
import Home from '../home/Home'
function Intro() {
  return (
    <div>
    <div className='contenedorIntro'>
      <a href="#about">
        <img src={img} alt=""  className='latido'  />
      </a>
        <div className='contenedorTitulo'>
        <p className='p'>WEB DEVELOPER FULL STACK </p>
        <p className='titulo'>JULIAN <span className='color1'>IGNACIO</span><br/><span className='color2'>RODRIGUEZ</span></p>
        <p className='p'>COMODORO RIVADAVIA CHUBUT / ARGENTINA</p>
        </div>
    </div>
      <div className="bloque1" id='about'>
        <Home/>
      </div>
    </div>
  )
}

export default Intro