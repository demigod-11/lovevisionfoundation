'use client'
import Link from "next/link";
// Make sure this path is correct for your project structure
import LogoWithName from "./logo-with-name-component"; 
import { usePathname } from 'next/navigation';
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

// A reusable component for social media icons
const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="
        w-12 h-12 rounded-full border border-gray-200 
        flex items-center justify-center 
        text-gray-800 
        transition-colors duration-300 
        hover:bg-gray-100 hover:border-gray-400
      "
    >
        {children}
    </a>
);


export default function NavComponent() {
    const [isOpen, setIsOpen] = useState(false);
    
    // Links for the desktop navigation bar
    const desktopLinks = [
        { name: "About us", href: "/about" },
        { name: "Our Arms", href: "/ourarms" }
    ];

    // Links for the full-screen mobile menu (includes "Contact Us")
    const mobileLinks = [
        { name: "About Us", href: "/about" },
        { name: "Our Arms", href: "/ourarms" },
        { name: "Contact Us", href: "#contact-us" }
    ];
    
    // Social media links with embedded SVG icons
   const socialLinks = [
    { 
        name: "Tiktok", 
        href: "https://www.tiktok.com/@lovevisionfoundatn", 
        icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 448 512">
                <path d="M448 209.9a210.1 210.1 0 0 1-122.8-39.3v178.7a162.6 162.6 0 1 1-162.6-162.6V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A121.2 121.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
            </svg>
        ) 
    },
    { 
        name: "Facebook", 
        href: "https://www.facebook.com/LoveVisionFoundation", 
        icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
            </svg>
        ) 
    },
    { 
        name: "Instagram", 
        href: "https://www.instagram.com/lovevisionfoundatn/?utm_source=qr&r=nametag", 
        icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069 1.645-.069-4.85s.011-3.584.069 4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.359-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.359-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
            </svg>
        ) 
    },
    { 
        name: "YouTube", 
        href: "https://youtube.com/@lovevisionfoundation?si=olqrpUS0-ODy3IA0", 
        icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
        ) 
    }
];

    const pathname = usePathname();

    return (        
        <>
            {/* --- Main Header Bar (Visible on all screen sizes) --- */}
            {/* <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm max-w-screen"> */}
            <header className="absolute top-0 left-0 right-0 z-50  max-w-screen">
            
                <div className="mx-auto flex flex-row items-center justify-between gap-4 p-4 px-[5%]">
                    <LogoWithName />

                    {/* Hamburger Icon (Mobile Only) - Opens the overlay */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(true)} aria-label="Open menu" className="rounded-full bg-white/90 p-2 shadow-sm cursor-pointer">
                           <Bars3Icon className="h-8 w-8 text-gray-800" />
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-2 rounded-full bg-white/90 p-2 shadow-sm">
                        {desktopLinks.map(link => (
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
            </header>

            {/* --- Mobile Overlay Menu (Visible only when 'isOpen' is true) --- */}
            {isOpen && (
                <div 
                    id="mobile-menu"
                    className="fixed inset-0 z-[60] bg-[#f8f5f1] flex flex-col justify-between p-4"
                >
                    {/* Top Section: Logo and Close Button */}
                    <div className="flex justify-between items-center px-[calc(5%-1rem)]">
                        <LogoWithName />
                        <button onClick={() => setIsOpen(false)} aria-label="Close menu" className="rounded-full bg-white/90 p-2 shadow-sm cursor-pointer">
                            <XMarkIcon className="h-8 w-8 text-gray-800" />
                        </button>
                    </div>

                    {/* Middle Section: Navigation Links */}
                    <nav className="flex flex-col items-start px-[calc(5%-1rem)] -mt-20">
                        {mobileLinks.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)} // Close menu on link click
                                className="py-4 text-4xl font-bold text-gray-900"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Bottom Section: Social Media Icons */}
                    <div className="flex items-center gap-8 px-[calc(5%-1rem)] mb-8">
                        {socialLinks.map(social => (
                            <SocialIcon key={social.name} href={social.href}>
                                {social.icon}
                            </SocialIcon>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}