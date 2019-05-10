import React, { Component } from 'react';
import ReposList from './RepoList';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import moment from 'moment';
import NavBar from './NavBar';
import Spacing from './Spacing';
import loading from './loading.gif';

class App extends Component {
  // Calculating the last 30 days and formating the output to fit the github API
  constructor() {
    const GetInterval = () => {
      return new moment().subtract(30, 'days').format("YYYY-MM-DD");
    }

    // Setting up the state of the app
    super();
    this.state = {
      repos: [],
      error: 'error',
      loading: true,
      interval: GetInterval(),
      page: 1,
      searchvalue: ''
    }
  }

  componentDidMount() {
    // Getting the data from github API
    axios.get(
      window.encodeURI(
        `https://api.github.com/search/repositories?q=created:>${this.state.interval}&sort=stars&order=desc&page=${this.state.page}`,
      ),
    )
      .then(response => {
        const repos = response.data.items;
        this.setState({
          repos,
          loading: false,
        });
      })
      .catch(error => {
        this.setState({
          error: error,
          loading: false,
        });
      });
  }

  // loading screen
  renderLoading() {
    return (
      <div>
        <img height="1020px" width="100%" alt="loading" src={loading} />
      </div>
    );
  }

  render() {
    //top of the page function
    const scrollFunction = () => {
      window.scrollTo(0, 0);
    }

    // Getting the data when the user clicks the button
    const LoadData = () => {
      axios.get(
        window.encodeURI(
          `https://api.github.com/search/repositories?q=created:>${this.state.interval}&sort=stars&order=desc&page=${this.state.page + 1}`,
        ),
      )
        .then(response => {
          const repos = response.data.items;
          let joined = this.state.repos.concat(repos);
          this.setState({ repos: joined })

        })
        .catch(error => {
          this.setState({
            error: error,
            loading: false,
          });
        });

      this.setState({ page: this.state.page + 1 });
    }

    // Methode for saving the search input text into the state
    const OnChangeValue = (event) => {
      this.setState({ searchvalue: event.target.value })
    }

    // Grab the filtered repos object
    const filtredRepos = this.state.repos.filter(repo => {
      return repo.name.toLowerCase().includes(this.state.searchvalue.toLowerCase());
    })

    // Render methode based on wheater the data is loading or recieved
    if (this.state.loading) {
      return this.renderLoading();
    } else {
      return (
        <div>
          <NavBar OnChangeValue={OnChangeValue} />
          <Spacing />
          <ReposList className="d-inline-block mt-4" Repos={filtredRepos} />
          <button className="btn btn-info mr-2 mb-2 float-right" onClick={LoadData}>Load More ...</button>
          <button className="btn btn-info ml-2 mb-2 float-left" onClick={scrollFunction}>UP</button>
        </div>
      );
    }
  }
}

export default App;
