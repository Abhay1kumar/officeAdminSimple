import React from 'react'

export default function ContentRow() {

    const data = [
        {
            title: "Earnings (Monthly)",
            data: "$40,000",
            icon: "fas fa-calendar fa-2x text-gray-300",
            style1: 'card border-left-primary shadow h-100 py-2',
            style2: 'text-xs font-weight-bold text-primary text-uppercase mb-1',
        },
        {
            title: "Earnings (Annual)",
            data: "$215,000",
            icon: "fas fa-dollar-sign fa-2x text-gray-300",
            style1: 'card border-left-success shadow h-100 py-2',
            style2: 'text-xs font-weight-bold text-success text-uppercase mb-1',
        },
        {
            title: "Tasks",
            data: "50%",
            icon: "fas fa-clipboard-list fa-2x text-gray-300",
            style1: 'card border-left-info shadow h-100 py-2',
            style2: 'text-xs font-weight-bold text-info text-uppercase mb-1',
        },
        {
            title: "Pending Requests",
            data: "18",
            icon: "fas fa-comments fa-2x text-gray-300",
            style1: 'card border-left-warning shadow h-100 py-2',
            style2: 'text-xs font-weight-bold text-warning text-uppercase mb-1',
        },]

    return (
        <>
            <div className="row">
                {
                    data.map((item, index) => {
                        return <div  key={index} className="col-xl-3 col-md-6 mb-4">
                            <div className={item.style1}>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className={item.style2}>
                                                {item.title}</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{item.data}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className={item.icon}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
        </>
    )
}
