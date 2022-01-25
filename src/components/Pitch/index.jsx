import React, { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../../context/appContext";
import "./Pitch.css";
import PlayerCircle from "./PlayerCircle";
import axios from "axios";


const Pitch = () => {

    const { setSelectedFormation, selectedFormation, selectedFormationId, url, formationType } = useContext(AppContext);

    useEffect(() => {
        getSelectedFormation()
    }, [selectedFormationId]);

    const getSelectedFormation = () => {
        axios.get(url + `/${formationType}/${selectedFormationId}`)
            .then(function (response) {
                setSelectedFormation(response.data.coordinates);
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    const allowDrop = (ev) => {
        ev.preventDefault();
    };


    const onDrop = (ev) => {
        ev.preventDefault();
        var id = ev.dataTransfer.getData("text");
        const draggableElement = document.getElementById(id);
        const dropzone = ev.target;
        dropzone.appendChild(draggableElement);
        ev.dataTransfer.clearData();
    };

    const refContainer = useRef(null);
    // const [pitchDiv, setPitchDiv] = useState(null);
    // setPitchDiv(refContainer)
    const [formationSpotsArray, setFormationSpotsArray] = useState(null);


    const getCoordinates = () => {
        const pitchDiv = refContainer.current;
        const formationSpots = pitchDiv.children;
        setFormationSpotsArray([].slice.call(formationSpots))
        const newCoordinates =
            formationSpotsArray && formationSpotsArray.map((spot) => {
                return ({ "x": spot.style.left, "y": spot.style.top });
            })
        console.log(newCoordinates);
    }


    return (

        <div className="pitch">
            <h3>Pitch</h3>

            <div className="pitch-block" ref={refContainer} onDragOver={allowDrop} onDrop={onDrop} >
                {selectedFormation.map((formation) => {
                    return (<PlayerCircle key={formation._id} getCoordinates={getCoordinates} x={formation.x} y={formation.y} />)
                })}
                <button onClick={getCoordinates}>click</button>
            </div>


        </div >

    );
};
export default Pitch;
