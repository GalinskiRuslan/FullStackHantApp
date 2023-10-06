import $api from "@/http";
import { AuthResponse } from "@/models/AuthResponse";
import { Category } from "@/models/Category";
import { AxiosResponse } from "axios";

export default class CategoryService {
  static async fetchAllCategory(): Promise<AxiosResponse<Category[]>> {
    return await $api.get<Category[]>("/category");
  }
}
