import Head from "next/head";
import InfoLayout from "./components/ui/layouts/Info";
import NavBlock from "./components/ui/organisms/nav/NavBlock";

const BlogPage = () => (
  <>
    <Head>
      <title>JigSaw: Blog</title>
    </Head>
    <NavBlock />
    <h1>BlogPage Page</h1>
  </>
);
BlogPage.Layout = InfoLayout;
export default BlogPage;
