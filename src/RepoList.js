import React from 'react';
import Repo from './Repo';
import 'bootstrap/dist/css/bootstrap.css';

//Repos is the object that i got from the github api
const ReposList = ({ Repos }) => {
  return (
    <div className="container m-b-4">
      {
        // Sending the necessary data to replace them into the dom components
        Repos.map((repo, i) => {
          return (
            <div key={i}>
              <Repo
                key={repo.id}
                name={repo.name}
                ownerName={repo.owner.login}
                stargazers_count={repo.stargazers_count}
                description={repo.description}
                avatar_url={repo.owner.avatar_url}
                open_issues_count={repo.open_issues_count}
                html_url={repo.html_url}
                createAt={repo.created_at}
                profile={repo.owner.html_url}
              />
              <hr color="#999999" />
            </div>
          );
        })
      }
    </div>
  );
}

export default ReposList;