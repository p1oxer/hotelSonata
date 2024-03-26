import React, { useContext, useState, useEffect } from "react";
import Modal from "../../store/modal";
import { observer } from "mobx-react-lite";
import axios from "axios";
import ModalBookingRoom from "./ModalBookingRoom";
import { ButtonTransparent } from "../UI/ButtonTransparent";
import { Context } from "../../main";

export default observer(function ModalBooking() {
    const { store } = useContext(Context);
    const [rooms, setRooms] = useState([]);
    const [personsAmount, setPersonAmount] = useState(1);
    const [childrenAmount, setChildrenAmount] = useState(0);
    const [checkInDate, setCheckIn] = useState("");
    const [evictionDate, setEviction] = useState("");
    const [disabledEviction, setDisabledEviction] = useState(true);
    const [disabledRoom, setDisabledRoom] = useState(false);
    useEffect(() => {
        axios
            .get("http://localhost:5000/api/rooms")
            .then((rooms) => {
                setRooms(rooms.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const checkUser = () => {
        if (!store.isAuth || !store.user.isActivated) {
            return false;
        }
        return true;
    };

    async function bookRoom(roomId) {
        const data = {
            user: store.user.id,
            room: roomId,
            personsAmount,
            childrenAmount,
            checkInDate,
            evictionDate,
        };
        await axios
            .post("http://localhost:5000/api/reserve", data)
            .catch((err) => console.log(err));
        location.assign("/me");
    }
    const date = new Date();
    const today = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`;
    const maxDate = `${date.getFullYear()}-0${date.getMonth() + 7}-${date.getDate()}`;
    const [error, setError] = useState({
        checkInError: "",
        evictionError: "",
        personsAmountError: "",
        childrenAmountError: "",
        checkInDirty: false,
        evictionDirty: false,
        personsAmountDirty: false,
        childrenAmountDirty: false,
    });

    useEffect(() => {
        if (checkInDate == "" || evictionDate == "") {
            setDisabledRoom(true);
        } else {
            setDisabledRoom(false);
        }
    }, [error]);
    const checkInHandler = (e) => {
        setCheckIn(e.target.value);
        setDisabledEviction(false);
        // if (new Date(checkInDate).getTime() > new Date(evictionDate).getTime()) {
        //     setError({
        //         ...error,
        //         checkInError: "Дата заезда не может быть позже даты выезда :)",
        //     });
        // } else {
        //     setError({
        //         ...error,
        //         checkInError: "",
        //     });
        // }
    };

    const evictionHandler = (e) => {
        setEviction(e.target.value);
    };

    const personsAmountHandler = (e) => {
        setPersonAmount(e.target.value);
        if (e.target.value < 1 || e.target.value > 5) {
            setError({
                ...error,
                personsAmountError: "Некорректное кол-во человек",
            });
        } else {
            setError({
                ...error,
                personsAmountError: "",
            });
        }
    };
    const childrenAmountHandler = (e) => {
        setChildrenAmount(e.target.value);

        if (e.target.value < 0 || e.target.value > 5) {
            setError({
                ...error,
                childrenAmountError: "Некорректное кол-во детей",
            });
        } else {
            setError({
                ...error,
                childrenAmountError: "",
            });
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "checkIn":
                setError({ ...error, checkInDirty: true });
                break;
            case "eviction":
                setError({ ...error, evictionDirty: true });
                break;
            case "personsAmount":
                setError({ ...error, personsAmountDirty: true });
                break;
            case "childrenAmount":
                setError({ ...error, childrenAmountDirty: true });
                break;
        }
    };
    return (
        <div
            className={Modal.modalActive ? "modal active" : "modal"}
            onClick={() => Modal.setModal(false)}
        >
            <div
                style={!checkUser() ? { overflowY: "hidden" } : null}
                className="modal__content"
                onClick={(e) => e.stopPropagation()}
            >
                {!checkUser() && (
                    <div className="modal__warning">
                        <div className="modal__warning-content">
                            <ButtonTransparent
                                onClick={() => Modal.setModal(false)}
                                type="button"
                                modificator="modal__close"
                            >
                                Закрыть окно бронирования
                            </ButtonTransparent>
                            <p>
                                Перед тем как бронировать, убедитесь, что вы вошли в
                                аккаунт и подтвердили его по почте.
                            </p>
                        </div>
                    </div>
                )}

                <div className="modal__top">
                    <form action="" className="modal__form">
                        <div className="date-input-container date-picker-container">
                            <label htmlFor="">Заезд</label>
                            <input
                                onBlur={(e) => blurHandler(e)}
                                min={today}
                                type="date"
                                className="modal__date modal-inp"
                                value={checkInDate}
                                onChange={checkInHandler}
                                name="checkIn"
                                max={maxDate}
                            />
                        </div>
                        <div className="date-input-container date-picker-container">
                            <label htmlFor="">Выезд</label>
                            <input
                                disabled={disabledEviction}
                                onBlur={(e) => blurHandler(e)}
                                min={checkInDate}
                                type="date"
                                className="modal__date modal-inp"
                                value={evictionDate}
                                onChange={evictionHandler}
                                name="eviction"
                                max={maxDate}
                            />
                        </div>
                        <div className="date-input-container date-picker-container">
                            <label htmlFor="">Кол-во человек</label>
                            <input
                                onBlur={(e) => blurHandler(e)}
                                className="modal__input modal-inp"
                                type="number"
                                min={1}
                                max={5}
                                value={personsAmount}
                                onChange={personsAmountHandler}
                                name="personsAmount"
                            />
                        </div>
                        <div className="date-input-container date-picker-container">
                            <label htmlFor="">Кол-во детей</label>
                            <input
                                onBlur={(e) => blurHandler(e)}
                                className="modal__input modal-inp"
                                type="number"
                                min={0}
                                max={5}
                                value={childrenAmount}
                                onChange={childrenAmountHandler}
                                name="childrenAmount"
                            />
                        </div>
                    </form>
                    <ButtonTransparent
                        onClick={() => Modal.setModal(false)}
                        type="button"
                        modificator="modal__close"
                    >
                        Закрыть окно бронирования
                    </ButtonTransparent>
                </div>
                {error.checkInDirty && error.checkInError && (
                    <p style={{ color: "red", marginBottom: "10px" }}>
                        {error.checkInError}
                    </p>
                )}
                {error.evictionDirty && error.evictionError && (
                    <p style={{ color: "red", marginBottom: "10px" }}>
                        {error.evictionError}
                    </p>
                )}
                {error.personsAmountDirty && error.personsAmountError && (
                    <p style={{ color: "red", marginBottom: "10px" }}>
                        {error.personsAmountError}
                    </p>
                )}
                {error.childrenAmountDirty && error.childrenAmountError && (
                    <p style={{ color: "red", marginBottom: "10px" }}>
                        {error.childrenAmountError}
                    </p>
                )}
                <div className="modal__body">
                    {rooms.map((room) => {
                        return (
                            <ModalBookingRoom
                                onClick={() => bookRoom(room._id)}
                                key={room._id}
                                name={room.name}
                                description={room.description}
                                isBooked={room.booked}
                                price={room.price}
                                img={room.img}
                                disabled={disabledRoom}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
});
