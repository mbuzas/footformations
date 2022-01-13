import React, { useState } from 'react'
import './Pitch.css'
import PlayerCircle from './PlayerCircle'

const Pitch = () => {

    const [ObjectMap, setObjectMap] = useState([])
    // const [positionX, setPositionX] = useState(0)
    // const [positionY, setPositionY] = useState(0)


    const [players, setPlayers] = useState([
        (
            <PlayerCircle no={players} />),

    ])

    const createCircle = () => {
        let coordinates = {
            top: 0,
            left: 0
        };
        let styleObject = Object.assign({}, coordinates);

        return (
            <div
                style={styleObject}
                className='futboliukas'
                draggable="true"
                style={{ top: 261 + "px", left: 570 + 'px' }}
                onDragStart={drag}
                id={randNum}
                onDragEnd={e => {
                    DragTask(e);
                }}
            ></div>)
    }


    function onDrop(ev) {
        ev.preventDefault();
        var id = ev.dataTransfer.getData("text");
        const draggableElement = document.getElementById(id);
        const dropzone = ev.target;
        dropzone.appendChild(draggableElement);
        ev.dataTransfer.clearData();
    }

    function allowDrop(ev) {
        ev.preventDefault();
    }

    const randNum = Math.floor(Math.random() * 100)
    const DragTask = (e) => {
        e.target.style.top = e.clientY + "px";
        e.target.style.left = (e.clientX) + "px";
    };

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }


    // Kadangi clientX ir clientY neveikia kaip turėtų, ir rodo iš tikro viso lango koordinates, tai
    // Bandžiau su ref pasiimti 'pitch' bloko koordinates, bet nelabai nepavyko.

    const logCoordinates = (e) => {
        console.log(e.clientX, e.clientY);
        // inputRef.getBoundingClientRect()
        // const esamos = e.getBoundingClientRect();
        // const x = esamos.x;
        // const y = esamos.y;
        // console.log(x, y);

    }
    // const getTopCoordinate = (el) => {
    //     const topCoordinate = el.getBoundingClientRect().left
    //     console.log(topCoordinate);
    // }



    return (
        <div className='pitch' onClick={logCoordinates}>
            <h3>Pitch</h3>
            <div
                className='futboliukas'
                draggable="true"
                onDragStart={drag}
                id={randNum}
                onDragEnd={e => { DragTask(e) }}
            > 5.<p>Buzas</p></div>


            {
                players.map((item, index) => {
                    return item;
                })
            }
            <div className="pitch-block" onDragOver={allowDrop} onDrop={onDrop} >

            </div>
            <button type="button" onClick={createCircle}>
                Create Circle!
            </button>
        </div >
    )
}

export default Pitch
