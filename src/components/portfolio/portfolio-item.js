import React from "react";
import { Link } from 'react-router-dom';

export default function(props) {
        //Data that we'll need:
        //background image: "thumb_image_url"
        //logo: "logo_url"
        //description: description
        //id: id

        const { id, description, thumb_image_url, logo_url} = props.item;
    return (
        <div>
            <div className="portfolio-item-wrapper">
                <div
                    className="portfolio-img-background"
                    style={{
                        backgroundImage: "url(" + thumb_image_url + ")"
                    }}
                />

                <img src={logo_url} />
                <div>{description}</div>
            </div>

            <Link to={`/portfolio/${id}`}>Link</Link>
        </div>
    )
}