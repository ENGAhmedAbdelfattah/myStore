// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './router/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// AuthGuards
import { AuthGuard } from './Guard/auth.guard';
// Libraries
import { ToastrModule } from 'ngx-toastr';
// Components
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/protect-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductItemComponent } from './components/protect-list/protect-item/product-item.component';
import { ProductItemDetailsComponent } from './components/product-item-details/product-item-details.component';
import { CartAddedComponent } from './components/cart/cart-added/cart-added.component';
import { CartFormComponent } from './components/cart/cart-form/cart-form.component';
import { SuccessComponent } from './components/success/success.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    // Header
    HeaderComponent,
    // Protect List
    ProductListComponent,
    ProductItemComponent,
    // Cart
    CartComponent,
    CartAddedComponent,
    CartFormComponent,
    // Protect Item Details
    ProductItemDetailsComponent,
    SuccessComponent,
    NotFoundComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // For Toastr Alert
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
