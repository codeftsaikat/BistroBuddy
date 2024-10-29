
const SectionHeading = ({heading,subHeading}) => {
  return (
    <div className="w-4/12 text-center my-8 max-w-screen-lg mx-auto">
        <h3 className="text-yellow-500 mb-2">---{subHeading}---</h3>
        <p className="text-4xl uppercase border-y-2 py-4 mb-6">{heading}</p>
    </div>
  )
}

export default SectionHeading