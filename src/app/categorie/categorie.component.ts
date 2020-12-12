import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from '../cat';
import { ProductsService } from '../products.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

 productlist: Produit;
 catlist: Cat;

  constructor( private activatedRoute: ActivatedRoute, 
               private  productsService: ProductsService  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.catlist = data.id;

      this.productsService.viewbycatProduct(this.catlist).subscribe(cdata => {
        this.productlist = cdata;
      });
    });
  }

}
