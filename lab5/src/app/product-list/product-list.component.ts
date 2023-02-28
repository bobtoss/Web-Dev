import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : Product[] = [];

  constructor(
    private route: ActivatedRoute,
  ){}

  like(id: number){
    products[id].like++;
  }
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));
    this.products = products.filter(product => product.category === categoryIdFromRoute);
  }
  deleteProd(id: number){
    console.log(id);
    this.products.forEach((element,index)=>{
      if(element.id==id+1) this.products.splice(index, 1);
   });
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/