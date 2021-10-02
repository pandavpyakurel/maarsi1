import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Cart = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <h2 className="text-center mt-4 mb-3">Your Cart Items</h2>
                    <div className="col-md-8">

                        <div className="shadow p-2 d-flex align-items-center">
                            <div className="col-3">
                                <img src="/images/f.jpg" alt=".." width="70" />
                            </div>
                            <div className="col-2">
                                <b><span>Dell</span></b>
                            </div>
                            <div className="col-2">
                                <span className="text-warning">Rs.72500</span>
                            </div>
                            <div className="col-3">
                                <div className="d-flex justify-content-evenly">
                                    <button className="btn btn-danger">-</button>&nbsp;
                                    <input type="number" value="1" readOnly className="form-control border-0"/>&nbsp;
                                    <button className="btn btn-primary">+</button>&nbsp;&nbsp;

                                </div>
                            </div>
                            <div className="col-1">
                                <button className="btn btn-danger"><i className='bx bxs-trash'></i></button>
                            </div>
                            </div>


                        </div>
                        <div className="col-md-3">
                            <div className="shadow p-2">
                                <h5>Cart Summary</h5>
                                <hr />
                                <span><b>Units:</b> 1(Units)</span> <br />
                                <span><b>Total:</b> Rs.72500</span>
                                <hr />
                                <button className="btn btn-warning">Check out</button>
                            </div>
                        </div>
                    </div>
                </div>




                <Footer />

            </>
            )
}

            export default Cart
