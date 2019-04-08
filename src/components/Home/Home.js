import React from 'react';
import { withRouter } from 'react-router-dom';

import FeaturedContainer from './FeaturedContainer/FeaturedContainer';
import Latestcontainer from './LatestContainer/LatestContainer';

const Home = ({ history}) => {
  history.listen(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Latestcontainer />
      <FeaturedContainer />
    </div>
  );
}

export default withRouter(Home);