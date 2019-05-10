import React , {Component} from 'react';
import ReposList from './RepoList';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import moment from 'moment';





class App extends Component{

  constructor() {

    //function to calculate the last 30 days + format it to match the github API
    const GetInterval = () => {
      return new moment().subtract(30, 'days').format("YYYY-MM-DD");
    }

    //setting the state with the necessary elements
      super()
      this.state = {
          repos : [],
          error: 'error',
          loading: true,
          interval : GetInterval(),
          page : 1
      }

  }



  componentDidMount() {

    //grabbing data from github api using axios and implement it into the state
    axios
      .get(
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

//the loading screen
  renderLoading() {
    return (
      <div>
        LOADING...
      </div>
    );
  }

 
render () {

  //methode that graps data again and push it to the state to display more data
  const LoadData = () => {
    
    axios
    .get(
      window.encodeURI(
        `https://api.github.com/search/repositories?q=created:>${this.state.interval}&sort=stars&order=desc&page=${this.state.page+1}`,
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
    
    this.setState({page:this.state.page+1})
  }

  //condition to check if the data is stillloading to display the loading screen
  if(this.state.loading){
    return this.renderLoading();
  }
  else {

return (
  <div>
      
      <ReposList Repos = {this.state.repos}/>
      <button className="btn btn-info mr-2 mb-2 float-right" onClick={LoadData}>Load More ...</button>
  </div>
  );
}
}
}

export default App;

