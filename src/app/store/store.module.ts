import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CarouselComponent } from './carousel/carousel.component';
import { CounterDirective } from './counter.directive';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { CartSummaryComponent } from './cartSummary.component';
import { CheckoutComponent } from './checkout.component';
import { CartDetailComponent } from './cartDetail.component';
import { RouterModule } from '@angular/router';
//import {MatCheckboxModule, MatCardModule, MatIconModule,
// MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';


@NgModule({

	imports: [ModelModule, BrowserModule, FormsModule, RouterModule,
		],
	declarations: [StoreComponent, CounterDirective, 
		CartSummaryComponent, CartDetailComponent, 
		CheckoutComponent, CarouselComponent ],
	exports: [StoreComponent,  CartDetailComponent, CheckoutComponent]
})

export class StoreModule { }
