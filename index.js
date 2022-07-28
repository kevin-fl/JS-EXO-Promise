//                                     LES PROMISES

/* une Promise servent a faire de l asynchrone , une execution differé dans le temps */

/* crée un programme qui va validé des chiffres random entre 1&5 ou 6&10*/

/*cette constante va prendre en premier argument une fonction*/ 

/*la promise va prendre egalement 2 parametres , resolve ou reject (ou error) car soit la promise va etre tenue soit rejeté  */
/* la promise permet de faire des requetes http pour consommer une api par exemple ;)*/

const promesse1 = new Promise((resolve, reject) => {


    const aleatoire = Math.trunc(Math.random() * 10) + 1;
    
    if (aleatoire <= 5) {
        resolve ("entre 1&5 Genial !")
    } else {
        
        reject ("entre 6 & 10 dommage")
    }
    
    })
    
    /*ensuite on peut faire des chaines de promise avec le .then ! plusieurs .then qui se suivent , trop cool !!
     le.catch c est pour siginifier une erreur , ca attrape l erreur en bref  */ 
    /*si notre promise est resolve , hop ca passe au point .then  */
    
    .then((Txt) => {
        console.log(Txt);
    })
    .then((Txt) => {
        console.log("Bravissimooo");
    })
    
    .catch((Txt) => {
        console.log(Txt);
        console.log("NICE TRYYY");
    })