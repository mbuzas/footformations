import React, { useEffect, useState } from 'react'
import './Pitch.css'
import PlayerCircle from './PlayerCircle'

const formations =
    [

        {
            x: "600",
            y: "400"
        },

        {
            x: "557",
            y: "430"
        },

        {
            x: "700",
            y: "600"
        },

        {
            x: "700",
            y: "670"
        },

        {
            x: "800",
            y: "420"
        }

    ];


const Pitch = () => {



    const [inputNo, setInputNo] = useState('')
    const [inputName, setInputName] = useState('')

    const allowDrop = (ev) => {
        ev.preventDefault();
    }

    const handleOnChangeNo = (e) => {
        setInputNo(e.target.value);
    }
    const handleOnChangeName = (e) => {
        setInputName(e.target.value);
    }


    const handleOnClick = (ev) => {
        ev.preventDefault();
        const newPlayer = { no: inputNo, username: inputName }
        // setPlayers((prevPlayers) => {
        //     return [...prevPlayers, newPlayer]
        // })
    }

    const onDrop = (ev) => {
        ev.preventDefault();
        var id = ev.dataTransfer.getData("text");
        const draggableElement = document.getElementById(id);
        const dropzone = ev.target;
        dropzone.appendChild(draggableElement);
        ev.dataTransfer.clearData();
    }
    return (

        <div className='pitch'>
            <h3>Pitch</h3>
            {formations.map((formation) => {
                return (<PlayerCircle x={formation.x} y={formation.y} />)
            })}

            <div className="pitch-block" onDragOver={allowDrop} onDrop={onDrop} >

            </div>

            <div className="player-input">
                <form action="">
                    <input type="number" name="" id="number" maxLength={2} placeholder='No.' onChange={handleOnChangeNo} />
                    <input type="text" name="" id="name" maxLength={20} placeholder='Name' onChange={handleOnChangeName} />
                    <button className='btn-players' onClick={handleOnClick}>+</button>
                </form>
            </div>
        </div >

    )
}

export default Pitch
