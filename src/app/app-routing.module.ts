import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ContactComponent } from './contact/contact.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { MakeaccountComponent } from './makeaccount/makeaccount.component';
import { SignupComponent } from './signup/signup.component';
import { TestComponent } from './test/test.component';
import { TopAcceuilComponent } from './top-acceuil/top-acceuil.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductComponent } from './view-product/view-product.component';


const routes: Routes = [
  {path: "", component:TopAcceuilComponent},
  {path:"home", component:TopAcceuilComponent},
  {path:"signup", component:SignupComponent},
  {path:"register", component:MakeaccountComponent},
  {path:"contact", component:ContactComponent},
  {path:"test", component:TestComponent},
  {path: 'create', component: CreateProductComponent },
{ path: 'delete/:id', component: DeleteProductComponent},
{ path: 'update/:id', component: UpdateProductComponent },
{path: 'viewall', component: AllComponent},
{ path: 'viewprod/:id', component: ViewProductComponent },
{ path: 'categorie/:id', component: CategorieComponent },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
