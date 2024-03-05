import React from "react";

import { RegisterForm } from "../components/RegisterForm";
export function RegisterPage() {
    return (
        <section className="auth page">
            <div className="auth__container">
                <h4 className="auth__title">Регистрация</h4>
                <RegisterForm />
            </div>
        </section>
    );
}
