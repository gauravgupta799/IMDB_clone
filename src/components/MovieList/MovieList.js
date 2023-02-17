import React,{useState, useEffect} from 'react';
import "./movielist.css";
import {useParams} from "react-router-dom";
import Cards from '../Cards/Cards';
import {url ,api_key} from "../../config";


const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const {type} = useParams();
    // console.log(type)

    useEffect(()=>{
        getMovieData();
    },[])

    useEffect(()=>{
        getMovieData();
    },[type])

    const getMovieData = async()=>{
        const res = await fetch(`${url}/${type ? type : "popular"}?api_key=${api_key}`);
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
                <Cards movie={movie} key ={movie.id}/>
            ))}
        </div>
    </div>
  )
}

export default MovieList