import React from "react";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { ru } from "date-fns/locale/ru";
registerLocale("ru", ru);
setDefaultLocale("ru");
export function DateInput({ modificator }) {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
            className={`dateInput ${modificator}`}
            startDate={startDate}
            minDate={new Date()}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
        />
    );
}
