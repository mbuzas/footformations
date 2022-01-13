import React, { useState } from "react";
import './PlayerCircle.css'
const PlayerCircle = (props) => {
    const DUMMY_PLAYERS =
        [

            {
                no: "99",
                username: "Lukas"
            },

            {
                no: "6",
                username: "Rimas"
            },

            {
                no: "45",
                username: "Skaiva"
            },

            {
                no: "64",
                username: "Mantas"
            },

            {
                no: "91",
                username: "Egis"
            }

        ];

    const [players, setPlayers] = useState(DUMMY_PLAYERS)
    const { x, y } = props

    const randNum = Math.floor(Math.random() * 100)
    const DragTask = (e) => {
        e.target.style.top = e.clientY + "px";
        e.target.style.left = (e.clientX) + "px";
    };

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    const showPlayers = (ev) => {

        const createSelect = React.createElement('select', {}, players)
        // ev.target.append(createSelect)

        console.log(ev);
        // players.map((player) => {
        //     ev.target.innerHTML = player.no
        //     ev.target.innerHTML = player.username
        // })



    }
    return (
        <div
            onClick={ev => { showPlayers(ev) }}
            className='futboliukas'
            draggable="true"
            style={{ top: y + "px", left: x + 'px' }}
            onDragStart={drag}
            id={randNum}
            onDragEnd={e => {
                DragTask(e);
            }}
        ><p>+</p>
            <select className="addSelect" name="" id="">
                {players.map((player) => {
                    console.log(player.no);
                    return <option>{player.no} . {player.username}</option>
                })}
            </select>
        </div>
    )
}

export default PlayerCircle
