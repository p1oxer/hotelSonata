import React, { useContext } from "react";
import { Context } from "../main";

import RegisterForm from "../components/RegisterForm";
export function RegisterPage() {
    const { store } = useContext(Context);
    if (store.isAuth) {
        location.assign("/me");
    }
    return (
        <section className="auth page">
            <div className="auth__container">
                <h4 className="auth__title">Регистрация</h4>
                <RegisterForm />
            </div>
        </section>
    );
}
