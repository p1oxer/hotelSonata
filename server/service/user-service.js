const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail-service");
const TokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");
const tokenService = require("./token-service");
class UserService {
    async registration(email, password, phone, fullName) {
        const candidate = await UserModel.findOne({ email });
        if (candidate) {
            throw new Error(`Пользователь с таким почтовым адресом уже существует`);
        }

        const activationLink = uuid.v4();
        const hashPassword = await bcrypt.hash(password, 3);

        const user = await UserModel.create({
            email,
            password: hashPassword,
            phone,
            fullName,
            activationLink,
        });
        await mailService.sendActivationMail(
            email,
            `${process.env.API_URL}/api/activate/${activationLink}`
        );

        const userDto = new UserDto(user);
        const tokens = TokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto };
    }
}

module.exports = new UserService();
