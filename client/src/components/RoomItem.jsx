import React from "react";
import { ButtonTransparent } from "./UI/ButtonTransparent";
import room from "../assets/img/Rooms/01.jpg";
export function RoomItem({ roomName, roomPrice }) {
    return (
        <a href="" className="rooms__item">
            <div className="rooms__img">
                <img src={room} alt=""></img>
            </div>
            <div className="rooms__content">
                <div className="rooms__info">
                    <p className="rooms__name">{roomName}</p>
                    <p className="rooms__price">{roomPrice}</p>
                </div>
                <ButtonTransparent>Забронировать</ButtonTransparent>
            </div>
        </a>
    );
}
