// @ts-nocheck
import './ModelMovie.css';
import Modal from 'react-bootstrap/Modal';
import img2 from '../imges/logo.png';

export default function ModelMovie(props) {
    let url=process.env.REACT_APP_SERVER_URL;
    return (
        <Modal className="pop" show={props.show} onHide={props.handleClose}>
            <div className='space'>
                <figure>
                    <img src={img2} alt='logo' className='logo' />
                    <img src={props.image} alt='poster' className='poster' />
                </figure>
                <div className='info'>
                    <h1>{props.title}</h1>
                    <p>{props.overview.substring(0, 250)}</p>
                    <form action={`${url}/addMovie`} method='post'>
                        <textarea name='myComment' id='comment' placeholder='Comment' required></textarea>
                        <input type='hidden' name='name' value={props.title} />
                    </form>
                    <div className='buttons'>
                        <button type='submit' className='add' onClick={props.handleClose}>Add to myList</button>
                        <button className='close' onClick={props.handleClose} >Close</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}