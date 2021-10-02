import React from 'react'
import Slider from "react-slick";
import './trending.css'

const Trending = () => {
    const settings = {
        dots: false,
        autoplay:true,
        infinite: true,
        speed: 500,
        autoplayspeed:4000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    return (
        <>
           <div className="container-fluid shadow-lg mt-4 mb-3 py-5">
           <Slider {...settings}>
          <div>
            <img src="/images/i.jpg" className="img-fluid custom-slide" alt=""/>
          </div>
          <div>
          <img src="/images/j.jpg" className="img-fluid custom-slide" alt=""/>
          </div>
          <div>
          <img src="/images/k.jpg" className="img-fluid custom-slide" alt=""/>
          </div>
          <div>
          <img src="/images/l.jpg" className="img-fluid custom-slide" alt=""/>
          </div>
          <div>
          <img src="/images/m.jpg" className="img-fluid custom-slide" alt=""/>
          </div>
          <div>
          <img src="/images/n.jpg" className="img-fluid custom-slide" alt=""/>
          </div>
          <div>
          <img src="/images/o.jpg" className="img-fluid custom-slide" alt=""/>
          </div>
          <div>
          <img src="/images/p.jpg" className="img-fluid custom-slide" alt=""/>
          </div>
        </Slider> 
           </div>
        </>
    )
}

export default Trending
