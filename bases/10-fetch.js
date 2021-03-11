const apiKey = 'DlOC6b1zupjsx6PX5T2O04CnNuU8UZYD';
const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
peticion
    .then( resp => resp.json())
    .then( ({ data }) => { 
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch()