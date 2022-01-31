import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/appContext";
import AddFormation from "../AddFormation";
import "./Players.css";
import axios from "axios";
import deleteBtn from "../../assets/x.svg"
const Players = () => {

    const { userInfo, setUserInfo, url } = useContext(AppContext);
    const [players, setPlayers] = useState(userInfo ? userInfo.players : null);
    const getRandNum = () => Math.floor(Math.random() * 100000);
    const [inputNo, setInputNo] = useState("");
    const [inputName, setInputName] = useState("");
    const handleOnChangeNo = (e) => {
        setInputNo(parseInt(e.target.value));
    };
    const handleOnChangeName = (e) => {
        setInputName(e.target.value);
    };


    const handleOnSubmit = async (ev) => {
        const newPlayer = { no: inputNo, name: inputName, _id: getRandNum() };
        setInputNo("");
        setInputName("");
        await updateUser(newPlayer);
    };

    const updateUser = async (newPlayer) => {
        try {
            const response = await axios.patch(url + `/users/${userInfo._id}`, newPlayer);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            const user = localStorage.getItem("user");
            await setUserInfo(user);
        } catch (error) {
            alert(error.response.data);
        }
    };


    const handleRemovePlayer = async (ev) => {
        const playerToDelete = ev.target.id;
        await removePlayer(playerToDelete);
    }
    const removePlayer = async (playerToDelete) => {
        try {
            const response = await axios.patch(url + `/users/${userInfo._id}/removeplayer`, { id: playerToDelete });
            localStorage.setItem("user", JSON.stringify(response.data.user));
            const user = localStorage.getItem("user");
            await setUserInfo(user);
        } catch (error) {
            alert(error.response.data);
        }
    }


    useEffect(() => {

        if (userInfo) {
            setPlayers(userInfo.players);
        };

    }, [userInfo]);



    return (
        <div className="players">
            <h3>Players</h3>
            <div className="players-block">
                <div className="player-input">
                    <form>
                        <input type="number" name="" required value={inputNo} id="number" maxLength="2" placeholder="No." onChange={handleOnChangeNo} />
                        <input type="text" name="" required value={inputName} id="name" maxLength="20" placeholder="Name" onChange={handleOnChangeName} />
                        <button className="btn-players" type="submit" onClick={handleOnSubmit}>+</button>
                    </form>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players && players.map((player) => {
                            return (

                                <tr key={getRandNum()}>
                                    <th>{player.no}</th>
                                    <th>{player.name}
                                    </th>
                                    <th>
                                        <img id={player._id} className="close-btn" onClick={handleRemovePlayer} src={deleteBtn} alt="" />
                                    </th>
                                </tr>

                            );
                        })}
                    </tbody>
                </table>
            </div>
            <AddFormation />
        </div >
    );
};

export default Players;
