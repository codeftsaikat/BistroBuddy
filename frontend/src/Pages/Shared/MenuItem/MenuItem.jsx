
const MenuItem = ({item}) => {
    const {name,image,recipe,price} = item;
  return (
    <div className="flex space-x-4 max-w-screen-lg mx-auto">
        <img
        style={{borderRadius:"0 100px 100px 100px"}} 
        className="w-24 h-24 object-cover"
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