import Card from "./card"




const Section3 = () => {
 const cardDetails = [

{imageSrc:"/card1.jpg",heading:"Programming Fundamentals"},
{imageSrc:"/card2.jpg",heading:"Web2 Using NextJS"},
{imageSrc:"/card3.jpg",heading:"Earn as You Learn"},



]
  return (
    <section className="w-[95%] mx-auto">
<h3 className="font-bold my-4 text-center md:text-start text-[#044e83] text-2xl md:text-4xl md:ml-3">Core Courses Sequence</h3>

<div className="flex flex-col items-center lg:flex-row lg:justify-start justify-center md:w-full ">
  {
cardDetails.map((card,index)=> <Card key={index} props={card}/>)
  }
</div>

    </section>
  )
}

export default Section3