import React, { FunctionComponent } from 'react';

interface PageProps {
  children?: React.ReactNode;
}

const Page: FunctionComponent<PageProps> = props => (
  <main>
    <div className="content-wrap">{props.children}</div>
    <style jsx>{`
      .content-wrap {
        padding: 40px 20px;
      }
      @media screen and (max-width: 480px) {
        .content-wrap {
          padding: 20px 0;
        }
      }
    `}</style>
  </main>
);

export default Page;
