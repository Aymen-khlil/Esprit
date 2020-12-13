import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../shared/products.service';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
   test : string = 'er';
   productId= 0;
   proddet : Produit;

  constructor( private productService: ProductsService,
               private activatedRoute:ActivatedRoute  ) {  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
        this.productId = data.id;
    });

    this.productService.viewProduct(this.productId).subscribe(pdata =>{
      this.proddet = pdata;
      //console.log(pdata);
      //console.log(this.proddet);
    });

  }

}
