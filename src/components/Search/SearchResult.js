import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = ({ article }) => {
  const authorFullName = article.authorFirstName + ' ' + article.authorLastName;
  let formattedDate = article.date;
  formattedDate = formattedDate.replace(/-/g,'/');
  
  const datePublished = new Date(String(formattedDate));
  
  return (
    <div id="search-result">
      <div id="result-img-container">
        <img id="result-img" src={article.mainImage} alt={article.mainImageInfo + ' article image'} />
      </div>
      <div id="result-content">
        <Link id="result-link" to={`/articles/${article.id}`}>
          <h3 id="result-title"><span id="result-heading">{article.title}</span></h3>
        </Link>
        <small id="result-details">{authorFullName} | {datePublished.toDateString()}</small>
        <div id="result-body">
          <p id="result-body-text" dangerouslySetInnerHTML={{__html: article.richBody}}></p>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;