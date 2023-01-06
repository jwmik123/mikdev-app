import { Head } from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Mik development</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
