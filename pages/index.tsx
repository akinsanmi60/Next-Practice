import React from "react";
// import type { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "@tanstack/react-query";

type PropPokemon = {
  name: string;
  url: string;
};

type DataType = {
  initialPokemon: {
    results: PropPokemon[];
  };
};

const getPokemon = (): Promise<DataType> =>
  fetch("https://pokeapi.co/api/v2/pokemon").then(res => res.json());

export async function getServerSideProps() {
  return {
    props: {
      initialPokemon: await getPokemon(),
    },
  };
}

const Home = (initialPokemon: DataType) => {
  const { data } = useQuery(["akinsanmi"], getPokemon, {
    initialData: initialPokemon,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return (
    <div>
      <Head>
        <title>SMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello, World</h1>
      <div>
        {data?.initialPokemon.results?.map((item: { name: string }) => (
          <div key={item.name}>
            <p>{item.name}</p>
          </div>
        ))}
        {data?.initialPokemon.results?.map((item: { name: string }) => (
          <div key={item.name}>
            <p>{item.name}</p>
          </div>
        ))}
        {data?.initialPokemon.results?.map((item: { name: string }) => (
          <div key={item.name}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
