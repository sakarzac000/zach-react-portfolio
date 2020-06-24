import React, { Component } from "react";
import axios from 'axios';

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list"
import PortfolioForm from "../portfolio/portfolio-form";

export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: []
        }

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this)
        this.handleUnsuccessfulFormSubmission = this.handleUnsuccessfulFormSubmission.bind(this)
    }

    handleSuccessfulFormSubmission(portfolioItem) {
        this.setState({
            portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
        })
    }

    handleUnsuccessfulFormSubmission(error) {
        console.log("handleUnsuccessfulFormSubmission error", error)
    }

    getPortfolioItems() {
        axios.get("https://zachsakar.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", { withCredentials: true } )
        .then(response => {
            this.setState({
                portfolioItems: [...response.data.portfolio_items]
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    componentDidMount() {
        this.getPortfolioItems()
    }

    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <PortfolioForm 
                    handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                    handleUnsuccessfulFormSubmission={this.handleUnsuccessfulFormSubmission}
                    />
                </div>

                <div className="right-column">
                    <PortfolioSidebarList data={this.state.portfolioItems} />
                </div>
            </div>
        )
    }
}