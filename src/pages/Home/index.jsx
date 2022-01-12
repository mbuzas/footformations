import React from 'react'
import DefaultFormations from '../../components/DefaultFormations'
import UserFormations from '../../components/UserFormations'
import Header from '../../components/Layout/Header'

import Footer from '../../components/Layout/Footer'
import Pitch from '../../components/Pitch'
import Players from '../../components/Players'

import './Home.css'
const Home = () => {
    return (
        <>
            <Header />
            <div className='home'>
                <div className='row'>
                    <DefaultFormations />
                    <UserFormations />

                </div>
                <div className='row'>
                    <Pitch />
                    <Players />
                </div>
            </div >
            <Footer />
        </>
    )
}

export default Home
