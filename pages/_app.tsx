import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';

class MyApp extends App {
  render(): React.ReactElement {
    const { Component, pageProps } = this.props;

    return (
      <div className="app">
        <Head>
          <title>koiketakayuk&#39;s page</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="keywords" content="koiketakayuki,profile,engineer" />
          <meta name="description" content="koiketakayuki's profile page" />
          <link rel="icon" href="/favicon.ico"></link>
          <link rel="manifest" href="/manifest.json"></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
          />
        </Head>
        <div className="app-header">
          <Header></Header>
        </div>
        <Component {...pageProps}></Component>
        <script src="/__/firebase/7.2.1/firebase-app.js"></script>
        <script src="/__/firebase/7.2.1/firebase-analytics.js"></script>
        <script src="/__/firebase/init.js"></script>
        <style jsx>{`
          font-size: 10px;
        `}</style>
      </div>
    );
  }
}

export default MyApp;
