import React from 'react'
import "./contacto.css"
import jr from "./jr.png"
import ig from "./ig.png"
import linkedin from  "./linkedin.png"
import github from "./github.png"
import wpp from "./wpp.png"
import gmail from "./gmail.png"
import Slide from 'react-reveal/Slide';

function Contacto() {
  return (
    <section id="contacto">

    <footer>
        <div class="contactoapps">
            <Slide right>
        <img src={jr} alt="" id="logofooter" />
            </Slide>
        <div class="aplicaciones">
            <Slide left>
            <div id="linkedin">
                <img src={linkedin} alt="" />
                <a href="https://www.linkedin.com/in/julianigrodriguez/" target='_blank'>
                <p>Julian Ignacio Rodriguez</p>
                </a>
            </div>
            <div id="github">
                <img src={github} alt=""  id='gitImage'/>
                <a href="https://github.com/julianrodriguez2728" target='_blank'>
                <p>julianrodriguez2728</p>
                </a>
            </div>
            <div id="wpp">
                <img src={wpp} alt="" />
                <p>+54 9 1154664834</p>
            </div>
            <div id="gmail">
                <img src={gmail} alt="" />
                <p>julirdrg@gmail.com</p>
            </div>
            </Slide>
        </div>
        </div>
    </footer>
</section>
  )
}

export default Contacto