import Image from 'next/image'
import client from './lib/contntfulClient'
const fetchServices = async()=>{
  let response = await client.getEntries({content_type:"services"})
  console.log(response.items);
  const services = response.items.map((item)=>{
return {
  title: item.fields.title,
  description:item.fields.description,
  image:item.fields.image.fields.file.url
}
  })
  return services
}
export default async function Home() {
  const services = await fetchServices() 
  console.log(services);

  return (
    <>
    {services.map((servic)=>{
      return (
        <>
        <h2>{servic.title}</h2>
        <p>{servic.description}</p>
        {/* <Image
        src={servic.image}
        width={100}
        height={200}
        quality={200}
        /> */}
        <img width={200} height={200} src={servic.image} alt="Image" />
        <hr />
        </>
      )
    })}
    </>
      )
}
