import $api from "@/Menegment/http";
import { Vacansy } from "@/Menegment/models/Vacansy";
import { AxiosResponse } from "axios";

export default class VacansyService {
  static async getAllVacansy(): Promise<AxiosResponse<Vacansy[]>> {
    return $api.get<Vacansy[]>("/vacansy");
  }
  static async getVacancyWithCategory(
    categoryId: string
  ): Promise<AxiosResponse<Vacansy[]>> {
    return $api.get<Vacansy[]>(`/vacansyCat?id=${categoryId}`);
  }
  static async getOneVacancy(id: number): Promise<AxiosResponse<Vacansy>> {
    return $api.get<Vacansy>(`/vacansyOne?id=${id}`);
  }
  static async addNewVacansy(
    vacansy_name: string,
    isActive: boolean,
    description: string,
    skills: string,
    salary: number,
    expresion: string,
    categoryId: number,
    city: string,
    tasks: string
  ): Promise<AxiosResponse<Vacansy>> {
    return $api.post<Vacansy>("/vacansy", {
      vacansy_name,
      isActive,
      description,
      skills,
      salary,
      expresion,
      categoryId,
      city,
      tasks,
    });
  }
  static async changeActiveVacansy(
    id: number,
    isActive: boolean
  ): Promise<AxiosResponse<Vacansy>> {
    return $api.put("/changeactivevacansy", { id, isActive });
  }
  static async changeVacansy(
    id: number,
    vacansy_name: string,
    isActive: boolean,
    description: string,
    skills: string,
    salary: number,
    expresion: string,
    categoryId: number,
    city: string
  ) {
    return $api.put("/vacansy", {
      id,
      vacansy_name,
      isActive,
      description,
      skills,
      salary,
      expresion,
      categoryId,
      city,
    });
  }
  static async deleteVacansy(id: number): Promise<AxiosResponse<Vacansy>> {
    return $api.delete("/vacansy", { data: { id } });
  }
}
