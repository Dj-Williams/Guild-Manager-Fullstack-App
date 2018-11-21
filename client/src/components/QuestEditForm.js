import React, { Component } from 'react';
import axios from 'axios'


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
        // Axios.patch is the action, .then is what happens after its finished with the action!
        axios.patch(`/api/quests/${questId}`, this.state.newQuest)
            .then(res => {
            // This bit of navagates the user to the quest page to see the changes. 
            this.props.history.push(`/quests`)
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
                
                
                <button type="submit">Submit Edits</button>         
                

                </form>

            </div>
        );
    }
}

export default QuestEditForm;