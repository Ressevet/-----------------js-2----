function visibleQuestion(element, id) {
    const targetElement = document.getElementById(id);
    const otherElements = Array.from(document.querySelectorAll('.question-container:not(#' + id + ')'));

    otherElements.forEach((elem) => {
        elem.setAttribute('hidden', '');
        elem.parentElement.querySelector('.plus').innerHTML = '+';
    });

    targetElement.toggleAttribute('hidden');
    const plusChange = element.querySelector('.plus');
    plusChange.innerHTML = plusChange.innerHTML === '+' ? '-' : '+';
}
