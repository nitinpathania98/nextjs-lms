import { Image } from '@fluentui/react';
import React from 'react';
import SignoutButton from '@/components/SignOutButton';
import Link from 'next/link';
import DropdownNotification from '../../components/DropdownNotification';

export default function Navbar() {
    return (
        <>
            <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-black bg-transparent border rounded-none shadow-md h-max border-white/80 backdrop-blur-2xl lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Link href="https://cipherstudio.net/" className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
                        Cipher Studio
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className='img'>
                            <Image
                                width={80}
                                height={30}
                                src="/logo.jpg"
                                alt="logo"
                            />
                        </div>
                        <div className="flex items-center gap-3 2xsm:gap-7">
                            <ul className="flex items-center gap-2 2xsm:gap-4">
                                {/* Place any additional menu items here */}
                                <DropdownNotification />
                            </ul>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <SignoutButton />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
