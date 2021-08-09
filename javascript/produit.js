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
          <button onclick="myFunction('${name}','${id}')" class="favorite styled" type="button">Ajouter au panier</button>
        </div>
    </div>
  </div>`
}

function myFunction(name,id){
  alert(`A été ajouter ${name}`);
  localStorage.setItem('id',id);
}

window.addEventListener('load', async function () {
  await fetchText();
});

