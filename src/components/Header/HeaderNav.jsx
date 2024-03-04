import React from "react";
import HeaderNavItem from "./HeaderNavItem";

export default function HeaderNav() {
    return (
        <nav className="header__nav nav-header">
            <ul className="nav-header__list">
                <HeaderNavItem to={"/"} logo="true">
                    Sonata
                </HeaderNavItem>
                <HeaderNavItem to={"/contacts"}>Контакты</HeaderNavItem>
                <HeaderNavItem to={"/rooms"}>Номера</HeaderNavItem>
                <HeaderNavItem to={""}>Виртуальная экскурсия</HeaderNavItem>
                <HeaderNavItem to={"/auth"}>Вход</HeaderNavItem>
            </ul>
        </nav>
    );
}
