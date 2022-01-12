import React, { useContext } from 'react'


const initialState = {
    isLoading: false,
    isMember: false,
}


const AppContext = React.createContext(initialState)


export default AppContext