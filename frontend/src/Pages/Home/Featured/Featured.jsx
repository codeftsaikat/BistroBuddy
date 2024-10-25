import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'
const Featured = () => {
  return (
    <div className="featured-item text-white pt-10 my-20 bg-fixed">
      <SectionHeading subHeading="Check it out" heading="Featured item" />

      <div className="md:flex items-center px-24 py-16 gap-6 bg-slate-500 bg-opacity-45">
        <div>
          <img className="w-[548px] mx-auto" src={featuredImg} alt="image not found" />
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
