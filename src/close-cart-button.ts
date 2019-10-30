import { cart } from './cart-manager.js';

class CloseCartButton extends HTMLElement
{
    private handleClickEvent:EventListener = this.closeCart.bind(this);

    private closeCart() : void
    {
        cart.toggleDrawer(false);
    }

    connectedCallback()
    {
        this.addEventListener('click', this.handleClickEvent);
    }
}
customElements.define('close-cart-button', CloseCartButton);