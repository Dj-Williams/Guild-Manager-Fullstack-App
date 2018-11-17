import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


// Just a lil style so I see what I'm working with!
const QuestContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    border: 2px dotted green;
`

const QuestStyle = styled.div`
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

const QuestTitleStyle = styled.div`
    padding-bottom: 25px;
    border: 1px solid black;
    padding-top: 30px;
    margin-bottom: 50px;
    background-color: black;
    color: white;
`


class QuestPage extends Component {
    state = {
        quests: [],
    }

    fetchAllQuests = () => {
        // Making a request to the database to get all the quest data.
        axios.get(`/api/quests`).then((response) => {
            this.setState({ quests: response.data })
        })
    }

    // Retrieve all the data upon pageload.
    componentDidMount() {
        this.fetchAllQuests()
    }

    render() {
        return (
            <QuestContainer>
                <div>

                    <h1>It's Your Boi the Quests Page!</h1>
                    <QuestStyle>
                        {this.state.quests.map((quest) => (
                            <div key={quest._id}>

                                <Link to={`/quests/${quest._id}`}>
                                <QuestTitleStyle>
                                    {quest.questName}
                                </QuestTitleStyle>
                                </Link>
                                    <div>
                                        
                                    </div>

                                    {quest.description}
                                

                            </div>
                        ))}
                    </QuestStyle>
                </div>
            </QuestContainer>
        );
    }
}

export default QuestPage;