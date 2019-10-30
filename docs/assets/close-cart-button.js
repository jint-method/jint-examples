import { cart } from './cart-manager.js';
class CloseCartButton extends HTMLElement {
    constructor() {
        super(...arguments);
        this.handleClickEvent = this.closeCart.bind(this);
    }
    closeCart() {
        cart.toggleDrawer(false);
    }
    connectedCallback() {
        this.addEventListener('click', this.handleClickEvent);
    }
}
customElements.define('close-cart-button', CloseCartButton);
