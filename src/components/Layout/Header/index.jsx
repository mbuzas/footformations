import React, { useContext } from "react";
import AppContext from "../../../context/appContext";
import "./Header.css";

const Header = () => {
    const { removeUserFromLocalStorage, userInfo } = useContext(AppContext);


    return (
        <div className="row">
            <header>
                <div className="logout-icon">LOGOUT→</div>
                <div className="header-left">

                    Hello, <span> {userInfo && userInfo.username}</span>

                </div>
                <div className="header-title">
                    <h1>FootForm</h1>
                </div>
                <div className="header-right">

                    {/* <p>Squad</p>
                    <select name="" id="">
                        <option value="">5x5</option>
                        <option value="">7x7</option>
                        <option value="">11x11</option>
                    </select> */}
                    <div className="logout" onClick={removeUserFromLocalStorage}>
                        Logout
                    </div>

                </div>
            </header>
        </div>
    );
};

export default Header;
