import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import { ButtonTransparent } from "./UI/ButtonTransparent";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput, {
    isValidPhoneNumber,
    isPossiblePhoneNumber,
} from "react-phone-number-input";
import ru from "react-phone-number-input/locale/ru";

function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState();
    const [fullName, setFullName] = useState("");
    const { store } = useContext(Context);
    const [error, setError] = useState({
        emailError: "",
        passwordError: "",
        phoneError: "",
        nameError: "",
        phoneDirty: false,
        emailDirty: false,
        passwordDirty: false,
    });
    useEffect(() => {
        phone && isPossiblePhoneNumber(phone)
            ? setError({ ...error, phoneError: "" })
            : setError({ ...error, phoneError: "Неправильно набран номер" });

        phone && isValidPhoneNumber(phone)
            ? setError({ ...error, phoneError: "" })
            : setError({ ...error, phoneError: "Неправильно набран номер" });
    }, [phone]);
    const emailHandler = (e) => {
        setEmail(e.target.value);
        setPhone(e.target.value);
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setError({
                ...error,
                emailError: "Неправильно введена почта",
            });
        } else {
            setError({ ...error, emailError: "" });
        }
    };
    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 3) {
            setError({
                ...error,
                passwordError: "Минимальная длина пароля 3 символа",
            });
        } else {
            setError({ ...error, passwordError: "" });
        }
        if (e.target.value.length > 32) {
            setError({
                ...error,
                passwordError: "Максимальная длина пароля 32 символа",
            });
        } else {
            setError({ ...error, passwordError: "" });
        }
    };
    const blurHandler = (e) => {
        switch (e.target.name) {
            case "email":
                setError({ ...error, emailDirty: true });
                break;
            case "password":
                setError({ ...error, passwordDirty: true });
                break;
            case "phone":
                setError({ ...error, phoneDirty: true });
                break;
        }
    };
    return (
        <form action="" className="auth-form">
            <div className="auth-form__box">
                <label htmlFor="email">Почта</label>
                <input
                    onBlur={(e) => blurHandler(e)}
                    onChange={emailHandler}
                    value={email}
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Введите вашу почту"
                />
            </div>
            {error.emailDirty && error.emailError && (
                <p style={{ color: "red" }}>{error.emailError}</p>
            )}
            <div className="auth-form__box">
                <label htmlFor="phone">Номер телефона</label>
                <PhoneInput
                    labels={ru}
                    defaultCountry="RU"
                    onBlur={(e) => blurHandler(e)}
                    value={phone}
                    onChange={setPhone}
                    name="phone"
                    placeholder={"Введите ваш номер телефона"}
                />
            </div>
            {error.phoneDirty && error.phoneError && (
                <p style={{ color: "red" }}>{error.phoneError}</p>
            )}
            <div className="auth-form__box">
                <label htmlFor="fullname">ФИО</label>
                <input
                    onBlur={(e) => blurHandler(e)}
                    onChange={(e) => setFullName(e.target.value)}
                    value={fullName}
                    required
                    type="tel"
                    name="fullname"
                    id="fullname"
                    placeholder="Введите ваше ФИО"
                />
            </div>
            <div className="auth-form__box">
                <label htmlFor="password">Пароль</label>
                <input
                    onBlur={(e) => blurHandler(e)}
                    onChange={passwordHandler}
                    value={password}
                    required
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Введите пароль"
                />
            </div>
            {error.passwordDirty && error.passwordError && (
                <p style={{ color: "red" }}>{error.passwordError}</p>
            )}
            {store.error ? <p style={{ color: "red" }}>{store.error}</p> : null}

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
