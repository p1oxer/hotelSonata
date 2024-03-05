import React from "react";
import { BookingForm } from "../components/BookingForm";
import { RoomItem } from "../components/RoomItem";
export function Rooms() {
    return (
        <section className="rooms page">
            <BookingForm />
            <div className="rooms__body">
                <RoomItem roomName={"Люкс"} roomPrice={"9999₽"} />
                <RoomItem roomName={"Обычный"} roomPrice={"3999₽"} />
                <RoomItem roomName={"Семейный"} roomPrice={"7999₽"} />
                <RoomItem roomName={"Какой-то"} roomPrice={"3999₽"} />
                <RoomItem roomName={"Мега-люкс"} roomPrice={"11999₽"} />
            </div>
        </section>
    );
}
