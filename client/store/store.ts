import { Category } from "@/models/Category";
import { UserResponse } from "@/models/UserResponse";
import { Vacansy } from "@/models/Vacansy";
import AuthService from "@/services/AuthService";
import CategoryService from "@/services/Category";
import VacansyService from "@/services/Vacansy";
import { makeAutoObservable } from "mobx";
import { configure } from "mobx";

configure({
  enforceActions: "never",
});
export default class Store {
  user = {} as UserResponse;
  isAuth = false;
  category: Category[] = [];
  vacansy: Vacansy[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  setAuth(bool: boolean) {
    this.isAuth = bool;
  }
  setUser(user: UserResponse) {
    this.user = user;
  }
  setCategory(category: Category[]) {
    this.category = category;
  }
  setVacansy(vacansy: Vacansy[]) {
    this.vacansy = vacansy;
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
  async getAllCategory() {
    try {
      const res = await CategoryService.fetchAllCategory();
      this.category = res.data;
    } catch (error) {
      return error;
    }
  }
  async saveNewCategory(category_name: string, background_photo: File) {
    try {
      console.log(background_photo);
      CategoryService.saveNewCategory(category_name, background_photo);
      this.getAllCategory();
      return "Категория добавлена";
    } catch (error) {
      return error;
    }
  }
  async deleteCategory(id: number) {
    try {
      CategoryService.deleteCategory(id);
      this.getAllCategory();
      return "Категория удалена";
    } catch (error) {
      return error;
    }
  }
  async changeCategory(
    id: number,
    category_name: string,
    background_photo: File
  ) {
    try {
      const res = await CategoryService.changeCat(
        id,
        category_name,
        background_photo
      );
      this.getAllCategory();
      return res.data;
    } catch (error) {
      return error;
    }
  }
  async getAllVacansy() {
    try {
      const res = await VacansyService.getAllVacansy();
      this.vacansy = res.data;
    } catch (error) {
      return error;
    }
  }
  async addNewVacansy(
    vacansy_name: string,
    isActive: boolean,
    description: string,
    skills: string,
    salary: number,
    expresion: string,
    categoryId: number
  ) {
    try {
      console.log(isActive);

      const res = await VacansyService.addNewVacansy(
        vacansy_name,
        isActive,
        description,
        skills,
        salary,
        expresion,
        categoryId
      );
      this.getAllVacansy();
    } catch (error) {
      return error;
    }
  }
  async changeActiveVacansy(id: number, isActive: boolean) {
    try {
      const res = await VacansyService.changeActiveVacansy(id, isActive);
      this.getAllVacansy();
    } catch (error) {
      return error;
    }
  }
  async changeVacansy(
    id: number,
    vacansy_name: string,
    isActive: boolean,
    description: string,
    skills: string,
    salary: number,
    expresion: string,
    categoryId: number
  ) {
    try {
      const res = await VacansyService.changeVacansy(
        id,
        vacansy_name,
        isActive,
        description,
        skills,
        salary,
        expresion,
        categoryId
      );
      this.getAllVacansy();
    } catch (error) {
      return error;
    }
  }
}
