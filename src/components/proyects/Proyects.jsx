import React from 'react'
import "./proyect.css"
import imgDogs from "./dogs.png"
import imgWallet from "./wallet.png"
import imgR from "./rickymorty.png"
import imgMi from "./mimikU.png"
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import git from "./github.png"
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
        {
          proyect.map((item)=>{
            return(
              <Flip bottom>

              <div key={item.id} className='cart'>
                <a href={item.deploy} target='_blank'>
                <img src={item.image} alt=""  className='imageProyects'/>
                </a>
                <div className="info">
                <h1 className='titleCart'>{item.titulo}</h1>
                <hr />
                <a href={item.repositorio} target='_blank'><p className='githubRepo'>Repositorio Github<img src={git} alt="" className='githubLogo'/></p> </a>
                {
                  item.video
                  ?
                  <a href={item.video} target='_blank'><p className='githubRepo video'>Video</p> </a>
                  :
                  null
                }
                <hr style={{width:"50%"}}/>
                
                <div className='containerProyectsTech'>
                <p id="tecnologiasP">
                  Tecnologias: <br /> {item.lenguajes}
                </p>
                
                </div>
                </div>
              </div>
              </Flip>
            )
          })
        }  
      </div>
        </Slide>
    </div>
  )
}

export default Proyects