import "./Movie.css";

export default function Movie(props){
    return (
        <div>
            <img src={props.image} alt="poster"/>
        </div>
    )
}