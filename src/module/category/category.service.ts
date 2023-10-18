import { Category } from "@prisma/client";
import { CategoryRepository } from "./category.repository";

export class CategoryService {
  categoryRepository: CategoryRepository

  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  createCategory(payload: Partial<Category>) {
    this.categoryRepository.createCategory(payload);
  }

  getCategory(id: number) {
    return this.categoryRepository.getCategory(id);
  }

  updateCategory(payload: Partial<Category>) {
    return this.categoryRepository.updateCategory(payload);
  }

  deleteCategory(id: number) {
    return this.categoryRepository.deleteCategory(id);
  }

  listCategory() {
    return this.categoryRepository.listCategory();
  }
}