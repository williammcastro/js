import { getUsuario, obtenerUsuarios } from "./crud-provider";



const body  = document.body;
let tbody;
let correlativo = 0;

const crearHtml = () => {
    
    const html = `
    <h1 class="mt-5"> Usuarios</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>

        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );

    // Crear una referencia al TBODY
    // ya que los TRs van dentro del tbody
            // querySelector('tbody');
            // Crear una variable para mantener la referencia?
    tbody = document.querySelector('tbody');

}


// La función crearFilaUsuario debería de recibir un UNICO usuario
// con la siguiente estructura
    // {
    //     "id": 7,
    //     "email": "michael.lawson@reqres.in",
    //     "first_name": "Michael",
    //     "last_name": "Lawson",
    //     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    // }
const crearFilaUsuario = ( usuario ) => {

    // En la tabla deben de colocar un correlativo empezando en 1
    // También deben de colocar el avatar

    const html = `
        <td scope="col"> ${usuario.id} </td>
        <td scope="col"> ${usuario.email} </td>
        <td scope="col"> ${ usuario.first_name } ${ usuario.last_name } </td>
        <td scope="col"> <img class="img-thumbnail" src="${usuario.avatar}"> </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;
    tbody.appendChild( tr );

    // Añadir el table row (tr) dentro del TBody creado anteriormente

}


export const init = async() => {

    crearHtml();
    correlativo = 0;// cuando se llame el init se destruiria el correlativo de la linea 7
    //console.log( getUsuario(1)); 

    //Opcion 1: usando el await para esperar la resolucion de la promesa para un elemento, solo sirve para esta fx
    //crearFilaUsuario(await getUsuario(1));


    // //Opcion 2: utilizando el then para la promesa para un elemento, solo sirve para getUsuario
    // getUsuario(1).then( usuariow => {
    //     crearFilaUsuario( usuariow );
    //     //console.log( usuariow.email );
    // })

    // //Opcion 3: utilizando el then para la promesa de el arreglo de usuarios
    // obtenerUsuarios().then( usuariow => {
    //     usuariow.forEach(element => {
    //         crearFilaUsuario( element );
    //     });
    // })

    //  //Opcion 4: creando una variable
    // const usuarios = await obtenerUsuarios();
    // usuarios.forEach( crearFilaUsuario );

    //Opcion 5: resumiendo la anterior
    (await obtenerUsuarios()).forEach( crearFilaUsuario );


    
    // Obtener la lista de usuarios usando el servicio creado
    // Por cada usuario, llamar la función crearFila (for, forEach)
    // Colocar el init en el index.js, para que se ejecute la creación

}

