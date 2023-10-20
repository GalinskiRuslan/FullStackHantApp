import $api from "@/http";
import { AuthResponse } from "@/models/AuthResponse";
import { Category } from "@/models/Category";
import { AxiosResponse } from "axios";

export default class CategoryService {
  static async fetchAllCategory(): Promise<AxiosResponse<Category[]>> {
    return await $api.get<Category[]>("/category", {
      /*  responseType: "arraybuffer", */
    });
  }
  static async saveNewCategory(
    category_name: string,
    imageSrc: File
  ): Promise<AxiosResponse<Category>> {
    console.log(imageSrc);

    return await $api.post<Category>(
      "/category",
      {
        category_name,
        imageSrc,
      },
      {
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=<calculated when request is sent>",
        },
      }
    );
  }
  static async deleteCategory(id: number): Promise<AxiosResponse<Category>> {
    return await $api.delete<Category>(`/category`, { data: { id } });
  }
  static async changeCat(
    id: number,
    category_name: string,
    imageSrc: File
  ): Promise<AxiosResponse<Category>> {
    return await $api.put<Category>(
      "/category",
      {
        id,
        category_name,
        imageSrc,
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
