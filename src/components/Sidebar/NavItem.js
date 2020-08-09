import React from 'react'
import {Link} from 'react-router-dom'

const NavItem = (props) => {

    const {title, icon, active, toUrl} = props;

    return (
        <li className={`nav-item ${active}`}>
            <Link className="nav-link" to={`/${toUrl}`}>
                <i className={`fas fa-fw ${icon}`}></i>
                <span>{title}</span>
            </Link>
            {/* <a  href="/">   
                
            </a> */}
        </li>
    )
}

export default NavItem;