import Link from "next/link";
const Nav = () => (
  <div>
    <h3>Link</h3>
    <ul>
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
    </ul>
    {/* //可以直接對element下style */}
    {/* 並且這種寫法是component-based，不會這個component以外 */}
    <style jsx>{`
      h3 {
        color: teal;
      }
      ul {
        color: teal;
        list-style: none;
        display: flex;
      }
      ul li {
        font-size: 18px;
        margin-right: 20px;
      }
    `}</style>
  </div>
);

export default Nav;
