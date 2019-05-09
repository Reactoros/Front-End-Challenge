import React , {Component} from 'react';
import ReposList from './RepoList';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import moment from 'moment';





class App extends Component{

  constructor() {

    const GetInterval = () => {
      return new moment().subtract(30, 'days').format("YYYY-MM-DD");
    }

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

  renderLoading() {
    return (
      <div>
        LOADING...
      </div>
    );
  }

 
render () {

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

