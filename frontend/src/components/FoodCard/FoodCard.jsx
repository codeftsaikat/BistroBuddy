import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const axiosSecure = useAxios();
  const { user } = useAuth();
  const handleCard = (food) => {
    console.log(food);
    console.log(user.email);
    if (user && user.email) {
      // send cart items to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} has been added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 w-96 shadow-xl mt-10 h-[500px] mb-4">
      <figure className="relative">
        <img src={image} alt="not found" />
      </figure>
      <p className="absolute top-5 right-8 bg-black text-white text-xl font-medium py-1.5 px-4">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title self-center">{name}</h2>
        <p className="text-base">{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleCard(item)}
            className="btn btn-outline border-0 border-b-4 mx-auto block text-yellow-400"
          >
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
