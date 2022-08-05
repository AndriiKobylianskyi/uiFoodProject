
function toggleModal(method, modalSelector, timerModal) {
    modal = document.querySelector(modalSelector)
    switch (method) {
        case 'add':
            modal.classList.add('show')
            break;
        case 'remove':
            modal.classList.remove('show')
            break;
    }

    if (modal.classList.contains('show')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
    clearInterval(timerModal)
}

function modal(formsSelector, modalSelector, timerModal) {
    const forms = document.querySelectorAll(formsSelector),
        modal = document.querySelector(modalSelector)



    forms.forEach(form => form.addEventListener('click', () => toggleModal('add', modalSelector, timerModal)))

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target === modal.querySelector('[data-close]')) {
            toggleModal('remove', modalSelector, timerModal)
        }
    })

    window.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') toggleModal(`remove`, modalSelector, timerModal)
    })

    function showOnce() {
        if (document.documentElement.clientHeight + window.pageYOffset >= document.documentElement.scrollHeight) {
            toggleModal(`add`, modalSelector, timerModal)
            window.removeEventListener('scroll', showOnce)
        }
    }
    window.addEventListener('scroll', showOnce)
}
export { toggleModal }
export default modal