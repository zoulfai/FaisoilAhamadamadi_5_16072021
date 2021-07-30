async function fetchText() {
    let response = await fetch('http://localhost:3000/api/teddies/');
    let data = await response.json();
    let elem = document.getElementById('carte');
    elem.innerHTML = '<h2 class="text-center">Le catalogue</h2><br/>';

    for(let i = 0; i < data.length; i++) {
        let elemTab = data[i];
        let name = elemTab.name;

        let prix = elemTab.price;

        let img = elemTab.imageUrl;
        let id = elemTab._id;
        console.log(id);
        console.log(elemTab);

        elem.innerHTML += `
        <div class="col pb-3 ">
          <div class="card">
            <img src="${img}" class="card-img-top" alt="ourson"> 
              <div class="card-body text-center">
                <h5 class="card-title">${name}</h5>
                <p class="card-text"> ${prix}€</p>
                <a href="produit.html?id=${id}" class="btn btn-primary">Voir</a>
              </div>
          </div>
        </div>
        
        `;
    }
}

window.addEventListener('load', async function () {
  await fetchText();
});