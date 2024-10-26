import Card from "./card"



const Section4 = () => {
 const cardDetails = [

{imageSrc:"/card4.jpg",heading:"Artificial Intelligence"},
{imageSrc:"/card5.jpg",heading:" Web 3 and Metaverse"},
{imageSrc:"/card6.jpg",heading:"Cloud-Native Computing"},
{imageSrc:"/card7.jpg",heading:"Ambient Computing and IoT"},
{imageSrc:"/card8.jpg",heading:"Genomics and Bioinformatics"},
{imageSrc:"/card9.jpg",heading:"Network Programmability and Automation"},




]
  return (
    <section className="w-[95%] mx-auto mb-20">
<h3 className="font-bold my-10 text-center md:text-start text-[#044e83] text-2xl md:text-4xl md:ml-3">Advanced Courses</h3>

<div className="flex flex-col items-center md:flex-row md:justify-start justify-center md:flex-wrap ">
  {
cardDetails.map((card,index)=> <Card key={index} props={card}/>)
  }
</div>

    </section>
  )
}

export default Section4