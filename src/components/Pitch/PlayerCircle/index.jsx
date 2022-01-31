import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../../context/appContext";
import "./PlayerCircle.css";
const PlayerCircle = (props) => {
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [random, setRandom] = useState("");
    const { userInfo } = useContext(AppContext);
    const players = userInfo.players;
    const { x, y, getCoordinates, offsetTop, offsetLeft, pitchHeight, pitchWidth } = props;


    const DragTask = (ev) => {
        let topPosition = ev.clientY - offsetTop - 15
        let leftPosition = (ev.clientX) - offsetLeft - 15

        if (topPosition < 0) {
            topPosition = 0;
            ev.target.style.top = topPosition + "px";
        } ev.target.style.top = topPosition + "px";

        if (leftPosition < 0) {
            leftPosition = 0;
            ev.target.style.left = leftPosition + "px";
        } ev.target.style.left = leftPosition + "px";

        if (topPosition > pitchHeight) {
            topPosition = pitchHeight - 30;
            ev.target.style.top = topPosition + "px";
        }
        if (leftPosition > pitchWidth) {
            leftPosition = pitchWidth - 30;
            ev.target.style.left = leftPosition + "px";
        }


        getCoordinates();

    };

    const drag = (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    useEffect(() => {
        setSelectedPlayers([...players]);
        setRandom(Math.floor(Math.random() * 100));
    }, [players])

    return (
        <div
            className="futboliukas"
            draggable="true"
            style={{ top: y + "px", left: x + "px" }}
            onDrag={drag}
            key={random}
            id={random}
            onDragEnd={DragTask}
        >
            <p>&nbsp;</p>
            <select name="" id="" key={random} defaultValue="Select Player">
                {selectedPlayers.map((player) => {
                    return <option value={player._id} key={player._id}>{player.no} . {player.name}</option>
                })}
                <option key={random} value="Select Player" disabled>
                    Select Player
                </option>
            </select>
        </div >
    )
}

export default PlayerCircle;
