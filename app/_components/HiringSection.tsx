import Image from 'next/image'
import React from 'react'
import { IoCheckmarkCircle } from 'react-icons/io5'

export default function HiringSection() {
    return (
        <section className='relative z-10 lg:px-28 px-5 pt-20'>

            <h2 className="text-3xl lg:text-[2.7rem] font-semibold text-center">
                Why Hire Developers From Our Name
            </h2>
            <p className="text-center text-sm/loose text-gray-600 mt-4 max-w-2xl mx-auto">
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                Industry. Lorem Ipsum Has Been The Industry&apos;s Standard Dummy Text Ever
                Since.
            </p>

            <div className="mt-4 flex flex-col lg:px-7 md:flex-row gap-2">
                <div className="flex-1 flex justify-center ">
                    <Image
                        alt='hiring hero'
                        src={'/hiringSection_hero_bg.png'}
                        height={400}
                        width={400}
                        className='aspect-auto scale-90 md:mt-[-12%]'
                    />
                </div>

                {/* Right Content */}
                <div className="flex-1 md:pt-12 md:w-full max-w-[80%] mx-auto">

                    <h3 className="text-2xl lg:text-3xl font-semibold mb-6">
                        High Quality/Cost Ratio
                    </h3>

                    <div className="space-y-6 pr-2 ">
                        {/* Point 1 */}
                        <div className="flex items-start gap-3">
                            <IoCheckmarkCircle className="text-green-500 text-2xl shrink-0" />
                            <div>
                                <h4 className="text-xl">
                                    Hire Silicon Valley Caliber At Half The Cost
                                </h4>
                                <p className="text-gray-600 mt-1 text-sm/relaxed">
                                    Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries
                                    Who Have Applied To Turing.
                                </p>
                            </div>
                        </div>

                        {/* Point 2 */}
                        <div className="flex items-start gap-3">
                            <IoCheckmarkCircle className="text-[#FF252F87] text-2xl shrink-0" />
                            <div>
                                <h4 className="text-xl">100+ Skills Available</h4>
                                <p className="text-gray-600 mt-1 text-sm/relaxed">
                                    Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries
                                    Who Have Applied To Turing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 flex flex-col lg:px-7 md:flex-row-reverse gap-2">
                <div className="flex-1 flex justify-center ">
                    <Image
                        alt='hiring hero'
                        src={'/hiringSection_hero_2_bg.png'}
                        height={400}
                        width={400}
                        className='aspect-auto scale-80 -mt-[20%] not-md:mt-0'
                    />
                </div>

                <div className="flex-1 md:pt-12 md:w-full max-w-[80%] mx-auto">

                    <h3 className="text-2xl lg:text-3xl font-semibold mb-6">
                        Rigorous Vetting
                    </h3>

                    <div className="space-y-6 pr-2">
                        {/* Point 1 */}
                        <div className="flex items-start gap-3">
                            <IoCheckmarkCircle className="text-green-500 text-2xl shrink-0" />
                            <div>
                                <h4 className=" text-xl capitalize">
                                    5+ hours of tests and interviews
                                </h4>
                                <p className="text-gray-600 mt-1 text-sm/relaxed">
                                    Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries
                                    Who Have Applied To Turing.
                                </p>
                            </div>
                        </div>

                        {/* Point 2 */}
                        <div className="flex items-start gap-3">
                            <IoCheckmarkCircle className="text-[#FF252F87] text-2xl shrink-0" />
                            <div>
                                <h4 className=" text-xl">Seniority Tests</h4>
                                <p className="text-gray-600 mt-1 text-sm/relaxed">
                                    Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries
                                    Who Have Applied To Turing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute hidden md:block -z-1 top-0 left-0 h-[65%] w-[40%]' >
                <Image
                    src={'/hiringSection_bg_left.png'}
                    alt='hiring section left'
                    fill
                />
            </div>
            <div className='absolute hidden md:block  bg-no-repeat -z-1 top-0 right-0 h-[90%] w-[55%]' >
                <Image
                    src={'/hiringSection_bg_right.png'}
                    alt='hiring section left'
                    fill
                />
            </div>

            <div className='absolute bg-[#FF857854] md:blur-[100px] blur-[150px] -z-1 -bottom-15 size-100 rounded-full -left-15' >
            </div>
            <div className='absolute md:block hidden -z-1 top-1/2 size-15 rounded-full right-20' >
                <Image
                    src={'/handScribble.png'}
                    alt='hiring section left'
                    height={100}
                    width={100}
                />
            </div>
            <div className='absolute md:block hidden -z-1 -bottom-20 size-20 rounded-full left-10' >
                <Image
                    src={'/arrow.png'}
                    alt='hiring section left'
                    height={100}
                    width={100}
                />
            </div>
        </section>
    )
}
