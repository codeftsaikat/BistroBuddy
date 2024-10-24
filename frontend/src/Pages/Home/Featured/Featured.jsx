import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'
const Featured = () => {
  return (
    <div className="featured-item text-white">
      <SectionHeading subHeading="Check it out" heading="Featured item" />

      <div className="md:flex items-center px-8 py-16 gap-6">
        <div>
          <img src={featuredImg} alt="image not found" />
        </div>
        <div>
          <p>march 20, 2023</p>
          <p className="uppercase">where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
            praesentium ipsa suscipit ipsum minus cum.
          </p>
          <p className="uppercase btn btn-outline">read more</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
