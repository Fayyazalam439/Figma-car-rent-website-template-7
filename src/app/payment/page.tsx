import Image from 'next/image';
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';

export default function carRent() {
    return (
        <div className='w-full bg-[#F6F7F9] p-5'>
            <section className='w-full h-auto flex flex-wrap sm:flex-nowrap space-x-0 sm:space-x-5'>
                <div className='w-[327px] sm:w-[852px] h-[565px] sm:h-[336px] bg-[#FFFFFF] p-5 rounded-lg mb-6'>
                    <h1 className='font-bold text-lg sm:text-xl '>Billing Info</h1>
                    <div className='flex justify-between'>
                        <p className='text-sm text-[#90A3BF]'>Please enter your billing info</p>
                        <p className='text-sm text-[#90A3BF]'>Step 1 of 4</p>
                    </div>
                    <br />

                    <form className='grid grid-cols-1 sm:grid-cols-2 gap-8 pr-0 sm:pr-4'>
                        <div>
                            <label className='font-bold'>Name</label><br />
                            <input type="text" placeholder='Your name' className='bg-[#F6F7F9] min-w-[288px] sm:min-w-[375px] h-[56px] rounded-md p-7 mt-2 text-sm' />
                        </div>

                        <div>
                            <label className='font-bold'>Phone Number</label><br />
                            <input type="number" placeholder='Phone Number' className='bg-[#F6F7F9] min-w-[288px] sm:w-[375px] h-[56px] rounded-md p-7 mt-2 text-sm' />
                        </div>

                        <div>
                            <label className='font-bold'>Address</label><br />
                            <input type="text" placeholder='Address' className='bg-[#F6F7F9] min-w-[288px] sm:w-[375px] h-[56px] rounded-md p-7 mt-2 text-sm' />
                        </div>

                        <div>
                            <label className='font-bold'>Town / City</label><br />
                            <input type="text" placeholder='Town or city' className='bg-[#F6F7F9] min-w-[288px] sm:w-[375px] h-[56px] rounded-md p-7 mt-2 text-sm' />
                        </div>

                    </form>

                </div><br />

                <div className='w-[327px] sm:w-[492px] h-[540px] sm:h-[520px] bg-[#FFFFFF] p-5 rounded-lg'>
                    <h1 className='font-bold text-xl'>Rental Summary</h1>
                    <p className=' text-[#90A3BF]'>Prices may change depending on the length of the rental and the price of your rental car.</p><br />
                    <div className='flex gap-3 border-b-2 pb-9'>
                        <div><Image src={'/Look.png'} alt='' width={132} height={108} /></div>
                        <div className='pt-5'><Image src={'/Car Name.png'} alt='' width={190} height={65} /></div>
                    </div>

                    <div className='flex justify-between pt-5'>
                        <p className='text-[#90A3BF]'>Subtotal</p>
                        <p className=' font-bold'>$80.00</p>
                    </div>

                    <div className='flex justify-between pt-5'>
                        <p className='text-[#90A3BF]'>Tax</p>
                        <p className=' font-bold'>$0</p>
                    </div>


                    <div className='w-[295px] sm:w-[444px] h-[45px] sm:h-[56px] bg-[#F6F7F9] mt-5 rounded-lg flex justify-between p-5'>
                        <input type='number' placeholder='Apply promo code' className='text-[#90A3BF] bg-[#F6F7F9]'/>
                        <button className='font-bold items-center flex text-sm sm:text-lg'>Apply now</button>
                    </div>

                    <div className='flex justify-between mt-5'>
                        <div>
                            <h1 className='font-bold text-xl'>Total Rental Price</h1>
                            <p className='text-[#90A3BF]'>Overall price and includes rental discount</p>
                        </div>
                        <div>
                            <h1 className='font-bold text-3xl pt-4'>$80.00</h1>
                        </div>
                    </div>
                </div>
            </section><br />

            <section className='w-[327px] sm:w-[800px] h-[900px] sm:h-[664px] bg-[#FFFFFF] rounded-lg relative bottom-0 sm:bottom-40 md:bottom-40 lg:bottom-40 p-5 '>

                <div>
                    <h1 className='font-bold text-xl '>Rental Info</h1>
                    <div className='flex justify-between'>
                        <p className='text-sm text-[#90A3BF]'>Please select your rental date</p>
                        <p className='text-sm text-[#90A3BF]'>Step 2 of 4</p>
                    </div>
                </div>
                <br />

                <div className='text-lg'>
                    <input
                        type="radio"
                        className="appearance-none border-4 border-[#90A3BF] bg-[#3563E9] rounded-full w-[16px] h-[16px] checked:bg-blue-900 checked:border-[#90A3BF]"
                    /> Pick - Up
                </div><br />

                <form className='grid grid-cols-1 sm:grid-cols-2 gap-8 pr-4'>
                    <div className='relative'>
                        <label className='font-bold'>Locations</label><br />
                        <input type="text" placeholder='Select Your city' className='bg-[#F6F7F9] w-[295px] sm:w-[375px] h-[56px] rounded-md p-7 mt-2 text-sm flex justify-between' /><IoIosArrowDown className="absolute right-1 top-1/2 transform text-[#90A3BF] w-[14px] h-[14px] mt-3" />
                    </div>

                    <div className='relative'>
                        <label className='font-bold'>Date</label><br />
                        <input type="text" placeholder='Select Your date' className='bg-[#F6F7F9] w-[295px] sm:w-[375px] h-[56px] rounded-md p-7 mt-2 text-sm flex justify-between' /><IoIosArrowDown className="absolute right-1 top-1/2 transform text-[#90A3BF] w-[14px] h-[14px] mt-3" />
                    </div>

                    <div className='relative'>
                        <label className='font-bold'>Time</label><br />
                        <input type="text" placeholder='Select Your time' className='bg-[#F6F7F9] w-[295px] sm:w-[375px] h-[56px] rounded-md p-7 mt-2 text-sm flex justify-between' /><IoIosArrowDown className="absolute right-1 top-1/2 transform text-[#90A3BF] w-[14px] h-[14px] mt-3" />
                    </div>
                </form><br />

                <div className='text-lg'>
                    <input
                        type="radio"
                        className="appearance-none border-4 border-[#90A3BF] bg-[#3563E9] rounded-full w-[16px] h-[16px] checked:bg-blue-900 checked:border-[#90A3BF]"
                    /> Drop - Off
                </div><br />

                <form className='grid grid-cols-1 sm:grid-cols-2 gap-8 pr-4'>
                    <div className='relative'>
                        <label className='font-bold'>Locations</label><br />
                        <input type="text" placeholder='Select Your city' className='bg-[#F6F7F9] w-[295px] sm:w-[375px] h-[56px] rounded-md p-7 mt-2 text-sm flex justify-between' /><IoIosArrowDown className="absolute right-1 top-1/2 transform text-[#90A3BF] w-[14px] h-[14px] mt-3" />
                    </div>

                    <div className='relative'>
                        <label className='font-bold'>Date</label><br />
                        <input type="text" placeholder='Select Your date' className='bg-[#F6F7F9] w-[295px] sm:w-[375px] h-[56px] rounded-md p-7 mt-2 text-sm flex justify-between' /><IoIosArrowDown className="absolute right-1 top-1/2 transform text-[#90A3BF] w-[14px] h-[14px] mt-3" />
                    </div>

                    <div className='relative'>
                        <label className='font-bold'>Time</label><br />
                        <input type="text" placeholder='Select Your time' className='bg-[#F6F7F9] w-[295px] sm:w-[375px] h-[56px] rounded-md p-7 mt-2 text-sm flex justify-between' /><IoIosArrowDown className="absolute right-1 top-1/2 transform text-[#90A3BF] w-[14px] h-[14px] mt-3" />
                    </div>
                </form>
            </section><br />

            <section className='w-[327px] sm:w-[800px] h-[910px] sm:h-[596px] bg-[#FFFFFF] rounded-lg relative bottom-0 sm:bottom- md:bottom-40 lg:bottom-40 p-5'>

                <div>
                    <h1 className='font-bold text-xl '>Payment Method</h1>
                    <div className='flex justify-between'>
                        <p className='text-sm text-[#90A3BF]'>Please enter your payment method</p>
                        <p className='text-sm text-[#90A3BF]'>Step 3 of 4</p>
                    </div>
                </div>
                <br />

                <form className='grid grid-cols-1 sm:grid-cols-2 gap-8 p-5 rounded-lg bg-[#F6F7F9]'>

                    <div className='w-[263px] sm:w-[758px] h-[56px]  rounded-lg'>
                        <div className='text-lg space-x-3 flex items-center'>
                            <input
                                type="radio"
                                className="appearance-none border-4 border-[#90A3BF] bg-[#3563E9] rounded-full w-[16px] h-[16px] checked:bg-blue-900 checked:border-[#90A3BF]"
                            /> <p>Credit Card</p>
                            <span className='w-24 h-5 flex justify-between'><Image src={"/Visa.png"} alt="" width={92} height={20} className='ml-[495px]' /></span>
                        </div>
                    </div>
                    <br />

                    <div>
                        <label className='font-bold'>Card Number</label><br />
                        <input type="text" placeholder='Card Number' className='bg-[#FFFFFF] w-[250px] sm:w-[350px] h-[56px] rounded-md p-7 mt-2 text-sm' />
                    </div>

                    <div>
                        <label className='font-bold'>Expration Date</label><br />
                        <input type="text" placeholder='DD / MM / YY' className='bg-[#FFFFFF] w-[250px] sm:w-[350px] h-[56px] rounded-md p-7 mt-2 text-sm' />
                    </div>

                    <div>
                        <label className='font-bold'>Card Holder</label><br />
                        <input type="text" placeholder='Card Holder' className='bg-[#FFFFFF] w-[250px] sm:w-[350px] h-[56px] rounded-md p-7 mt-2 text-sm' />
                    </div>

                    <div>
                        <label className='font-bold'>CVC</label><br />
                        <input type="text" placeholder='CVC' className='bg-[#FFFFFF] w-[250px] sm:w-[350px] h-[56px] rounded-md p-7 mt-2 text-sm' />
                    </div>
                </form><br />

                <div className='sm-[300px] sm:w-[758px] h-[56px] bg-[#F6F7F9] rounded-lg p-3 pl-5 flex justify-between items-center'>
                    <div className='text-lg space-x-4 flex items-center '>
                        <input
                            type="radio"
                            className="appearance-none border-2 border-[#90A3BF] bg-[#FFFFFF] rounded-full w-[24px] h-[24px] checked:bg-[#3563E9] checked:border-black"
                        />
                        <span>PayPal</span>
                        <div><Image src={"/PayPal.png"} alt="" width={100} height={24} className='ml-[40px] sm:ml-[495px]' /></div>
                    </div><br />
                </div> <br />

                <div className='sm-[300px] sm:w-[758px] h-[56px] bg-[#F6F7F9] rounded-lg p-3 pl-5 flex justify-between items-center'>
                    <div className='text-lg space-x-4 flex items-center '>
                        <input
                            type="radio"
                            className="appearance-none border-2 border-[#90A3BF] bg-[#FFFFFF] rounded-full w-[24px] h-[24px] checked:bg-[#3563E9] checked:border-black"
                        />
                        <span>Bitcoin</span>
                        <div><Image src={"/Bitcoin.png"} alt="" width={94} height={20} className='ml-[40px] sm:ml-[500px]' /></div>
                    </div><br />
                </div>
            </section> <br />

            <section className='w-[327px] sm:w-[800px] h-auto bg-[#FFFFFF] rounded-lg relative bottom-0 sm:bottom-40 md:bottom-40 lg:bottom-40 p-5'>

                <div>
                    <h1 className='font-bold text-xl'>Confirmation</h1>
                    <div className='flex justify-between'>
                        <p className='text-sm text-[#90A3BF]'>We are getting to the end. Just few clicks and your rental is ready!</p>
                        <p className='text-sm text-[#90A3BF]'>Step 4 of 4</p>
                    </div>
                </div>
                <br />

                <form className='grid grid-cols-1 rounded-lg bg-[#FFFFFF]'>
                    <div className='w-[295px] sm:w-[760px] h-[72px] sm:h-[56px] bg-[#F6F7F9] rounded-lg flex items-center pl-8 space-x-5 text-sm sm:text-lg'>
                        <input type="checkbox" className='bg-[#F6F7F9] w-[35px] sm:w-[24px] h-[24px] rounded-md text-sm' /> <p>I agree with sending an Marketing and newsletter emails. No spam, promissed!</p>
                    </div>

                    <br />
                    <div className='w-[295px] sm:w-[760px] h-[68px] sm:h-[56px] bg-[#F6F7F9] rounded-lg flex items-center pl-8 space-x-5 text-sm sm:text-lg'>
                        <input type="checkbox" className='bg-[#F6F7F9] w-[24px] h-[24px] rounded-md text-sm' /> <p>I agree with our terms and conditions and privacy policy.</p>
                    </div><br /><br />

                    <div className="w-full">
                        <Link href={"/admin-car-rent"}>
                            <button className="bg-[#3563e9] px-7 py-4 text-white rounded-lg font-bold ">
                                Rent Now
                            </button>
                        </Link>
                    </div><br /><br />

                    <div><Image src={"/Safe Data.png"} alt="" width={548} height={100} /></div>

                </form>
            </section>
        </div>
    )
}
