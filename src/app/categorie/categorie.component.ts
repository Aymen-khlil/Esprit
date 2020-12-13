import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from '../model/cat';
import { ProductsService } from '../shared/products.service';
import { Produit } from '../model/produit';

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
