async function fetchText() {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    console.log(id);
    let response = await fetch(`http://localhost:3000/api/teddies/${id}`);
    let ours = await response.json();
    let name = ours.name;
    console.log(ours);
    let elem = document.getElementById('oursName');
    elem.innerHTML = `<h2 class="text-center">${name}</h2><br/>`;
}

window.addEventListener('load', async function () {
  await fetchText();
});