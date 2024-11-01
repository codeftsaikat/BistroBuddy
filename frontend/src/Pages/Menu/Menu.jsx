import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import MenuImg from "../../assets/menu/banner3.jpg";
import DessertImg from "../../assets/menu/dessert-bg.jpeg";
import PizzaImg from "../../assets/menu/pizza-bg.jpg";
import SaladImg from "../../assets/menu/salad-bg.jpg";
import SoupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import MenuCategory from "./MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu([]);
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>BistroBuddy | Menu</title>
      </Helmet>
      <Cover
        hVal={600}
        img={MenuImg}
        title={"Our Menu"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s."
        }
      />

      <SectionHeading subHeading={"Don't miss"} heading={"TODAY'S OFFER"} />
      {/* offered */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert */}
      <MenuCategory 
      items={dessert}
      title={"dessert"}
      description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s."}
      coverImg={DessertImg}
      ></MenuCategory>
      {/* pizza */}
      <MenuCategory 
      items={pizza}
      title={"pizza"}
      description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s."}
      coverImg={PizzaImg}
      ></MenuCategory>
      {/* salad */}
      <MenuCategory 
      items={salad}
      title={"salad"}
      description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s."}
      coverImg={SaladImg}
      ></MenuCategory>
      {/* soup */}
      <MenuCategory 
      items={soup}
      title={"soup"}
      description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s."}
      coverImg={SoupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
