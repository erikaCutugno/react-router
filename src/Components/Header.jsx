import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="container-xl">
        <nav className="header-nav">
          <ul>
            <li>
              <NavLink to="/">Home Page</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">Chi siamo</NavLink>
            </li>
            <li>
              <NavLink to="/prodotti">Prodotti</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
