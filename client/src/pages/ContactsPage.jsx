import React from "react";
import { BookingForm } from "../components/BookingForm";

export function ContactsPage() {
    return (
        <section className="contacts page">
            <BookingForm />
            <div className="contacts__container">
                <div className="contacts__body">
                    <div className="contacts__content content-contacts">
                        <ul className="content-contacts__list">
                            <li className="content-contacts__item">
                                <p className="content-contacts__name">Адрес</p>
                                <p className="content-contacts__link" href="">
                                    г. Вологда, ул. Первомайская 40
                                </p>
                            </li>
                            <li className="content-contacts__item">
                                <p className="content-contacts__name">Телефон</p>
                                <a
                                    href="tel:89000000000"
                                    className="content-contacts__link"
                                >
                                    89000000000
                                </a>
                            </li>
                            <li className="content-contacts__item">
                                <p className="content-contacts__name">Почта</p>
                                <a
                                    href="mailto:pabonna@mail.ru"
                                    className="content-contacts__link"
                                >
                                    pabonna@mail.ru
                                </a>
                            </li>
                            <li className="content-contacts__item">
                                <p className="content-contacts__name">Режим работы </p>
                                <p className="content-contacts__link">Круглосуточно</p>
                            </li>
                        </ul>
                    </div>
                    <div className="contacts__map">
                        <iframe
                            src="https://yandex.com/map-widget/v1/?um=constructor%3A95a5d1c9e86def5724b6d61a304e1c3c966793022076afca82126c887c343aba&amp;source=constructor"
                            width="800"
                            height="500"
                            frameborder="0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
