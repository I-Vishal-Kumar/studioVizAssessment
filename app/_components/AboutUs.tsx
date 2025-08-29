import Image from 'next/image';
import React from 'react'

const clients = [
    {
        image: 'krish.png',
        name: 'krish bruynson',
        designation: 'Director, Storloft'
    },
    {
        image: 'krish2.png',
        name: 'krish bruynson',
        designation: 'Director, Storloft'
    },
    {
        image: 'krish3.png',
        name: 'krish bruynson',
        designation: 'Director, Storloft'
    },
    {
        image: 'krish4.png',
        name: 'krish bruynson',
        designation: 'Director, Storloft'
    },
]

export default function AboutUs() {
    return (
        <section className='relative z-10 px-5 py-20 pb-10 '>
            <h2 className="text-3xl lg:text-[2.7rem] font-semibold text-center">
                What Our Clients Have to Say About Us
            </h2>
            <p className="text-center text-sm/loose text-gray-600 mt-4 mx-auto">
                Take a look at our simple and straightforward process to hire software
            </p>
            <div className='mt-10 flex flex-wrap justify-center gap-5'>
                {
                    clients.map(client => (
                        <TestimonialCard
                            key={client.image}
                            bgImage={`/clients/${ client.image }`}
                            designation={client.designation}
                            name={client.name}
                        />
                    ))
                }
            </div>
        </section>
    )
}

const TestimonialCard = ({ bgImage, name, designation }: {
    bgImage: string;
    name: string;
    designation: string;
}) => {
    return (
        <div className="bg-white shadow-md p-4 w-72">
            {/* Image with Play button */}
            <div className="relative overflow-hidden">
                <Image
                    src={bgImage}
                    alt={name}
                    height={200}
                    width={100}
                    className="w-full h-full object-cover"
                />
                <button name='button' className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className="bg-[#2FC980] ring-6 ring-[#2fc9813e] rounded-full p-3 shadow-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            viewBox="0 0 24 24"
                            className="w-10 h-10"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </button>
            </div>

            {/* Content */}
            <div className="mt-4">
                <h3 className="text-xl/loose capitalize font-semibold text-gray-900">{name}</h3>
                <p className="text-md capitalize text-gray-400">{designation}</p>
                <div className="flex mt-2 space-x-1 text-[#2FC980]">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-3.5 h-3.5"
                        >
                            <path d="M12 .587l3.668 7.431L24 9.75l-6 5.848L19.336 24 12 20.019 4.664 24 6 15.598 0 9.75l8.332-1.732z" />
                        </svg>
                    ))}
                </div>
            </div>
        </div>
    );
};
