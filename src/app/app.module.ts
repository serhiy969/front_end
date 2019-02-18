import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";

import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	HttpModule,
	StoreModule,
	RouterModule.forRoot([
		{
			path: "store", component: StoreComponent,
			canActivate: [StoreFirstGuard]
		},
		{
			path: "cart", component: CartDetailComponent,
			canActivate: [StoreFirstGuard]
		},
		{
			path: "checkout", component: CheckoutComponent,
			canActivate: [StoreFirstGuard]
		},
		{
			path: "admin",
			loadChildren: "app/admin/admin.module#AdminModule",
			canActivate: [StoreFirstGuard]
		},
		{ path: "**", redirectTo: "/store" }
	])
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
