var oursTableau = [];
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

//conversion du prix
   oursObject.forEach((ours)=> {
    convertitPrix = parseInt(ours.prix);
    totalPanier = totalPanier+ convertitPrix;
});
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

 async function commande(){
    alert ("commande");
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const adresseMail = document.getElementById("adresseMail").value;
    const codePostal = document.getElementById("codePostal").value;
    const adresse = document.getElementById("adresse").value;
    alert (nom,prenom,adresseMail,codePostal,adresse);
    console.log(oursTableau);
    let oursIds = oursTableau.map((ours)=>ours.id);
    console.log(oursIds);

    /*let oursTmp = localStorage.getItem('ours');
    console.log(oursTmp);
    let oursObject = [];
    if (oursTmp){
      oursObject = JSON.parse(oursTmp);
    }
    console.log(oursObject);*/
    try{
       
      let result = await fetch("http://localhost:3000/api/teddies/order", {
        method: "POST", headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( {products:oursIds,contact:{
          firstName : "",
          lastName : "",
          address : "",
          city : "",
          email : ""
          
        }})
      })
      console.log(result);
    }
    catch(error){console.log(error)}

   

}


window.addEventListener('load', async function() {
    await fetchText();
  });

