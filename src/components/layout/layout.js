import Head from "next/head";
import React, { Fragment } from "react";
import Footer from "./Footer/footer";
import styles from "./Layout.module.css";
import Navigation from "./navigation/navigation";
export default function Layout({ pageTitle, children }) {
  return (
    <Fragment>
      <Head>
        <title>Female Daily | {pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.container}>
        <Navigation />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </Fragment>
  );
}
