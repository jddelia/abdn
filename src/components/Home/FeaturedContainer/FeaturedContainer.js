import React from 'react';
import FeaturedContent from './FeaturedContent';
import DataContext from '../../../AppContext';

const FeaturedContainer = () => {
  return (
    <DataContext.Consumer >
      {(articles) => {
        if (!articles) return;

        return (
          <div id="featured-container">
            <h2 id="featured-heading"><span>Featured</span></h2>
            <FeaturedContent article={articles[0]} />
            <FeaturedContent article={articles[1]} />
            <FeaturedContent article={articles[2]} />
          </div>
        );
      }}
    </DataContext.Consumer >
  );
}

export default FeaturedContainer;