import { SendUsAMessageFormComponent } from "@/app/(shared)/components/send-us-a-message-component";
import LogoWithName from "./logo-with-name-component";

export default function FooterComponent(){
    return (<footer className="bg-black text-gray-300 px-8 py-16 lg:px-16 rounded-t-[20px]" id="contact-us">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">

            <div className="flex flex-col justify-between space-y-8 lg:col-span-1">
            <div>
                <LogoWithName />

                <div className="flex space-x-4 mt-[20px]">
                <a href="#" aria-label="LinkedIn" className="h-10 w-10 flex items-center justify-center border border-gray-700 rounded-full hover:bg-gray-800 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                </a>
                <a href="#" aria-label="Facebook" className="h-10 w-10 flex items-center justify-center border border-gray-700 rounded-full hover:bg-gray-800 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
                    </svg>
                </a>
                <a href="#" aria-label="Instagram" className="h-10 w-10 flex items-center justify-center border border-gray-700 rounded-full hover:bg-gray-800 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.359-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.359-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
                    </svg>
                </a>
                <a href="#" aria-label="YouTube" className="h-10 w-10 flex items-center justify-center border border-gray-700 rounded-full hover:bg-gray-800 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                </a>
                </div>
            </div>
            
            <div>
                <nav className="flex flex-wrap text-sm gap-x-4 gap-y-1 mb-4">
                <a href="#" className="hover:underline">Contact</a>
                <span>/</span>
                <a href="#" className="hover:underline">FAQs</a>
                <span>/</span>
                <a href="#" className="hover:underline">News & Stories</a>
                <span>/</span>
                <a href="#" className="hover:underline">Terms of use</a>
                </nav>
                <p className="text-sm text-gray-500">&copy; Love Vision Foundation 2025. All Rights Reserved</p>
            </div>
            </div>

            <div className="lg:col-span-2">
            <h2 className="text-3xl font-semibold text-white mb-4 flex items-center">
                <span className="text-white mr-3">&bull;</span> Send us a message
            </h2>
            <p className="mb-8 max-w-md">
                We appreciate your interest in the Love Vision Foundation. We respond to requests for information in the order they are received.
            </p>

            <SendUsAMessageFormComponent />
            </div>

        </div>
    </footer>)
}