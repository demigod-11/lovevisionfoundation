import FooterComponent from "../(shared)/components/footer-component";
import NavComponent from "../(shared)/components/nav-component";
import { googleSansFont } from "../(fonts)/fonts.config";


function AboutUsIntroComponent(){
    return (

            <div className="bg-[#FBF9F6] py-16 px-6 sm:px-8">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-tight mb-8">
                    Our vision is to ‘bring the world to God’s Love’ Eph 3:19 through practical action.
                    </h2>
                    
                    <div className="w-full">
                    <img 
                        src="/about-us-banner.jpg" 
                        alt="A group of volunteers posing for a photo" 
                        className="w-full h-auto rounded-3xl shadow-lg object-cover"
                    />
                    </div>
                </div>
            </div>
        )
}

function AboutusIntroTextComponent(){
    return (<div className="bg-[#FBF9F6] py-20 px-6 sm:px-8">

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                    <div className="text-left flex flex-col justify-start h-full">
                    <div className="flex items-center mb-4">
                        <span className="h-3 w-3 bg-[#8C4A69] rounded-full mr-3"></span>
                        <p className="text-sm font-semibold tracking-wider uppercase text-gray-600">
                        About Us
                        </p>
                    </div>
                    
                    <div className="flex flex-col justify-center" >
                        <h2 className="text-3xl  font-bold text-gray-900 leading-tight">
                        Creating Real Paths to a Better Life
                    </h2>
                    </div>
                    </div>
                    
                    <div className="text-gray-700 text-base md:text-lg leading-relaxed">
                    <p>
                        Love Vision Foundation (LVF) was birthed from James 1:27 with a deep passion to reveal God’s love through practical action. We believe love is more than words, it’s compassion in motion, meeting the physical, emotional, and spiritual needs of those most vulnerable.
                    </p>
                    </div>
                    
                </div>
    
            </div>)
}

function OurMissionAndVisionComponent(){
    return (
        <div className="py-20 px-6 sm:px-8">

  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
  
    <div className="h-full">
      <img 
      src="/about-us-what-we-do.jpg" 
        alt="Volunteers interacting with community members" 
        className="w-full h-full rounded-3xl object-cover shadow-lg"
      />
    </div>
    
    <div className="bg-[#F4D6E7] p-8 md:p-12 rounded-3xl h-full flex flex-col justify-center text-[#AF3D6E]">
      <div className="flex items-center mb-4">
        <span className="h-3 w-3 bg-[#AF3D6E] rounded-full mr-3"></span>
        <p className="text-sm font-semibold tracking-wider uppercase">
          Our Mission & Vision
        </p>
      </div>
      
      <h2 className="text-4xl font-bold leading-tight mb-6">
        Build with Purpose
      </h2>
      
      <div className="space-y-4 leading-relaxed">
        <p>
          <span className="font-bold">Our mission</span> is to bring both social and spiritual change to children and youth. Through consistent support, empowerment, and spiritual guidance, we aim to create lasting transformation.
        </p>
        <p>
          <span className="font-bold">Our vision</span> is to bring the world to God’s love through practical acts of compassion. Rooted in Ephesians 3:19, our vision is to demonstrate God’s limitless love in ways that transform lives and communities.
        </p>
      </div>
    </div>
    
  </div>
  
</div>
    );
}


const Card = ({ imageUrl, title, description }: { imageUrl: string, title: string, description: string }) => {
  return (
    <div className="bg-white rounded-3xl p-8  flex flex-col items-start shadow-md">
      <div className="w-24 h-24 mb-6">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full rounded-full object-cover" 
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

 function InitiativeSection() {
  // Data for the three cards
  const initiatives = [
    {
      imageUrl: '/our-arms-1.png',
      title: 'Love Homes',
      description: 'Caring for the physical and material needs of orphans and families in crisis.',
    },
    {
      imageUrl: '/our-arms-1.png',
      title: 'Love Reform',
      description: 'Empowering through education, skills training, and mentorship.',
    },
    {
      imageUrl: '/our-arms-1.png',
      title: 'Love Revival',
      description: 'Igniting spiritual renewal through worship and community outreach.',
    },
  ];

  return (
      <div className="max-w-6xl mx-auto">
        {/* Responsive Grid:
          - 1 column on mobile (default)
          - 2 columns on medium screens (md:)
          - 3 columns on large screens (lg:)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((item, index) => (
            <Card 
              key={index} 
              imageUrl={item.imageUrl} 
              title={item.title} 
              description={item.description} 
            />
          ))}
        </div>
      </div>
  );
}

function HowWeWorkComponent(){
    return (<div className="bg-[#FBF9F6] py-20 px-6 sm:px-8">

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                    <div className="text-left flex flex-col justify-start h-full">
                    <div className="flex items-center mb-4">
                        <span className="h-3 w-3 bg-[#8C4A69] rounded-full mr-3"></span>
                        <p className="text-sm font-semibold tracking-wider uppercase text-gray-600">
                        How we work
                        </p>
                    </div>
                    
                    <div className="flex flex-col justify-center" >
                        <h2 className="text-3xl  font-bold text-gray-900 leading-tight">
                            We fulfill our vision through three dedicated arms
                        </h2>
                    </div>
                    </div>
                    
                    <div className="text-gray-700 text-base md:text-lg leading-relaxed">
                        <p>
                            Every life we touch matters. We believe love is shown through action, meeting needs, lifting burdens, and walking with people through their journey.                    
                        </p>
                        <p>
                            With compassion at our core, we serve families, youth, and communities by creating real opportunities for healing, growth, and hope.
                        </p>
                    </div>
                    
                </div>
                <br/>
                <br/>
                <InitiativeSection />
            </div>)
}




// components/BoardSection.tsx

// 1. Define the TypeScript interface for the card's props
interface ProfileCardProps {
  imageUrl: string;
  name: string;
  role: string;
}

// 2. The reusable ProfileCard component
const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl, name, role }) => {
  return (
    <div className="text-left overflow-hidden">
      <div className="relative w-full aspect-square">
        <img 
          src={imageUrl} 
          alt={`Profile of ${name}`}
          // Makes the image fill the container
          className="object-cover rounded-3xl" 
        />
      </div>
      <div className="bg-[#F6EFF2] p-4 -mt-8 relative rounded-b-3xl">
        <h3 className="font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
};

// 3. The main component that displays the grid of cards
function BoardSection() {
  // Data for the board members, matching the ProfileCardProps interface
  const boardMembers: ProfileCardProps[] = [
    {
      imageUrl: '/profile-photo.jpg',
      name: 'Mrs Batel-Meira Imoebe',
      role: 'LVF Caretaker',
    },
    {
      imageUrl: '/profile-photo.jpg',
      name: 'Mr Lopez Ukpebor',
      role: 'LVF Coordinator (Africa)',
    },
    {
      imageUrl: '/profile-photo.jpg',
      name: 'Miss Precious',
      role: 'LVF Secretary',
    },
  ];

  return (
    <section className="bg-[#FBF9F6] py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-4">
          <span className="h-3 w-3 bg-[#8C4A69] rounded-full mr-3"></span>
          <p className="text-sm font-semibold tracking-wider uppercase text-gray-600">
            Leaders
          </p>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          LVF Board
        </h2>

        {/* Responsive Grid for the Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member) => (
            <ProfileCard 
              key={member.name} 
              imageUrl={member.imageUrl}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>

        
      </div>
    </section>
  );
}


function ExecutivesSection() {
  // Data for the board members, matching the ProfileCardProps interface
  const boardMembers: ProfileCardProps[] = [
    {
      imageUrl: '/profile-photo.jpg',
      name: 'Miss Maureen Amadi',
      role: 'LVF Caretaker',
    },
    {
      imageUrl: '/profile-photo.jpg',
      name: 'Mr Lopez Ukpebor',
      role: 'LVF Coordinator (Africa)',
    },
    {
      imageUrl: '/profile-photo.jpg',
      name: 'Miss Precious',
      role: 'LVF Secretary',
    },
    {
      imageUrl: '/profile-photo.jpg',
      name: 'Miss Precious A',
      role: 'LVF Secretary',
    },
  ];

  return (
    <section className="bg-[#FBF9F6] py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-4">
          <span className="h-3 w-3 bg-[#8C4A69] rounded-full mr-3"></span>
          <p className="text-sm font-semibold tracking-wider uppercase text-gray-600">
            Teams
          </p>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          LVF Executives
        </h2>

        {/* Responsive Grid for the Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member) => (
            <ProfileCard 
              key={member.name} 
              imageUrl={member.imageUrl}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


export default function About(){
    return (
        <div className={`bg-[#FEF9F2] ${googleSansFont.className} text-black`}>
            <div className="p-8 px-[5%]">
                <NavComponent />
            </div>
            <AboutUsIntroComponent />

            <AboutusIntroTextComponent />

            <OurMissionAndVisionComponent />
            
            <HowWeWorkComponent />

            <BoardSection />

            <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center pt-10 max-md:px-20 lg:px-60">
                We work hand-in-hand with orphanages, schools, churches, and communities, building partnerships that create lasting change.
            </h1>

            <ExecutivesSection />

            <FooterComponent />
        </div>
    )
}