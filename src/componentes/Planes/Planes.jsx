import React from 'react'
import "./Planes.css"

export default function Planes(props) {
  return (
    <div className='contenedor-planes'>
      <div className='plan-sup'>
        <ul> 
          <li className='planTipo'>Plan {props.tipoPlan}</li>
          <li>Desde {props.precioPlan}$</li>
        </ul>
      </div>
      <div className='plan-inf'>
        <ul> 
          <li>{props.beneficio1}</li>
          <li>{props.beneficio2}</li>
          <li>{props.beneficio3}</li>
          <li>{props.beneficio4}</li>
          <li>{props.beneficio5}</li>
          <li>{props.beneficio6}</li>
          <li>{props.beneficio7}</li>
        </ul>
      </div>
    </div>
  )
}
