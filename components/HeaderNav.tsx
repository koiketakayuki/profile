import React, { FunctionComponent } from 'react';

const HeaderNav: FunctionComponent = props => (
  <nav>
    <ul>{props.children}</ul>
    <style jsx>{`
      ul {
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
