import SectionHeading from '../../../components/SectionHeading/SectionHeading'
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';
const PopularMenu = () => {
  const [menu] = useMenu([]);
  const Popular = menu.filter(item=>item.category==='popular')
  
  return (
    <section className='max-w-screen-lg mx-auto'>
       <SectionHeading subHeading="Popular items" heading="from our menu"></SectionHeading>
       <div className='grid md:grid-cols-2 gap-6 my-8'>
        {
          Popular.map(item=><MenuItem
          key={item._id}
          item={item}
          />)
        }
       </div>
       <button className='btn btn-outline border-0 border-b-2 mt-3 mx-auto block'>View Full Menu</button>
    </section>
  )
}

export default PopularMenu