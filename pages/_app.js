import "../styles/globals.css";
import DashboardLayout from "./components/ui/layouts/Dashboard";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DashboardLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
