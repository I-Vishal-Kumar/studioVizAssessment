import Image from 'next/image'
import React from 'react'
// HireProcess.tsx
import { Box, Stack, Badge } from "@mui/material";
import {
    PersonOutline,
    CodeRounded,
    GroupOutlined,
    OpenInFullRounded,
} from "@mui/icons-material";
import { FaArrowDownLong, FaArrowRightLong } from 'react-icons/fa6';


export default function HiringProcessSection() {
    return (
        <section className='relative z-10 px-5 py-20 pb-10 min-h-[60vh]'>
            <h2 className="text-3xl lg:text-[2.7rem] font-semibold text-center">
                Our Hiring Process
            </h2>
            <p className="text-center text-sm/loose text-gray-600 mt-4 mx-auto">
                Take a look at our simple and straightforward process to hire software developers from ValueCoders.
            </p>
            <HireProcess />
            <Image
                alt='hero section background'
                src={'/hiringProcess_bg.png'}
                fill
                className='object-cover -z-10'
            />
        </section>
    )
}


type Step = {
    title: string;
    desc: string;
    Icon: typeof PersonOutline;
};

const steps: Step[] = [
    { title: "INQUIRY", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", Icon: PersonOutline },
    { title: "SELECT DEVELOPERS", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", Icon: CodeRounded },
    { title: "TEAM INTEGRATION", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", Icon: GroupOutlined },
    { title: "TEAM SCALING", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", Icon: OpenInFullRounded },
];

function StepCard({ step, index }: { step: Step; index: number }) {
    const { Icon } = step;
    return (
        <Stack alignItems="center" className="w-full space-y-4 relative">
            {/* Numbered circle */}
            <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                badgeContent={
                    <div className="w-10 h-10 text-lg rounded-full bg-[#FF8C91] text-white font-bold grid place-items-center shadow ring-4 ring-white">
                        {index + 1}
                    </div>
                }
            >
                <Box
                    className="
                        rounded-full grid place-items-center
                        border-[7px] border-[#2FC980]
                        w-40 h-40 not-md:w-30 not-md:h-30 bg-white
                    ">
                    <Icon sx={{
                        fontWeight: 400,
                        fontSize: { md: 50, sm: 40, xs: 30 }
                    }} />
                </Box>
            </Badge>

            {/* Title */}
            <h4 className="font-semibold text-lg tracking-wide text-center uppercase text-slate-800">
                {step.title}
            </h4>

            <h5 className="text-center text-sm/relaxed max-w-xs text-slate-600">
                {step.desc}
            </h5>
            <div className='min-[540px]:absolute top-[30%] -right-3'>
                <StepArrow isLast={index === steps.length - 1} />
            </div>

        </Stack>
    );
}

function StepArrow({ isLast }: { isLast: boolean }) {
    if (isLast) return null;
    return (
        <Box className="flex items-center justify-center">
            <FaArrowDownLong
                className="hidden max-[540px]:block text-gray-600/60 text-2xl"
            />
            <FaArrowRightLong
                className="hidden min-[540px]:block text-gray-600/60 text-2xl"
            />
        </Box>
    );
}

function HireProcess() {
    return (
        <Box className="mx-auto py-8 mt-6">
            <Stack
                sx={{ justifyContent: 'center' }}
                direction={'row'}
                flexWrap={'wrap'}
                width={'100%'}
                rowGap={2}
            >
                {steps.map((step, i) => (
                    <div className='w-70' key={step.title}>
                        <StepCard step={step} index={i} />
                    </div>
                ))}
            </Stack>
        </Box>
    );
}
