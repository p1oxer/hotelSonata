import React from "react";
import { ButtonTransparent } from "./UI/ButtonTransparent";
import { Link } from "react-router-dom";
export default function LoginForm() {
    return (
        <form action="" className="auth-form">
            <div className="auth-form__box">
                <label htmlFor="phone">Номер телефона</label>
                <input
                    required
                    type="tel"
                    name=""
                    id="phone"
                    placeholder="Введите номер телефона"
                />
            </div>
            <div className="auth-form__box">
                <label htmlFor="password">Пароль</label>
                <input
                    required
                    type="password"
                    name=""
                    id="password"
                    placeholder="Введите пароль"
                />
            </div>
            <div className="auth-form__bottom">
                <ButtonTransparent type={"submit"} className="auth-form__button">
                    Войти
                </ButtonTransparent>
                <Link className="auth-form__link" to="/auth/register">
                    Ещё нет аккаунта?
                </Link>
            </div>
        </form>
    );
}
