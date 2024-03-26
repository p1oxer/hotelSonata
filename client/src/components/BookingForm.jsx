import React, { useContext } from "react";
import { DateInput } from "./UI/DateInput";
import { ButtonTransparent } from "./UI/ButtonTransparent";
import { Context } from "../main";
import Modal from "../store/modal";
export function BookingForm() {
    return (
        <form action="" className="booking__form">
            <div className="booking__container">
                <div className="booking__body">
                    <div className="booking__text">
                        <h4>Бронирование номеров</h4>
                        <p>Гарантированное заселение</p>
                    </div>
                    <ButtonTransparent onClick={() => Modal.setModal(true)}>
                        НАЙТИ НОМЕРА
                    </ButtonTransparent>
                </div>
            </div>
        </form>
    );
}
