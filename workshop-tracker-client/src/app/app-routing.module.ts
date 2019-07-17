import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customers/customer/customer.component';
import { ListCustomerComponent } from './customers/list-customer/list-customer.component';


const routes: Routes = [
  {path: '', redirectTo: '/customer', pathMatch: 'full'},
  {path: 'customer', component: CustomerComponent},
  {path: 'list-customer', component: ListCustomerComponent},
  {path: '**', component: CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
