import React from "react";
import { BookingForm } from "../BookingForm";

export default function Intro() {
    return (
        <>
            <section className="intro page">
                <BookingForm />
                <div className="intro__body">
                    <h1 className="intro__title">Mini-hotel Sonata</h1>
                    <h3 className="intro__subtitle">Почувствуй мелодию совершенства</h3>
                </div>
            </section>
        </>
    );
}
