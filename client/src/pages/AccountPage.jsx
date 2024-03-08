import React, { useContext } from "react";
import { Context } from "../main";
import { ButtonTransparent } from "../components/UI/ButtonTransparent";

export function AccountPage() {
    const { store } = useContext(Context);
    return (
        <section className="account page">
            <div className="account__container">
                <div className="account__body body-account">
                    <p className="body-account__info">{store.user.fullName}</p>
                    <p className="body-account__info">{store.user.email}</p>
                    <p className="body-account__info">{store.user.phone}</p>
                </div>
                <ButtonTransparent onClick={() => store.logout()}>
                    Выйти
                </ButtonTransparent>
            </div>
        </section>
    );
}
