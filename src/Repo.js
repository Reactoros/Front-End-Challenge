import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const Repo = (props) => {
return (

  <div className="row mt-5">
    <div className="col-1">
    <a target="blank" href=''><img alt='repo' src=''  className="img-fluid img-thumbnail mt-2" /></a>
    </div>
    <div  className="col-6 ml-5">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <label className="border border-dark p-2 mr-2">stars:154k</label> <label className="border border-dark p-2 mr-2">issues: 17</label><span>Submited 14 Days ago by <a target="blank" href={props.profile}>amin</a></span>
    </div>
</div>


);

}

export default Repo;