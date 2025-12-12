import HealthcareImg from '../assets/images/projects/healthcare-hero.jpg';
import EducationImg from '../assets/images/projects/education-hero.jpg';
import CivicImg from '../assets/images/projects/civic-hero.jpg';
import CorporateImg from '../assets/images/projects/corporate-hero.jpg';
import HospitalityImg from '../assets/images/projects/hospitality-hero.jpg';
import IndustrialImg from '../assets/images/projects/industrial-hero.jpg';
import EncoreNorthHero from '../assets/images/projects/encore-north-hero.jpg';
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
      We move beyond simple cost estimation. Our team actively value engineers the entire project lifecycle, identifying savings in materials and sequencing without compromising quality.
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
  },
  'multi-family-housing': {
    title: 'Multi-Family Housing',
    subtitle: 'Communities Built for Living',
    metaTitle: 'Multi-Family Housing Construction NC | Apartment & Condo Builders',
    metaDescription: 'Expert construction for multi-family housing developments in NC. Building high-quality apartments, condos, and student housing communities.',
    image: EncoreNorthHero,
    content: `
      Building durable, high-demand communities. From garden-style apartments to student housing, we deliver multi-family projects that balance resident appeal with long-term owner value.
      <br /><br />
      From site development to final punch-list, we manage the complex logistics of large-scale residential projects with a focus on durability, aesthetics, and speed to market.
    `,
    benefits: [
      { title: "Scaleable Solutions", description: "Capable of managing large footprint developments with multiple buildings." },
      { title: "Amenity Spaces", description: "Expertise in building clubhouses, pools, and fitness centers that attract residents." },
      { title: "Quality Finishes", description: "Attention to detail in unit turnover to ensure tenant satisfaction." }
    ],
    faq: [
      { question: "Do you build student housing?", answer: "Yes, we have experience with the unique durability and schedule requirements of student housing projects." },
      { question: "Can you handle site work?", answer: "We often manage the complete site package, including grading, utilities, and paving for large multi-family sites." }
    ]
  }
};

export const marketsData = {
  'healthcare': {
    title: 'Healthcare Construction',
    subtitle: 'Precision & Patient Safety',
    metaTitle: 'Healthcare Construction Company NC | Hospital & Medical Office Builders',
    metaDescription: 'Lomax Construction specializes in healthcare facility construction, including medical office buildings, surgery centers, and imaging suites in NC.',
    image: HealthcareImg,
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
    image: EducationImg,
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
    image: CivicImg,
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
    image: CorporateImg,
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
    image: HospitalityImg,
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
    image: IndustrialImg,
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
    localImpact: "With over 500 completed projects in the Triad, our trucks are a daily fixture from High Point to Greensboro.",
    content: `
      Headquartered in Colfax, NC, the Triad is our home. We have deep roots in Greensboro, Winston-Salem, and High Point, serving the municipalities, healthcare systems, and businesses that drive this region.
      <br /><br />
      <strong>Areas Served:</strong> Greensboro, Winston-Salem, High Point, Burlington, Kernersville.
    `,
    key_towns: ["Greensboro", "Winston-Salem", "High Point", "Burlington", "Kernersville"],
    geo: { lat: 36.1077, lng: -79.9572 }, // Centered on Colfax roughly
    address: {
      street: "8517 Norcross Rd. Ste. A",
      city: "Colfax",
      state: "NC",
      zip: "27235"
    },
    quickFacts: {
      "Service Type": "Headquarters",
      "Address": "8517 Norcross Rd. Ste. A, Colfax, NC",
      "Established": "1996",
      "Projects Completed": "500+",
      "Service Radius": "Statewide Hub"
    },
    openingHours: "Mo-Fr 08:00-17:00",
    reviews: [
      { author: "Sarah J.", role: "Regional Healthcare System", text: "Managed our clinic expansion in Greensboro with incredible attention to detail. Their ICRA protocols were flawless.", rating: 5, date: "2024-03-15" },
      { author: "Michael R.", role: "Manufacturing Facility", text: "The team is our go-to for anything in the Triad. Reliable, distinctively professional, and they always hit their deadlines.", rating: 5, date: "2023-11-02" }
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
    localImpact: "Rapidly expanding our footprint in the Queen City with major corporate upfits and healthcare deliveries.",
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
      { author: "David C.", role: "Technology Firm", text: "We hired them for our new HQ upfit in South End. They navigated the permitting process in Charlotte effortlessly.", rating: 5, date: "2024-01-20" },
      { author: "Jessica A.", role: "Hospitality Group", text: "Professional and clean. They built out our second location and kept the site organized despite the tight space.", rating: 5, date: "2023-08-10" }
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
    localImpact: "Serving the innovation hub with specialized laboratory and higher-education facilities.",
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
      { author: "Emily W.", role: "Life Sciences Company", text: "Complex clean room installation in RTP. They clearly understood the technical requirements and validation needs.", rating: 5, date: "2023-12-05" },
      { author: "James T.", role: "Commercial Real Estate Firm", text: "Great communication during our office park renovation in Cary. They minimized disruption to our existing tenants.", rating: 5, date: "2024-02-14" }
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
    localImpact: "Building critical community infrastructure from the Blue Ridge to the Great Smoky Mountains.",
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
      { author: "Robert T.", role: "Local Municipality", text: "A fantastic partner for our new community center. They respected the budget and the community's vision.", rating: 5, date: "2023-09-22" },
      { author: "Sarah P.", role: "Healthcare Provider", text: "Managed the logistics of building a clinic in a remote area without any delays.", rating: 5, date: "2024-04-10" }
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
    localImpact: "Delivering hurricane-hardened facilities for coastal communities and public institutions.",
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
      { author: "Tom H.", role: "Public School District", text: "Delivered our new elementary school wing in time for the fall semester despite a rainy season.", rating: 5, date: "2023-08-25" }
    ],

    faq: [
      { question: "Do you handle hurricane-rated construction?", answer: "Absolutely. We are experienced in coastal building codes and constructing facilities designed to withstand high-wind events." },
      { question: "How far east do you operate?", answer: "We serve clients all the way to the coast, including Wilmington, Jacksonville, and the Outer Banks for major commercial projects." }
    ]
  }
};



import JoymongersImg2 from '../assets/images/projects/joymongers-2.jpg';
import JoymongersImg3 from '../assets/images/projects/joymongers-3.jpg';
import ChildrensMuseumImg2 from '../assets/images/projects/childrens-museum-2.jpg';
import ChildrensMuseumImg3 from '../assets/images/projects/childrens-museum-3.jpg';
import ElonImg2 from '../assets/images/projects/elon-law-2.jpg';
import ElonImg3 from '../assets/images/projects/elon-law-3.jpg';
import ElonImg4 from '../assets/images/projects/elon-law-4.jpg';
import ElonImg5 from '../assets/images/projects/elon-law-5.jpg';
import ElonImg6 from '../assets/images/projects/elon-law-6.jpg';
import ElonImg7 from '../assets/images/projects/elon-law-7.jpg';
import ElonImg8 from '../assets/images/projects/elon-law-8.jpg';
import ElonImg9 from '../assets/images/projects/elon-law-9.jpg';
import ElonImg10 from '../assets/images/projects/elon-law-10.jpg';
import ElonImg11 from '../assets/images/projects/elon-law-11.jpg';
import ElonImg12 from '../assets/images/projects/elon-law-12.jpg';
import ElonImg13 from '../assets/images/projects/elon-law-13.jpg';
import ElonImg14 from '../assets/images/projects/elon-law-14.jpg';
import ElonImg15 from '../assets/images/projects/elon-law-15.jpg';
import ElonImg16 from '../assets/images/projects/elon-law-16.jpg';
import ElonImg17 from '../assets/images/projects/elon-law-17.jpg';
import ElonImg18 from '../assets/images/projects/elon-law-18.jpg';
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

// Bulk Imported Gallery Images
import UncMriGallery1 from '../assets/images/projects/unc-mri-gallery-1.jpg';
import UncMriGallery2 from '../assets/images/projects/unc-mri-gallery-2.jpg';
import UncMriGallery3 from '../assets/images/projects/unc-mri-gallery-3.jpg';
import UncMriGallery4 from '../assets/images/projects/unc-mri-gallery-4.jpg';
import FirstPresGallery1 from '../assets/images/projects/first-presbyterian-gallery-1.jpg';
import FirstPresGallery2 from '../assets/images/projects/first-presbyterian-gallery-2.jpg';
import FirstPresGallery3 from '../assets/images/projects/first-presbyterian-gallery-3.jpg';
import FirstPresGallery4 from '../assets/images/projects/first-presbyterian-gallery-4.jpg';
import FirstPresGallery5 from '../assets/images/projects/first-presbyterian-gallery-5.jpg';
import FirstPresGallery6 from '../assets/images/projects/first-presbyterian-gallery-6.jpg';
import FirstPresGallery7 from '../assets/images/projects/first-presbyterian-gallery-7.jpg';
import FirstPresGallery8 from '../assets/images/projects/first-presbyterian-gallery-8.jpg';
import FirstPresGallery9 from '../assets/images/projects/first-presbyterian-gallery-9.jpg';
import FirstPresGallery10 from '../assets/images/projects/first-presbyterian-gallery-10.jpg';
import FirstPresGallery11 from '../assets/images/projects/first-presbyterian-gallery-11.jpg';
import FirstPresGallery12 from '../assets/images/projects/first-presbyterian-gallery-12.jpg';
import FirstPresGallery13 from '../assets/images/projects/first-presbyterian-gallery-13.jpg';
import FirstPresGallery14 from '../assets/images/projects/first-presbyterian-gallery-14.jpg';
import FirstPresGallery15 from '../assets/images/projects/first-presbyterian-gallery-15.jpg';
import FirstPresGallery16 from '../assets/images/projects/first-presbyterian-gallery-16.jpg';
import FirstPresGallery17 from '../assets/images/projects/first-presbyterian-gallery-17.jpg';
import FirstPresGallery18 from '../assets/images/projects/first-presbyterian-gallery-18.jpg';
import CulpGallery1 from '../assets/images/projects/culp-showroom-gallery-1.jpg';
import CulpGallery2 from '../assets/images/projects/culp-showroom-gallery-2.jpg';
import CulpGallery3 from '../assets/images/projects/culp-showroom-gallery-3.jpg';
import CulpGallery4 from '../assets/images/projects/culp-showroom-gallery-4.jpg';
import CulpGallery5 from '../assets/images/projects/culp-showroom-gallery-5.jpg';
import CulpGallery6 from '../assets/images/projects/culp-showroom-gallery-6.jpg';
import CulpGallery7 from '../assets/images/projects/culp-showroom-gallery-7.jpg';
import CulpGallery8 from '../assets/images/projects/culp-showroom-gallery-8.jpg';
import CulpGallery9 from '../assets/images/projects/culp-showroom-gallery-9.jpg';
import CulpGallery10 from '../assets/images/projects/culp-showroom-gallery-10.jpg';
import CulpGallery11 from '../assets/images/projects/culp-showroom-gallery-11.jpg';
import CulpGallery12 from '../assets/images/projects/culp-showroom-gallery-12.jpg';
import CulpGallery13 from '../assets/images/projects/culp-showroom-gallery-13.jpg';
import CulpGallery14 from '../assets/images/projects/culp-showroom-gallery-14.jpg';
import CulpGallery15 from '../assets/images/projects/culp-showroom-gallery-15.jpg';
import CulpGallery16 from '../assets/images/projects/culp-showroom-gallery-16.jpg';
import CulpGallery17 from '../assets/images/projects/culp-showroom-gallery-17.jpg';
import CulpGallery18 from '../assets/images/projects/culp-showroom-gallery-18.jpg';
import CulpGallery19 from '../assets/images/projects/culp-showroom-gallery-19.jpg';
import CulpGallery20 from '../assets/images/projects/culp-showroom-gallery-20.jpg';
import NattyGallery1 from '../assets/images/projects/natty-greenes-gallery-1.jpg';
import NattyGallery2 from '../assets/images/projects/natty-greenes-gallery-2.jpg';
import NattyGallery3 from '../assets/images/projects/natty-greenes-gallery-3.jpg';
import NattyGallery4 from '../assets/images/projects/natty-greenes-gallery-4.jpg';
import NattyGallery5 from '../assets/images/projects/natty-greenes-gallery-5.jpg';
import NattyGallery6 from '../assets/images/projects/natty-greenes-gallery-6.jpg';
import NattyGallery7 from '../assets/images/projects/natty-greenes-gallery-7.jpg';
import NattyGallery8 from '../assets/images/projects/natty-greenes-gallery-8.jpg';
import NattyGallery9 from '../assets/images/projects/natty-greenes-gallery-9.jpg';
import TeGallery1 from '../assets/images/projects/te-connectivity-gallery-1.jpg';
import TeGallery2 from '../assets/images/projects/te-connectivity-gallery-2.jpg';
import TeGallery3 from '../assets/images/projects/te-connectivity-gallery-3.jpg';
import TeGallery4 from '../assets/images/projects/te-connectivity-gallery-4.jpg';
import TeGallery5 from '../assets/images/projects/te-connectivity-gallery-5.jpg';
import TeGallery6 from '../assets/images/projects/te-connectivity-gallery-6.jpg';
import TeGallery7 from '../assets/images/projects/te-connectivity-gallery-7.jpg';
import TeGallery8 from '../assets/images/projects/te-connectivity-gallery-8.jpg';
import JoymongersGallery1 from '../assets/images/projects/joymongers-gso-gallery-1.jpg';
import JoymongersGallery2 from '../assets/images/projects/joymongers-gso-gallery-2.jpg';
import JoymongersGallery3 from '../assets/images/projects/joymongers-gso-gallery-3.jpg';
import JoymongersGallery4 from '../assets/images/projects/joymongers-gso-gallery-4.jpg';
import JoymongersGallery5 from '../assets/images/projects/joymongers-gso-gallery-5.jpg';
import JoymongersGallery6 from '../assets/images/projects/joymongers-gso-gallery-6.jpg';
import JoymongersGallery7 from '../assets/images/projects/joymongers-gso-gallery-7.jpg';
import JoymongersGallery8 from '../assets/images/projects/joymongers-gso-gallery-8.jpg';
import JoymongersGallery9 from '../assets/images/projects/joymongers-gso-gallery-9.jpg';
import JoymongersGallery10 from '../assets/images/projects/joymongers-gso-gallery-10.jpg';
import JoymongersGallery11 from '../assets/images/projects/joymongers-gso-gallery-11.jpg';
import JoymongersGallery12 from '../assets/images/projects/joymongers-gso-gallery-12.jpg';
import JoymongersGallery13 from '../assets/images/projects/joymongers-gso-gallery-13.jpg';
import JoymongersGallery14 from '../assets/images/projects/joymongers-gso-gallery-14.jpg';
import JoymongersGallery15 from '../assets/images/projects/joymongers-gso-gallery-15.jpg';
import JoymongersGallery16 from '../assets/images/projects/joymongers-gso-gallery-16.jpg';
import JoymongersGallery17 from '../assets/images/projects/joymongers-gso-gallery-17.jpg';
import JoymongersGallery18 from '../assets/images/projects/joymongers-gso-gallery-18.jpg';
import JoymongersGallery19 from '../assets/images/projects/joymongers-gso-gallery-19.jpg';
import ChildrensGallery1 from '../assets/images/projects/childrens-museum-gallery-1.jpg';
import ChildrensGallery2 from '../assets/images/projects/childrens-museum-gallery-2.jpg';
import ChildrensGallery3 from '../assets/images/projects/childrens-museum-gallery-3.jpg';
import ChildrensGallery4 from '../assets/images/projects/childrens-museum-gallery-4.jpg';
import ChildrensGallery5 from '../assets/images/projects/childrens-museum-gallery-5.jpg';
import ChildrensGallery6 from '../assets/images/projects/childrens-museum-gallery-6.jpg';
import ChildrensGallery7 from '../assets/images/projects/childrens-museum-gallery-7.jpg';
import ChildrensGallery8 from '../assets/images/projects/childrens-museum-gallery-8.jpg';
import ChildrensGallery9 from '../assets/images/projects/childrens-museum-gallery-9.jpg';
import ChildrensGallery10 from '../assets/images/projects/childrens-museum-gallery-10.jpg';
import ChildrensGallery11 from '../assets/images/projects/childrens-museum-gallery-11.jpg';
import ChildrensGallery12 from '../assets/images/projects/childrens-museum-gallery-12.jpg';
import ChildrensGallery13 from '../assets/images/projects/childrens-museum-gallery-13.jpg';
import ChildrensGallery14 from '../assets/images/projects/childrens-museum-gallery-14.jpg';
import ChildrensGallery15 from '../assets/images/projects/childrens-museum-gallery-15.jpg';
import ChildrensGallery16 from '../assets/images/projects/childrens-museum-gallery-16.jpg';
import ChildrensGallery17 from '../assets/images/projects/childrens-museum-gallery-17.jpg';
import ChildrensGallery18 from '../assets/images/projects/childrens-museum-gallery-18.jpg';
import ChildrensGallery19 from '../assets/images/projects/childrens-museum-gallery-19.jpg';
import ChildrensGallery20 from '../assets/images/projects/childrens-museum-gallery-20.jpg';
import ChildrensGallery21 from '../assets/images/projects/childrens-museum-gallery-21.jpg';
import ChildrensGallery22 from '../assets/images/projects/childrens-museum-gallery-22.jpg';
import ChildrensGallery23 from '../assets/images/projects/childrens-museum-gallery-23.jpg';
import ChildrensGallery24 from '../assets/images/projects/childrens-museum-gallery-24.jpg';
import ChildrensGallery25 from '../assets/images/projects/childrens-museum-gallery-25.jpg';
import ChildrensGallery26 from '../assets/images/projects/childrens-museum-gallery-26.jpg';
import ChildrensGallery27 from '../assets/images/projects/childrens-museum-gallery-27.jpg';
import ChildrensGallery28 from '../assets/images/projects/childrens-museum-gallery-28.jpg';
import ChildrensGallery29 from '../assets/images/projects/childrens-museum-gallery-29.jpg';
import ChildrensGallery30 from '../assets/images/projects/childrens-museum-gallery-30.jpg';
import ChildrensGallery31 from '../assets/images/projects/childrens-museum-gallery-31.jpg';
import ChildrensGallery32 from '../assets/images/projects/childrens-museum-gallery-32.jpg';
import ChildrensGallery33 from '../assets/images/projects/childrens-museum-gallery-33.jpg';
import ChildrensGallery34 from '../assets/images/projects/childrens-museum-gallery-34.jpg';
import ChildrensGallery35 from '../assets/images/projects/childrens-museum-gallery-35.jpg';
import ChildrensGallery36 from '../assets/images/projects/childrens-museum-gallery-36.jpg';
import ChildrensGallery37 from '../assets/images/projects/childrens-museum-gallery-37.jpg';
import ChildrensGallery38 from '../assets/images/projects/childrens-museum-gallery-38.jpg';
import ChildrensGallery39 from '../assets/images/projects/childrens-museum-gallery-39.jpg';
import ChildrensGallery40 from '../assets/images/projects/childrens-museum-gallery-40.jpg';
import ChildrensGallery41 from '../assets/images/projects/childrens-museum-gallery-41.jpg';
import ChildrensGallery42 from '../assets/images/projects/childrens-museum-gallery-42.jpg';
import ChildrensGallery43 from '../assets/images/projects/childrens-museum-gallery-43.jpg';
import ChildrensGallery44 from '../assets/images/projects/childrens-museum-gallery-44.jpg';
import ChildrensGallery45 from '../assets/images/projects/childrens-museum-gallery-45.jpg';
import ChildrensGallery46 from '../assets/images/projects/childrens-museum-gallery-46.jpg';
import ChildrensGallery47 from '../assets/images/projects/childrens-museum-gallery-47.jpg';
import HarleyGallery1 from '../assets/images/projects/harley-davidson-gso-gallery-1.jpg';
import HarleyGallery2 from '../assets/images/projects/harley-davidson-gso-gallery-2.jpg';
import HarleyGallery3 from '../assets/images/projects/harley-davidson-gso-gallery-3.jpg';
import HarleyGallery4 from '../assets/images/projects/harley-davidson-gso-gallery-4.jpg';
import HarleyGallery5 from '../assets/images/projects/harley-davidson-gso-gallery-5.jpg';
import HarleyGallery6 from '../assets/images/projects/harley-davidson-gso-gallery-6.jpg';
import HarleyGallery7 from '../assets/images/projects/harley-davidson-gso-gallery-7.jpg';
import HarleyGallery8 from '../assets/images/projects/harley-davidson-gso-gallery-8.jpg';
import HarleyGallery9 from '../assets/images/projects/harley-davidson-gso-gallery-9.jpg';
import HarleyGallery10 from '../assets/images/projects/harley-davidson-gso-gallery-10.jpg';
import HarleyGallery11 from '../assets/images/projects/harley-davidson-gso-gallery-11.jpg';
import HarleyGallery12 from '../assets/images/projects/harley-davidson-gso-gallery-12.jpg';
import HarleyGallery13 from '../assets/images/projects/harley-davidson-gso-gallery-13.jpg';
import HarleyGallery14 from '../assets/images/projects/harley-davidson-gso-gallery-14.jpg';
import HarleyGallery15 from '../assets/images/projects/harley-davidson-gso-gallery-15.jpg';
import HarleyGallery16 from '../assets/images/projects/harley-davidson-gso-gallery-16.jpg';
import HarleyGallery17 from '../assets/images/projects/harley-davidson-gso-gallery-17.jpg';
import HarleyGallery18 from '../assets/images/projects/harley-davidson-gso-gallery-18.jpg';
import HarleyGallery19 from '../assets/images/projects/harley-davidson-gso-gallery-19.jpg';
import HarleyGallery20 from '../assets/images/projects/harley-davidson-gso-gallery-20.jpg';
import HarleyGallery21 from '../assets/images/projects/harley-davidson-gso-gallery-21.jpg';
import HarleyGallery22 from '../assets/images/projects/harley-davidson-gso-gallery-22.jpg';
import HarleyGallery23 from '../assets/images/projects/harley-davidson-gso-gallery-23.jpg';
import HarleyGallery24 from '../assets/images/projects/harley-davidson-gso-gallery-24.jpg';
import HarleyGallery25 from '../assets/images/projects/harley-davidson-gso-gallery-25.jpg';
import HarleyGallery26 from '../assets/images/projects/harley-davidson-gso-gallery-26.jpg';
import HarleyGallery27 from '../assets/images/projects/harley-davidson-gso-gallery-27.jpg';

import HarleyGallery33 from '../assets/images/projects/harley-davidson-gso-gallery-33.jpg';
import HarleyGallery34 from '../assets/images/projects/harley-davidson-gso-gallery-34.jpg';
import HarleyGallery35 from '../assets/images/projects/harley-davidson-gso-gallery-35.jpg';
import HarleyGallery36 from '../assets/images/projects/harley-davidson-gso-gallery-36.jpg';
import HarleyGallery37 from '../assets/images/projects/harley-davidson-gso-gallery-37.jpg';
import HarleyGallery38 from '../assets/images/projects/harley-davidson-gso-gallery-38.jpg';
import HarleyGallery39 from '../assets/images/projects/harley-davidson-gso-gallery-39.jpg';
import HarleyGallery40 from '../assets/images/projects/harley-davidson-gso-gallery-40.jpg';
import HarleyGallery41 from '../assets/images/projects/harley-davidson-gso-gallery-41.jpg';
import HarleyGallery42 from '../assets/images/projects/harley-davidson-gso-gallery-42.jpg';
import HarleyGallery43 from '../assets/images/projects/harley-davidson-gso-gallery-43.jpg';
import HarleyGallery44 from '../assets/images/projects/harley-davidson-gso-gallery-44.jpg';
import HarleyGallery45 from '../assets/images/projects/harley-davidson-gso-gallery-45.jpg';
import HarleyGallery46 from '../assets/images/projects/harley-davidson-gso-gallery-46.jpg';
import HarleyGallery47 from '../assets/images/projects/harley-davidson-gso-gallery-47.jpg';
import HarleyGallery48 from '../assets/images/projects/harley-davidson-gso-gallery-48.jpg';
import HarleyGallery49 from '../assets/images/projects/harley-davidson-gso-gallery-49.jpg';
import HarleyGallery50 from '../assets/images/projects/harley-davidson-gso-gallery-50.jpg';
import HarleyGallery51 from '../assets/images/projects/harley-davidson-gso-gallery-51.jpg';
import HarleyGallery52 from '../assets/images/projects/harley-davidson-gso-gallery-52.jpg';
import HarleyGallery53 from '../assets/images/projects/harley-davidson-gso-gallery-53.jpg';
import HarleyGallery54 from '../assets/images/projects/harley-davidson-gso-gallery-54.jpg';
import HarleyGallery55 from '../assets/images/projects/harley-davidson-gso-gallery-55.jpg';
import HarleyGallery56 from '../assets/images/projects/harley-davidson-gso-gallery-56.jpg';
import HarleyGallery57 from '../assets/images/projects/harley-davidson-gso-gallery-57.jpg';
import HarleyGallery58 from '../assets/images/projects/harley-davidson-gso-gallery-58.jpg';
import HarleyGallery59 from '../assets/images/projects/harley-davidson-gso-gallery-59.jpg';
import HarleyGallery60 from '../assets/images/projects/harley-davidson-gso-gallery-60.jpg';
import HarleyGallery61 from '../assets/images/projects/harley-davidson-gso-gallery-61.jpg';
import HarleyGallery62 from '../assets/images/projects/harley-davidson-gso-gallery-62.jpg';
import HarleyGallery63 from '../assets/images/projects/harley-davidson-gso-gallery-63.jpg';
import HarleyGallery64 from '../assets/images/projects/harley-davidson-gso-gallery-64.jpg';
import HarleyGallery65 from '../assets/images/projects/harley-davidson-gso-gallery-65.jpg';
import HarleyGallery66 from '../assets/images/projects/harley-davidson-gso-gallery-66.jpg';
import HarleyGallery67 from '../assets/images/projects/harley-davidson-gso-gallery-67.jpg';
import HarleyGallery68 from '../assets/images/projects/harley-davidson-gso-gallery-68.jpg';
import HarleyGallery69 from '../assets/images/projects/harley-davidson-gso-gallery-69.jpg';


import GtccGallery1 from '../assets/images/projects/gtcc-medlin-gallery-1.jpg';

import NattyWestGallery1 from '../assets/images/projects/natty-west-gate-gallery-1.jpg';
import NattyWestGallery2 from '../assets/images/projects/natty-west-gate-gallery-2.jpg';
import NattyWestGallery3 from '../assets/images/projects/natty-west-gate-gallery-3.jpg';
import NattyWestGallery4 from '../assets/images/projects/natty-west-gate-gallery-4.jpg';
import NattyWestGallery5 from '../assets/images/projects/natty-west-gate-gallery-5.jpg';
import NattyWestGallery6 from '../assets/images/projects/natty-west-gate-gallery-6.jpg';
import NattyWestGallery7 from '../assets/images/projects/natty-west-gate-gallery-7.jpg';
import NattyWestGallery8 from '../assets/images/projects/natty-west-gate-gallery-8.jpg';
import NattyWestGallery9 from '../assets/images/projects/natty-west-gate-gallery-9.jpg';
import NattyWestGallery10 from '../assets/images/projects/natty-west-gate-gallery-10.jpg';
import NattyWestGallery11 from '../assets/images/projects/natty-west-gate-gallery-11.jpg';
import NattyWestGallery12 from '../assets/images/projects/natty-west-gate-gallery-12.jpg';



import CraftedGallery3 from '../assets/images/projects/crafted-taco-gallery-3.jpg';
import CraftedGallery4 from '../assets/images/projects/crafted-taco-gallery-4.jpg';
import CraftedGallery5 from '../assets/images/projects/crafted-taco-gallery-5.jpg';
import CraftedGallery6 from '../assets/images/projects/crafted-taco-gallery-6.jpg';
import CraftedGallery7 from '../assets/images/projects/crafted-taco-gallery-7.jpg';
import CraftedGallery8 from '../assets/images/projects/crafted-taco-gallery-8.jpg';
import CraftedGallery9 from '../assets/images/projects/crafted-taco-gallery-9.jpg';
import CraftedGallery10 from '../assets/images/projects/crafted-taco-gallery-10.jpg';
import CraftedGallery11 from '../assets/images/projects/crafted-taco-gallery-11.jpg';

import EncoreNorthGallery1 from '../assets/images/projects/encore-north-gallery-1.jpg';
import EncoreNorthGallery2 from '../assets/images/projects/encore-north-gallery-2.jpg';
import EncoreNorthGallery3 from '../assets/images/projects/encore-north-gallery-3.jpg';

import KressGallery1 from '../assets/images/projects/kress-building-gallery-1.jpg';
import KressGallery2 from '../assets/images/projects/kress-building-gallery-2.jpg';
import KressGallery3 from '../assets/images/projects/kress-building-gallery-3.jpg';
import KressGallery4 from '../assets/images/projects/kress-building-gallery-4.jpg';
import KressGallery5 from '../assets/images/projects/kress-building-gallery-5.jpg';
import KressGallery6 from '../assets/images/projects/kress-building-gallery-6.jpg';
import KressGallery7 from '../assets/images/projects/kress-building-gallery-7.jpg';
import KressGallery8 from '../assets/images/projects/kress-building-gallery-8.jpg';
import KressGallery9 from '../assets/images/projects/kress-building-gallery-9.jpg';
import KressGallery10 from '../assets/images/projects/kress-building-gallery-10.jpg';
import KressGallery11 from '../assets/images/projects/kress-building-gallery-11.jpg';
import KressGallery12 from '../assets/images/projects/kress-building-gallery-12.jpg';
import KressGallery13 from '../assets/images/projects/kress-building-gallery-13.jpg';
import KressGallery14 from '../assets/images/projects/kress-building-gallery-14.jpg';
import KressGallery15 from '../assets/images/projects/kress-building-gallery-15.jpg';
import KressGallery16 from '../assets/images/projects/kress-building-gallery-16.jpg';
import KressGallery17 from '../assets/images/projects/kress-building-gallery-17.jpg';

import UrgentCareGallery1 from '../assets/images/projects/urgent-care-siler-gallery-1.jpg';
import UrgentCareGallery2 from '../assets/images/projects/urgent-care-siler-gallery-2.jpg';
import UrgentCareGallery3 from '../assets/images/projects/urgent-care-siler-gallery-3.jpg';
import UrgentCareGallery4 from '../assets/images/projects/urgent-care-siler-gallery-4.jpg';
import UrgentCareGallery5 from '../assets/images/projects/urgent-care-siler-gallery-5.jpg';
import UrgentCareGallery6 from '../assets/images/projects/urgent-care-siler-gallery-6.jpg';
import UrgentCareGallery7 from '../assets/images/projects/urgent-care-siler-gallery-7.jpg';
import UrgentCareGallery8 from '../assets/images/projects/urgent-care-siler-gallery-8.jpg';

import McKaysGallery1 from '../assets/images/projects/mckays-gallery-1.jpg';
import McKaysGallery2 from '../assets/images/projects/mckays-gallery-2.jpg';
import McKaysGallery3 from '../assets/images/projects/mckays-gallery-3.jpg';

import SpencerGallery1 from '../assets/images/projects/spencer-hall-gallery-1.jpg';
import SpencerGallery2 from '../assets/images/projects/spencer-hall-gallery-2.jpg';
import SpencerGallery3 from '../assets/images/projects/spencer-hall-gallery-3.jpg';
import SpencerGallery4 from '../assets/images/projects/spencer-hall-gallery-4.jpg';
import SpencerGallery5 from '../assets/images/projects/spencer-hall-gallery-5.jpg';
import SpencerGallery6 from '../assets/images/projects/spencer-hall-gallery-6.jpg';
import SpencerGallery7 from '../assets/images/projects/spencer-hall-gallery-7.jpg';
import SpencerGallery8 from '../assets/images/projects/spencer-hall-gallery-8.jpg';
import SpencerGallery9 from '../assets/images/projects/spencer-hall-gallery-9.jpg';
import SpencerGallery10 from '../assets/images/projects/spencer-hall-gallery-10.jpg';
import SpencerGallery11 from '../assets/images/projects/spencer-hall-gallery-11.jpg';
import SpencerGallery12 from '../assets/images/projects/spencer-hall-gallery-12.jpg';
import SpencerGallery13 from '../assets/images/projects/spencer-hall-gallery-13.jpg';
import SpencerGallery14 from '../assets/images/projects/spencer-hall-gallery-14.jpg';
import SpencerGallery15 from '../assets/images/projects/spencer-hall-gallery-15.jpg';
import SpencerGallery16 from '../assets/images/projects/spencer-hall-gallery-16.jpg';
import SpencerGallery17 from '../assets/images/projects/spencer-hall-gallery-17.jpg';
import SpencerGallery18 from '../assets/images/projects/spencer-hall-gallery-18.jpg';
import SpencerGallery19 from '../assets/images/projects/spencer-hall-gallery-19.jpg';
import SpencerGallery20 from '../assets/images/projects/spencer-hall-gallery-20.jpg';
import SpencerGallery21 from '../assets/images/projects/spencer-hall-gallery-21.jpg';
import SpencerGallery22 from '../assets/images/projects/spencer-hall-gallery-22.jpg';
import SpencerGallery23 from '../assets/images/projects/spencer-hall-gallery-23.jpg';
import SpencerGallery24 from '../assets/images/projects/spencer-hall-gallery-24.jpg';
import SpencerGallery25 from '../assets/images/projects/spencer-hall-gallery-25.jpg';
import SpencerGallery26 from '../assets/images/projects/spencer-hall-gallery-26.jpg';
import SpencerGallery27 from '../assets/images/projects/spencer-hall-gallery-27.jpg';
import SpencerGallery28 from '../assets/images/projects/spencer-hall-gallery-28.jpg';
import SpencerGallery29 from '../assets/images/projects/spencer-hall-gallery-29.jpg';
import SpencerGallery30 from '../assets/images/projects/spencer-hall-gallery-30.jpg';
import SpencerGallery31 from '../assets/images/projects/spencer-hall-gallery-31.jpg';
import SpencerGallery32 from '../assets/images/projects/spencer-hall-gallery-32.jpg';
import SpencerGallery33 from '../assets/images/projects/spencer-hall-gallery-33.jpg';
import SpencerGallery34 from '../assets/images/projects/spencer-hall-gallery-34.jpg';
import SpencerGallery35 from '../assets/images/projects/spencer-hall-gallery-35.jpg';

import HondaSundialGallery1 from '../assets/images/projects/honda-sundial-gallery-1.jpg';

import GreenwayStadiumGallery1 from '../assets/images/projects/greenway-stadium-gallery-1.jpg';
import GreenwayStadiumGallery2 from '../assets/images/projects/greenway-stadium-gallery-2.jpg';
import GreenwayStadiumGallery3 from '../assets/images/projects/greenway-stadium-gallery-3.jpg';
import GreenwayStadiumGallery4 from '../assets/images/projects/greenway-stadium-gallery-4.jpg';
import GreenwayStadiumGallery5 from '../assets/images/projects/greenway-stadium-gallery-5.jpg';
import GreenwayStadiumGallery6 from '../assets/images/projects/greenway-stadium-gallery-6.jpg';
import GreenwayStadiumGallery7 from '../assets/images/projects/greenway-stadium-gallery-7.jpg';
import GreenwayStadiumGallery8 from '../assets/images/projects/greenway-stadium-gallery-8.jpg';
import GreenwayStadiumGallery9 from '../assets/images/projects/greenway-stadium-gallery-9.jpg';
import GreenwayStadiumGallery10 from '../assets/images/projects/greenway-stadium-gallery-10.jpg';

import GreensboroDermGallery1 from '../assets/images/projects/greensboro-dermatology-gallery-1.png';
import GreensboroDermGallery2 from '../assets/images/projects/greensboro-dermatology-gallery-2.png';

import ArchdaleGallery1 from '../assets/images/projects/archdale-hall-gallery-1.jpg';
import ArchdaleGallery2 from '../assets/images/projects/archdale-hall-gallery-2.jpg';
import ArchdaleGallery3 from '../assets/images/projects/archdale-hall-gallery-3.jpg';
import ArchdaleGallery4 from '../assets/images/projects/archdale-hall-gallery-4.jpg';
import ArchdaleGallery5 from '../assets/images/projects/archdale-hall-gallery-5.jpg';
import ArchdaleGallery6 from '../assets/images/projects/archdale-hall-gallery-6.jpg';
import ArchdaleGallery7 from '../assets/images/projects/archdale-hall-gallery-7.jpg';
import ArchdaleGallery8 from '../assets/images/projects/archdale-hall-gallery-8.jpg';
import ArchdaleGallery9 from '../assets/images/projects/archdale-hall-gallery-9.jpg';
import ArchdaleGallery10 from '../assets/images/projects/archdale-hall-gallery-10.jpg';
import ArchdaleGallery11 from '../assets/images/projects/archdale-hall-gallery-11.jpg';
import ArchdaleGallery12 from '../assets/images/projects/archdale-hall-gallery-12.jpg';
import ArchdaleGallery13 from '../assets/images/projects/archdale-hall-gallery-13.jpg';
import ArchdaleGallery14 from '../assets/images/projects/archdale-hall-gallery-14.jpg';
import ArchdaleGallery15 from '../assets/images/projects/archdale-hall-gallery-15.jpg';
import ArchdaleGallery16 from '../assets/images/projects/archdale-hall-gallery-16.jpg';
import ArchdaleGallery17 from '../assets/images/projects/archdale-hall-gallery-17.jpg';
import ArchdaleGallery18 from '../assets/images/projects/archdale-hall-gallery-18.jpg';
import ArchdaleGallery19 from '../assets/images/projects/archdale-hall-gallery-19.jpg';
import ArchdaleGallery20 from '../assets/images/projects/archdale-hall-gallery-20.jpg';
import ArchdaleGallery21 from '../assets/images/projects/archdale-hall-gallery-21.jpg';
import ArchdaleGallery22 from '../assets/images/projects/archdale-hall-gallery-22.jpg';

import DillardGallery1 from '../assets/images/projects/dillard-elementary-gallery-1.jpg';
import DillardGallery2 from '../assets/images/projects/dillard-elementary-gallery-2.jpg';
import DillardGallery3 from '../assets/images/projects/dillard-elementary-gallery-3.jpg';
import DillardGallery4 from '../assets/images/projects/dillard-elementary-gallery-4.jpg';

import GoodwillWestGallery1 from '../assets/images/projects/goodwill-west-market-gallery-1.jpg';
import GoodwillWestGallery2 from '../assets/images/projects/goodwill-west-market-gallery-2.jpg';
import GoodwillWestGallery3 from '../assets/images/projects/goodwill-west-market-gallery-3.jpg';
import GoodwillWestGallery4 from '../assets/images/projects/goodwill-west-market-gallery-4.jpg';
import GoodwillWestGallery5 from '../assets/images/projects/goodwill-west-market-gallery-5.jpg';
import GoodwillWestGallery6 from '../assets/images/projects/goodwill-west-market-gallery-6.jpg';
import GoodwillWestGallery7 from '../assets/images/projects/goodwill-west-market-gallery-7.jpg';
import GoodwillWestGallery8 from '../assets/images/projects/goodwill-west-market-gallery-8.jpg';
import GoodwillWestGallery9 from '../assets/images/projects/goodwill-west-market-gallery-9.jpg';
import GoodwillWestGallery10 from '../assets/images/projects/goodwill-west-market-gallery-10.jpg';
import GoodwillWestGallery11 from '../assets/images/projects/goodwill-west-market-gallery-11.jpg';
import GoodwillWestGallery12 from '../assets/images/projects/goodwill-west-market-gallery-12.jpg';
import GoodwillWestGallery13 from '../assets/images/projects/goodwill-west-market-gallery-13.jpg';
import GoodwillWestGallery14 from '../assets/images/projects/goodwill-west-market-gallery-14.jpg';
import GoodwillWestGallery15 from '../assets/images/projects/goodwill-west-market-gallery-15.jpg';
import GoodwillWestGallery16 from '../assets/images/projects/goodwill-west-market-gallery-16.jpg';
import GoodwillWestGallery17 from '../assets/images/projects/goodwill-west-market-gallery-17.jpg';
import GoodwillWestGallery18 from '../assets/images/projects/goodwill-west-market-gallery-18.jpg';
import GoodwillWestGallery19 from '../assets/images/projects/goodwill-west-market-gallery-19.jpg';
import GoodwillWestGallery20 from '../assets/images/projects/goodwill-west-market-gallery-20.jpg';
import GoodwillWestGallery21 from '../assets/images/projects/goodwill-west-market-gallery-21.jpg';
import GoodwillWestGallery22 from '../assets/images/projects/goodwill-west-market-gallery-22.jpg';
import GoodwillWestGallery23 from '../assets/images/projects/goodwill-west-market-gallery-23.jpg';
import GoodwillWestGallery24 from '../assets/images/projects/goodwill-west-market-gallery-24.jpg';
import GoodwillWestGallery25 from '../assets/images/projects/goodwill-west-market-gallery-25.jpg';
import GoodwillWestGallery26 from '../assets/images/projects/goodwill-west-market-gallery-26.jpg';
import GoodwillWestGallery27 from '../assets/images/projects/goodwill-west-market-gallery-27.jpg';
import GoodwillWestGallery28 from '../assets/images/projects/goodwill-west-market-gallery-28.jpg';
import GoodwillWestGallery29 from '../assets/images/projects/goodwill-west-market-gallery-29.jpg';
import GoodwillWestGallery30 from '../assets/images/projects/goodwill-west-market-gallery-30.jpg';
import GoodwillWestGallery31 from '../assets/images/projects/goodwill-west-market-gallery-31.jpg';
import GoodwillWestGallery32 from '../assets/images/projects/goodwill-west-market-gallery-32.jpg';
import GoodwillWestGallery33 from '../assets/images/projects/goodwill-west-market-gallery-33.jpg';
import GoodwillWestGallery34 from '../assets/images/projects/goodwill-west-market-gallery-34.jpg';
import GoodwillWestGallery35 from '../assets/images/projects/goodwill-west-market-gallery-35.jpg';
import GoodwillWestGallery36 from '../assets/images/projects/goodwill-west-market-gallery-36.jpg';
import GoodwillWestGallery37 from '../assets/images/projects/goodwill-west-market-gallery-37.jpg';
import GoodwillWestGallery38 from '../assets/images/projects/goodwill-west-market-gallery-38.jpg';
import GoodwillWestGallery39 from '../assets/images/projects/goodwill-west-market-gallery-39.jpg';
import GoodwillWestGallery40 from '../assets/images/projects/goodwill-west-market-gallery-40.jpg';
import GoodwillWestGallery41 from '../assets/images/projects/goodwill-west-market-gallery-41.jpg';
import GoodwillWestGallery42 from '../assets/images/projects/goodwill-west-market-gallery-42.jpg';

import CraftedGallery12 from '../assets/images/projects/crafted-taco-gallery-12.jpg';
import CraftedGallery13 from '../assets/images/projects/crafted-taco-gallery-13.jpg';
import CraftedGallery14 from '../assets/images/projects/crafted-taco-gallery-14.jpg';
import CraftedGallery15 from '../assets/images/projects/crafted-taco-gallery-15.jpg';
import CraftedGallery16 from '../assets/images/projects/crafted-taco-gallery-16.jpg';
import CraftedGallery17 from '../assets/images/projects/crafted-taco-gallery-17.jpg';
import CraftedGallery18 from '../assets/images/projects/crafted-taco-gallery-18.jpg';
import CraftedGallery19 from '../assets/images/projects/crafted-taco-gallery-19.jpg';
import CraftedGallery20 from '../assets/images/projects/crafted-taco-gallery-20.jpg';
import CraftedGallery21 from '../assets/images/projects/crafted-taco-gallery-21.jpg';
import CraftedGallery22 from '../assets/images/projects/crafted-taco-gallery-22.jpg';
import CraftedGallery23 from '../assets/images/projects/crafted-taco-gallery-23.jpg';
import CraftedGallery24 from '../assets/images/projects/crafted-taco-gallery-24.jpg';
import CraftedGallery25 from '../assets/images/projects/crafted-taco-gallery-25.jpg';
import CraftedGallery26 from '../assets/images/projects/crafted-taco-gallery-26.jpg';
import CraftedGallery27 from '../assets/images/projects/crafted-taco-gallery-27.jpg';
import CraftedGallery28 from '../assets/images/projects/crafted-taco-gallery-28.jpg';
import CraftedGallery29 from '../assets/images/projects/crafted-taco-gallery-29.jpg';
import CraftedGallery30 from '../assets/images/projects/crafted-taco-gallery-30.jpg';
import CraftedGallery31 from '../assets/images/projects/crafted-taco-gallery-31.jpg';
import CraftedGallery32 from '../assets/images/projects/crafted-taco-gallery-32.jpg';


export const projectsData = {
  'kress-building': {
    title: 'The Kress Building',
    location: 'Greensboro, NC',
    region: 'triad',
    type: 'Historic Preservation',
    marketSlug: 'corporate-interiors',
    image: KressGallery1,
    galleryImages: [KressGallery1, KressGallery2, KressGallery3, KressGallery4, KressGallery5, KressGallery6, KressGallery7, KressGallery8, KressGallery9, KressGallery10, KressGallery11, KressGallery12, KressGallery13, KressGallery14, KressGallery15, KressGallery16, KressGallery17],
    metaTitle: 'The Kress Building Historic Renovation | Lomax Construction',
    metaDescription: 'Award-winning historic restoration of the Kress Building in downtown Greensboro into a mixed-use landmark.',
    description: 'A landmark restoration of the 1930 Art Deco Kress Building. We revitalized this Main Street icon into a vibrant mixed-use facility featuring retail, office space, and a luxury penthouse with a rooftop terrace.',
    challenge: "Converting a 1930s retail structure into Class-A mixed-use space required navigating strict State Historic Preservation Office (SHPO) guidelines while integrating modern fire-safety and MEP systems into a structure with zero ceiling plenums.",
    solution: "We utilized advanced mostly non-destructive investigation techniques to route systems through existing chases. The terra cotta façade was restored ensuring full tax credit compliance, delivering a modern asset that honors its Art Deco legacy.",
    services: ['Historic Preservation', 'Renovation', 'General Contracting'],
    year: '2001'
  },
  'urgent-care-siler': {
    title: 'Central Piedmont Urgent Care',
    location: 'Siler City, NC',
    region: 'triad',
    type: 'Healthcare',
    marketSlug: 'healthcare',
    image: UrgentCareGallery3,
    galleryImages: [UrgentCareGallery1, UrgentCareGallery2, UrgentCareGallery3, UrgentCareGallery4, UrgentCareGallery5, UrgentCareGallery6, UrgentCareGallery7, UrgentCareGallery8],
    metaTitle: 'Central Piedmont Urgent Care Construction | Lomax Construction',
    metaDescription: 'Construction of the Central Piedmont Urgent Care facility in Siler City, NC, delivering a modern and accessible healthcare environment.',
    description: 'A modern urgent care facility designed to serve the Siler City community. The project focused on creating a welcoming and efficient environment for patients and medical staff.',
    challenge: 'Delivering a high-quality medical upfit with specialized exam rooms and diagnostic areas within a tight schedule to meet community healthcare needs.',
    solution: 'We streamlined the construction process to ensure timely delivery, installing medical-grade finishes and systems while maintaining a patient-centric design.',
    services: ['General Contracting', 'Medical Upfit'],
    year: '2019'
  },
  'mckays-books': {
    title: 'McKay\'s Books',
    location: 'Mebane, NC',
    region: 'triad',
    type: 'Retail',
    marketSlug: 'commercial',
    image: McKaysGallery1,
    galleryImages: [McKaysGallery1, McKaysGallery2, McKaysGallery3],
    metaTitle: 'McKay\'s Books Mebane Construction | Lomax Construction',
    metaDescription: 'New construction of the 35,000 sq ft McKay\'s Books retail superstore in Mebane, NC. A massive upgrade for the beloved book and media exchange.',
    description: 'A massive 35,000 square foot retail destination. This ground-up construction project provides a significantly larger and more streamlined home for McKay\'s, featuring expansive retail floor space and improved intake processing areas.',
    challenge: 'Constructing a large-span retail facility with high-volume customer flow requirements and specific intake logistics for their trade-in process.',
    solution: 'We delivered a purpose-built facility with optimized layout for inventory management and customer experience, ensuring a smooth transition from their previous location.',
    services: ['General Contracting', 'New Construction'],
    year: '2024'
  },
  'spencer-hall': {
    title: 'North & South Spencer Hall',
    location: 'Greensboro, NC',
    region: 'triad',
    type: 'Education',
    marketSlug: 'education',
    image: SpencerGallery1,
    galleryImages: [SpencerGallery1, SpencerGallery2, SpencerGallery3, SpencerGallery4, SpencerGallery5, SpencerGallery6, SpencerGallery7, SpencerGallery8, SpencerGallery9, SpencerGallery10, SpencerGallery11, SpencerGallery12, SpencerGallery13, SpencerGallery14, SpencerGallery15, SpencerGallery16, SpencerGallery17, SpencerGallery18, SpencerGallery19, SpencerGallery20, SpencerGallery21, SpencerGallery22, SpencerGallery23, SpencerGallery24, SpencerGallery25, SpencerGallery26, SpencerGallery27, SpencerGallery28, SpencerGallery29, SpencerGallery30, SpencerGallery31, SpencerGallery32, SpencerGallery33, SpencerGallery34, SpencerGallery35],
    metaTitle: 'UNCG Spencer Hall Renovation | Lomax Construction',
    metaDescription: 'Renovation of the historic North and South Spencer Residence Hills at UNCG. Updating infrastructure while preserving campus history.',
    description: 'A comprehensive renovation of the historic North and South Spencer Residence Halls at UNCG. The project modernized student living spaces while respecting the architectural legacy of the campus.',
    challenge: 'Upgrading MEP systems, accessibility, and finishes in a historic residence hall within a constrained summer construction window to be ready for fall semester.',
    solution: 'We executed a fast-track phased renovation, upgrading bathrooms, mechanical systems, and interior finishes to improve student comfort and sustainability.',
    services: ['Renovation', 'Education', 'General Contracting'],
    year: '2008'
  },
  'honda-sundial': {
    title: 'Honda Aircraft Company - Sundial',
    location: 'Greensboro, NC',
    region: 'triad',
    type: 'Specialized Construction',
    marketSlug: 'corporate-interiors',
    image: HondaSundialGallery1,
    galleryImages: [HondaSundialGallery1],
    metaTitle: 'Honda Aircraft Company Sundial | Lomax Construction',
    metaDescription: 'Construction of a custom sundial feature for the Honda Aircraft Company campus in Greensboro, NC.',
    description: 'A specialized construction project featuring a custom sundial for the Honda Aircraft Company campus. This project highlights our ability to execute unique and precise architectural features.',
    challenge: 'Executing a precise architectural feature that serves both aesthetic and functional purposes within a corporate aviation campus.',
    solution: 'We delivered a high-quality installation that aligns with the precision-focused brand identity of Honda Aircraft Company.',
    services: ['General Contracting', 'Specialized Construction'],
    year: '2015'
  },
  'greenway-stadium': {
    title: 'Greenway at Stadium Park',
    location: 'Greensboro, NC',
    region: 'triad',
    type: 'Multi-Family Housing',
    marketSlug: 'multi-family-housing',
    image: GreenwayStadiumGallery2,
    galleryImages: [GreenwayStadiumGallery1, GreenwayStadiumGallery2, GreenwayStadiumGallery3, GreenwayStadiumGallery4, GreenwayStadiumGallery5, GreenwayStadiumGallery6, GreenwayStadiumGallery7, GreenwayStadiumGallery8, GreenwayStadiumGallery9, GreenwayStadiumGallery10],
    metaTitle: 'Greenway at Stadium Park Apartments | Lomax Construction',
    metaDescription: 'Construction of the Greenway at Stadium Park, a luxury downtown Greensboro apartment community featuring resort-style amenities.',
    description: 'A vibrant apartment community in the heart of downtown Greensboro. The Greenway at Stadium Park offers modern living with resort-inspired swimming pools, a rooftop terrace, and easy access to the city\'s energy.',
    challenge: 'Building a high-density residential complex in a busy urban environment while ensuring minimal disruption to the surrounding downtown area.',
    solution: 'We managed the logistics of downtown construction to deliver a premium residential community with top-tier amenities, contributing to the revitalization of the city center.',
    services: ['General Contracting', 'New Construction'],
    year: '2015'
  },
  'greensboro-dermatology': {
    title: 'Greensboro Dermatology',
    location: 'Greensboro, NC',
    region: 'triad',
    type: 'Healthcare',
    marketSlug: 'healthcare',
    image: GreensboroDermGallery1,
    galleryImages: [GreensboroDermGallery1, GreensboroDermGallery2],
    metaTitle: 'Greensboro Dermatology Clinic Construction | Lomax Construction',
    metaDescription: 'Construction of a cutting-edge dermatology clinic in Greensboro, NC. Dedicated to creating an optimal environment for skin health.',
    description: 'A dedicated medical skin care facility designed to provide a comfortable and sterile environment for dermatology patients. The project focused on functional treatment rooms and a welcoming reception area.',
    challenge: 'Integrating specialized medical equipment and lighting requirements within a modern, patient-friendly aesthetic.',
    solution: 'We delivered a pristine medical facility with advanced HVAC and lighting systems to support exacting dermatological procedures.',
    services: ['General Contracting', 'Medical Upfit'],
    year: '2018'
  },
  'archdale-hall': {
    title: 'Archdale Hall Restoration - Guilford College',
    location: 'Greensboro, NC',
    region: 'triad',
    type: 'Education',
    marketSlug: 'education',
    image: ArchdaleGallery3,
    galleryImages: [ArchdaleGallery1, ArchdaleGallery2, ArchdaleGallery3, ArchdaleGallery4, ArchdaleGallery5, ArchdaleGallery6, ArchdaleGallery7, ArchdaleGallery8, ArchdaleGallery9, ArchdaleGallery10, ArchdaleGallery11, ArchdaleGallery12, ArchdaleGallery13, ArchdaleGallery14, ArchdaleGallery15, ArchdaleGallery16, ArchdaleGallery17, ArchdaleGallery18, ArchdaleGallery19, ArchdaleGallery20, ArchdaleGallery21, ArchdaleGallery22],
    metaTitle: 'Archdale Hall Renovation Guilford College | Lomax Construction',
    metaDescription: 'Historic renovation of Archdale Hall at Guilford College. Preserving the legacy of one of the oldest buildings on campus.',
    description: 'A respectful renovation of Archdale Hall, a historic structure on the Guilford College campus. The project updated the facility for modern educational use while strictly preserving its historic character.',
    challenge: 'Uncovering and addressing structural aging in a historic brick building while installing modern fire safety and accessibility features without damaging the original architecture.',
    solution: 'We meticulously restored the masonry and interior details, integrating hidden modern systems to extend the life of this campus landmark for future generations.',
    services: ['Renovation', 'Historic Preservation'],
    year: '2010'
  },
  'dillard-elementary': {
    title: 'Dillard Elementary School',
    location: 'Madison, NC',
    region: 'triad',
    type: 'Education',
    marketSlug: 'education',
    image: DillardGallery1,
    galleryImages: [DillardGallery1, DillardGallery2, DillardGallery3, DillardGallery4],
    metaTitle: 'Dillard Elementary School Renovation | Lomax Construction',
    metaDescription: 'Upgrades and renovations for Dillard Elementary School. Improving educational spaces for students and faculty.',
    description: 'Renovations and improvements to Dillard Elementary School facilities. The project aimed to enhance the learning environment through upgraded classrooms and common areas.',
    challenge: 'Performing construction work in an active school zone with strict safety protocols and a tight schedule during breaks.',
    solution: 'We coordinated closely with school administration to deliver safety-enhancing upgrades and modern finishes with zero disruption to the academic calendar.',
    services: ['General Contracting', 'Education'],
    year: '2012'
  },
  'goodwill-west-market': {
    title: 'Goodwill Industries - West Market St',
    location: 'Greensboro, NC',
    region: 'triad',
    type: 'Retail',
    marketSlug: 'commercial',
    image: GoodwillWestGallery39,
    galleryImages: [GoodwillWestGallery1, GoodwillWestGallery2, GoodwillWestGallery3, GoodwillWestGallery4, GoodwillWestGallery5, GoodwillWestGallery6, GoodwillWestGallery7, GoodwillWestGallery8, GoodwillWestGallery9, GoodwillWestGallery10, GoodwillWestGallery11, GoodwillWestGallery12, GoodwillWestGallery13, GoodwillWestGallery14, GoodwillWestGallery15, GoodwillWestGallery16, GoodwillWestGallery17, GoodwillWestGallery18, GoodwillWestGallery19, GoodwillWestGallery20, GoodwillWestGallery21, GoodwillWestGallery22, GoodwillWestGallery23, GoodwillWestGallery24, GoodwillWestGallery25, GoodwillWestGallery26, GoodwillWestGallery27, GoodwillWestGallery28, GoodwillWestGallery29, GoodwillWestGallery30, GoodwillWestGallery31, GoodwillWestGallery32, GoodwillWestGallery33, GoodwillWestGallery34, GoodwillWestGallery35, GoodwillWestGallery36, GoodwillWestGallery37, GoodwillWestGallery38, GoodwillWestGallery39, GoodwillWestGallery40, GoodwillWestGallery41, GoodwillWestGallery42],
    metaTitle: 'Goodwill Industries West Market St Construction | Lomax Construction',
    metaDescription: 'Construction and upfit for the Goodwill Industries retail store and donation center on West Market St in Greensboro.',
    description: 'A comprehensive retail upfit for Goodwill Industries. This facility features a large retail floor, efficient donation processing centers, and administrative offices to support their community mission.',
    challenge: 'Optimizing the layout to handle both high-volume retail traffic and the logistics of heavy donation intake and sorting.',
    solution: 'We constructed a durable, efficient facility with clear separation between customer and operational zones, using high-traffic finishes to ensure longevity.',
    services: ['General Contracting', 'Retail Upfit'],
    year: '2016'
  },
  'crafted-taco': {
    title: 'Crafted: The Art of the Taco',
    location: 'Greensboro, NC',
    region: 'triad',
    type: 'Hospitality',
    marketSlug: 'restaurant-hospitality',
    image: CraftedGallery3,
    galleryImages: [CraftedGallery3, CraftedGallery4, CraftedGallery5, CraftedGallery6, CraftedGallery7, CraftedGallery8, CraftedGallery9, CraftedGallery10, CraftedGallery11, CraftedGallery12, CraftedGallery13, CraftedGallery14, CraftedGallery15, CraftedGallery16, CraftedGallery17, CraftedGallery18, CraftedGallery19, CraftedGallery20, CraftedGallery21, CraftedGallery22, CraftedGallery23, CraftedGallery24, CraftedGallery25, CraftedGallery26, CraftedGallery27, CraftedGallery28, CraftedGallery29, CraftedGallery30, CraftedGallery31, CraftedGallery32],
    metaTitle: 'Crafted: The Art of the Taco Construction | Lomax Construction',
    metaDescription: 'Restaurant upfit for Crafted: The Art of the Taco in downtown Greensboro. Creating a vibrant, eclectic dining space.',
    description: 'A vibrant and eclectic restaurant spaces in downtown Greensboro known for its unique take on tacos and street food culture. The design reflects the creativity of the menu with a bold, artistic interior.',
    challenge: 'Renovating a historic downtown storefront to accommodate a high-volume commercial kitchen and dining area while maintaining unique architectural character.',
    solution: 'We exposed original brick walls and integrated industrial elements to create a rustic yet modern atmosphere that complements the "crafted" culinary concept.',
    services: ['General Contracting', 'Restaurant Upfit'],
    year: '2014'
  },
  'natty-west-gate': {
    title: 'Natty Greene\'s Brewhouse West Gate',
    location: 'Greensboro, NC',
    region: 'triad',
    type: 'Hospitality',
    marketSlug: 'restaurant-hospitality',
    image: NattyWestGallery1,
    galleryImages: [NattyWestGallery1, NattyWestGallery2, NattyWestGallery3, NattyWestGallery4, NattyWestGallery5, NattyWestGallery6, NattyWestGallery7, NattyWestGallery8, NattyWestGallery9, NattyWestGallery10, NattyWestGallery11, NattyWestGallery12],
    metaTitle: 'Natty Greene\'s Brewhouse West Gate Construction | Lomax Construction',
    metaDescription: 'Construction of Natty Greene\'s production brewery and taproom at West Gate City Blvd.',
    description: 'A dedicated production brewery and taproom facility located at West Gate City Blvd, serving as a major hub for the brand\'s brewing operations.',
    challenge: 'Integrating a large-scale industrial brewing facility with a customer-facing taproom and dining area, requiring careful attention to logistics, safety, and acoustics.',
    solution: 'Constructed a robust facility with high ceilings and reinforced floors for heavy brewing equipment, while creating a warm, inviting atmosphere for guests with industrial-chic finishes.',
    services: ['General Contracting', 'Brewery', 'Industrial'],
    year: '2006'
  },
  'harley-davidson-gso': {
    title: 'Harley-Davidson Showroom',
    location: 'Greensboro, NC',
    region: 'triad',
    type: 'Retail',
    marketSlug: 'corporate-interiors',
    image: HarleyImg,
    galleryImages: [HarleyGallery1, HarleyGallery2, HarleyGallery3, HarleyGallery4, HarleyGallery5, HarleyGallery6, HarleyGallery7, HarleyGallery8, HarleyGallery9, HarleyGallery10, HarleyGallery11, HarleyGallery12, HarleyGallery13, HarleyGallery14, HarleyGallery15, HarleyGallery16, HarleyGallery17, HarleyGallery18, HarleyGallery19, HarleyGallery20, HarleyGallery21, HarleyGallery22, HarleyGallery23, HarleyGallery24, HarleyGallery25, HarleyGallery26, HarleyGallery27, HarleyGallery33, HarleyGallery34, HarleyGallery35, HarleyGallery36, HarleyGallery37, HarleyGallery38, HarleyGallery39, HarleyGallery40, HarleyGallery41, HarleyGallery42, HarleyGallery43, HarleyGallery44, HarleyGallery45, HarleyGallery46, HarleyGallery47, HarleyGallery48, HarleyGallery49, HarleyGallery50, HarleyGallery51, HarleyGallery52, HarleyGallery53, HarleyGallery54, HarleyGallery55, HarleyGallery56, HarleyGallery57, HarleyGallery58, HarleyGallery59, HarleyGallery60, HarleyGallery61, HarleyGallery62, HarleyGallery63, HarleyGallery64, HarleyGallery65, HarleyGallery66, HarleyGallery67, HarleyGallery68, HarleyGallery69],
    metaTitle: 'Harley-Davidson Dealership Renovation | Lomax Construction',
    metaDescription: 'Commercial renovation and exterior upfit for the Harley-Davidson dealership in Greensboro.',
    description: 'Exterior facelift and interior showroom renovation for the legendary motorcycle brand.',
    challenge: 'Updating the retail experience to align with the brand\'s modern identity while maintaining operations.',
    solution: 'We phased the exterior improvements to minimize impact on customer parking and showroom access during the riding season.',
    services: ['Renovation'],
    year: '2018'
  },
  'unc-mri': {
    title: 'UNC Hospitals MRI Suite',
    location: 'Chapel Hill, NC',
    region: 'raleigh-durham',
    type: 'Healthcare',
    marketSlug: 'healthcare',
    image: HealthcareImg,
    galleryImages: [UncMriGallery1, UncMriGallery2, UncMriGallery3, UncMriGallery4],
    metaTitle: 'UNC Hospitals MRI Suite Construction | Lomax Construction',
    metaDescription: 'Complex renovation of an MRI suite at UNC Hospitals. Specialized copper shielding and occupied space construction.',
    description: 'A critical renovation within the active UNC Hospitals complex involving the installation of a new high-field MRI suite. The project required precise coordination to upgrade the department without interrupting daily radiological operations.',
    challenge: "Constructing a high-field MRI suite within an operational hospital required zero-tolerance vibration mitigation and strict infection control (ICRA Class IV). The presence of the magnet necessitated a complete non-ferrous construction zone.",
    solution: "We installed a specialized isolated slab with fiberglass reinforcement to prevent magnetic interference. Radio Frequency (RF) copper shielding was meticulously soldered and tested to 100dB attenuation, ensuring clinical image fidelity immediately upon commissioning.",
    services: ['General Contracting', 'Renovation'],
    year: '2023'
  },
  'encore-north': {
    title: 'Encore North Apartments',
    location: 'Greensboro, NC',
    region: 'triad',
    type: 'Multi-Family',
    marketSlug: 'multi-family-housing',
    image: EncoreNorthHero,
    galleryImages: [EncoreNorthGallery1, EncoreNorthGallery2, EncoreNorthGallery3],
    metaTitle: 'Encore North Apartments Construction | Lomax Construction',
    metaDescription: 'Construction of the 237-unit Encore North apartment community in Greensboro, NC. Modern multi-family living.',
    description: 'A modern 237-unit apartment community located in Greensboro, NC. The development features five three-story buildings with a mix of one and two-bedroom homes.',
    challenge: "Developing a 237-unit site with significant topography challenges while coordinating vertical construction on five massive buildings simultaneously to hit the pre-leasing season window.",
    solution: "We implemented a rolling delivery schedule, prioritizing the Clubhouse and Building 1 for early Certificate of Occupancy (CO). This allowed the owner to begin revenue generation and move-ins while our crews safely completed the rear buildings, separated by secure construction fencing.",
    services: ['General Contracting', 'New Construction'],
    year: '2017'
  },
  'elon-law': {
    title: 'Elon Law School',
    location: 'Greensboro, NC',
    region: 'triad',
    type: 'Education',
    marketSlug: 'education',
    image: EducationImg,
    galleryImages: [ElonImg2, ElonImg3, ElonImg4, ElonImg5, ElonImg6, ElonImg7, ElonImg8, ElonImg9, ElonImg10, ElonImg11, ElonImg12, ElonImg13, ElonImg14, ElonImg15, ElonImg16, ElonImg17, ElonImg18],
    metaTitle: 'Elon Law School Construction Project | Lomax Construction',
    metaDescription: 'Adaptive reuse project transforming the historic Greensboro Central Public Library into the 84,000 SF Elon University School of Law.',
    description: 'Adaptive reuse of the historic former Greensboro Central Public Library into the H. Michael Weaver Building, a state-of-the-art, four-story law school facility.',
    challenge: "Transforming a mid-century library into a 21st-century law school demanded distinct acoustic isolation for moot courtrooms and high-density data infrastructure for digital legal research, all within an accelerated 10-month academic window.",
    solution: "We completely abated and gutted the interior, creating box-in-box floating floor constructions for the courtrooms to achieve STC-60 ratings. The project was delivered 2 weeks ahead of the Fall semester, allowing faculty to settle in early.",
    services: ['Design-Build', 'Renovation'],
    year: '2020'
  },
  'first-presbyterian': {
    title: 'First Presbyterian Church',
    location: 'Greensboro, NC',
    region: 'triad',
    type: 'Civic',
    marketSlug: 'civic-municipal',
    image: CivicImg,
    galleryImages: [FirstPresGallery1, FirstPresGallery2, FirstPresGallery3, FirstPresGallery4, FirstPresGallery5, FirstPresGallery6, FirstPresGallery7, FirstPresGallery8, FirstPresGallery9, FirstPresGallery10, FirstPresGallery11, FirstPresGallery12, FirstPresGallery13, FirstPresGallery14, FirstPresGallery15, FirstPresGallery16, FirstPresGallery17, FirstPresGallery18],
    metaTitle: 'First Presbyterian Church Welcome Center | Lomax Construction',
    metaDescription: 'Addition of a new Welcome Center and sanctuary renovation for First Presbyterian Church in Greensboro.',
    description: 'A significant addition of a Welcome Center and renovation of the historic sanctuary to improve accessibility and community welcoming.',
    challenge: 'Matching the architectural style of the 100-year-old stone church with modern materials and adhering to strict historic preservation guidelines.',
    solution: 'We sourced stone from the original quarry used in 1928 to ensure a seamless visual integration between the new addition and the historic sanctuary.',
    services: ['General Contracting'],
    year: '2022'
  },
  'culp-showroom': {
    title: 'Culp Showroom',
    location: 'High Point, NC',
    region: 'triad',
    type: 'Corporate',
    marketSlug: 'corporate-interiors',
    image: CorporateImg,
    galleryImages: [CulpGallery1, CulpGallery2, CulpGallery3, CulpGallery4, CulpGallery5, CulpGallery6, CulpGallery7, CulpGallery8, CulpGallery9, CulpGallery10, CulpGallery11, CulpGallery12, CulpGallery13, CulpGallery14, CulpGallery15, CulpGallery16, CulpGallery17, CulpGallery18, CulpGallery19, CulpGallery20],
    metaTitle: 'Culp Inc. Showroom High Point | Lomax Construction',
    metaDescription: 'High-end corporate showroom upfit for Culp Inc. in the Congdon Yards complex.',
    description: 'A flagship showroom upfit located in the innovative Congdon Yards complex, the heart of High Point\'s design district.',
    challenge: 'Delivering a high-end space with open ceilings and polished concrete in time for the High Point Furniture Market deadline.',
    solution: 'We expedited the schedule with a 6-day work week and coordinated closely with the Congdon Yards development team to manage logistics in the active mixed-use building.',
    services: ['Tenant Upfit'],
    year: '2021'
  },
  'natty-greenes': {
    title: 'Natty Greene\'s Brewing',
    location: 'Greensboro, NC',
    region: 'triad',
    type: 'Hospitality',
    marketSlug: 'restaurant-hospitality',
    image: HospitalityImg,
    galleryImages: [NattyGallery1, NattyGallery2, NattyGallery3, NattyGallery4, NattyGallery5, NattyGallery6, NattyGallery7, NattyGallery8, NattyGallery9],
    metaTitle: 'Natty Greene\'s Brewery Construction | Lomax Construction',
    metaDescription: 'Construction of the production brewery and taproom for Natty Greene\'s Brewing Co.',
    description: 'Construction of a large-scale production brewery and taproom facility to support regional distribution. The project included a custom-designed brewhouse, fermentation hall, and a vibrant public taproom that captures the industrial spirit of the brand.',
    challenge: "Installing industrial-scale fermentation tanks and a steam boiler system into a dual-use facility required structural reinforcement of the existing slab and precise coordination of complex process piping, all while maintaining a safe, compelling visitor experience.",
    solution: "We poured high-strength, chemical-resistant concrete with slot drains sloped to <1/8 inch tolerance. The MEP systems were engineered to handle peak production loads, with exposed stainless steel piping serving as a functional aesthetic feature for the taproom.",
    services: ['General Contracting', 'Industrial'],
    year: '2019'
  },
  'te-connectivity': {
    title: 'TE Connectivity Titan',
    location: 'Winston-Salem, NC',
    region: 'triad',
    type: 'Industrial',
    marketSlug: 'industrial-manufacturing',
    image: IndustrialImg,
    galleryImages: [TeGallery1, TeGallery2, TeGallery3, TeGallery4, TeGallery5, TeGallery6, TeGallery7, TeGallery8],
    metaTitle: 'TE Connectivity Manufacturing Plant Expansion | Lomax Construction',
    metaDescription: 'Expansion of the TE Connectivity manufacturing plant in Winston-Salem, NC.',
    description: 'A 50,000 SF expansion of an active manufacturing plant to increase production capacity.',
    challenge: 'Connecting to the existing structure without disrupting 24/7 production lines and sensitive electronic manufacturing processes.',
    solution: 'Built temporary dust walls and positive pressure zones to isolate the construction area completely, allowing the plant to maintain full output during construction.',
    services: ['Expansion'],
    year: '2018'
  },
  'joymongers-gso': {
    title: 'Joymongers Brewing Co.',
    location: 'Greensboro, NC',
    region: 'triad',
    type: 'Hospitality',
    marketSlug: 'restaurant-hospitality',
    image: JoymongersImg,
    galleryImages: [JoymongersGallery1, JoymongersGallery2, JoymongersGallery3, JoymongersGallery4, JoymongersGallery5, JoymongersGallery6, JoymongersGallery7, JoymongersGallery8, JoymongersGallery9, JoymongersGallery10, JoymongersGallery11, JoymongersGallery12, JoymongersGallery13, JoymongersGallery14, JoymongersGallery15, JoymongersGallery16, JoymongersGallery17, JoymongersGallery18, JoymongersGallery19],
    metaTitle: 'Joymongers Brewing Company Construction | Lomax Construction',
    metaDescription: 'Downtown brewery taproom and patio construction for Joymongers Brewing Co. in Greensboro, NC.',
    description: 'A vibrant downtown brewery upfit featuring an open-concept taproom and connected outdoor gathering space.',
    challenge: 'Transforming an existing structure into a functional brewery while maximizing the connection between the indoor bar and the outdoor urban park.',
    solution: 'We installed large garage-style glass doors and created a seamless flow for patrons, helping establish Joymongers as a community anchor.',
    services: ['Renovation'],
    year: '2016'
  },
  'childrens-museum': {
    title: 'Greensboro Children’s Museum',
    location: 'Greensboro, NC',
    region: 'triad',
    type: 'Civic',
    marketSlug: 'civic-municipal',
    image: ChildrensMuseumImg,
    galleryImages: [ChildrensGallery1, ChildrensGallery2, ChildrensGallery3, ChildrensGallery4, ChildrensGallery5, ChildrensGallery6, ChildrensGallery7, ChildrensGallery8, ChildrensGallery9, ChildrensGallery10, ChildrensGallery11, ChildrensGallery12, ChildrensGallery13, ChildrensGallery14, ChildrensGallery15, ChildrensGallery16, ChildrensGallery17, ChildrensGallery18, ChildrensGallery19, ChildrensGallery20, ChildrensGallery21, ChildrensGallery22, ChildrensGallery23, ChildrensGallery24, ChildrensGallery25, ChildrensGallery26, ChildrensGallery27, ChildrensGallery28, ChildrensGallery29, ChildrensGallery30, ChildrensGallery31, ChildrensGallery32, ChildrensGallery33, ChildrensGallery34, ChildrensGallery35, ChildrensGallery36, ChildrensGallery37, ChildrensGallery38, ChildrensGallery39, ChildrensGallery40, ChildrensGallery41, ChildrensGallery42, ChildrensGallery43, ChildrensGallery44, ChildrensGallery45, ChildrensGallery46, ChildrensGallery47],
    metaTitle: 'Greensboro Children’s Museum Construction | Lomax Construction',
    metaDescription: 'interactive educational exhibit construction and facility improvements for the Greensboro Children’s Museum.',
    description: 'Interactive outdoor educational space and facility improvements for the beloved Greensboro institution.',
    challenge: 'Constructing durable, safe, and engaging structures that can withstand heavy daily use by children.',
    solution: 'We used commercial-grade materials with playful design elements, ensuring safety compliance while maintaining the whimsy of the design.',
    services: ['General Contracting'],
    year: '2017'
  },
  'gtcc-medlin': {
    title: 'GTCC Medlin Campus Center',
    location: 'Jamestown, NC',
    region: 'triad',
    type: 'Education',
    marketSlug: 'education',
    image: GtccImg,
    galleryImages: [GtccGallery1],
    metaTitle: 'GTCC Medlin Campus Center Renovation | Lomax Construction',
    metaDescription: 'Major renovation of the student services hub at Guilford Technical Community College.',
    description: 'A comprehensive renovation of the central student services hub at GTCC\'s Jamestown campus.',
    challenge: 'Modernizing a 1970s era building to meet contemporary student service needs and energy codes.',
    solution: 'The project delivered a refreshed, light-filled environment that centralizes student resources in a modern, accessible facility.',
    services: ['Renovation'],
    year: '2018'
  }
};
