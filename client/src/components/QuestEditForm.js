import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'


class QuestEditForm extends Component {
    state = {
        newQuest: {
            questName: '',
            description: ''
        }
    }

    getQuestInfo = () => {
        let questId = this.props.match.params.questId
        axios.get(`api/quests/${questId}`)
        .then(res => { 
            this.setState({
                questName: res.data.questName,
                description: res.data.description
            })
        })
    }
    
    // This handles the input fields of the form, by allowing the user to type things in and have their inputs recognized and saved. 
    handleChange = (event) => {
        // This clones the old state into a new temporary state of newQuest
        const updatedNewQuest = {...this.state.newQuest}
        updatedNewQuest[event.target.name] = event.target.value
        this.setState({ newQuest: updatedNewQuest })
    }
    // This handles the creation of a new quest w/ the post command. 
    handleUpdate = (event) => {
        let questId = this.props.match.params.questId
        axios.patch(`/api/quests/${questId}`, this.state.newQuest).then(res => {
            this.props.history.push(`/quests/${questId}/${res.data._id}`)
        })
        event.preventDefault()
    }
    
    componentWillMount(){
        this.getQuestInfo()
    }

    render() {
        return (
            <div>

                <h1>Quest Editor!</h1>


                <form onSubmit={this.handleUpdate}>

                    <div>
                        <label htmlFor="questName">Quest Name</label>
                        <input onChange={this.handleChange} value={this.state.questName} type="text" name="questName" />
                    </div>

                    <div>
                        <label htmlFor="description"> Description </label>
                        <input onChange={this.handleChange} value={this.state.description} type="text" name="description" />
                    </div>
                
                <Link to={`/quests`}>
                <button type="submit">Submit Edits</button>         </Link> 

                </form>

            </div>
        );
    }
}

export default QuestEditForm;