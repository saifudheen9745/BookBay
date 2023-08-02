import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { CartComponent } from './cart/cart.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import {HttpClientModule} from '@angular/common/http';
import { CurrencyConverterPipe } from './currency-converter.pipe';
import { SkeletonComponent } from './skeleton/skeleton.component'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BookComponent,
    CartComponent,
    CartProductComponent,
    CurrencyConverterPipe,
    SkeletonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SweetAlert2Module,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
