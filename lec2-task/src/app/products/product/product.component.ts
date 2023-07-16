import { Component, Injectable, Input } from "@angular/core";
import {Product} from "../models/productModel";


@Component(
    {
        selector: "productItem-root",
        templateUrl: "./product.component.html",
        styleUrls: ["./product.component.scss"]
    }
    )
export class ProductItemComponent {
    @Input() productItem: Product;
    @Input() products!: Product[];
    constructor(){
        this.productItem = new Product();
    }

    largerThan100(product:Product){
      return product.priceProduct>100
    }


}

