// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// AuthGuard
import { AuthGuard } from '../Guard/auth.guard';
// Components
import { ProductListComponent } from '../components/protect-list/product-list.component';
import { CartComponent } from '../components/cart/cart.component';
import { ProductItemDetailsComponent } from '../components/product-item-details/product-item-details.component';
import { SuccessComponent } from '../components/success/success.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';



const routes: Routes = [
  { path: 'protect-list', component: ProductListComponent },
  { path: '', redirectTo: '/protect-list', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'cart', component: CartComponent },
  { path: 'protect-item-details/:id', component: ProductItemDetailsComponent },
  { path: 'success', component: SuccessComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent },
  // route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
