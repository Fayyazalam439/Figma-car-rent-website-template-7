import Image from 'next/image';

export default function Home() {
  return (
    <div className='bg-[#F6F7F9]'>

      <div className='w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center pt-10'>
      <Image src={'/Ads1.png'} alt='' width={640} height={360} className="max-w-full"/>
      <Image src={'/Ads2.png'} alt='' width={640} height={360} className="max-w-full"/>
      </div>

      <div className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8 pt-7">
        <Image src={"/Pick - Up.png"} alt="" width={582} height={132} className="max-w-full pl-6" />
        <Image src={"/Switch.png"} alt="" width={150} height={150} className="max-w-full" />
        <Image src={"/Drop - Off.png"} alt="" width={582} height={132} className="max-w-full pr-6" />
      </div>

      <section className='w-full h-auto p-8 flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8'>
        <div className='flex justify-between '>
          <div>
            <h1 className='text-[#90A3BF] text-lg sm:text-xm font-bold pl-5'>Popular Car</h1>
          </div>

          <div>
            <h1 className='text-[#3563E9] text-lg sm:text-xm font-bold pr-5'>View All</h1>
          </div>
        </div>

        {/* Card code */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-5">

          <div className='bg-[#FFFFFF] w-full max-w-[304px] h-[388px] mx-auto rounded-md p-6'>

            <div>
            <h1 className="w-full flex items-center justify-between font-bold text-[20px] ">
            Koenigsegg <Image src={"/Heart1.png"} alt="" width={24} height={24} /> 
            </h1>
            <p className='text-[#90A3BF]'>Sport</p>
            </div>

          <div className='w-full flex flex-col items-center justify-center gap-4'>
            <Image src={"/car.png"} alt="" width={220} height={68} className='pt-14'/>
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
            <Image src={"/car (1).png"} alt="" width={220} height={68} className='pt-14'/>
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
            <Image src={"/car (2).png"} alt="" width={220} height={68} className='pt-14'/>
            <Image src={"/Spesification (2).png"} alt="" width={256} height={24} className='pt-14' />
          </div>

          <div className="w-full flex items-center justify-between pt-6">
            <p className='text-[20px] font-bold'>$96.00/<span className="text-[#90A3BF] text-[14px]"> day</span></p>
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
            <Image src={"/car (3).png"} alt="" width={220} height={68} className='pt-14'/>
            <Image src={"/Spesification (3).png"} alt="" width={256} height={24} className='pt-14' />
          </div>

          <div className="w-full flex items-center justify-between pt-6">
            <p className='text-[20px] font-bold'>$80.00/<span className="text-[#90A3BF] text-[14px]"> day</span></p>
            <button className="bg-[#3563e9] p-2 text-white rounded-md w-28 ">Rent Now</button>
          </div>

          </div>
        </div>
      </section>

                {/* New Section */}
        <section className='w-full h-auto p-8 flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8'>

        <div className='flex justify-between '>
          <div>
            <h1 className='text-[#90A3BF] text-lg sm:text-xm font-bold pl-5'>Recomendation Car</h1>
          </div>
        </div>

        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-5">

          <div className='bg-[#FFFFFF] w-full max-w-[304px] h-[388px] mx-auto rounded-md p-6'>

            <div>
            <h1 className="w-full flex items-center justify-between font-bold text-[20px] ">
            All New Rush <Image src={"/Heart2.png"} alt="" width={24} height={24} /> 
            </h1>
            <p className='text-[#90A3BF]'>SUV</p>
            </div>

          <div className='w-full flex flex-col items-center justify-center gap-4'>
            <Image src={"/car (4).png"} alt="" width={224} height={100} className='pt-11'/>
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
            <Image src={"/car (5).png"} alt="" width={248} height={100} className='pt-11'/>
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
            <Image src={"/car (6).png"} alt="" width={224} height={100} className='pt-11'/>
            <Image src={"/Spesification (6).png"} alt="" width={256} height={24} className='pt-11'/>
          </div>

          <div className="w-full flex items-center justify-between pt-5">
            <p className='text-[20px] font-bold'>$80.00/ <span className="text-[#90A3BF] text-[14px]"> day</span></p>
            <button className="bg-[#3563e9] p-2 text-white rounded-md w-28 ">Rent Now</button>
          </div>

          </div>

          
          <div className='bg-[#FFFFFF] w-full max-w-[304px] h-[388px] mx-auto rounded-md p-6'>

            <div>
            <h1 className="w-full flex items-center justify-between font-bold text-[20px] ">
            Nissan GT - R <Image src={"/Heart1.png"} alt="" width={24} height={24} /> 
            </h1>
            <p className='text-[#90A3BF]'>SUV</p>
            </div>

          <div className='w-full flex flex-col items-center justify-center gap-4'>
            <Image src={"/car (4).png"} alt="" width={224} height={100} className='pt-11'/>
            <Image src={"/Spesification (3).png"} alt="" width={256} height={24} className='pt-11' />
          </div>

          <div className="w-full flex items-center justify-between pt-5">
            <p className='text-[20px] font-bold'>$80.00/<span className="text-[#90A3BF] text-[14px]"> day</span></p>
            <button className="bg-[#3563e9] p-2 text-white rounded-md w-28 ">Rent Now</button>
          </div>

          </div>

          </div>
          
          {/* 3rd section */}
          </section>

          <section className='w-full h-auto p-8 flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8'>

        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className='bg-[#FFFFFF] w-full max-w-[304px] h-[388px] mx-auto rounded-md p-6'>

            <div>
            <h1 className="w-full flex items-center justify-between font-bold text-[20px] ">
            All New Rush <Image src={"/Heart2.png"} alt="" width={24} height={24} /> 
            </h1>
            <p className='text-[#90A3BF]'>SUV</p>
            </div>

          <div className='w-full flex flex-col items-center justify-center gap-4'>
            <Image src={"/car (7).png"} alt="" width={248} height={100} className='pt-11'/>
            <Image src={"/Spesification (7).png"} alt="" width={256} height={24} className='pt-11' />
          </div>

          <div className="w-full flex items-center justify-between pt-5">
            <p className='text-[20px] font-bold'>$79.00/<span className="text-[#90A3BF] text-[14px]"> day</span></p>
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
            <Image src={"/car (8).png"} alt="" width={224} height={100} className='pt-11'/>
            <Image src={"/Spesification (8).png"} alt="" width={256} height={24} className='pt-11' />
          </div>

          <div className="w-full flex items-center justify-between pt-5">
            <p className='text-[20px] font-bold'>$98.00/ <span className="text-[#90A3BF] text-[14px]"> day</span></p>
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
            <Image src={"/car (9).png"} alt="" width={288} height={112} className='pt-11'/>
            <Image src={"/Spesification (9).png"} alt="" width={256} height={24} className='pt-11'/>
          </div>

          <div className="w-full flex items-center justify-between pt-3">
            <p className='text-[20px] font-bold'>$100.00/ <span className="text-[#90A3BF] text-[14px]"> day</span></p>
            <button className="bg-[#3563e9] p-2 text-white rounded-md w-28 ">Rent Now</button>
          </div>

          </div>

          
          <div className='bg-[#FFFFFF] w-full max-w-[304px] h-[388px] mx-auto rounded-md p-6'>
            
            <div>
            <h1 className="w-full flex items-center justify-between font-bold text-[20px] ">
            Nissan GT - R <Image src={"/Heart1.png"} alt="" width={24} height={24} /> 
            </h1>
            <p className='text-[#90A3BF]'>SUV</p>
            </div>

          <div className='w-full flex flex-col items-center justify-center gap-4'>
            <Image src={"/car (10).png"} alt="" width={264} height={108} className='pt-10'/>
            <Image src={"/Spesification (10).png"} alt="" width={256} height={24} className='pt-10' />
          </div>

          <div className="w-full flex items-center justify-between pt-5">
            <p className='text-[20px] font-bold'>$95.00/<span className="text-[#90A3BF] text-[14px]"> day</span></p>
            <button className="bg-[#3563e9] p-2 text-white rounded-md w-28 ">Rent Now</button>
          </div>

          </div>
          </div>
     </section>

      <section className="w-full text-center">
      
          <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5 ">
            Show More Car
          </button>
          <br /><br /><br/>
        
      </section>

    </div>
  );
}
