import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model'

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  product: Product | undefined = {
      id: 1,
      title: 'Sensor Journey 2011-2009',
      price: 150,
      category: 'Sensores',
      description: 'Descripcion del sensor',
      image: 'https://via.placeholder.com/150',
  };
  @Output() addToCart = new EventEmitter();


  onAddToCart(): void {

    this.addToCart.emit(this.product);

  }

}
