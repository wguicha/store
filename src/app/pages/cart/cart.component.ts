import { Component } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  cart: Cart = { items: [{
    product: 'https://via.placeholder.com/150',
    name: 'Dodge Journey 2011',
    price: 70000,
    quantity: 20,
    id: 1,
  },
  {
    product: 'https://via.placeholder.com/150',
    name: 'Dodge Journey 2009',
    price: 90000,
    quantity: 2,
    id: 2,
  }]};

  dataSource: Array<CartItem>= [];

  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  ngOnInit(): void{
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>): number {
    return items.map((item) => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0)
  }

}
