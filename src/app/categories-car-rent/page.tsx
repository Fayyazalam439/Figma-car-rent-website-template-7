import Image from 'next/image';
import Link from 'next/link';

export default function categories() {
  return (
<div>
    <div className='w-full h-auto flex bg-[#F6F7F9]'>      
      <div className="first hidden sm:flex w-[360]">
        <Image src={'/Nav Bar Side.png'} alt='' width={360} height={1600}/>
      </div>

    <div className="w-full h-auto sm:w-[80%] flex flex-col p-4 sm:p-6 gap-2">
      <div className='w-full flex flex-col sm:flex-row items-center sm:justify-b'>
        <Image src={"/Pick - Up.png"} alt="" width={486} height={136}/>
        <Image src={"/Switch.png"} alt="" width={63} height={63}/>
        <Image src={"/Drop - Off.png"} alt="" width={486} height={136}/>
      </div>

      <section className='w-full h-auto p-2 flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8'>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">

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
        </div>        
      </section>    

    <section className="w-full text-center">    
      <Link href={"/detail-car-rent"}>
        <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5 ">
          Show More Car
        </button>
      </Link>
        <br /><br />
    </section>   
    </div>

    </div>
</div>
  );
}
