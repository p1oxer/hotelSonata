import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import { API_URL } from "../http";
import { getResponseError } from "../utils/errorUtils";
export default class Store {
    user = {};
    isAuth = false;
    error = "";
    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }
    setError(error) {
        this.error = error;
    }
    setUser(user) {
        this.user = user;
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
            location.assign("/");
        } catch (error) {
            const responseError = getResponseError(error);
            this.setError(responseError);
        }
    }
    async registration(email, password, phone, fullName) {
        try {
            const response = await AuthService.registration(
                email,
                password,
                phone,
                fullName
            );
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
            location.assign("/");
        } catch (error) {
            const responseError = getResponseError(error);
            this.setError(responseError);
        }
    }
    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem("token");
            this.setAuth(false);
            this.setUser({});
            location.assign("/");
        } catch (e) {
            console.log(e.response.data.message);
        }
    }
    async checkAuth() {
        try {
            const response = await axios.get(`${API_URL}/refresh`, {
                withCredentials: true,
            });
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
            console.log(response);
        } catch (e) {
            console.log(e.response.data.message);
        }
    }
}
