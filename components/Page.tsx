import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import Heading1 from '../components/Heading1';

interface PageProps {
  title: string;
  children?: React.ReactNode;
}

const Page: FunctionComponent<PageProps> = props => (
  <main>
    <Heading1>{props.title}</Heading1>
    <div className="content-wrap">{props.children}</div>
    <style jsx>{`
      .content-wrap {
        padding: 20px 0;
      }
      main {
        flex-grow: 1;
        padding: 32px 64px;
      }
    `}</style>
  </main>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Page;
