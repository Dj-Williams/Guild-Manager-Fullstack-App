import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'axios'

class AdventurerForm extends Component {
    state = {
        adventurers: [],
        newAdventurer: {
            image: '',
            name: '',
            classSpecialization: '',
            biography: '',
        }
    }

    // This handles the input fields of the form, by allowing the user to type things in and have their inputs recognized and saved. 
    handleChange = (event) => {
        // This clones the old state into a new temporary state of newQuest
        const updatedNewAdventurer = { ...this.state.newAdventurer }
        updatedNewAdventurer[event.target.name] = event.target.value
        this.setState({ newAdventurer: updatedNewAdventurer })
    }
    // This handles the creation of a new quest w/ the post command. 
    handleSubmit = (event) => {
        let questId = this.props.match.params.questId
        axios.post(`/api/quests/${questId}`, this.state.newAdventurer)
            .then(res => {
                this.props.history.push(`/quests/${questId}`)
            })
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>Create a New Adventurer</h1>

                <form onSubmit={this.handleSubmit}>

                    <div>
                        <label htmlFor="name">Adventurer  Name</label>
                        <input onChange={this.handleChange} value={this.state.newAdventurer.name} type="text" name="name" />
                    </div>

                    <div>
                        <label htmlFor="classSpecialization"> Class: </label>
                        <input onChange={this.handleChange} value={this.state.newAdventurer.classSpecialization} type="text" name="classSpecialization" />
                    </div>

                    <div>
                        <label htmlFor="description"> Description </label>
                        <input onChange={this.handleChange} value={this.state.newAdventurer.biography} type="text" name="biography" />
                    </div>

                    <div>
                        <label htmlFor="image"> Description </label>
                        <input onChange={this.handleChange} value={this.state.newAdventurer.image} type="text" name="image" />
                    </div>

                    
                    <button type="submit">Create Adventurer</button>
    

                </form>
            </div>
        );
    }
}

export default AdventurerForm;