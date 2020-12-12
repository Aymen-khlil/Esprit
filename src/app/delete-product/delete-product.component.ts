import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

productId=0;

  constructor( private avtivatedRoute : ActivatedRoute,
              private productsService: ProductsService) { }

  ngOnInit(): void {
          
     this.avtivatedRoute.params.subscribe(data =>{
       this.productId = data.id;

       this.productsService.deleteProduct(this.productId).subscribe(deldata => {
         console.log('del succ');
       })

     })


  }

}
