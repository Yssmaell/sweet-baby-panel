import React from 'react'
import Topbar from './Topbar/Topbar'
import '../App.css'
import PageContent from './PageContent'

const Main = () => {
    return (
        <div id="content">
            <Topbar />
            <PageContent />
        </div>
    )
}

export default Main;