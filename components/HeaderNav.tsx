import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

const HeaderNav: FunctionComponent = props => (
  <nav>
    <ul>{props.children}</ul>
    <style jsx>{`
      nav {
        flex-grow: 1;
        text-align: center;
      }
    `}</style>
  </nav>
);

HeaderNav.propTypes = {
  children: PropTypes.node
};

export default HeaderNav;
