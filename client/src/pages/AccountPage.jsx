import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { ButtonTransparent } from "../components/UI/ButtonTransparent";
import axios from "axios";
export function AccountPage() {
    const { store } = useContext(Context);
    // const [reservations, setReservations] = useState([]);
    // const [userReservations, setUserReservations] = useState([]);
    // useEffect(() => {
    //     axios
    //         .get("http://localhost:5000/api/getReservations")
    //         .then((reservations) => {
    //             setReservations(reservations.data);
    //         })
    //         .catch((err) => console.log(err));
    // }, []);
    // useEffect(() => {
    //     reservations.forEach((reservation) => {
    //         if (reservation.user == store.user.id) {
    //             setUserReservations([...userReservations, { reservation }]);
    //         }
    //     });
    // }, [reservations]);
    return (
        <section className="account page">
            <div className="account__container">
                <div className="account__body body-account">
                    <ul className="body-account__list">
                        <li className="body-account__info">Имя:{store.user.fullName}</li>
                        <li className="body-account__info">Почта:{store.user.email}</li>
                        <li className="body-account__info">Телефон:{store.user.phone}</li>
                        {store.user.isActivated ? (
                            <li className="body-account__info">
                                Ваш аккаунт активирован, теперь вы можете бронировать
                                номера.
                            </li>
                        ) : (
                            <li className="body-account__info">
                                На вашу почту отправлено письмо с подтверждением аккаунта,
                                активируйте аккаунт чтобы пользоваться всеми функциями.
                            </li>
                        )}
                    </ul>
                    {/* <div className="bookings">
                        <h4 className="bookings__title">Ваши бронирования</h4>
                        <div className="bookings__item"></div>
                    </div> */}
                </div>
                <ButtonTransparent onClick={() => store.logout()}>
                    Выйти
                </ButtonTransparent>
            </div>
        </section>
    );
}
