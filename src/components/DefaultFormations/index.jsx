import React, { useContext, useEffect, useState } from "react";
import "./DefaultFormations.css";
import AppContext from "../../context/appContext";
import axios from "axios";

const DefaultFormations = () => {
    const { setSelectedFormationId, url, setFormationType } = useContext(AppContext);
    const [defaultFormations, setDefaultFormations] = useState([]);


    useEffect(() => {
        axios.get(url + "/defaultformations")
            .then(function (response) {
                setDefaultFormations(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [url]);

    const handleSelect = (e) => {
        setSelectedFormationId(e.target.value);
        setFormationType(e.target.id)
    };
    return (
        <div className="default-formations">
            <h3>Default Formations</h3>


            <div className="formations-block">
                <select name="" onChange={handleSelect} id="defaultformations">
                    {defaultFormations.map((formation) => {
                        return <option value={formation._id} key={formation._id}>{formation.title}</option>;
                    })}
                </select>
            </div>
        </div>
    );
};

export default DefaultFormations;
