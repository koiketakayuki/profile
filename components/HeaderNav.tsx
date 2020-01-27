import React, { FunctionComponent } from 'react';

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

export default HeaderNav;
