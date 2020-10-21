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

async function iegutVielasNoApi()
{
    let datiNoApi = await fetch('https://pytonc.eu.pythonanywhere.com/api/v1/vielas')
    let datiJson = await datiNoApi.json();
    return datiJson;
}

async function iegutInventaruNoApi()
{
    let datiNoApi = await fetch('https://pytonc.eu.pythonanywhere.com/api/v1/inventars')
    let datiJson = await datiNoApi.json();
    return datiJson;
}

async function raditDatus()
{
    let vielasJson = await iegutVielasNoApi();
    let inventarsJson = await iegutInventaruNoApi();

    let produktiKopa = vielasJson.concat(inventarsJson);

    

    for (let i = 0; i < produktiKopa.length; i++)
    {
        console.log( produktiKopa[i]['title'] );
    }
    
}

raditDatus();