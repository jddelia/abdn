import React from 'react';
import { withRouter } from 'react-router-dom';

const About = ({ history }) => {
  history.listen(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div id="about-container">
      <h2 id="about-heading"><span>About</span></h2>
      <div id="about-content">
        <h3 id="about-sub-heading"><span>Mission</span></h3>
        <p className="about-text">
          ABDN is focused on delivering quality content,
          covering a variety of different topics. Good
          ideas and thoughts are worth sharing.
        </p>

        <h3 id="about-sub-heading"><span>Why</span></h3>
        <p className="about-text">
          There are various platforms online, with a simlar model,
          why ABDN? Our model places more focus on diverse content.
        </p>

        <h3 id="about-sub-heading"><span>Team</span></h3>
        <p className="about-text">
          The team is small, but growing, email abdnmag@gmail.com
          if you'd like to join and/or help us grow.
        </p>
      </div>
    </div>
  );
}

export default withRouter(About);