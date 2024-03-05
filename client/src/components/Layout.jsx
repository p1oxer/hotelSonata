import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import { Footer } from "../components/Footer/Footer";
export function Layout() {
    return (
        <div className="wrapper">
            <div className="main-page">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
}
