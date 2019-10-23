import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from '../components/Header';
import Heading1 from '../components/Heading1';

interface PageProps {
  title: string;
  children?: React.ReactNode;
}

const Page: FunctionComponent<PageProps> = props => (
  <div className="app">
    <Head>
      <title>koiketakayuk&#39;s Page</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="keywords" content="koiketakayuki,profile,engineer" />
      <meta name="description" content="koiketakayuki's profile page" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
      />
    </Head>
    <Header></Header>
    <main>
      <Heading1>{props.title}</Heading1>
      <div>{props.children}</div>
    </main>
    <style jsx>{`
      .app {
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow: hidden:
      }
      main {
        flex-grow: 1;
        padding: 20px;
      }
    `}</style>
    <script src="/__/firebase/7.2.1/firebase-app.js"></script>
    <script src="/__/firebase/7.2.1/firebase-analytics.js"></script>
    <script src="/__/firebase/init.js"></script>
  </div>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Page;
