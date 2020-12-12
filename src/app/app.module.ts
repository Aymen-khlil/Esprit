import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopAcceuilComponent } from './top-acceuil/top-acceuil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { MakeaccountComponent } from './makeaccount/makeaccount.component';
import { FaqComponent } from './faq/faq.component';
import { TestComponent } from './test/test.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

import { AllComponent } from './all/all.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { CategorieComponent } from './categorie/categorie.component';


@NgModule({
  declarations: [
    AppComponent,
    TopAcceuilComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    ContactComponent,
    MakeaccountComponent,
    FaqComponent,
    TestComponent,
    CreateProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    AllComponent,
    ViewProductComponent,
    SidebarComponent,
    CategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
