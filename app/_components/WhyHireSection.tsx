import React from 'react'
import { FiCheckCircle } from "react-icons/fi";
import { Box, Grid, List, ListItem, ListItemText } from "@mui/material";
import { MdArrowOutward } from 'react-icons/md';
import Image from 'next/image';

const reasons = [
    "English Speaking Programmers",
    "Flexible Work Hours",
    "Rapid Onboarding Process",
    "Expertise In Top Technologies",
    "Reliable Partner Credentials",
];

export default function WhyHireSection() {
    return (
        <section className='relative z-10 md:py-5 py-20 pt-0'>
            <Box className="bg-[#00003C] relative text-[#FFFFFF] py-35 pb-25">
                <Grid container spacing={6} alignItems="center">


                    {/* Left side image placeholder */}
                    <Grid size={{ xs: 12, md: 6 }} >
                        <h3 className='md:absolute lg:left-25 top-10 not-md:leading-normal lg:text-[2.5rem]/relaxed text-5xl text-center lg:text-start font-semibold w-full'>
                            Why Hire Software Developers <br /> In India?
                        </h3>
                        <div
                            className='absolute md:block hidden h-[95%] w-full top-0 left-0 lg:w-2/3'>
                            <Image
                                alt='why hire us'
                                src={'/whyHireHero_bg.png'}
                                fill
                                className='object-scale-down'
                            />
                        </div>
                    </Grid>

                    <Grid size={{ xs: 8, sm: 8, md: 8, lg: 4 }} sx={{ mx: 'auto' }} >

                        <List className="space-y-4">
                            {reasons.map((reason, idx) => (
                                <ListItem
                                    key={idx}
                                    disableGutters
                                    className="flex justify-between pl-0 ml-0 items-center border-b border-white/20 pb-2"
                                >
                                    <ListItemText
                                        primary={
                                            <span className="text-lg/loose font-[500] leading-[20px] text-amber-50">{reason}</span>
                                        }
                                    />
                                    <MdArrowOutward className="text-white/80" />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </Box>
            <div className='md:flex py-20 lg:px-30 md:px-0 px-10 gap-5'>
                <div className='relative flex-[0.6] not-md:h-80'>
                    <Image
                        src={'/companyTrust_hero_bg.png'}
                        fill
                        alt='who company trust'
                        className='object-contain lg:scale-140 md:scale-120'
                    />
                </div>
                <div className='flex-[1] space-y-5'>
                    <h3 className='text-3xl/normal font-semibold not-md:text-center'>Top Companies Trust Value Coders For Hiring Software Developers</h3>
                    <p className='font-light text-sm/relaxed tracking-tight'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className='grid grid-cols-2 not-md:grid-cols-1 w-full not-md:grid-rows-subgrid grid-rows-3 gap-y-4 ' >
                        {
                            [
                                'Client-centric Approach',
                                "Best-In-Class Project Management",
                                "Global Quality Standards",
                                "Time-Zone Compatibility",
                                'Cutting-Edge Ingrastructure',
                                'Agile Adaptability'
                            ].map(title => (
                                <div key={title} className='flex items-center gap-5'>
                                    <FiCheckCircle color='#2FC980' size={18} />
                                    <p className=' text-sm font-[500] text-nowrap text-gray-600'>{title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}
