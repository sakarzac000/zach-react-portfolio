import React from 'react';
import { Link } from 'react-router-dom'

const BlogItem = props => {
    const {
        id,
        blog_status,
        content,
        title,
        featured_image_url
    }   = props.blogItem;

    return (
        <div>
            <Link to={`/b/${id}`}>
                <h2>{title}</h2>
            </Link>
                <h3>{content}</h3>
        </div>
    )
}

export default BlogItem;