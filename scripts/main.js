const wrapperGifHTML = document.querySelector('.wrapper__gif');
const btn = document.querySelector('.btn');
const inputSearch = document.getElementById('search');
const inputQuantity = document.getElementById('quantity');

async function getGifs(name, limit) {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=0rH0SLU9VDj2pn0Y8pI5nlwYcvdUbBOX&q=${name}&limit=${limit}`)
        const data = await response.json();
        return data.data
    } catch (error) {
        console.log('Erreur :', error);
    }
}


btn.addEventListener('click', async (e)=> {
    e.preventDefault();

    if (inputSearch) {
        const name = inputSearch.value;
        const limit = inputQuantity.value;
        const gifs = await getGifs(name, limit);
        for (const element of gifs) {
        wrapperGifHTML.innerHTML += `<img src="${element.images.fixed_height.url}" alt="${element.alt_text}">`
        }
    } else {
        alert('Please fill in every input.');
    }
    
})
