import Head from "next/head";
import NavBlock from "./components/ui/organisms/nav/NavBlock";

export default function Home() {
  return (
    <>
      <Head>
        <title>JigSaw: Dashboard</title>
      </Head>
      <NavBlock />
      <h1>Welcome To JigSaw Dashboard!</h1>
    </>
  );
}
