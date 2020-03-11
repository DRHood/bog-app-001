import React, { Component } from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'

export default class Creature extends Component {

    state = {
        creature: [],
        DisplayEditForm: false,
        HomeRedirect: false,
    }

    componentDidMount() {
        axios.get(`/api/creatures/${this.props.match.params.creatureId}`)
            .then((res) => {
                this.setState({creature: res.data})
            })
    }

    handleToggleEditForm = () => {
        this.setState((state) => {
            return {displayEditForm: !state.displayEditForm}
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.put(`/api/creatures/${this.props.match.params.creatureId}`, this.state.creature)
            .then((res) => {
                console.log(res)
                this.setState({creature: res.data, displayEditForm: false})
            })
    }

    handleEditFormChange = (event) => {
        const copiedCreature = {...this.state.creature}
        copiedCreature[event.target.name] = event.target.value

        this.setState({creature: copiedCreature})
    }

    handleDeleteCreature = () => {
        axios.delete(`/api/creatures/${this.props.match.params.creatureId}`)
            .then(() => {
                this.setState({HomeRedirect: true})
            })
    }

    render() {
        
        if(this.state.HomeRedirect) {
            return <Redirect to="/" />
        }
            
        
        return (
            <div>
                <Link to="/">Back to Home</Link>
                <button onClick={this.handleToggleEditForm}>Edit Creature</button>
                <button onClick={this.handleDeleteCreature}>Delete Creature</button>
                {
                    this.state.displayEditForm
                        ? <form onSubmit={this.handleSubmit}>
                            <div>
                                <label htmlFor="creature-name">Creature Name</label>
                                <input  
                                    type="text"
                                    name="name"
                                    id="creature-name"
                                    value={this.state.creature.name}
                                    onChange={this.handleEditFormChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="creature-description">Creature Description</label>
                                <input
                                    type="text"
                                    name="description"
                                    id="creature-description"
                                    value={this.state.creature.description}
                                    onChange={this.handleEditFormChange}
                                />
                            </div>
                            <input type="submit" value="Update Creature" />
                        </form>
                        : <div>
                            <h2>{this.state.creature.name}</h2>
                            <p>{this.state.creature.description}</p>
                        </div>
                }
            </div>
        )
    }
}