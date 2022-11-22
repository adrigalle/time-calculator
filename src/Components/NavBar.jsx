import React from 'react';
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav className='navbar'>
                <ul className='nav'>
                    <li className="nav-item btn"><Link className="nav-link" to="/" title="">To/From Time</Link></li>
                    <li className="nav-item btn"><Link className="nav-link" to="/hours" title="">Hours</Link></li>
                    <li className="nav-item btn"><Link className="nav-link" to="/minutes" title="">Minutes</Link></li>
                    <li className="nav-item btn"><Link className="nav-link" to="/between" title="">Between Times</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;