
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bottom-0 bg-[#f4f4f5] h-fit md:h-96 flex items-center text-[#27272a]">
        
   <div className="flex flex-col md:flex-row md:justify-start justify-start py-10 md:py-0 items-start w-[94vw] mx-auto cursor-pointer">



<div className="h-[252] w-[370] mr-auto space-y-2 md:space-y-4">
    <h2 className="text-black md:text-xl font-bold mt-5">Core Courses</h2>
    <p>Programming Fundamentals</p>
    <p>Web2 Using NextJS</p>
    <p>Earn as You Learn</p>
</div>


<div className="h-[252] w-[370] mr-auto space-y-2 md:space-y-4">
    <h2 className="text-black md:text-xl font-bold mt-5">Advanced Courses</h2>
    <p>Web 3 and Metaverse</p>
    <p>Cloud-Native Computing</p>
    <p>Artificial Intelligence (AI) and Deep Learning</p>
    <p>Ambient Computing and IoT</p>
    <p>Genomics and Bioinformatics</p>
    <p>Network Programmability and Automation</p>
</div>


<div className="h-[252] w-[370] mr-auto space-y-2 md:space-y-4">
    <h2 className="text-black md:text-xl font-bold mt-5 mb-4 md:mb-0">Social Links</h2>
    <ul className="flex text-[28px] md:text-[35px] space-x-3">
      <li className="bg-blue-white rounded-full text-blue-600"><FaFacebook/></li>
      <li className="bg-blue-white rounded-full text-red-600"><FaYoutube/></li>
      <li className="bg-blue-white rounded-full text-blue-600"><FaTwitter/></li>
      <li className="bg-blue-white rounded-full text-red-600"><FaInstagramSquare/></li>
      <li className="bg-blue-white rounded-full text-black"><AiFillTikTok/></li>
     
    </ul>

    <div><Link href="/" className="underline text-blue-700 text-md md:text-lg"><CiMail className="inline text-xl md:text-2xl mr-2 text-blue-900"/>education@governorsindh.com</Link></div>

</div>



</div>

     
        
        </footer>
  )
}

export default Footer