import{Utente} from "./Utente.js";

let user = new Utente("leo");
console.log(user);
//Input data
//let inputNome= document.getElementById("inputNome");
document.getElementById("check");
check.addEventListener("click",printData,false);
//check.addEventListener("click",delData,false);

function printData(){
   
    document.getElementById("outputData").textContent= 
    document.getElementById("inputNome").value + " " +
    document.getElementById("inputCognome").value + " "+
    document.getElementById("inputCodiceFiscale").value+ " "+
    document.getElementById("inputDataNascita").value+ " "+
    document.getElementById("inputIndirizzo").value + " "+
    document.getElementById("inputEmail").value +" "+
    document.getElementById("inputNumero").value + " "+
    document.getElementById("inputOccupazione").value;
    
    
}

function delData(){
    document.getElementById("inputNome").value="";
    document.getElementById("inputCognome").value= "";
    document.getElementById("inputCodiceFiscale").value= "";
    document.getElementById("inputDataNascita").value= "";
    document.getElementById("inputIndirizzo").value="";
}

