import { Parallax } from "react-parallax";
const Cover = ({ img, title, description, hVal }) => {
  return (
    <Parallax
      blur={{ min: -20, max: 22 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div>
        <div
          className="hero"
          style={{
            height: `${hVal}px`,
          }}
        >
          <div className="hero-content text-neutral-content text-center bg-black bg-opacity-50 w-4/6 py-10">
            <div className="max-w-md text-white">
              <h1 className="mb-5 text-4xl font-bold uppercase font-serif">{title}</h1>
              <p className="mb-5">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
