interface CartManagerState
{
    isDrawerOpen : boolean,
}

class CartManager
{
    private state : CartManagerState;

    constructor()
    {
        this.state = {
            isDrawerOpen: false,
        };
    }

    public toggleDrawer(forcedState:boolean = null) : void
    {
        const updatedState:Partial<CartManagerState> = {};
        if (forcedState !== null)
        {
            updatedState.isDrawerOpen = forcedState;
        }
        else
        {
            updatedState.isDrawerOpen = (this.state.isDrawerOpen) ? false : true;
        }

        this.setState(updatedState);
    }

    private setState(updatedState:Partial<CartManagerState>) : void
    {
        Object.keys(updatedState).forEach((key:string) => {
            if (this.state[key] !== null && this.state[key] !== undefined)
            {
                if (updatedState[key] !== this.state[key])
                {
                    this.state[key] = updatedState[key];
                }
            }
            else
            {
                this.state[key] = updatedState[key];
            }
        });
        const updateEvent = new CustomEvent('cart:update', {detail: { state: { ...this.state } } });
        document.dispatchEvent(updateEvent);
    }
}
export const cart:CartManager = new CartManager();