import React, { useContext, useState } from "react";
import { Context } from "../../main";

import HeaderNavItem from "./HeaderNavItem";

function Menu() {
    const { store } = useContext(Context);
    const [menuActive, setMenuActive] = useState(false);
    menuActive
        ? document.body.classList.add("lock")
        : document.body.classList.remove("lock");
    return (
        <div className={menuActive ? "header__menu menu menu-open" : "header__menu menu"}>
            <button
                onClick={() => setMenuActive(!menuActive)}
                type="button"
                className="menu__icon icon-menu"
            >
                <span></span>
            </button>
            <nav className="menu__body">
                <ul className="menu__list">
                    <HeaderNavItem to={"/contacts"}>Контакты</HeaderNavItem>
                    <HeaderNavItem to={"/rooms"}>Номера</HeaderNavItem>
                    <li className={"nav-header__item"}>
                        <a
                            target="_blank"
                            href="https://p1oxer.github.io/virtualExcursion/"
                            className="nav-header__link"
                        >
                            Виртуальная экскурсия
                        </a>
                    </li>

                    {store.isAuth ? (
                        <HeaderNavItem to={"/me"}>Аккаунт</HeaderNavItem>
                    ) : (
                        <HeaderNavItem to={"/auth/login"}>Вход</HeaderNavItem>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default Menu;
