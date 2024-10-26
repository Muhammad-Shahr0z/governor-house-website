"use client"
import { IoMdMenu   } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image"
import Logo from "/public/logo.png"
import { useState } from "react";
import Navbar from "./Navbar";
import Link from "next/link";

const Header = () => {

  const [clickMenu, setClickMenu] = useState(true)
  const handleMenu = ()=>{
    setClickMenu(false)

  }
  const handleCancel = ()=>{
    setClickMenu(true)

  }

  return (

    <>
   
<header className='bg-[#054e83] sticky top-0 z-50'>
{/* Header Container */}
<div className="w-[97%] mx-auto  h-16  flex justify-between items-center md:h-20">   
{/* Div 01  Logo */}
<div>
<Link href="/"><Image src={Logo} width={70} height={70} alt="logo" className="mt-14 md:w-[90px] md:mt-20"/></Link>

</div>



<div>

        <h1 className="lg:hidden mr-6 text-[#b9d8f3] font-extrabold text-[1.125rem] roboto-regular text-shadow text-center">Tuition Free Program</h1>
   
        <h1 className="hidden lg:block mr-6 text-[#b9d8f3] font-extrabold  roboto-regular text-shadow text-center lg:text-[1.4rem] md:text-[1rem]">Tuition Free Education Program on Latest Technologies</h1>
    
</div>


<Navbar/>
{/* Div 03  Menu Icon */}
{clickMenu?(<IoMdMenu className="md:hidden text-4xl text-white" onClick={()=>handleMenu()}/>):(<nav className="h-screen w-[100vw] absolute top-0 right-0 bg-[#044e83] md:hidden overflow-hidden">
<RxCross2 className="text-3xl  text-white absolute right-4 top-4" onClick={()=>handleCancel()}/>
<ul className='flex flex-col text-[#ffffffd4] text-[17  px] font-semibold cursor-pointer px-6 pt-24' onClick={()=>handleCancel()}>

<li className="py-5 border-b-[1px]"><Link href="/" className="block w-full h-full">Home</Link></li>

<li className="py-5 border-b-[1px]"><Link href="/apply" className="block w-full h-full">Apply</Link></li>

<li className="py-5 border-b-[1px]"><Link href="/jobs" className="block w-full h-full">Jobs</Link></li>

<li className="py-5 border-b-[1px]"><Link href="https://result-giaic.vercel.app/" className="block w-full h-full">Result</Link></li>

<li className="py-5 border-b-[1px]"><Link href="https://www.governorsindh.com/tracks/wmd/4" className="block w-full h-full">Courses</Link></li>

          
        </ul>

</nav>
)}



</div>  



    </header>
    

    
    </>
  )
}

export default Header