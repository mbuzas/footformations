import React from 'react'
import './AddFormation.css'
const AddFormation = () => {
    return (
        <div>
            <h3>Add Formation</h3>
            <form action="">
                <input type="text" name="" placeholder='Formation Name..' id="newFormation" />
                <button className='btn-add' type='submit'>Save</button>
            </form>
        </div>
    )
}

export default AddFormation
