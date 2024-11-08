const FoodCard = ({item}) => {
    const {name,image,recipe,price} = item;

  return (
    <div className="card bg-base-100 w-96 shadow-xl mt-10 h-[500px] mb-4">
      <figure className="relative">
        <img
          src={image}
          alt="not found"
        />
      </figure>
      <p className="absolute top-5 right-8 bg-black text-white text-xl font-medium py-1.5 px-4">${price}</p>
      <div className="card-body">
        <h2 className="card-title self-center">{name}</h2>
        <p className="text-base">{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-b-4 mx-auto block text-yellow-400">Add to card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
