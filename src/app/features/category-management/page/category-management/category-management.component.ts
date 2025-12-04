import {Component, inject, OnInit} from '@angular/core';
import {Button} from 'primeng/button';
import {Divider} from 'primeng/divider';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {InputText} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {Tag} from 'primeng/tag';
import {CategoryService} from '../../service/category.service';
import {UserUpsertComponent} from '../../../user-managmenet/components/user-upsert/user-upsert.component';
import {Category} from '../../models/category';

@Component({
  selector: 'app-category-management',
  imports: [
    Button,
    Divider,
    IconField,
    InputIcon,
    InputText,
    TableModule,
    Tag
  ],
  templateUrl: './category-management.component.html',
  styleUrl: './category-management.component.less'
})
export class CategoryManagementComponent implements OnInit {

  private readonly categoryService = inject(CategoryService);

  categories = this.categoryService.categories;

  ngOnInit(): void {
    this.categoryService.getCategories();
  }

  onSearch(event: Event) {
   console.log(event);
  }

  onAddCategory(){
    console.log('new category');
  }

  onEditUser(category: Category){
    console.log('edit category');
  }

  onDeleteUser( event: Event, category: Category){
    console.log('delete category');
  }
}
