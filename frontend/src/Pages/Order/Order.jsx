import { useState } from "react";
import OrderImg from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard/FoodCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {

  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category)
  const [index, setIndex] = useState(initialIndex);
  const [menu] = useMenu([]);

  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>BistroBuddy | Order Food</title>
      </Helmet>
      <Cover
        title={"our food"}
        description={"WOULD YOU LIKE TO TRY A DISH?"}
        hVal={500}
        img={OrderImg}
      />
      <Tabs defaultIndex={index} onSelect={(index) => setIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <div className="grid md:grid-cols-3 place-items-center">
            {salad.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 place-items-center">
            {pizza.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 place-items-center">
            {soup.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 place-items-center">
            {dessert.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 place-items-center">
            {drinks.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
