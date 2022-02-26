import React from 'react'
import PageHeading from './PageHeading'

import ContentRow from './ContentRow'
import ContentRowPart2 from './ContentRowPart2'
import ContentPart3 from './ContentPart3'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Main() {
    return (
        <>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Navbar />
                        <div className="container-fluid">
                            <PageHeading />
                            <ContentRow />
                            <ContentRowPart2 />
                            <ContentPart3 />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>

    )
}
