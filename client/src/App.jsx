import { useContext, useEffect, useState } from "react";
import "./assets/scss/style.scss";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ContactsPage } from "./pages/ContactsPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { Rooms } from "./pages/Rooms";
import { MainPage } from "./pages/MainPage";
import { Context } from "./main";
import { observer } from "mobx-react-lite";
import { AccountPage } from "./pages/AccountPage";
import { ExcursionPage } from "./pages/ExcursionPage";

function App() {
    const { store } = useContext(Context);
    useEffect(() => {
        if (localStorage.getItem("token")) {
            store.checkAuth();
        }
    }, []);
    console.log(store.user.fullName);
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/auth/login" element={<LoginPage />} />
                <Route path="/auth/register" element={<RegisterPage />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/me" element={<AccountPage />} />
                <Route path="/" element={<MainPage />} />
                <Route path="/excursion" element={<ExcursionPage />} />
            </Route>
        </Routes>
    );
}

export default observer(App);
