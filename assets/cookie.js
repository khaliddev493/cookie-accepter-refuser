function acceptCookies() {
    document.getElementById("cookie-banner").style.display = "none";
    document.getElementById("name-section").style.display = "block";
  }

  function refuseCookies() {
    document.getElementById("cookie-banner").style.display = "none";
  }

  function storeName() {
    const name = document.getElementById("user-name").value;
    document.getElementById("dom-storage").dataset.username = name;

    document.getElementById("name-section").style.display = "none";
    document.getElementById("display-name").innerText = name;
    document.getElementById("greeting").style.display = "block";
  }
// 

//  ajouter une date d'expiration  12 mois
let nom = "utilisateur";
let valeur = "mathiau";
let jours = 365;

const newExpiration = new Date();
// je converti les mois les jours les heurs et minutes en ms 

newExpiration.setTime(newExpiration.getTime() + (365*24*60*60*1000));
//  je créer une variable date expiration converti 

const expirationok = "expires=" + newExpiration.toUTCString();

document.cookie ="nom=mathiau ; "+expirationok+" ;path=/";


//  enregister un cookie  dans local storage 

// localStorage.setItem('name','damien')
// console.log(mycookie);
// recuprer cette valeur  plus  tard 
 let name = localStorage.getItem('name')

// supprimer un cookie depuis localstorgae 

localStorage.removeItem('name');

//  vider le local storage 

localStorage.clear();
localStorage.removeItem('name')
