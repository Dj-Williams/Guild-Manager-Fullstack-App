import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AdventurerForm from './AdventurerForm';

const NewAdventurerButton = styled.button`
    background: royalblue;
    color: black;
    padding: 7.5px 5px;
`

// Just a lil style so I see what I'm working with!
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
class RosterPage extends Component {
    state = {
        quest: {},
        adventurers: [],
    }

    
    // This function retrives all of the quests information and throws it in state.
    getAllQuests = () => {
        // Making a request to the database to get all the quest data.
        const questId = this.props.match.params.questId
        axios.get(`/api/quests/${questId}`).then((response) => {
            this.setState({
                quest: response.data
            })
        })
    }

    // This function retrives all of the adventurers information and throws it in state.
    getAllAdventurers = () => {
        const questId = this.props.match.params.questId
        axios.get(`/api/quests/${questId}/adventurer`).then((response) => {
            this.setState({
                adventurers: response.data
            })
        })
    }
    
    // Retrieve all the data upon pageload.
    componentDidMount() {
        this.getAllQuests()
        this.getAllAdventurers()
    }
    
    render() {

        return (

            <div>

                <h1>The {this.state.quest.questName} Mission Roster Page!</h1>



                {this.state.adventurers.map((adventurer) => (
                    
                    <AdventurerStyle>
                        <Link to={`/adventurers/${adventurer._id}`}>
                        <img src={adventurer.image} alt="" />

                        <h1>{adventurer.name}</h1>

                        {adventurer.classSpecialization}

                        <h4>{adventurer.biography}</h4>
                        </Link>
                    </AdventurerStyle>
                    
                ))}

                {/* The Create Adventurer Form */}
            <NewAdventurerButton>
            <AdventurerForm {...this.props}/>
                </NewAdventurerButton>

            </div>

        );
    }
}

export default RosterPage;