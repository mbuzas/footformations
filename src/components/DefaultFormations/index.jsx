import React from 'react'
import './DefaultFormations.css'
import FormationTile from '../FormationTile'
const DefaultFormations = () => {
    return (
        <div className='default-formations'>
            <h3>Default Formations</h3>
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

export default DefaultFormations
