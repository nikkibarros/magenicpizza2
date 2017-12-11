
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
// tslint:disable-next-line:max-line-length
import { CartItemConfirmRemoveDialogComponent } from './shopping-cart/cart-item-confirm-remove-dialog/cart-item-confirm-remove-dialog.component';
import { ForbiddenNameDirective } from './directives/forbidden-name.directive';
import { PhoneFormatDirective } from './directives/phone-format.directive';
import { ZipValueDirective } from './directives/zip-value.directive';
import { ZipFormatDirective } from './directives/zip-format.directive';

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
    SentenceCasePipe,
    CartItemConfirmRemoveDialogComponent,
    ForbiddenNameDirective,
    PhoneFormatDirective,
    ZipValueDirective,
    ZipFormatDirective
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [MenuService, MiddlemanService],
  bootstrap: [AppComponent],
  entryComponents: [
    CartItemConfirmRemoveDialogComponent
  ]
})
export class AppModule { }
