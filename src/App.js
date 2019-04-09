import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DataContext from './AppContext';
import DataApi from './DataApi/DataApi';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Search from './components/Search/Search';
import Support from './components/Support/Support';
import ArticlePageContainer from './components/ArticlePage/ArticlePageContainer';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navStyle: {
          boxShadow: `none`
      },
      navLinks: {
        color: ''
      },
      navLogo: {
        fontSize: 24
      },
      articles: null,
      scrolled: false
    };
  }

  async componentDidMount() {

    const articlesApi = new DataApi('https://abdn-cms.herokuapp.com/articles');
    
    await articlesApi.requestData();
    await this.setState({
      articles: articlesApi.getData()
    });
    

    window.addEventListener('scroll', () => {

      if (window.scrollY > 75 ) {
        if (this.state.scrolled === true) return;
        
        this.setState({
          navStyle: {
            boxShadow: `1px 1px 10px #777777`,
            backgroundColor: '#01101e',
            borderBottom: '#01101e'
          },
          navLinks: {
            color: '#ffffff'
          },
          navLogo: {
            fontSize: 40,
            color: '#ffffff'
          },
          scrolled: true
        });
      } else {
        this.setState({
          navStyle: {
            boxShadow: `none`
          },
          navLinks: {
            color: ''
          },
          navLogo: {
            fontSize: 24
          },
          scrolled: false
        });
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="">
          <Navbar 
            navStyle={this.state.navStyle} 
            navLogo={this.state.navLogo} 
            navLinks={this.state.navLinks}
          />
          <Header />
          <Switch>
            <DataContext.Provider value={this.state.articles}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/search" component={Search} />
              <Route path="/support" component={Support} />
              <Route path="/articles/:id" component={ArticlePageContainer} />
            </DataContext.Provider>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
