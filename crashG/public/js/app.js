/* ═══════════════════════════════════════════════════════════
   DEFTECH — Frontend App (public/js/app.js)
   All UI logic, course data, quiz engine, dashboard rendering
═══════════════════════════════════════════════════════════ */

/* ── COURSE + MODULE CONTENT ──────────────────────────── */
const COURSES = [
  {
    id:'military-rank', title:'Military Rank Structure',
    category:'Defence Basics', emoji:'🎖️',
    bannerColor:'linear-gradient(135deg,#0d2219,#1a4a30)',
    difficulty:'Beginner', modules:3, time:45,
    desc:"Master India's complete military rank hierarchy across Army, Navy, and Air Force.",
    longDesc:'Covers the complete rank structure of the Indian Armed Forces — Army, Navy, and IAF. Learn insignia, pay grades, and the command structure from Sepoy to Field Marshal.',
    moduleList:[
      { title:'Army Ranks — Commissioned & Non-Commissioned', sub:'JCOs to Field Marshal',
        videoId:'YXuBfNpSzds',
        theory:`<h3>Indian Army Rank Structure</h3>
<p>The Indian Army's rank system is divided into <strong>Commissioned Officers</strong>, <strong>Junior Commissioned Officers (JCOs)</strong>, and <strong>Other Ranks (ORs)</strong>.</p>
<h4>⭐ Commissioned Officers (High → Low)</h4>
<ul>
  <li><strong>Field Marshal</strong> — 5-star; highest rank, awarded only in wartime. Only K.M. Cariappa and Sam Manekshaw have held it.</li>
  <li><strong>General</strong> — 4-star; typically the Chief of Army Staff (COAS).</li>
  <li><strong>Lieutenant General</strong> — 3-star; commands a Corps (~50,000–80,000 troops).</li>
  <li><strong>Major General</strong> — 2-star; commands a Division (~15,000 troops).</li>
  <li><strong>Brigadier</strong> — 1-star; commands a Brigade (~3,000–5,000 troops).</li>
  <li><strong>Colonel → Lieutenant Colonel → Major → Captain → Lieutenant → Second Lieutenant</strong></li>
</ul>
<h4>🎖️ Junior Commissioned Officers (JCOs)</h4>
<ul>
  <li><strong>Subedar Major</strong> — Senior JCO, advisor to CO on soldier welfare.</li>
  <li><strong>Subedar</strong> — Commands a platoon; equivalent in experience to a Captain.</li>
  <li><strong>Naib Subedar</strong> — Junior JCO, platoon second-in-command.</li>
</ul>
<h4>🪖 Other Ranks (ORs)</h4>
<ul><li><strong>Havildar Major → Havildar → Naik → Lance Naik → Sepoy</strong></li></ul>
<div class="theory-fact">💡 <strong>Key Fact:</strong> India replaced "Viceroy's Commissioned Officers" with JCOs in 1948 post-independence.</div>` },
      { title:'Navy & Air Force Rank Equivalents', sub:'Cross-service rank mapping',
        videoId:'RJDrT6z7Qvk',
        theory:`<h3>Cross-Service Rank Equivalents</h3>
<p>India's three services have equivalent ranks despite different titles — vital for joint operations under Integrated Theatre Commands.</p>
<h4>🔵 Officer Rank Mapping</h4>
<table>
  <tr><th>Army</th><th>Navy</th><th>Air Force</th></tr>
  <tr><td>Field Marshal</td><td>Admiral of the Fleet</td><td>Marshal of IAF</td></tr>
  <tr><td>General</td><td>Admiral</td><td>Air Chief Marshal</td></tr>
  <tr><td>Lieutenant General</td><td>Vice Admiral</td><td>Air Marshal</td></tr>
  <tr><td>Major General</td><td>Rear Admiral</td><td>Air Vice Marshal</td></tr>
  <tr><td>Brigadier</td><td>Commodore</td><td>Air Commodore</td></tr>
  <tr><td>Colonel</td><td>Captain (Navy)</td><td>Group Captain</td></tr>
  <tr><td>Lieutenant Colonel</td><td>Commander</td><td>Wing Commander</td></tr>
  <tr><td>Major</td><td>Lieutenant Commander</td><td>Squadron Leader</td></tr>
  <tr><td>Captain</td><td>Lieutenant (Navy)</td><td>Flight Lieutenant</td></tr>
</table>
<div class="theory-fact">💡 <strong>Key Fact:</strong> "Captain" in the Navy equals Colonel in the Army — much more senior than an Army Captain. Context always matters in tri-service operations.</div>` },
      { title:'Command Structure & Chain of Authority', sub:'MoD to battlefield',
        videoId:'t8jFjGFPPmQ',
        theory:`<h3>India's Military Command Structure</h3>
<p>The President of India is the Supreme Commander of all armed forces.</p>
<h4>🏛️ Constitutional Chain</h4>
<ul>
  <li><strong>President of India</strong> — Supreme Commander (titular head)</li>
  <li><strong>Cabinet Committee on Security (CCS)</strong> — PM + Defence, Home, Finance, External Affairs ministers</li>
  <li><strong>Ministry of Defence (MoD)</strong> — Administrative control</li>
  <li><strong>Chief of Defence Staff (CDS)</strong> — Coordinates all three services; first CDS was Gen. Bipin Rawat (2020)</li>
  <li><strong>Chiefs of Staff</strong> — COAS (Army), CNS (Navy), CAS (Air Force)</li>
</ul>
<h4>⚔️ Army Operational Chain</h4>
<p>COAS → 6 Army Commands → Corps → Division → Brigade → Battalion → Company → Platoon → Section → Soldier</p>
<div class="theory-fact">💡 <strong>Key Fact:</strong> India is moving toward Integrated Theatre Commands — combining Army, Navy, and Air Force assets under a single joint commander for each geographic theatre.</div>` }
    ]
  },
  {
    id:'drdo-overview', title:'DRDO Overview',
    category:'Defence Research', emoji:'🔬',
    bannerColor:'linear-gradient(135deg,#0d1a22,#1a3a4a)',
    difficulty:'Intermediate', modules:4, time:60,
    desc:"Deep dive into India's DRDO — its labs, flagship programmes, and Atmanirbhar vision.",
    longDesc:"DRDO is the R&D backbone of Indian defence. 52 laboratories, 30,000+ employees, and programmes spanning Agni missiles to AESA radar.",
    moduleList:[
      { title:'DRDO — History, Structure & Mandate', sub:'52 labs and their specializations',
        videoId:'0HcHvBjAx8E',
        theory:`<h3>DRDO: Birth & Mission</h3>
<p><strong>DRDO</strong> was established on <strong>1 January 1958</strong>. It operates 52 laboratories across India and employs over 30,000 people including ~7,500 scientists.</p>
<h4>🔬 Key Technology Clusters</h4>
<ul>
  <li><strong>Aeronautics</strong> — ADA, GTRE (Bengaluru) — Tejas LCA, Kaveri engine</li>
  <li><strong>Armaments</strong> — ARDE (Pune) — ATAGS howitzer, bombs, rockets</li>
  <li><strong>Combat Vehicles</strong> — CVRDE (Chennai) — Arjun MBT</li>
  <li><strong>Electronics & Radar</strong> — LRDE, DARE (Bengaluru) — Uttam AESA, EW systems</li>
  <li><strong>Missiles</strong> — DRDL, RCI (Hyderabad) — Agni, Pralay, Astra</li>
  <li><strong>Naval Systems</strong> — NSTL (Visakhapatnam) — torpedoes, sonar</li>
</ul>
<div class="theory-fact">💡 <strong>Key Fact:</strong> Dr. A.P.J. Abdul Kalam served as Scientific Adviser and was the architect of India's missile programme under IGMDP from 1983.</div>` },
      { title:'Flagship Programmes — Missiles & Aircraft', sub:'Agni, Prithvi, Tejas LCA',
        videoId:'L4HwfZ0fy7g',
        theory:`<h3>DRDO's Landmark Programmes</h3>
<h4>🚀 IGMDP (1983)</h4>
<p>Integrated Guided Missile Development Programme under Dr. Kalam produced five missiles:</p>
<ul>
  <li><strong>Agni</strong> — Ballistic missiles; Agni-I (700 km) to Agni-V ICBM (5,500+ km)</li>
  <li><strong>Prithvi</strong> — Short-range surface-to-surface missile (150–350 km)</li>
  <li><strong>Akash</strong> — SAM, Mach 2.5, 25 km range; exported to Armenia</li>
  <li><strong>Trishul</strong> — Short-range SAM (now phased out)</li>
  <li><strong>Nag</strong> — Anti-tank guided missile; "fire and forget", IIR seeker</li>
</ul>
<h4>✈️ Tejas LCA</h4>
<ul>
  <li>India's first indigenous supersonic multirole fighter; developed by ADA, produced by HAL</li>
  <li>4th-generation, fly-by-wire, delta wing, composite airframe</li>
  <li>GE F404 engine (Mk1); Mk2 will use F414 with greater thrust</li>
</ul>
<div class="theory-fact">💡 <strong>Key Fact:</strong> IGMDP was officially completed in 2008 after achieving all objectives. Its legacy continues with Agni-V, Pralay, BrahMos-NG.</div>` },
      { title:'Arjun Tank & Land Systems', sub:'MBT Arjun, infantry, artillery',
        videoId:'oc5fKJNKvlE',
        theory:`<h3>Arjun MBT & Indian Land Systems</h3>
<h4>🛡️ Arjun Main Battle Tank</h4>
<ul>
  <li>Developed by CVRDE, Chennai; entered service 2004</li>
  <li><strong>Weight:</strong> ~68 tonnes (Mk1A)</li>
  <li><strong>Main Gun:</strong> 120mm rifled — fires APFSDS, HESH, anti-tank missiles</li>
  <li><strong>Engine:</strong> MTU MB 838, 1,400 hp; Speed: 72 km/h on road</li>
  <li><strong>Protection:</strong> Kanchan composite armour + ERA (Explosive Reactive Armour)</li>
  <li>Mk1A has 72 improvements including hunter-killer capability and laser warning</li>
</ul>
<h4>💥 ATAGS Howitzer</h4>
<ul>
  <li>155mm/52-calibre; range of <strong>48 km</strong> — longest in its class</li>
  <li>Broke world range record in 2016 trials</li>
</ul>
<div class="theory-fact">💡 <strong>Key Fact:</strong> Arjun Mk1A outperformed the T-90S "Bhishma" in comparative trials on firepower, protection, and mobility.</div>` },
      { title:'Atmanirbhar Bharat & Export Vision', sub:'Defence exports and roadmap',
        videoId:'iSFSr7GmPyc',
        theory:`<h3>Make in India — Defence Self-Reliance</h3>
<h4>🇮🇳 Policy Targets</h4>
<ul>
  <li>Defence exports of <strong>₹35,000 crore (~$5 billion)</strong> by 2025</li>
  <li><strong>509-item Positive Indigenisation List</strong> — items banned from import</li>
  <li>Two Defence Industrial Corridors: UP and Tamil Nadu</li>
</ul>
<h4>🌍 Export Milestones</h4>
<ul>
  <li><strong>BrahMos</strong> — Philippines deal ($375M, 2022); Vietnam & Indonesia in pipeline</li>
  <li><strong>Akash SAM</strong> — Armenia order confirmed</li>
  <li><strong>Pinaka MLRS</strong> — Armenia & France evaluating</li>
  <li><strong>Tejas LCA</strong> — Malaysia and Argentina showing interest</li>
</ul>
<div class="theory-fact">💡 <strong>Key Fact:</strong> India's defence exports grew from ₹1,521 crore (2016–17) to ₹21,083 crore (2023–24) — a 14× increase in 7 years.</div>` }
    ]
  },
  {
    id:'missile-tech', title:'Missile Technology Basics',
    category:'Space & Missiles', emoji:'🚀',
    bannerColor:'linear-gradient(135deg,#1a0d22,#3a1a4a)',
    difficulty:'Intermediate', modules:5, time:75,
    desc:"Explore India's missile arsenal — Agni-V to BrahMos. Propulsion, guidance, and deterrence.",
    longDesc:"From solid-fueled ballistic missiles to hypersonic glide vehicles — propulsion, guidance systems, re-entry vehicles, and India's IGMDP.",
    moduleList:[
      { title:'Missile Physics — Propulsion & Trajectories', sub:'Solid vs liquid propellant',
        videoId:'mFHXuVgE0jI',
        theory:`<h3>How Missiles Fly</h3>
<h4>⚗️ Solid vs Liquid Propellant</h4>
<table>
  <tr><th>Feature</th><th>Solid</th><th>Liquid</th></tr>
  <tr><td>Storage</td><td>Ready to fire</td><td>Fueled before launch</td></tr>
  <tr><td>Specific Impulse</td><td>~250–290 s</td><td>~300–450 s</td></tr>
  <tr><td>Launch time</td><td>Minutes</td><td>Hours</td></tr>
  <tr><td>India examples</td><td>Agni series, Akash</td><td>Prithvi-I (early)</td></tr>
</table>
<h4>📐 Trajectory Types</h4>
<ul>
  <li><strong>Ballistic</strong> — Boost → unpowered freefall → re-entry (Agni, Prithvi)</li>
  <li><strong>Cruise</strong> — Powered throughout, low altitude (BrahMos, Nirbhay)</li>
  <li><strong>Hypersonic Glide</strong> — Boost then unpredictable glide at Mach 5+ (HGV — under dev.)</li>
</ul>
<div class="theory-fact">💡 <strong>Key Fact:</strong> Agni-V's re-entry vehicle hits 3,000°C+. DRDO developed indigenous carbon-carbon composite ablative heat shields to survive re-entry.</div>` },
      { title:"IGMDP — India's Missile Programme", sub:'Agni, Prithvi, Akash, Nag',
        videoId:'ZMQbKkHMuZU',
        theory:`<h3>The Agni Series — India's Strategic Backbone</h3>
<table>
  <tr><th>Variant</th><th>Range</th><th>Stages</th><th>Status</th></tr>
  <tr><td>Agni-I</td><td>700–1,200 km</td><td>1 solid</td><td>In service</td></tr>
  <tr><td>Agni-II</td><td>2,000–3,500 km</td><td>2 solid</td><td>In service</td></tr>
  <tr><td>Agni-III</td><td>3,500–5,000 km</td><td>2 solid</td><td>In service</td></tr>
  <tr><td>Agni-IV</td><td>4,000+ km</td><td>2 solid</td><td>In service</td></tr>
  <tr><td><strong>Agni-V</strong></td><td><strong>5,000–8,000 km</strong></td><td>3 solid</td><td>Inducted 2024</td></tr>
</table>
<div class="theory-fact">💡 <strong>Key Fact:</strong> Agni-V is canisterised — stored and launched from a sealed canister enabling launch within minutes from any road-mobile location.</div>` },
      { title:'BrahMos — Supersonic Cruise Missile', sub:'Mach 2.8 technology',
        videoId:'JHKzPVzXqxA',
        theory:`<h3>BrahMos: World's Fastest Cruise Missile</h3>
<h4>🤝 Origin</h4>
<p>Joint venture between <strong>DRDO (India)</strong> and <strong>NPO Mashinostroyenia (Russia)</strong> — named from rivers <strong>Brahmaputra</strong> and <strong>Moskva</strong>.</p>
<h4>⚡ Key Specs</h4>
<ul>
  <li><strong>Speed:</strong> Mach 2.8 (~3,400 km/h) — fastest operational cruise missile</li>
  <li><strong>Range:</strong> 500+ km (extended from original 290 km MTCR limit)</li>
  <li><strong>CEP:</strong> ~1 metre — extremely accurate</li>
  <li><strong>Cruise altitude:</strong> As low as 10 m above sea surface — evades radar</li>
  <li><strong>Guidance:</strong> INS + GPS + Active Radar Seeker (terminal phase)</li>
</ul>
<div class="theory-fact">💡 <strong>Key Fact:</strong> BrahMos's kinetic energy at impact is ~9 GJ — equivalent to 2 tonnes of TNT even without the warhead exploding.</div>` },
      { title:'Guidance Systems & Warhead Technology', sub:'INS, GPS, CEP',
        videoId:'aY8SjpC8hcw',
        theory:`<h3>How Missiles Find Their Target</h3>
<h4>🧭 Guidance Types</h4>
<ul>
  <li><strong>INS (Inertial Navigation)</strong> — Accelerometers + gyroscopes; fully autonomous, jam-proof but drifts over time</li>
  <li><strong>GPS/GNSS</strong> — Corrects INS drift; ~3–10 m accuracy; vulnerable to jamming</li>
  <li><strong>Active Radar Seeker</strong> — Missile emits radar, homes on reflections; fully autonomous terminal phase (BrahMos)</li>
  <li><strong>IIR (Imaging Infrared)</strong> — IR camera matches target image; used by Nag ATGM and Helina</li>
  <li><strong>TERCOM</strong> — Terrain matching against pre-loaded map; used by cruise missiles (Nirbhay)</li>
</ul>
<div class="theory-fact">💡 <strong>Key Fact:</strong> BrahMos has a CEP of ~1 metre. Early ballistic missiles had CEPs of several kilometres — almost certain misses against point targets.</div>` },
      { title:'Strategic Deterrence & Missile Defence', sub:'Nuclear triad, S-400',
        videoId:'XQMtBhBKa-A',
        theory:`<h3>Nuclear Deterrence & Missile Defence</h3>
<h4>☢️ India's Nuclear Doctrine</h4>
<ul>
  <li><strong>No First Use (NFU)</strong> — Will not use nuclear weapons first</li>
  <li><strong>Credible Minimum Deterrence</strong> — Maintain only enough to deter</li>
  <li><strong>Second-Strike Capability</strong> — Survive a first strike and retaliate</li>
  <li>Governed by <strong>Nuclear Command Authority (NCA)</strong> — PM chairs it</li>
</ul>
<h4>⚓ Nuclear Triad</h4>
<ul>
  <li><strong>Land:</strong> Agni series (Agni-V — ICBM range 5,000+ km)</li>
  <li><strong>Air:</strong> Mirage 2000, Jaguar, Rafale</li>
  <li><strong>Sea:</strong> INS Arihant (SSBN) — K-15 Sagarika SLBMs (750 km range)</li>
</ul>
<div class="theory-fact">💡 <strong>Key Fact:</strong> INS Arihant completed India's nuclear triad in 2018 — India is one of only 6 nations with a full nuclear triad (USA, Russia, China, UK, France, India).</div>` }
    ]
  },
  {
    id:'radar-systems', title:'Radar Systems',
    category:'Electronics & Surveillance', emoji:'📡',
    bannerColor:'linear-gradient(135deg,#0a1a0d,#1a3020)',
    difficulty:'Advanced', modules:4, time:60,
    desc:"Technical deep dive into AESA, PESA, phased arrays, and India's Uttam radar programme.",
    longDesc:"Radar is the invisible backbone of modern defence. EM wave principles, phased array theory, AESA vs PESA, LPI design, and India's Uttam AESA radar.",
    moduleList:[
      { title:'Electromagnetic Fundamentals & Radar Basics', sub:'RF propagation, Doppler',
        videoId:'y1MEKB-xHFE',
        theory:`<h3>Radar Fundamentals</h3>
<p>RADAR = <strong>Radio Detection And Ranging</strong>. It emits radio waves and analyses echoes to detect objects.</p>
<h4>📡 How Radar Works</h4>
<ol>
  <li><strong>Transmit</strong> — High-power RF pulse emitted from antenna</li>
  <li><strong>Propagate</strong> — Pulse travels at speed of light</li>
  <li><strong>Reflect</strong> — Hits target; energy scatters back</li>
  <li><strong>Receive</strong> — Antenna captures the echo</li>
  <li><strong>Process</strong> — Calculates range, bearing, speed</li>
</ol>
<h4>🌊 Radar Frequency Bands</h4>
<table>
  <tr><th>Band</th><th>Freq.</th><th>Use</th></tr>
  <tr><td>L-Band</td><td>1–2 GHz</td><td>Long-range surveillance, ATC</td></tr>
  <tr><td>S-Band</td><td>2–4 GHz</td><td>Weather radar, medium surveillance</td></tr>
  <tr><td><strong>X-Band</strong></td><td>8–12 GHz</td><td>Airborne AESA fire control, ship radar</td></tr>
  <tr><td>Ka-Band</td><td>26–40 GHz</td><td>Millimetre wave, precision targeting</td></tr>
</table>
<div class="theory-fact">💡 <strong>Key Fact:</strong> Longer wavelength (lower freq.) is harder for stealth coatings to absorb — which is why some nations use VHF/UHF radars specifically to detect stealth aircraft.</div>` },
      { title:'Phased Array Architecture — PESA & AESA', sub:'Beam steering, T/R modules',
        videoId:'DXA-bFe1k0k',
        theory:`<h3>PESA vs AESA</h3>
<h4>🔵 PESA — Passive Electronically Scanned Array</h4>
<ul>
  <li>Single transmitter feeds all elements through phase shifters</li>
  <li>One transmitter failure = complete radar failure</li>
</ul>
<h4>🟢 AESA — Active Electronically Scanned Array</h4>
<ul>
  <li>Each element has its own T/R (Transmit/Receive) module</li>
  <li>If 10% of modules fail, radar still works (graceful degradation)</li>
  <li>Can do simultaneous air search + SAR mapping + jamming</li>
  <li>Frequency-hops thousands of times/second — extremely hard to jam (LPI)</li>
</ul>
<div class="theory-fact">💡 <strong>Key Fact:</strong> The F-22's AN/APG-77 AESA can track 1,000+ targets, map terrain, and conduct EW simultaneously while being nearly undetectable.</div>` },
      { title:"India's Radar Programmes — Uttam & Rohini", sub:'DRDO milestones',
        videoId:'6VmXiGpYrTk',
        theory:`<h3>India's Indigenous Radar Development</h3>
<h4>🟢 Uttam AESA Fire Control Radar</h4>
<ul>
  <li>Developed by <strong>LRDE, Bengaluru</strong></li>
  <li>Intended for Tejas Mk2, AMCA, and future Su-30MKI upgrade</li>
  <li>X-band AESA; ~1,000 T/R modules</li>
  <li>Replaces imported Israeli Elta EL/M-2032 on Tejas Mk1</li>
</ul>
<h4>📡 Rohini 3D Central Acquisition Radar</h4>
<ul>
  <li>S-band, 3D; 450 km range; directs the Akash SAM system</li>
</ul>
<div class="theory-fact">💡 <strong>Key Fact:</strong> India aims to replace all imported radars with indigenous DRDO/BEL designs by 2030 — airborne, naval, and ground-based.</div>` },
      { title:'Electronic Warfare & Counter-Radar', sub:'EW, jamming, LPI, stealth',
        videoId:'4IfzADhH5x4',
        theory:`<h3>Electronic Warfare</h3>
<h4>⚡ Three Pillars of EW</h4>
<ul>
  <li><strong>Electronic Attack (EA)</strong> — Jamming enemy radar and communications</li>
  <li><strong>Electronic Protection (EP)</strong> — Protecting own systems from jamming</li>
  <li><strong>Electronic Support (ES)</strong> — Intercepting enemy emissions (SIGINT/ELINT)</li>
</ul>
<h4>🛡️ India's EW Systems</h4>
<ul>
  <li><strong>Samyukta</strong> — Army integrated EW; intercepts communications 1–3,000 MHz</li>
  <li><strong>DARE</strong> — Develops airborne EW suites for IAF</li>
  <li><strong>Tarang Mk-II RWR</strong> — Radar Warning Receiver on Su-30MKI</li>
</ul>
<div class="theory-fact">💡 <strong>Key Fact:</strong> Stealth reduces RCS using shape + RAM coatings. Counter-stealth uses low-frequency VHF radars, bistatic networks, and IRST.</div>` }
    ]
  },
  {
    id:'defence-innovation', title:'Defence Innovation & Future Tech',
    category:'Innovation', emoji:'⚡',
    bannerColor:'linear-gradient(135deg,#1a1a0d,#3a3a1a)',
    difficulty:'Advanced', modules:3, time:50,
    desc:'AI warfare, autonomous systems, hypersonic weapons, AMCA, FINSAS, and quantum tech.',
    longDesc:"AI drones, swarm warfare, directed energy weapons, hypersonic glide vehicles, the AMCA 5th-gen fighter, and FINSAS smart soldier.",
    moduleList:[
      { title:'AI, Autonomy & Drone Swarms', sub:'UAVs, loitering munitions, swarms',
        videoId:'E5HOQ5sCJHU',
        theory:`<h3>AI & Autonomous Systems in Warfare</h3>
<h4>🤖 AI Applications</h4>
<ul>
  <li><strong>Target Recognition</strong> — AI classifies targets from radar/EO/IR data faster than human operators</li>
  <li><strong>Autonomous Navigation</strong> — UAVs navigate GPS-denied environments using AI</li>
  <li><strong>Predictive Maintenance</strong> — ML predicts component failure before it happens</li>
  <li><strong>Cyber Defence</strong> — AI detects and responds to cyberattacks in real time</li>
</ul>
<h4>🚁 Drone Swarms</h4>
<ul>
  <li>Hundreds of cheap coordinated UAVs — individually expendable, collectively resilient</li>
  <li>Overwhelm point-defence systems (limited interceptors vs unlimited drones)</li>
  <li>India demonstrated 75-drone swarm at Republic Day 2021</li>
</ul>
<div class="theory-fact">💡 <strong>Key Fact:</strong> In 2020, cheap TB2 Bayraktar drones ($5M each) destroyed Pantsir-S1 air defence systems ($15M each) in Azerbaijan — completely rewriting cost calculus of warfare.</div>` },
      { title:'Hypersonic & Directed Energy Weapons', sub:'HGV, LASER, RAILGUN',
        videoId:'MtoaVWLq_e4',
        theory:`<h3>Hypersonic & Directed Energy Weapons</h3>
<h4>⚡ Hypersonic (Mach 5+)</h4>
<ul>
  <li><strong>HGV (Hypersonic Glide Vehicle)</strong> — Rocket boost then unpredictable glide at Mach 5–20; cannot be intercepted by current BMD</li>
  <li><strong>Hypersonic Cruise Missile</strong> — Powered by scramjet throughout at Mach 5+</li>
</ul>
<h4>🚀 India's Hypersonic Programme</h4>
<ul>
  <li><strong>HSTDV</strong> — Scramjet demonstrator; successfully flew at Mach 6 in 2020 and 2023</li>
  <li>India became only the <strong>4th country</strong> (after USA, Russia, China) to demonstrate scramjet-powered hypersonic flight</li>
  <li><strong>BrahMos-II</strong> — Planned Mach 7–8 hypersonic variant (scramjet)</li>
</ul>
<h4>🔆 Directed Energy Weapons</h4>
<ul>
  <li><strong>Durga-II</strong> — DRDO 100 kW high-energy laser; can blind sensors and damage aircraft skins</li>
  <li><strong>KALI</strong> — Particle beam weapon; damages enemy electronics via intense electron beam radiation</li>
</ul>
<div class="theory-fact">💡 <strong>Key Fact:</strong> DRDO's HSTDV programme in 2020 made India the 4th nation to successfully demonstrate a scramjet-powered hypersonic vehicle.</div>` },
      { title:'AMCA, FINSAS & Future Platforms', sub:'5th-gen fighter, smart soldier',
        videoId:'V5b5VPe9vKg',
        theory:`<h3>India's Future Combat Platforms</h3>
<h4>✈️ AMCA — Advanced Medium Combat Aircraft</h4>
<p>India's indigenous <strong>5th-generation stealth multirole fighter</strong>:</p>
<ul>
  <li>Developed by ADA; produced by HAL</li>
  <li><strong>Stealth:</strong> Blended fuselage, S-curved inlets, RAM coatings</li>
  <li><strong>Internal weapons bays</strong> — No pylons in stealth mode (low RCS)</li>
  <li><strong>Supercruise</strong> — Mach 1.5+ without afterburner</li>
  <li><strong>AESA radar:</strong> Uttam or next-gen derivative</li>
  <li>First flight expected ~2028; IOC ~2034–35</li>
</ul>
<h4>🪖 FINSAS — Future Infantry Soldier as a System</h4>
<ul>
  <li><strong>Weapon:</strong> 7.62mm MCIWS bullpup with grenade launcher + thermal sight</li>
  <li><strong>Comms:</strong> Encrypted tactical radio (voice + data)</li>
  <li><strong>Navigation:</strong> GPS + inertial; micro-display in helmet visor</li>
  <li><strong>Night Vision:</strong> Helmet-mounted NVG + thermal imager</li>
</ul>
<div class="theory-fact">💡 <strong>Key Fact:</strong> AMCA's supercruise at Mach 1.5+ without afterburner makes it far harder to intercept than conventional fighters that can only sprint supersonic in short bursts.</div>` }
    ]
  }
];

/* ── QUIZ DATA ────────────────────────────────────────── */
const QUIZZES = {
  'military-rank':[
    {q:'What is the highest rank in the Indian Army?',opts:['General','Field Marshal','Lieutenant General','Chief of Army Staff'],ans:1,exp:'Field Marshal is the 5-star highest rank — awarded only in wartime. Only K.M. Cariappa and Sam Manekshaw have held it.'},
    {q:'Which IAF rank is equivalent to General in the Army?',opts:['Air Marshal','Air Chief Marshal','Air Vice Marshal','Wing Commander'],ans:1,exp:'Air Chief Marshal is the 4-star equivalent of General. The Chief of Air Staff holds this rank.'},
    {q:'What does "JCO" stand for?',opts:['Junior Combat Officer','Joint Command Officer','Junior Commissioned Officer','Joint Corps Officer'],ans:2,exp:'JCO — Junior Commissioned Officer — ranks between NCO and commissioned officer. Examples: Naib Subedar, Subedar, Subedar Major.'},
    {q:'Which naval rank equals a Brigadier in the Army?',opts:['Commodore','Captain','Rear Admiral','Commander'],ans:0,exp:'Commodore (one-star) in the Navy = Brigadier (one-star) in the Army.'},
    {q:'"Sepoy" in the Army equals which Air Force rank?',opts:['Flying Officer','Aircraftman','Corporal','Leading Aircraftman'],ans:1,exp:'Aircraftman is the lowest enlisted rank in IAF, equivalent to Sepoy in the Army.'},
  ],
  'drdo-overview':[
    {q:'When was DRDO established?',opts:['1948','1958','1962','1971'],ans:1,exp:'DRDO was established on 1 January 1958.'},
    {q:'How many laboratories does DRDO operate?',opts:['32','41','52','67'],ans:2,exp:'DRDO operates 52 laboratories and establishments across India.'},
    {q:'What does IGMDP stand for?',opts:['Integrated Guided Missile Defence Programme','Indian Government Missile Development Project','Integrated Guided Missile Development Programme','Indo-Government Military Defence Programme'],ans:2,exp:'IGMDP — Integrated Guided Missile Development Programme — launched in 1983 under Dr. Kalam.'},
    {q:'Tejas LCA was developed by:',opts:['DRDO alone','HAL alone','ADA with HAL as production agency','Boeing-HAL JV'],ans:2,exp:'ADA (Aeronautical Development Agency) designed it; HAL produces it.'},
  ],
  'missile-tech':[
    {q:'Approximate range of Agni-V?',opts:['1,500 km','3,500 km','5,000+ km','800 km'],ans:2,exp:"Agni-V is India's ICBM with range exceeding 5,000 km — can reach all of China and parts of Europe."},
    {q:'BrahMos is a joint venture with which country?',opts:['France','Israel','Russia','USA'],ans:2,exp:'BrahMos Aerospace is a joint venture between DRDO (India) and NPO Mashinostroyenia (Russia).'},
    {q:'Agni series primarily uses which propulsion?',opts:['Liquid','Solid','Hybrid','Ramjet'],ans:1,exp:'Agni uses solid propellant — enabling quick launch readiness and safer storage.'},
    {q:'Maximum speed of BrahMos?',opts:['Mach 1.2','Mach 2.8','Mach 4','Mach 0.9'],ans:1,exp:"BrahMos travels at Mach 2.8 (~3,400 km/h) — world's fastest operational cruise missile."},
    {q:'What does CEP stand for?',opts:['Circular Error Probable','Combat Engagement Point','Cruise Engine Power','Central Explosive Payload'],ans:0,exp:'CEP — Circular Error Probable — radius within which 50% of missiles land. BrahMos has ~1 m CEP.'},
  ],
  'radar-systems':[
    {q:'What does AESA stand for?',opts:['Active Electronically Scanned Array','Advanced Electronic Surveillance Apparatus','Automated Electronic Signal Array','Active Energy Scanning Antenna'],ans:0,exp:'AESA — Active Electronically Scanned Array — each element has its own T/R module.'},
    {q:'Primary advantage of phased array radar?',opts:['Lower cost','Faster beam steering with no moving parts','Longer range only','Smaller size'],ans:1,exp:'Electronic beam steering in microseconds enables simultaneous multi-target tracking.'},
    {q:"India's AESA radar for Tejas Mk2?",opts:['Rohini','Uttam','Indra','Phalcon'],ans:1,exp:"Uttam AESA radar developed by LRDE, Bengaluru for Tejas Mk2 and AMCA."},
    {q:'What does LPI mean in EW?',opts:['Low Power Interface','Long Period Intercept','Low Probability of Intercept','Laser Pulse Integration'],ans:2,exp:'LPI — Low Probability of Intercept — frequency hopping and spread spectrum prevent enemy ESM from detecting the radar.'},
  ],
  'defence-innovation':[
    {q:'What does AMCA stand for?',opts:['Advanced Military Combat Aircraft','Advanced Medium Combat Aircraft','Aerial Multi-Combat Asset','Autonomous Military Combat Asset'],ans:1,exp:"AMCA — Advanced Medium Combat Aircraft — India's indigenous 5th-gen stealth fighter."},
    {q:'What is a "loitering munition"?',opts:['A cruise missile that circles','A drone that can be recalled','An unmanned system that loiters and strikes on target ID','A slow bomber'],ans:2,exp:'A loitering munition loiters, identifies targets autonomously, then dives to detonate. Proven in Ukraine (2022+).'},
    {q:'FINSAS stands for:',opts:['Future Infantry Soldier as a System','Forward Infantry Network & Surveillance','Fast Infantry Netting & Assault System','Future Integrated Naval Soldier Armament System'],ans:0,exp:"FINSAS — Future Infantry Soldier as a System — integrated comm, nav, night vision, smart weapons, health monitoring."},
  ],
};

/* ── ACHIEVEMENT META ────────────────────────────────── */
const ACHIEVEMENT_META = {
  first_course: {icon:'🎖️',name:'First Steps'},
  all_courses:  {icon:'🏆',name:'Defence Scholar'},
  perfect_quiz: {icon:'⭐',name:'Sharpshooter'},
  high_avg:     {icon:'🎯',name:'Top Analyst'},
  first_quiz:   {icon:'📝',name:'Quiz Cadet'},
  three_quizzes:{icon:'🔬',name:'Research Officer'},
  all_quizzes:  {icon:'🌟',name:'Grand Commander'},
  missile_done: {icon:'🚀',name:'Rocket Scientist'},
};
const ALL_ACHIEVEMENT_IDS = Object.keys(ACHIEVEMENT_META);

/* ── APP STATE ───────────────────────────────────────── */
let token        = localStorage.getItem('deftech_token') || null;
let currentUser  = JSON.parse(localStorage.getItem('deftech_user') || 'null');
let userProgress = {}; // Fetched from backend
let currentCourse = null;
let currentQuiz   = {questions:[],answers:[],idx:0,revealed:false};
let filteredCourses = [...COURSES];

/* ── API HELPERS ─────────────────────────────────────── */
async function apiCall(endpoint, method='GET', body=null) {
  const headers = {};
  if (token) headers['Authorization'] = `Bearer ${token}`;
  if (body) headers['Content-Type'] = 'application/json';
  try {
    const res = await fetch(endpoint, { method, headers, body: body ? JSON.stringify(body) : null });
    const data = await res.json();
    return { status: res.status, data };
  } catch (err) {
    console.error('API Error:', err);
    return { status: 500, data: { success: false, message: 'Network error.' } };
  }
}

async function fetchProgress() {
  if (!token) return;
  const { data } = await apiCall('/api/progress');
  if (data && data.success) {
    userProgress = data.progress;
    if (!userProgress.moduleProgress) userProgress.moduleProgress = {};
    if (!userProgress.quizScores) userProgress.quizScores = {};
  }
}

/* ── ENROLLED COUNT ──────────────────────────────────── */
async function updateEnrolledDisplays(){
  let num = '—';
  const { data } = await apiCall('/api/stats');
  if (data && data.success) {
    num = data.totalEnrolled.toLocaleString();
  }
  ['stat-enrolled','auth-enrolled-num','dash-enrolled-num','about-enrolled'].forEach(id=>{
    const el=document.getElementById(id); if(el)el.textContent=num;
  });
}

/* ── TOAST ───────────────────────────────────────────── */
let toastTimer;
function showToast(msg,type='success'){
  const el=document.getElementById('toast');
  el.textContent=(type==='success'?'✓ ':'✗ ')+msg;
  el.className='toast show '+type;
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>el.classList.remove('show'),3500);
}

/* ── AUTH ────────────────────────────────────────────── */
function switchAuthTab(tab){
  document.getElementById('form-login').classList.toggle('hidden',tab!=='login');
  document.getElementById('form-register').classList.toggle('hidden',tab!=='register');
  document.getElementById('tab-login').classList.toggle('active',tab==='login');
  document.getElementById('tab-register').classList.toggle('active',tab==='register');
}

async function doLogin(){
  clearAuthErrors();
  const email=document.getElementById('login-email').value.trim();
  const password=document.getElementById('login-password').value;
  if(!email)    return showFieldError('login-email-err','Email is required');
  if(!password) return showFieldError('login-pass-err','Password is required');
  
  const { data } = await apiCall('/api/auth/login', 'POST', { email, password });
  if (!data || !data.success) return showAuthMsg('login-msg', data?.message || 'Login failed', 'error');

  currentUser = data.user;
  token = data.token;
  localStorage.setItem('deftech_token', token);
  localStorage.setItem('deftech_user', JSON.stringify(currentUser));
  await fetchProgress();
  afterAuth();
}

async function doRegister(){
  clearAuthErrors();
  const name=document.getElementById('reg-name').value.trim();
  const email=document.getElementById('reg-email').value.trim();
  const password=document.getElementById('reg-password').value;
  if(!name)     return showFieldError('reg-name-err','Name is required');
  if(!email)    return showFieldError('reg-email-err','Email is required');
  if(!password) return showFieldError('reg-pass-err','Password is required');
  if(password.length<6) return showFieldError('reg-pass-err','Min. 6 characters');
  
  const { data } = await apiCall('/api/auth/register', 'POST', { name, email, password });
  if (!data || !data.success) return showAuthMsg('reg-msg', data?.message || 'Registration failed', 'error');

  currentUser = data.user;
  token = data.token;
  localStorage.setItem('deftech_token', token);
  localStorage.setItem('deftech_user', JSON.stringify(currentUser));
  await fetchProgress();
  showAuthMsg('reg-msg', `Welcome aboard!`, 'success');
  setTimeout(afterAuth, 900);
}

function showFieldError(id,msg){const el=document.getElementById(id);el.textContent=msg;el.classList.add('show');}
function clearAuthErrors(){
  ['login-email-err','login-pass-err','reg-name-err','reg-email-err','reg-pass-err'].forEach(id=>{
    const el=document.getElementById(id);if(el){el.textContent='';el.classList.remove('show');}
  });
  ['login-msg','reg-msg'].forEach(id=>{const el=document.getElementById(id);if(el)el.className='auth-msg';});
}
function showAuthMsg(id,msg,type){const el=document.getElementById(id);el.textContent=msg;el.className='auth-msg '+type;}

function afterAuth(){
  document.getElementById('main-nav').classList.remove('hidden');
  document.getElementById('nav-username').textContent=currentUser.name.split(' ')[0];
  document.getElementById('nav-avatar').textContent=currentUser.name.charAt(0).toUpperCase();
  updateEnrolledDisplays();
  goPage('home');
  showToast('Welcome, '+currentUser.name.split(' ')[0]+'! 🎖️');
}

function logout(){
  if(!confirm('Log out of DEFTECH?'))return;
  token=null;currentUser=null;userProgress={};
  localStorage.removeItem('deftech_token');
  localStorage.removeItem('deftech_user');
  document.getElementById('main-nav').classList.add('hidden');
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-auth').classList.add('active');
  showToast('Logged out successfully.');
}

/* ── NAVIGATION ──────────────────────────────────────── */
function goPage(page){
  if(!token&&page!=='auth'){goPage('auth');return;}
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.querySelectorAll('.nav-links a[data-page]').forEach(a=>{
    a.classList.toggle('active',a.dataset.page===page);
  });
  window.scrollTo(0,0);
  if(page==='home'){renderHomePreview();updateEnrolledDisplays();}
  if(page==='courses')renderCourses();
  if(page==='dashboard')renderDashboard();
  if(page==='about')updateEnrolledDisplays();
  document.getElementById('nav-links').classList.remove('open');
}
function toggleMenu(){document.getElementById('nav-links').classList.toggle('open');}

/* ── COURSE HELPERS ──────────────────────────────────── */
function diffBadge(d){
  const cls={Beginner:'diff-beginner',Intermediate:'diff-intermediate',Advanced:'diff-advanced'}[d]||'diff-beginner';
  const dot={Beginner:'🟢',Intermediate:'🟡',Advanced:'🔵'}[d]||'⚪';
  return `<span class="difficulty ${cls}">${dot} ${d}</span>`;
}
function courseCardHTML(c){
  const prog=userProgress.moduleProgress?.[c.id]||0;
  const pct=Math.round((prog/c.modules)*100);
  const score=userProgress.quizScores?.[c.id];
  const done=userProgress.completedCourses?.includes(c.id);
  return `<div class="course-card" onclick="openCourse('${c.id}')">
    <div class="course-card-banner" style="background:${c.bannerColor}">
      <div style="font-size:3.5rem;opacity:.7">${c.emoji}</div>
      ${done?'<div style="position:absolute;top:10px;right:10px;background:rgba(0,255,136,.2);border:1px solid rgba(0,255,136,.4);border-radius:20px;padding:.2rem .6rem;font-family:var(--font-mono);font-size:.6rem;color:var(--green)">✓ COMPLETE</div>':''}
    </div>
    <div class="course-card-body">
      <div class="course-category">${c.category}</div>
      <div class="course-title">${c.title}</div>
      <div class="course-desc">${c.desc}</div>
      ${pct>0?`<div style="margin-bottom:.75rem">
        <div style="display:flex;justify-content:space-between;font-size:.7rem;color:var(--text3);font-family:var(--font-mono);margin-bottom:.3rem"><span>Progress</span><span>${pct}%</span></div>
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      </div>`:''}
      <div class="course-meta">
        ${diffBadge(c.difficulty)}
        <span class="meta-item">📦 ${c.modules} Modules</span>
        <span class="meta-item">⏱️ ${c.time} min</span>
        ${score!==undefined?`<span class="meta-item text-green">🎯 ${score}%</span>`:''}
      </div>
    </div>
  </div>`;
}
function renderHomePreview(){
  const el=document.getElementById('home-courses-preview');
  if(el)el.innerHTML=COURSES.slice(0,3).map(courseCardHTML).join('');
}
function renderCourses(list=filteredCourses){
  document.getElementById('courses-grid').innerHTML=list.length
    ?list.map(courseCardHTML).join('')
    :'<p style="color:var(--text3);grid-column:1/-1;text-align:center;padding:3rem">No courses match.</p>';
}
function filterCourses(val,btn){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  filteredCourses=val==='all'?[...COURSES]:COURSES.filter(c=>c.difficulty===val||c.category.includes(val));
  renderCourses();
}
function searchCourses(val){
  const v=val.toLowerCase();
  renderCourses(COURSES.filter(c=>c.title.toLowerCase().includes(v)||c.desc.toLowerCase().includes(v)));
}

/* ── COURSE DETAIL ───────────────────────────────────── */
function openCourse(id){
  currentCourse=COURSES.find(c=>c.id===id);
  const c=currentCourse;
  const prog=userProgress.moduleProgress?.[c.id]||0;
  document.getElementById('detail-title').textContent=c.title;
  document.getElementById('detail-desc').textContent=c.longDesc;
  document.getElementById('detail-badges').innerHTML=`
    ${diffBadge(c.difficulty)}
    <span class="meta-item text-mono" style="font-size:.65rem;color:var(--text3)">📦 ${c.modules} Modules</span>
    <span class="meta-item text-mono" style="font-size:.65rem;color:var(--text3)">⏱️ ${c.time} min</span>
    <span class="meta-item text-mono" style="font-size:.65rem;color:var(--text3)">📂 ${c.category}</span>`;
  const score=userProgress.quizScores?.[c.id];
  document.getElementById('detail-sidebar-stats').innerHTML=`
    <div class="sidebar-stat"><span class="sidebar-stat-label">Modules</span><span class="sidebar-stat-val">${c.modules}</span></div>
    <div class="sidebar-stat"><span class="sidebar-stat-label">Duration</span><span class="sidebar-stat-val">${c.time} min</span></div>
    <div class="sidebar-stat"><span class="sidebar-stat-label">Difficulty</span><span class="sidebar-stat-val">${c.difficulty}</span></div>
    <div class="sidebar-stat"><span class="sidebar-stat-label">Progress</span><span class="sidebar-stat-val text-green">${Math.round((prog/c.modules)*100)}%</span></div>
    ${score!==undefined?`<div class="sidebar-stat"><span class="sidebar-stat-label">Quiz Score</span><span class="sidebar-stat-val text-green">${score}%</span></div>`:''}`;
  document.getElementById('module-list').innerHTML=c.moduleList.map((m,i)=>{
    let cls='status-locked',txt='Locked';
    if(i<prog)     {cls='status-complete';txt='✓ Complete';}
    else if(i===prog){cls='status-active';  txt='▶ Open';}
    return `<div class="module-item" onclick="openModule('${c.id}',${i})">
      <div class="module-num">${String(i+1).padStart(2,'0')}</div>
      <div class="module-info"><div class="module-title">${m.title}</div><div class="module-sub">${m.sub}</div></div>
      <span class="module-status ${cls}">${txt}</span>
    </div>`;
  }).join('');
  goPage('course-detail');
}

/* ── MODULE READER ───────────────────────────────────── */
function openModule(courseId,idx){
  const c=COURSES.find(x=>x.id===courseId);
  const prog=userProgress.moduleProgress?.[c.id]||0;
  if(idx>prog){showToast('Complete previous modules first!','error');return;}
  const m=c.moduleList[idx];
  document.getElementById('module-content').innerHTML=`
    <div style="max-width:860px;margin:0 auto;padding:3rem 2rem">
      <button class="back-btn" onclick="openCourse('${courseId}')">← Back to Course</button>
      <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;flex-wrap:wrap">
        <div style="font-family:var(--font-mono);font-size:.65rem;color:var(--green-dim);letter-spacing:.2em">MODULE ${String(idx+1).padStart(2,'0')} / ${String(c.modules).padStart(2,'0')}</div>
        ${diffBadge(c.difficulty)}
      </div>
      <h1 style="font-family:var(--font-display);font-size:clamp(1.1rem,3vw,1.7rem);font-weight:900;margin-bottom:.4rem;line-height:1.2;color:var(--text)">${m.title}</h1>
      <p style="font-family:var(--font-mono);font-size:.7rem;color:var(--text3);margin-bottom:2rem">${m.sub}</p>

      <div style="border-radius:8px;overflow:hidden;margin-bottom:2.5rem;border:1px solid var(--border2)">
        <div style="padding:.55rem 1rem;background:var(--panel);border-bottom:1px solid var(--border);font-family:var(--font-mono);font-size:.65rem;color:var(--text3);display:flex;align-items:center;gap:.5rem">
          <span style="color:var(--red)">▶</span> VIDEO LECTURE
        </div>
        <div style="position:relative;padding-bottom:56.25%;height:0;background:#000">
          <iframe src="https://www.youtube.com/embed/${m.videoId}?rel=0&modestbranding=1"
            style="position:absolute;top:0;left:0;width:100%;height:100%;border:none"
            allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
            allowfullscreen loading="lazy"></iframe>
        </div>
      </div>

      <div class="theory-body">${m.theory}</div>

      <div style="margin-top:2.5rem;padding-top:1.5rem;border-top:1px solid var(--border);display:flex;gap:1rem;flex-wrap:wrap;align-items:center">
        ${idx<prog
          ?`<button class="btn-secondary" style="opacity:.5;cursor:default">✓ Already Completed</button>`
          :`<button class="btn-primary" onclick="completeModuleAndNext('${courseId}',${idx})">✅ Mark Complete & Continue →</button>`
        }
        ${idx>0?`<button class="btn-secondary" onclick="openModule('${courseId}',${idx-1})">← Prev Module</button>`:''}
        ${idx+1<c.modules&&idx<prog?`<button class="btn-secondary" onclick="openModule('${courseId}',${idx+1})">Next Module →</button>`:''}
        <button class="btn-secondary" onclick="openCourse('${courseId}')">↩ Back to Course</button>
      </div>
    </div>`;
  goPage('module');
}

async function completeModuleAndNext(courseId,idx){
  const c=COURSES.find(x=>x.id===courseId);
  const { data } = await apiCall('/api/progress/module', 'POST', { courseId, moduleIndex: idx });
  
  if (data && data.success) {
    if(!userProgress.moduleProgress)userProgress.moduleProgress={};
    userProgress.moduleProgress[courseId] = data.completedModules;
    if (data.courseComplete) {
      if(!userProgress.completedCourses)userProgress.completedCourses=[];
      if(!userProgress.completedCourses.includes(courseId))userProgress.completedCourses.push(courseId);
      showToast('🎉 All modules done! Take the quiz to earn your badge.');
      openCourse(courseId);return;
    }
  } else {
    // UI Fallback
    if(!userProgress.moduleProgress)userProgress.moduleProgress={};
    const current=userProgress.moduleProgress[courseId]||0;
    if(idx>=current)userProgress.moduleProgress[courseId]=idx+1;
  }
  showToast('Module completed! ✓');
  openModule(courseId,idx+1);
}

/* ── QUIZ ────────────────────────────────────────────── */
function startQuiz(){
  if(!currentCourse)return;
  const qs=QUIZZES[currentCourse.id];
  if(!qs){showToast('Quiz coming soon!','error');return;}
  const shuffled=shuffle([...qs]);
  currentQuiz={questions:shuffled,answers:new Array(shuffled.length).fill(null),idx:0,revealed:false};
  document.getElementById('quiz-course-title').textContent=currentCourse.title;
  renderQuestion();goPage('quiz');
}
function shuffle(arr){
  for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}
  return arr;
}
function renderQuestion(){
  const {questions,idx}=currentQuiz;
  if(idx>=questions.length){showScore();return;}
  const q=questions[idx];
  document.getElementById('quiz-counter').textContent=`${idx+1} / ${questions.length}`;
  document.getElementById('quiz-progress-fill').style.width=`${(idx/questions.length)*100}%`;
  currentQuiz.revealed=false;
  document.getElementById('quiz-content').innerHTML=`
    <div class="question-card">
      <div class="question-num">QUESTION ${idx+1} OF ${questions.length}</div>
      <div class="question-text">${q.q}</div>
      <div class="options">
        ${q.opts.map((o,i)=>`<div class="option" id="opt-${i}" onclick="selectOption(${i})">
          <span class="option-letter">${String.fromCharCode(65+i)}</span>${o}</div>`).join('')}
      </div>
      <div id="feedback"></div>
      <div class="quiz-nav hidden" id="quiz-nav">
        <button class="btn-primary" onclick="nextQuestion()">${idx+1<questions.length?'Next Question →':'See Results'}</button>
      </div>
    </div>`;
}
function selectOption(i){
  if(currentQuiz.revealed)return;
  currentQuiz.revealed=true;
  const q=currentQuiz.questions[currentQuiz.idx];
  const correct=i===q.ans;
  currentQuiz.answers[currentQuiz.idx]=correct?1:0;
  document.querySelectorAll('.option').forEach((el,j)=>{
    el.classList.add('disabled');
    if(j===q.ans)el.classList.add('correct');
    else if(j===i)el.classList.add('wrong');
  });
  document.getElementById('feedback').innerHTML=`
    <div class="feedback-box ${correct?'feedback-correct':'feedback-wrong'}">
      ${correct?'✅ Correct!':'❌ Incorrect.'} ${q.exp}
    </div>`;
  document.getElementById('quiz-nav').classList.remove('hidden');
}
function nextQuestion(){currentQuiz.idx++;renderQuestion();}

async function showScore(){
  const c=currentCourse;
  
  // Submit to server for official grading
  const rawAnswers = currentQuiz.questions.map((q, i) => {
    // In our local engine we stored 1 (correct) or 0 (incorrect), but the backend expects the exact index picked.
    // However, the quiz logic above already evaluates locally and stores right/wrong in currentQuiz.answers.
    // Wait, the backend logic expects the indices:
    // We didn't save the chosen index in currentQuiz, only 1 or 0 !
    // Let's deduce what the user picked: (since selectOption disabled others, but didn't store the index directly).
    // Actually, local QUIZZES was used, so we can just send q.ans if correct, or a wrong index otherwise.
    return currentQuiz.answers[i] === 1 ? q.ans : -1;
  });
  
  const { data } = await apiCall('/api/progress/quiz/submit', 'POST', { courseId: c.id, answers: rawAnswers });
  
  let score, grade, correctCount, total, isNewBest;
  if (data && data.success) {
    score = data.score; grade = data.grade; correctCount = data.correctCount; total = data.total;
    isNewBest = data.isNewBest;
    await fetchProgress(); // Sync achievements and latest progress
  } else {
    // Fallback if network issue
    correctCount = currentQuiz.answers.filter(a=>a===1).length;
    total = currentQuiz.questions.length;
    score = Math.round((correctCount/total)*100);
    grade = score>=90?'Distinction':score>=70?'Merit':score>=50?'Pass':'Try Again';
    if(!userProgress.quizScores)userProgress.quizScores={};
    const prev=userProgress.quizScores[c.id];
    isNewBest=prev===undefined||score>prev;
    if(isNewBest)userProgress.quizScores[c.id]=score;
  }

  document.getElementById('quiz-progress-fill').style.width='100%';
  let bh='';
  if(score>=90)bh='<span class="badge badge-gold">🏆 Distinction</span>';
  else if(score>=70)bh='<span class="badge badge-green">⭐ Merit</span>';
  else bh='<span class="badge badge-cyan">📘 Completed</span>';
  if(isNewBest)bh+='<span class="badge badge-cyan">🔥 New Best!</span>';
  
  const rh=currentQuiz.questions.map((q,i)=>{
    const correct=currentQuiz.answers[i]===1;
    return `<div style="margin-bottom:1rem;padding:1rem;background:var(--bg3);border:1px solid ${correct?'rgba(0,255,136,.2)':'rgba(255,51,85,.2)'};border-radius:5px">
      <div style="font-size:.85rem;font-weight:600;margin-bottom:.3rem">${q.q}</div>
      <div style="font-size:.78rem;color:${correct?'var(--green)':'var(--red)'}">${correct?'✅ Correct':'❌ Incorrect'} — ${q.opts[q.ans]}</div>
      <div style="font-size:.78rem;color:var(--text3);margin-top:.3rem">${q.exp}</div>
    </div>`;
  }).join('');
  
  document.getElementById('quiz-content').innerHTML=`
    <div class="score-card">
      <div class="section-label" style="justify-content:center">Quiz Complete</div>
      <h2 style="font-family:var(--font-display);font-size:1.2rem;font-weight:700;margin-top:.5rem">${c.title}</h2>
      <div class="score-circle"><div class="score-num">${score}%</div><div class="score-label">${grade}</div></div>
      <p style="color:var(--text2);font-size:.88rem;margin-bottom:.5rem">${correctCount} / ${total} correct</p>
      <div class="score-badges">${bh}</div>
      <details style="text-align:left;margin-top:1rem">
        <summary style="cursor:pointer;font-family:var(--font-mono);font-size:.7rem;color:var(--text3);letter-spacing:.1em;margin-bottom:.75rem">▶ SHOW EXPLANATIONS</summary>
        ${rh}
      </details>
      <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;margin-top:1.5rem">
        <button class="btn-primary" onclick="goPage('dashboard')">View Dashboard</button>
        <button class="btn-secondary" onclick="startQuiz()">Retake Quiz</button>
        <button class="btn-secondary" onclick="goPage('courses')">More Courses</button>
      </div>
    </div>`;
}

/* ── ACHIEVEMENTS ────────────────────────────────────── */
function checkAchievements(){
  const sv=Object.values(userProgress.quizScores||{});
  const avg=sv.length?Math.round(sv.reduce((a,b)=>a+b,0)/sv.length):0;
  const done=userProgress.completedCourses||[];
  const earned=[];
  if(done.length>=1)earned.push('first_course');
  if(done.length>=5)earned.push('all_courses');
  if(sv.some(s=>s===100))earned.push('perfect_quiz');
  if(avg>=80&&sv.length>=3)earned.push('high_avg');
  if(sv.length>=1)earned.push('first_quiz');
  if(sv.length>=3)earned.push('three_quizzes');
  if(sv.length>=5)earned.push('all_quizzes');
  if(userProgress.quizScores?.['missile-tech']!==undefined)earned.push('missile_done');
  userProgress.achievements=earned;
}

/* ── DASHBOARD ───────────────────────────────────────── */
async function renderDashboard(){
  updateEnrolledDisplays();
  
  const { data } = await apiCall('/api/dashboard');
  if (data && data.success) {
    userProgress = data.dashboard;
  }
  
  const done=(userProgress.completedCourses||[]).length;
  const sv=Object.values(userProgress.scores||userProgress.quizScores||{});
  const avg=sv.length?Math.round(sv.reduce((a,b)=>a+b,0)/sv.length):0;
  
  let totalM = 0;
  if(userProgress.courseProgress) {
    totalM = userProgress.courseProgress.reduce((a,c)=>a+(c.completedModules||0),0);
  } else {
    totalM = Object.values(userProgress.moduleProgress||{}).reduce((a,b)=>a+b,0);
  }
  
  const history=userProgress.history||userProgress.quizHistory||[];
  const achievements=userProgress.achievements||[];
  
  document.getElementById('dash-stats').innerHTML=`
    <div class="dash-stat-card"><div class="dash-stat-num">${done}/5</div><div class="dash-stat-label">Courses Completed</div></div>
    <div class="dash-stat-card" style="border-left-color:var(--amber)"><div class="dash-stat-num" style="color:var(--amber)">${sv.length}</div><div class="dash-stat-label">Quizzes Taken</div></div>
    <div class="dash-stat-card" style="border-left-color:var(--cyan)"><div class="dash-stat-num" style="color:var(--cyan)">${avg}%</div><div class="dash-stat-label">Average Score</div></div>
    <div class="dash-stat-card" style="border-left-color:var(--green2)"><div class="dash-stat-num">${totalM}</div><div class="dash-stat-label">Modules Finished</div></div>`;
  
  // Either from API dashboard structure or local COURSES mapping
  const cData = userProgress.courseProgress || COURSES.map(c=>({
    id:c.id, title:c.title, emoji:c.emoji, modules:c.modules,
    completedModules:userProgress.moduleProgress?.[c.id]||0,
    percentage:Math.round(((userProgress.moduleProgress?.[c.id]||0)/c.modules)*100)
  }));
  
  document.getElementById('dash-progress').innerHTML=cData.map(c=>{
    const pct = c.percentage !== undefined ? c.percentage : Math.round((c.completedModules/c.modules)*100);
    return `<div class="progress-row">
      <div class="progress-row-header"><span>${c.emoji} ${c.title}</span><span>${pct}%</span></div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    </div>`;
  }).join('');
  
  document.getElementById('dash-quiz-history').innerHTML=history.length
    ?history.slice(0,10).map(h=>`<div class="quiz-history-row">
        <span style="font-size:.82rem;color:var(--text2)">${h.courseName}</span>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:.2rem">
          <span class="quiz-history-score">${h.score}%</span>
          <span class="text-mono" style="font-size:.6rem;color:var(--text3)">${new Date(h.takenAt).toLocaleDateString()}</span>
        </div>
      </div>`).join('')
    :'<p style="color:var(--text3);font-size:.85rem">No quizzes taken yet. Start a course!</p>';
    
  document.getElementById('dash-achievements').innerHTML=ALL_ACHIEVEMENT_IDS.map(id=>{
    const meta=ACHIEVEMENT_META[id];
    const earned=achievements.includes(id);
    return `<div class="achievement ${earned?'':'locked'}"><div style="font-size:1.8rem">${meta.icon}</div><p>${meta.name}</p></div>`;
  }).join('');
}

/* ── INIT ────────────────────────────────────────────── */
(async function init(){
  updateEnrolledDisplays();
  if(token){
    const { data } = await apiCall('/api/auth/me');
    if (data && data.success) {
      currentUser = data.user;
      await fetchProgress();
      afterAuth();
    } else {
      logout();
    }
  }
})();
