import React, { Component } from 'react';
import axios from 'axios';


export default class BlogDetail extends Component {
    constructor(props) {
        super(props)


        this.state = {
            currentId: this.props.match.params.slug
        }

        this.getBlogItem = this.getBlogItem.bind(this)
    }

    getBlogItem() {
        axios.get(`https://zachsakar.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`)
        .then(response => {
            this.setState({
                blogItem: response.data.portfolio_blog
            })
        })
        .catch(error => console.log('getBlogItem error', error))
    }

    componentDidMount() {
        this.getBlogItem();
    }

    render() {
        // const {
        //     title,
        //     content,
        //     featured_image_url,
        //     blog_status
        // } = this.state.blogItem;
        console.log('currentID', this.state.currentId)
        return (
            <div>
                <h1>Blog Detail</h1>
            </div>
        )
    }
}