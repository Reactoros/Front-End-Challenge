import React, { Component } from 'react';
import ReposList from './RepoList';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import moment from 'moment';


class App extends Component {
  //calculating the last 30 days and formating the output to fit the github API
  constructor() {
    const GetInterval = () => {
      return new moment().subtract(30, 'days').format("YYYY-MM-DD");
    }

    //setting up the state of the app
    super();
    this.state = {
      repos: [],
      error: 'error',
      loading: true,
      interval: GetInterval(),
      page: 1
    }
  }

  componentDidMount() {
    //getting the data from github API
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

  //loading screen
  renderLoading() {
    return (
      <div>
        LOADING...
      </div>
    );
  }

  render() {
    //getting the data when the user clicks the button
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

    //render methode based on wheater the data is loading or recieved
    if (this.state.loading) {
      return this.renderLoading();
    } else {
      return (
        <div>
          <ReposList Repos={this.state.repos} />
          <button className="btn btn-info mr-2 mb-2 float-right" onClick={LoadData}>Load More ...</button>
        </div>
      );
    }
  }
}

export default App;