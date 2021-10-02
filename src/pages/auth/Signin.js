import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const Signin = () => {
    return (
        <>
        <Navbar/>
        <div className="container mt-4 mb-3">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 shadow-lg p-3">
                    <form>
                       
                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" id="email"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="text" className="form-control" id="password"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <input type="text" className="form-control" id="cpassword"/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <button className="btn btn-primary form-control">Signin</button>
                        </div>

                        <div className="mb-3">
                           Not Registered yet ? &nbsp; <b><Link to="/signup" className="text-decoration-none">signup</Link></b>
                        </div>

                        


                    </form>
                </div>
            </div>
        </div>


        <Footer/>
            
        </>
    )
}

export default Signin

