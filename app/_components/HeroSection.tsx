import { TextField, Button, Divider, FormLabel } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

export default function HeroSection() {
    return (
        <section className='relative z-10  w-full px-6 lg:px-28 py-12 flex flex-col lg:flex-row justify-between gap-10'>

            <div className="flex-[1] text-center pt-[5%] z-10 lg:text-left">
                <div className='md:w-fit w-full mx-auto lg:mx-0'>
                    <div className='flex items-center overflow-clip gap-6'>
                        <h2 className="text-5xl tracking-tight md:text-nowrap mx-auto md:mx-0 font-medium text-[#2FC980]">
                            HIRE DEDICATED
                        </h2>
                        <Divider sx={{
                            borderWidth: 2,
                            borderColor: '#2FC980',
                            display: { md: 'inline-block', xs: 'none' },
                            width: '100%'
                        }} />
                    </div>
                    <h1 className="text-4xl lg:text-[5.5rem] leading-24 font-extrabold">
                        DEVELOPERS
                    </h1>
                </div>

                <p className="text-[1rem] mt-1">
                    Top 1% Pre-Vetted, In-House & Dedicated Software Programmers
                </p>

                <p className="mt-4  text-sm/loose font-light max-w-2xl mx-auto">
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                    Industry. Lorem Ipsum Has Been The Industry&apos;s Standard Dummy Text Ever
                    Since The 1500s, When An Unknown Printer Took A Galley Of Type And
                    Scrambled
                </p>

                <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-4">
                    <Button
                        name='button'
                        endIcon={<MdArrowOutward size={16} />}
                        sx={{
                            textTransform: 'initial',
                            fontSize: '0.9rem',
                            background: 'rgba(255, 140, 145, 1)',
                            px: 3,
                            py: 1.1,
                            color: 'white',
                            fontWeight: 500,
                            letterSpacing: '0.2px'
                        }}
                    >
                        View More
                    </Button>
                    <Button
                        name='button'
                        endIcon={<MdArrowOutward size={16} />}
                        sx={{
                            textTransform: 'initial',
                            fontSize: '0.9rem',
                            border: '2px solid rgba(45, 198, 125, 1)',
                            px: 3,
                            py: 1.1,
                            color: 'inherit',
                            fontWeight: 500,
                            letterSpacing: '0.2px'
                        }}
                    >
                        Get In Touch
                    </Button>

                </div>
            </div>

            {/* Right Section - Form */}
            <div className="flex-[0.6] md:mx-auto  max-w-lg z-10 w-full bg-white shadow-[0px_4px_250px_0px_#FFC7C987] rounded-2xl p-8 pt-5">
                <h3 className="text-[1.2rem] font-semibold text-center">
                    Create Your Team
                </h3>
                <p className="text-gray-500 text-center text-[0.75rem] mt-1">
                    Lorem Ipsum Is Simply Dummy Text Of The Printing
                </p>

                <form className="mt-10 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormLabel title='full name'>
                            <p className='text-[0.78rem] mb-0.5 text-gray-900 font-[500]'>Full Name</p>
                            <TextField
                                slotProps={{
                                    input: { style: { fontSize: '0.8rem' } }
                                }}
                                size='small' placeholder=" Enter Your Name" variant="outlined" fullWidth />
                        </FormLabel>
                        <FormLabel title='Email Address'>
                            <p className='text-[0.78rem] mb-0.5 text-gray-900 font-[500]'>Email Address</p>
                            <TextField
                                slotProps={{
                                    input: { style: { fontSize: '0.8rem' } }
                                }}
                                size='small' placeholder=" Enter Your Email" variant="outlined" fullWidth />
                        </FormLabel>
                        <FormLabel title='Phone No'>
                            <p className='text-[0.78rem] mb-0.5 text-gray-900 font-[500]'>Phone No</p>
                            <TextField
                                slotProps={{
                                    input: { style: { fontSize: '0.8rem' } }
                                }}
                                size='small' placeholder=" Enter Your Number " variant="outlined" fullWidth />
                        </FormLabel>
                        <FormLabel title='Country'>
                            <p className='text-[0.78rem] mb-0.5 text-gray-900 font-[500]'>Country</p>
                            <TextField
                                slotProps={{
                                    input: { style: { fontSize: '0.8rem' } }
                                }}
                                size='small' placeholder='Enter Your Country' variant="outlined" fullWidth />
                        </FormLabel>
                    </div>
                    <FormLabel title='Project Brief'>
                        <p className='text-[0.78rem] mb-0.5 text-gray-900 font-[500]'>Project Brief</p>
                        <TextField
                            placeholder="Enter Your Project Project Brief"
                            variant="outlined"
                            fullWidth
                            slotProps={{
                                input: { style: { fontSize: '0.8rem' } }
                            }}
                            multiline
                            rows={3}
                        />
                    </FormLabel>


                    <Button
                        type="submit"
                        name='button'
                        variant="contained"
                        endIcon={<MdArrowOutward size={16} />}
                        sx={{
                            backgroundColor: "#FF252F87",
                            textTransform: "none",
                            fontWeight: "500",
                            py: 1.3,
                            borderRadius: "0.5rem",
                            width: "100%",
                            mt: 3,
                            "&:hover": { backgroundColor: "#FF262F77" },
                        }}
                    >
                        Hire Software Developer
                    </Button>
                </form>
            </div>

            <Image
                alt='hero section background'
                src={'/heroSection_bg.png'}
                fill
                className='object-cover aspect-[1140/641] -z-10'
            />
        </section>
    )
}
