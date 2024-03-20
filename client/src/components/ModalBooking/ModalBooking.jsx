import React from "react";
import "./modal.css";
import Modal from "../../store/modal";
import { observer } from "mobx-react-lite";
export default observer(function ModalBooking() {
    return (
        <div
            className={Modal.modalActive ? "modal active" : "modal"}
            onClick={() => Modal.setModal(false)}
        >
            <div className="modal__content" onClick={(e) => e.stopPropagation()}></div>
        </div>
    );
});
