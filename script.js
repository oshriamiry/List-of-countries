const search = document.getElementById('search').oninput = onValueChange;
let arr;

async function getCountries() {
    try {
        const response = await axios.get('https://restcountries.eu/rest/v2/all')
        console.log(response);

        arr = response.data

        displayList(arr);

        console.log(html);

        const count = document.querySelector('#counter');
        count.innerText = `(${arr.length})`

    }
    catch (error) {
        console.log(error);
    }
}
getCountries();

function displayList(counteriesArr) {
    const html = counteriesArr.map(item => `<li>
    <span class="sp2">${item.name}</span>
    <h5>${item.region}</h5>
    <img src = ${item.flag}>
    </li>`).join('');
    document.querySelector('#list').innerHTML = html;

}

function onValueChange(e) {
    let { value } = e.target;

    value = value.toLowerCase();

    const filteredArr = arr.filter(item => item.name.toLowerCase().startsWith(value));


    displayList(filteredArr);
}

