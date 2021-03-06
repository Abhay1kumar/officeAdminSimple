import React from 'react'
import TopBarSearch from './TopBarSearch'


export default function Navbar() {
  return (
    <>
     <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
    <i className="fa fa-bars"></i>
</button>

<TopBarSearch />

<ul className="navbar-nav ml-auto">
    <li className="nav-item dropdown no-arrow d-sm-none">
        <div className="nav-link dropdown-toggle">
            <i className="fas fa-search fa-fw"></i>
        </div>
        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
            aria-labelledby="searchDropdown">
            <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small"
                        placeholder="Search for..." aria-label="Search"
                        aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </li>

    <li className="nav-item dropdown no-arrow mx-1">
        <div className="nav-link dropdown-toggle">
            <i className="fas fa-bell fa-fw"></i>
            <span className="badge badge-danger badge-counter">3+</span>
        </div>
        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="alertsDropdown">
            <div className="dropdown-item d-flex align-items-center">
                <div className="mr-3">
                    <div className="icon-circle bg-success">
                        <i className="fas fa-donate text-white"></i>
                    </div>
                </div>
            </div>
        </div>
    </li>
    <li className="nav-item dropdown no-arrow mx-1">
        <div className="nav-link dropdown-toggle">
            <i className="fas fa-envelope fa-fw"></i>
            <span className="badge badge-danger badge-counter">7</span>
        </div>
    </li>

    <div className="topbar-divider d-none d-sm-block"></div>
    <li className="nav-item dropdown no-arrow">
        <div className="nav-link dropdown-toggle">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Abhay Kumar</span>
            
        </div>
    
    </li>

</ul>

</nav>
    </>
  )
}
