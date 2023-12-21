const container = document.getElementById("container")
const SearchBox = document.getElementById('ipbox')
const button = document.getElementById('btn')

button.addEventListener('click', ()=>{
    const val = SearchBox.value
    SearchMovies(val)
})

function SearchMovies(st){
    const apikey = "399a3064"
    const apiurl1 = `https://www.omdbapi.com/?s=${st}&apikey=${apikey}`

    // const apiurl = `https://www.omdbapi.com/?s=${val}&apikey=${apikey}`
    fetch(apiurl1)
        .then((res)=>{ return res.json() })
        .then((data)=>{
            DisplayMovies(data)
        })
        .catch((err)=>{
            console.log(err)
        })
}

function DisplayMovies(data){
    if(data.Response == 'True'){
        data.Search.forEach(movie => {
            const moviecard = document.createElement('div')
            moviecard.classList.add('moviecard')
            moviecard.innerHTML = 
            ` <img src=${movie.Poster} alt=${movie.Title} />
            <h3>${movie.Title}</h3>
            <h5>${movie.Year}</h5>
            `
            container.appendChild(moviecard)
        });
    }
}