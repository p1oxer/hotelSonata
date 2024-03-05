import { useState } from "react";
import "./assets/scss/style.scss";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ContactsPage } from "./pages/ContactsPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { Rooms } from "./pages/Rooms";
import { MainPage } from "./pages/MainPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/auth/login" element={<LoginPage />} />
                <Route path="/auth/register" element={<RegisterPage />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/" element={<MainPage />} />
            </Route>
        </Routes>
    );
}

export default App;
