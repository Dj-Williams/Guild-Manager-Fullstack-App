import React, { Component } from 'react';
import axios from 'axios'


class QuestEditForm extends Component {
    state = {
        quests: [],
        newQuest: {
            questName: '',
            description: ''
        }
    }

    componentWillMount(){
        this.getQuestInfo()
    }


    getQuestInfo = () => {
        let questId = this.props.match.params.questId
        axios.get(`api/quests/${questId}`)
        .then(res => { 
            this.setState({
                questName: res.data.newQuest.questName,
                description: res.data.newQuest.description
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
    handleSubmit = (event) => {
        axios.post('/api/quests', this.state.newQuest).then(res => {
            this.props.history.push(`/quests/${res.data._id}`)
        })
        event.preventDefault()
    }


    render() {
        return (
            <div>

                <h1>Quest Editor!</h1>


                <form onSubmit={this.handleSubmit}>

                    <div>
                        <label htmlFor="username">Quest Name</label>
                        <input onChange={this.handleChange} value={this.state.questName} type="text" name="questName" />
                    </div>

                    <div>
                        <label htmlFor="description"> Description </label>
                        <input onChange={this.handleChange} value={this.state.description} type="text" name="description" />
                    </div>

                <button type="submit">Create Quest</button>                

                </form>

            </div>
        );
    }
}

export default QuestEditForm;