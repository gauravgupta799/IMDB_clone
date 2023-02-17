import React,{useState, useEffect} from 'react';
import "./homeStyle.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Link} from "react-router-dom";
import { AiFillStar} from 'react-icons/ai'
import {url ,api_key} from "../../config";
import MovieList from '../../components/MovieList/MovieList';


const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies(){
            const res = await fetch(`${url}/popular?api_key=${api_key}`);
            const data = await res.json();
            setMovies(data.results)
        }
        fetchMovies();
    },[])


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
          <div key={movie.id}>
            <Link to={`/movie/${movie?.id}`}>
              <div className="posterImage">
                <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="movieImg" />
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
          </div>
        )
      })
      }
      </Carousel>
      <MovieList/>
    </div>
  )
}

export default Home