import Image from "next/image"

export default function admin() {
    return(
        <div>
            <div className='w-full h-auto flex bg-[#F6F7F9]'>      
                <div className="first hidden sm:flex w-[286]">
                <Image src={'/AdminNav.png'} alt='' width={380} height={900}/>
                </div>

                <div className="w-full grid grid-cols-2 grid-rows-2 gap-7 p-7">

                    <div className=" col-span-1 row-span-2 rounded-lg bg-[#FFFFFF] p-5">
                        <h1 className="font-bold text-xl">Details Rental</h1><br />
                        <Image src={'/Maps.png'} alt='' width={486} height={272}/> <br />
                    
                        <div className="w-full flex items-center space-x-5">
                        <Image src={'/Look.png'} alt='' width={132} height={72}/> 
                        <div>
                        <h1 className="font-bold text-[24px] w-full flex items-center">Nissan GT - R <br />
                        <p className="text-[#3D5278] text-lg font-normal relative left-20">#9761</p>
                        </h1>
                        <p className="text-[#3D5278] text-lg">Sport Car</p>
                        </div>
                        </div><br />
                        
                        <div className='text-lg'>
                            <input
                                type="radio"
                                className="appearance-none border-4 border-[#90A3BF] bg-[#3563E9] rounded-full w-[16px] h-[16px] checked:bg-blue-900 checked:border-[#90A3BF]"
                            /> Pick - Up
                        </div><br />
                        <Image src={'/Pick.png'} alt='' width={486} height={48}/> 
                        <br />
                        <div className='text-lg'>
                            <input
                                type="radio"
                                className="appearance-none border-4 border-[#90A3BF] bg-[#3563E9] rounded-full w-[16px] h-[16px] checked:bg-blue-900 checked:border-[#90A3BF]"
                            /> Drop - Off
                        </div><br />
                        <Image src={'/Drop.png'} alt='' width={486} height={48} className="flex gap-3 border-b-2 pb-11"/> <br /><br />

                        <div className="w-full flex  justify-between">
                            <div>
                                <h1 className="font-bold text-[24px]">Total Rental Price</h1>
                                <p className="text-[#3D5278]">Overall price and includes rental discount</p>
                            </div>
                            <div className="flex items-end">
                                <h1 className="font-bold text-[38px]">$80.00</h1>
                            </div>
                        </div>
                        
                    </div>

                    <div className=" col-span-1 row-span-1 rounded-lg bg-[#131111]">
                        <Image src={'/Top 5 Car Rental.png'} alt='' width={600} height={400}/>
                    </div> 

                    <div className=" col-span-1 row-span-1 rounded-lg bg-[#FFFFFF]">
                    </div>

                </div>            
            </div>
        </div>
    )
} 