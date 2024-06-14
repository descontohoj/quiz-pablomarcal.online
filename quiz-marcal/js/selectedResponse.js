function toggleResponse(clickedElement, group) {
    // Obtém todos os elementos do mesmo grupo
    const groupElements = document.querySelectorAll(`.${group}`);

    // Remove a classe 'active' de todos os elementos do mesmo grupo
    groupElements.forEach(element => {
        element.classList.remove('active');
    });

    // Adiciona a classe 'active' apenas ao elemento clicado
    clickedElement.classList.add('active');
}