import { modalMaker } from './dialog-modal-maker.js';
class UserAccountComponent extends HTMLElement {
    constructor() {
        super(...arguments);
        this.promptDeleteDialog = this.prompt.bind(this);
    }
    prompt() {
        modalMaker.makeModal({
            title: 'Confirm Account Deletion',
            message: 'Deleting a users account cannot be undone. Are you sure you want to delete this account?',
            actions: [
                {
                    label: 'close',
                    classes: ['-text', '-grey'],
                    callback: () => { }
                },
                {
                    label: 'delete',
                    classes: ['-solid', '-red'],
                    callback: this.deleteAccount.bind(this)
                }
            ]
        });
    }
    deleteAccount() {
        /** Do account deletion logic */
        window.alert('User account deleted');
    }
    connectedCallback() {
        const deleteButton = this.querySelector('button');
        deleteButton.addEventListener('click', this.promptDeleteDialog);
    }
}
customElements.define('user-account', UserAccountComponent);
