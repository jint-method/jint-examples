class BackgroundChanger
{
    private _loadTrigger : HTMLElement;

    constructor()
    {
        this._loadTrigger = document.body.querySelector('spacer-generator');
        new IntersectionObserver(this.observeCallback).observe(this._loadTrigger);
        document.addEventListener('scroll', this.handleScrollEvent);
    }

    private handleScrollEvent:EventListener = this.changeBackground.bind(this);
    private observeCallback:IntersectionObserverCallback = this.observe.bind(this);

    private observe(entires:Array<IntersectionObserverEntry>) : void
    {
        if (entires[0].isIntersecting)
        {
            for (let i = 0; i < 3; i++)
            {
                const spacer = document.createElement('spacer-block');
                document.body.append(spacer);
            }
        }
    }
    
    private changeBackground() : void
    {
        document.body.style.backgroundColor = this.getRandomColor();
    }

    private getRandomColor() : string
    {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}
new BackgroundChanger();