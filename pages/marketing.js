import Head from "next/head";
import InfoLayout from "./components/ui/layouts/Info";
import NavBlock from "./components/ui/organisms/nav/NavBlock";

const MarketingPage = () => (
  <>
    <Head>
      <title>JigSaw: Marketing</title>
    </Head>
    <NavBlock />
    <h1>Marketing Page</h1>
  </>
);
MarketingPage.Layout = InfoLayout;
export default MarketingPage;
