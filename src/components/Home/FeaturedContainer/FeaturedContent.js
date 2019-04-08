import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedContent = ({ article }) => {
    const authorFullName = article.authorFirstName + ' ' + article.authorLastName;

    return (
        <div className="featured-content">
            <div className="featured-img">
                <img src={article.mainImage} alt={article.mainImageInfo + ' article image'} />
            </div>

            <div className="featured-title">
                <h3>{article.title}</h3>
                <small>{authorFullName}</small>
            </div>
                    
            <Link to={`/articles/${article.id}`} 
                className="featured-btn"
            >
                Read
            </Link>
        </div>
    );
}

export default FeaturedContent;