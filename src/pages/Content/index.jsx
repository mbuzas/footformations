import React from 'react'
import DefaultFormations from '../../components/DefaultFormations'
import UserFormations from '../../components/UserFormations'

import Pitch from '../../components/Pitch'
import Players from '../../components/Players'

import './Content.css'
const Content = () => {
    return (
        <div className='content'>
            <div className='row'>
                <DefaultFormations />
                <UserFormations />

            </div>
            <div className='row'>
                <Pitch />
                <Players />
            </div>
        </div >
    )
}

export default Content
