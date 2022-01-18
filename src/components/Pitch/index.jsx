import React, { useContext } from 'react'
import AppContext from '../../context/appContext';
import './Pitch.css'
import PlayerCircle from './PlayerCircle'

const formations =
    [

        {
            x: "700",
            y: "360"
        },

        {
            x: "600",
            y: "420"
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

    // const { defaultFormations, selectedFormation } = useContext(AppContext)
    // const index = getIndex(selectedFormation)
    // function getIndex(id) {
    //     return selectedFormation.findIndex(formation => formation._id === id);

    // }

    const allowDrop = (ev) => {
        ev.preventDefault();
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
                return (<PlayerCircle key={formation._id} x={formation.x} y={formation.y} />)
            })}

            <div className="pitch-block" onDragOver={allowDrop} onDrop={onDrop} >

            </div>


        </div >

    )
}

export default Pitch
