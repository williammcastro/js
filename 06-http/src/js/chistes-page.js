import { obtenerChiste } from './http-provider';

const body = document.body
let  btnOtro, olList;//OJO - no se puede inicializar por q los obj no estan creados en el html  de la funcion crearChistesHtml, por eso tambien deben quedar creadas con let para q despues puedan cambiar.!!

const crearChistesHtml = ( ) => {
    const html = `
        <!-- mt-5 significa margen top de 5 -->
        <h1 class="mt-5">Chistes</h1>
        <hr>
        
        <button class="btn btn-primary"> Otro Chiste </button>
        
        <ol class="mt-2 list-group"></ol>
    `;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.append(divChistes);


}

const eventos = () =>{

    olList  = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async() => {
        //console.log('Hola Mundo');
        btnOtro.disabled = true;
        dibujarChiste( await obtenerChiste() );
        btnOtro.disabled = false;
    })
}

//Esta funcion debe recibir un chiste q es un obj {id, value} y lo va a dibujar en el html cuando toco el boton de otro chiste
const dibujarChiste = ( chiste ) => {
    //voy a construiir un li para insertarlo en el crearChistesHtml
    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${ chiste.id }</b>: ${ chiste.value }`;
    olItem.classList.add('list-group-item')//clase del boostrap

    //ahora lo vamos a insertar
    olList.append(olItem);


}

//Esta func es la q por convencion se ejecuta desde el index.js
//Debe crearse en ese orden por q si creo los eventos antes del crearChistesHtml da error cuando presiono el boton!!!
export const init = () => {
    crearChistesHtml();
    eventos();
}