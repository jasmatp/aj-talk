import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const AppNavbar: React.FC = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const isHome = location.pathname === "/";

  return (
    <nav
      className={`navbar navbar-expand shadow-sm ${
        isDark ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          English Games
        </Link>

        <div className="d-flex ms-auto align-items-center gap-2">
          {!isHome && (
            <Link to="/" className="btn btn-outline-secondary btn-sm">
              ← Home
            </Link>
          )}

          <button
            type="button"
            className="btn btn-outline-info btn-sm"
            onClick={toggleTheme}
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
