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
        return (
            <div>
                
            </div>
        )
    }
}
