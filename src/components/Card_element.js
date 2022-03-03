import React from 'react'
import game from '../game/game'

export default function Card_element(props) {
    
    return(
        <div onClick={()=>{props.virar(props.card)}} id={props.card.id} className={`card ${props.card.virada ? "desinverter" : ""}`}>
            <div className="card_frente">
                <img className='icon' 
                src={`./image/Apenas+imagens/images/${props.card.icon}.png`} 
                alt={props.card.icon}></img>
            </div>
            <div className='card_tras'>
                {"</>"}
            </div>
        </div>
    )
}