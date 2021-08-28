//affichage page produit
async function afficheProduit() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id')
  let response = await fetch(`http://localhost:3000/api/teddies/${id}`);
  let ours = await response.json();
  let name = ours.name;
  let img = ours.imageUrl;
  let description = ours.description;
  let prix = ours.price;
  let elem0 = document.getElementById('oursName');
  elem0.innerHTML = `<h2 class="text-center">${name}</h2>`;
  let elem1 = document.getElementById('image');
  let elem2 = document.getElementById('descript');
  let elem4 = document.getElementById('prix');
  let elem5 = document.getElementById('btnPannier');
  //carte rempli
  elem1.innerHTML = ` <img src="${img}" class="card-img-top" alt="ourson">`;
  elem2.innerHTML = `<h5 class="card-title">${description}</h5>`;
  elem4.innerHTML = `<h5 class="card-title">${prix}$</h5>`;
  elem5.innerHTML = `<button onclick="stockage('${name}','${id}','${prix}','${img}')" class="btn btn-primary" type="button">Ajouter au panier</button>`;
  choixCouleur(ours);

}

//fonction pour la liste des couleurs
function choixCouleur(ours) {
  let couleurs = document.getElementById("choix");
  for (let couleur of ours.colors) {
    couleurs.innerHTML += `<option selected value="${couleur}">${couleur}</option>`;
  }
}


//ajouts dans le local storage
let stockTab = []

function stockage(name, id, prix, img) {

  let oursTmp = localStorage.getItem('ours');
  let oursObject = [];
  if (oursTmp) {
    oursObject = JSON.parse(oursTmp);

  }

  oursObject.push({
    name,
    id,
    prix,
    img,
  }
  );
  alert(`A été ajouter ${name}`);

  localStorage.setItem('ours', JSON.stringify(oursObject));

}


//chargement
window.addEventListener('load', async function () {
  await afficheProduit();
});