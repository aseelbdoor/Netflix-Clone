import './Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar(){
        return(
            <header>
                <nav>
                    <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='netflix' />
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">TV Shows</Link></li>
                        <li><Link to="/">Movies</Link></li>
                        <li><Link to="/">Recently Added</Link></li>
                        <li><Link to="/favList">My List</Link></li>
                    </ul>
                </nav>
                <div>
                    <ul>
                        <li><Link to="/"><i className="fa-solid fa-magnifying-glass"></i></Link></li>
                        <li><Link to="/">KIDS</Link></li>
                        <li><Link to="/">DVD</Link></li>
                        <li><Link to="/"><i className="fa-solid fa-shop"></i></Link></li>
                        <li><Link to="/"><i className="fa-solid fa-bell"></i></Link></li>
                        <li className='personalProfile'><Link to="/"><img src='https://ih0.redbubble.net/image.618379802.1473/flat,1000x1000,075,f.u2.jpg' alt='personalProfile'/><i className="fa-solid fa-angle-down"></i></Link></li>
                    </ul>
                </div>
            </header>
        );
}