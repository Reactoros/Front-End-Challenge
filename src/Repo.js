import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

//function that calculate the time difference to return how much days the repo was created
const CalculateInterval = creation => {
  let today = new Date();
  let diffc = creation.getTime() - today.getTime();
  return Math.round(Math.abs(diffc / (1000 * 60 * 60 * 24)));
}

//setting up the repo
const Repo = props => {
  return (
    <div className="row mt-5">
      <div className="col-1">
        <a target="blank" href={props.html_url}><img alt='repo' src={`${props.avatar_url}`} className="img-fluid img-thumbnail mt-2" /></a>
      </div>
      <div className="col-6 ml-5">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <label className="border border-dark p-2 mr-2">stars: {props.stargazers_count}</label> <label className="border border-dark p-2 mr-2">issues: {props.open_issues_count}</label><span>Submited {CalculateInterval(new Date(props.createAt))} Days ago by <a target="blank" href={props.profile}>{props.ownerName}</a></span>
      </div>
    </div>
  );
}

export default Repo;