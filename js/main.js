const vielasPoga = document.querySelector('.vielas-poga');
const aprikojumsPoga = document.querySelector('.aprikojums-poga');
const aprikojumsRindas = document.getElementsByClassName('aprikojums');
const vielasRindas = document.getElementsByClassName('viela');

vielasPoga.addEventListener('click', function() {
    vielasPoga.classList.toggle('selected');

    for (let i = 0; i < aprikojumsRindas.length; i++) {
        aprikojumsRindas[i].classList.toggle('slepts');
    }
});

aprikojumsPoga.addEventListener('click', function() {
    aprikojumsPoga.classList.toggle('selected');

    for (let i = 0; i < vielasRindas.length; i++) {
        vielasRindas[i].classList.toggle('slepts');
    }
});