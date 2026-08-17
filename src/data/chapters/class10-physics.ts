// Class 10 Physics — Kerala SCERT 2025 Revised Syllabus

export interface ChapterContent {
  chapterNumber: number;
  title: string;
  titleMl: string;
  summary: string;
  summaryMl: string;
  keyPoints: string[];
  keyPointsMl: string[];
  importantQuestions: { q: string; a: string; qMl: string; aMl: string }[];
  definitions?: { term: string; meaning: string; termMl: string; meaningMl: string }[];
}

export const class10PhysicsChapters: ChapterContent[] = [
  {
    chapterNumber: 1,
    title: "Effects of Electric Current",
    titleMl: "വൈദ്യുതധാരയുടെ ഫലങ്ങൾ",
    summary: "This chapter covers the heating and magnetic effects of electric current. Joule's Law states that the heat produced in a conductor is directly proportional to the square of the current (H ∝ I²), the resistance (H ∝ R), and the time (H ∝ t). So H = I²Rt. The chapter covers electric power (P = VI = I²R = V²/R), kilowatt-hour as a unit of energy, and the comparison of power ratings in household circuits. It also covers the magnetic effect: a current-carrying conductor produces a magnetic field around it (Oersted's experiment), electromagnets, and the working principle of electric motors (force on a current-carrying conductor in a magnetic field, Fleming's Left Hand Rule).",
    summaryMl: "വൈദ്യുതധാരയുടെ ചൂടും മഗ്നറ്റിക് ഫലങ്ങളും ഈ അധ്യായം ഉൾക്കൊള്ളുന്നു. ജൂൾസ് നിയമം: H = I²Rt. വൈദ്യുത ശക്തി P = VI = I²R = V²/R. വൈദ്യുതധാര വഹിക്കുന്ന കണ്ടക്ടറിന് ചുറ്റും മഗ്നറ്റിക് ഫീൽഡ് ഉണ്ടാകുന്നു (ഓർസ്റ്റഡ് പരീക്ഷണം). ഇലക്ട്രിക് മോട്ടറുകളുടെ പ്രവർത്തന തത്വം.",
    keyPoints: [
      "Joule's Law: H = I²Rt — Heat ∝ I², ∝ R, ∝ t",
      "Electric Power: P = VI (watts), 1 kW = 1000 W, 1 kWh = 3.6 × 10⁶ J",
      "Household circuits: Fuses protect against excessive current. Rated current determines fuse selection.",
      "Oersted's Experiment: A current-carrying wire deflects a magnetic needle → current produces magnetic field.",
      "Electromagnet: Soft iron core + coil + current = temporary magnet (used in bells, cranes, relays).",
      "Electric Motor: Converts electrical energy to mechanical energy. Based on force on current-carrying conductor in magnetic field.",
      "Fleming's Left Hand Rule: Thumb = direction of force, First finger = magnetic field, Second finger = current direction.",
      "DC Motor has: split-ring commutator (reverses current each half rotation), brushes, armature, field magnets.",
    ],
    keyPointsMl: [
      "ജൂൾസ് നിയമം: H = I²Rt — ചൂട് ∝ I², ∝ R, ∝ t",
      "വൈദ്യുത ശക്തി: P = VI (വാട്ട്), 1 kW = 1000 W, 1 kWh = 3.6 × 10⁶ J",
      "ഹൗസ്ഹോൾഡ് സർക്യൂട്ടുകൾ: ഫ്യൂസുകൾ അമിത വൈദ്യുതധാരയിൽ നിന്ന് സംരക്ഷിക്കുന്നു.",
      "ഓർസ്റ്റഡ് പരീക്ഷണം: വൈദ്യുതധാര വഹിക്കുന്ന വയർ മഗ്നറ്റിക് സൂചിയെ തള്ളുന്നു.",
      "ഇലക്ട്രോമഗ്നറ്റ്: മൃദുല ഇരുമ്പ് കോർ + കോയിൽ + വൈദ്യുതധാര = താത്കാലിക മഗ്നറ്റ്.",
      "ഇലക്ട്രിക് മോട്ടർ: വൈദ്യുത ഊർജ്ജം യാന്ത്രിക ഊർജ്ജമാക്കി മാറ്റുന്നു.",
      "ഫ്ലെമിങ്സ് ഇടതുകൈ നിയമം: തള്ളവിരൽ = ബലം, ആദ്യവിരൽ = മഗ്നറ്റിക് ഫീൽഡ്, രണ്ടാം വിരൽ = വൈദ്യുതധാര.",
      "DC മോട്ടറിൽ: സ്പ്ലിറ്റ് റിംഗ് കമ്മ്യൂട്ടേറ്റർ, ബ്രഷുകൾ, ആർമേച്ചർ, ഫീൽഡ് മാഗ്നറ്റുകൾ ഉണ്ട്.",
    ],
    importantQuestions: [
      { q: "State Joule's Law of heating.", a: "Joule's Law states that the heat (H) produced in a conductor is directly proportional to: (1) the square of the current (I²), (2) the resistance (R) of the conductor, and (3) the time (t) for which the current flows. Formula: H = I²Rt.", qMl: "ജൂള്സിന്റെ ചൂട് നിയമം എഴുതുക.", aMl: "ജൂള്സിന്റെ നിയമം: ഒരു കണ്ടക്ടറിൽ ഉത്പാദിപ്പിക്കുന്ന ചൂട് (H) നേർ അനുപാതത്തിലാണ്: (1) വൈദ്യുതധാരയുടെ വർഗ്ഗത്തോട് (I²), (2) പ്രതിരോധത്തോട് (R), (3) സമയത്തോട് (t). സൂത്രവാക്യം: H = I²Rt." },
      { q: "What is an electric motor? How does it work?", a: "An electric motor converts electrical energy into mechanical energy. It works on the principle that a current-carrying conductor placed in a magnetic field experiences a force. When current flows through the coil (armature), the magnetic field exerts a force on it, causing it to rotate. The split-ring commutator reverses the current direction every half rotation, ensuring continuous rotation in one direction.", qMl: "ഇലക്ട്രിക് മോട്ടർ എന്ത്? അത് എങ്ങനെ പ്രവർത്തിക്കുന്നു?", aMl: "ഇലക്ട്രിക് മോട്ടർ വൈദ്യുത ഊർജ്ജം യാന്ത്രിക ഊർജ്ജമാക്കി മാറ്റുന്നു. മഗ്നറ്റിക് ഫീൽഡിൽ വച്ചിരിക്കുന്ന വൈദ്യുതധാര വഹിക്കുന്ന കണ്ടക്ടറിന് ബലം അനുഭവപ്പെടുന്നു എന്ന തത്വത്തിൽ പ്രവർത്തിക്കുന്നു. സ്പ്ലിറ്റ് റിംഗ് കമ്മ്യൂട്ടേറ്റർ ഓരോ അർദ്ധ ഭ്രമണത്തിലും വൈദ്യുതധാര ദിശ മറിക്കുന്നു." },
      { q: "Explain Oersted's experiment.", a: "Oersted placed a magnetic compass near a current-carrying wire. When current flowed, the compass needle deflected, proving that a current-carrying conductor produces a magnetic field around it. When the current direction was reversed, the needle deflected in the opposite direction. When the current was switched off, the needle returned to its original position.", qMl: "ഓർസ്റ്റഡ് പരീക്ഷണം വിശദീകരിക്കുക.", aMl: "ഓർസ്റ്റഡ് ഒരു കറൻ്റ് വഹിക്കുന്ന വയറിന് അടുത്ത് ഒരു മഗ്നറ്റിക് കോംപാസ് വച്ചു. കറൻ്റ് ഒഴുകിയപ്പോൾ കോംപാസ് സൂചി തള്ളി, വൈദ്യുതധാര വഹിക്കുന്ന കണ്ടക്ടറിന് ചുറ്റും മഗ്നറ്റിക് ഫീൽഡ് ഉണ്ടാകുന്നു എന്ന് തെളിയിച്ചു." },
      { q: "What is the difference between a fuse and an MCB?", a: "Fuse: A thin wire that melts when excessive current flows, breaking the circuit. It needs to be replaced after it blows. MCB (Miniature Circuit Breaker): An automatic switch that trips when current exceeds the rated value. It can be reset by switching it back on. MCBs are more reliable and convenient than fuses.", qMl: "ഫ്യൂസും MCBയും തമ്മിലുള്ള വ്യത്യാസം എന്ത്?", aMl: "ഫ്യൂസ്: അമിത വൈദ്യുതധാര ഒഴുകുമ്പോൾ ഉരുകി സർക്യൂട്ട് മുറിക്കുന്ന മെല്ലിയ വയർ. പൊട്ടിയാൽ മാറ്റണം. MCB: റേറ്റഡ് മൂല്യം കവിയുമ്പോൾ ഓട്ടോമാറ്റിക്കായി ട്രിപ്പ് ചെയ്യുന്ന സ്വിച്ച്. വീണ്ടും ഓൺ ചെയ്യാം. MCB ഫ്യൂസിനേക്കാൾ വിശ്വസനീയവും സൗകര്യപ്രദവുമാണ്." },
    ],
    definitions: [
      { term: "Joule's Law", meaning: "H = I²Rt — The heat produced in a conductor is proportional to I², R, and t", termMl: "ജൂൾസ് നിയമം", meaningMl: "H = I²Rt — കണ്ടക്ടറിൽ ഉത്പാദിപ്പിക്കുന്ന ചൂട് I², R, t എന്നിവയോട് അനുപാതമുള്ളതാണ്" },
      { term: "Electric Power", meaning: "P = VI — The rate at which electrical energy is consumed", termMl: "വൈദ്യുത ശക്തി", meaningMl: "P = VI — വൈദ്യുത ഊർജ്ജം ഉപഭോഗം ചെയ്യുന്ന നിരക്ക്" },
      { term: "Electromagnet", meaning: "Temporary magnet made by passing current through a coil wound on soft iron core", termMl: "ഇലക്ട്രോമഗ്നറ്റ്", meaningMl: "മൃദുല ഇരുമ്പ് കോറിൽ ചുറ്റിയ കോയിലിലൂടെ വൈദ്യുതധാര കടത്തി നിർമ്മിച്ച താത്കാലിക മഗ്നറ്റ്" },
      { term: "Commutator", meaning: "Split-ring device that reverses current direction in a DC motor every half rotation", termMl: "കമ്മ്യൂട്ടേറ്റർ", meaningMl: "DC മോട്ടറിൽ ഓരോ അർദ്ധ ഭ്രമണത്തിലും വൈദ്യുതധാര ദിശ മറിക്കുന്ന സ്പ്ലിറ്റ് റിംഗ് ഉപകരണം" },
    ],
  },
  {
    chapterNumber: 2,
    title: "Magnetic Effect of Electric Current",
    titleMl: "വൈദ്യുതധാരയുടെ മഗ്നറ്റിക് ഫലം",
    summary: "This chapter explores the magnetic field produced by current-carrying conductors. A straight wire produces concentric circular magnetic field lines around it. A solenoid (coil with many turns) produces a uniform magnetic field inside it, similar to a bar magnet. The strength of the magnetic field depends on: (1) number of turns, (2) current magnitude, (3) presence of soft iron core. Fleming's Right Hand Rule determines the direction of induced current in electromagnetic induction.",
    summaryMl: "വൈദ്യുതധാര വഹിക്കുന്ന കണ്ടക്ടറുകൾ ഉത്പാദിപ്പിക്കുന്ന മഗ്നറ്റിക് ഫീൽഡ് പഠിക്കുന്നു. നേർ വയർ അതിന് ചുറ്റും ഏകകേന്ദ്ര വൃത്താകാര മഗ്നറ്റിക് ഫീൽഡ് രേഖകൾ ഉത്പാദിപ്പിക്കുന്നു. സോലനോയ്ഡ് (കോയിൽ) അതിനുള്ളിൽ ഒരു ഏകീകൃത മഗ്നറ്റിക് ഫീൽഡ് ഉത്പാദിപ്പിക്കുന്നു.",
    keyPoints: [
      "Magnetic field around a straight current-carrying wire: Concentric circles, direction given by Right Hand Thumb Rule.",
      "Solenoid: A coil of many turns → uniform magnetic field inside, similar to bar magnet.",
      "Electromagnet: Solenoid + soft iron core = strong temporary magnet.",
      "Fleming's Right Hand Rule: For induced current — Thumb = motion, First finger = field, Second finger = induced current.",
      "Factors affecting electromagnet strength: number of turns, current, iron core.",
    ],
    keyPointsMl: [
      "നേർ കണ്ടക്ടറിന് ചുറ്റും മഗ്നറ്റിക് ഫീൽഡ്: ഏകകേന്ദ്ര വൃത്തങ്ങൾ.",
      "സോലനോയ്ഡ്: നിരവധി ടേണുകളുള്ള കോയിൽ → ഏകീകൃത മഗ്നറ്റിക് ഫീൽഡ്.",
      "ഇലക്ട്രോമഗ്നറ്റ്: സോലനോയ്ഡ് + മൃദുല ഇരുമ്പ് കോർ.",
      "ഫ്ലെമിങ്സ് വലതുകൈ നിയമം: പ്രേരിത വൈദ്യുതധാരയ്ക്ക്.",
    ],
    importantQuestions: [
      { q: "How does a current-carrying solenoid behave?", a: "A current-carrying solenoid behaves like a bar magnet. It has a North and South pole. The magnetic field inside is uniform and strong. Adding a soft iron core makes it an electromagnet — strong and temporary.", qMl: "വൈദ്യുതധാര വഹിക്കുന്ന സോലനോയ്ഡ് എങ്ങനെ പെരുമാറുന്നു?", aMl: "ഇത് ബാർ മഗ്നറ്റ് പോലെ പെരുമാറുന്നു. വടക്ക്-തെക്ക് ധ്രുവങ്ങൾ ഉണ്ട്. ഉള്ളിലെ മഗ്നറ്റിക് ഫീൽഡ് ഏകീകൃതവും ശക്തവുമാണ്. മൃദുല ഇരുമ്പ് കോർ ചേർത്താൽ ഇലക്ട്രോമഗ്നറ്റ് ആകുന്നു." },
    ],
  },
  {
    chapterNumber: 3,
    title: "Electromagnetic Induction",
    titleMl: "വൈദ്യുതകാന്തിക പ്രേരണ",
    summary: "Electromagnetic Induction is the phenomenon where a changing magnetic field produces an electric current in a conductor. Faraday's laws: (1) When magnetic flux through a coil changes, an EMF is induced, (2) The magnitude of induced EMF is proportional to the rate of change of magnetic flux. Lenz's Law states that the induced current always opposes the change that caused it. AC Generator works on electromagnetic induction — a coil rotating in a magnetic field produces alternating current. Transformers change voltage levels using mutual induction between two coils.",
    summaryMl: "വൈദ്യുതകാന്തിക പ്രേരണ: മാറുന്ന മഗ്നറ്റിക് ഫീൽഡ് കണ്ടക്ടറിൽ വൈദ്യുതധാര ഉത്പാദിപ്പിക്കുന്ന പ്രതിഭാസം. ഫറഡേയുടെ നിയമം. ലെൻസ് നിയമം: പ്രേരിത വൈദ്യുതധാര എപ്പോഴും കാരണമായ മാറ്റത്തെ എതിർക്കുന്നു. AC ജനറേറ്റർ വൈദ്യുതകാന്തിക പ്രേരണയിൽ പ്രവർത്തിക്കുന്നു.",
    keyPoints: [
      "Faraday's Law: Changing magnetic flux → induced EMF (ε = -dΦ/dt).",
      "Lenz's Law: Induced current opposes the change (negative sign in Faraday's law).",
      "AC Generator: Coil rotates in magnetic field → alternating current (uses slip rings).",
      "DC Generator: Uses split-ring commutator → direct current.",
      "Transformer: Mutual induction between primary and secondary coils changes voltage.",
      "Step-up transformer: Increases voltage (more turns in secondary). Step-down: Decreases voltage.",
      "Eddy currents: Circular currents induced in bulk conductors — used in brakes and damping.",
    ],
    keyPointsMl: [
      "ഫറഡേയുടെ നിയമം: മഗ്നറ്റിക് ഫ്ലക്സ് മാറുമ്പോൾ → പ്രേരിത EMF.",
      "ലെൻസ് നിയമം: പ്രേരിത വൈദ്യുതധാര മാറ്റത്തെ എതിർക്കുന്നു.",
      "AC ജനറേറ്റർ: കോയിൽ മഗ്നറ്റിക് ഫീൽഡിൽ ഭ്രമണം ചെയ്യുന്നു → ഏറ്റക്കുറച്ചിലുള്ള വൈദ്യുതധാര.",
      "ട്രാൻസ്ഫോർമർ: പ്രൈമറി, സെക്കൻഡറി കോയിലുകൾ തമ്മിലുള്ള പരസ്പര പ്രേരണ.",
    ],
    importantQuestions: [
      { q: "What is electromagnetic induction?", a: "Electromagnetic induction is the phenomenon where a changing magnetic field produces an electric current in a conductor. When a magnet is moved towards or away from a coil, or when a coil moves in a magnetic field, an EMF is induced in the coil. This is the principle behind generators and transformers.", qMl: "വൈദ്യുതകാന്തിക പ്രേരണ എന്ത്?", aMl: "മാറുന്ന മഗ്നറ്റിക് ഫീൽഡ് കണ്ടക്ടറിൽ വൈദ്യുതധാര ഉത്പാദിപ്പിക്കുന്ന പ്രതിഭാസമാണ് വൈദ്യുതകാന്തിക പ്രേരണ. ജനറേറ്ററുകളുടെയും ട്രാൻസ്ഫോർമറുകളുടെയും തത്വമാണിത്." },
      { q: "What is Lenz's Law?", a: "Lenz's Law states that the direction of induced current is such that it always opposes the change in magnetic flux that produced it. This is why Faraday's law has a negative sign. It is based on the law of conservation of energy.", qMl: "ലെൻസ് നിയമം എന്ത്?", aMl: "ലെൻസ് നിയമം: പ്രേരിത വൈദ്യുതധാരയുടെ ദിശ അത് ഉത്പാദിപ്പിച്ച മഗ്നറ്റിക് ഫ്ലക്സിലെ മാറ്റത്തെ എപ്പോഴും എതിർക്കുന്ന വിധമായിരിക്കും. ഊർജ്ജ സംരക്ഷണ നിയമത്തെ അടിസ്ഥാനമാക്കിയുള്ളതാണ്." },
      { q: "How does an AC generator work?", a: "An AC generator converts mechanical energy to electrical energy. A rectangular coil rotates between two magnetic poles. As the coil rotates, the magnetic flux through it changes continuously, inducing an alternating EMF (and current) according to Faraday's law. Slip rings maintain continuous contact with external circuit, producing AC output.", qMl: "AC ജനറേറ്റർ എങ്ങനെ പ്രവർത്തിക്കുന്നു?", aMl: "AC ജനറേറ്റർ യാന്ത്രിക ഊർജ്ജം വൈദ്യുത ഊർജ്ജമാക്കി മാറ്റുന്നു. രണ്ട് മഗ്നറ്റിക് ധ്രുവങ്ങൾക്കിടയിൽ ഒരു ചതുരശ്ര കോയിൽ ഭ്രമണം ചെയ്യുന്നു. കോയിൽ ഭ്രമണം ചെയ്യുമ്പോൾ മഗ്നറ്റിക് ഫ്ലക്സ് തുടർച്ചയായി മാറുന്നു, ഏറ്റക്കുറച്ചിലുള്ള EMF പ്രേരിപ്പിക്കുന്നു." },
    ],
  },
  {
    chapterNumber: 4,
    title: "Reflection of Light",
    titleMl: "പ്രകാശത്തിന്റെ പ്രതിഫലനം",
    summary: "This chapter covers reflection of light at plane and curved mirrors. Laws of reflection: (1) Angle of incidence = Angle of reflection, (2) Incident ray, reflected ray, and normal all lie in the same plane. For plane mirrors: image is virtual, erect, laterally inverted, and same size as object. For concave mirrors: image nature depends on object position (can be real/virtual, erect/inverted, magnified/diminished). The mirror formula: 1/f = 1/v + 1/u. Mirror equation problems are solved using sign convention. Uses of concave and convex mirrors in daily life.",
    summaryMl: "സമതല, വക്ര മിറ്ററുകളിൽ പ്രകാശത്തിന്റെ പ്രതിഫലനം. പ്രതിഫലന നിയമങ്ങൾ: (1) അഭിമുഖ കോൺ = പ്രതിഫലന കോൺ, (2) സംഭവ കിരണം, പ്രതിഫലിത കിരണം, ലംബം എല്ലാം ഒരേ തലത്തിൽ. മിറ്റർ സൂത്രവാക്യം: 1/f = 1/v + 1/u.",
    keyPoints: [
      "Laws of Reflection: θi = θr; all three (incident, reflected, normal) in same plane.",
      "Concave Mirror: Converging mirror. Image depends on object position.",
      "Convex Mirror: Diverging mirror. Always gives virtual, erect, diminished image.",
      "Mirror Formula: 1/f = 1/v + 1/u (with sign convention).",
      "Magnification: m = h'/h = -v/u",
      "Uses: Concave — shaving mirrors, headlamps, solar concentrators. Convex — rear-view mirrors, security mirrors.",
    ],
    keyPointsMl: [
      "പ്രതിഫലന നിയമങ്ങൾ: θi = θr.",
      "കുഴി മിറ്റർ: അഭിസാരിക മിറ്റർ. വസ്തു സ്ഥാനത്തെ ആശ്രയിച്ച് ചിത്രം.",
      "ഉയർന്ന മിറ്റർ: വികേന്ദ്രീകരിക്കുന്ന മിറ്റർ. എപ്പോഴും വെർച്വൽ, നിവർന്ന, ചെറുതാക്കിയ ചിത്രം.",
      "മിറ്റർ സൂത്രവാക്യം: 1/f = 1/v + 1/u.",
      "ഉപയോഗങ്ങൾ: കുഴി — ഷേവിംഗ് മിറ്ററുകൾ, ഹെഡ്ലാമ്പുകൾ. ഉയർന്ന — പിന്നോട്ട് നോക്കുന്ന മിറ്ററുകൾ.",
    ],
    importantQuestions: [
      { q: "What are the laws of reflection?", a: "Laws of reflection: (1) The angle of incidence is equal to the angle of reflection (θi = θr). (2) The incident ray, the reflected ray, and the normal to the reflecting surface at the point of incidence all lie in the same plane.", qMl: "പ്രതിഫലന നിയമങ്ങൾ എന്ത്?", aMl: "(1) അഭിമുഖ കോൺ പ്രതിഫലന കോണിന് തുല്യമാണ് (θi = θr). (2) സംഭവ കിരണം, പ്രതിഫലിത കിരണം, ലംബം എല്ലാം ഒരേ തലത്തിൽ." },
      { q: "What is the mirror formula?", a: "The mirror formula is: 1/f = 1/v + 1/u, where f is the focal length, v is the image distance from the pole, and u is the object distance from the pole. Sign convention: distances measured in the direction of incident light are positive, opposite direction are negative.", qMl: "മിറ്റർ സൂത്രവാക്യം എന്ത്?", aMl: "മിറ്റർ സൂത്രവാക്യം: 1/f = 1/v + 1/u, ഇവിടെ f ഫോക്കൽ ദൂരവും v ചിത്ര ദൂരവും u വസ്തു ദൂരവുമാണ്. ചിഹ്ന സമ്പ്രദായം: സംഭവ പ്രകാശ ദിശയിൽ അളക്കുന്ന ദൂരങ്ങൾ പോസിറ്റീവ്." },
    ],
  },
  {
    chapterNumber: 5,
    title: "Refraction of Light",
    titleMl: "പ്രകാശത്തിന്റെ അപവർത്തനം",
    summary: "Refraction is the bending of light when it passes from one medium to another. Laws: (1) Incident ray, refracted ray, and normal lie in the same plane, (2) Snell's Law: n₁sinθ₁ = n₂sinθ₂. Refractive index (n) = speed of light in vacuum / speed in medium. When light travels from denser to rarer medium, it bends away from normal. Total internal reflection occurs when light in denser medium hits the boundary at an angle greater than the critical angle. Uses: fiber optics, mirages, twinkling of stars, apparent depth.",
    summaryMl: "ഒരു മാധ്യമത്തിൽ നിന്ന് മറ്റൊന്നിലേക്ക് പ്രകാശം കടക്കുമ്പോൾ വളയുന്നതാണ് അപവർത്തനം. സ്നെൽസ് നിയമം: n₁sinθ₁ = n₂sinθ₂. സാന്ദ്ര മാധ്യമത്തിൽ നിന്ന് വിരള മാധ്യമത്തിലേക്ക് പോകുമ്പോൾ ലംബത്തിൽ നിന്ന് അകലം വയ്ക്കുന്നു. ആഭ്യന്തര മൊത്തം പ്രതിഫലനം.",
    keyPoints: [
      "Snell's Law: n₁sinθ₁ = n₂sinθ₂",
      "Refractive index: n = c/v (vacuum speed / medium speed)",
      "Denser → Rarer: bends away from normal. Rarer → Denser: bends towards normal.",
      "Critical angle: angle of incidence in denser medium for which angle of refraction = 90°.",
      "Total Internal Reflection: when incidence angle > critical angle (used in fiber optics).",
      "Apparent depth: When looking into water, objects appear closer than they actually are.",
      "Lateral displacement: the sideways shift of a ray passing through a glass slab.",
    ],
    keyPointsMl: [
      "സ്നെൽസ് നിയമം: n₁sinθ₁ = n₂sinθ₂",
      "അപവർത്തന സൂചകം: n = c/v",
      "സാന്ദ്ര → വിരള: ലംബത്തിൽ നിന്ന് അകലം വയ്ക്കുന്നു. വിരള → സാന്ദ്ര: ലംബത്തിലേക്ക് വളയുന്നു.",
      "സംക്ഷിപ്ത കോൺ: സാന്ദ്ര മാധ്യമത്തിലെ അഭിമുഖ കോൺ അപവർത്തന കോൺ 90° ആകുമ്പോൾ.",
      "ആഭ്യന്തര മൊത്തം പ്രതിഫലനം: അഭിമുഖ കോൺ > സംക്ഷിപ്ത കോൺ.",
      "പ്രത്യക്ഷ ആഴം: വെള്ളത്തിലേക്ക് നോക്കുമ്പോൾ വസ്തുക്കൾ യഥാർത്ഥത്തേക്കാൾ അടുത്ത് തോന്നുന്നു.",
    ],
    importantQuestions: [
      { q: "What is total internal reflection? Give its conditions and uses.", a: "Total Internal Reflection (TIR) occurs when a light ray traveling in a denser medium hits the boundary with a rarer medium at an angle greater than the critical angle, and is completely reflected back into the denser medium. Conditions: (1) Light must travel from denser to rarer medium, (2) Angle of incidence > critical angle. Uses: Optical fibers (internet/data transmission), mirages, diamonds' brilliance, periscopes.", qMl: "ആഭ്യന്തര മൊത്തം പ്രതിഫലനം എന്ത്? ഉപാധികളും ഉപയോഗങ്ങളും കൊടുക്കുക.", aMl: "ആഭ്യന്തര മൊത്തം പ്രതിഫലനം: സാന്ദ്ര മാധ്യമത്തിൽ സഞ്ചരിക്കുന്ന പ്രകാശ കിരണം വിരള മാധ്യമത്തിന്റെ അതിർത്തിയിൽ സംക്ഷിപ്ത കോണിൽ കൂടുതൽ കോണിൽ ഹിറ്റ് ചെയ്യുകയും പൂർണ്ണമായി സാന്ദ്ര മാധ്യമത്തിലേക്ക് പ്രതിഫലിക്കുകയും ചെയ്യുന്നു. ഉപാധികൾ: (1) സാന്ദ്രത്തിൽ നിന്ന് വിരളത്തിലേക്ക്, (2) അഭിമുഖ കോൺ > സംക്ഷിപ്ത കോൺ. ഉപയോഗങ്ങൾ: ഒപ്റ്റിക്കൽ ഫൈബർ, മിരാജ്, വജ്രങ്ങൾ." },
    ],
  },
  {
    chapterNumber: 6,
    title: "Vision and the World of Colour",
    titleMl: "കാഴ്ചയും വർണ്ണലോകവും",
    summary: "This chapter covers the human eye, defects of vision, and spectrum of light. The human eye works like a camera — the lens focuses light on the retina. Ciliary muscles adjust the lens shape (accommodation). Defects: Myopia (nearsightedness — corrected with concave lens), Hypermetropia (farsightedness — corrected with convex lens), Presbyopia (old-age farsightedness — bifocal lens). Spectrum: White light splits into VIBGYOR (Violet, Indigo, Blue, Green, Yellow, Orange, Red). Dispersion of light, scattering of light (Rayleigh scattering explains why sky is blue), scattering in particles (Tyndall effect).",
    summaryMl: "മനുഷ്യ നേത്രം, കാഴ്ച വൈകല്യങ്ങൾ, പ്രകാശ സ്പെക്ട്രം എന്നിവ ഈ അധ്യായം ഉൾക്കൊള്ളുന്നു. മനുഷ്യ നേത്രം ഒരു ക്യാമറ പോലെ പ്രവർത്തിക്കുന്നു — ലെൻസ് റെറ്റിനയിൽ പ്രകാശം ഫോക്കസ് ചെയ്യുന്നു. വൈകല്യങ്ങൾ: മയോപ്പിയ (കുറഞ്ഞ കാഴ്ച — കുഴി ലെൻസ്), ഹൈപ്പർമെട്രോപ്പി (അകലെ കാഴ്ച — ഉയർന്ന ലെൻസ്). സ്പെക്ട്രം: VIBGYOR.",
    keyPoints: [
      "Human Eye: Lens focuses light on retina. Ciliary muscles control accommodation (focusing).",
      "Myopia: Eye ball too long / lens too powerful → image forms before retina. Corrected with CONCAVE lens.",
      "Hypermetropia: Eye ball too short / lens too weak → image forms behind retina. Corrected with CONVEX lens.",
      "Presbyopia: Aging reduces accommodation → need bifocal lenses.",
      "Dispersion: White light splits into spectrum (VIBGYOR) through a prism.",
      "Scattering: Small particles scatter shorter wavelengths (blue) more → sky appears blue (Rayleigh scattering).",
      "Tyndall Effect: Scattering of light by colloidal particles (seen in fog, dust in sunlight).",
    ],
    keyPointsMl: [
      "മനുഷ്യ നേത്രം: ലെൻസ് റെറ്റിനയിൽ ഫോക്കസ് ചെയ്യുന്നു.",
      "മയോപ്പിയ: കണ്ണ് വളരെ നീണ്ടത് / ലെൻസ് വളരെ ശക്തം → ചിത്രം റെറ്റിനയ്ക്ക് മുമ്പ്. കുഴി ലെൻസ് കൊണ്ട് ശരിയാക്കുന്നു.",
      "ഹൈപ്പർമെട്രോപ്പി: കണ്ണ് വളരെ ചെറുത് / ലെൻസ് വളരെ ദുർബലം → ചിത്രം റെറ്റിനയ്ക്ക് പിന്നിൽ. ഉയർന്ന ലെൻസ് കൊണ്ട് ശരിയാക്കുന്നു.",
      "വിഭജനം: വെള്ള പ്രകാശം പ്രിസത്തിലൂടെ സ്പെക്ട്രത്തിലേക്ക് വിഭജിക്കുന്നു (VIBGYOR).",
      "വ്യാപനം: ചെറിയ കണികകൾ ചെറിയ തരംഗദൈർഘ്യം (നീല) കൂടുതൽ വ്യാപിപ്പിക്കുന്നു → ആകാശം നീലയാണ്.",
    ],
    importantQuestions: [
      { q: "How does a myopic eye differ from a hypermetropic eye?", a: "Myopic eye: Eyeball is too long or lens is too powerful. Light focuses BEFORE the retina, causing distant objects to appear blurry. Corrected with CONCAVE lens. Hypermetropic eye: Eyeball is too short or lens is too weak. Light focuses BEHIND the retina, causing near objects to appear blurry. Corrected with CONVEX lens.", qMl: "മയോപിക് കണ്ണും ഹൈപ്പർമെട്രോപിക് കണ്ണും തമ്മിൽ എന്ത് വ്യത്യാസം?", aMl: "മയോപിക്: കണ്ണ് വളരെ നീണ്ടത് / ലെൻസ് ശക്തം. പ്രകാശം റെറ്റിനയ്ക്ക് മുമ്പ് ഫോക്കസ് ചെയ്യുന്നു. കുഴി ലെൻസ് കൊണ്ട് ശരിയാക്കുന്നു. ഹൈപ്പർമെട്രോപിക്: കണ്ണ് ചെറുത് / ലെൻസ് ദുർബലം. പ്രകാശം റെറ്റിനയ്ക്ക് പിന്നിൽ ഫോക്കസ് ചെയ്യുന്നു. ഉയർന്ന ലെൻസ് കൊണ്ട് ശരിയാക്കുന്നു." },
    ],
  },
  {
    chapterNumber: 7,
    title: "Energy",
    titleMl: "ഊർജ്ജം",
    summary: "This chapter covers energy sources, conservation, and environmental impacts. Non-renewable sources: fossil fuels (coal, petroleum, natural gas) — formed over millions of years, cause pollution, limited supply. Renewable sources: solar, wind, hydel, tidal, geothermal, biomass — sustainable and cleaner. Energy conservation: reducing waste, using efficient appliances, switching off unnecessary lights. Environmental impacts: thermal power → CO₂ emissions, nuclear → radioactive waste, hydro → displacement of people. The chapter also covers the need for alternative energy sources and sustainable development.",
    summaryMl: "ഊർജ്ജ സ്രോതസ്സുകൾ, സംരക്ഷണം, പരിസര ആഘാതങ്ങൾ ഈ അധ്യായം ഉൾക്കൊള്ളുന്നു. പുനഃസ്വാഭാവികമല്ലാത്തവ: ഫോസിൽ ഇന്ധനങ്ങൾ. പുനഃസ്വാഭാവികവും ശുദ്ധവുമായവ: സൗര, കാറ്റ്, ജലവൈദ്യുത. ഊർജ്ജ സംരക്ഷണം, പരിസര ആഘാതം, ബദൽ ഊർജ്ജ സ്രോതസ്സുകളുടെ ആവശ്യകത.",
    keyPoints: [
      "Non-renewable: Fossil fuels (coal, petroleum, gas) — millions of years to form, limited, polluting.",
      "Renewable: Solar, wind, hydro, tidal, geothermal, biomass — sustainable, cleaner.",
      "Thermal power: Burning fuel → steam → turbine → generator. Releases CO₂, SO₂, NO₂ (acid rain).",
      "Nuclear: Splitting atoms (fission) → enormous energy. Radioactive waste is dangerous.",
      "Hydel: Dam + water flow → turbine. Affects ecosystems and displaces communities.",
      "Energy conservation: Switch off lights, use LED bulbs, use public transport, reduce AC usage.",
      "Need for alternative energy: Climate change, pollution, depletion of fossil fuels.",
    ],
    keyPointsMl: [
      "പുനഃസ്വാഭാവികമല്ലാത്തവ: ഫോസിൽ ഇന്ധനങ്ങൾ — പരിമിതം, മലിനീകരണം.",
      "പുനഃസ്വാഭാവികം: സൗര, കാറ്റ്, ജലവൈദ്യുത, ജ്വാലാമുഖി, ജൈവവിഭവം.",
      "തെർമൽ പവർ: ഇന്ധനം കത്തിക്കൽ → ആവി → ടർബൈൻ → ജനറേറ്റർ. CO₂ പുറത്തുവിടുന്നു.",
      "ആണവം: ആറ്റങ്ങൾ വിഭജിക്കൽ → അഭൂതപൂർവ്വമായ ഊർജ്ജം.",
      "ജലവൈദ്യുതം: ഡാം + വെള്ളം → ടർബൈൻ.",
      "ഊർജ്ജ സംരക്ഷണം: ലൈറ്റ് ഓഫ് ചെയ്യുക, LED ഉപയോഗിക്കുക.",
    ],
    importantQuestions: [
      { q: "What is the difference between renewable and non-renewable energy sources?", a: "Non-renewable: Fossil fuels that take millions of years to form and cannot be replenished quickly. They cause pollution and will eventually run out (coal, petroleum, natural gas). Renewable: Energy sources that are naturally replenished and are sustainable — solar, wind, hydro, tidal, geothermal, biomass. They are cleaner and will not run out.", qMl: "പുനഃസ്വാഭാവികവും പുനഃസ്വാഭാവികമല്ലാത്തതുമായ ഊർജ്ജ സ്രോതസ്സുകൾ തമ്മിലുള്ള വ്യത്യാസം എന്ത്?", aMl: "പുനഃസ്വാഭാവികമല്ലാത്തവ: ലക്ഷക്കണക്കിന് വർഷങ്ങൾ എടുക്കുന്ന ഫോസിൽ ഇന്ധനങ്ങൾ. മലിനീകരണം ഉണ്ടാക്കുന്നു. പുനഃസ്വാഭാവികം: പ്രകൃതിദത്തമായി പുനഃസൃഷ്ടിക്കപ്പെടുന്ന ഊർജ്ജ സ്രോതസ്സുകൾ — സൗര, കാറ്റ്, ജലവൈദ്യുതം. ശുദ്ധവും സുസ്ഥിരവുമാണ്." },
    ],
  },
];
