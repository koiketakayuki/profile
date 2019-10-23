import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

interface Heading1Props {
  children: React.ReactNode;
}

const Heading1: FunctionComponent<Heading1Props> = props => (
  <>
    <h1>{props.children}</h1>
    <style jsx>{`
      h1 {
        font-size: 1.6em;
        font-weight: bold;
      }
    `}</style>
  </>
);

Heading1.propTypes = {
  children: PropTypes.node
};

export default Heading1;
