 
const Card = ({ props }:any) => {
  return (
    <div className="h-fit mt-6 lg:mx-3 transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer">

<div className='h-[266px] lg:w-[295px] w-[93vw] rounded-lg bg-white shadow-md border-none  shadow-gray-200 overflow-hidden flex flex-col'>
<div className="h-[75%]">
    <img src={props.imageSrc} alt="image" className="object-cover h-full w-full"/>
</div>
    <div className="h-[25%] my-auto flex justify-center items-center">
    <h5 className="text-center text-lg font-bold text-gray-500">{props.heading}</h5>
    </div>
</div>

    </div>
  )
}

export default Card