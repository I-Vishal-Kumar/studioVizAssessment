import Grid from "@mui/material/Grid";
import Image from 'next/image';
import React from 'react'


const categories = [
    {
        title: "Backend Development",
        bgColor: "#F3F5FF",
        borderColor: "#B0BDFF",
        imageSrc: "backend.png",
        technologies: [
            ".NET", "C/C++", "DJANGO", "Firebase", "GOLANG",
            "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON",
            "RUBY ON RAILS", "JAVA"
        ]
    },
    {
        title: "Fronted Development",
        bgColor: "#FFF3E6",
        borderColor: "#FFC093",
        imageSrc: "frontend.png",
        technologies: [
            ".NET", "C/C++", "DJANGO", "Firebase", "GOLANG",
            "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON",
            "RUBY ON RAILS", "JAVA"
        ]
    },
    {
        title: "Mobile Development",
        bgColor: "#FBEEFD",
        borderColor: "#F6BCFF",
        imageSrc: "mobileDevelopment.png",
        technologies: [
            ".NET", "C/C++", "DJANGO", "Firebase", "GOLANG",
            "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON",
            "RUBY ON RAILS", "JAVA"
        ]
    },
    {
        title: "Blockchain, Ai/ML",
        bgColor: "#EFFDFF",
        borderColor: "#9FF3FF",
        imageSrc: "blockchain.png",
        technologies: [
            ".NET", "C/C++", "DJANGO", "Firebase", "GOLANG",
            "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON",
            "RUBY ON RAILS", "JAVA"
        ]
    },
    {
        title: "DevOps & Low-Code",
        bgColor: "#FBFFF1",
        borderColor: "#FFDAA2",
        imageSrc: "devops.png",
        technologies: [
            ".NET", "C/C++", "DJANGO", "Firebase", "GOLANG",
            "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON",
            "RUBY ON RAILS", "JAVA"
        ]
    },
    {
        title: "E-commerce & CMS",
        bgColor: "#FFBCBC42", // light cream
        borderColor: "#FFBCBC",
        imageSrc: "ecommerce.png",
        technologies: [
            ".NET", "C/C++", "DJANGO", "Firebase", "GOLANG",
            "SYMFONY", "LARAVEL", "NODE", "PHP", "PYTHON",
            "RUBY ON RAILS", "JAVA"
        ]
    }
];


export default function TechSection() {
    return (
        <section className='relative z-10 lg:px-28 px-5 md:py-5 py-20 pb-10 '>
            <h2 className="text-3xl lg:text-[2.7rem] font-semibold text-center">
                Our Diverse Technology Competency
            </h2>
            <p className="text-center text-sm/loose text-gray-600 mt-4 max-w-2xl mx-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since
            </p>
            <Grid container spacing={3} mt={6}>
                {categories.map((catagory) => (
                    <Grid
                        size={{ xs: 12, sm: 6, md: 4 }}
                        key={catagory.title}
                    >
                        <TechCard
                            imageSrc={`/techs/${ catagory.imageSrc }`}
                            primaryColor={catagory.borderColor}
                            secondaryColor={catagory.bgColor}
                            techList={catagory.technologies}
                            title={catagory.title}
                        />
                    </Grid>
                ))}
            </Grid>
        </section>
    )
}


const TechCard = ({ imageSrc, title, primaryColor, secondaryColor, techList }: {
    imageSrc: string;
    title: string;
    secondaryColor: string;
    primaryColor: string;
    techList: string[]
}) => {

    return (
        <div
            className={`rounded-[4px] p-2 hover:scale-102 transition-transform rounded-b-none shadow-[0px_4px_30px_0px_#e0e0e0] hover:shadow-[0px_4px_30px_0px_#d2d2d2] border-b-6`}
            style={{ borderColor: primaryColor, background: secondaryColor }}
        >
            <div className="items-center gap-3 p-4">
                <Image
                    height={40}
                    width={40}
                    className='mb-4'
                    src={imageSrc}
                    alt={title}
                />
                <h2 className="text-lg font-semibold text-gray-700">
                    {title}
                </h2>
            </div>

            <div className="px-4 pb-4 flex flex-wrap  gap-x-3 gap-y-2">
                {techList.map((tech, index) => (
                    <span
                        key={index}
                        className="text-xs/relaxed tracking-tight text-gray-900"
                    >
                        {tech}
                        {index !== techList.length - 1 && (
                            <span className="ml-2 text-gray-300">|</span>
                        )}
                    </span>
                ))}
            </div>
        </div>
    );
};
