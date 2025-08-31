import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const MarqueeSlider = () => {
  const items = [
    "© Fast, free delivery & assembly",
    "© Convenient rent or buy options",
    "© Low upfront costs for all rentals",
    "© Flexibility to buy out rental items later"
  ];

  return (
    <div style={{
      width: '100%',
      height: '74px',
      overflow: 'hidden',
      backgroundColor: '#ECF4E9',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={93}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
          delay: 0, // tiny delay to keep it moving
          disableOnInteraction: false,
        }}
        speed={3000} // 3 seconds for full transition
        allowTouchMove={false}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              padding: '0 20px',
            }}
          >
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MarqueeSlider;
