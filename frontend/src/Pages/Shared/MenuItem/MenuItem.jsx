
const MenuItem = ({item}) => {
    const {name,image,recipe,price} = item;
  return (
    <div className="flex space-x-4">
        <img
        style={{borderRadius:"0 200px 200px 200px"}} 
        className="w-24"
        src={image}
         alt="image" />
        <div>
            <h3 className="text-2xl text-slate-500 uppercase">{name}-----------</h3>
            <p>{recipe}</p>
        </div>
        <p className="text-orange-500">${price}</p>
    </div>
  )
}

export default MenuItem