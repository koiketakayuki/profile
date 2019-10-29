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
    <dt role="label">{label}</dt>
    <dd role="description">{children}</dd>
    <style jsx>{`
      dt {
        font-weight: bold;
        font-size: 1.2em;
      }
      dt:not(:first-child) {
        margin-top: 12px;
      }
      dd {
        padding: 8px 16px;
      }
    `}</style>
  </>
);

Description.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Description;
