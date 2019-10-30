class BackgroundChanger {
    constructor() {
        this.handleScrollEvent = this.changeBackground.bind(this);
        this.observeCallback = this.observe.bind(this);
        this._loadTrigger = document.body.querySelector('spacer-generator');
        new IntersectionObserver(this.observeCallback).observe(this._loadTrigger);
        document.addEventListener('scroll', this.handleScrollEvent);
    }
    observe(entires) {
        if (entires[0].isIntersecting) {
            for (let i = 0; i < 3; i++) {
                const spacer = document.createElement('spacer-block');
                document.body.append(spacer);
            }
        }
    }
    changeBackground() {
        document.body.style.backgroundColor = this.getRandomColor();
    }
    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}
new BackgroundChanger();
