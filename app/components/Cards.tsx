import React from "react";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="px-5 md:px-24 pt-5 pb-20">
      <div className="flex items-center justify-center gap-16 flex-col md:flex-row">
        <div className="p-6 h-64 gap-2 flex flex-col w-80 rounded-md shadow-2xl items-center justify-center hover:border-b-2 border-blue-300 hover:bg-neutral-100 hover:shadow-xl transition duration-300 ease-in-out">
          <div>
            <Image src={"images/one.svg"} alt="drug" width={50} height={50} />
          </div>
          <div className="font-bold text-xl md:text-2xl">Generics</div>
          <div className="text-center">
            76 700+ finished dosage formulation products
          </div>
        </div>

        <div className=" p-6 h-64 gap-2 flex flex-col w-80 rounded-md shadow-2xl items-center justify-center hover:border-b-2 border-blue-300 hover:bg-neutral-100 hover:shadow-xl transition duration-300 ease-in-out">
          <div>
            <Image src={"images/two.svg"} alt="drug" width={50} height={50} />
          </div>
          <div className="font-bold text-xl md:text-2xl">Originals</div>
          <div className="text-center">20+ products</div>
        </div>

        <div className=" p-6 h-64 gap-2 flex flex-col w-80 rounded-md shadow-xl items-center justify-center hover:border-b-2 border-blue-300 hover:bg-neutral-100 hover:shadow-xl transition duration-300 ease-in-out">
          <div>
            <Image src={"images/three.svg"} alt="drug" width={50} height={50} />
          </div>
          <div className="font-bold text-xl md:text-2xl">Biosimilars</div>
          <div className="text-center">100+ products</div>
        </div>
      </div>
      <div className="flex pt-16 gap-16 items-center justify-center flex-col md:flex-row">
        <div className=" p-6 h-64 gap-2 flex flex-col w-80 rounded-md shadow-2xl items-center justify-center">
          <div>
            <Image
              src={"images/fourth.svg"}
              alt="drug"
              width={50}
              height={50}
            />
          </div>
          <div className="font-bold text-xl md:text-2xl">Medical devices</div>
          <div className="text-center">540+ products</div>
        </div>
        <div className=" p-6 h-64 gap-2 flex flex-col w-80 rounded-md shadow-2xl items-center justify-center">
          <div>
            <Image src={"images/fifth.svg"} alt="drug" width={50} height={50} />
          </div>
          <div className="font-bold text-xl md:text-2xl">Neutraceuticals</div>
          <div className="text-center">5800+ products</div>
        </div>
        {/* <div className=' p-6 h-64 gap-2 flex flex-col w-80 rounded-md shadow-2xl items-center justify-center'>
                <div>
                    <Image src={"images/three.svg"} alt='drug' width={50} height={50} />
                </div>
                <div className='font-bold text-xl md:text-2xl'>Biosimilars</div>
                <div className='text-center'>100+ products</div>
            </div> */}
      </div>
    </div>
  );
};

export default Cards;
