import React from "react";
import { ButtonTransparent } from "./UI/ButtonTransparent";

export function RoomItem({ roomName, roomPrice, roomDescription, onClick, img }) {
    const imgUrl = `./img/rooms/${img}.jpg`;

    return (
        <div className="rooms__item">
            <div className="rooms__img">
                <img src={imgUrl} alt=""></img>
            </div>
            <div className="rooms__content">
                <div className="rooms__info">
                    <div className="rooms__top">
                        <p className="rooms__name">{roomName}</p>
                        <p className="rooms__price">
                            от <span>{roomPrice}</span>р
                        </p>
                    </div>
                    <div className="rooms__description">{roomDescription}</div>
                </div>
                <ButtonTransparent onClick={onClick}>Забронировать</ButtonTransparent>
            </div>
        </div>
    );
}
