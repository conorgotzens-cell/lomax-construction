import HealthcareImg from '../assets/images/projects/healthcare-hero.jpg';
import EducationImg from '../assets/images/projects/education-hero.jpg';
import CivicImg from '../assets/images/projects/civic-hero.jpg';
import CorporateImg from '../assets/images/projects/corporate-hero.jpg';
import HospitalityImg from '../assets/images/projects/hospitality-hero.jpg';
import IndustrialImg from '../assets/images/projects/industrial-hero.jpg';
import JoymongersImg from '../assets/images/projects/joymongers-hero.jpg';
import ChildrensMuseumImg from '../assets/images/projects/childrens-museum-hero.jpg';
import GtccImg from '../assets/images/projects/gtcc-hero.jpg';
import HarleyImg from '../assets/images/projects/harley-hero.jpg';

export const servicesData = {
  'preconstruction': {
    title: 'Preconstruction Services',
    subtitle: 'The Foundation of Success',
    metaTitle: 'Preconstruction Services NC | Budgeting & Feasibility | Lomax Construction',
    metaDescription: 'Expert preconstruction services in North Carolina including budgeting, cost estimating, feasibility, and value engineering for commercial projects.',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Preconstruction Services",
      "provider": {
        "@type": "GeneralContractor",
        "name": "Lomax Construction",
        "url": "https://www.lomaxconstruction.com"
      },
      "areaServed": {
        "@type": "State",
        "name": "North Carolina"
      },
      "description": "Expert preconstruction services including budgeting, cost estimating, feasibility, and value engineering.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Preconstruction Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Budgeting and Cost Estimating" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Feasibility Studies" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Constructability Reviews" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Value Engineering" } }
        ]
      }
    },
    content: `
      The foundation of a successful project begins long before ground is broken. Our preconstruction team provides comprehensive planning services that set the trajectory for success.
      <br /><br />
      We don't just estimate costs; we value engineer the entire project lifecycle, looking for savings in materials, methods, and schedule sequencing.
    `,
    benefits: [
      { title: "Budget Certainty", description: "Establish a reliable budget early to secure financing and approvals." },
      { title: "Risk Mitigation", description: "Identify site and permitting issues before they impact the schedule." },
      { title: "Value Optimization", description: "Strategic material selection to maximize quality within budget." }
    ],
    faq: [
      { question: "What is the cost of preconstruction services?", answer: "Preconstruction is typically budgeted as a small percentage of the total project cost or a fixed fee. The ROI is often realized multiple times over through value engineering savings." },
      { question: "When should I engage a contractor?", answer: "The earlier, the better. Bringing Lomax on board during the concept phase allows us to guide design efficiency." }
    ]
  },
  'design-build': {
    title: 'Design-Build',
    subtitle: 'Streamlined Project Delivery',
    metaTitle: 'Design-Build Commercial Contractor NC | Single-Source Delivery',
    metaDescription: 'Streamline your commercial construction with Lomax Construction\'s design-build services. Single-source responsibility for design and construction in NC.',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Design-Build Construction",
      "provider": { "@id": "https://www.lomaxconstruction.com/#organization" },
      "areaServed": { "@type": "State", "name": "North Carolina" },
      "description": "Single-source responsibility for design and construction, creating efficiencies in schedule and budget."
    },
    content: `
      For clients seeking one point of contact, design-build provides streamlined delivery. With a single contract, our team manages both design and construction, creating efficiencies in schedule, budget, and communication.
    `,
    benefits: [
      { title: "Single Source of Responsibility", description: "One contract, one contact. We own the risk for both design and construction." },
      { title: "Faster Delivery", description: "Overlap design and construction phases to reduce total project timeline by up to 30%." },
      { title: "Cost Savings", description: "Integrated teams reduce change orders and design errors." }
    ],
    faq: [
      { question: "How does Design-Build differ from General Contracting?", answer: "In Design-Build, the contractor hires the architect (or they join as a team). In General Contracting, the owner hires the architect and contractor separately." },
      { question: "Is Design-Build cheaper?", answer: "Often yes, due to reduced administrative costs, fewer change orders, and shorter construction schedules." }
    ]
  },
  'construction-management': {
    title: 'Construction Management',
    subtitle: 'Your Advocate in Construction',
    metaTitle: 'Construction Management (CMAR) Services NC | Lomax Construction',
    metaDescription: 'Lomax Construction provides Construction Management at Risk (CMAR) services, acting as your advocate for budget, schedule, and quality control.',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Construction Management at Risk (CMAR)",
      "provider": { "@id": "https://www.lomaxconstruction.com/#organization" },
      "areaServed": { "@type": "State", "name": "North Carolina" },
      "description": "Acting as your advocate from planning through completion with open-book transparency and guaranteed maximum price."
    },
    content: `
      As a Construction Manager at Risk (CMAR), we act as your advocate from planning through completion. This delivery method combines open-book transparency with construction expertise to maximize project outcomes.
      <br /><br />
      We join the team early during design, providing real-time cost feedback so you can design to your budget, not just estimate to it.
    `,
    benefits: [
      { title: "GMP Protection", description: "Guaranteed Maximum Price protects the owner from cost overruns." },
      { title: "Open Book", description: "Full transparency on all subcontractor bids and project costs." },
      { title: "Advocacy", description: "We sit on your side of the table, managing the project in your best interest." }
    ],
    faq: [
      { question: "What is a GMP?", answer: "A Guaranteed Maximum Price is a cap on the project cost. Any savings below the GMP are typically returned to the owner or shared." },
      { question: "Why choose CMAR over Design-Build?", answer: "CMAR is great if you already have an architect you love but want a contractor's input on cost and schedule early in the process." }
    ]
  },
  'general-contracting': {
    title: 'General Contracting',
    subtitle: 'Traditional Excellence',
    metaTitle: 'Commercial General Contractor NC | Lomax Construction',
    metaDescription: 'Trusted Commercial General Contractor serving North Carolina since 1996. Experienced in competitive bidding and delivering projects on time and budget.',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Commercial General Contracting",
      "provider": { "@id": "https://www.lomaxconstruction.com/#organization" },
      "areaServed": { "@type": "State", "name": "North Carolina" },
      "description": "Traditional bid-build delivery backed by decades of experience and strong subcontractor relationships."
    },
    content: `
      For traditional delivery projects, we provide competitive bids backed by decades of experience and strong subcontractor relationships. As your general contractor, we manage all aspects of construction to deliver high-quality results on time and within budget.
      <br /><br />
      Even in a hard-bid scenario, we bring a collaborative spirit to the field, solving problems proactively rather than just issuing change orders.
    `,
    benefits: [
      { title: "Competitive Pricing", description: "Leveraging our subcontractor network to get the best market rates." },
      { title: "Proven Supervision", description: "Experienced superintendents who enforce safety and quality standards daily." },
      { title: "Financial Strength", description: "Bonding capacity and financial stability to handle large-scale projects." }
    ],
    faq: [
      { question: "Do you self-perform work?", answer: "We primarily manage subcontractors but have the capability to self-perform certain carpentry and general labor tasks to control schedule critical path." },
      { question: "What regions do you bid in?", answer: "We actively bid commercial projects throughout the NC Piedmont Triad, Charlotte Metro, and Triangle regions." }
    ]
  },
  'renovations-upfits': {
    title: 'Renovations & Upfits',
    subtitle: 'Specialized Construction in Occupied Spaces',
    metaTitle: 'Commercial Renovations & Tenant Upfits NC | Lomax Construction',
    metaDescription: 'Specialized commercial renovation and tenant upfit services. We work in occupied spaces with minimal disruption to your business operations.',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Commercial Renovations & Tenant Upfits",
      "provider": { "@id": "https://www.lomaxconstruction.com/#organization" },
      "areaServed": { "@type": "State", "name": "North Carolina" },
      "description": "Specialized construction in occupied spaces, including tenant improvements and expansions."
    },
    content: `
      Many projects happen in occupied spaces—a medical clinic, office, or school that must remain operational during construction. We specialize in phased renovations and tenant upfits that minimize disruption while delivering high-quality spaces.
      <br /><br />
      <strong>Adaptive Reuse & Historic Preservation:</strong> We also specialize in complex adaptive reuse projects, transforming historic mills and warehouses into modern mixed-use facilities. Our team guides clients through <strong>Historic Tax Credit</strong> compliance and structural retrofits to preserve the character of North Carolina's architectural history.
    `,
    benefits: [
      { title: "Operational Continuity", description: "Phasing plans that keep your doors open during construction." },
      { title: "Adaptive Reuse Experts", description: "Experience with mill renovations, structural reinforcing, and historic preservation tax credits." },
      { title: "Speed to Market", description: "Fast-track schedules to get you into your new space sooner." }
    ],
    faq: [
      { question: "Can you work nights and weekends?", answer: "Yes, off-hours work is standard for our renovation teams to avoid disrupting your business operations." },
      { question: "Do you handle permitting for upfits?", answer: "Absolutely. We manage the entire permitting and inspection process with local municipalities." }
    ]
  }
};

export const marketsData = {
  'healthcare': {
    title: 'Healthcare Construction',
    subtitle: 'Precision & Patient Safety',
    metaTitle: 'Healthcare Construction Company NC | Hospital & Medical Office Builders',
    metaDescription: 'Lomax Construction specializes in healthcare facility construction, including medical office buildings, surgery centers, and imaging suites in NC.',
    content: `
      Healthcare construction demands expertise, safety, and schedule precision. At Lomax Construction, we’ve built facilities across North Carolina that meet strict codes while minimizing disruption to patients and staff. Our <strong>ICRA Class III & IV</strong> trained teams deliver high-quality projects for hospitals, clinics, and specialty providers.
    `,
    benefits: [
      { title: "ICRA Class III & IV", description: "Certified teams trained in rigorous Infection Control Risk Assessment protocols for high-risk environments." },
      { title: "Patient Safety", description: "Dust walls, negative air pressure, and phased work to protect patients." },
      { title: "Specialized Systems", description: "Experience with Med Gas, Nurse Call, and secure access systems." }
    ],
    faq: [
      { question: "Are your superintendents ICRA trained?", answer: "Yes, all our healthcare superintendents and project managers hold current ICRA certifications." },
      { question: "Do you build ground-up or just renovations?", answer: "We handle both ground-up medical office buildings (MOBs) and complex interior renovations within active hospitals." }
    ]
  },
  'education': {
    title: 'Education Facilities',
    subtitle: 'Inspiring Learning Environments',
    metaTitle: 'Education Construction Contractors NC | School & University Builders',
    metaDescription: 'Building inspiring learning environments from K-12 classrooms to university labs. Expert in phased campus renovations and summer school schedules.',
    content: `
      From K-12 schools to higher education, Lomax supports learning environments with safe, flexible, and durable spaces. We understand the constraints of academic calendars and specialize in summer slam projects and phased campus renovations.
    `,
    benefits: [
      { title: "Summer Slam Experts", description: "We know how to execute upgrades during the tight 10-week summer window." },
      { title: "Student Safety", description: "Background checked crews and strict separation from student populations." },
      { title: "Campus Coordination", description: "Working around bus schedules, drop-off lines, and sporting events." }
    ],
    faq: [
      { question: "Do you work with public school boards?", answer: "Yes, we are experienced in public bid laws and working with county school boards across NC." },
      { question: "Can you build during the school year?", answer: "Yes, we handle additions and isolated renovations during the school year with strict safety perimeters." }
    ]
  },
  'civic-municipal': {
    title: 'Civic & Municipal',
    subtitle: 'Building for Our Communities',
    metaTitle: 'Civic & Municipal Construction NC | Government Building Contractors',
    metaDescription: 'Experienced contractor for civic and municipal projects in NC. Fire stations, courthouses, libraries, and public works facilities built to last.',
    content: `
      We’re proud to build facilities that serve North Carolina communities. Our civic projects are built to last, providing essential services to residents for decades to come.
    `,
    benefits: [
      { title: "Public Fund Stewardship", description: "Responsible management of taxpayer dollars through value engineering." },
      { title: "Durability Focus", description: "Building for 50-year lifecycles with low-maintenance materials." },
      { title: "Security Clearance", description: "Teams cleared for work in courthouses, police stations, and secure facilities." }
    ],
    faq: [
      { question: "Are you bonded for public work?", answer: "Yes, Lomax Construction has significant bonding capacity to handle large municipal projects." },
      { question: "Do you hire local subcontractors?", answer: "We prioritize local trade participation to keep tax dollars within the community whenever possible." }
    ]
  },
  'corporate-interiors': {
    title: 'Corporate Interiors',
    subtitle: 'ModernWorkplaces',
    metaTitle: 'Corporate Office Construction & Tenant Fit-Outs NC | Lomax Construction',
    metaDescription: 'Transforming corporate workspaces with high-end tenant upfits and office renovations. Creating modern, productive environments in North Carolina.',
    content: `
      Our team creates workplace environments that balance productivity and aesthetics. Whether it's a high-end corporate headquarters or a flexible tech office, we deliver finishes that impress.
    `,
    benefits: [
      { title: "High-End Finishes", description: "Expertise in architectural millwork, glass walls, and premium flooring." },
      { title: "Acoustic Control", description: "Sound masking and insulation solutions for open-office productivity." },
      { title: "Technology Integration", description: "Coordination with IT/AV vendors for seamless conference room setups." }
    ],
    faq: [
      { question: "Do you handle furniture coordination?", answer: "We coordinate closely with furniture vendors to ensure power and data are exactly where they need to be." },
      { question: "How fast can you fit out an office?", answer: "We specialize in fast-track tenant upfits, often delivering spaces in 8-12 weeks depending on complexity." }
    ]
  },
  'restaurant-hospitality': {
    title: 'Restaurant & Hospitality',
    subtitle: 'Creating Guest Experiences',
    metaTitle: 'Restaurant & Hospitality Contractors NC | Hotel Renovations',
    metaDescription: 'Specialized construction for restaurants and hospitality. From commercial kitchens to luxury hotel lobbies, we build experiences.',
    content: `
      From local restaurants to multi-location hospitality brands, Lomax builds customer-focused spaces. We understand the unique MEP requirements of commercial kitchens and the high-level finishes needed for dining areas.
    `,
    benefits: [
      { title: "Kitchen Specialists", description: "Deep knowledge of grease traps, hood systems, and health code compliance." },
      { title: "Brand Standards", description: "Experience working with franchise specifications and national brand books." },
      { title: "Grand Opening Deadlines", description: "We understand that every day closed is lost revenue. We hit our dates." }
    ],
    faq: [
      { question: "Do you install kitchen equipment?", answer: "We coordinate the installation (GC connection) of all owner-furnished kitchen equipment." },
      { question: "Have you built breweries?", answer: "Yes, we have completed several brewery and taproom upfits in the NC Triad area." }
    ]
  },
  'industrial-manufacturing': {
    title: 'Industrial & Manufacturing',
    subtitle: 'Powering Production',
    metaTitle: 'Industrial Construction Company NC | Warehouse & Manufacturing',
    metaDescription: 'Industrial construction services for manufacturing plants, distribution centers, and warehouses in NC. Durable, efficient facility solutions.',
    content: `
      We support North Carolina’s economy by building facilities that power production and distribution. Our industrial team understands the need for durable slabs, high bay heights, and specialized utility infrastructure.
    `,
    benefits: [
      { title: "Heavy Duty", description: "Expertise in reinforced concrete slabs, pits, and crane rail foundations." },
      { title: "Power Infrastructure", description: "Coordinating heavy power upgrades and switchgear for manufacturing equipment." },
      { title: "Site Development", description: "Managing large-scale grading, storm water, and truck apron paving." }
    ],
    faq: [
      { question: "Do you do pre-engineered metal buildings (PEMB)?", answer: "Yes, we can erect pre-engineered metal buildings for warehousing or manufacturing use." },
      { question: "can you install equipment foundations?", answer: "We frequently pour isolated pads and foundations for heavy machinery based on OEM specifications." }
    ]
  }
};

export const locationsData = {
  'triad': {
    title: 'The Triad Region',
    subtitle: 'Our Home Base',
    metaTitle: 'Commercial Construction Company Greensboro, Winston-Salem, High Point',
    metaDescription: 'Lomax Construction headquarters in Colfax, NC. Serving Greensboro, Winston-Salem, High Point with premier commercial construction services.',
    content: `
      Headquartered in Colfax, NC, the Triad is our home. We have deep roots in Greensboro, Winston-Salem, and High Point, serving the municipalities, healthcare systems, and businesses that drive this region.
      <br /><br />
      <strong>Areas Served:</strong> Greensboro, Winston-Salem, High Point, Burlington, Kernersville.
    `,
    key_towns: ["Greensboro", "Winston-Salem", "High Point", "Burlington", "Kernersville"],
    geo: { lat: 36.1077, lng: -79.9572 }, // Centered on Colfax roughly
    address: {
      street: "123 Construction Way", // Placeholder to get verified later if needed, but for now enables schema
      city: "Colfax",
      state: "NC",
      zip: "27235"
    },
    quickFacts: {
      "Service Type": "Headquarters",
      "Established": "1996",
      "Projects Completed": "500+",
      "Service Radius": "Statewide Hub"
    },
    openingHours: "Mo-Fr 08:00-17:00",
    reviews: [
      { author: "Sarah Jenkins", role: "Hospital Administrator", text: "Lomax Construction managed our clinic expansion in Greensboro with incredible attention to detail. Their ICRA protocols were flawless.", rating: 5, date: "2024-03-15" },
      { author: "Michael Ross", role: "Facility Manager", text: "The team at Lomax is our go-to for anything in the Triad. Reliable, distinctively professional, and they always hit their deadlines.", rating: 5, date: "2023-11-02" }
    ],
    faq: [
      { question: "Where is Lomax Construction headquartered?", answer: "Our headquarters is located in Colfax, NC, centrally located to serve the entire Piedmont Triad region efficiently." },
      { question: "Do you handle industrial projects in Greensboro?", answer: "Yes, we have extensive experience with industrial upfits and manufacturing facility expansions in Greensboro and surrounding areas." }
    ]
  },
  'charlotte': {
    title: 'Charlotte Metro',
    subtitle: 'Queen City Construction',
    metaTitle: 'Commercial General Contractor Charlotte NC | Lomax Construction',
    metaDescription: 'Expanding our reach to the Queen City. Delivering healthcare upfits, corporate interiors, and commercial projects in the Charlotte Metro area.',
    content: `
    Lomax Construction has a strong presence in the fast-growing Charlotte market. We deliver healthcare upfits, corporate interiors, and hospitality projects throughout Mecklenburg and surrounding counties.
    `,
    key_towns: ["Charlotte", "Concord", "Huntersville", "Matthews", "Gastonia"],
    geo: { lat: 35.2271, lng: -80.8431 },
    quickFacts: {
      "Service Type": "Regional Service Area",
      "Focus": "Corporate & Healthcare",
      "Response Time": "Same Day Support",
      "Projects": "Active Since 2005"
    },
    openingHours: "Mo-Fr 08:00-17:00",
    reviews: [
      { author: "David Chen", role: "Tech Start-up Founder", text: "We hired Lomax for our new HQ upfit in South End. They navigated the permitting process in Charlotte effortlessly.", rating: 5, date: "2024-01-20" },
      { author: "Jessica Alverez", role: "Restaurant Owner", text: "Professional and clean. They built out our second location in Matthews and kept the site organized despite the tight space.", rating: 5, date: "2023-08-10" }
    ],
    faq: [
      { question: "Are you a licensed general contractor in Charlotte?", answer: "Yes, Lomax Construction is a fully licensed and bonded Unlimited General Contractor serving Charlotte and the entire state of North Carolina." },
      { question: "What types of commercial projects do you build in Charlotte?", answer: "We focus on corporate interiors, healthcare renovations, and retail/hospitality upfits in the Charlotte Metro area." }
    ]
  },
  'raleigh-durham': {
    title: 'Raleigh-Durham',
    subtitle: 'Building the Triangle',
    metaTitle: 'Commercial Builder Raleigh-Durham NC | Research Triangle Construction',
    metaDescription: 'Serving the Research Triangle with specialized construction for medical offices, labs, and university facilities in Raleigh and Durham.',
    content: `
      We serve the Research Triangle area with a focus on medical office buildings, university facilities, and lab spaces. Our team understands the dynamic needs of this innovation hub.
    `,
    key_towns: ["Raleigh", "Durham", "Chapel Hill", "Cary", "Morrisville"],
    geo: { lat: 35.7796, lng: -78.6382 },
    quickFacts: {
      "Service Type": "Regional Service Area",
      "Focus": "Life Science & Education",
      "Key Clients": "Universities & Health Systems",
      "Experience": "20+ Years in Triangle"
    },
    openingHours: "Mo-Fr 08:00-17:00",
    reviews: [
      { author: "Dr. Emily Weiss", role: "Lab Director", text: "Complex clean room installation in RTP. Lomax clearly understood the technical requirements and validation needs.", rating: 5, date: "2023-12-05" },
      { author: "James Thorne", role: "Property Manager", text: "Great communication during our office park renovation in Cary. They minimized disruption to our existing tenants.", rating: 5, date: "2024-02-14" }
    ],
    faq: [
      { question: "Do you specialize in lab construction in the Triangle?", answer: "Yes, we have specialized experience in constructing medical and research laboratories, including clean rooms and validation protocols." },
      { question: "Have you worked with universities in the area?", answer: "We have a strong portfolio of education projects and have successfully delivered facilities for major universities in the UNC system." }
    ]
  },
  'western-nc': {
    title: 'Western North Carolina',
    subtitle: 'From Asheville to Boone',
    metaTitle: 'Commercial Construction Western NC | Asheville & Boone Contractors',
    metaDescription: 'Bringing reliable commercial construction to Western NC. Serving Asheville, Boone, and mountain communities with civic and healthcare projects.',
    content: `
      Our reach extends to the mountains, where we build education campuses, community healthcare clinics, and civic centers that serve western communities.
    `,
    key_towns: ["Asheville", "Boone", "Hendersonville", "Lenoir", "Morganton"],
    geo: { lat: 35.5951, lng: -82.5515 },
    quickFacts: {
      "Service Type": "Regional Service Area",
      "Focus": "Civic & Institutional",
      "Terrain Impact": "Slope & Site Specialists",
      "Reach": "Full Western Region"
    },
    openingHours: "Mo-Fr 08:00-17:00",
    reviews: [
      { author: "Mayor Robert T.", role: "Municipal Client", text: "A fantastic partner for our new community center. They respected the budget and the community's vision.", rating: 5, date: "2023-09-22" },
      { author: "Sarah P.", role: "Hospital Operations", text: "They managed the logistics of building a clinic in a remote area of Boone without any delays.", rating: 5, date: "2024-04-10" }
    ],
    faq: [
      { question: "Do you build in the mountains of Western NC?", answer: "Yes, we manage construction projects in Western NC, understanding the unique site logistics and topography challenges of the region." },
      { question: "What sectors do you serve in Western NC?", answer: "Our work in Western NC primarily includes civic/municipal projects, healthcare facilities, and higher education campuses." }
    ]
  },
  'eastern-nc': {
    title: 'Eastern North Carolina',
    subtitle: 'Coastal Communities',
    metaTitle: 'Commercial Contractor Eastern NC | Coastal Construction Services',
    metaDescription: 'Supporting Eastern NC with quality construction management. Hospitals, schools, and municipal facilities in coastal communities.',
    content: `
      We support eastern NC with hospitals, schools, and municipal facilities, bringing reliable construction management to the coast.
    `,
    key_towns: ["Wilmington", "Greenville", "Jacksonville", "New Bern"],
    geo: { lat: 34.2104, lng: -77.9447 },
    quickFacts: {
      "Service Type": "Regional Service Area",
      "Focus": "Coastal Infrastructure",
      "Safety": "Hurricane Code Experts",
      "Reach": "Coastal Plains"
    },
    openingHours: "Mo-Fr 08:00-17:00",
    reviews: [
      { author: "Tom H.", role: "School Board Member", text: "Delivered our new elementary school wing in time for the fall semester despite a rainy season.", rating: 5, date: "2023-08-25" }
    ],
    faq: [
      { question: "Do you handle hurricane-rated construction?", answer: "Absolutely. We are experienced in coastal building codes and constructing facilities designed to withstand high-wind events." },
      { question: "How far east do you operate?", answer: "We serve clients all the way to the coast, including Wilmington, Jacksonville, and the Outer Banks for major commercial projects." }
    ]
  }
};

export const teamData = [
  {
    id: 'eric-lomax',
    name: 'Eric Lomax',
    role: 'President',
    bio: 'With over 25 years of experience, Eric has led Lomax Construction from a family business to a statewide leader in commercial construction.'
  },
  {
    id: 'member-1',
    name: 'Senior Leadership',
    role: 'Vice President',
    bio: 'Driving operational excellence and overseeing project delivery across all market sectors.'
  },
  {
    id: 'member-2',
    name: 'Project Executive',
    role: 'Director of Operations',
    bio: ' ensuring that every project meets our rigorous standards for safety, quality, and schedule.'
  },
  {
    id: 'member-3',
    name: 'Senior Management',
    role: 'Preconstruction Manager',
    bio: 'Leading our estimating and feasibility teams to provide accurate budgets and value engineering solutions.'
  }
];

import JoymongersImg2 from '../assets/images/projects/joymongers-2.jpg';
import JoymongersImg3 from '../assets/images/projects/joymongers-3.jpg';
import ChildrensMuseumImg2 from '../assets/images/projects/childrens-museum-2.jpg';
import ChildrensMuseumImg3 from '../assets/images/projects/childrens-museum-3.jpg';
import ElonImg2 from '../assets/images/projects/elon-law-2.jpg';
import ElonImg3 from '../assets/images/projects/elon-law-3.jpg';
import CulpImg2 from '../assets/images/projects/culp-2.jpg';
import CulpImg3 from '../assets/images/projects/culp-3.jpg';
import NattyImg2 from '../assets/images/projects/natty-greenes-2.jpg';
import NattyImg3 from '../assets/images/projects/natty-greenes-3.jpg';
import FirstPresImg2 from '../assets/images/projects/first-pres-2.jpg';
import FirstPresImg3 from '../assets/images/projects/first-pres-3.jpg';
import UncImg2 from '../assets/images/projects/unc-mri-2.jpg';
import UncImg3 from '../assets/images/projects/unc-mri-3.jpg';
import TeImg2 from '../assets/images/projects/te-connectivity-2.jpg';
import TeImg3 from '../assets/images/projects/te-connectivity-3.jpg';
import HarleyImg2 from '../assets/images/projects/harley-2.jpg';
import HarleyImg3 from '../assets/images/projects/harley-3.jpg';
import NattyTaproomImg from '../assets/images/projects/natty-greenes-4.jpg';
import NattyProductionImg from '../assets/images/projects/natty-greenes-5.jpg';

export const projectsData = {
  'unc-mri': {
    title: 'UNC Hospitals MRI Suite',
    location: 'Chapel Hill, NC',
    region: 'raleigh-durham',
    type: 'Healthcare',
    marketSlug: 'healthcare',
    image: HealthcareImg,
    galleryImages: [UncImg2, UncImg3],
    metaTitle: 'UNC Hospitals MRI Suite Construction | Lomax Construction',
    metaDescription: 'Complex renovation of an MRI suite at UNC Hospitals. Specialized copper shielding and occupied space construction.',
    description: 'A critical renovation within the active UNC Hospitals complex involving the installation of a new high-field MRI suite. The project required precise coordination to upgrade the department without interrupting daily radiological operations.',
    challenge: 'Working within an active hospital required strict adherence to ISO cleanliness standards, installation of RF (Radio Frequency) copper shielding, and zero vibration tolerance for adjacent sensitive equipment.',
    solution: 'We utilized night shifts for noisy demolition and installed specialized vibration-dampening foundations for the MRI magnet. The team utilized fiberglass rebar to prevent magnetic interference, ensuring the suite operated perfectly upon commissioning.',
    services: ['General Contracting', 'Renovation', 'Healthcare'],
    year: '2023'
  },
  'elon-law': {
    title: 'Elon Law School',
    location: 'Greensboro, NC',
    region: 'triad',
    type: 'Education',
    marketSlug: 'education',
    image: EducationImg,
    galleryImages: [ElonImg2, ElonImg3],
    metaTitle: 'Elon Law School Construction Project | Lomax Construction',
    metaDescription: 'Adaptive reuse project transforming the historic Greensboro Central Public Library into the 84,000 SF Elon University School of Law.',
    description: 'Adaptive reuse of the historic former Greensboro Central Public Library into the H. Michael Weaver Building, a state-of-the-art, four-story law school facility.',
    challenge: 'Transforming an 84,000 SF 1960s library structure into a modern legal campus with high-tech courtrooms while preserving the historic character of the downtown landmark.',
    solution: 'We carefully restored the exterior masonry while completely gutting the interior to install high-capacity HVAC and data backbones. The project was fast-tracked to meet the academic calendar opening.',
    services: ['Design-Build', 'Renovation', 'Education'],
    year: '2020'
  },
  'first-presbyterian': {
    title: 'First Presbyterian Church',
    location: 'Greensboro, NC',
    region: 'triad',
    type: 'Civic',
    marketSlug: 'civic-municipal',
    image: CivicImg,
    galleryImages: [FirstPresImg2, FirstPresImg3],
    metaTitle: 'First Presbyterian Church Welcome Center | Lomax Construction',
    metaDescription: 'Addition of a new Welcome Center and sanctuary renovation for First Presbyterian Church in Greensboro.',
    description: 'A significant addition of a Welcome Center and renovation of the historic sanctuary to improve accessibility and community welcoming.',
    challenge: 'Matching the architectural style of the 100-year-old stone church with modern materials and adhering to strict historic preservation guidelines.',
    solution: 'We sourced stone from the original quarry used in 1928 to ensure a seamless visual integration between the new addition and the historic sanctuary.',
    services: ['General Contracting', 'Civic'],
    year: '2022'
  },
  'culp-showroom': {
    title: 'Culp Showroom',
    location: 'High Point, NC',
    region: 'triad',
    type: 'Corporate',
    marketSlug: 'corporate-interiors',
    image: CorporateImg,
    galleryImages: [CulpImg2, CulpImg3],
    metaTitle: 'Culp Inc. Showroom High Point | Lomax Construction',
    metaDescription: 'High-end corporate showroom upfit for Culp Inc. in the Congdon Yards complex.',
    description: 'A flagship showroom upfit located in the innovative Congdon Yards complex, the heart of High Point\'s design district.',
    challenge: 'Delivering a high-end space with open ceilings and polished concrete in time for the High Point Furniture Market deadline.',
    solution: 'We expedited the schedule with a 6-day work week and coordinated closely with the Congdon Yards development team to manage logistics in the active mixed-use building.',
    services: ['Tenant Upfit', 'Corporate Interiors'],
    year: '2021'
  },
  'natty-greenes': {
    title: 'Natty Greene\'s Brewing',
    location: 'Greensboro, NC',
    region: 'triad',
    type: 'Hospitality',
    marketSlug: 'restaurant-hospitality',
    image: HospitalityImg,
    galleryImages: [NattyTaproomImg, NattyProductionImg],
    metaTitle: 'Natty Greene\'s Brewery Construction | Lomax Construction',
    metaDescription: 'Construction of the production brewery and taproom for Natty Greene\'s Brewing Co.',
    description: 'Construction of a large-scale production brewery and taproom facility to support regional distribution. The project included a custom-designed brewhouse, fermentation hall, and a vibrant public taproom that captures the industrial spirit of the brand.',
    challenge: 'Installing complex process piping and stainless steel trench drains for the brewing tanks with precise slope requirements, all while integrating a public-facing taproom within the same facility.',
    solution: 'Used laser screeding for the concrete slab to ensure perfect drainage in the fermentation hall and coordinated MEP systems to support heavy production loads. The design creates a seamless visual connection between the production floor and the guest experience.',
    services: ['General Contracting', 'Industrial', 'Hospitality'],
    year: '2019'
  },
  'te-connectivity': {
    title: 'TE Connectivity Titan',
    location: 'Winston-Salem, NC',
    region: 'triad',
    type: 'Industrial',
    marketSlug: 'industrial-manufacturing',
    image: IndustrialImg,
    galleryImages: [TeImg2, TeImg3],
    metaTitle: 'TE Connectivity Manufacturing Plant Expansion | Lomax Construction',
    metaDescription: 'Expansion of the TE Connectivity manufacturing plant in Winston-Salem, NC.',
    description: 'A 50,000 SF expansion of an active manufacturing plant to increase production capacity.',
    challenge: 'Connecting to the existing structure without disrupting 24/7 production lines and sensitive electronic manufacturing processes.',
    solution: 'Built temporary dust walls and positive pressure zones to isolate the construction area completely, allowing the plant to maintain full output during construction.',
    services: ['Industrial', 'Expansion'],
    year: '2018'
  },
  'joymongers-gso': {
    title: 'Joymongers Brewing Co.',
    location: 'Greensboro, NC',
    region: 'triad',
    type: 'Hospitality',
    marketSlug: 'restaurant-hospitality',
    image: JoymongersImg,
    galleryImages: [JoymongersImg2, JoymongersImg3],
    metaTitle: 'Joymongers Brewing Company Construction | Lomax Construction',
    metaDescription: 'Downtown brewery taproom and patio construction for Joymongers Brewing Co. in Greensboro, NC.',
    description: 'A vibrant downtown brewery upfit featuring an open-concept taproom and connected outdoor gathering space.',
    challenge: 'Transforming an existing structure into a functional brewery while maximizing the connection between the indoor bar and the outdoor urban park.',
    solution: 'We installed large garage-style glass doors and created a seamless flow for patrons, helping establish Joymongers as a community anchor.',
    services: ['Renovation', 'Hospitality'],
    year: '2016'
  },
  'childrens-museum': {
    title: 'Greensboro Children’s Museum',
    location: 'Greensboro, NC',
    region: 'triad',
    type: 'Civic',
    marketSlug: 'civic-municipal',
    image: ChildrensMuseumImg,
    galleryImages: [ChildrensMuseumImg2, ChildrensMuseumImg3],
    metaTitle: 'Greensboro Children’s Museum Construction | Lomax Construction',
    metaDescription: 'interactive educational exhibit construction and facility improvements for the Greensboro Children’s Museum.',
    description: 'Interactive outdoor educational space and facility improvements for the beloved Greensboro institution.',
    challenge: 'Constructing durable, safe, and engaging structures that can withstand heavy daily use by children.',
    solution: 'We used commercial-grade materials with playful design elements, ensuring safety compliance while maintaining the whimsy of the design.',
    services: ['General Contracting', 'Civic'],
    year: '2017'
  },
  'gtcc-medlin': {
    title: 'GTCC Medlin Campus Center',
    location: 'Jamestown, NC',
    region: 'triad',
    type: 'Education',
    marketSlug: 'education',
    image: GtccImg,
    metaTitle: 'GTCC Medlin Campus Center Renovation | Lomax Construction',
    metaDescription: 'Major renovation of the student services hub at Guilford Technical Community College.',
    description: 'A comprehensive renovation of the central student services hub at GTCC\'s Jamestown campus.',
    challenge: 'Modernizing a 1970s era building to meet contemporary student service needs and energy codes.',
    solution: 'The project delivered a refreshed, light-filled environment that centralizes student resources in a modern, accessible facility.',
    services: ['Renovation', 'Education'],
    year: '2018'
  },
  'harley-davidson-gso': {
    title: 'Harley-Davidson Showroom',
    location: 'Greensboro, NC',
    region: 'triad',
    type: 'Retail',
    marketSlug: 'corporate-interiors',
    image: HarleyImg,
    galleryImages: [HarleyImg2, HarleyImg3],
    metaTitle: 'Harley-Davidson Dealership Renovation | Lomax Construction',
    metaDescription: 'Commercial renovation and exterior upfit for the Harley-Davidson dealership in Greensboro.',
    description: 'Exterior facelift and interior showroom renovation for the legendary motorcycle brand.',
    challenge: 'Updating the retail experience to align with the brand\'s modern identity while maintaining operations.',
    solution: 'We phased the exterior improvements to minimize impact on customer parking and showroom access during the riding season.',
    services: ['Renovation', 'Retail'],
    year: '2018'
  }
};
