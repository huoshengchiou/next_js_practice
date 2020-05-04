import Link from "next/link"; //引入Link連結
import Nav from "../components/Nav";
import Layout from "../components/Layout";

// export default () => <div>about.js</div>;
//當URL直接調整成/about就可以轉到這個頁面
const About = () => (
  <Layout>
    <div>
      {/* <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul> */}
      {/* <Nav /> */}
      <h3>Welcome to Next</h3>
    </div>
  </Layout>
);

export default About;
