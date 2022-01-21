import axios from 'axios';
import './App.css';
import Login from './pages/Login'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import { useEffect, useState } from 'react';

import Loading from './pages/Loading';
import AppContext from './context/appContext'
function App() {


  const [userInfo, setUserInfo] = useState('')
  const [players, setPlayers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isMember, setIsMember] = useState(false)
  const [defaultFormations, setDefaultFormations] = useState([])
  const [token, setToken] = useState(null);
  const [selectedFormationId, setSelectedFormationId] = useState('61e81a2ae5ff8cafe1a93497')
  const [selectedFormation, setSelectedFormation] = useState(
    [

      {
        x: "700",
        y: "360"
      },

      {
        x: "600",
        y: "420"
      },

      {
        x: "700",
        y: "600"
      },

      {
        x: "700",
        y: "670"
      },

      {
        x: "800",
        y: "420"
      }

    ])

  // const addUserToLocalStorage = ({ userInfo, token }) => {
  // localStorage.setItem('user', JSON.stringify(userInfo))
  // localStorage.setItem('token', token)
  // }

  // const removeUserFromLocalStorage = () => {
  //   localStorage.removeItem('token')
  //   localStorage.removeItem('user')
  // }



  const registerUser = async (currentUser) => {
    setIsLoading(true)
    try {
      const response = await axios.post(url + '/users/add', currentUser)
      console.log(response);
      const { newUser, token } = response.data
      setIsLoading(false)
      setToken(token)
      setUserInfo(newUser)

      // addUserToLocalStorage(userInfo, token)
      localStorage.setItem('user', JSON.stringify(newUser))
      localStorage.setItem('token', token)
      setIsMember(true)

    } catch (error) {
      alert(error.response.data)
      setIsLoading(false);
    }
  }



  const localToken = localStorage.getItem('token')
  const localUserInfo = localStorage.getItem('user')

  const initialState = {
    isLoading: isLoading,
    isMember: isMember,
    defaultFormations: defaultFormations,
    selectedFormationId: selectedFormationId,
    selectedFormation: selectedFormation,
    setSelectedFormation,
    setSelectedFormationId,
    userInfo: localUserInfo ? JSON.parse(localUserInfo) : null,
    token: localToken || token,
    players: players,
    setPlayers,
    registerUser,
    setIsMember

  }
  const url = 'http://localhost:5001'




  const fetch = () => {
    axios.get(url + '/defaultformations')
      .then(function (response) {
        setDefaultFormations(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  const fetch2 = () => {
    axios.get(url + '/users/61e97b9fea33142f377fde98')
      .then(function (response) {
        setPlayers(response.data.players)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  useEffect(() => {
    fetch();
    fetch2()
    setIsLoading(false)
  }, [])


  return (
    <AppContext.Provider value={initialState}>
      <div className='App'>

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
