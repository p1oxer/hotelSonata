import React from "react";
import { Link } from "react-router-dom";
export default function HeaderNavItem({ children, logo, to }) {
    return (
        <li className={logo ? "nav-header__item _header-logo" : "nav-header__item"}>
            <Link
                to={to}
                className={logo ? "nav-header__link _header-logo" : "nav-header__link"}
            >
                {children}
            </Link>
        </li>
    );
}
