import React, { FunctionComponent } from 'react';

interface PageProps {
  children?: React.ReactNode;
}

const Page: FunctionComponent<PageProps> = props => (
  <main>
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

export default Page;
