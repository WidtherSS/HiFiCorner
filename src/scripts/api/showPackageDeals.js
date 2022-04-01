const packageDiv = document.getElementsByClassName("packageDeals")[0]

function pDealsList(packages) {
    packages.forEach(function (package) {
        const output = `<article>
        <h1>Name: ${package.name}</h1>
        <h2>id: ${package.id} </h2>
        <p>Brand: ${package.brand}</p>
        <img src"${package.images}">
        <p>description: ${package.desc}</p>
        <p>price: ${package.price}</p>
        </article>`

        packageDiv.innerHTML += output;
    })
}