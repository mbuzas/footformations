import React from 'react'
import AddFormation from '../AddFormation'
import './Players.css'


const Players = () => {
    return (
        <div className='players'>
            <h3>Players</h3>
            <div className="players-block">
                <div className="player-input">
                    <form action="">
                        <input type="text" name="" id="number" maxLength={2} placeholder='No.' />
                        <input type="text" name="" id="name" maxLength={20} placeholder='Name' />
                        <button className='btn-players' type='submit'>+</button>
                    </form>
                </div>
                <table>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                    </tr>
                    <tr>
                        <td>99</td>
                        <td>Calcutta</td>
                    </tr>
                    <tr>
                        <td>99</td>
                        <td>Calcutta</td>
                    </tr>
                    <tr>
                        <td>99</td>
                        <td>Calcutta</td>
                    </tr>
                    <tr>
                        <td>99</td>
                        <td>Calcutta</td>
                    </tr>
                </table>
            </div>
            <AddFormation />
        </div>
    )
}

export default Players
