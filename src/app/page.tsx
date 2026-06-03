"use client"
import { calSansFont, googleSansFont } from "./(fonts)/fonts.config";
import CardComponent from "./(shared)/components/card-component";
import NavComponent from "./(shared)/components/nav-component";
import FooterComponent from "./(shared)/components/footer-component";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

function TopMenuComponent(){
    // --- Step 1: Add your image URLs here ---
    const images = [
        '/cover-img-1.webp', // The image of the children
        '/cover-img-2.webp', // The image with the hands
        '/cover-img-3.webp',  // Add the path to your third image
        '/cover-img-4.webp'// Add the path to your fourth image
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // This hook handles the automatic sliding every 8 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            // Move to the next image, looping back to the start if at the end
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000); // 8000 milliseconds = 8 seconds

        // This cleanup function is important to prevent memory leaks
        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
         <section className="relative flex flex-col h-screen text-white">
            {/* Container for the background images */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`
                        absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out
                        ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
                    `}
                    style={{ backgroundImage: `url(${image})` }}
                />
            ))}
            
            {/* Black Overlay to ensure text is readable */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* All content sits in a relative container on top of the images and overlay */}
            <div className="relative z-10 flex h-full flex-col p-8 px-[5%]">
                <NavComponent/>

                {/* Main Content */}
                <div className="flex flex-1 flex-col items-start justify-center text-left md:max-w-[50%]">
                    <h1 className={`mb-8 text-4xl leading-tight md:text-6xl ${calSansFont.className}`}>
                        Raising a new generation through love, learning, and lasting change.
                    </h1>
                    {/* This button is now hidden on medium screens and up, as it's handled by the NavComponent */}
                    <Link 
                        href="#contact-us" 
                        className="rounded-full bg-black px-8 py-3 text-sm font-bold text-white transition-opacity duration-300 hover:opacity-85 md:hidden" 
                        scroll={true}
                    >
                        Contact us
                    </Link>
                </div>

                {/* Slider Navigation Dots */}
                <div className="flex items-center justify-center gap-3 pb-4">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`
                                h-3 w-3 rounded-full transition-colors duration-300 
                                ${index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}
                            `}
                        />
                    ))}
                </div>
            </div>
        </section>)
}

function AboutusComponent(){
    return (
         <section className={`py-20 md:py-28`}>
        <div className="container mx-auto max-w-4xl px-4 text-center">

            <div className="mb-4 flex items-center justify-center gap-2">
                <span className={`h-3 w-3 rounded-full bg-[#af3d6e] `}></span>
                <p className={`text-sm font-semibold uppercase tracking-wider  text-black`}>
                    About Us
                </p>
            </div>

            <h2 className="mb-6 text-4xl font-bold text-stone-800 md:text-5xl">
                Backing Big Hearts, Bright Ideas, and Bold Change
            </h2>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-stone-600 mb-8">
                We&apos;re a faith-driven foundation committed to transforming lives through practical love, meeting real needs, shaping brighter futures, and leading with compassion every step of the way.
            </p>

            <Link 
                href="/about" 
                className="inline-block rounded-full border border-stone-800 px-8 py-3 font-semibold text-stone-800 transition-colors hover:bg-stone-800 hover:text-white"
            >
                Read more
            </Link>
        </div>


        <div className="container mx-auto max-w-5xl px-4 mt-20">
        {/* 1. Changed from 'grid' to 'flex' and added negative space */}
        <div className="flex justify-center -space-x-8">

            {/* 2. Added explicit size and z-index on hover to each wrapper */}
            <div className="w-48 h-64 transform transition-all duration-300 hover:scale-105 hover:z-10">
                <Image height={650} width={300} 
                    src="/lvf-aboutus-1.webp"
                    alt="Man holding two small children" 
                    
                    // 3. Added a white border for separation
                    className="h-full w-full rounded-2xl object-cover shadow-lg border-4 border-white"
                />
            </div>

            <div className="w-48 h-64 transform transition-all duration-300 hover:scale-105 hover:z-10">
                <Image height={650} width={300} 
                    src="/lvf-aboutus-2.webp" 
                    alt="Group of children with an adult" 
                    className="h-full w-full rounded-2xl object-cover shadow-lg border-4 border-white"
                />
            </div>

            <div className="w-48 h-64 transform transition-all duration-300 hover:scale-105 hover:z-10">
                <Image height={650} width={300} 
                    src="/lvf-aboutus-3.webp" 
                    alt="Group photo of people in traditional attire" 
                    className="h-full w-full rounded-2xl object-cover shadow-lg border-4 border-white"
                />
            </div>

            <div className="w-48 h-64 transform transition-all duration-300 hover:scale-105 hover:z-10">
                <Image height={650} width={300} 
                    src="/lvf-aboutus-4.webp" 
                    alt="Woman holding a small child" 
                    className="h-full w-full rounded-2xl object-cover shadow-lg border-4 border-white"
                />
            </div>

        </div>
    </div>
</section>
    )
}

function FoundationWorkComponent() {
    return (<section className="py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">

            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-16">
                <div>
                    <div className="mb-4 flex items-center gap-2">
                    
                        <span className={`h-3 w-3 rounded-full bg-[#af3d6e] `}></span>
                        <p className="text-sm font-semibold uppercase tracking-wider text-black">
                            Our Arms
                        </p>
                    </div>
                    <h2 className="text-5xl font-bold text-stone-800">
                        Foundation&apos;s Work
                    </h2>
                </div>

                <div>
                    <p className="text-lg leading-relaxed text-stone-600 md:pt-2">
                        We&apos;re hands-on with everything we support, backing people and ideas that make a real impact through Love Homes, Love Revival, and Love Reform.
                    </p>
                </div>
            </div>
        </div>
    </section>)
}

function BlogComponent(){
    return (
        <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
            
            <div className="text-center mb-16">
                <div className="mb-4 flex items-center justify-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#7CA2B8]"></span>
                    <p className="text-sm font-semibold uppercase tracking-wider text-black">
                        Our Blog
                    </p>
                </div>
                <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
                    News & Stories
                </h2>
                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
                    Explore our stories of change, recent news, the work we do, and ways to make an even greater impact together.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-5">

                <div className="flex flex-col overflow-hidden rounded-2xl shadow-lg md:col-span-5 md:flex-row md:min-h-[600px]">
                    <div className="md:w-2/4">
                        <Image height={650} width={300} src="/lvf-blog-1.webp" alt="A choir singing during a concert" className="h-full w-full object-cover"/>
                    </div>
                    <div className="flex flex-col justify-center p-8 md:w-2/4 bg-[#c13f51e1] h-full">
                        <p className="mb-4 inline-block self-start rounded-full border border-white px-3 py-1 text-xs bg-[#c13f51e1] text-white font-bold">LOVE REVIVAL</p>
                        <h3 className="mb-4 text-3xl font-bold text-rose-800 text-white">Love Revival Gallery Concerts</h3>
                        <p className="text-sm text-white font-bold">Published on 17 Jun 2024 | 5.41 min read</p>
                    </div>
                </div>

                <div className="flex flex-col overflow-hidden rounded-2xl shadow-lg md:flex-row md:col-span-3">
                    <div className="md:w-2/4">
                        <Image height={650} width={300} src="/lvf-aboutus-4.webp" alt="A woman holding a small child" className="md:h-full w-full object-cover max-sm:max-h-[250px]"/>
                    </div>
                    <div className="flex flex-col justify-center p-8 md:w-2/4 bg-[#5692a6]">
                       <p className="mb-4 inline-block self-start rounded-full border border-white px-3 py-1 text-xs font-semibold text-blue-100">LOVE REFORM</p>
                        <h3 className="mb-4 text-2xl font-bold text-blue-100">Love revival gallery concert</h3>
                        <p className="text-sm text-blue-100">Published on 17 Jun 2024 | 5.41 min read</p>
                    </div>
                </div>

                <div className="overflow-hidden rounded-2xl shadow-lg md:col-span-2">
                    <Image height={650} width={300} src="/our-arms-2.webp" alt="A group photo of community members" className="h-64 w-full object-cover"/>
                    <div className="bg-[#e38c4f] p-8 h-full">
                        <p className="mb-4 inline-block self-start rounded-full border border-black px-3 py-1 text-xs font-semibold text-black">LOVE REFORM</p>
                        <h3 className="mb-4 text-2xl font-bold text-black">Be Part of a Change</h3>
                        <p className="text-sm text-black">Published on 17 Jun 2024 | 5.41 min read</p>
                    </div>
                </div>
                
            </div>

            <div className="mt-12 text-center">
                <a href="#" className="inline-block rounded-full border border-gray-400 px-8 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-800 hover:text-white hover:border-gray-800">
                    Read more
                </a>
            </div>

        </div>
    </section>
    )
}

function LoveReformComponent() {

    return (<section className="relative py-20 md:py-28">
    <div className="container mx-auto max-w-6xl px-4">
        
        <div className="absolute inset-0 z-10 flex items-center justify-center" aria-hidden="true">
            <h2 className="text-[8rem] font-black text-amber-300 opacity-50 md:text-[16rem]">
                Our Arms
            </h2>
        </div>

        <div className="relative z-20 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            
            <CardComponent title="Love Home" imageUrl="/our-arms-1.webp" altText="Donated supplies for Love Home" description="Love Home meets the physical and emotional needs of orphans and families by providing essential care, regular support, and lasting partnerships with local homes." addClassNames=""/>

            <CardComponent title="Love Reform" imageUrl="/our-arms-2.webp" altText="Donated supplies for Love Home" description="Love Reform equips children and youth with education, skills, and mentorship to help them grow, find direction, and build a stable, independent future." addClassNames=""/>


            <CardComponent title="Love Revival" imageUrl="/our-arms-3.webp" altText="Donated supplies for Love Home" description="Love Revival creates spaces for young people to encounter God through worship and fellowship, leading them into a deeper understanding of His love and purpose for their lives." addClassNames=""/>



        </div>
    </div>
</section>)
}




export default function Home() {
  return (
   <div className={`bg-[#FEF9F2] ${googleSansFont.className}`}>
    <TopMenuComponent />
    <AboutusComponent />
    <FoundationWorkComponent />
    <LoveReformComponent />
    {/* <BlogComponent /> */}
    <FooterComponent />
   </div>
  );
}