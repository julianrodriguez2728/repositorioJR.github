import React, { useState } from 'react'
import "./nav.css"
function NavBar() {
  const [color, setColor] = useState(false)

  const change = ()=>{
    if(window.scrollY >= 590){
      setColor(true)
    }else{
      setColor(false)
    }
  }

  const [isOpen, setIsOpen] = useState(false)
  
  window.addEventListener('scroll', change)
  return (
    <nav className={color ? "navi2": "navi"}>  
  <h1 className={color ?"titulo2": 'titlo' }onClick={()=> setIsOpen(!isOpen)}>{"</ JR >"}</h1>
 <div className="cont">
<div className={`butons-responsive ${isOpen && "open"}`}>
      <a href='#'><button className={color ? "btnLanding2 butonsResponsive2 ": "btnLanding butonsResponsive"} onClick={()=> setIsOpen(!isOpen)}>Home</button></a>
      <a href='#aboutSection'><button className={color ? "btnLanding2 butonsResponsive2 ": "btnLanding butonsResponsive"}  onClick={()=> setIsOpen(!isOpen)}>Acerca de mi</button></a>
      <a href='#proyects'><button className={color ? "btnLanding2 butonsResponsive2 ": "btnLanding butonsResponsive"}  onClick={()=> setIsOpen(!isOpen)}>Proyectos</button></a>
      <a href='#titulos'><button className={color ? "btnLanding2 butonsResponsive2 ": "btnLanding butonsResponsive"}  onClick={()=> setIsOpen(!isOpen)}>Titulos</button></a>
      <a href='#tech'><button className={color ? "btnLanding2 butonsResponsive2 ": "btnLanding butonsResponsive"}  onClick={()=> setIsOpen(!isOpen)}>Tecnologias</button></a>
      <a href='#contacto'><button className={color ? "btnLanding2 butonsResponsive2 ": "btnLanding butonsResponsive"}  onClick={()=> setIsOpen(!isOpen)}>Contactos</button></a>
</div>
 </div>

<div className={`toggle ${isOpen && "open"}`} onClick={()=> setIsOpen(!isOpen)}>
    <span></span>
    <span></span>
    <span></span>
</div>
</nav>
  )
}

export default NavBar