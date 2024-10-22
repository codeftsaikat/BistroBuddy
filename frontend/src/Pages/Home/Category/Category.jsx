import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
// import '../../../index.css'

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
const Category = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-16"
      >
        <SwiperSlide>
            <img src={slide1} alt="image not found" />
            <h3 className='text-4xl uppercase -mt-28 text-white'>salads</h3>
        </SwiperSlide>
        <SwiperSlide>
             <img src={slide2} alt="image not found" />
             <h3 className='text-4xl uppercase -mt-28 text-white'>pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
             <img src={slide3} alt="image not found" />
             <h3 className='text-4xl uppercase -mt-28 text-white'>soups</h3>
        </SwiperSlide>
        <SwiperSlide>
             <img src={slide4} alt="image not found" />
             <h3 className='text-4xl uppercase -mt-28 text-white'>deserts</h3>
        </SwiperSlide>
        <SwiperSlide>
             <img src={slide5} alt="image not found" />
             <h3 className='text-4xl uppercase -mt-28 text-white'>salads</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
