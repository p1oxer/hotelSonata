import React, { useContext } from "react";
import HeaderNavItem from "./HeaderNavItem";
import { Context } from "../../main";
export default function HeaderNav() {
    const { store } = useContext(Context);
    return (
        <nav className="header__nav nav-header">
            <ul className="nav-header__list">
                <HeaderNavItem to={"/"} logo="true">
                    Sonata
                </HeaderNavItem>
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
    );
}
