import React,{useState, useEffect} from 'react';
import "./movieDetail.css";
import {useParams} from "react-router-dom";
import {url ,api_key} from "../../config";


const MovieDetail = () => {
    const [movieDetail, setMovieDetail] = useState();
    const {id} = useParams();

    useEffect(()=>{
        async function getMovieData(){
            const res = await fetch(`${url}/${id}?api_key=${api_key}`)
            const data = await res.json();
            setMovieDetail(data);
        }
       getMovieData();
       window.scrollTo(0, 0);
    },[id])
   
    // function getMovieData(){
    //      fetch(`${url}/${id}?api_key=${api_key}`)
    //      .then(res=> res.json())
    //      .then(data =>setMovieDetail(data))  
    // }
 

  return (
    <div className="movieContainer">
        <div className="movieImage">
            <img src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path}`} alt="" />
        </div>
        <div className="movieDetail_wrapper">
            <div className="moviePoster_wrapper">
                <img src={`https://image.tmdb.org/t/p/original/${movieDetail?.poster_path}`} alt="moviePoster" />
            </div>
            <div className="movie_desc">
                <div className="movieDetail_top">
                     <h2 id="movie_title">{movieDetail?.original_title}</h2>
                     <div className="movie_rating">
                        <span>{Math.floor(movieDetail?.vote_average)} <i className="fas fa-star"></i> </span>
                        <span>({movieDetail?.vote_count}) Votes</span>
                     </div>
                     <p>{movieDetail?.runtime} mins</p>
                     <p>Release Date: {movieDetail?.release_date}</p>
                     <div className="genres">
                        {
                            movieDetail?.genres.map((genre)=>(
                                <button key={genre.id}>{genre.name}</button>
                            ))
                        }
                     </div>
                </div>
                <div className="movieDetail_bottom">
                    <h3>{movieDetail?.tagline}</h3>
                    <p>{movieDetail?.overview}</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default MovieDetail