// components/HeaderAndHero.tsx
import Image from 'next/image';
import NavComponent from '../(shared)/components/nav-component';
import { googleSansFont } from '../(fonts)/fonts.config';
import FooterComponent from '../(shared)/components/footer-component';

function HeroSection() {
  const images = [
    '/lvf-aboutus-1.png',
    '/lvf-aboutus-2.png',
    '/lvf-aboutus-3.png'
  ];

  // An array of rotation classes to apply to each image
  const rotationClasses = ['-rotate-[8deg]', 'rotate-0', 'rotate-[8deg]'];

  return (
    <section className="bg-[#FBF9F6] min-h-screen flex items-center justify-center relative overflow-hidden  pb-12 pt-10">
      <div className="w-full max-w-4xl text-center z-10">
        <div className="bg-[#F6EFF2]/50 rounded-full aspect-square w-full max-w-3xl mx-auto p-8 sm:p-16 flex flex-col justify-center items-center">
          
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-tight mb-12 px-4">
            Love Vision Foundation carries out its mission through three key arms: Love Homes, Love Reform, and Love Revival.
          </h1>

          <div className="flex justify-center items-center -space-x-8">
            {images.map((src, index) => (
              <div 
                key={index} 
                // Conditionally add the rotation class based on the image's index
                className={`w-40 h-32 rounded-2xl overflow-hidden shadow-lg border-4 border-white transform hover:scale-105 hover:z-20 transition-transform ${rotationClasses[index]}`}
                style={{ zIndex: images.length - index }}
              >
                <img
                  src={src}
                  alt={`Community initiative ${index + 1}`}
                  width={160}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          
        </div>

        <div>
            <h1 className="py-2 text-3xl md:text-4xl font-semibold text-gray-800 leading-tight mb-12 px-4">
                Each arm addresses a unique need, working together to provide care, empowerment, and spiritual growth for children, youth, and families.
            </h1>
        </div>
      </div>
    </section>
  );
};

// components/FeatureSection.tsx

// 1. Define the props interface for type safety
interface FeatureSectionProps {
  sectionNumber: number;
  title: string;
  description: string;
  points: string[];
  imageUrl: string;
  reverse?: boolean; // Optional prop to reverse the layout
}

// 2. The reusable component
const FeatureSection: React.FC<FeatureSectionProps> = ({
  sectionNumber,
  title,
  description,
  points,
  imageUrl,
  reverse = false, // Default to false if not provided
}) => {
  return (
    <section className="bg-[#FBF9F6] py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content Column */}
        {/* Conditionally apply `lg:order-last` if the reverse prop is true */}
        <div className={`text-left ${reverse ? 'lg:order-last' : ''}`}>
          <div className="flex items-center mb-4">
            <span className="h-3 w-3 bg-[#8C4A69] rounded-full mr-3"></span>
            <p className="font-bold text-gray-800">{sectionNumber}</p>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {title}
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
          
          <ul className="space-y-4 text-gray-700 list-disc list-inside">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        
        {/* Image Column */}
        <div>
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
            <img 
              src={imageUrl}
              alt={title} // Use the title for a descriptive alt tag
              // fill
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};


function FoundationWorkComponent(){
  const supportPoints: string[] = [
    'We partner with orphanages and families in crisis to provide consistent support.',
    'We conduct bi-monthly visits to orphanages and monthly visits to families, bringing food, clothing, educational materials, and medical care.',
    'We maintain regular contact to ensure the well-being of children and families under our care.',
  ];

  const supportPoints2: string[] = [
    'Educational Support: We sponsor students in public schools who are struggling to pay their fees, ensuring they can continue their studies. New candidates are enrolled into the programme every September.',
    'Skills Acquisition: We connect individuals with vocational training centers, apprenticeships, and workshops to help them learn trades or professional skills such as tailoring, carpentry, baking, or technology.',
    'Career Development: We support youths with job interview preparation, CV writing, and entrepreneurship guidance.',
  ];

  const supportPoints3: string[] = [
    'We organize worship nights, drama productions, and youth outreach events in partnership with churches and youth ministries.',
    'Volunteers serve in music, drama, ushering, event planning, and prayer teams.',
    'We also connect new believers to local churches for spiritual growth while supporting them through Love Reform for social empowerment.',
  ];
  return (<section className="bg-[#FBF9F6] py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-4">
          <span className="h-3 w-3 bg-[#8C4A69] rounded-full mr-3"></span>
          <p className="text-sm font-semibold tracking-wider uppercase text-gray-600">
            Our Arms
          </p>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Foundation’s Work
        </h2>

        
      </div>


      <FeatureSection 
          sectionNumber={1} 
          title='Love Homes - Caring for the Needy' 
          description='One of the things we do at Love Vision Foundation is live out scripture daily. According to James 1:27, we are admonished to “look after orphans, widows, and those in distress.” This arm of our organization puts that scripture into action. Through Love Homes:'
          points={supportPoints} reverse={false} imageUrl='/about-us-what-we-do.jpg' />

        <FeatureSection 
          sectionNumber={2} 
          title='Love Reform - Transforming Lives Through Knowledge' 
          description='At Love Vision Foundation, we believe that the will of the Father is that all men be saved, not only spiritually, but also through a transformed life. The Bible tells us in Romans 12:2 to “be transformed by the renewing of your mind.” One of the ways we live out this scripture is by ensuring that no one is left idle, because an idle mind, as we know, becomes the devil’s workshop. Through Love Reform, we empower individuals especially youths, to discover and fulfill their God-given potential:'
          points={supportPoints2} reverse={true} imageUrl='/about-us-what-we-do.jpg' />


          <FeatureSection 
          sectionNumber={3} 
          title='Love Revival - Awakening Hearts to God’s Love' 
          description='At Love Vision Foundation, we believe that living for God means not only caring for physical needs but also nurturing the spirit. James 1:27b reminds us to “keep oneself from being polluted by the world”, and Romans 12:2 calls us to “be transformed by the renewing of your mind. Through Love Revival, we use every avenue possible to draw young people closer to God:'
          points={supportPoints3} reverse={false} imageUrl='/about-us-what-we-do.jpg' />
    </section>)
}

// 4. A component to render both for preview
export default function HomePage() {
  return (
    <div className={`bg-[#FEF9F2] ${googleSansFont.className} text-black`}>
      {/* <Header /> */}
      <div>
        <NavComponent />
      </div>
      <HeroSection />
      <FoundationWorkComponent />
      <FooterComponent />
    </div>
  );
}