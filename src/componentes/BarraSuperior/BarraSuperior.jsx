import React from 'react'
import "./BarraSuperior.css"

export default function BarraSuperior() {
  return (
    <div className='contenedor-barraSup'>
      <img 
        src={require("../../images/logoGym.png")} 
        className= 'logoGym-barraSup'
      />
      <ul className='lista-barraSup'>
        <li><a>Horarios</a></li>
        <li><a>Sedes</a></li>
        <li><a>Contacto</a></li>
        <li><a>Ayuda</a></li>
      </ul>
    </div>
  )
}
