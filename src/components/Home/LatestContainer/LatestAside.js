import React from 'react';
import SideArticle from './SideArticle';

const LatestAside = ({ articles }) => {
  return (
    <div id="latest-aside">
      <SideArticle article={articles[0]} />
      <SideArticle article={articles[1]} />
      <SideArticle article={articles[2]} />
    </div>
  );
}

export default LatestAside;