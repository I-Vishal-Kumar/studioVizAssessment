'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import { FaHamburger } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'
import { IoIosArrowDown } from 'react-icons/io'
import { Button } from '@mui/material'
import { MdArrowOutward } from 'react-icons/md'
import Image from 'next/image'

const products = [
    { name: 'Services', description: 'Get a better understanding of your traffic', href: '#', icon: <></> },
    { name: 'Technologies', description: 'Speak directly to your customers', href: '#', icon: <></> },
    { name: 'Resources', description: 'Your customers’ data will be safe and secure', href: '#', icon: <></> },
    { name: 'company', description: 'Connect with third-party tools', href: '#', icon: <></> },
]
const callsToAction = [
    { name: 'Watch demo', href: '#' },
    { name: 'Contact sales', href: "#" },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className='shadow-2xl/20 shadow-gray-800'>
            <nav aria-label="Global" className="mx-auto flex items-center justify-between p-6 py-3 lg:px-30">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5 flex items-center gap-3">
                        <Image
                            alt='logo'
                            src={'/logo.png'}
                            height={43}
                            width={155}
                            priority
                        />
                    </a>
                </div>
                <div>
                    <div className="flex lg:hidden">
                        <button
                            name='button'
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                        >
                            <span className="sr-only">Open main menu</span>
                            <FaHamburger />
                        </button>
                    </div>
                    <PopoverGroup className="hidden lg:flex z-20 items-center lg:gap-x-5">
                        <Popover className="relative">
                            <PopoverButton className="flex items-center gap-x-1 text-[1rem]">
                                Software Team
                                <IoIosArrowDown className='self-baseline-last font-thin ' />
                            </PopoverButton>

                            <PopoverPanel
                                transition
                                className="absolute left-1/2 z-20 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg outline-1 outline-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                            >
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50"
                                        >
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold ">
                                                    {item.name}
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {callsToAction.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </PopoverPanel>
                        </Popover>

                        <a href="#" className="text-[1rem]">
                            Services
                        </a>
                        <a href="#" className="text-[1rem]">
                            Technologies
                        </a>
                        <a href="#" className="text-[1rem]">
                            Resources
                        </a>
                        <a href="#" className="text-[1rem]">
                            Company
                        </a>
                        <div className="hidden lg:flex ">
                            <Button
                                name='button'
                                endIcon={<MdArrowOutward size={20} />}
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
                    </PopoverGroup>

                </div>

            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <Image
                                alt='logo'
                                src={'/logo.png'}
                                height={43}
                                width={155}
                                priority
                            />
                        </a>
                        <button
                            type="button"
                            name='button'
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            {/* <XMarkIcon aria-hidden="true" className="size-6" /> */}
                            <CgClose />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        Product
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...products, ...callsToAction].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pr-3 pl-6 text-md/7 font-semibold text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Features
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Marketplace
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Company
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
