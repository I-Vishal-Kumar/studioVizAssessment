import { Facebook, LinkedIn, Twitter, YouTube } from "@mui/icons-material";
import Image from "next/image";
import { MdCall, MdLocationPin, MdMail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-black text-white ">
            {/* Main content */}
            <div className=" mx-auto px-6 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

                <div>
                    {/* Logo Placeholder */}
                    <div className="mb-4">
                        <Image
                            src={'/logo_white.png'}
                            height={43}
                            width={150}
                            alt="logo"
                        />
                    </div>
                    <p className="text-gray-300 text-sm mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    </p>
                    {/* Social icons */}
                    <div className="flex space-x-4">
                        {[Facebook, Twitter, LinkedIn, YouTube].map((Icon, idx) => (
                            <div
                                key={idx}
                                className="w-11 h-11 rounded-full bg-white  flex items-center justify-center cursor-pointer"
                            >
                                <span className="text-[#2FC980] text-xs font-bold">
                                    {<Icon sx={{ fontSize: 18 }} />}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold text-2xl tracking-wider mb-8">Quick Links</h3>
                    <ul className="space-y-5 text-white/70 text-[1rem]">
                        <li>Software Team</li>
                        <li>Technologies</li>
                        <li>Resources</li>
                        <li>Company</li>
                        <li>Contact us</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="font-semibold text-2xl tracking-wider mb-8">Services</h3>
                    <ul className="space-y-5 text-white/70 text-[1rem]">
                        <li>Dedicated Development</li>
                        <li>Staff Augmentation Services</li>
                        <li>Software Development</li>
                        <li>Development Center</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-semibold text-2xl tracking-wider mb-8">Contact Us</h3>
                    <ul className="space-y-5 text-white/70 text-[1rem]">
                        <li className="flex items-start gap-3">
                            <MdLocationPin fontSize={45} color="#2FC980" className="max-[740px]:text-3xl" />
                            Envato, Level 13, 2 Elizabeth Victoria 3000 India
                        </li>
                        <li className="flex items-center gap-3">
                            <MdCall fontSize={25} color="#2FC980" />
                            +91 861 944 1176
                        </li>
                        <li className="flex items-center gap-3">
                            <MdMail fontSize={24} color="#2FC980" />
                            ezyoga@gmail.com
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="bg-[#2FC980] text-center text-sm py-3">
                logoname. 2023. All rights reserved
            </div>
        </footer>
    );
};

export default Footer;
