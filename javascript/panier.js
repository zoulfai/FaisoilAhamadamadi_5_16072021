async function fetchText(){


    let oursTmp = localStorage.getItem('ours');
    console.log(oursTmp);
    let oursObject = [];
    if (oursTmp){
      oursObject = JSON.parse(oursTmp);
    }
    let pannier = document.getElementById("para");

    for (let ours of oursObject) {
        pannier.innerHTML += `<p>${ours.name}</p>`;
    }

}

async function commande(){
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

}


window.addEventListener('load', async function() {
    await fetchText();
  });

