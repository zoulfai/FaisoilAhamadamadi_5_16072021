var oursTableau = [];

function calculPanier(oursObject){

//conversion du prix
let totalPanier = 0;

oursObject.forEach((ours)=> {
  let convertitPrix = 0;
  convertitPrix = parseInt(ours.prix);
  totalPanier = totalPanier+ convertitPrix;
});
return totalPanier;
}

//afficher le panier
async function fetchText(){


    let oursTmp = localStorage.getItem('ours');
    console.log(oursTmp);
    let totalPanier = 0;
    let oursObject = [];
    if (oursTmp){
      oursObject = JSON.parse(oursTmp);
    }
    oursTableau = oursObject;
    let pannier = document.getElementById("oursName");

    for (let ours of oursObject) {
        pannier.innerHTML += `<p class="navbar-brand" >
        <img src="${ours.img}" width="50" height="50" alt="ourson" class="d-inline-block align-text-top">${ours.name} ${ours.prix}$</p>`;
    }

totalPanier = calculPanier(oursObject);
//calcul total panier
const totalPrice = document.getElementById("total");
  totalPrice.innerHTML += `${totalPanier} $`;

//affichage formulaire
  const form = document.getElementById("formulaire");
  const validation = document.getElementById("passCommande");
    const cacheButton = document.getElementById("cacheBouton");
    validation.addEventListener("click", () => {
        form.classList.toggle("d-none");
        cacheButton.classList.add("d-none");
    });


}
// formulaire de commande
 async function commande(){
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const adresseMail = document.getElementById("adresseMail").value;
    const ville = document.getElementById("ville").value;
    const adresse = document.getElementById("adresse").value;
    console.log(oursTableau);
    let oursIds = oursTableau.map((ours)=>ours.id);
    console.log(oursIds);
  
    try{
       
      let result = await fetch("http://localhost:3000/api/teddies/order", {
        method: "POST", headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( {
          products: oursIds,
          contact:{
            firstName : prenom,
            lastName : nom,
            address : adresse,
            city : ville,
            email : adresseMail,
          }
        })
      })
      console.log(result);
      const content = await result.json();
      console.log(content);
      localStorage.setItem('order', JSON.stringify(content.orderId));
    }
    catch(error){
      console.log(error)
    }
// validation formulaire
    const testNom = /^[A-Za-z]{1,26}$/;
    const testPrenom = /^[A-Za-z]{1,26}$/;
    const testVille = /^[A-Za-z]{1,26}$/;
    const testAdresse =  /^[A-Za-z0-9 \.\-]{1,26}$/;
    const testAdresseMail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const textBox = document.getElementById("invalidCheck");
  
    if (
      (testNom.test(nom) == true) &
      (testPrenom.test(prenom) == true) &
      (testVille.test(ville) == true) &
      (testAdresse.test(adresse) == true) &
      (testAdresseMail.test(adresseMail) == true) &
      (textBox.checked == true)
   ){
    window.location.href="../confirmation.html";
   }else {
    alert(
        "Veuillez correctement remplir le formulaire pour valider votre commande."
    );
  }
   
  }
   


window.addEventListener('load', async function() {
    await fetchText();
  });

