
const SectionHeading = ({heading,subHeading}) => {
  return (
    <div className="w-4/12 mx-auto text-center">
        <h3 className="text-yellow-500 mb-2">---{subHeading}---</h3>
        <p className="text-4xl uppercase border-y-2 py-4 mb-6">{heading}</p>
    </div>
  )
}

export default SectionHeading