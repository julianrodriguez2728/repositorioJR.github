import React from 'react'
import "./tech.css"
import css from "./img/css.png"
import html from "./img/html.png"
import js from "./img/js.png"
import typescript from "./img/typescript.png"
import react from "./img/react.png"
import node from "./img/nodo.png"
import postgre from "./img/postgre.png"
import sql from "./img/sql.png"
import express from "./img/express.png"
import redux from "./img/redux.png"
import Slide from 'react-reveal/Slide';
import sequelize from "./img/sequelize.png"
function Tecnology() {
  const tec =[
    {
      id:0,
      img:html,
      nombre:"Html"
    },
    {
      id:1,
      img:css,
      nombre:"CSS"
    },
    {
      id:2,
      img:js,
      nombre:"Javascript"
    },
    {
      id:3,
      img: typescript,
      nombre:"Typescript"
    },
    {
      id:4,
      img:react,
      nombre:"ReactJS / React native"
    },
    {
      id:5,
      img: node,
      nombre:"nodeJS"
    },
    {
      id:6,
      img: postgre,
      nombre:"PostgreSQL"
    },
    {
      id:7,
      img: sql,
      nombre:"SQL"
    },
    {
      id:8,
      img: express,
      nombre:"Express"
    },
    {
      id:9,
      img: redux,
      nombre:"Redux/Redux Toolkit"
    },
    {
      id:10,
      img:sequelize,
      nombre:"Sequelize"
    }
  ]
  return (
    <div className='containerTec' id='tech'>
      <Slide right>

      <div className='carti'>
      <div>
      <h3>Tecnologias</h3>
      </div>
      <div className='image-container'>
      {
        tec.map((item)=>{
          return(
            <div key={item.id} className='cartTech'>
              <img src={item.img} alt="" height={100} className='imagetech'/>
              <h4 className='techP'>{item.nombre}</h4>
            </div>
          )
        })
      }
      </div>
      </div>
      </Slide>
    </div>
  )
}

export default Tecnology