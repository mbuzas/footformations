import React from "react";
import "./AddFormation.css";
const AddFormation = () => {
    const handleOnClick = () => {

    }
    return (
        <div>
            <h3>Add Formation</h3>
            <form action="">
                <input type="text" name="" placeholder="Formation Name.." id="newFormation" />
                <button className="btn-add" type="submit" onClick={handleOnClick}>Save</button>
            </form>
        </div>
    );
};

export default AddFormation;
