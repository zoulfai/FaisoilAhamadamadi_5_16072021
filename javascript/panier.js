async function fetchText(){


    let oursTmp = localStorage.getItem('ours');
    console.log(oursTmp);
    let totalPanier = 0;
    let oursObject = [];
    if (oursTmp){
      oursObject = JSON.parse(oursTmp);
    }
    let pannier = document.getElementById("oursName");

    for (let ours of oursObject) {
        pannier.innerHTML += `<p class="navbar-brand" >
        <img src="${ours.img}" width="50" height="50" alt="ourson" class="d-inline-block align-text-top">${ours.name} ${ours.prix}$</p>`;
    }

   oursObject.forEach((ours)=> {
    convertitPrix = parseInt(ours.prix);
    totalPanier = totalPanier+ convertitPrix;

});
const totalPrice = document.getElementById("total");
  totalPrice.innerHTML += `${totalPanier} $`;

  const form = document.getElementById("formulaire");
  const validation = document.getElementById("passCommande");
    const cacheButton = document.getElementById("cacheBouton");
    validation.addEventListener("click", () => {
        form.classList.toggle("d-none");
        cacheButton.classList.add("d-none");
    });
}


 /*async function commande(){
    let oursTmp = localStorage.getItem('ours');
    console.log(oursTmp);
    let oursObject = [];
    if (oursTmp){
      oursObject = JSON.parse(oursTmp);
    }
   await fetch("http://localhost:3000/api/teddies/order", {
        method: "POST",
        body: {products:oursObject,contact:{}}
      })

}*/


window.addEventListener('load', async function() {
    await fetchText();
  });

