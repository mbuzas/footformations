import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/appContext';
import './Pitch.css'
import PlayerCircle from './PlayerCircle'






const Pitch = () => {

    const { defaultFormations,setSelectedFormation, selectedFormation, selectedFormationId,setSelectedFormationId } = useContext(AppContext)
    const [defaultFormationsArray, setDefaultFormationsArray] = useState([]);
   console.log(selectedFormation);
        
useEffect(() => {
    setDefaultFormationsArray(defaultFormations.map(formation => formation._id))


    const index = defaultFormationsArray.indexOf(selectedFormationId) 
        // setSelectedFormation(defaultFormations[index])
    // if(selectedFormation !== undefined){
        // setSelectedFormation(defaultFormations[index])
    // }
    // console.log(selectedFormation);
}, [selectedFormation]);




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
            {selectedFormation.map((formation) => {
                return (<PlayerCircle  key={formation._id} x={formation.x} y={formation.y} />)
            })}

            <div className="pitch-block" onDragOver={allowDrop} onDrop={onDrop} >

            </div>


        </div >

    )
}
export default Pitch
