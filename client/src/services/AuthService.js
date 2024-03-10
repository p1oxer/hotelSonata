import $api from "../http";

export default class AuthService {
    static async login(email, password) {
        return $api.post("/login", { email, password });
    }

    static async registration(email, password, phone, fullName) {
        return $api.post("/register", { email, password, phone, fullName });
    }
    static async logout() {
        return $api.post("/logout");
    }
}
