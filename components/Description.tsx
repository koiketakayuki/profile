import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

interface DescriptionProps {
  label: string;
  children?: React.ReactNode;
}

const Description: FunctionComponent<DescriptionProps> = ({
  label,
  children
}) => (
  <>
    <dt data-testid="label">{label}</dt>
    <dd data-testid="description">{children}</dd>
    <style jsx>{`
      dt {
        font-weight: bold;
        font-size: 1.4em;
        color: white;
        background: #2948e8;
        padding: 0.4em 1em;
      }
      dt:not(:first-child) {
        margin-top: 12px;
      }
      dd {
        font-size: 1.4em;
        padding: 8px 16px;
        padding: 1em 1em;
      }
    `}</style>
  </>
);

Description.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Description;
