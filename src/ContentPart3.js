import React from 'react'
import './ContentPart3.css'

export default function ContentPart3() {

    const buttons = [
        {
            style: 'card bg-primary text-white shadow',
            name: 'Primary',
            code: '#4e73df'
        },
        {
            style: 'card bg-success text-white shadow',
            name: 'Success',
            code: '#1cc88a'
        },
        {
            style: 'card bg-info text-white shadow',
            name: 'Info',
            code: '#36b9cc'
        },
        {
            style: 'card bg-warning text-white shadow',
            name: 'Warning',
            code: 'f6c23e'
        },
        {
            style: 'card bg-danger text-white shadow',
            name: 'Danger',
            code: 'e74a3b'
        },
        {
            style: 'card bg-secondary text-white shadow',
            name: 'Secondary',
            code: '858796'
        },
        {
            style: 'card bg-light text-black shadow',
            name: 'Light',
            code: 'f8f9fc'
        },
        {
            style: 'card bg-dark text-white shadow',
            name: 'Dark',
            code: '5a5c69'
        },
    ]

    const projectData = [
        {
            name: 'Server Migration',
            class1: 'progress-bar bg-danger',
            id: 'profressBar20',
            value: '20',
            parsint: '20%',
        },
        {
            name: 'Sales Tracking',
            class1: 'progress-bar bg-warning',
            id: 'profressBar40',
            value: '40',
            parsint: '40%',
        },
        {
            name: 'Customer Database',
            class1: 'progress-bar',
            id: 'profressBar60',
            value: '60',
            parsint: '60%',
        },
        {
            name: 'Payout Details',
            class1: 'progress-bar bg-info',
            id: 'profressBar80',
            value: '80',
            parsint: '80%',
        },
        {
            name: 'Account Setup',
            class1: 'progress-bar bg-success',
            id: 'profressBar100',
            value: '100',
            parsint: '100%',
        },
    ]
    return (
    <div className="row">

                {/* <!-- Content Column --> */}
                <div className="col-lg-6 mb-4">

                    {/* <!-- Project Card Example --> */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                        </div>
                        <div className="card-body">
                            {
                                projectData.map((item, index) => {
                                    return <div key={index}> 
                                        <h4 className="small font-weight-bold">{item.name} <span
                                            className="float-right">{item.parsint}</span></h4>
                                        <div className="progress mb-4">
                                            <div className={item.class1} role="progressbar" id={item.id}
                                                aria-valuenow={item.value} aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    {/* <!-- Color System --> */}
                    <div className="row">
                        {
                            buttons.map((item, index) => {
                                return <div key={index} className="col-lg-6 mb-4">
                                    <div className={item.style}>
                                        <div className="card-body">
                                            {item.name}
                                            <div className="text-white-50 small">{item.code}</div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>

                </div>

                <div className="col-lg-6 mb-4">

                    {/* <!-- Illustrations --> */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }}
                                    src="img/undraw_posting_photo.svg" alt="..." />
                            </div>
                            <p>Add some quality, svg illustrations to your project courtesy of
                            
                                , a
                                constantly updated collection of beautiful svg images that you can use
                                completely free and without attribution!</p>
                        </div>
                    </div>

                    {/* <!-- Approach --> */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
                        </div>
                        <div className="card-body">
                            <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees in order to reduce
                                CSS bloat and poor page performance. Custom CSS classNamees are used to create
                                custom components and custom utility classNamees.</p>
                            <p className="mb-0">Before working with this theme, you should become familiar with the
                                Bootstrap framework, especially the utility classNamees.</p>
                        </div>
                    </div>

                </div>
            </div>   
    )
}
