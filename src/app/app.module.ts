
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MenuItemsComponent } from './menu/menu-items/menu-items.component';
import { SelectedMenuItemComponent } from './menu/selected-menu-item/selected-menu-item.component';

import { MenuService } from './services/menu/menu.service';
import { MiddlemanService } from './services/middleman/middleman.service';
import { CartItemComponent } from './shopping-cart/cart-item/cart-item.component';
import { DeliveryComponent } from './shopping-cart/delivery/delivery.component';
import { SetLabelValueDirective } from './directives/set-label-value.directive';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderedItemComponent } from './order-summary/ordered-item/ordered-item.component';
import { DeliveryItemComponent } from './order-summary/delivery-item/delivery-item.component';
import { KeysPipe } from './pipes/keys.pipe';
import { SentenceCasePipe } from './pipes/sentence-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemsComponent,
    SelectedMenuItemComponent,
    CartItemComponent,
    DeliveryComponent,
    SetLabelValueDirective,
    OrderSummaryComponent,
    OrderedItemComponent,
    DeliveryItemComponent,
    KeysPipe,
    SentenceCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MenuService, MiddlemanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
