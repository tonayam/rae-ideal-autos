import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import hyundai from '../../assets/Hyundai.png';
import honda from '../../assets/Honda.png';
import toyota from '../../assets/Toyota.png';
import ford from '../../assets/Ford.png';
import lexus from '../../assets/Lexus.png';
import mercedesBenz from '../../assets/Mercedes Benz.png';
import nissan from '../../assets/Nissan.png';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { slides } from '../../data/data';
import Marquee from 'react-fast-marquee';

const Home = () => {
  return (
    <main className='home-page'>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        className='mySwiper'
      >
        {slides.map((slide, slideIndex) => {
          const { img, title, mobileImg } = slide;
          return (
            <SwiperSlide className='slide' key={slideIndex}>
              <img src={img} alt={title} className='desktop-img' />
              <img src={mobileImg} alt={title} className='mobile-img' />
              <div className='info'>
                <div className='logo'>
                  <div className='img'>logo here</div>
                </div>
                <div className='text-contact'>
                  <h1>{title}</h1>
                  <p>Contact Rotimi - 0703 911 5146 | Juwon 0908 666 6626</p>
                  <p>Email: info@haritosautos.com</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Marquee className='marquee' speed={30}>
        <div className='img'>
          <img src={hyundai} alt='hyundai' />
        </div>
        <div className='img'>
          <img src={toyota} alt='toyota' />
        </div>
        <div className='img'>
          <img src={mercedesBenz} alt='mercedes benz' />
        </div>
        <div className='img'>
          <img src={ford} alt='ford' />
        </div>
        <div className='img'>
          <img src={nissan} alt='nissan' />
        </div>
        <div className='img'>
          <img src={lexus} alt='lexus' />
        </div>
        <div className='img'>
          <img src={honda} alt='honda' />
        </div>
      </Marquee>

      <div className='brands'>
        <div className='img'>
          <img src={hyundai} alt='hyundai' />
        </div>
        <div className='img'>
          <img src={toyota} alt='toyota' />
        </div>
        <div className='img'>
          <img src={mercedesBenz} alt='mercedes benz' />
        </div>
        <div className='img'>
          <img src={ford} alt='ford' />
        </div>
        <div className='img'>
          <img src={nissan} alt='nissan' />
        </div>
        <div className='img'>
          <img src={lexus} alt='lexus' />
        </div>
        <div className='img'>
          <img src={honda} alt='honda' />
        </div>
      </div>
    </main>
  );
};

export default Home;
