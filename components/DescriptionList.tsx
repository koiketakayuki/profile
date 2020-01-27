import React, { FunctionComponent } from 'react';

interface DescriptionListProps {
  children: React.ReactNode;
}

const DescriptionList: FunctionComponent<DescriptionListProps> = props => (
  <dl role="list">{props.children}</dl>
);

export default DescriptionList;
