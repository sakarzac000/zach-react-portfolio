import React, { Component } from "react";

import PortfolioItem from "./portfolio-item"
import axios from "axios"

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: []
        }
        
        this.handleFilter = this.handleFilter.bind(this)
    }

    getPortfolioItems() {
        axios.get('https://zachsakar.devcamp.space/portfolio/portfolio_items')
        .then(response => {
         // handle success
         this.setState({
            data: response.data.portfolio_items
         })
        })
       .catch(function (error) {
         // handle error
         console.log(error);
        })
       .finally(function () {
         // always executed
        });
      }

    portfolioItems() {


        return this.state.data.map(item => {
            return (
            <PortfolioItem 
            key={item.id}
            item={item} />
            );
        });
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Something Else"
        })


    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
            
            
                <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>
                <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>

                <div className="portfolio-items-wrapper">
                    {this.portfolioItems()}
                </div>
            </div>
        )
    }
}