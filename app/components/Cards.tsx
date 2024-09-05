import React from 'react'
import Image from "next/image";

const Cards = () => {
  return (
    <div className='px-5 md:px-24 py-5'>
        <div className='flex gap-16 flex-col md:flex-row'>
            <div className=' p-6 h-64 gap-2 flex flex-col w-80 rounded-md shadow-md items-center justify-center'>
                <div>
                    <Image src={"images/one.svg"} alt='drug' width={50} height={50} />
                </div>
                <div className='font-bold text-xl md:text-2xl'>Generics</div>
                <div className='text-center'>76 700+ finished dosage formulation products</div>
            </div>
            <div className=' p-6 h-64 gap-2 flex flex-col w-80 rounded-md shadow-md items-center justify-center'>
                <div>
                    <Image src={"images/two.svg"} alt='drug' width={50} height={50} />
                </div>
                <div className='font-bold text-xl md:text-2xl'>Originals</div>
                <div className='text-center'>20+ products</div>
            </div>
            <div className=' p-6 h-64 gap-2 flex flex-col w-80 rounded-md shadow-md items-center justify-center'>
                <div>
                    <Image src={"images/three.svg"} alt='drug' width={50} height={50} />
                </div>
                <div className='font-bold text-xl md:text-2xl'>Biosimilars</div>
                <div className='text-center'>100+ products</div>
            </div>
        </div>
        <div className='flex pt-16 gap-16 flex-col md:flex-row'>
            <div className=' p-6 h-64 gap-2 flex flex-col w-80 rounded-md shadow-md items-center justify-center'>
                <div>
                    <Image src={"images/fourth.svg"} alt='drug' width={50} height={50} />
                </div>
                <div className='font-bold text-xl md:text-2xl'>Medical devices</div>
                <div className='text-center'>540+ products</div>
            </div>
            <div className=' p-6 h-64 gap-2 flex flex-col w-80 rounded-md shadow-md items-center justify-center'>
                <div>
                    <Image src={"images/fifth.svg"} alt='drug' width={50} height={50} />
                </div>
                <div className='font-bold text-xl md:text-2xl'>Neutraceuticals</div>
                <div className='text-center'>5800+ products</div>
            </div>
            <div className=' p-6 h-64 gap-2 flex flex-col w-80 rounded-md shadow-md items-center justify-center'>
                <div>
                    <Image src={"images/three.svg"} alt='drug' width={50} height={50} />
                </div>
                <div className='font-bold text-xl md:text-2xl'>Biosimilars</div>
                <div className='text-center'>100+ products</div>
            </div>
        </div>
    </div>
  )
}

export default Cards