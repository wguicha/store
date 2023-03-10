import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Cart, CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] })

  constructor(private _snackBar: MatSnackBar) { }

  addToCart(item: CartItem): void{
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id);

    if(itemInCart){
      itemInCart.quantity += 1
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    this._snackBar.open('Se ha agreado un producto al carrito', 'Ok', { duration: 3000 });
    console.log(this.cart.value);
  }
  
  getTotal(items: Array<CartItem>): number {
    return items.map((item) => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0)
  }

  clearCart(): void {
    this.cart.next({ items: [] });
    this._snackBar.open('El Carrito quedo vacio.', 'ok', {
      duration: 3000
    });
  }

  removeFromCart(item: CartItem): void{
    const filterdItems =this.cart.value.items.filter(
      (_item) => _item.id !== item.id
    );

    this.cart.next({ items: filterdItems })
    this._snackBar.open('El Producto ha sido removido', 'Ok', { duration: 3000 })
  }

  onRemoveQuantity(item: CartItem): void{
    this.cart.value.items.map((_item) =>{
      if(_item.id === item.id) {
        if(_item.quantity===1){
          this.removeFromCart(_item)
        } else {
          _item.quantity--;
        }
      }
      return _item;
    });
  }
}
