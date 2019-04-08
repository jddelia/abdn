import React from 'react';

const ArticlePage = ({ article }) => {
  const authorFullName = article.authorFirstName + ' ' + article.authorLastName;
  const datePublished = new Date(String(article.date) + ':EST');
  
  return (
    <div className="article-container">
      <div className="article-title">
        <h2><span className="article-title-header">{article.title}</span></h2>
        <p className="article-title-details">{authorFullName} | {datePublished.toDateString()}</p>
      </div>

      <div className="article-main-image">
        <img className="main-image" src={article.mainImage} alt={article.mainImageInfo + ' article image'} />
        <p className="image-info">{article.mainImageInfo}</p>
      </div>

      <div className="article-body">
        <div className="article-body-content">
          <p dangerouslySetInnerHTML={{__html: article.body}}></p>
        </div>
      </div>

      <div className="article-footer">
        <p><em>This article was written by {authorFullName}.</em></p>
      </div>
    </div>
  );
}

export default ArticlePage;