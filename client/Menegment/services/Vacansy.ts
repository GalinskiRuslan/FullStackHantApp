import $api from "@/Menegment/http";
import { Vacansy } from "@/Menegment/models/Vacansy";
import { AxiosResponse } from "axios";

export default class VacansyService {
  static async getAllVacansy(): Promise<AxiosResponse<Vacansy[]>> {
    return $api.get<Vacansy[]>("/vacansy");
  }
  static async addNewVacansy(
    vacansy_name: string,
    isActive: boolean,
    description: string,
    skills: string,
    salary: number,
    expresion: string,
    categoryId: number
  ): Promise<AxiosResponse<Vacansy>> {
    return $api.post<Vacansy>("/vacansy", {
      vacansy_name,
      isActive,
      description,
      skills,
      salary,
      expresion,
      categoryId,
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
    categoryId: number
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
    });
  }
}
