import $api from "@/Menegment/http";
import { AuthResponse } from "@/Menegment/models/AuthResponse";
import { AxiosResponse } from "axios";

export default class AuthService {
  static async login(
    user_email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post("/login", { user_email, password });
  }
  static async registration(
    user_email: string,
    user_name: string,
    user_surmane: string,
    user_phone: string,
    user_role: string,
    resume: string,
    password: string
  ) {
    return $api.post("/registration", {
      user_name,
      password,
      user_email,
      user_surmane,
      user_phone,
      user_role,
    });
  }
  static async checkIsAuth() {
    return $api.get("/checkIsAuth");
  }
}
