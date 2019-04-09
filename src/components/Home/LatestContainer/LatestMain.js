import React from 'react';
import { Link } from 'react-router-dom';

const LatestMain = ({ article }) => {
  const authorFullName = article.authorFirstName + ' ' + article.authorLastName;
  const datePublished = new Date(String(article.date) + ':EST');

  return (
    <div id="latest-main">
      <div id="latest-img">
        <img id="latest-main-img" src={article.mainImage} alt={article.mainImageInfo + ' article image'} />
      </div>

      <div id="main-text-right">
          <Link to={`/articles/${article.id}`} id="main-title-link">
            <h3><span id="text-right-title">{article.title}</span></h3>
          </Link>
          <small id="latest-main-info">{datePublished.toDateString()}</small>
          <small id="latest-main-info">{authorFullName}</small>
      </div>

      <div id="main-text-bottom">
        <p id="latest-bottom-text">
          {article.shortDesc}...
        </p>
        <Link to={`/articles/${article.id}`} id="latest-main-link">Read Article</Link>
      </div>
    </div>
  );
}

export default LatestMain;