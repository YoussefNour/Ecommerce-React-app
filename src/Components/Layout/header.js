import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to={"/"}>
          SchoolApp
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink className="nav-link" to={"/"}>
                Home <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
