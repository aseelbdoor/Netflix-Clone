// @ts-nocheck
import './ModelMovie.css';
import Modal from 'react-bootstrap/Modal';
import img2 from '../imges/logo.png';
import { useRef } from 'react';
import { useState } from 'react';

export default function ModelMovie(props) {
    let url=process.env.REACT_APP_SERVER_URL;
    const comment=useRef();
    const [comment2,setComment]=useState("You don't added comment yet!");
    function submitHandler(e){
        let myComment=comment.current.value;
        setComment(myComment)
        addToMyList();
    }

    async function addToMyList(){
        if(comment2!=="You don't added comment yet!"){
            let url=`${process.env.REACT_APP_SERVER_URL}/addMovie`;
            let data ={
                name:props.data.title,
                myComment:comment2
            };
            const response= await fetch(url,{
                method:'POST',
                headers:{
                    "content-type":"application/json",
                },
                body:JSON.stringify(data),
            });
            const receveData= await response.json();
            if(response.status===201){
                alert(receveData);
            }
        }
    }
    return (
        <Modal className="pop" show={props.show} onHide={props.handleClose}>
            <div className='space'>
                <figure>
                    <img src={img2} alt='logo' className='logo' />
                    <img src={props.image} alt='poster' className='poster' />
                </figure>
                <div className='info'>
                    <h1>{props.data.title}</h1>
                    <p>{props.data.overview}</p>
                    <fieldset>
                        <legend>My Comment</legend>
                        <p>{comment2}</p>
                    </fieldset>
                    <form action={`${url}/addMovie`} method='post'>
                        <textarea ref={comment} name='myComment' id='comment' placeholder='Comment' required></textarea>
                        <input type='hidden' name='name' value={props.data.title} />
                    </form>
                    <div className='buttons'>
                        <button type='submit' className='add' onClick={(e)=>submitHandler(e)} >Add to myList</button>
                        <button className='close' onClick={props.handleClose} >Close</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}