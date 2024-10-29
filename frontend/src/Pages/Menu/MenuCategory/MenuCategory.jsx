import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

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
      <div className="grid md:grid-cols-2 gap-6 my-16 max-w-screen-lg mx-auto">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
