import React, { Component } from 'react';
import axios from 'axios'

class AdventurerEditForm extends Component {
    state = {
        newAdventurer: {
            name: '',
            classSpecialization: '',
            biography: '',
            image: '',
        }
    }

    // This function retrives all of the adventurers information and throws it in state.
    getAdventurerInfo = () => {
        let questId = this.props.match.params.questId
        console.log(questId)
        axios.get(`/api/quests/${questId}/adventurer`).then((response) => {
            
            this.setState({
                name: response.data.name,
                classSpecialization: response.data.classSpecialization,
                biography: response.data.biography,
                image: response.data.name
            })
        })
    }

    // This handles the input fields of the form, by allowing the user to type things in and have their inputs recognized and saved. 
    handleChange = () => {
        // This clones the old state into a new temporary state of newQuest
        const newAdventurer = {...this.state.newAdventurer}
        updatedNewAdventurer[event.target.name] = event.target.value
        this.setState({ newAdventurer: updatedNewAdventurer })
    }

    // This handles the creation of a new quest w/ the post command. 
    handleUpdate = (event) => {
        let adventurerId = this.props.match.params.adventurerId
        // Axios.patch is the action, .then is what happens after its finished with the action!
        axios.patch(`/api/edit/adventurers/${adventurerId}`, this.state.newAdventurer)
            .then(res => {
                // This bit of navagates the user to the quest page to see the changes. 
                this.props.history.push(`/quests`)
            })
        event.preventDefault()
    }

    componentWillMount(){
        this.getAdventurerInfo()
    }

    render() {
        return (
            <div>

                <h1>Adventurer Editor!</h1>


                <form onSubmit={this.handleUpdate}>

                    <div>
                        <label htmlFor="name">Adventurer Name: </label>
                        <input onChange={this.handleChange} value={this.state.name} type="text" name="name" />
                    </div>

                    <div>
                        <label htmlFor="biography">Biography: </label>
                        <input onChange={this.handleChange} value={this.state.biography} type="text" name="biography" />
                    </div>

                    <div>
                        <label htmlFor="classSpecialization">Class: </label>
                        <input onChange={this.handleChange} value={this.state.classSpecialization} type="text" name="classSpecialization" />
                    </div>

                    <div>
                        <label htmlFor="image">Character Portrait Image URL: </label>
                        <input onChange={this.handleChange} value={this.state.image} type="text" name="image" />
                    </div>


                    <button type="submit">Submit Edits</button>


                </form>

            </div>
        );
    }
}

export default AdventurerEditForm;