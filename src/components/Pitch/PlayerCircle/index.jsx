import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../../context/appContext";
import './PlayerCircle.css'
const PlayerCircle = (props) => {

    const { userInfo } = useContext(AppContext)
    const players = userInfo.players;
    const { x, y, getCoordinates } = props

    const randNum = Math.floor(Math.random() * 100)
    const DragTask = (e) => {
        e.target.style.top = e.clientY + "px";
        e.target.style.left = (e.clientX) + "px";
    };

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    const [selectedPlayers, setSelectedPlayers] = useState([])
    useEffect(() => {
        setSelectedPlayers([...players])
    }, [players])

    return (
        <div
            className='futboliukas'
            draggable="true"
            style={{ top: y + "px", left: x + 'px' }}
            onDragStart={drag}
            key={randNum}
            id={randNum}
            onDragEnd={e => {
                DragTask(e);
                // getCoordinates();
            }}
        ><p>&nbsp;</p>
            <select name="" id="" key={randNum} defaultValue='Select Player'>
                {selectedPlayers.map((player) => {
                    return <option value={player._id} key={player._id}>{player.no} . {player.name}</option>
                })}
                <option key={randNum} value="Select Player" disabled>
                    Select Player
                </option>
            </select>
        </div>
    )
}

export default PlayerCircle
