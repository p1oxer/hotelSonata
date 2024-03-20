import React, { useContext } from "react";
import { Context } from "../main";
import { ButtonTransparent } from "../components/UI/ButtonTransparent";

export function AccountPage() {
    const { store } = useContext(Context);
    return (
        <section className="account page">
            <div className="account__container">
                <div className="account__body body-account">
                    <ul className="body-account__list">
                        <li className="body-account__info">{store.user.fullName}</li>
                        <li className="body-account__info">{store.user.email}</li>
                        <li className="body-account__info">{store.user.phone}</li>
                    </ul>
                </div>
                <ButtonTransparent onClick={() => store.logout()}>
                    Выйти
                </ButtonTransparent>
            </div>
        </section>
    );
}
