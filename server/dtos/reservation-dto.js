module.exports = class ReservationDto {
    user;
    room;
    checkInDate;
    evictionDate;
    personsAmount;
    childrenAmount;

    constructor(model) {
        this.user = model.user;
        this.room = model.room;
        this.checkInDate = model.checkInDate;
        this.evictionDate = model.evictionDate;
        this.personsAmount = model.personsAmount;
        this.childrenAmount = model.childrenAmount;
    }
};
