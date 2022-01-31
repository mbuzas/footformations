import React, { useEffect, useState } from "react";
import DefaultFormations from "../../components/DefaultFormations";
import UserFormations from "../../components/UserFormations";
import Header from "../../components/Layout/Header";

import Footer from "../../components/Layout/Footer";
import Pitch from "../../components/Pitch";
import Players from "../../components/Players";

import "./Home.css";
import { useContext } from "react/cjs/react.development";
import AppContext from "../../context/appContext";
import { useNavigate } from "react-router-dom";
import CoordinatesContext from "../../context/coordinatesContext";
const Home = () => {

    const navigate = useNavigate();
    const { userInfo, selectedFormation } = useContext(AppContext);
    const [newCoordinates, setNewCoordinates] = useState(selectedFormation);
    const coordinatesState = {
        newCoordinates: newCoordinates,
        setNewCoordinates
    }
    useEffect(() => {
        if (!userInfo)
            navigate("/login");
    }, [userInfo, navigate]);

    return (
        <>
            <Header />
            <div className="home">
                <div className="row">
                    <CoordinatesContext.Provider value={coordinatesState}>
                        <Pitch />
                        <Players />
                    </CoordinatesContext.Provider>
                </div>
                <div className="row">
                    <DefaultFormations />
                    <UserFormations />

                </div>

            </div >
            <Footer />
        </>
    );
};

export default Home;
