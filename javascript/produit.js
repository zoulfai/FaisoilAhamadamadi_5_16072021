async function fetchText() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    let response = await fetch(`http://localhost:3000/api/teddies/${id}`);
    let ours = await response.json();
    let name = ours.name;
    let img = ours.imageUrl;
    let description = ours.description ;
    let prix = ours.price;
    let elem0 = document.getElementById('oursName');
    elem0.innerHTML = `<h2 class="text-center">${name}</h2>`;
    let elem1 = document.getElementById('carte');
    //carte rempli
    elem1.innerHTML = `<div class="card" style="width:20rem;"> 
      <img src="${img}" class="card-img-top" alt="ourson"> 
        <div class="card-body text-center">
          <h5 class="card-title">${description}</h5>
          <p class="card-text"> ${prix}€</p>
          <a href="panier.html" class="btn btn-primary" id="ajoutPanier">acheter</a>
        </div>
    </div>
  </div>`
}



window.addEventListener('load', async function () {
  await fetchText();
});

