import React from 'react'
import "./home.css"
import About from '../about/About'
import Proyects from '../proyects/Proyects'
import Graduate from '../graduate/Graduate'
import Contacto from '../footer/Contacto'
import Tecnology from '../tecnologias/Tecnology'

function Home() {
  return (
    <div className="home">
      <About/>
      <Proyects/>
      <Graduate/>
      <Tecnology/>
      <Contacto/>
    </div>
  )
}

export default Home