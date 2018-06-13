import React from 'react';
import {
    Route,
    Link
} from 'react-router-dom';

const CustomLink = ({ children, to, exact }) => (
  <Route path={to} exact={exact} children={({ match }) => (
    <div className={ match ? 'active' : ''}>
      {match ? '> ' : ''}
      <Link to={to}>
        { children }
      </Link>
    </div>
  )}/>
);

export default CustomLink;