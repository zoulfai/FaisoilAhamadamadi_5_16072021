//affichage de la page index
async function affichePage() {
  let response = await fetch('http://localhost:3000/api/teddies/');
  let data = await response.json();
  let elem = document.getElementById('carte');
  elem.innerHTML = '<h2 class="text-center">ours en peluche faits à la main</h2><br/>';
  //boucle recuperation des elements
  for (let i = 0; i < data.length; i++) {
    let elemTab = data[i];
    let name = elemTab.name;
    let prix = elemTab.price;
    let img = elemTab.imageUrl;
    let id = elemTab._id;
    //remplisage du html
    elem.innerHTML += `
        <div class="col-sm-12 col-md-6 col-lg-6 pb-3 ">
          <div class="card">
            <img src="${img}" class="card-img-top" alt="ourson"> 
              <div class="card-body text-center">
                <h5 class="card-title">${name}</h5>
                <p class="card-text"> ${prix}€</p>
                <a href="produit.html?id=${id}" class="btn btn-primary">Voir</a>
              </div>
          </div>
        </div>`;
  }
}
//chargement 
window.addEventListener('load', async function () {
  await affichePage();
});