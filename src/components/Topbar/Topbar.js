import React from 'react'
import NavItem from './NavItem';

const Topbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            {/* <!-- Sidebar Toggle (Topbar) --> */}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            {/* <!-- Topbar Navbar --> */}
            <ul className="navbar-nav ml-auto">

                {/* <!-- Nav Item - Alerts --> */}
                {/* <NavItem 
                    icon="fa-bell fa-fw"
                    id="alertsDropdown"
                    content="3+"
                />         */}

                {/* <!-- Nav Item - Messages --> */}
                {/* <NavItem 
                    icon="fa-envelope fa-fw"
                    id="messagesDropdown"
                    content="7"
                />  */}

                <div className="topbar-divider d-none d-sm-block"></div>
            </ul>
        </nav>
    )
}

export default Topbar;