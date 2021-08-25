

// afficher le numero de suivi
async function fetchText(){
    let orderTmp = localStorage.getItem('order');
    console.log(orderTmp);
    let orderObject = [];
    if (orderTmp){
      orderObject = JSON.parse(orderTmp);
    }
    orderTableau = orderObject;
    let numSuivi = document.getElementById("merci");
        numSuivi.innerHTML += `<p>${orderTmp}</p>`;

}



//vider le localstorage
function vider() {
    localStorage.clear();
    window.location.href="../index.html";
}

