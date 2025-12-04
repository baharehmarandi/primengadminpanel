import {Injectable, signal} from '@angular/core';
import {Category} from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  category: Category[] = [
    { id: 1, categoryName: 'کالای دیجیتال', mainCategory: '' },
    { id: 2, categoryName: 'موبایل', mainCategory: 'کالای دیجیتال' },
    { id: 3, categoryName: 'شیائومی', mainCategory: 'موبایل' },
    { id: 4, categoryName: 'خانه', mainCategory: '' },
    { id: 5, categoryName: 'تلویزیون', mainCategory: 'خانه' },
    { id: 6, categoryName: 'سامسونگ', mainCategory: 'تلویزیون' },
  ];

  categories = signal<Category[]>([]);

  getCategories(search?: string): void {
    this.categories.set(search ? (this.category.filter(u => u.categoryName.toLowerCase().includes(search.toLowerCase()))) : this.category);
  }
}
