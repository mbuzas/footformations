import React, { useEffect, useState } from 'react'
import './Pitch.css'

const Pitch = () => {
    useEffect(() => {
        console.log('loaded');
    });

    const [ObjectMap, setObjectMap] = useState([])
    const [positionX, setPositionX] = useState(0)
    const [positionY, setPositionY] = useState(0)

    const CreateObject = (object) => {
        let NewObject = ObjectMap;
        NewObject.push(object);

        setObjectMap([NewObject]);
    };
    const CreateBox = (style) => {
        let object = {
            top: positionX,
            left: positionY
        };
        let styleObject = Object.assign({}, object, style);
        return (
            <div
                style={styleObject}
                className='futboliukas'
                draggable="true"
                onDragEnd={e => {
                    DragTask(e);
                }}
            ></div>
        );
    };
    const DragTask = (e) => {
        e.target.style.top = e.clientY + "px";
        e.target.style.left = (e.clientX) + "px";
    };
    const CreateOneBox = () => {
        CreateObject(
            CreateBox({

            })
        );
    };



    return (
        <div className='pitch'>
            <h3>Pitch</h3>
            <div className="pitch-block">

                <img src="/images/pitch.svg" alt="" />
                {ObjectMap.map((item, index) => {
                    return item;
                })}
                <div className="circle"></div>
            </div>
            <button type="button" onClick={CreateOneBox}>
                Create Circle!
            </button>
            <div className="container">

            </div>
        </div >
    )
}

export default Pitch
