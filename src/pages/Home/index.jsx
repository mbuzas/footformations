import React, { useEffect } from "react";
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
const Home = () => {
    const navigate = useNavigate();
    const { userInfo } = useContext(AppContext);
    useEffect(() => {
        if (!userInfo)
            navigate("/login");
    }, []);
    return (
        <>
            <Header />
            <div className="home">
                <div className="row">
                    <Pitch />
                    <Players />
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
