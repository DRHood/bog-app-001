import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Creatures extends Component {

    state = {
        creatures: [],
        newCreature: {
            name: '',
            description: ''
        },
        isNewFormDisplayed: false
    }

    componentDidMount() {
        this.getAllCreatures()
     }

     getAllCreatures = () => {
        axios.get('/api/creatures')
            .then((res) => {
                this.setState({creatures: res.data})
            })
    }

    handleNewFormChange = (event) => {
        const copiedCreature = {...this.state.newCreature}
        copiedCreature[event.target.name] = event.target.value

        this.setState({newCreature: copiedCreature})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        axios.post('/api/creatures', this.state.newCreature)
            .then(() => {
                this.getAllCreatures()
                this.setState({
                    isNewFormDisplayed: false,
                    newCreature: {
                        name: '',
                        description: ''
                    }
                })
            })
    }

    handleToggleNewForm = () => {
        this.setState((state) => {
            return {isNewFormDisplayed: !state.isNewFormDisplayed}
        })
    }

    render() {
        let creatures = this.state.creatures.map((creature) => {
            return (
                <div>
                    <Link to={`/creatures/${creature._id}`}>{creature.name}</Link>
                </div>
            )
        })

        return (
            <div>
                <h1>Creatures</h1>
                <div>
                    <button onClick={this.handleToggleNewForm}>Add New Creature</button>
                </div>

                {
                    this.state.isNewFormDisplayed
                        ? <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="creature-name">Creature Name</label>
                            <input  
                                type="text"
                                name="name"
                                id="creature-name"
                                value={this.state.newCreature.name}
                                onChange={this.handleNewFormChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="creature-description">Creature Description</label>
                            <input
                                type="text"
                                name="description"
                                id="creature-description"
                                value={this.state.newCreature.description}
                                onChange={this.handleNewFormChange}
                            />
                        </div>
                        <input type="submit" value="Create Creature" />
                    </form>
                    : creatures
                }
            </div>
        )
    }
}