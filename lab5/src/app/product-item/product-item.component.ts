import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { Product } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  
  constructor(
    private route: ActivatedRoute,
  ){}
  ngOnInit(): void {
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  like(id: number){
    products[id].like++;
  }
}