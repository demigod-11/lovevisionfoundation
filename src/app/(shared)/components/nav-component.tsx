'use client'
import Link from "next/link";
import LogoWithName from "./logo-with-name-component";
import { usePathname } from 'next/navigation';
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

// export default function NavComponent(){
//     const links = [
//         {
//         name: "About us",
//         href: "/about",
//         logoTextColor: "#0A0A0A"
//         },
//         {
//             name: "Our Arms",
//             href: "/ourarms",
//             logoTextColor: ""
//         }
//     ]

   
//     const pathname = usePathname()
//     return (        
//         <header className={`relative z-10 flex w-full items-center justify-between`}>
//             <LogoWithName/>

//             <nav className="hidden md:flex items-center gap-2 rounded-full bg-white/90 p-2">
//                 {
//                     links.map(link => (
//                         <Link key={link.href} href={link.href} className={`rounded-full px-6 py-2.5 text-sm font-bold text-gray-800 transition-colors duration-300 hover:bg-gray-200 ${link.href === pathname ? 'bg-gray-300' : ''}`}>{link.name}</Link>
//                     ))
//                 }
//                 {/* <Link href="/about" className={`rounded-full px-6 py-2.5 text-sm font-bold text-gray-800 transition-colors duration-300 hover:bg-gray-200 `}>About Us</Link>
//                 <Link href="#" className="rounded-full px-6 py-2.5 text-sm font-bold text-gray-800 transition-colors duration-300 hover:bg-gray-200">Our Arms</Link> */}
//             </nav>

//             <Link href="#" className={`rounded-full bg-black px-8 py-3 text-sm font-bold text-white border border-black/20 transition-opacity duration-300 hover:opacity-95`}>Contact us</Link>
//         </header>
//     )
// }

// components/NavComponent.tsx
// "use client"; // Add this because usePathname is a client hook

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { LogoWithName } from './LogoWithName'; // Assuming you have this component

// export default function NavComponent() {
//     const links = [
//         { name: "About us", href: "/about" },
//         { name: "Our Arms", href: "/ourarms" }
//     ];

//     const pathname = usePathname();

//     return (        
//         // Apply fixed positioning and background directly to the header
//         <header className="fixed top-0 left-0 right-0 z-50  backdrop-blur-sm">
//         {/* <header className="fixed top-0 left-0 right-0 z-50"> */}
//             {/* Inner container for padding and centering */}
//             <div className="mx-auto flex max-w-7xl items-center justify-between p-4 px-[5%]">
//                 <LogoWithName />

//                 <nav className="flex items-center gap-2 rounded-full bg-white/90 p-2 shadow-sm">
//                     {links.map(link => (
//                         <Link 
//                             key={link.href} 
//                             href={link.href} 
//                             className={`rounded-full px-6 py-2.5 text-sm font-bold text-gray-800 transition-colors duration-300 hover:bg-gray-200 ${link.href === pathname ? 'bg-gray-300' : ''}`}
//                         >
//                             {link.name}
//                         </Link>
//                     ))}
//                 </nav>

//                 <Link 
//                     href="#contact-us" 
//                     className="hidden md:inline-block md:rounded-full bg-black px-8 py-3 text-sm font-bold text-white border border-black/20 transition-opacity duration-300 hover:opacity-95"
//                 >
//                     Contact us
//                 </Link>
//             </div>
//         </header>
//     );
// }


export default function NavComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { name: "About us", href: "/about" },
        { name: "Our Arms", href: "/ourarms" }
    ];
    const pathname = usePathname();

    return (        
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm max-w-screen">
            <div className="mx-auto flex flex-row items-center justify-between gap-4 p-4 px-[5%]">
                <LogoWithName />

                {/* Hamburger and Close Icons for mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="mobile-menu">
                        {isOpen ? <XMarkIcon className="h-6 w-6 text-gray-800" /> : <Bars3Icon className="h-6 w-6 text-gray-800" />}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-2 rounded-full bg-white/90 p-2 shadow-sm">
                    {links.map(link => (
                        <Link 
                            key={link.href} 
                            href={link.href} 
                            className={`rounded-full px-6 py-2.5 text-sm font-bold text-gray-800 transition-colors duration-300 hover:bg-gray-200 ${link.href === pathname ? 'bg-gray-300' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Contact button */}
                <Link 
                    href="#contact-us" 
                    className="hidden md:inline-block rounded-full bg-black px-8 py-3 text-sm font-bold text-white transition-opacity duration-300 hover:opacity-95"
                >
                    Contact us
                </Link>
            </div>

            {/* Mobile Dropdown Menu */}
            <div 
                id="mobile-menu"
                className={`md:hidden px-8 py-3 text-sm font-bold text-white transition-opacity duration-300 hover:opacity-95 ${
                    isOpen ? '' : 'hidden'
                }`}
            >
                {links.map(link => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-md p-4 text-center font-bold text-gray-800 transition-colors duration-300  ${link.href === pathname ? 'underline' : ''}`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </header>
    );
}




