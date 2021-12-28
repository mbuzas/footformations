import React from 'react'
import './DefaultFormations.css'
import FormationTile from '../FormationTile'
const DefaultFormations = () => {
    return (
        <div className='default-formations'>
            <h3>Default Formations</h3>
            <div className="formations-block">
                <FormationTile />
                <FormationTile />
                <FormationTile />
                <FormationTile />
                <FormationTile />
                <FormationTile />
                <FormationTile />
                <FormationTile />
            </div>
        </div>
    )
}

export default DefaultFormations
