const QUIZZES = {
  'military-rank': [
    { q: 'What is the highest rank in the Indian Army?', opts: ['General','Field Marshal','Lieutenant General','Chief of Army Staff'], ans: 1, exp: 'Field Marshal is the highest rank in the Indian Army — a 5-star rank awarded only during wartime or for extraordinary service. Only two officers have held it: K.M. Cariappa and Sam Manekshaw.' },
    { q: 'Which rank in the Indian Air Force is equivalent to a General in the Army?', opts: ['Air Marshal','Air Chief Marshal','Air Vice Marshal','Wing Commander'], ans: 1, exp: 'Air Chief Marshal is a 4-star rank equivalent to General in the Indian Army.' },
    { q: 'What does "JCO" stand for in the Indian Army?', opts: ['Junior Combat Officer','Joint Command Officer','Junior Commissioned Officer','Joint Corps Officer'], ans: 2, exp: 'JCO — Junior Commissioned Officer — ranks between NCO and commissioned officer. Examples: Naib Subedar, Subedar, Subedar Major.' },
    { q: 'Which naval rank is equivalent to a Brigadier in the Army?', opts: ['Commodore','Captain','Rear Admiral','Commander'], ans: 0, exp: 'Commodore (one-star) in the Indian Navy is equivalent to Brigadier (one-star) in the Indian Army.' },
    { q: 'The rank of "Sepoy" in the Army is equivalent to which Air Force rank?', opts: ['Flying Officer','Aircraftman','Corporal','Leading Aircraftman'], ans: 1, exp: 'Aircraftman (AC) is the lowest enlisted rank in the Indian Air Force, equivalent to Sepoy in the Army.' },
  ],
  'drdo-overview': [
    { q: 'When was DRDO established?', opts: ['1948','1958','1962','1971'], ans: 1, exp: 'DRDO was established in 1958 by merging the Technical Development Establishment of the Indian Army with the Directorate of Technical Development & Production.' },
    { q: 'How many laboratories does DRDO operate across India?', opts: ['32','41','52','67'], ans: 2, exp: 'DRDO operates 52 laboratories and establishments spread across India, employing over 30,000 scientists and staff.' },
    { q: 'What does IGMDP stand for?', opts: ['Integrated Guided Missile Defence Programme','Indian Government Missile Development Project','Integrated Guided Missile Development Programme','Indo-Government Military Defence Programme'], ans: 2, exp: 'IGMDP — Integrated Guided Missile Development Programme — was launched in 1983 under Dr. A.P.J. Abdul Kalam.' },
    { q: 'The Tejas LCA was developed by:', opts: ['DRDO alone','HAL alone','ADA with HAL as production agency','Boeing-HAL JV'], ans: 2, exp: 'ADA (Aeronautical Development Agency) designed it; HAL produces it.' },
  ],
  'missile-tech': [
    { q: 'What is the approximate range of the Agni-V ballistic missile?', opts: ['1,500 km','3,500 km','5,000+ km','800 km'], ans: 2, exp: "Agni-V is India's ICBM with a range exceeding 5,000 km." },
    { q: 'BrahMos is a joint venture between India and which country?', opts: ['France','Israel','Russia','USA'], ans: 2, exp: 'BrahMos is a joint venture between DRDO (India) and NPO Mashinostroyenia (Russia). The name comes from Brahmaputra and Moskva rivers.' },
    { q: 'Which propulsion type does the Agni series primarily use?', opts: ['Liquid propellant','Solid propellant','Hybrid propellant','Ram jet'], ans: 1, exp: 'The Agni series uses solid propellant motors, offering quick launch readiness and storage safety.' },
    { q: 'What is the maximum speed of the BrahMos missile?', opts: ['Mach 1.2','Mach 2.8','Mach 4','Mach 0.9'], ans: 1, exp: 'BrahMos travels at approximately Mach 2.8 (~3,400 km/h).' },
    { q: 'What does "CEP" stand for in missile guidance?', opts: ['Circular Error Probable','Combat Engagement Point','Cruise Engine Power','Central Explosive Payload'], ans: 0, exp: 'CEP — Circular Error Probable — is the radius within which 50% of missiles will land. Lower = higher accuracy.' },
  ],
  'radar-systems': [
    { q: 'What does AESA stand for?', opts: ['Active Electronically Scanned Array','Advanced Electronic Surveillance Apparatus','Automated Electronic Signal Array','Active Energy Scanning Antenna'], ans: 0, exp: 'AESA — Active Electronically Scanned Array — uses thousands of individual T/R modules, each with its own amplifier.' },
    { q: 'What is the primary advantage of a phased array radar?', opts: ['Lower cost','Faster beam steering with no moving parts','Longer range only','Smaller size'], ans: 1, exp: 'Phased arrays steer the beam electronically, enabling simultaneous multi-target tracking impossible with mechanical steering.' },
    { q: "India's indigenous AESA radar for the Tejas Mk2 is called:", opts: ['Rohini','Uttam','Indra','Phalcon'], ans: 1, exp: "Uttam AESA fire-control radar is being developed by DRDO's LRDE for the Tejas Mk2." },
    { q: 'What does "LPI" mean in radar EW?', opts: ['Low Power Interface','Long Period Intercept','Low Probability of Intercept','Laser Pulse Integration'], ans: 2, exp: 'LPI — Low Probability of Intercept — uses waveform design techniques (frequency hopping, spread spectrum) to avoid detection by enemy ESM.' },
  ],
  'defence-innovation': [
    { q: 'What does AMCA stand for?', opts: ['Advanced Military Combat Aircraft','Advanced Medium Combat Aircraft','Aerial Multi-Combat Asset','Autonomous Military Combat Asset'], ans: 1, exp: "AMCA — Advanced Medium Combat Aircraft — is India's indigenous 5th-gen stealth fighter under development by ADA and HAL." },
    { q: 'What is a "loitering munition"?', opts: ['A cruise missile that circles before striking','A drone that can be recalled','An unmanned system that loiters and attacks on target identification','A slow-flying bomber'], ans: 2, exp: 'A loitering munition loiters over a target area and dives to detonate on target identification. Examples: Harop (Israel), Switchblade (USA).' },
    { q: 'FINSAS stands for:', opts: ['Future Infantry Soldier as a System','Forward Infantry Network and Surveillance','Fast Infantry Netting & Assault System','Future Integrated Naval Soldier Armament System'], ans: 0, exp: "FINSAS — Future Infantry Soldier as a System — modernizes the Indian infantry with integrated comm, navigation, night vision, smart weapons, and battlefield networking." },
  ],
};

module.exports = QUIZZES;
