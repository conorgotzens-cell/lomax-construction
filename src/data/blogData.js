
import HealthcareImg from '../assets/images/projects/healthcare-hero.jpg';
import EducationImg from '../assets/images/projects/education-hero.jpg';
import CorporateImg from '../assets/images/projects/corporate-hero.jpg';
import CivicImg from '../assets/images/projects/civic-hero.jpg';
import IndustrialImg from '../assets/images/projects/industrial-hero.jpg';

export const blogData = [
  {
    id: 'medical-office-renovation-checklist',
    slug: 'essential-checklist-medical-office-renovations-nc',
    title: 'The Essential Checklist for Medical Office Renovations in NC',
    excerpt: 'Renovating an occupied medical practice requires military-grade precision. From DHSR inspections to infection control, here is your roadmap to a successful modernization.',
    author: 'Lomax Technical Team',
    date: 'December 4, 2025',
    category: 'Specialized Construction',
    categorySlug: 'specialized',
    image: HealthcareImg,
    readTime: '15 min read',
    content: `
      <h2>Modernizing Medicine: More Than Just Paint</h2>
      <p>Renovating a medical office in North Carolina is a high-stakes endeavor. Unlike a standard corporate upfit, a healthcare renovation involves a complex web of regulations—from the <strong>NC Division of Health Service Regulation (DHSR)</strong> to strict local building codes—all while potentially keeping your practice open for patients.</p>
      <p>Whether you are expanding a dental practice in Raleigh or updating a surgery center in Greensboro, the margin for error is razor-thin. A missed permit or an infection control breach can shut down your revenue stream instantly.</p>
      <p>We have compiled this comprehensive checklist based on decades of experience managing healthcare construction projects across the Carolinas. Use this roadmap to navigate the complexity.</p>

      <hr />

      <h3>Part 1: Initial Feasibility & Compliance</h3>
      <p>Before you select a single tile sample or look at floor plans, you must establish the regulatory boundaries of your project. This is where most timelines die.</p>
      
      <h4>1. Certificate of Need (CON) Verification</h4>
      <p>North Carolina has specific laws regarding the "Certificate of Need." While primarily for new facilities, renovations can trigger CON review if:</p>
      <ul>
        <li>The capital expenditure exceeds $2 million (verify current 2025 thresholds).</li>
        <li>You are adding "regulated" medical equipment (e.g., MRI, CT scanners).</li>
        <li>You are converting non-health space into licensed health space.</li>
      </ul>
      <p><em><strong>Action Item:</strong> Consult with a healthcare attorney or experienced contractor to determine if your project requires a CON filing.</em></p>

      <h4>2. ADA Compliance Audit</h4>
      <p>Under the "Path of Travel" requirement, if you renovate a "primary function area" (like a lobby or exam room), you may be required to spend up to 20% of your construction budget upgrading the route to that area to current ADA standards. This often means widening door frames, regrading parking lots, or renovating restrooms you didn't intend to touch.</p>

      <h4>3. DHSR & Local Permitting</h4>
      <p>For licensed facilities, your plans often need approval not just from the city, but from the DHSR Construction Section. Their review times can vary from 30 to 90 days. <strong>Factor this into your lease negotiations.</strong></p>

      <hr />

      <h3>Part 2: Budgeting (The Hidden Costs)</h3>
      <p>A "square foot price" is dangerous in healthcare because the density of systems (plumbing, electrical, medical gas) varies wildly. Ensure your budget accounts for these often-missed items:</p>
      
      <h4>The "Soft" Costs</h4>
      <ul>
        <li><strong>Architect & Engineering Fees:</strong> Typically 8-12% of construction costs.</li>
        <li><strong>Interim Life Safety Measures (ILSM):</strong> Temporary fire walls, signage, and watchmen required if you disable fire alarms during work.</li>
        <li><strong>After-Hours Labor Premiums:</strong> If you cannot close, work must happen at night. This adds 15-20% to labor costs.</li>
      </ul>

      <h4>The "Hard" Costs</h4>
      <ul>
        <li><strong>Medical Gas Systems:</strong> Adding oxygen or vacuum lines requires certified installers and third-party verification.</li>
        <li><strong>Radiation Shielding:</strong> Lead-lined drywall for X-Ray rooms is heavy and expensive to install.</li>
        <li><strong>Casework & Millwork:</strong> Medical cabinets must be non-porous and durable.</li>
      </ul>

      <hr />

      <h3>Part 3: Designing for Patient Flow & Infection Control</h3>
      <p>Your physical layout dictates your operational efficiency. A well-designed renovation improves throughput.</p>

      <h4>Optimizing the Layout</h4>
      <ul>
        <li><strong>Separation of Flows:</strong> distinct "On-Stage" (Patient) and "Off-Stage" (Staff) corridors reduce congestion and noise.</li>
        <li><strong>Acoustics:</strong> HIPAA requires privacy. Use STC-rated walls (insulation + sound sealant) between all exam rooms.</li>
        <li><strong>Technology Integration:</strong> Plan for Cat6a drops at every potential workstation and consider ceiling-mounted WAPs for tablet-based charting.</li>
      </ul>

      <h4>Material Selection for Hygiene</h4>
      <p>In 2025, "cleanability" is king. Trends we see include:</p>
      <ul>
        <li><strong>LVT (Luxury Vinyl Tile):</strong> replaces VCT. It requires no waxing (lower maintenance cost) and looks warmer.</li>
        <li><strong>Solid Surface Countertops:</strong> Non-porous materials like Corian prevent bacterial growth better than laminate.</li>
        <li><strong>Hands-Free Fixtures:</strong> Auto-faucets and door operators are now standard expectations.</li>
      </ul>

      <hr />

      <h3>Part 4: The Construction Phase (Staying Open)</h3>
      <p>If you are renovating an occupied space, you need a contractor who specializes in <strong>ICRA (Infection Control Risk Assessment)</strong>. (See our specialized article on ICRA for deep details).</p>

      <h4>The "Checkerboard" Phasing Plan</h4>
      <p>We typically break a clinic into 4-6 zones.</p>
      <ol>
        <li><strong>Zone 1:</strong> We isolate 3 exam rooms with airtight barriers.</li>
        <li><strong>Negative Pressure:</strong> We exhaust air from the zone so dust <em>cannot</em> escape.</li>
        <li><strong>The Work:</strong> Demo and rebuild happens during the day (if noise permits) or night.</li>
        <li><strong>Turnover:</strong> We "terminal clean" the zone, test air quality, and hand it back.</li>
        <li><strong>Repeat:</strong> We move to Zone 2.</li>
      </ol>

      <div class="callout">
        <h3>Need a Site Audit?</h3>
        <p>Don't guess at the feasibility. Our preconstruction team can walk your facility and identify the red flags before you spend money on design.</p>
        <a href="/contact">Schedule a Preconstruction Walkthrough</a>
      </div>
    `,
    faq: [
      {
        question: "Do I need a Certificate of Need (CON) for a renovation in NC?",
        answer: "Typically, renovations under $2 million that do not add regulated equipment or beds do not require a CON, but it is critical to verify with an attorney or experienced contractor as rules changed in late 2023."
      },
      {
        question: "How do you renovate a medical office while it's open?",
        answer: "We use strict Infection Control Risk Assessment (ICRA) protocols, including negative air pressure containment, sticky mats, and after-hours work schedules to ensure zero impact on patient care."
      },
      {
        question: "How much does a medical office renovation cost per square foot in NC?",
        answer: "In 2025, minor refreshes (paint/flooring) range from $40-$60/sqft. Full gut renovations typically range from $150-$250/sqft depending on the complexity of MEP systems."
      },
      {
        question: "How long does a typical medical office renovation take?",
        answer: "A standard 3,000 sqft clinic tailored renovation takes 8-12 weeks of construction time, not including the 4-8 weeks needed for permitting and design."
      }
    ]
  },
  {
    id: 'adaptive-reuse-greensboro',
    slug: 'adaptive-reuse-greensboro-historic-mills',
    title: 'Adaptive Reuse: Giving New Life to Old Greensboro Buildings',
    excerpt: 'From Revolution Mill to downtown depots, adaptive reuse is reshaping the Triad. Learn how to navigate Historic Tax Credits and structural challenges in your next retrofit.',
    author: 'Eric Lomax',
    date: 'December 1, 2025',
    category: 'Market Intelligence',
    categorySlug: 'market-intel',
    image: CivicImg,
    readTime: '12 min read',
    content: `
      <h2>The Triad's Industrial Renaissance</h2>
      <p>Greensboro is a city built on textiles and rail. For decades, the massive brick factories of our past sat vacant—monuments to a bygone era. Today, they are the hottest real estate assets in the region. Projects like <strong>Revolution Mill</strong> and the revitalization of South Elm Street have proven that old buildings can anchor modern commerce.</p>
      <p>Adaptive Reuse—the process of repurposing an existing structure for a new use—is more than just an aesthetic choice. It is a financial strategy that, when executed correctly, can outperform new construction.</p>

      <h3>The Financial Engine: Historic Tax Credits</h3>
      <p>The primary driver for these projects is the robust network of tax incentives available in North Carolina. If your building is listed on the <strong>National Register of Historic Places</strong> (or is a contributing structure in a district), you may be sitting on a gold mine.</p>

      <h4>1. Federal Historic Tax Credit (20%)</h4>
      <p>The IRS offers a 20% income tax credit on "Qualified Rehabilitation Expenditures" (QREs). This applies to income-producing properties (offices, apartments, retail).</p>
      <ul>
        <li><strong>Requirement:</strong> The building must be a "Certified Historic Structure."</li>
        <li><strong>Standard:</strong> Work must meet the Secretary of the Interior’s Standards for Rehabilitation.</li>
      </ul>

      <h4>2. North Carolina State Tax Credit (15-25%)</h4>
      <p>On top of the federal credit, NC offers a "piggyback" credit.</p>
      <ul>
        <li><strong>Base Credit:</strong> 15% for projects up to $10M.</li>
        <li><strong>Bonus:</strong> An additional 5% is available for projects in Tier 1 or 2 counties (check Guilford County's current status) or targeted investment zones.</li>
      </ul>
      <p><strong>The Math:</strong> On a $5 Million renovation, you could potentially recoup $1M (Federal) + $750k (State) = $1.75 Million in tax credits. That is 35% of your hard cost returned to you.</p>

      <hr />

      <h3>The "Gotchas" of Adaptive Reuse Construction</h3>
      <p>While the finances are attractive, the construction is perilous. "Old" does not always mean "good bones." Here are the three most common killers of adaptive reuse schedules:</p>

      <h4>1. Environmental Hazards</h4>
      <p>If it was built before 1978, assume it has lead paint. If it was built before 1980, assume asbestos. Factories often have other legacy issues like oil-soaked floors or underground storage tanks.</p>
      <p><em><strong>Solution:</strong> Perform comprehensive Phase I and Phase II Environmental Site Assessments (ESA) during due diligence.</em></p>

      <h4>2. Structural Surprises</h4>
      <p>Those massive heart-pine beams look indestructible, but they often hide dry rot at the connection points where they enter the masonry walls. Brick mortar from 1920 turns to sand over time.</p>
      <p><em><strong>Solution:</strong> We use Non-Destructive Testing (NDT) and micro-drilling to test the integrity of timber columns without destroying them.</em></p>

      <h4>3. The "Envelope" Problem</h4>
      <p>Old brick buildings "breathe." They manage moisture by letting it pass through. When we seal them up with modern insulation and heavy AC systems to meet 2025 Energy Codes, we change the thermodynamics. If done wrong, you trap moisture inside the brick, causing it to spall and crumble during freeze-thaw cycles.</p>
      <p><em><strong>Solution:</strong> Expert building science analysis is required to choose the right insulation strategy (often spray foam) that allows the wall to function safely.</em></p>

      <hr />

      <h3>The "Placed in Service" Rule</h3>
      <p>To claim your credits, the building must be "placed in service." This creates a hard deadline for the Certificate of Occupancy. We understand the pressure this puts on the schedule. A delay of one month can push your tax credits into the next fiscal year, wreaking havoc on your financing.</p>

      <h3>Why Choose Lomax for Historic Rehab?</h3>
      <p>We don't just pour concrete; we preserve history. We have relationships with the State Historic Preservation Office (SHPO) and understand how to document our work to ensure your credits are approved. We know how to clean masonry so it looks new without damaging the "patina" that gives it value.</p>

      <div class="callout">
        <h3>Evaluating a Historic Property?</h3>
        <p>Before you buy, let us assess the structural reality. A feasibility study now can save millions later.</p>
        <a href="/contact">Contact Our Historic Team</a>
      </div>
    `,
    faq: [
      {
        question: "What qualifies for Historic Tax Credits in NC?",
        answer: "The building must be listed on the National Register of Historic Places (or in a certified district) and be income-producing. You must also adhere to the Secretary of the Interior's Standards for Rehabilitation."
      },
      {
        question: "Is adaptive reuse cheaper than new construction?",
        answer: "It is often comparable in cost per square foot, but the Tax Credits can make the <em>net</em> cost significantly lower. However, contingency budgets should be higher (15-20%) for unforeseen structural issues."
      },
      {
        question: "Can I replace the windows in a historic building?",
        answer: "Usually, no—or only with very specific, expensive replicas. The Preservation Office places a high priority on maintaining the original 'fenestration' (window arrangement) and materials."
      }
    ]
  },
  {
    id: 'icra-contractor-nc',
    slug: 'icra-infection-control-construction-safety',
    title: 'ICRA Explained: Why Your Healthcare Contractor Needs It',
    excerpt: 'Infection Control Risk Assessment (ICRA) isn\'t just paperwork—it\'s patient safety. Understand the 4 classes of precautions and why Lomax Construction is the safe choice.',
    author: 'Lomax Safety Division',
    date: 'November 20, 2025',
    category: 'Specialized Construction',
    categorySlug: 'specialized',
    image: HealthcareImg,
    readTime: '10 min read',
    content: `
      <h2>Construction Dust is a Biological Hazard</h2>
      <p>In a standard office build, dust is a nuisance. You sweep it up, and life goes on. In a hospital, that same dust can be lethal. </p>
      <p>Research shows that construction activities are a major source of airborne contaminants in hospitals. The primary enemy is <strong>Aspergillus</strong>, a common mold found in ceiling tiles, drywall, and insulation. To a healthy contractor, it's harmless. To an immunocompromised patient (oncology, transplant, ICU), inhaling these spores can lead to Invasive Aspergillosis, a severe and often fatal infection.</p>
      <p>This is why <strong>ICRA (Infection Control Risk Assessment)</strong> exists. It is not just about cleanliness; it is about biological containment.</p>

      <hr />

      <h3>The ICRA Matrix: Determining Risk</h3>
      <p>Every healthcare project starts with the ICRA Matrix, which combines two factors:</p>
      <ol>
        <li><strong>Type of Construction Project (Type A, B, C, D):</strong> ranging from inspecting a wire (Type A) to major demolition (Type D).</li>
        <li><strong>Patient Risk Group (Low, Medium, High, Highest):</strong> ranging from office areas (Low) to Burn Units and ORs (Highest).</li>
      </ol>
      <p>Combining these gives us the <strong>Class of Precautions (I, II, III, or IV)</strong>.</p>

      <hr />

      <h3>The 4 Classes of Precautions</h3>
      <p>As a facility manager, you need to know what you should see when you walk past our job site.</p>

      <h4>Class I (Minor Work)</h4>
      <ul>
        <li><em>Example:</em> Replacing a ceiling tile in a hallway.</li>
        <li><em>Protocol:</em> Replace the tile immediately. Minimize dust.</li>
      </ul>

      <h4>Class II (Small Scale, Short Duration)</h4>
      <ul>
        <li><em>Example:</em> Cutting drywall for a new outlet.</li>
        <li><em>Protocol:</em> Use active means to prevent dust dispersion. Mist surfaces. Seal doors with tape. Block off air vents. Use a HEPA vacuum.</li>
      </ul>

      <h4>Class III (Moderate to High Levels of Dust)</h4>
      <ul>
        <li><em>Example:</em> Demolishing a wall, sanding drywall.</li>
        <li><em>Protocol:</em> <strong>Negative Air Pressure</strong> is required. We must isolate the HVAC system to prevent dust from travelling through the ducts. Barricades must be sealed airtight.</li>
      </ul>

      <h4>Class IV (Major Demolition / Highest Risk)</h4>
      <ul>
        <li><em>Example:</em> Heavy construction in an ICU or OR suite.</li>
        <li><em>Protocol:</em> Total isolation.
            <ul>
                <li><strong>Anteroom:</strong> A separate "airlock" chamber for workers to change clothes.</li>
                <li><strong>Walk-off Mats:</strong> Sticky mats to grab dust from shoes.</li>
                <li><strong>Shoe Covers/PPE:</strong> Mandatory for all entrants.</li>
                <li><strong>Dedicated Exhaust:</strong> Air must be exhausted directly outside, not recirculated.</li>
            </ul>
        </li>
      </ul>

      <hr />

      <h3>The Lomax Standard: Beyond the Clipboard</h3>
      <p>Many contractors view ICRA as a hoop to jump through. We view it as a moral obligation. Our superintendents are ASHE-certified and treat the containment barrier as effective as a submarine hull.</p>

      <h4>Verification Technology</h4>
      <p>We don't guess if the room is negative; we prove it.</p>
      <ul>
        <li><strong>Digital Manometers:</strong> We install continuous pressure monitors with alarms. If pressure drops (signaling a breach), work stops immediately.</li>
        <li><strong>Particle Counters:</strong> We can spot-check air quality inside and outside the barrier to verify containment.</li>
        <li><strong>HEPA Scrubbers:</strong> We use industrial-grade air scrubbers that capture 99.97% of particles down to 0.3 microns.</li>
      </ul>

      <div class="callout">
        <h3>Safety First</h3>
        <p>Your patients trust you with their lives. Trust your facility to a partner who understands the stakes.</p>
        <a href="/services/healthcare">Explore our Healthcare Portfolio</a>
      </div>
    `,
    faq: [
      {
        question: "What is ICRA in construction?",
        answer: "ICRA stands for Infection Control Risk Assessment. It is a protocol to identify and mitigate infection risks (like dust and mold spores) during construction in occupied healthcare facilities."
      },
      {
        question: "Why is negative air pressure important?",
        answer: "Negative pressure ensures that air flows <em>into</em> the construction zone, not out of it. This prevents dust and pathogens from escaping into patient areas when a door is opened."
      },
      {
        question: "Is ICRA only for hospitals?",
        answer: "No. ICRA protocols are recommended for any healthcare setting, including ambulatory surgery centers, dialysis clinics, and even nursing homes where vulnerable populations reside."
      },
      {
        question: "Who creates the ICRA plan?",
        answer: "It is a collaborative effort between the Hospital's Infection Preventionist (IP), the Facility Manager, and the Construction Project Manager. It must be signed off before work begins."
      }
    ]
  },
  {
    id: 'cost-of-commercial-construction-nc-2025',
    slug: 'cost-of-commercial-construction-nc-2025',
    title: '2025 Commercial Construction Cost Guide: North Carolina',
    excerpt: 'Budgeting for a new commercial project? We break down the current cost per square foot for medical offices, warehouses, and retail spaces in the NC market.',
    author: 'Eric Lomax',
    date: 'December 10, 2025',
    category: 'Cost & Budgeting',
    categorySlug: 'cost-budgeting',
    image: CorporateImg,
    readTime: '8 min read',
    content: `
      <h2>Budgeting for Commercial Success in North Carolina</h2>
      <p>One of the first questions every developer asks is, "How much will this cost?" It's a fair question, but in the post-2020 construction landscape, the answer has become more complex. In 2025, we are seeing stabilization in material prices, but labor shortages continue to drive volatility.</p>

      <h3>Average Cost Per Square Foot in NC</h3>
      <p>While every project is unique, here are the current ranges we are seeing for "shell" construction in the Triad and Charlotte markets:</p>
      <ul>
        <li><strong>Medical Office Buildings (MOB):</strong> $250 - $350+ per sq. ft.</li>
        <li><strong>Industrial / Warehouse:</strong> $80 - $120 per sq. ft. (tilt-up construction)</li>
        <li><strong>Class A Office Interiors:</strong> $90 - $150 per sq. ft. (upfit only)</li>
      </ul>

      <h3>Factors Driving Costs</h3>
      <p>What pushes a project to the high end of these ranges? Typically, three main factors:</p>
      <ol>
        <li><strong>Site Conditions:</strong> North Carolina clay can be unpredictable. Unsuitable soils can add significant sitework costs.</li>
        <li><strong>Finishes & Technology:</strong> Modern tenants expect smart building integration and premium wellness amenities.</li>
        <li><strong>Speed to Market:</strong> Fast-tracking a schedule often requires overtime labor and expedited shipping for materials.</li>
      </ol>

      <div class="callout">
        <h3>Need a Detailed Estimate?</h3>
        <p>A square foot number is just a starting point. Our preconstruction team can provide a detailed line-item budget based on your schematic designs.</p>
        <a href="/contact">Request a Preconstruction Consultation</a>
      </div>
    `,
    faq: [
      {
        question: "What is the average cost to build a commercial building in NC?",
        answer: "Costs vary wildly by type, but generally range from $150-$400 per square foot for ground-up construction in 2025, with medical and high-end office spaces being at the higher end."
      },
      {
        question: "How can I reduce my commercial construction costs?",
        answer: "Engaging a contractor early for 'Preconstruction Services' is the best method. We can value engineer materials and systems during the design phase to save 10-15% without sacrificing quality."
      }
    ]
  },
  {
    id: 'healthcare-construction-trends-triangle',
    slug: 'healthcare-construction-trends-triangle',
    title: 'The Shift to Outpatient: Healthcare Construction Trends in the Triangle',
    excerpt: 'Why major health systems are moving away from mega-hospitals and building smaller, specialized outpatient centers in Raleigh and Durham.',
    author: 'Lomax Technical Team',
    date: 'November 28, 2025',
    category: 'Market Intelligence',
    categorySlug: 'market-intel',
    image: HealthcareImg,
    readTime: '6 min read',
    content: `
      <h2>The Decentralization of Care</h2>
      <p>Drive through Cary, Apex, or Morrisville, and you'll see a pattern: new medical construction is everywhere, but it rarely looks like a traditional hospital. The "Hub and Spoke" model has fully taken over.</p>
      
      <h3>Why the Shift?</h3>
      <p>Systems like UNC Health and Duke are prioritizing patient convenience. By placing comprehensive outpatient centers near residential growth hubs, they reduce the load on main campus ERs and improve patient satisfaction scores.</p>

      <h3>Construction Implications</h3>
      <p>Building these facilities requires a different approach than a massive hospital tower:</p>
      <ul>
        <li><strong>Speed:</strong> These projects are often developer-led and lease-back deals, meaning they need to be built fast to start generating revenue.</li>
        <li><strong>Flexibility:</strong> The "demountable wall" concept is popular, allowing clinics to reconfigure exam rooms as needs change.</li>
        <li><strong>Aesthetics:</strong> These buildings look more like high-end corporate offices than sterile clinics, with lots of glass and warm wood finishes.</li>
      </ul>

      <h3>Certificate of Need (CON) Changes</h3>
      <p>With recent reforms to NC's Certificate of Need laws, we expect a surge in ambulatory surgery centers (ASCs) breaking ground in late 2025. This allows for more competition and specialized facilities outside of the major hospital systems.</p>
    `,
    faq: [
      {
        question: "What is the biggest trend in healthcare construction for 2025?",
        answer: "The shift to 'Medtail' (Medical Retail) — locating outpatient clinics in retail-like settings for better patient access and convenience."
      },
      {
        question: "Are hospitals still building big towers?",
        answer: "Yes, but primarily for high-acuity care (ICU, Trauma). Routine care is moving almost exclusively to off-campus outpatient facilities."
      }
    ]
  },
  {
    id: 'cmar-vs-design-build',
    slug: 'cmar-vs-design-build',
    title: 'CMAR vs. Design-Build: Choosing the Right Delivery Method',
    excerpt: 'Confused by construction acronyms? We compare Construction Manager at Risk (CMAR) and Design-Build to help you decide which is best for your project.',
    author: 'Eric Lomax',
    date: 'November 15, 2025',
    category: 'Education',
    categorySlug: 'education',
    image: EducationImg,
    readTime: '10 min read',
    content: `
      <h2>One Size Does Not Fit All</h2>
      <p>Choosing a contractor is important, but choosing <em>how you hire them</em> is equally critical. The two most popular methods for commercial work today are CMAR and Design-Build.</p>

      <h3>Construction Manager at Risk (CMAR)</h3>
      <p><strong>Best for:</strong> Complex projects where the design is still evolving, like a school or hospital renovation.</p>
      <p><strong>The Pro:</strong> You get a Guaranteed Maximum Price (GMP) before the design is 100% complete, protecting your budget while keeping the architect and builder on the same team.</p>

      <h3>Design-Build</h3>
      <p><strong>Best for:</strong> Speed and simplicity. Great for industrial warehouses or standard office buildings.</p>
      <p><strong>The Pro:</strong> One contract. You hire one entity that handles everything. If something goes wrong, there is no finger-pointing between the architect and the builder.</p>
      
      <div class="callout">
        <h3>Still Unsure?</h3>
        <p>Our team has executed over $500M in both delivery methods. We can better advise you on the right path for your specific project.</p>
        <a href="/contact">Get Expert Advice</a>
      </div>
    `,
    faq: [
      {
        question: "What does CMAR stand for in construction?",
        answer: "CMAR stands for Construction Manager at Risk. It is a delivery method where the construction manager commits to a Guaranteed Maximum Price (GMP) to deliver the project."
      },
      {
        question: "Is Design-Build faster than traditional construction?",
        answer: "Yes, typically 20-30% faster because design and construction phases can overlap (bidding packages can be released before the full design is done)."
      }
    ]
  }
];
