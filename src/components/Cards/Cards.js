import React,{useState, useEffect} from 'react';
import "./cardStyle.css";
import {Link} from "react-router-dom";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

const Cards = ({movie}) => {
    const [isLoading , setIsLoading] = useState(true);

    useEffect(()=> {
        setTimeout(()=> {
            setIsLoading(false)
        },1500)
    },[])

  return (
    <div>
    {isLoading ? 
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2}/> 
            </SkeletonTheme>
        </div> 
    : 
    <Link to={`/movie/${movie.id}`}>
        <div className="cards">
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="movieImg" />
            <div className="cards_overlay">
                <div className="card_title">{movie?.original_title}</div>
                <div className="card_runtime">
                    <span id="date">{movie?.release_date}</span>
                    <span className="card_rating">
                    {movie?.vote_average}
                        <i className="fas fa-star"></i> 
                    </span>
                </div>
                <div className="card_desc">
                    <p> {movie ? movie.overview : ""}</p>
                </div>
            </div>
        </div>
    </Link> 
    }
    </div>
  )
}

export default Cards