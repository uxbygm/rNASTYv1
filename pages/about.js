import Head from "next/head";
import InfoLayout from "./components/ui/layouts/Info";
import NavBlock from "./components/ui/organisms/nav/NavBlock";

const AboutPage = () => (
  <>
    <Head>
      <title>JigSaw: About</title>
    </Head>
    <NavBlock />
    <h1>About Page</h1>
  </>
);
AboutPage.Layout = InfoLayout;
export default AboutPage;
