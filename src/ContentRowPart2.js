import React from 'react'

export default function ContentRowPart2() {

    const revenueData = [
        {
            name: "Direct",
            class: "fas fa-circle text-primary"
        },
        {
            name: "Social",
            class: "fas fa-circle text-success"
        },
        {
            name: "Referral",
            class: "fas fa-circle text-info"
        },
    ]
    return (
        <>
            <div className="row">

                {/* <!-- Area Chart --> */}
                <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                        {/* <!-- Card Header - Dropdown --> */}
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                            <div className="dropdown no-arrow">
                            </div>
                        </div>
                        {/* <!-- Card Body --> */}
                        <div className="card-body">
                            <div className="chart-area">
                                <canvas id="myAreaChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Pie Chart --> */}
                <div className="col-xl-4 col-lg-5">
                    <div className="card shadow mb-4">
                        {/* <!-- Card Header - Dropdown --> */}
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                            <div className="dropdown no-arrow">

                            </div>
                        </div>
                        {/* <!-- Card Body --> */}
                        <div className="card-body">
                            <div className="chart-pie pt-4 pb-2">
                                <canvas id="myPieChart"></canvas>
                            </div>
                            <div className="mt-4 text-center small">
                                {
                                    revenueData.map((item, index) => {

                                        return <span key={index} className="mr-2">
                                            <i className={item.class}></i> {item.name}
                                        </span>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
