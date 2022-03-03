import React, { useEffect, useState } from 'react'
import Tabuleiro from './components/Tabuleiro'
import Game_over from './components/Game_over'
import game from './game/game'

export default function Jogo_memoria(){

    const [game_over, setgame_over] = useState(false)
    const [cards, set_cards] = useState([])

    useEffect(()=>{
        set_cards(game.criar_molde())
    }, [])

    function restart(){
        game.check_fim()
        set_cards(game.criar_molde())
        setgame_over(false)
    }

    function virar(card) {

        game.flipCard(card.id, ()=>{
            // game over callback
            setgame_over(true)
        }, ()=>{
            // no match call
            set_cards([...game.cards])
        })
        set_cards([...game.cards])
    }

    return(
        <div>
            <Tabuleiro virar={virar} cards={cards}></Tabuleiro>
            <Game_over show={game_over} handRestart={restart}></Game_over>
        </div>
    )
}