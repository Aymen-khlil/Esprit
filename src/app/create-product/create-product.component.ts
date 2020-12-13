import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {




  constructor( private ProductsService: ProductsService) { }

  ngOnInit(): void {
  }

  newprod(form){
    
    let newproduct = {
      id: 26,
      ProdName: form.value.name,
      category_id: form.value.categ,
      Image:'./assets/data/'+form.value.img+'.png',
      Description: form.value.description,
      Price: form.value.price,
      Available: 'yes',
      ratings: form.value.rating,
      reviews: 'aze',
      Theme: form.value.theme,
    };
       console.log(newproduct);
    this.ProductsService.createProduct(newproduct).subscribe(data =>{
      console.log(data);
    });

  }

}
