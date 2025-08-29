import { List, ListItem } from '@mui/material'
import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'

export default function UserGuideSection() {
    return (
        <section className='relative z-10 px-5 py-20 pb-10 '>
            <h2 className="text-2xl lg:text-[2.4rem] font-semibold text-center">
                User Guide to Hire Dedicated Software Developers
            </h2>

            <div className='flex mt-10 lg:px-20 gap-x-10'>
                <div className='flex-[0.5] hidden sm:block'>
                    <List>
                        {[
                            'Benefits of Hiring Developers',
                            'Key Factors to Consider While Hiring',
                            "Defining Your project requirements",
                            "Choosing the right development model",
                            'Typical challenges for hiring Developers',
                            "Communication with remove developers",
                            "hiring freelancers Vs. Dedicated developers"
                        ].map(title => (
                            <ListItem
                                key={title}
                                title={title}
                                sx={{
                                    py: 2,
                                    ':hover': {
                                        bgcolor: '#2FC980',
                                        '& p': {
                                            color: 'white',
                                        },
                                    },
                                }}
                            >
                                <p className="capitalize text-inherit text-[0.78rem]">{title}</p>
                            </ListItem>
                        ))}
                    </List>
                </div>
                <div className='flex-[1] pt-6'>
                    <h5 className='text-xl font-[500] text-center md:text-start'>Benefits Of Hiring Developers</h5>
                    <div className='flex-[1] space-y-5 mt-4'>
                        <p className='font-light text-sm/relaxed tracking-tight'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
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
                                        <FiCheckCircle color='#2FC980' size={15} />
                                        <p className=' text-[0.84rem] font-[500] text-nowrap text-gray-600'>{title}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
