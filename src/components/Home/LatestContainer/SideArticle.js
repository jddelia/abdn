import React from 'react';
import { Link } from 'react-router-dom';

const SideArticle = ({ article }) => {
  const authorFullName = article.authorFirstName + ' ' + article.authorLastName;

  return (
    <div className="side-article">
      <img className="side-img" src={article.mainImage} alt={article.mainImageInfo + ' article image'} />
      <div className="side-text">
        <Link className="side-link" to={`/articles/${article.id}`}>
          <h4><span className="side-heading">{article.title}</span></h4>
        </Link>
        <small>{authorFullName}</small>
      </div>
    </div>
  );
}

export default SideArticle;