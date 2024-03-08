import React, { useContext, useState } from "react";
import { ButtonTransparent } from "./UI/ButtonTransparent";
import { Link } from "react-router-dom";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { store } = useContext(Context);

    return (
        <form action="" className="auth-form">
            <div className="auth-form__box">
                <label htmlFor="email">Почта</label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    type="email"
                    name=""
                    id="email"
                    placeholder="Введите почту"
                />
            </div>
            <div className="auth-form__box">
                <label htmlFor="password">Пароль</label>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    type="password"
                    name=""
                    id="password"
                    placeholder="Введите пароль"
                />
            </div>
            <div className="auth-form__bottom">
                <ButtonTransparent
                    onClick={() => {
                        store.login(email, password);
                    }}
                    type={"button"}
                    className="auth-form__button"
                >
                    Войти
                </ButtonTransparent>
                <Link className="auth-form__link" to="/auth/register">
                    Ещё нет аккаунта?
                </Link>
            </div>
        </form>
    );
}
export default observer(LoginForm);
