import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const Deals = () => {
    return (
        <>
           <Navbar/>
           <div className="container-fluid mt-5 mb-4">
               <h2>Deals and Promotions</h2>
               <p>Shop Today's Deals with Limited discounts..</p>
               <div className="row d-flex justify-content-evenly">
                <div className="col-md-2">
                <h4>Categories</h4>
                        <form>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""/>
                                <label className="form-check-label">
                                    Mobile
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""/>
                                <label className="form-check-label">
                                    Laptop
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""/>
                                <label className="form-check-label">
                                    Fashion
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""/>
                                <label className="form-check-label">
                                    Beauty
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""/>
                                <label className="form-check-label">
                                    TV
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""/>
                                <label className="form-check-label">
                                    Baby
                                </label>
                            </div>
                        </form>
                        <h5>Deal Types</h5>
                        <Link to="/" className="text-decoration-none">Lightining Deals</Link><br/>
                        <Link to="/" className="text-decoration-none">Deals of the Day</Link><br/>
                        <Link to="/" className="text-decoration-none">Saving and Sales</Link><br/>
                        <Link to="/" className="text-decoration-none">Prime Early Access Deals</Link><br/>

                        <h5 className="mt-2">Availability</h5>

                        <form>
                        <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""/>
                                <label className="form-check-label">
                                    Active
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""/>
                                <label className="form-check-label">
                                    Upcomming
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""/>
                                <label className="form-check-label">
                                    Missed
                                </label>
                            </div> 
                        </form>
                        
                        <h5>Ratings</h5>
                </div>
                <div className="col-md-9">
                    <Card/>
                </div>
               </div>
           </div>


           <Footer/> 
        </>
    )
}

export default Deals
