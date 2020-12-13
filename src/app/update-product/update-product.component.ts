import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

 productId = 0;
 prodet : Produit;

  constructor( private activatedRoute : ActivatedRoute,
               private productsService: ProductsService
                ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id ;
  
     this.productsService.viewProduct(this.productId).subscribe(cdata => {
       this.prodet = cdata ;
     });

       
    });

  }

  updated(form){

    console.log(form);

    const updated = {

      id: form.value.id,
      ProdName: form.value.ProdName,
      category_id: form.value.category_id,
      Image: '',
      Description: form.value.Description,
      Price: form.value.Price,
      Available: 'yes',
      ratings: form.value.ratings,
      reviews: 'aze',
      Theme: form.value.Theme,
    };

    this.productsService.updateProduct(this.productId, updated).subscribe(data => {
        console.log(data);
      });

  }

}
