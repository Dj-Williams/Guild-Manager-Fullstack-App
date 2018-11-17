import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Just a lil style so I see what I'm working with!
const AdventurerContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    border: 2px dotted green;
`

const AdventurerStyle = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
    width: 500px;
    height: 300px;
    background: #f1faee;
    margin: 10px 10px;
    border: 1px solid black;
`

const AdventurerTitleStyle = styled.div`
    padding-bottom: 25px;
    border: 1px solid black;
    padding-top: 30px;
    margin-bottom: 50px;
    background-color: black;
    color: white;
`
class RosterPage extends Component {
    state = {
        quest: {},
        adventurers: [],
    }

    // Retrieve all the data upon pageload.
    componentDidMount() {
        // Making a request to the database to get all the quest data.
        const questId = this.props.match.params.questId
        axios.get(`/api/quests/${questId}`).then((response) => {
            this.setState({ 
                quest: response.data, 
                adventurers: response.data.adventurers})
        })
    }

    render() {
        return (
            <AdventurerContainer>
                <div>

                    <h1>The {this.state.quest.questName} Mission Roster Page!</h1>
                    <AdventurerStyle>
                        {this.state.adventurers.map((adventurer) => (
                            <adventurer key={adventurer._id}>

                                <Link to={`/adventurers/${adventurer._id}`}>
                                <AdventurerTitleStyle>
                                    {adventurer.name}
                                </AdventurerTitleStyle>
                                </Link>
                                    <div>
                                        
                                    </div>

                                    {adventurer.description}
                                

                            </adventurer>
                        ))}
                    </AdventurerStyle>
                </div>
            </AdventurerContainer>
        );
    }
}

export default RosterPage;