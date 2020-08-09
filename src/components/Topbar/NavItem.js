import React from 'react'
// import avatar from '../../assets/dummy-avatar.jpg'

const NavItem = (props) => {

    const {icon, id, content, isUser} = props;
    if(isUser) {
        return (
            <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="/" id={id}>
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">{content}</span>
                    {/* <img className="img-profile rounded-circle" src={avatar} width="60" /> */}
                </a>
            </li>
        );
    }

    return (
        <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="/" id={id}>
                <i className={`fas ${icon}`}></i>
                <span className="badge badge-danger badge-counter">{content}</span>
            </a>
        </li>
    )
}

export default NavItem;