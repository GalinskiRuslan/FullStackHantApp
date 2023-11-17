import $api from "@/Menegment/http";
import { Category } from "@/Menegment/models/Category";
import { AxiosResponse } from "axios";

export default class CategoryService {
  static async fetchAllCategory(): Promise<AxiosResponse<Category[]>> {
    return await $api.get<Category[]>("/category", {
      /*  responseType: "arraybuffer", */
    });
  }
  static async getOneCategory(id: number): Promise<AxiosResponse<Category>> {
    return await $api.get<Category>(`/categoryOne?id=${id}`);
  }
  static async saveNewCategory(
    category_name: string,
    imageSrc: File,
    description: string
  ): Promise<AxiosResponse<Category>> {
    console.log(imageSrc);

    return await $api.post<Category>(
      "/category",
      {
        category_name,
        imageSrc,
        description,
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
    description: string
  ): Promise<AxiosResponse<Category>> {
    return await $api.put<Category>(
      "/category",
      {
        id,
        category_name,
        description,
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
