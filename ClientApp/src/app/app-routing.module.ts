import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccessDeniedComponent } from './errors/access-denied/access-denied.component';
import { MycartComponent } from './mycart/mycart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot([
    {path: "home", component: HomeComponent},
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'products', loadChildren: './products/products.module#ProductsModule'},
    {path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'mycart', component: MycartComponent },
      { path: 'checkout', component: CheckOutComponent },
      { path: 'order', component: OrderComponent },
      
    {path: 'access-denied', component: AccessDeniedComponent },
    {path: '**', redirectTo: '/home'}
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
