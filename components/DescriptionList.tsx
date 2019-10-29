import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

interface DescriptionListProps {
  children: React.ReactNode;
}

const DescriptionList: FunctionComponent<DescriptionListProps> = props => (
  <dl role="list">{props.children}</dl>
);

DescriptionList.propTypes = {
  children: PropTypes.node
};

export default DescriptionList;
