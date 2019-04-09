import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import ArticlePage from './ArticlePage';

class ArticlePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount() {

    this.props.history.listen(() => {
      window.scrollTo(0, 0);
    });

    axios.get(`https://abdn-cms.herokuapp.com/articles/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          data: res.data
        });
      }).catch(err => console.log(err));
  }
  
  render() {
    if (!this.state.data) return <p>Loading...</p>;

    return (
      <ArticlePage article={this.state.data} />
    );
  }
}

export default withRouter(ArticlePageContainer);