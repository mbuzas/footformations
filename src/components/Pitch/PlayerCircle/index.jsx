import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../../context/appContext";
import './PlayerCircle.css'
const PlayerCircle = (props) => {

    const { players } = useContext(AppContext)
    const { x, y } = props

    const randNum = Math.floor(Math.random() * 100)
    const DragTask = (e) => {
        e.target.style.top = e.clientY + "px";
        e.target.style.left = (e.clientX) + "px";
    };

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }


    // function getIndex(id) {
    //     return selectedPlayers.findIndex(player => player._id === id);
    // }



    const [selectedPlayers, setSelectedPlayers] = useState([])
    useEffect(() => {
        setSelectedPlayers([...players])
        // console.log(selectedPlayers);
    }, [players])



    const handleSelect = (ev) => {
        const selectedPlayer = ev.target.value

        console.log(selectedPlayer);
        console.log(selectedPlayers);


        // Delete selected from dropdown
        // const index = getIndex(selectedPlayer)
        // if (index > -1) {
        //     const updatedPlayers = selectedPlayers.splice(index, 1);
        //     setSelectedPlayers([...selectedPlayers, updatedPlayers])
        // }



    }
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
            }}
        ><p>&nbsp;</p>
            <select onChange={handleSelect} name="" id="" key={randNum} defaultValue='Select Player'>
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
