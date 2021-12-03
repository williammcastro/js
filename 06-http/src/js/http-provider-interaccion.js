

//const interaccionUrl  = 'https://rxnav.nlm.nih.gov/REST/RxTerms/version.json'
//const interaccionUrl  = 'https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=207290+190465'
const interaccionUrl  =  'https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=207106+152923+656659'
//const interaccionUrl  = 'https://rxnav.nlm.nih.gov/REST/interaction/sources.json'

// Documentacion del API para obtener la version
//https://lhncbc.nlm.nih.gov/RxNav/APIs/api-RxTerms.getRxTermsVersion.html
//pedir a la api de interaccion de medicamentos

const obtenerInteraccion = async() => {
    try{
        const resp2 = await fetch( interaccionUrl );
        //console.log(resp2);
        if ( !resp2.ok ) throw 'No se puede realizar la peticion a interaccion de medicamentos';
        
        const respInteraccion = await resp2.json();
        //console.log(respInteraccion);
        return respInteraccion;

    }catch (err2){
        throw err2;
    }
}

export {
    obtenerChiste,
    obtenerInteraccion
}


