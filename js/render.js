function renderElement(movie) {
  const element = bildElement(movie)
  window.container.append(element)
}

function bildElement({title, poster_path, vote_average, id}) {

  const template = `
  <article class="movie recommended">
    <img class="movie-poster" src="//image.tmdb.org/t/p/w220_and_h330_face/${poster_path}" alt="">
    <p class="movie-title">${title}</p>
    <p class="movie-id">${id}</p>
    <span class="movie-rate">${vote_average}</span>
  </article>`

  const movie = document.createElement('div')
  movie.innerHTML = template

  return movie.firstElementChild
}

function cleanmovielist() {
  window.container.innerHTML = ''
}

export default function renderMoviesList(list) {
  cleanmovielist()
list.forEach(renderElement)
}