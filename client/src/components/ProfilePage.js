import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'


const AdventurerStyle = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
    width: 500px;
    height: 500px;
    background: #f1faee;
    margin: 10px 10px;
    border: 1px solid black;
`

class ProfilePage extends Component {
    state = {
        adventurer: {}
    }

    componentDidMount(){
        this.getMyAdventurer()
    }

    getMyAdventurer = () => {
        const adventurerId = this.props.match.params.adventurerId
        axios.get(`/api/adventurers/${adventurerId}`).then((response) => {
            console.log(response)
            this.setState({
                adventurer: response.data
            })
        })
    }


    render() {
        return (
            <div>

                <h1>Yo from {this.state.adventurer.name}'s profile page!</h1>

                <AdventurerStyle>
                    <img src={this.state.adventurer.image} alt=""/>
                <br></br>
                <br></br>
                <br></br>
                    {this.state.adventurer.classSpecialization}
                <br></br>
                <br></br>
                <br></br>
                    {this.state.adventurer.biography}
                <br></br>
                <br></br>
                <br></br>
                </AdventurerStyle>

            </div>
        );
    }
}

export default ProfilePage;