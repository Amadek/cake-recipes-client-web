import React from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends React.Component {
  render () {
    return (
      <nav className='navbar navbar-expand-sm navbar-light bg-light'>
        <span className='navbar-brand mb-0 h1'>Cake Recipes!</span>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>Search</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
