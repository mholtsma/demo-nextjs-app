import Head from "next/head";
import { Typography } from "@material-ui/core";

import BasicSearch from "../components/BasicSearch";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My demo Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography variant="h1">MTG Search</Typography>
      <BasicSearch />
    </div>
  );
}
