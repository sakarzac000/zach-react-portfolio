import React, { Component } from "react";

export default class InteractiveButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: "red"
        }

        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    handleButtonClick() {
        this.setState({ color: "green" })
    }

    render() {
        return (
            <div>
                <button 
                onClick={this.handleButtonClick}
                style={{backgroundColor: this.state.color}}
                >Click me!</button>
            </div>
        )
    }
}