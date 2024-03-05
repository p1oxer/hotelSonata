import React from "react";
import HeaderNav from "./HeaderNav";

export function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__body">
                    <HeaderNav />
                </div>
            </div>
        </header>
    );
}
