const getImagen = async () => { //La palabra reservada async crea una promesa
    const apiKey = 'DlOC6b1zupjsx6PX5T2O04CnNuU8UZYD';
    const peticion = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`); //Con el await se espera a que se ejecute esta linea hasta que ejecute la siguiente
    const data = await peticion.json()
        .then( ({data}) => {
            const { url } = data.images.original;
            const img = document.createElement('img');
            img.src = url;
            document.body.append(img);
        })
    return data;
}

getImagen();