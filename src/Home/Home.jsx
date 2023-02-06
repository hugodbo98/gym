import React from 'react'
import BarraSuperior from '../componentes/BarraSuperior/BarraSuperior'
import Planes from '../componentes/Planes/Planes'
import "./Home.css"

export default function Home() {
  return (
    <div className='contenedor-home'>
      <BarraSuperior />
      <div className='feed-home'>
        <div className='inicio-feed'>
          <Planes 
            tipoPlan= 'Básico'
            precioPlan= '18'
            beneficio1= '-Lunes a Viernes'
            beneficio2= '-Acceso a todas las áreas'
            beneficio3= '-Plan de ejercicios'
            beneficio4= '-Usuario Básico en la app'
            beneficio5= ''
            beneficio6= ''
            beneficio7= ''
          />
          <Planes 
            tipoPlan= 'Premium'
            precioPlan= '30'
            beneficio1= '-Lunes a Sábado'
            beneficio2= '-Acceso a todas las áreas'
            beneficio3= '-Plan de ejercicios'
            beneficio4= '-Plan de alimentación'
            beneficio5= '-Usuario Premium en la app'
            beneficio6= '-Acceso al área de masajes'
            beneficio7= ''
          />
          <Planes 
            tipoPlan= 'Premium Deluxe'
            precioPlan= '35'
            beneficio1= '-Lunes a Sábado'
            beneficio2= '-Acceso a todas las áreas'
            beneficio3= '-Plan de ejercicios'
            beneficio4= '-Plan de alimentación'
            beneficio5= '-Usuario Deluxe en la app'
            beneficio6= '-Acceso al área de masajes'
            beneficio7= '-Acceso a la piscina'
          />
        </div>
        <div className='medio-feed'>
          <div className='medio-titulo'>
            <ul>
              <li className='title'>Entrena <a>Mejora</a> Supera</li>
              <li className='desc'>Creamos un ecosistema donde puedes entrenar a tu propio ritmo.</li>
              <li className='desc'>Nuestros entrenadores están capacitados para brindarte la mejor atención y llevar tus habilidades al máximo.</li>
            </ul>
          </div>
          <div className='medio-secciones'>
            <div className='secciones'>
              <div className='contenedor-muestra'>Musculación</div>
              <div className='contenedor-muestra2'>Planeamiento</div>
              <div className='contenedor-muestra3'>Piscinas</div>
            </div>
            <div className='secciones'>
              <div className='contenedor-muestra4'>Masajes</div>
              <div className='contenedor-muestra5'>Aplicación</div>
              <div className='contenedor-muestra6'>Alimentación</div>
            </div>
          </div>
        </div>
        <div className='fin-feed'>
          <img 
            src={require("../images/logoGym.png")}  
            className= 'logoGym-barraSupFIN'
          />
          <ul>
            <li>Pagina hecha por HugoB</li>
            <li>2023</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
