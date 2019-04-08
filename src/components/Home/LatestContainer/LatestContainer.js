import React from 'react';
import LatestMain from './LatestMain';
import LatestAside from './LatestAside';
import DataContext from '../../../AppContext';

const LatestContainer = () => {
  return (
    <DataContext.Consumer >
      {(articles) => {
        if (!articles) return;
        
        return (
          <div id="latest-container">
            <h2 id="latest-heading"><span>Latest</span></h2>
            <div id="latest-content">
              <LatestMain article={articles[0]} />
              <LatestAside articles={articles.slice(0, 3)} />
            </div>
          </div>
        );
      }}
    </DataContext.Consumer>
  );
}

export default LatestContainer;