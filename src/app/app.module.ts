import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerComponent } from './pages/customer/customer.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { LocalStorageService } from './services/storage/storage.service';
import { ApiService } from './services/api/api.service';
import { CartService } from './services/cart/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StorageServiceModule, 
  ],
  providers: [
    LocalStorageService,
    ApiService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }