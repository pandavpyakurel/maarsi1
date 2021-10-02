import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Deals = () => {
    return (
        <>
           <Navbar/>
           <div className="container-fluid mt-5 mb-4">
               <h2>Today's Deals and Others...</h2>
               <p>Shop Today's Deals with Limited discounts..</p>
               <div className="row d-flex justify-content-evenly">
                <div className="col-md-2">1</div>
                <div className="col-md-9">2</div>
               </div>
           </div>


           <Footer/> 
        </>
    )
}

export default Deals
