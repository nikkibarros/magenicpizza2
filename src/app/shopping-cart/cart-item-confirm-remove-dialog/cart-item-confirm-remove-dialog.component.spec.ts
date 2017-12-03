import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemConfirmRemoveDialogComponent } from './cart-item-confirm-remove-dialog.component';

describe('CartItemConfirmRemoveDialogComponent', () => {
  let component: CartItemConfirmRemoveDialogComponent;
  let fixture: ComponentFixture<CartItemConfirmRemoveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartItemConfirmRemoveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemConfirmRemoveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
