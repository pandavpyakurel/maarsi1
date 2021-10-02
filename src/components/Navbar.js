import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row top-nav align-items-center">
                    <div className="col-md-3">
                        <Link className="navbar-brand text-white" to="/">YarsaGumba</Link>
                    </div>
                    <div className="col-md-6">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-warning" type="submit"><i className='bx bx-search-alt-2'></i></button>
                        </form>
                    </div>
                    <div className="col-md-3">
                        <ul className="d-flex justify-content-evenly align-items-center">
                            <li className="list-unstyled"><Link to="/signin" className="text-decoration-none text-white">Signin</Link></li>
                            <li className="list-unstyled"><Link to="/signup" className="text-decoration-none text-white">Signup</Link></li>
                            <li className="list-unstyled"><Link to="/cart" className="text-decoration-none text-white fs-2"> <i class='bx bxs-cart-add'></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light custom-nav">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/deals">Deals</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Customer Services</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                </ul>
                            </li>
                            
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
