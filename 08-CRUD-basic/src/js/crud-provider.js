
const urlCRUD = 'https://reqres.in/api/users';


// //GET se obtiene el usuario
const getUsuario = async(id) => {
    const resp = await fetch(`${ urlCRUD }/${ id }`);
    const {data} = await resp.json();
    //console.log(data);
    return data;
}


// // POST respuesta 400? depende del backend
const crearUsuario = async( usuario ) => {

    const resp = await fetch( `${urlCRUD}`, {
        method: 'POST',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type': 'application/json'
        }
    } );

    //console.log(await resp.json());//Para probar!
    //return true;//Si todo va OK, puedo devolver solo un true!
    return await resp.json();
}


// //PUT - respuesta 200
const actualizarUsuario = async( id, usuario ) => {

    const resp = await fetch( `${urlCRUD}/${id}`, {
        method: 'PUT',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type': 'application/json'
        }
    } );

    return await resp.json();
}


// // DELETE borrar usuario - respuesta 204 - depende del backend como lo cuadro
const borrarUsuario = async( id ) => {
    const resp = await fetch(`${urlCRUD}/${id}`, {
        method: 'DELETE'
    });

    return ( resp.ok ) ? 'Borrado' : 'No se pudo eliminar';
}


// Obtener todos los usuarios
const obtenerUsuarios = async () => {
    const resp = await fetch( urlCRUD );
    const { data:usuarios } = await resp.json();
    //console.log(data);
    return usuarios;
}

export {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    obtenerUsuarios,
    borrarUsuario
}


