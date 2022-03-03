import React, { Fragment } from 'react'

export default function Game_over(props){
    return( props.show ?
        <div class="game_over">
            <div>
                Parabéns, você completou o jogo
            </div>
            <button onClick={props.handRestart} id="restart">Jogue novamente!</button>
        </div> : <Fragment />
    )
}