import placeholder from "../placeholder.png"

export function getMovie(path){
  return path 
  ? "https://image.tmdb.org/t/p/w300" + path 
    : placeholder;
} 