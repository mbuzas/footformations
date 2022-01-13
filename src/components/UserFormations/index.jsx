import React from 'react'
import './UserFormations.css'
import FormationTile from '../FormationTile'
import AddFormation from '../AddFormation'
const UserFormations = () => {
    return (
        <div className='user-formations'>
            <h3>User Formations</h3>
            <div className="formations-block">

                <select name="" id="">
                    <option selected disabled value="">select form</option>
                    <option value="">4x3x1</option>
                    <option value="">2x1x2x1</option>
                    <option value="">5x1</option>
                </select>


            </div>

        </div>
    )
}

export default UserFormations
