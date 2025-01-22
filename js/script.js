// Attraverso l’apposita API di Boolean
//  https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.


// selezione l'elemento di Output
const listaEmail = document.getElementById('emailLista');
console.log(listaEmail);


// creo un array vuoto

const contenitoreEmail = [];


// creo un ciclo un for che mi genera 10 indirizzi email

for (let i = 0; i < 10; i++){
    
    // per ottenere i dati richiamo la libreria axios,generandomi l'email tramite l'API
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    
    .then(risposta => {
        // da questo console.log riesco a vedere gli interi oggetti
        // console.log(risposta);
        

        // dall'elemento selezionato all'interno della funzione di call back estrapolo la proprietà che mi interessa x ottenere l'elemento EMAIL
        const emailRandom = risposta.data.response;
        
        // una volta preso il dato dell'email lo "stampo" in console
        // console.log(emailRandom);

        // per aggiungere le email all'interno dell'array

        contenitoreEmail.push(emailRandom);
        console.log(contenitoreEmail);
        
        
        
        
    })
    
    
    
    
};




// una volta preso il dato dell'email lo "stampo" in console

// successivamente lo stampo in pagina (HTML)

