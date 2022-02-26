import React from 'react'

export default function Sidebar() {
    return (
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <div className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </div>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0" />

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item active">
                    <div className="nav-link">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></div>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
                    Interface
                </div>

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                <li className="nav-item">
                    <div className="nav-link collapsed">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Components</span>
                    </div>
                    <div id="collapseTwo" className="collapse">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Components:</h6>
                        </div>
                    </div>
                </li>

                {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                <li className="nav-item">
                    <div className="nav-link collapsed">
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>Utilities</span>
                    </div>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
                    Addons
                </div>

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                <li className="nav-item">
                    <div className="nav-link collapsed">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                        </div>
                </li>

                {/* <!-- Nav Item - Charts --> */}
                <li className="nav-item">
                    <div className="nav-link">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></div>
                </li>

                {/* <!-- Nav Item - Tables --> */}
                <li className="nav-item">
                    <div className="nav-link">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></div>
                </li>

            </ul>
        </>
    )
}
