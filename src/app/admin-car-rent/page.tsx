import Image from "next/image"

export default function admin() {
    return (
        <div>
            <div className='w-full h-auto flex bg-[#F6F7F9]'>
                <div className="first hidden sm:flex w-[286]">
                    <Image src={'/AdminNav.png'} alt='' width={380} height={900} />
                </div>

                <div className="grid grid-cols-2 grid-rows-3 gap-7 p-7">

                    <div className="col-span-1 row-span-3 rounded-lg bg-[#FFFFFF] p-5">
                        <h1 className="font-bold text-xl pt-3">Details Rental</h1><br />
                        <Image src={'/Maps.png'} alt='' width={450} height={350} className="h-[250px]" /> <br /><br />

                        <div className="w-full flex items-center space-x-5">
                            <Image src={'/Look.png'} alt='' width={132} height={72} />
                            <div>
                                <h1 className="font-bold text-[24px] w-full flex items-center space-x-14">Nissan GT - R <br />
                                    <p className="text-[#3D5278] text-lg font-normal">#9761</p>
                                </h1>
                                <p className="text-[#3D5278] text-lg">Sport Car</p>
                            </div>
                        </div><br />

                        <div className='text-lg'>
                            <input
                                type="radio"
                                className="appearance-none border-4 border-[#90A3BF] bg-[#3563E9] rounded-full w-[16px]h-[16px] checked:bg-blue-900 checked:border-[#90A3BF]"
                            /> Pick - Up
                        </div><br />
                        <Image src={'/Pick.png'} alt='' width={550} height={60} />
                        <br /><br />
                        <div className='text-lg'>
                            <input
                                type="radio"
                                className="appearance-none border-4 border-[#90A3BF] bg-[#3563E9] rounded-full w-[16px]h-[16px] checked:bg-blue-900 checked:border-[#90A3BF]"
                            /> Drop - Off
                        </div><br />
                        <Image src={'/Drop.png'} alt='' width={550} height={60} className="flex gap-3 border-b-2 pb-11" /><br /><br />

                        <div className=" flex  justify-between">
                            <div>
                                <h1 className="font-bold text-[24px]">Total Rental Price</h1>
                                <p className="text-[#3D5278]">Overall price and includes rental discount</p>
                            </div>
                            <div className="flex items-end">
                                <h1 className="font-bold text-[38px]">$80.00</h1>
                            </div>
                        </div>
                    </div>

                    <div className=" col-span-1 row-span-1 rounded-lg bg-[#FFFFFF]">
                        <Image src={'/Top 5 Car Rental.png'} alt='' width={524} height={508} />
                    </div>

                    <div className="col-span-1 row-span-2 rounded-lg bg-[#FFFFFF] p-5">
                        <div className="w-full flex justify-between items-center">
                            <h1 className="font-bold text-[24px]">Recent Transaction</h1>
                            <p className="text-[#3563E9] text-sm">View All</p>
                        </div>
                        <br />

                        <div className="flex items-center space-x-5 border-b-2 pb-6">
                            <div>
                                <Image src={'/car.png'} alt='' width={132} height={70} />
                            </div>

                            <div>
                                <h1 className="font-bold text-[20px]">Nissan GT - R</h1>
                                <p className="text-[#90A3BF]">Sport Car</p>
                            </div>

                            <div className="relative left-20">
                                <p className="text-[#90A3BF]">20 July</p>
                                <h1 className="font-bold text-[20px] relative right-2">$80.00</h1>
                            </div>
                        </div><br />

                        <div className="flex items-center space-x-5 border-b-2 pb-6">
                            <div>
                                <Image src={'/car (1).png'} alt='' width={132} height={70} />
                            </div>

                            <div>
                                <h1 className="font-bold text-[20px]">Koegnigsegg</h1>
                                <p className="text-[#90A3BF]">Sport Car</p>
                            </div>

                            <div className="relative left-20">
                                <p className="text-[#90A3BF]">19 July</p>
                                <h1 className="font-bold text-[20px] relative right-2">$99.00</h1>
                            </div>
                        </div><br />

                        <div className="flex items-center space-x-5 border-b-2 pb-6">
                            <div>
                                <Image src={'/Car (2).png'} alt='' width={132} height={70} />
                            </div>

                            <div>
                                <h1 className="font-bold text-[20px]">Rolls - Royce</h1>
                                <p className="text-[#90A3BF]">Sport Car</p>
                            </div>

                            <div className="relative left-20">
                                <p className="text-[#90A3BF]">18 July</p>
                                <h1 className="font-bold text-[20px] relative right-2">$96.00</h1>
                            </div>
                        </div><br />

                        <div className="flex items-center space-x-5 border-b-2 pb-6">
                            <div>
                                <Image src={'/Car (4).png'} alt='' width={132} height={70} />
                            </div>

                            <div>
                                <h1 className="font-bold text-[20px]">Rolls - Royce</h1>
                                <p className="text-[#90A3BF]">Sport Car</p>
                            </div>

                            <div className="relative left-20">
                                <p className="text-[#90A3BF]">17 July</p>
                                <h1 className="font-bold text-[20px] relative right-2">$81.00</h1>
                            </div>
                        </div><br />

                        <div className="flex items-center space-x-5 border-b-2 pb-6">
                            <div>
                                <Image src={'/Car (5).png'} alt='' width={132} height={70} />
                            </div>

                            <div>
                                <h1 className="font-bold text-[20px]">Rolls - Royce</h1>
                                <p className="text-[#90A3BF]">Sport Car</p>
                            </div>

                            <div className="relative left-20">
                                <p className="text-[#90A3BF]">17 July</p>
                                <h1 className="font-bold text-[20px] relative right-2">$81.00</h1>
                            </div>
                        </div><br />

                    </div>

                </div>
            </div>
        </div>
    )
} 