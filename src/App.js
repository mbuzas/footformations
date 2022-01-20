import axios from 'axios';
import './App.css';
import Login from './pages/Login'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import { useEffect, useState } from 'react';

import Loading from './pages/Loading';
import AppContext from './context/appContext'
function App() {
  const users = ['montis', 'romas', 'algis']
  const user = 'montis'



  const [userInfo, setUserInfo] = useState('')

  const checkIsMember = () => {
    const isMember = users.includes(user)
    return isMember
  }
  const [players, setPlayers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isMember, setIsMember] = useState(checkIsMember())
  const [defaultFormations, setDefaultFormations] = useState([])

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
  const initialState = {
    isLoading: isLoading,
    isMember: isMember,
    defaultFormations: defaultFormations,
    selectedFormationId: selectedFormationId,
    selectedFormation: selectedFormation,
    setSelectedFormation,
    setSelectedFormationId,
    userInfo: userInfo,
    players: players,
    setPlayers
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
    axios.get(url + '/users/61e2d0df820086dcd7c8b738')
      .then(function (response) {
        setUserInfo(response.data)
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
