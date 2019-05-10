import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import github from './github.svg'

const NavBar = ({ OnChangeValue }) => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a target="blank" href="https://www.github.com"><img className="mr-4" height="50px" width="50px" alt="github" src={github} /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a target="blank" className="nav-link" href="https://unitedremote.com">My Dream JoB<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a target="blank" className="nav-link" href="https://github.com/Reactoros?tab=repositories">My GithuB</a>
          </li>
          <li className="nav-item">
            {/* Please forgive me for this , but i had to rhyme.*/}
            <a target="blank" className="nav-link" href="https://www.youtube.com/watch?v=jlMQVcWI7HA">My WubalubadubduB</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input onChange={OnChangeValue} className="form-control mr-sm-2" type="search" placeholder="Search By Title" aria-label="Search" />
          <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Refrech</button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
