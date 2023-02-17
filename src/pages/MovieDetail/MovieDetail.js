import React,{useState, useEffect} from 'react';
import "./movieDetail.css";
import {useParams} from "react-router-dom";


const MovieDetail = () => {

    const {id} = useParams();
    console.log(id)

  return (
    <div>
        Moviedeta
    </div>
  )
}

export default MovieDetail