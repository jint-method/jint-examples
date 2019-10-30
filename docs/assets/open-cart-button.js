import { cart } from './cart-manager.js';
class OpenCartButton extends HTMLElement {
    constructor() {
        super(...arguments);
        this.handleClickEvent = this.toggleCart.bind(this);
    }
    toggleCart() {
        cart.toggleDrawer();
    }
    connectedCallback() {
        this.addEventListener('click', this.handleClickEvent);
    }
}
customElements.define('open-cart-button', OpenCartButton);
