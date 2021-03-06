import { Component, OnInit } from '@angular/core';
import { Cat } from '../model/cat';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

 catList: Cat;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getCat().subscribe(data => {
       this.catList = data;
    })
  }

}
