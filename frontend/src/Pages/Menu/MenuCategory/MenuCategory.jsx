import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, description, coverImg }) => {
  return (
    <div>
      {title && (
        <Cover
          hVal={500}
          img={coverImg}
          title={title}
          description={description}
        />
      )}
      <div className="grid md:grid-cols-2 gap-6 mt-4 mb-5 max-w-screen-lg mx-auto">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-2 mt-3 mb-8 mx-auto block">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
