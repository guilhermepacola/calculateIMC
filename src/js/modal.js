// Structures
export const Modal = {
    wrapper: document.querySelector('.modal--wrapper'),
    text: document.querySelector('.modal .title span'),
    BtnClose: document.querySelector('#close'),


    open() {
        Modal.wrapper.classList.add('open');
    },
    close() {
        Modal.wrapper.classList.remove('open');
    }
}

Modal.BtnClose.onclick = () => {
    Modal.close();
}

// Events
window.addEventListener('keydown', handleKeyDown)

// Functions
function handleKeyDown(event){   
    if( event.key === 'Escape'){
        Modal.close()
    }
}