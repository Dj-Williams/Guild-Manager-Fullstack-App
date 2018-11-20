import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import QuestForm from './QuestForm'



// Just a lil style so I see what I'm working with!
const QuestContainer = styled.div`
    display: flex
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
    width: 100vw;
    height: 25v;
    background: #f1faee;
    margin: 10px 10px;
    border: 1px solid black;
`

const QuestTitleStyle = styled.div`
    display: inline-flex;
    padding-bottom: 25px;
    border: 1px solid black;
    padding-top: 30px;
    margin-bottom: 50px;
    background-color: black;
    color: white;
`

const NewQuestButton = styled.button`
    background: royalblue;
    color: black;
    padding: 7.5px 5px;
`

const DeleteButton = styled.button`
    background: goldenrod;
    color: black;
    padding: 7.5px 5px;
`

const EditButton = styled.button`
    background: grey;
    color: black;
    padding: 7.5px 5px;
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

    
    // This will handle the deleting of a single Quest
    handleDelete = (questId) => {
        //const questId = this.props.match.params.questId
        axios.delete(`/api/quests/${questId}`).then((res) => {
            // I call this fetch all quests so that I can see the delete happening in real time. Erase one off the list and return the list again...basically. 
            this.fetchAllQuests()
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

                    
                        {this.state.quests.map((quest) => (
                        <QuestStyle>

                            <div key={quest._id}>

                                <Link to={`/quests/${quest._id}`}>
                                <QuestTitleStyle>
                                    {quest.questName}
                                </QuestTitleStyle>
                                </Link>

                                    {quest.description}

                                {/* ↓ Edit Quest Button ↓ */}
                                <Link to={`/quests/edit/${quest._id}`}>
                                {/* The onclick function is a synthetic event, I'm passing the quest Id through because I dont need to pass the params. questid has already been defined.  */}
                                <EditButton>Quest Editor</EditButton>
                                </Link>
                                {/* ↑ Edit Quest Button ↑ */}

                                {/* ↓ Delete Button ↓ */}
                                <Link to={`/quests`}>
                                {/* The onclick function is a synthetic event, I'm passing the quest Id through because I dont need to pass the params. questid has already been defined.  */}
                                <DeleteButton onClick={()=> this.handleDelete(quest._id)}>Delete this Quest!</DeleteButton>
                                </Link>
                                {/* ↑ Delete Button ↑ */}

                            </div>
                        </QuestStyle>
                        ))}

                </div>
                {/* The Create Quest Form */}
                <NewQuestButton>
            <QuestForm {...this.props}/>
                </NewQuestButton>

            </QuestContainer>
        );
    }
}

export default QuestPage;