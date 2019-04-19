import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  { 
    path: '', component: HomeComponent 
},
  { 
    path: 'home', component: HomeComponent 
},
{
  path: 'contact', component: ContactComponent 
},
{
  path: 'create', component: CreateComponent 
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
