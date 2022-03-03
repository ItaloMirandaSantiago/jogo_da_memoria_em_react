import React from 'react'
import Card_element from './Card_element'

export default function Tabuleiro(props) {

    return(
        <div className='tabuleiro'>

            {props.cards.map((card, index)=>
            <Card_element virar={props.virar} key={index} card={card}></Card_element>)}
        </div>
    )
    
}