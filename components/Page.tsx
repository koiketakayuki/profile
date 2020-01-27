import React, { FunctionComponent } from 'react';

interface PageProps {
  children?: React.ReactNode;
}

const Page: FunctionComponent<PageProps> = props => (
  <main>
    <div className="content-wrap">{props.children}</div>
    <style jsx>{`
      .content-wrap {
        padding: 20px;
      }
    `}</style>
  </main>
);

export default Page;
