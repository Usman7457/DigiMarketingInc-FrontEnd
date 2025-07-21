import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    fetchTestimonial();
  }, []);

  const fetchTestimonial = async () => {
    try {
      const { data } = await axios.get(
        "https://digi-marketing-inc-back-end.vercel.app/api/testimonial/fetch-testimonial"
      );
      setTestimonial(data);
    } catch (error) {
      console.error("Error fetching Testimonial:", error);
    }
  };
  return (
    <>
      <div id="testimonials" className="testimonials">
        <div className="container position-relative">
          <div
            className="testimonials-slider swiper swiper-initialized swiper-horizontal swiper-backface-hidden aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="swiper-wrapper">
              <Carousel showThumbs={false}>
                {testimonial.map((item, index) => (
                  <div
                    className="swiper-slide"
                    role="group"
                    style={{ marginBottom: "50px" }}
                    key={index}
                  >
                    <div className="testimonial-item">
                      <img
                        src={`/assets/img/testimonials/${item.imageUrl}.jpg`}
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>{item.name}</h3>
                      <h4>{item.country}</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        {item.message}
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
