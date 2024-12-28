import Image from 'next/image';
import Link from 'next/link';

export default function carRent() {
    return (
<div>
    <div className='w-full h-auto flex bg-[#181d29]'>      
      <div className="first hidden sm:flex w-[360]">
        <Image src={'/Nav Bar Side.png'} alt='' width={360} height={2016}/>
      </div>

    <div className='flex p-8 space-x-8'>
    <div>
        <Image src={'/View.png'} alt='' width={555} height={360}/>

        <div className='flex pt-6 md:gap-6 sm:gap-4 lg:gap-6 '>
        <Image src={'/View 1.png'} alt='' width={148} height={124}/>
        <Image src={'/View 2.png'} alt='' width={148} height={124}/>
        <Image src={'/View 3.png'} alt='' width={148} height={124}/>
        </div>
    </div>

    <div className='w-[492px] h-[508px] bg-slate-300 rounded-md p-4'>

        <div className='flex items-start'>
        <h1 className="w-full flex items-center justify-between font-bold text-[30px]">
        Nissan GT - R 
        <Image src={"/Heart1.png"} alt="" width={24} height={24} /> 
        </h1>
        </div>

        <div>
        <Image src={"/Reviews.png"} alt="" width={220} height={24}/>
        <br /><br />
        <p className='text-lg'>NISMO has become the embodiment of Nissan's is an & outstanding performance, inspired by the most is belong unforgiving proving ground, the "race track".</p>
        <br /><br />
        <Image src={"/Spesification-new.png"} alt='' width={444} height={72}/>
        <br /><br />

        <div className="w-full flex items-center justify-between pt-6">
            <p className='text-[30px] font-bold'>$99.00/<span className="text-[#90A3BF] text-[20px]"> day</span></p>
            <Link href={"/payment"}>
            <button className="bg-[#3563e9] p-2 text-white rounded-md w-36 h-[56px] ">Rent Now</button>
            </Link>
        </div>

        </div> 
           
    </div> 
    </div>



    </div>

    <div className='w-full flex justify-center items-center'><Image src={"/Reviews (1).png"} alt='' width={955} height={452}/></div>
    


</div>
    )};