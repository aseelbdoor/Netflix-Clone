// @ts-nocheck
import "./Home.css";
import MovieList from "../MovieList/MovieList";
import { useEffect } from "react";
import { useState } from "react";
let data =require('../../data/db.json');
// this jast for test to I dont lose my API requsest

export default function Home(){
    // const [movie,setMovie]=useState([]);
    // async function getMovies(){
    //     const url=process.env.REACT_APP_SERVER_URL;
    //     const response= await fetch(`${url}/trending`);
    //     const jsonData=await response.json();
    //     setMovie(jsonData);
        
    // }
    // useEffect(()=>{
    //     getMovies();
    // },[]);
    return(
        <main>
            <MovieList data={data} />
            {/* <MovieList data={movie} /> */}
        </main>
    )
}