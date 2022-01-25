import React from "react";
import axios from "axios";
import "./App.css";
import Login from "./pages/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import Loading from "./pages/Loading";
import AppContext from "./context/appContext";
function App() {

  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isMember, setIsMember] = useState(true);

  const [token, setToken] = useState(null);
  const [selectedFormationId, setSelectedFormationId] = useState("61e81a2ae5ff8cafe1a93497");
  const [selectedFormation, setSelectedFormation] = useState([]);
  const [formationType, setFormationType] = useState('defaultformations')

  const localToken = localStorage.getItem("token");
  const localUserInfo = localStorage.getItem("user");

  const url = "http://localhost:5001";
  const registerUser = async (currentUser) => {
    setIsLoading(true);
    try {
      const response = await axios.post(url + "/users/add", currentUser);
      console.log(response);
      const { newUser, token } = response.data;
      setIsLoading(false);
      setToken(token);
      setUserInfo(newUser);

      localStorage.setItem("user", JSON.stringify(newUser));
      localStorage.setItem("token", token);
      setIsMember(true);

    } catch (error) {
      alert(error.response.data);
      setIsLoading(false);
    }
  };
  const loginUser = async (currentUser) => {
    try {
      const response = await axios.post(url + "/users/login", currentUser);
      console.log(response);
      const { user, token } = response.data;
      const newUser = user;
      setUserInfo(newUser);
      setIsLoading(false);
      setToken(token);

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      setIsMember(true);

    } catch (error) {
      alert(error.response.data);
      setIsLoading(false);
    }
  };
  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserInfo(null);
    setToken(null);
    navigate("/login");
  };


  const initialState = {
    isLoading: isLoading,
    isMember: isMember,
    selectedFormationId: selectedFormationId,
    selectedFormation: selectedFormation,
    setSelectedFormation,
    url: url,
    setSelectedFormationId,
    userInfo: localUserInfo ? JSON.parse(localUserInfo) : userInfo,
    token: localToken || token,
    registerUser,
    setIsMember,
    setUserInfo,
    setIsLoading,
    loginUser,
    removeUserFromLocalStorage,
    formationType: formationType,
    setFormationType
  };

  // const addUserToLocalStorage = ({ userInfo, token }) => {
  // localStorage.setItem("user", JSON.stringify(userInfo))
  // localStorage.setItem("token", token)
  // }

  // const removeUserFromLocalStorage = () => {
  //   localStorage.removeItem("token")
  //   localStorage.removeItem("user")
  // }



  return (
    <AppContext.Provider value={initialState}>
      <div className="App">

        <main>
          {isLoading ? <Loading /> :
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />
            </Routes>}


        </main>
      </div>
    </AppContext.Provider>
  );
}

export default App;
