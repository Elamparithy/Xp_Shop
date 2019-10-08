import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  defaultQuantity: number = 1;
  productAddedToCart: Product[];
  allTotal: number;

  constructor(private productService:ProductService) { }


 

  ngOnInit() {

   
    this.productAddedToCart = this.productService.getProductFromCart();
    for (let i in this.productAddedToCart) {
      this.productAddedToCart[i].Quantity=1;
    }
    this.productService.removeAllProductFromCart();
    this.productService.addProductToCart(this.productAddedToCart);
    this.calculateAllTotal(this.productAddedToCart);
  }

  onAddQuantity(product: Product) {
    this.productAddedToCart = this.productService.getProductFromCart();
    this.productAddedToCart.find(p => p.Id == product.productId).Quantity = product.Quantity + 1;
    this.productService.removeAllProductFromCart();
    this.productService.addProductToCart(this.productAddedToCart);
    
  }
  onRemoveQuantity(product: Product) {
    this.productAddedToCart = this.productService.getProductFromCart();
    this.productAddedToCart.find(p => p.Id == product.productId).Quantity = product.Quantity - 1;
    this.productService.removeAllProductFromCart();
    this.productService.addProductToCart(this.productAddedToCart);
    this.calculateAllTotal(this.productAddedToCart);
  }

  calculateAllTotal(allItems: Product[]) {
    let total = 0;
    for (let i in allItems) {
      total = total + (allItems[i].Quantity * allItems[i].price);
    }
    this.allTotal = total;
  }
  onRemove(product: Product): void {
    this.productAddedToCart = this.productService.getProductFromCart();
    this.productAddedToCart.find(p => p.Id == product.productId).Quantity = product.Quantity - 1;
    this.productService.removeAllProductFromCart();
    this.productService.clearCache();
  }

  clearCache() {
    this.productAddedToCart = null;
  }

}
