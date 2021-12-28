import React from 'react'
import './UserFormations.css'
import FormationTile from '../FormationTile'
import AddFormation from '../AddFormation'
const UserFormations = () => {
    return (
        <div className='user-formations'>
            <h3>User Formations</h3>
            <div className="formations-block">

                <FormationTile />
                <FormationTile />
                <FormationTile />
                <FormationTile />
                <FormationTile />
                <FormationTile />


            </div>
            <AddFormation />
        </div>
    )
}

export default UserFormations
