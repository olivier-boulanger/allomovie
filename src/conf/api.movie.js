import * as axios from 'axios';

const apiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use( req => {
  req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjhjZWI1ZDU2OWEwNjRhMDU3MTA5Nzg1MTI1Y2MzNSIsInN1YiI6IjVlOTRjOTNkMTU2Y2M3MDAxYTNiM2UyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uydI7ekwBffpMN6iLrM3evFHRIAGe6HfuGF5-zqYeT0'
  return req;
})

export default apiMovie;

export const apiMovieMap = (m) => ({
  img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
  title: m.title,
  details: `${ m.release_date } | ${ m.vote_average }/10 (${ m.vote_count })`,
  description: m.overview
})