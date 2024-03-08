import React, { useContext } from "react";
import LoginForm from "../components/LoginForm";
import { Context } from "../main";

export function LoginPage() {
    const {store} = useContext(Context);
    if(store.isAuth){
        location.assign("/me")
    }
    return (
        <section className="auth page">
            <div className="auth__container">
                <h4 className="auth__title">Авторизация</h4>
                <LoginForm />
            </div>
        </section>
    );
}
