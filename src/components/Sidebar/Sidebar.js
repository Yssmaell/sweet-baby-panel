import React from 'react'
import NavItem from './NavItem';
import logo from '../../assets/Logo SweetBaby2.png'

const Sidebar = () => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon">
                    <i className="fas fa-chart-line"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Admin</div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"/>

            <NavItem 
                icon="fa-tachometer-alt"
                title="Dashboard"
                active="active"
                toUrl=""
            />

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">Actions</div>

            <NavItem 
                icon="fa-folder"
                title="Products"
                toUrl="products"
            />
            <NavItem 
                icon="fa-chart-area"
                title="Users"
                toUrl="users"
            />

            <hr className="sidebar-divider d-none d-md-block"/>
        </ul>      
    );
}

export default Sidebar;