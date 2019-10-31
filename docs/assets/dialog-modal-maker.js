class DialogModalMaker {
    makeModal(modalObject) {
        const modal = document.createElement('dialog-modal-container');
        const modalBackdrop = document.createElement('dialog-modal-backdrop');
        modalBackdrop.addEventListener('click', () => { modal.remove(); });
        modal.append(modalBackdrop);
        const dialogModal = document.createElement('dialog-modal');
        if (modalObject.title) {
            const title = document.createElement('h3');
            title.innerText = modalObject.title;
            dialogModal.append(title);
        }
        if (modalObject.message) {
            const message = document.createElement('p');
            message.innerText = modalObject.message;
            dialogModal.append(message);
        }
        if (modalObject.actions) {
            const actionsContainer = document.createElement('dialog-actions-wrapper');
            modalObject.actions.map((action) => {
                const button = document.createElement('button');
                button.innerText = action.label;
                button.classList.add(...action.classes);
                button.addEventListener('click', () => {
                    modal.remove();
                    action.callback();
                });
                actionsContainer.append(button);
            });
            dialogModal.append(actionsContainer);
        }
        modal.append(dialogModal);
        document.body.append(modal);
    }
}
export const modalMaker = new DialogModalMaker();
