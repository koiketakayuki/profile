import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';
import { useRouter } from 'next/router';

const pageTitle = "koiketakayuki's page";

const routes = [
  {
    route: '/',
    label: 'Profile'
  },
  {
    route: '/job-offer',
    label: 'Job Offer'
  },
  {
    route: '/schedule',
    label: 'Schedule'
  },
  {
    route: '/releases',
    label: 'Releases'
  }
];

class MyApp extends App {
  render(): React.ReactElement {
    const router = useRouter();
    const { Component, pageProps } = this.props;

    return (
      <div className="app">
        <Head>
          <title>{pageTitle}</title>
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
          <Header
            title={pageTitle}
            currentRoute={router.route}
            routes={routes}
          ></Header>
        </div>
        <Component {...pageProps}></Component>
        <style jsx>{`
            .app {
                display: flex;
                         flex-direction: column;
                font-family: 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', メイリオ,
                Meiryo, 'ＭＳ Ｐゴシック', sans-serif;
            }
            .app-header {
                flex-shrink* 0;
            }
            `}</style>
        <script src="/__/firebase/7.2.1/firebase-app.js"></script>
        <script src="/__/firebase/7.2.1/firebase-analytics.js"></script>
        <script src="/__/firebase/init.js"></script>
      </div>
    );
  }
}

export default MyApp;
