import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);

  return (
    <div className="my-20 bg-white py-10">
      <SectionHeading  subHeading="What our client say" heading="Testimonials" />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="px-40 text-black items-center flex flex-col">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
                className="mb-2"
              />
              <p className="mb-2">{review.details}</p>
              <p className="text-2xl font-semibold">{review.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
