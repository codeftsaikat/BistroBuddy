import { FaTrashAlt } from "react-icons/fa";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import useCarts from "../../../hooks/useCarts";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";

const Cart = () => {
  const [cart,refetch] = useCarts();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxios();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yeah",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <SectionHeading subHeading={"My Cart"} heading={"Wanna add more?"} />
      <div className="bg-white w-5/6 mx-auto p-3 mb-2 rounded-sm">
        <div className="text-black font-serif font-medium text-2xl flex justify-between">
          <p>Total Orders:{cart.length}</p>
          <p>Total Price:{totalPrice}$</p>
          <button className="btn bg-yellow-600 text-white border-none">
            PAY
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table text-black">
            <thead className="text-black">
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-16 w-16 rounded-full border-4 border-rounded-full border-blue-500">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="text-base font-serif font-semibold">{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost text-orange-500"
                    >
                      <FaTrashAlt size={20} />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
