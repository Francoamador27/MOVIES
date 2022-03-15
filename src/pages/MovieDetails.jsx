import movie from "./movie.json";
import styles from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/spinner";
import { useQuery } from "../hooks/useQuery";
import { getMovie } from "../utils/getMovie";

export function MovieDetails (){
    const {movieID} = useParams();
    const[isLoading, setIsLoadig] = useState(true);
    const [movie, setMovie]= useState(null);



    useEffect (()   =>{
 setIsLoadig(true);

        get("/movie/" + movieID).then ((data) => {
            setIsLoadig(false);
setMovie(data);
        });
    }, [movieID] );
    
if(isLoading){
    return <Spinner/>
}

    if(!movie){
        return null;
    }



    const imageUrl = getMovie(movie.poster_path, 500) ;
    return(
        <div className={styles.detailsContainer}>
<img className={styles.col + " " + styles.movieImage } 
src={imageUrl} alt={movie.title} />
<div className={styles.col + " " + styles}>
<p className={styles.firstItem}><strong>Title:</strong> {movie.title} </p>
<p>
    <strong>Genres: </strong>{movie.genres.map(genre => genre.name).join(", ")}
</p>
<p><strong>Description: </strong>{movie.overview} </p>
</div>

        </div>
    )
}