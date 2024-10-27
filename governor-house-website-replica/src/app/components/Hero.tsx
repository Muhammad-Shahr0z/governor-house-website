'use client'
import Image from "next/image"
import KamranSir from "/public/images/kamransir.png"
import { useState } from "react"


const Hero = () => {
  const [count, setCount] = useState(562143)

  const CountFucntion=()=>{
    setCount(count+1)
  }


  return (
    <>
<main className='w-full md:pt-2 bg-zinc-100 md:flex md:justify-between md:items-center background-house md:bg-transparent'>

{/*Div 01 Text Heading And Button*/}
<div className="text-center md:w-1/2 lg:pl-10 md:pl-8 self-start pt-8 lg:mt-16 md:mt-10">
<div>


    <h1 className='whitespace-nowrap text-[2.2rem] md:text-[2.5rem] tracking-wider text-[#054e83] font-extrabold leading-10 lg:text-[65px] md:text-start lg:mb-8 md:mb-2 '>Governor Sindh</h1>
    <h3 className="text-[1.7rem] md:text-[1.8rem] leading-8 tracking-wider text-[#054f83e8] whitespace-nowrap font-[500] lg:text-[45px] md:text-start md:font-semibold">Kamran Khan Tessori</h3>
    <h1 className="mt-5 whitespace-nowrap text-[1.7rem] md:text-[2rem] font-extrabold leading-8 md:leading-[1.2] text-[#2eb6e8] tracking-wide font-poppins lg:text-[2.5rem] md:text-start md:my-7">Certified Cloud <br /> Applied Generative AI <br /> Engineer (GenEng)</h1>
    <h2 className="my-5 whitespace-nowrap font-extrabold text-[1.25rem] font-poppins text-[#044e83]  md:text-start md:text-[30px]">Earn up to $5,000 / month</h2>
    <h2  className="my-5 whitespace-nowrap font-extrabold text-[1.25rem] font-poppins text-[#044e83] md:text-[24px] md:text-start md:mt-4 md:mb-12 lg:mb-0">Now admissions are open in <br /> Hyderabad</h2>

    </div>

{/* BUTTON DIV`` */}

    <div className="mt-5 mb-7 px-3 flex flex-col gap-4 md:flex-row md:px-0"> 
    <div>
        <button className="w-[100%] md:w-[9rem] lg:w-[13rem] rounded-md bg-[#044e83] py-3 md:py-4 text-white font-semibold md:font-extrabold font-poppins tracking-widest text-sm text-shadow-white-blur hover:animate-pulse " onClick={()=>CountFucntion()}>APPLY NOW</button>
    </div>
     <div className='flex flex-col'>
        <h4 className="w-40 mx-auto font-extrabold font-poppins text-xl tracking-wider text-[#054f83e8] text-shadow-white-blur">{count.toLocaleString()}</h4>
        <h4 className="tracking-wider text-sm text-[#044e83c1] font-poppins">Accepted Applications</h4>
    </div>


    </div>
</div>



{/* Div 02 Image For Mobile Devices Only */}
<div className="hidden bg-house">
<div>
    <Image
      src={KamranSir}
      alt="KamranSir"
     className="kamran-image lg:w-[800px] md:relative"
  />
  </div>
</div> 

<div className="hidden md:block relative h-full w-full overflow-hidden">
  <img src="/images/kamransir.png" alt="Image" className="absolute right-[-250px] min-w-[900px] lg:min-h-[660px] md:min-w-[800px] md:bottom-0 lg:bottom-[unset]"/>
</div>


</main>




    </>
  )
}

export default Hero