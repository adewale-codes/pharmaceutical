import React from "react";
import Image from "next/image";

const Trust = () => {
  return (
    <div className="bg-neutral-100 p-5 md:p-24">
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-10">
          <div className="font-extrabold md:text-5xl text-2xl text-center">
            Trusted by
          </div>
          <div className="flex jusify-center items-center flex-col md:flex-row gap-5 md:gap-20">
            <div>
              <Image
                src={"images/none.svg"}
                alt="macleods"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                src={"images/ntwo.svg"}
                alt="medochime"
                width={100}
                height={100}
              />
            </div>
            <div>
              <Image
                src={"images/nthree.svg"}
                alt="genepharm"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                src={"images/nfour.svg"}
                alt="arasto"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                src={"images/nfive.svg"}
                alt="rafarm"
                width={100}
                height={100}
              />
            </div>
            <div>
              <Image
                src={"images/nsix.svg"}
                alt="biofarm"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="text-center md:text-xl font-bold">
            And 10 000+ other companies
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
