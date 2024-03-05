import React from "react";
import LoginForm from "../components/LoginForm";

export function LoginPage() {
    return (
        <section className="auth page">
            <div className="auth__container">
                <h4 className="auth__title">Авторизация</h4>
                <LoginForm />
            </div>
        </section>
    );
}
