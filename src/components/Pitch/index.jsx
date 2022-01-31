import React, { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../../context/appContext";
import "./Pitch.css";
import PlayerCircle from "./PlayerCircle";
import axios from "axios";
import CoordinatesContext from "../../context/coordinatesContext";

const Pitch = () => {
    const { setSelectedFormation, selectedFormation, selectedFormationId, url, formationType } = useContext(AppContext);
    const { setNewCoordinates } = useContext(CoordinatesContext);
    const [formationSpotsArray, setFormationSpotsArray] = useState(null);
    const [offsetTop, setOffsetTop] = useState();
    const [offsetLeft, setOffsetLeft] = useState();
    const [pitchHeight, setPitchHeight] = useState();
    const [pitchWidth, setPitchWidth] = useState();

    useEffect(() => {
        axios.get(url + `/${formationType}/${selectedFormationId}`)
            .then(function (response) {
                setSelectedFormation(response.data.coordinates);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [formationType, selectedFormationId, url, setSelectedFormation]);


    const allowDrop = (ev) => {
        // ev.preventDefault();
    };


    const onDrop = (ev) => {
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text");
        const draggableElement = document.getElementById(data);
        ev.target.appendChild(draggableElement);
        ev.dataTransfer.clearData();
    };

    const refContainer = useRef(null);

    useEffect(() => {
        const pitchDiv = refContainer.current;
        setPitchHeight(refContainer.current.clientHeight)
        setPitchWidth(refContainer.current.clientWidth)
        const pitchHeight = (pitchDiv.offsetTop)
        const pitchWidth = (pitchDiv.offsetLeft)
        setOffsetTop(pitchHeight);
        setOffsetLeft(pitchWidth);
    }, [selectedFormation, refContainer]);


    const getCoordinates = () => {
        const pitchDiv = refContainer.current;
        const formationSpots = pitchDiv.children;
        setFormationSpotsArray([].slice.call(formationSpots));
        const newCoordinates =
            formationSpotsArray && formationSpotsArray.map((spot) => {
                return ({ "x": parseInt(spot.style.left.replace("px", "")), "y": parseInt(spot.style.top.replace("px", "")) });
            })
        setNewCoordinates(newCoordinates);
    }

    return (
        <div className="pitch"  >
            <h3>Pitch</h3>
            <div className="pitch-block" ref={refContainer} onDragOver={allowDrop} onDrop={onDrop} >
                {selectedFormation.map((formation) => {
                    return (<PlayerCircle key={formation._id} pitchHeight={pitchHeight} pitchWidth={pitchWidth} x={formation.x} y={formation.y} offsetTop={offsetTop} offsetLeft={offsetLeft} getCoordinates={getCoordinates} />)
                })}
            </div>
        </div >
    );
};
export default Pitch;
