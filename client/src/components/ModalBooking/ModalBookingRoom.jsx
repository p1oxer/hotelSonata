import React from "react";
function ModalBookingRoom({ name, price, description, isBooked, img, onClick, disabled }) {
    const imgUrl = `./img/rooms/${img}.jpg`;
    return (
        <div className="modal__booking-room room-modal-booking">
            <img className="room-modal-booking__img" src={imgUrl} alt=""></img>
            <div className="room-modal-booking__info">
                <p className="room-modal-booking__name">{name}</p>
                <p className="room-modal-booking__description">{description}</p>
                <div
                    style={isBooked ? { paddingTop: "15px" } : null}
                    className="room-modal-booking__bottom"
                >
                    <p className="room-modal-booking__price">
                        от <span>{price}</span>р
                    </p>
                    {isBooked ? (
                        <p>Занято</p>
                    ) : (
                        <button disabled={disabled} onClick={onClick} type="button" className="room-modal-booking__button">
                            Выбрать
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ModalBookingRoom;
