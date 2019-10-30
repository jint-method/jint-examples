class CartDrawer extends HTMLElement
{
    private handleCartUpdateEvent:EventListener = this.update.bind(this);

    private update(e:CustomEvent) : void
    {
        const state = e.detail.state;
        if (state.isDrawerOpen)
        {
            this.style.transform = 'translateX(0)';
            this.setAttribute('state', 'open');
        }
        else
        {
            this.style.transform = 'translateX(100%)';
            this.setAttribute('state', 'closed');
        }
    }

    connectedCallback()
    {
        document.addEventListener('cart:update', this.handleCartUpdateEvent);
    }
}
customElements.define('cart-drawer', CartDrawer);