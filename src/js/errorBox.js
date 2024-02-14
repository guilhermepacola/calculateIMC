export const errorBox = {
    errorMessage: document.querySelector('.alertError'),

    open() {
        errorBox.errorMessage.classList.add('open');
        setTimeout(this.close, 2000)
    },
    close() {
        errorBox.errorMessage.classList.remove('open');
    }
}
