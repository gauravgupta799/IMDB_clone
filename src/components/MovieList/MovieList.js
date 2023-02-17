import React,{useState, useEffect} from 'react';
import "./movielist.css";
import {useParams} from "react-router-dom";
import Cards from '../Cards/Cards';

// const url ="https://api.themoviedb.org/3/movie/popular?api_key=963dca4aeee856dc0a877af227a9340b"

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const {type} = useParams();
    console.log(type)

    useEffect(()=>{
        getMovieData();
    },[])

    useEffect(()=>{
        getMovieData();
    },[type])

    const getMovieData = async()=>{
        const res = await fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=963dca4aeee856dc0a877af227a9340b`);
        const data = await res.json();
        setMovieList(data.results)
    }
  return (
    <div className="movie_list">
        <h2 className="list_title">
            {(type ? type : "POPULAR").toUpperCase()}
        </h2>
        <div className="list_cards">
            {movieList?.map((movie)=>(
                <Cards movie={movie}/>
            ))}
        </div>
    </div>
  )
}

export default MovieList