import React from 'react';
import { withRouter } from 'react-router-dom';

const Support = ({ history }) => {
  history.listen(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div id="support-container">
      <h2 id="support-heading"><span>Support</span></h2>
      <div id="support-content">
      <h3 id="support-sub-heading"><span>Donate</span></h3>
        <p className="support-text">
          Support our cause by donating. Your support helps
          us continue to deliver quality content.
        </p>

        <h3 id="support-sub-heading"><span>Writers</span></h3>
        <p className="support-text">
          If you are a writer, who <span role="img" aria-label="thumbs-up">👍</span> ABDN, and would like to
          contribute, email us at abdnmag@gmail.com for information.
        </p>

        <h3 id="support-sub-heading"><span>Social</span></h3>
        <p className="support-text">
          Share our content on your favorite social media sites,
          and follow us... We appreciate it!
        </p>
      </div>
    </div>
  );
}

export default withRouter(Support);