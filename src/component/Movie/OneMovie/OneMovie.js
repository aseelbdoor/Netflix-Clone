// @ts-nocheck
import './OneMovie.css';
import ModelMovie from '../../ModalMovie/ModelMovie';
import { useState } from "react";
import logo from '../../imges/logo1.png';

export default function OneMovie(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let url=`https://image.tmdb.org/t/p/w300${props.image}`;
    return (
        <>
            <div onClick={handleShow} style={{ backgroundImage: `url(${url})` }}>
                <img src={logo} alt="logo" />
            </div>
            <ModelMovie show={show} handleClose={handleClose} image={url} title={props.title} overview={props.overview} />
        </>
    )

}