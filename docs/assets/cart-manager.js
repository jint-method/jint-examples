class CartManager {
    constructor() {
        this.state = {
            isDrawerOpen: false,
        };
    }
    toggleDrawer(forcedState = null) {
        const updatedState = {};
        if (forcedState !== null) {
            updatedState.isDrawerOpen = forcedState;
        }
        else {
            updatedState.isDrawerOpen = (this.state.isDrawerOpen) ? false : true;
        }
        this.setState(updatedState);
    }
    setState(updatedState) {
        Object.keys(updatedState).forEach((key) => {
            if (this.state[key] !== null && this.state[key] !== undefined) {
                if (updatedState[key] !== this.state[key]) {
                    this.state[key] = updatedState[key];
                }
            }
            else {
                this.state[key] = updatedState[key];
            }
        });
        const updateEvent = new CustomEvent('cart:update', { detail: { state: { ...this.state } } });
        document.dispatchEvent(updateEvent);
    }
}
export const cart = new CartManager();
