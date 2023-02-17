import React,{useState, useEffect} from 'react';
import "./homeStyle.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Link} from "react-router-dom";
import { AiFillStar} from 'react-icons/ai'
import MovieList from '../../components/MovieList/MovieList';

const url ="https://api.themoviedb.org/3/movie/popular?api_key=963dca4aeee856dc0a877af227a9340b"

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies(){
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results)
        }
        fetchMovies();
    },[])

    // console.log(movies);

  return (
    <div>
      <Carousel
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
       transitionTime={3}
      >
      {movies.map((movie) => {
        return(
          <>
            <Link to={`/movie/${movie.id}`}>
              <div className="posterImage">
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="movieImg" />
              </div>
              <div className="posterImage_overlay">
                  <div className="posterImage_title">{movie?.original_title}</div>
                  <div className="posterImage_runtime">
                      <span id="date">{ movie ? movie.release_date : ""}</span>
                      <span className="posterImage_rating">
                        {movie?.vote_average}
                        {/* <AiFillStar/>  */}
                        <i className="fas fa-star"></i>                 
                      </span>
                  </div>
                  <div className="posterImage_desc">
                      <p> {movie ? movie.overview : ""}</p>
                  </div>
              </div>
            </Link>
          </>
        )
      })
      }
      </Carousel>
      <MovieList/>
    </div>
  )
}

export default Home