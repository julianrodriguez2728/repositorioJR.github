import React from 'react'
import "./proyect.css"
import imgDogs from "./dogs.png"
import imgWallet from "./wallet.png"
import imgR from "./rickymorty.png"
import imgMi from "./mimikU.png"
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import git from "./github.png"
import css from "../tecnologias/img/css.png"
import html from "../tecnologias/img/html.png"
import js from "../tecnologias/img/js.png"
import react from "../tecnologias/img/react.png"
import postgre from "../tecnologias/img/postgre.png"
import nodo from "../tecnologias/img/nodo.png"
import sql from "../tecnologias/img/sql.png"
import express from "../tecnologias/img/express.png"
import redux from "../tecnologias/img/redux.png"
import sequelize from "../tecnologias/img/sequelize.png"
import typescript from "../tecnologias/img/typescript.png"
import radtek from "./RADTEK.png"
function Proyects() {
  const proyect = [
    {
        id:0,
        titulo:"MIMIK U",
        image:imgMi,
        lenguajes:"Html, Css, ReactJS, Javascript, FireBase",
        repositorio:"https://github.com/julianrodriguez2728/EcommerceJR.github.io",
        deploy:"https://celadon-banoffee-5a0462.netlify.app/"
    },
    {
        id:1,
        titulo:"PI dogs",
        image: imgDogs,
        lenguajes:"Html, Css, ReactJS, Javascript, Redux, SQL, PostgreSQL, nodeJS, Sequelize, Express",
        repositorio:"https://github.com/julianrodriguez2728/frontend-pi",
        deploy:"https://adept-class-production.up.railway.app/"
    },
    {
        id:2,
        titulo:"WalletWise",
        image:imgWallet,
        lenguajes:"Html, Css, ReactNative, Typescript, ReduxToolkit, SQL, PostgreSQL, nodeJS, Sequelize, Express",
        repositorio:"https://github.com/Ezeko95/Wallet-Wise-client-app",
        video:"https://vimeo.com/843702475",
        deploy:"https://drive.google.com/file/d/1vjRHHm_7KiXtfaaqAuyX3MXGXT_q2Dpi/view?usp=sharing"
    }
  ]  
  return (
    <div className="proyectContainer" id='proyects'>
      <Slide left>

      <div className="cartContainer">
      <div className='titleProfile'>
      <h3 className='titlePr'>Proyectos</h3>
      </div>

      <div className='cartFirstProyect'>
        <div className="cabeceraContainer">
        <img src={imgMi} alt="" />
        <div className="biCabecera">
        <h1 style={{color:"white"}}>MIMIK U</h1>
        <hr />
        <div className="parrafoProyectContainer">
        <p className="parrafProyect">Esta aplicación de Ecommerce te permite buscar productos fácilmente mediante filtros personalizables. Obtén detalles detallados de los productos y agrégalos al carrito antes de finalizar la compra con opciones de pago seguras y variadas. Facilitamos tu experiencia de compra en línea.</p>
        </div>
        <div style={{display:"flex", alignItems:"center"}}>
        
        <a href="https://github.com/julianrodriguez2728/EcommerceJR.github.io" target='_blank'><img src={git} alt="" className='logoGit'/></a>
        </div>
        </div>
        </div>
        <div className="tecnoContainer">
          <img src={js} alt="" className='logoTechnologias'/>
          <img src={html} alt="" className='logoTechnologias'/>
          <img src={css} alt="" className='logoTechnologias'/>
          <img src={react} alt="" className='logoTechnologias'/>
        </div>
      </div>

      <div className='cartFirstProyect'>
        <div className="cabeceraContainer">
        <img src={imgDogs} alt="" />
        <div className="biCabecera">
        <h1 style={{color:"white"}}>PI DOGS</h1>
        <hr />
        <div className="parrafoProyectContainer">
        <p className="parrafProyect">Aplicación funcional con temática "Dogs". donde podrás buscar tu perro, filtrarlos por peso, raza y edad Tambien podras crear tu perro y ver su respectivo detail
</p>
        </div>
        <div style={{display:"flex", alignItems:"center"}}>
        
        <a href="https://github.com/julianrodriguez2728/frontend-pi" target='_blank'><img src={git} alt="" className='logoGit'/></a>
        </div>
        </div>
        </div>
        <div className="tecnoContainer">
          <img src={react} alt="" className='logoTechnologias'/>
          <img src={js} alt="" className='logoTechnologias'/>
          <img src={css} alt="" className='logoTechnologias'/>
          <img src={html} alt="" className='logoTechnologias'/>
          <img src={redux} alt="" className='logoTechnologias'/>
          <img src={nodo} alt="" className='logoTechnologias'/>
          <img src={postgre} alt="" className='logoTechnologias'/>
          <img src={express} alt="" className='logoTechnologias'/>
          <img src={sql} alt="" className='logoTechnologias'/>
          <img src={sequelize} alt="" className='logoTechnologias'/>
        </div>
      </div>
      <div className='cartFirstProyect'>
        <div className="cabeceraContainer">
        <img src={imgWallet} alt="" />
        <div className="biCabecera">
        <h1 style={{color:"white"}}>WALLET WISE</h1>
        <hr />
        <div className="parrafoProyectContainer">
        <p className="parrafProyect">Es una aplicación móvil en la que el usuario podrá llevar anotaciones sobre sus gastos, ingresos y en que cuenta (bancaria, virtual, efectivo) posee el dinero. La misma ofrece funciones adicionales que permiten establecer metas o crear sala de gastos compartidos. Con Wise Wallet el usuario tendrá una herramienta que le permita administrar su dinero de forma segura.

</p>
        </div>
        <div style={{display:"flex", alignItems:"center"}}>
        
        <a href="https://github.com/Ezeko95/Wallet-Wise-client-app" target='_blank'><img src={git} alt="" className='logoGit'/></a>
        </div>
        </div>
        </div>
        <div className="tecnoContainer">
          <img src={react} alt="" className='logoTechnologias'/>
          <img src={js} alt="" className='logoTechnologias'/>
          <img src={typescript} alt="" className='logoTechnologias'/>
          <img src={css} alt="" className='logoTechnologias'/>
          <img src={html} alt="" className='logoTechnologias'/>
          <img src={redux} alt="" className='logoTechnologias'/>
          <img src={nodo} alt="" className='logoTechnologias'/>
          <img src={postgre} alt="" className='logoTechnologias'/>
          <img src={express} alt="" className='logoTechnologias'/>
          <img src={sql} alt="" className='logoTechnologias'/>
          <img src={sequelize} alt="" className='logoTechnologias'/>
        </div>
      </div>
      <div className='cartFirstProyect'>
        <div className="cabeceraContainer">
        <img src={radtek} alt="" />
        <div className="biCabecera">
        <h1 style={{color:"white"}}>RADTEK ECOMMERCE</h1>
        <hr />
        <div className="parrafoProyectContainer">
        <p className="parrafProyect">Esta aplicación de Ecommerce ofrece filtrado por marca, orden alfabético y color. Incluye una barra de búsqueda funcional, acceso detallado a los productos y opciones para seleccionar la cantidad deseada antes de añadir al carrito. Los usuarios pueden editar, eliminar productos y finalizar la compra. Además, brinda inicio de sesión y autenticación con Google, así como la opción de crear un perfil personal.
</p>
        </div>
        <div style={{display:"flex", alignItems:"center"}}>
        
        <a href="https://github.com/Ezeko95/Wallet-Wise-client-app" target='_blank'><img src={git} alt="" className='logoGit'/></a>
        </div>
        </div>
        </div>
        <div className="tecnoContainer">
          <img src={react} alt="" className='logoTechnologias'/>
          <img src={js} alt="" className='logoTechnologias'/>
          <img src={typescript} alt="" className='logoTechnologias'/>
          <img src={css} alt="" className='logoTechnologias'/>
          <img src={html} alt="" className='logoTechnologias'/>
          <img src={redux} alt="" className='logoTechnologias'/>
          <img src={nodo} alt="" className='logoTechnologias'/>
          <img src={postgre} alt="" className='logoTechnologias'/>
          <img src={express} alt="" className='logoTechnologias'/>
          <img src={sql} alt="" className='logoTechnologias'/>
          <img src={sequelize} alt="" className='logoTechnologias'/>
        </div>
      </div>
      </div>
        </Slide>
    </div>
  )
}

export default Proyects