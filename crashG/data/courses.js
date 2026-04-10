const COURSES = [
  {
    id: 'military-rank', title: 'Military Rank Structure',
    category: 'Defence Basics', difficulty: 'Beginner', modules: 3, time: 45,
    emoji: '🎖️', bannerColor: 'linear-gradient(135deg,#0d2219,#1a4a30)',
    desc: "Master India's complete military rank hierarchy across Army, Navy, and Air Force.",
    longDesc: 'This foundational course covers the complete rank structure of the Indian Armed Forces — Army, Navy, and Indian Air Force. Learn the insignia, pay grades, appointment titles, and the operational command structure from Sepoy to Field Marshal.',
    moduleList: [
      { title: 'Army Ranks — Commissioned & Non-Commissioned', sub: 'Junior Commissioned Officers to Field Marshal' },
      { title: 'Navy & Air Force Rank Equivalents', sub: 'Cross-service rank mapping and joint operations' },
      { title: 'Command Structure & Chain of Authority', sub: 'How orders flow from MoD to battlefield' },
    ]
  },
  {
    id: 'drdo-overview', title: 'DRDO Overview',
    category: 'Defence Research', difficulty: 'Intermediate', modules: 4, time: 60,
    emoji: '🔬', bannerColor: 'linear-gradient(135deg,#0d1a22,#1a3a4a)',
    desc: "Deep dive into India's DRDO — its labs, flagship programmes, and Atmanirbhar vision.",
    longDesc: "DRDO is the R&D backbone of Indian defence. This course covers its organizational structure, cluster of 52 labs, flagship weapon programmes (Agni, Arjun, Tejas), Make in India push, and emerging research areas including AI, directed energy, and quantum.",
    moduleList: [
      { title: 'DRDO — History, Structure & Mandate', sub: '52 laboratories and their specializations' },
      { title: 'Flagship Programmes — Missiles & Aircraft', sub: 'Agni, Prithvi, Tejas LCA development' },
      { title: 'Arjun Tank & Land Systems', sub: 'MBT Arjun, infantry systems, artillery' },
      { title: 'Atmanirbhar Bharat & Export Vision', sub: 'Defence exports and future roadmap' },
    ]
  },
  {
    id: 'missile-tech', title: 'Missile Technology Basics',
    category: 'Space & Missiles', difficulty: 'Intermediate', modules: 5, time: 75,
    emoji: '🚀', bannerColor: 'linear-gradient(135deg,#1a0d22,#3a1a4a)',
    desc: "Explore India's missile arsenal — Agni-V to BrahMos. Propulsion, guidance, and deterrence.",
    longDesc: "From solid-fueled ballistic missiles to hypersonic glide vehicles, this course demystifies missile technology. Learn propulsion physics, inertial navigation, terminal guidance, re-entry vehicle design, and India's Integrated Guided Missile Development Programme.",
    moduleList: [
      { title: 'Missile Physics — Propulsion & Trajectories', sub: 'Solid vs liquid propellant, burn stages' },
      { title: "IGMDP — India's Missile Programme", sub: 'Agni, Prithvi, Akash, Trishul, Nag' },
      { title: 'BrahMos — Supersonic Cruise Missile', sub: 'India-Russia collaboration and Mach 2.8 technology' },
      { title: 'Guidance Systems & Warhead Technology', sub: 'INS, GPS, terminal homing, CEP' },
      { title: 'Strategic Deterrence & Missile Defence', sub: 'Nuclear triad, BMDS, S-400 integration' },
    ]
  },
  {
    id: 'radar-systems', title: 'Radar Systems',
    category: 'Electronics & Surveillance', difficulty: 'Advanced', modules: 4, time: 60,
    emoji: '📡', bannerColor: 'linear-gradient(135deg,#0a1a0d,#1a3020)',
    desc: "Technical deep dive into AESA, PESA, phased arrays, and India's Uttam radar programme.",
    longDesc: "Radar is the invisible backbone of modern defence. This advanced course covers electromagnetic wave principles, pulse vs continuous wave radar, phased array antenna theory, AESA vs PESA architectures, LPI design, and electronic countermeasures.",
    moduleList: [
      { title: 'Electromagnetic Fundamentals & Radar Basics', sub: 'RF propagation, reflection, Doppler' },
      { title: 'Phased Array Architecture — PESA & AESA', sub: 'Beam steering, T/R modules, bandwidth' },
      { title: "India's Radar Programmes — Uttam & Rohini", sub: 'DRDO radar development milestones' },
      { title: 'Electronic Warfare & Counter-Radar', sub: 'EW, jamming, LPI, stealth detection' },
    ]
  },
  {
    id: 'defence-innovation', title: 'Defence Innovation & Future Tech',
    category: 'Innovation', difficulty: 'Advanced', modules: 3, time: 50,
    emoji: '⚡', bannerColor: 'linear-gradient(135deg,#1a1a0d,#3a3a1a)',
    desc: 'AI warfare, autonomous systems, hypersonic weapons, AMCA, FINSAS, and quantum tech.',
    longDesc: "India's defence future is being written today. This course surveys AI-enabled autonomous drones, swarm warfare, directed energy weapons (DEW), hypersonic glide vehicles, quantum communication, the AMCA 5th-generation stealth fighter, and FINSAS.",
    moduleList: [
      { title: 'AI, Autonomy & Drone Swarms', sub: 'UAV swarms, loitering munitions, AI targeting' },
      { title: 'Hypersonic & Directed Energy Weapons', sub: 'HGV technology, LASER, RAILGUN programmes' },
      { title: 'AMCA, FINSAS & Future Platforms', sub: '5th-gen fighter, smart soldier, space assets' },
    ]
  }
];

module.exports = COURSES;
