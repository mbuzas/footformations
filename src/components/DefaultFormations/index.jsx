import React, { useContext } from 'react'
import './DefaultFormations.css'

import AppContext from '../../context/appContext'
const DefaultFormations = () => {
    const { defaultFormations, setSelectedFormationId } = useContext(AppContext)

    const handleSelect = (e) => {
        setSelectedFormationId(e.target.value)
    }
    return (
        <div className='default-formations'>
            <h3>Default Formations</h3>


            <div className="formations-block">
                <select name="" onChange={handleSelect} id="">
                    {defaultFormations.map((formation) => {
                        return <option value={formation._id} key={formation._id}>{formation.title}</option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default DefaultFormations
