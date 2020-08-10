import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            responseUserText: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        axios.post("https://api.devcamp.space/sessions",
        {
            client: {
                email: this.state.email,
                password: this.state.password
            }
        },
        { withCredentials: true }
        ).then(response => {
            if (response.data.status == 'created') {
                this.props.handleSuccessfulAuth();
                this.setState({
                    responseUserText: "You have logged in successfully"
                })
            }
            else {

                this.setState({
                    responseUserText: "Incorrect Username or Password"
                })
                this.props.handleUnsuccessfulAuth();                
            }

        }).catch(err => {
            this.setState({
                responseUserText:"An error occured"
            })
            this.props.handleUnsuccessfulAuth();
        })


        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            responseUserText: ""
        });        
    }


    render() {
        return (
            <div>
                <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>


                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="email" 
                    placeholder="Email" 
                    name="email" 
                    value = {this.state.email}
                    onChange={this.handleChange}
                    className="input-element"
                    />

                    <input 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    value = {this.state.password}
                    onChange={this.handleChange}
                    className="input-element"
                    />

                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}