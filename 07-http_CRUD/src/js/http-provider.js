const urlUsuarios = 'https://reqres.in/api/users?page=2';

const obtenerUsuarios = async() => {

    const resp = await fetch( urlUsuarios );
    const {data:usuarios} = await resp.json();

    //console.log(usuarios);
    return usuarios;

}

export{
    obtenerUsuarios
}