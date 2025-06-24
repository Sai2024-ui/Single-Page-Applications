import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ImagesF1 = () => {
  return (
    <>
    <button className='p-2 bg-sky-200 font-bold rounded-lg mt-10 ml-10'><Link href='/'>Home</Link></button>
    <div className='flex flex-row gap-10 m-10'>
      <Image src="https://www.financialexpress.com/wp-content/uploads/2022/06/Lamborghini-Urus-Exterior-115483-e1654677437332.jpg" alt='img1' height={200} width={500} />
      <Image src="https://upload.wikimedia.org/wikipedia/commons/1/13/Mahindra_Thar_Photoshoot_At_Perupalem_Beach_%28West_Godavari_District%2CAP%2CIndia_%29_Djdavid.jpg" alt='img2' height={200} width={500} />
    </div>
  </>
  )
}

export default ImagesF1
