import React, { FunctionComponent } from 'react';

const HeaderNav: FunctionComponent = props => (
  <nav>
    {props.children}
    <style jsx>{`
      nav {
        border-top: 1px solid;
        border-bottom: 1px solid;
        border-color: #888888;
        display: flex;
        padding: 0 20px;
      }
    `}</style>
  </nav>
);

export default HeaderNav;
