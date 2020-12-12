import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

 productlist: Produit;

  constructor( private ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.ProductsService.getAllProd().subscribe(data =>{
     this.productlist = data; 
    })
     
  }

}
