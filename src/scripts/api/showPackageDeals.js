const packageDiv = document.getElementsByClassName("packageDeals")[0]

function pDealsList(packages) {
    packages.forEach(function (product) {
        const output = `<article>
        <h1>Name: ${packages.name}</h1>
        <h2>id: ${packages.id} </h2>
        <p>Brand: ${packages.brand}</p>
        <p>description: ${packages.desc}</p>
        <p>price: ${packages.price}</p>
        </article>`

        packageDiv.innerHTML += output;
    })
}