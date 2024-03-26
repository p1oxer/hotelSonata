import React, { useState, useEffect } from "react";
import { BookingForm } from "../components/BookingForm";
import { RoomItem } from "../components/RoomItem";
import Modal from "../store/modal";
import axios from "axios";
export function Rooms() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/rooms")
            .then((rooms) => {
                setRooms(rooms.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <section className="rooms page">
            <BookingForm />
            <div className="rooms__body">
                {rooms.map((room) => {
                    return (
                        <RoomItem
                            key={room.id}
                            roomName={room.name}
                            roomDescription={room.description}
                            roomPrice={`${room.price}`}
                            onClick={() => Modal.setModal(true)}
                            img={room.img}
                        />
                    );
                })}
            </div>
        </section>
    );
}
