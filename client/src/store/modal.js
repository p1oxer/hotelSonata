import { makeAutoObservable } from "mobx";

class Modal {
    modalActive = false;
    constructor() {
        makeAutoObservable(this);
    }

    setModal(modalActive) {
        this.modalActive = modalActive;
        console.log(this.modalActive);
    }
}

export default new Modal();
