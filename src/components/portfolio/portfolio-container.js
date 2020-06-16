import React, { Component } from "react";

import PortfolioItem from "./portfolio-item"
import portfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            data: [
                {title: "Apex Tracker"},
                {title: "Codewar Katas"}, 
                {title: "Fantastic Fries"},
                {title: "Book Store"}
            ]
        }
    }

    portfolioItems() {

        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"}/>;
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.portfolioItems()}
            </div>
        )
    }
}