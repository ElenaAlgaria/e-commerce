import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { CartItemComponent } from "./cart-item/cart-item.component";

// create cart items list using at for loop
//create remove button

/*<li> {{cartItem.title}}, {{'$'+cartItem.price}} <app-primary-button label="Remove" class="mt-3"
 (btnClicked)="cartService.removeFromCart(cartItem.id)"/></li>*/

@Component({
  selector: 'app-cart',
  imports: [PrimaryButtonComponent, CartItemComponent],
  template: `
    
  <div class="p-6 flex flex-col gap-4">
    <h2 class="text-2xl">Shopping cart</h2>

    @for (cartItem of cartService.cart(); track cartItem.id) {
          <app-cart-item [item]="cartItem"/>
        }
  </div>
      

      `,
  styles: ``
})
export class CartComponent {
    cartService = inject(CartService);
}
