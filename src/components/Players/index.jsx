import React, { useContext, useState } from 'react'
import AppContext from '../../context/appContext'
import AddFormation from '../AddFormation'
import './Players.css'


const Players = () => {
    const { players, setPlayers } = useContext(AppContext)
    const getRandNum = () => Math.floor(Math.random() * 100);
    const [inputNo, setInputNo] = useState('')
    const [inputName, setInputName] = useState('')
    const handleOnChangeNo = (e) => {
        setInputNo(parseInt(e.target.value));
    }
    const handleOnChangeName = (e) => {
        setInputName(e.target.value);
    }
    const handleOnSubmit = (ev) => {
        ev.preventDefault();
        const newPlayer = { no: inputNo, name: inputName, _id: getRandNum() }
        setInputNo('');
        setInputName('');
        setPlayers((prevPlayers) => {
            return [...prevPlayers, newPlayer]
        })
    }


    return (
        <div className='players'>
            <h3>Players</h3>
            <div className="players-block">
                <div className="player-input">
                    <form>
                        <input type="number" name="" required value={inputNo} id="number" maxLength={2} placeholder='No.' onChange={handleOnChangeNo} />
                        <input type="text" name="" required value={inputName} id="name" maxLength={20} placeholder='Name' onChange={handleOnChangeName} />
                        <button className='btn-players' type='submit' onClick={handleOnSubmit}>+</button>
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
                        {players.map((player) => {
                            return (<tr key={player.no + player.name}>
                                <th>{player.no}</th>
                                <th>{player.name}</th>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
            <AddFormation />
        </div>
    )
}

export default Players
