import $api from "@/Menegment/http";
import { AxiosResponse } from "axios";

export default class ResponseService {
  static async fetchAllResponse(): Promise<AxiosResponse<any>> {
    return await $api.get("/response", {});
  }
  static async sendResponseOnVacansy(
    user_name: string,
    user_phone: string,
    user_email: string,
    vacansy_id: string,
    resume: File
  ): Promise<AxiosResponse<any>> {
    return await $api.post<any>(
      `/response`,
      {
        user_name,
        user_phone,
        user_email,
        vacansy_id,
        resume,
      },
      {
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=<calculated when request is sent>",
        },
      }
    );
  }
  static async sendAnonymResponse(
    user_name: string,
    user_phone: string,
    user_email: string,
    resume: File | undefined,
    vacansy_name: string,
    message: string
  ): Promise<AxiosResponse<any>> {
    return await $api.post<any>(
      `/responseAnonymous`,
      {
        user_name,
        user_phone,
        user_email,
        resume,
        vacansy_name,
        message,
      },
      {
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=<calculated when request is sent>",
        },
      }
    );
  }
}
