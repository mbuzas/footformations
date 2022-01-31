import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react/cjs/react.development";
import AppContext from "../../context/appContext";
import CoordinatesContext from "../../context/coordinatesContext";
import "./AddFormation.css";
const AddFormation = () => {

    const { url, userInfo, setUserFormations, setSelectedFormation } = useContext(AppContext);
    const { newCoordinates } = useContext(CoordinatesContext);
    const [newFormationName, setNewFormationName] = useState("");


    const addUserFormation = async (newFormation) => {
        try {
            const response = await axios.post(url + `/userformations/add`, { newFormation });
            setUserFormations(prev => [...prev, response.data]);
            setSelectedFormation(response.data.coordinates)
        } catch (error) {
            alert(error.response.data);
        }
    }


    const handleOnChange = (e) => {
        setNewFormationName(e.target.value);
    }


    const handleOnClick = (e) => {
        e.preventDefault();
        if (newCoordinates && newCoordinates.length > 0) {
            const newFormation = {
                title: newFormationName ? newFormationName : alert("Specify your formation name!"),
                coordinates: newCoordinates,
                type: "5x5",
                createdBy: userInfo._id
            };
            addUserFormation(newFormation);
            setNewFormationName("");
        } else {
            alert("You haven't dragged anything yet!");
        }
    }

    return (
        <div>
            <h3>Add Formation</h3>
            <form action="">
                <input type="text" name="" onChange={handleOnChange} placeholder="Formation Name..." id="newFormation" value={newFormationName} />
                <button className="btn-add" type="submit" onClick={handleOnClick}>Save</button>
            </form>
        </div>
    );
};

export default AddFormation;
