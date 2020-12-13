import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-makeaccount',
  templateUrl: './makeaccount.component.html',
  styleUrls: ['./makeaccount.component.scss']
})
export class MakeaccountComponent implements OnInit {

  constructor( private productsService : ProductsService) { }

  ngOnInit(): void {
  }

  newUser(form){
    
    let newUser = {
    id: form.value.id,
    Name: form.value.name,
    Email: form.value.email,
    Number: form.value.number,
    Adresse: form.value.name,
    Password: form.value.pass

    };
       
    this.productsService.createUser(newUser).subscribe(data =>{
      console.log(data);
    });

  }

}