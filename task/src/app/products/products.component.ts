import { Component } from '@angular/core';
import { Product } from './models/productModel'
import { FetchApiService } from '../services/fetch-api.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  private products: Product[]=[];
  featured: number;
  avaliableCount: number;
  all: number=0;
  filter = "All"


  constructor( public fetchApi:FetchApiService ){

    fetchApi.getProducts().subscribe( (response:Product[]) => { 
      this.products=response;
      this.setCounts();
      this.all = this.products.length; 
    });
    
    
    this.featured = 0;
    this.avaliableCount = 0;

  }


  getProducts(): Product[] {
    return this.products;
  }
  private setCounts():void{
    this.products.forEach((product)=>{
      if(product.isFeatured) this.featured++;
      if(product.isAvailable) this.avaliableCount++;

    });
  }

  onFilterChanged(selectedFilter:string){
    console.log('item',selectedFilter)
   this.filter = selectedFilter;
  }

}
