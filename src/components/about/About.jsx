import React from 'react'
import "./about.css"
import img from "./fotoPerfil.jpg"
import Slide from 'react-reveal/Slide';

function About() {
  return (
    <section className='about-container' id='aboutSection'>
        <Slide right>
      <div className="container grid"  >

        <h3 className='acercaP'>Acerca de mi</h3>
        <div className="parrafos">
          <p className='aboutP'>
          Hola! soy Julián
          Tengo 20 años y soy desarrollador web <br/>
          Actualmente vivo en Comodoro Rivadavia-Chubut <br/>
          Y recientemente terminé de cursar la carrera de <br /> <strong>Desarrollador Full Stack</strong> <br />
           en Soy Henry!
          </p>
        </div>
        <div class="imagenpersonal">
              <img id="personal" src={img} alt=""/>
        </div>
      </div>
        </Slide>
    </section>
  )
}

export default About