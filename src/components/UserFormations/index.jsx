import axios from "axios";
import React, { useContext, useEffect } from "react"
import AppContext from "../../context/appContext";
import "./UserFormations.css"
const UserFormations = () => {

    const { setSelectedFormationId, url, userInfo, setFormationType, userFormations, setUserFormations } = useContext(AppContext);

    const handleSelect = (e) => {
        setSelectedFormationId(e.target.value);
        setFormationType(e.target.id);
    };

    useEffect(() => {
        if (userInfo) {
            const userId = userInfo._id;
            axios.post(url + "/userformations/", { "createdBy": userId })
                .then(function (response) {
                    setUserFormations(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div className="user-formations">
            <h3>User Formations</h3>
            <div className="formations-block">

                <select name="" onChange={handleSelect} id="userformations" defaultValue="Default">
                    <option value="Default" key={"9841321654"} disabled>Not selected</option>
                    {userFormations.map((formation) => {
                        return <option value={formation._id} key={formation._id}>{formation.title}</option>
                    })}

                </select>

            </div>

        </div>
    )
}

export default UserFormations
