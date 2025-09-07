import { SendUsAMessageFormComponent } from "@/app/(shared)/components/send-us-a-message-component";
import LogoWithName from "./logo-with-name-component";

export default function FooterComponent(){
    return (<footer className="bg-black text-gray-300 px-8 py-16 lg:px-16 rounded-t-[20px]" id="contact-us">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">

            <div className="flex flex-col justify-between space-y-8 lg:col-span-1">
            <div>
                <LogoWithName />

                <div className="flex space-x-4 mt-[20px]">
                <a href="https://www.tiktok.com/@lovevisionfoundatn" aria-label="Tiktok" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition-colors hover:bg-gray-800">
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 448 512">
    <path d="M448 209.9a210.1 210.1 0 0 1-122.8-39.3v178.7a162.6 162.6 0 1 1-162.6-162.6V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A121.2 121.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
  </svg>
</a>
                <a href="https://www.facebook.com/LoveVisionFoundation" aria-label="Facebook" className="h-10 w-10 flex items-center justify-center border border-gray-700 rounded-full hover:bg-gray-800 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
                    </svg>
                </a>
                <a href="https://www.instagram.com/lovevisionfoundatn/?utm_source=qr&r=nametag" aria-label="Instagram" className="h-10 w-10 flex items-center justify-center border border-gray-700 rounded-full hover:bg-gray-800 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.359-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.359-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
                    </svg>
                </a>
                <a href="https://youtube.com/@lovevisionfoundation?si=olqrpUS0-ODy3IA0" aria-label="YouTube" className="h-10 w-10 flex items-center justify-center border border-gray-700 rounded-full hover:bg-gray-800 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                </a>
                </div>
            </div>
            
            <div className="hidden lg:block">
               
                <p className="text-sm text-white-500">&copy; Love Vision Foundation 2025. All Rights Reserved</p>
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
            <div className="lg:hidden md:block ">
               
                <p className="text-sm text-white-500">&copy; Love Vision Foundation 2025. All Rights Reserved</p>
            </div>
        </div>
    </footer>)
}