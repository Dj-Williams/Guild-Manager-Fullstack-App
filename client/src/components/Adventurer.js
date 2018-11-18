import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'

class Adventurer extends Component {
    state = {
        image: '',
        name: '',
        classSpecialization: '',
        biography: ''
    }

    componentDidMount() {
        const soul = {
            _id: this.props.adventurer._id,
            image: this.props.adventurer.image,
            name: this.props.adventurer.name,
            classSpecialization: this.props.adventurer.classSpecialization,
            biography: this.props.adventurer.biography,
        }
        this.setState(soul)
        console.log(soul)
    }

    


    render() {
        return (
            <div>
            
            <h1>Name: {this.props.adventurers}</h1>
            
            </div>
        );
    }
}

export default Adventurer;