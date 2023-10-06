import { UserResponse } from "@/models/UserResponse";
import AuthService from "@/services/AuthService";
import { makeAutoObservable } from "mobx";

export default class Store {
  user = {} as UserResponse;
  isAuth = false;
  constructor() {
    makeAutoObservable(this);
  }
  setAuth(bool: boolean) {
    this.isAuth = bool;
  }
  setUser(user: UserResponse) {
    this.user = user;
  }
  async login(user_email: string, password: string) {
    try {
      const res = await AuthService.login(user_email, password);
      localStorage.setItem("token", res.data.token);
      this.setAuth(true);
      this.setUser(res.data.user);
    } catch (error) {
      return error;
    }
  }
  async checkAuth() {
    try {
      const res = await AuthService.checkIsAuth();
      console.log(res);
      this.setAuth(true);
    } catch (error) {
      console.log(error);
    }
  }
  async logout() {
    try {
      this.setAuth(false);
      localStorage.removeItem("token");
      this.setUser({} as UserResponse);
    } catch (e) {
      console.log(e);
    }
  }
}
