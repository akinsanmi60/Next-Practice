import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>SMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello, World</h1>
    </div>
  );
};

export default Home;
