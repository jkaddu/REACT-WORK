import React from 'react';
import './UserOutput.css';
import UserInput from './UserInput';

const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>Username: {props.username}</p>
            <p>Text to be overwritten</p>
            <UserInput />
        </div>
    )
}

export default userOutput;