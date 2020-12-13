import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Users } from '../Users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
    Email : string ; 
    Password : string;
    us : Users[];
    connect : boolean = false;

    login = localStorage.getItem('login');

    loginUser( ) {
      for (let user of this.us) {
        if (user.Password === this.Password && user.Email === this.Email) {
          this.login = "true";
          localStorage.setItem ('login', 'true');
          return;
        }
      }

      this.connect = true;
      setTimeout(() => {
        this.connect = false;
      },1000)


    }

    logout(){
      this.login = "false";
      localStorage.setItem('login', 'false');
    }

    
  constructor( private tt : ProductsService ) { }

  ngOnInit(): void {

    this.tt.getUsers().subscribe((data) =>(this.us = data));


  }



}
