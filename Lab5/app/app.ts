import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRODUCTS } from './data/products';
import { CATEGORIES } from './data/categories';
import { Product } from './models/product.model';
import { Category } from './models/category.model';
import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  products: Product[] = PRODUCTS;
  categories: Category[] = CATEGORIES;

  selectedCategoryId: number = 1;

  // выбор категории
  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  // фильтр по категории
  get filteredProducts(): Product[] {
    return this.products.filter(
      p => p.categoryId === this.selectedCategoryId
    );
  }

  // ✅ УДАЛЕНИЕ ИЗ ОБЩЕГО МАССИВА
  deleteFromAll(id: number) {
    this.products = this.products.filter(
      p => p.id !== id
    );
  }
}
