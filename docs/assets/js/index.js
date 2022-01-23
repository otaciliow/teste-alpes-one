const functionalButtons = document.getElementsByClassName('functional');
const hideButton = document.getElementById('hide-form');

let cotationModal = document.getElementById('cotation-form');
let modelsDisplay = document.getElementById('models-display-desktop');
let navbars = document.getElementById('navbar');

let modelsDisplayBtns = document.getElementsByClassName('toggle-models-display');

function handleCotation() {
    cotationModal.classList.add('visible');
}

for (let i=0; i<functionalButtons.length; i++) {
    functionalButtons[i].addEventListener('click', handleCotation);
}

function hideCotation() {
    cotationModal.classList.remove('visible');
}

hideButton.addEventListener('click', hideCotation);

function handleModelsDisplay() {
    modelsDisplay.classList.toggle('visible');
}

for (let i=0; i<modelsDisplayBtns.length; i++) {
    modelsDisplayBtns[i].addEventListener('click', handleModelsDisplay);
}

function handleFixedBars() {
    if (window.scrollY > 625) {
        navbars.classList.add('fixed');
    } else {
        navbars.classList.remove('fixed');
    }
}
window.addEventListener('scroll', handleFixedBars);