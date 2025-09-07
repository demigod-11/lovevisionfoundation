import Image from "next/image";
export default function CardComponent({ title, description, imageUrl, altText, addClassNames } : { title: string, description: string, imageUrl: string, altText: string, addClassNames: string }) {
    return (
        <div className={`overflow-hidden rounded-3xl bg-white shadow-lg ${addClassNames}`}>
                <Image width={596} height={488} className="h-56 w-full object-cover" src={`${imageUrl}`} alt={altText}/>
                <div className="p-6 md:p-8">
                    <h3 className="mb-2 text-2xl font-bold text-gray-800">{title}</h3>
                    <p className="text-base leading-relaxed text-gray-600">{description}</p>
                </div>
            </div>
    );
}