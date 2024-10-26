import Link from 'next/link'
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <>
    <nav className='hidden md:block'>
        <ul className='flex space-x-8 pr-6 text-white text-[1.03rem] font-semibold cursor-pointer'>
        <li><Link href="/">Home</Link></li>
            <li><Link href="/apply">Apply</Link></li>
            <li><Link href="/jobs">Jobs</Link></li>
            <li><Link href="https://result-giaic.vercel.app/">Result</Link></li>
            <li><Link href="/courses">Courses<IoIosArrowDown   className='inline ml-4 text-xl'/></Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar