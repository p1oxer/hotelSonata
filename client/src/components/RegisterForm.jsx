import React from "react";
import { useContext, useState } from "react";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import { ButtonTransparent } from "./UI/ButtonTransparent";
import { Link } from "react-router-dom";
function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [fullName, setFullName] = useState("");
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
                    placeholder="Введите вашу почту"
                />
            </div>
            <div className="auth-form__box">
                <label htmlFor="phone">Номер телефона</label>
                <input
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
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
                    onChange={(e) => setFullName(e.target.value)}
                    value={fullName}
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
                        store.registration(email, password, phone, fullName);
                    }}
                    type={"button"}
                    className="auth-form__button"
                >
                    Зарегистрироваться
                </ButtonTransparent>
                <Link className="auth-form__link" to="/auth/login">
                    Уже есть аккаунт?
                </Link>
            </div>
        </form>
    );
}

export default observer(RegisterForm);
