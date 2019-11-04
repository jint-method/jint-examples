interface BlogCard
{
    title: string,
    copy: string,
    img: {
        url: string,
        alt: string,
    },
    link: {
        text: string,
        url: string,
    },
}

class BlogCardsComponent extends HTMLElement
{
    private _template : HTMLTemplateElement;
    private _cardContainer : HTMLElement;

    constructor()
    {
        super();
        this._template = this.querySelector('template');
        this._cardContainer = this.querySelector('blog-card-container');
        setTimeout(() => {
            this.fetchCardData();
        }, 3000);
    }

    private async fetchCardData()
    {
        try
        {
            const request = await fetch('/blog-cards/card-data.json', {
                headers: new Headers({
                    'Accept': 'application/json'
                })
            });
            if (request.ok)
            {
                const response = await request.json();
                this._cardContainer.innerHTML = '';
                this.generateBlogCards(response.data);
            }
            else
            {
                throw `Failed to fetch card data. Server responded with ${ request.status }:${ request.statusText }`;
            }
        }
        catch (error)
        {
            console.error(error);
        }
    }

    private generateBlogCards(data:Array<BlogCard>) : void
    {
        data.map((card) => {
            const node = document.importNode(this._template.content, true);
            const img = node.querySelector('img');
            const title = node.querySelector('h3');
            const copy = node.querySelector('p');
            const link = node.querySelector('a');
            const button = node.querySelector('button');

            img.src = card.img.url;
            img.alt = card.img.alt;
            title.innerText = card.title;
            copy.innerText = card.copy;
            link.href = card.link.url;
            button.innerText = card.link.text;

            this._cardContainer.append(node);
        });
    }
}
customElements.define('blog-cards-component', BlogCardsComponent);