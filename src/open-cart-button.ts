import { cart } from './cart-manager.js';

class OpenCartButton extends HTMLElement
{
    private handleClickEvent:EventListener = this.toggleCart.bind(this);

    private toggleCart() : void
    {
        cart.toggleDrawer();
    }

    connectedCallback()
    {
        this.addEventListener('click', this.handleClickEvent);
    }
}
customElements.define('open-cart-button', OpenCartButton);