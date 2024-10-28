document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('bounce');
        setTimeout(() => button.classList.remove('bounce'), 300);
    });
});
