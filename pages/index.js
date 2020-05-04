import Link from "next/link";
import Nav from "../components/Nav";
import Layout from "../components/Layout";

//加入severside fetch package
import Fetch from "isomorphic-unfetch";

import Prices from "../components/Prices";

// export default () => (
//   <div>
//     Hello Next.jsh3 <h3>testColor</h3>
//   </div>
// );
// npm run dev //terminal

// better sentance
const Index = (props) => (
  <Layout>
    <div>
      {/* <Nav />  不需要再加，用layout包*/}
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
      <h3>Welcome to Next</h3>
      <p>Hello</p>
      {/* {props.bpi.time.updated} */}
      <Prices bpi={props.bpi} />
    </div>
  </Layout>
);
//進行data fetch
Index.getInitialProps = async function () {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const payload = await res.json();
  return {
    bpi: payload.bpi,
  };
};

export default Index;
