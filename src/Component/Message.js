import React, { Component } from 'react'

export default class Message extends Component {

    constructor(){
        super()
        this.state = {
        message: 'Welcome visitor 1'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank you visitor 2'
        })
    }

    render() {
        return (
            <>
            <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>

            </>
        )
    }
}

