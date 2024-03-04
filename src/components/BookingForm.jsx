import React from "react";
import { DateInput } from "./UI/DateInput";
import { ButtonTransparent } from "./UI/ButtonTransparent";
export function BookingForm() {
    return (
        <form action="" className="booking__form">
            <div className="booking__container">
                <div className="booking__body">
                    <div className="booking__text">
                        <h4>Бронирование номеров</h4>
                        <p>Гарантированное заселение</p>
                    </div>
                    <div className="date-input-container">
                        <label htmlFor="">Заезд</label>
                        <DateInput />
                    </div>
                    <div className="date-input-container">
                        <label htmlFor="">Выезд</label>

                        <DateInput />
                    </div>
                    <ButtonTransparent>НАЙТИ НОМЕРА</ButtonTransparent>
                </div>
            </div>
        </form>
    );
}
