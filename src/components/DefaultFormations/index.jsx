import React, { useContext } from 'react'
import './DefaultFormations.css'

import AppContext from '../../context/appContext'
const DefaultFormations = () => {
    const { defaultFormations, setSelectedFormation } = useContext(AppContext)
    const context = useContext(AppContext)
    console.log(context);


    const handleSelect = (e) => {
        setSelectedFormation(e.target.value)
    }
    return (
        <div className='default-formations'>
            <h3>Default Formations</h3>


            <div className="formations-block">
                <select name="" onChange={handleSelect} id="" defaultValue='Default'>
                    {defaultFormations.map((formation) => {
                        return <option value={formation.title} key={formation._id}>{formation.title}</option>
                    })}
                    <option value="Default">Default</option>

                </select>
            </div>
        </div>
    )
}

export default DefaultFormations
