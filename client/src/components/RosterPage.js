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

const DeleteButton = styled.button`
    background: goldenrod;
    color: black;
    padding: 7.5px 5px;
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

    // This will handle the deleting of a single Adventurer
    handleDelete = (adventurerId) => {
        const questId = this.props.match.params.questId
        axios.delete(`/api/quests/${questId}/adventurers/${adventurerId}`).then((res) => {
            // I call this fetch all quests so that I can see the delete happening in real time. Erase one off the list and return the list again...basically. 
            this.getAllAdventurers()
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

                        <Link to={`/quests`}>
                                {/* The onclick function is a synthetic event, I'm passing the quest Id through because I dont need to pass the params. questid has already been defined.  */}
                                <DeleteButton onClick={()=> this.handleDelete(adventurer._id)}>Delete this Adventurer!</DeleteButton>
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