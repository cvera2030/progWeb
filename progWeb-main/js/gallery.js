fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{
    console.log(json);
    json.map(item => {
        const currentDiv = document.querySelector(".c-img");
        const $figure = document.createElement("figure");
        const $img = document.createElement("img");
        const $div = document.createElement("div");
        const $h2 = document.createElement("h2");
        const text = document.createTextNode(`${item.title} ${item.price}`) 
        $h2.appendChild(text);
        $img.src = `${item.image}`;
        $div.appendChild($h2);
        $figure.appendChild($img)
        $figure.appendChild($div)

        currentDiv.appendChild($figure);
    })    
})
