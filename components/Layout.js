import Nav from "./Nav";
import Head from "next/head";

const Layout = (props) => (
  <div>
    <Head>
      {/* 變成網頁頁籤 */}
      <title>I am on top</title>
      <link
        rel="stylesheet"
        // 加入CSS https://bootswatch.com/
        href="https://bootswatch.com/4/darkly/bootstrap.min.css"
      />
    </Head>
    <Nav />
    <div className="container">{props.children}</div>
  </div>
);
export default Layout;
