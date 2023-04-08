// @ts-nocheck
import "./Home.css";
import MovieList from "../MovieList/MovieList";
let data =require('../../data/db.json')
// this jast for test to I dont lose my API requsest

export default function Home(){
    return(
        <main>
            <MovieList data={data} />
        </main>
    )
}