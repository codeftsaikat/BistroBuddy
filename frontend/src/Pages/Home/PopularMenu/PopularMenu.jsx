import { useEffect, useState } from 'react'
import SectionHeading from '../../../components/SectionHeading/SectionHeading'
import MenuItem from '../../Shared/MenuItem/MenuItem';
const PopularMenu = () => {
  const [menu,setMenu] = useState([]);
  useEffect(()=>{
    fetch('menu.json')
    .then(res=>res.json())
    .then(data=>{
      const PopularItems = data.filter(item=>item.category==='popular');
      setMenu(PopularItems)
    })
  },[]);
  console.log(menu);
  
  return (
    <section>
       <SectionHeading subHeading="Popular items" heading="from our menu"></SectionHeading>
       <div className='grid md:grid-cols-2 gap-6 my-8'>
        {
          menu.map(item=><MenuItem
          key={item._id}
          item={item}
          />)
        }
       </div>
    </section>
  )
}

export default PopularMenu