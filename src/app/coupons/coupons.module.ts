import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { CouponsComponent } from "./coupons.component";
/*import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cartSummary.component";
import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";
import { RouterModule } from "@angular/router";*/
@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [CouponsComponent],
    exports: [CouponsComponent]
})

export class CouponsModule { }