import React from "react";
import { ButtonTransparent } from "./UI/ButtonTransparent";
import { Link } from "react-router-dom";
export function RegisterForm() {
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
                <label htmlFor="fullname">ФИО</label>
                <input
                    required
                    type="tel"
                    name=""
                    id="fullname"
                    placeholder="Введите ваше ФИО"
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
            <div className="auth-form__box">
                <label htmlFor="password-repeat">Повторите пароль</label>
                <input
                    required
                    type="password"
                    name=""
                    id="password-repeat"
                    placeholder="Введите пароль"
                />
            </div>
            <div className="auth-form__bottom">
                <ButtonTransparent type={"submit"} className="auth-form__button">
                    Зарегистрироваться
                </ButtonTransparent>
                <Link className="auth-form__link" to="/auth/login">
                    Уже есть аккаунт?
                </Link>
            </div>
        </form>
    );
}
