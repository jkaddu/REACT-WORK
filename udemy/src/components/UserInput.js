import React, { Component } from 'react';

class Input extends Component {
    state = {
        username: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
     return (
        <input
            type='text'
            placeholder='username'
            onChange={}
        />
     )
    }
}