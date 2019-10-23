import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const App: FunctionComponent = props => (
  <main>
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
    {props.children}
    <script src="/__/firebase/7.2.1/firebase-app.js"></script>
    <script src="/__/firebase/7.2.1/firebase-analytics.js"></script>
    <script src="/__/firebase/init.js"></script>
  </main>
);

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
