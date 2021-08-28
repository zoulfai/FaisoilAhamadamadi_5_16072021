// afficher le numero de suivi
async function affiche() {
  let orderTmp = localStorage.getItem('order');
  let orderObject = [];
  if (orderTmp) {
    orderObject = JSON.parse(orderTmp);
  }
  orderTableau = orderObject;
  let numSuivi = document.getElementById("merci");
  numSuivi.innerHTML += `<p>${orderTmp}</p>`;
}



//vider le localstorage
function vider() {
  localStorage.clear();
  window.location.href = "../index.html";
}

