async function fetchText() {
    let response = await fetch('http://localhost:3000/api/teddies/');
    let data = await response.json();
    let elem = document.getElementById('para');
    elem.innerHTML = "<h1>Le catalogue</h1><br/>";

    for(let i = 0; i < data.length; i++) {
        let elemTab = data[i];
        let name = elemTab.name;

        let prix = elemTab.price;

        let img = elemTab.imageUrl
        elem.innerHTML += name + ":" + prix + '<img width="100" src="' + img + '"/>' + "<br/>";
    }
}

window.addEventListener('load', async function () {
  await fetchText();
});