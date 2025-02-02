import Image from 'next/image';
import Link from 'next/link';

export default function carRent() {
  return (
    <div>
      <div className='w-full h-auto flex flex-wrap sm:flex-nowrap bg-[#F6F7F9]'>
        <div className="first hidden sm:flex w-[286]">
          <Image src={'/Nav Bar Side.png'} alt='' width={400} height={2000} className="max-w-full"/>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 grid-rows-auto gap-5 p-5">

          <div className='col-span-2 lg:col-span-1 bg-[#F6F7F9] max-w-full sm:max-w-[500px] flex flex-col items-center'>
            <Image src={'/View.png'} alt='' width={600} height={360} className="w-[327px] lg:w-[500px] "/>

            <div className='flex pt-4 lg:pt-[95px] gap-2 lg:gap-6'>
              <Image src={'/View 1.png'} alt='' width={138} height={124} className="w-[85px] lg:w-[138px]"/>
              <Image src={'/View 2.png'} alt='' width={138} height={124} className="w-[85px] lg:w-[138px]"/>
              <Image src={'/View 3.png'} alt='' width={138} height={124} className="w-[85px] lg:w-[138px]"/>
            </div>
          </div>

          <div className='col-span-2 lg:col-span-1 row-span-1 bg-[#FFFFFF] p-4 w-full sm:max-w-[470px] rounded-lg '>
            <h1 className="w-full flex items-center justify-between font-bold text-2xl sm:text-[30px]">
              Nissan GT - R
              <Image src={"/Heart1.png"} alt="" width={24} height={24} />
            </h1>

            <div>
              <Image src={"/Reviews.png"} alt="" width={220} height={24} />
              <br />
              <p className='text-sm sm:text-lg leading-6 sm:leading-8'>NISMO has become the embodiment of Nissan&apos;s is an &amp; outstanding performance inspired by the most is belong  inspired by the most is belong unforgiving proving ground inspired by the most is belong unforgiving proving ground,inspired by the most is belong unforgiving proving ground inspired by the most unforgiving proving ground, the &quot;race track&quot;.</p><br />
              <Image src={"/Spesification-new.png"} alt='' width={444} height={72} className="w-full"/>
            </div><br />

            <div className="w-full flex items-center justify-between pt-0 lg:pt-6">
              <p className='text-2xl lg:text-[30px] font-bold'>$99.00/<span className="text-[#90A3BF] text-sm lg:text-[20px]"> day</span></p>
              <Link href={"/payment"}>
                <button className="bg-[#3563e9] p-2 text-white rounded-md w-28 lg:w-36 lg:h-[56px] ">Rent Now</button>
              </Link>
            </div>

          </div>

          <div className='col-span-2 row-span-12 bg-[#F6F7F9]'>
            <Image src={"/Reviews (1).png"} alt='' width={1016} height={452} className="max-w-full"/>

            <div>
              <div className='flex justify-between p-3 lg:p-5'>
                <p className='text-[#90A3BF] text-sm lg:text-xl'>Recent Car</p>
                <p className='text-[#3563E9] text-sm lg:text-xl'>View All</p>
              </div>
            </div>

            <div className='flex flex-wrap lg:flex-nowrap gap-6 justify-evenly'>
              <div className='bg-[#FFFFFF] w-full max-w-[304px] h-[388px] mx-auto rounded-md p-6'>

                <div>
                  <h1 className="w-full flex items-center justify-between font-bold text-[20px] ">
                    Koenigsegg <Image src={"/Heart1.png"} alt="" width={24} height={24} />
                  </h1>
                  <p className='text-[#90A3BF]'>Sport</p>
                </div>

                <div className='w-full flex flex-col items-center justify-center gap-4'>
                  <Image src={"/car.png"} alt="" width={220} height={68} className='pt-14' />
                  <Image src={"/Spesification.png"} alt="" width={256} height={24} className='pt-14' />
                </div>

                <div className="w-full flex items-center justify-between pt-6">
                  <p className='text-[20px] font-bold'>$99.00/<span className="text-[#90A3BF] text-[14px]"> day</span></p>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md w-28 ">Rent Now</button>
                </div>
              </div>

              <div className='bg-[#FFFFFF] w-full max-w-[304px] h-[388px] mx-auto rounded-md p-6'>

                <div>
                  <h1 className="w-full flex items-center justify-between font-bold text-[20px] ">
                    Nissan GT - R <Image src={"/Heart2.png"} alt="" width={24} height={24} />
                  </h1>
                  <p className='text-[#90A3BF]'>Sport</p>
                </div>

                <div className='w-full flex flex-col items-center justify-center gap-4'>
                  <Image src={"/car (1).png"} alt="" width={220} height={68} className='pt-14' />
                  <Image src={"/Spesification (1).png"} alt="" width={256} height={24} className='pt-14' />
                </div>

                <div className="w-full flex items-center justify-between pt-6">
                  <p className='text-[20px] font-bold'>$80.00/<span className="text-[#90A3BF] text-[14px]"> day</span></p>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md w-28 ">Rent Now</button>
                </div>
              </div>

              <div className='bg-[#FFFFFF] w-full max-w-[304px] h-[388px] mx-auto rounded-md p-6'>

                <div>
                  <h1 className="w-full flex items-center justify-between font-bold text-[20px] ">
                    Rolls - Royce <Image src={"/Heart1.png"} alt="" width={24} height={24} />
                  </h1>
                  <p className='text-[#90A3BF]'>Sport</p>
                </div>

                <div className='w-full flex flex-col items-center justify-center gap-4'>
                  <Image src={"/Car (2).png"} alt="" width={220} height={68} className='pt-14' />
                  <Image src={"/Spesification (2).png"} alt="" width={256} height={24} className='pt-14' />
                </div>

                <div className="w-full flex items-center justify-between pt-6">
                  <p className='text-[20px] font-bold'>$96.00/<span className="text-[#90A3BF] text-[14px]"> day</span></p>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md w-28 ">Rent Now</button>
                </div>
              </div>

            </div>


            <div>
              <div className='flex justify-between p-5'>
                <p className='text-[#90A3BF] text-sm lg:text-xl'>Recomendation Car</p>
                <p className='text-[#3563E9] text-sm lg:text-xl'>View All</p>
              </div>
            </div>

            <div className='flex flex-wrap lg:flex-nowrap gap-6 justify-evenly'>

              <div className='bg-[#FFFFFF] w-full max-w-[304px] h-[388px] mx-auto rounded-md p-6'>

                <div>
                  <h1 className="w-full flex items-center justify-between font-bold text-[20px] ">
                    All New Rush <Image src={"/Heart2.png"} alt="" width={24} height={24} />
                  </h1>
                  <p className='text-[#90A3BF]'>SUV</p>
                </div>

                <div className='w-full flex flex-col items-center justify-center gap-4'>
                  <Image src={"/Car (4).png"} alt="" width={224} height={100} className='pt-11' />
                  <Image src={"/Spesification (4).png"} alt="" width={256} height={24} className='pt-11' />
                </div>

                <div className="w-full flex items-center justify-between pt-5">
                  <p className='text-[20px] font-bold'>$99.00/<span className="text-[#90A3BF] text-[14px]"> day</span></p>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md w-28 ">Rent Now</button>
                </div>

              </div>

              <div className='bg-[#FFFFFF] w-full max-w-[304px] h-[388px] mx-auto rounded-md p-6'>

                <div>
                  <h1 className="w-full flex items-center justify-between font-bold text-[20px] ">
                    CR  - V<Image src={"/Heart1.png"} alt="" width={24} height={24} />
                  </h1>
                  <p className='text-[#90A3BF]'>SUV</p>
                </div>

                <div className='w-full flex flex-col items-center justify-center gap-4'>
                  <Image src={"/Car (5).png"} alt="" width={248} height={100} className='pt-11' />
                  <Image src={"/Spesification (5).png"} alt="" width={256} height={24} className='pt-11' />
                </div>

                <div className="w-full flex items-center justify-between pt-5">
                  <p className='text-[20px] font-bold'>$96.00/<span className="text-[#90A3BF] text-[14px]"> day</span></p>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md w-28 ">Rent Now</button>
                </div>

              </div>

              <div className='bg-[#FFFFFF] w-full max-w-[304px] h-[388px] mx-auto rounded-md p-6'>

                <div>
                  <h1 className="w-full flex items-center justify-between font-bold text-[20px] ">
                    All New Terios <Image src={"/Heart2.png"} alt="" width={24} height={24} />
                  </h1>
                  <p className='text-[#90A3BF]'>SUV</p>
                </div>

                <div className='w-full flex flex-col items-center justify-center gap-4'>
                  <Image src={"/Car (6).png"} alt="" width={224} height={100} className='pt-11' />
                  <Image src={"/Spesification (6).png"} alt="" width={256} height={24} className='pt-11' />
                </div>

                <div className="w-full flex items-center justify-between pt-5">
                  <p className='text-[20px] font-bold'>$80.00/ <span className="text-[#90A3BF] text-[14px]"> day</span></p>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md w-28 ">Rent Now</button>
                </div>

              </div>





            </div>

          </div>

        </div>

      </div>

    </div>
  )
};