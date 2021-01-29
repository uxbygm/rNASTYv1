import Head from "next/head";
import LoginLayout from "./components/ui/layouts/Login";
import LoginBlock from "./components/ui/organisms/login/LoginBlock";

const LoginPage = () => (
  <>
    <Head>
      <title>JigSaw: Login</title>
    </Head>
    <LoginBlock></LoginBlock>
  </>
);
LoginPage.Layout = LoginLayout;
export default LoginPage;
