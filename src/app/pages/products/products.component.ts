import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  private http = inject(HttpClient);

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get(`${environment.apiUrl}/products`).subscribe((res: any) => {
      this.products = res;
    });
  }
}
