import React from 'react';
import Repo from './Repo';
import 'bootstrap/dist/css/bootstrap.css';



const ReposList = ({Repos}) => {
    return (

<div className="container">

{

    Repos.map((repo,i) => {

        return (
                <div key = {i}>
                    
                    <Repo
                        key = {repo.id}
                        name = {repo.name}
                        ownerName = {repo.owner.login}
                        stargazers_count = {repo.stargazers_count}
                        description = {repo.description}
                        avatar_url = {repo.owner.avatar_url}
                        open_issues_count = {repo.open_issues_count}
                        html_url = {repo.html_url}
                        createAt = {repo.created_at}
                        profile = {repo.owner.html_url}
                        
                
                    />
                     <hr color="#999999"/>
                </div>
                );
            })
}

</div>

);
}



export default ReposList;
