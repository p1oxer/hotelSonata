module.exports = class UserDto {
    email;
    id;
    phone;
    fullName;
    isActivated;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.phone = model.phone;
        this.fullName = model.fullName;

        this.isActivated = model.isActivated;
    }
};
