import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'
const Featured = () => {
  return (
    <div className="featured-item text-white pt-10 mt-20 bg-fixed brightness-90">
      <SectionHeading subHeading="Check it out" heading="Featured item" />

      <div className="md:flex items-center justify-center py-16 gap-10 bg-white bg-opacity-20">
        <div>
          <img className="w-[400px] mx-auto" src={featuredImg} alt="image not found" />
        </div>
        <div>
          <p>March 20, 2023</p>
          <p className="uppercase">where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Iste,
            praesentium ipsa suscipit ipsum minus cum.
          </p>
          <p className="uppercase btn btn-outline border-0 border-b-4 text-white">read more</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
