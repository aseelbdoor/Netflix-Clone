// @ts-nocheck
import "./Home.css";
import MovieList from "../MovieList/MovieList";
import { useEffect } from "react";
import { useState } from "react";

export default function Home(){
    const [movies,setMovie]=useState([]);
    async function getMovies(){
        const url=process.env.REACT_APP_SERVER_URL;
        const response= await fetch(`${url}/trending`);
        const jsonData=await response.json();
        setMovie(jsonData);
    }

    useEffect(()=>{
        getMovies();
    },[]);

    

    return(
        <main>
            <MovieList data={movies} />
        </main>
    )
}