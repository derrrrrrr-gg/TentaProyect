import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  // styleUrl: './products.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {

  products = [
    {
      id: 1,
      name: 'Laptop',
      price: 15000,
      stock: 5
    },
    {
      id: 2,
      name: 'Mouse',
      price: 350,
      stock: 20
    },
    {
      id: 3,
      name: 'Teclado',
      price: 800,
      stock: 10
    }
  ];

}