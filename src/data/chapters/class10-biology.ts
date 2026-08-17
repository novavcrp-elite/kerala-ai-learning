// Class 10 Biology — Kerala SCERT 2025 Revised Syllabus

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

export const class10BiologyChapters: ChapterContent[] = [
  {
    chapterNumber: 1,
    title: "Sensations and Responses",
    titleMl: "ഉണർവും പ്രതികരണവും",
    summary: "This chapter covers the nervous system and how the body senses and responds to stimuli. The nervous system has three parts: Central Nervous System (CNS = Brain + Spinal Cord), Peripheral Nervous System (PNS = nerves connecting CNS to body), and Autonomic Nervous System (ANS = involuntary functions). Neurons are the structural and functional units of the nervous system. Types: Sensory (afferent), Motor (efferent), Interneurons. Reflex actions: Quick, involuntary responses (e.g., withdrawing hand from hot object). The reflex arc: Stimulus → Receptor → Sensory neuron → Spinal cord → Motor neuron → Effector → Response. Brain parts: Cerebrum (thinking, memory), Cerebellum (balance, coordination), Medulla (involuntary functions like breathing, heartbeat). Eye: Iris controls pupil size, lens focuses light on retina. Ear: Outer ear collects sound, middle ear amplifies, inner ear converts to nerve impulses.",
    summaryMl: "ശരീരം ഉണർവുകളെ എങ്ങനെ തിരിച്ചറിയുകയും പ്രതികരിക്കുകയും ചെയ്യുന്നു എന്ന് ഈ അധ്യായം വിശദീകരിക്കുന്നു. നാഡീവ്യവസ്ഥ: കേന്ദ്ര നാഡീവ്യവസ്ഥ (മൂളക്കം + നട്ടെല്ല്), പുറം നാഡീവ്യവസ്ഥ, സ്വയംചാലിത നാഡീവ്യവസ്ഥ. ന്യൂറോണുകൾ നാഡീവ്യവസ്ഥയുടെ ഘടനാപരവും പ്രവർത്തനപരവുമായ യൂണിറ്റുകൾ. റിഫ്ലക്സ് പ്രവർത്തനങ്ങൾ. മൂളക്കത്തിന്റെ ഭാഗങ്ങൾ.",
    keyPoints: [
      "Nervous System: CNS (Brain + Spinal Cord), PNS (nerves), ANS (involuntary).",
      "Neuron: Structural and functional unit. Parts: Cell body, dendrites, axon, nerve ending.",
      "Types: Sensory neurons (receptor → CNS), Motor neurons (CNS → effector), Interneurons (within CNS).",
      "Reflex Arc: Stimulus → Receptor → Sensory neuron → CNS → Motor neuron → Effector → Response.",
      "Brain: Cerebrum (thinking, memory, speech), Cerebellum (balance, posture), Medulla (breathing, heartbeat).",
      "Eye: Cornea refracts light, Iris controls pupil, Lens focuses on retina. Binocular vision, cataract.",
      "Ear: Outer (pinna, ear canal), Middle (eardrum, ossicles), Inner (cochlea → hearing, semicircular canals → balance).",
    ],
    keyPointsMl: [
      "നാഡീവ്യവസ്ഥ: കേന്ദ്രം (മൂളക്കം + നട്ടെല്ല്), പുറം നാഡികൾ, സ്വയംചാലിതം.",
      "ന്യൂറോൺ: ഘടനാ-പ്രവർത്തന യൂണിറ്റ്. ഭാഗങ്ങൾ: കോശ ശരീരം, ഡെൻഡ്രൈറ്റുകൾ, ആക്സോൺ.",
      "റിഫ്ലക്സ് ആർക്ക്: ഉണർവ് → ഗ്രാഹകം → സെൻസറി ന്യൂറോൺ → കേന്ദ്രം → മോട്ടർ ന്യൂറോൺ → പ്രവർത്തകം → പ്രതികരണം.",
      "മൂളക്കം: സെറീബ്രം (ചിന്ത, ഓർമ്മ), സെറീബെല്ലം (സന്തുലനം), മെഡുല്ല (ശ്വാസം, ഹൃദയമിടിപ്പ്).",
      "കണ്ണ്: കോർണിയ, ഐറിസ്, ലെൻസ്, റെറ്റിന.",
      "കാത്: പുറം കാത്, മധ്യ കാത് (ഓസിക്കിൾസ്), അകം കാത് (കോക്ലിയ).",
    ],
    importantQuestions: [
      { q: "What is a reflex action? Give an example.", a: "A reflex action is a quick, involuntary, automatic response to a stimulus that does not involve the brain. It is controlled by the spinal cord. Example: When you touch a hot object, you immediately withdraw your hand — this happens before you even feel pain. The reflex arc: Stimulus (heat) → Receptor (skin) → Sensory neuron → Spinal cord → Motor neuron → Effector (muscle) → Response (withdraw hand).", qMl: "റിഫ്ലക്സ് പ്രവർത്തനം എന്ത്? ഒരു ഉദാഹരണം തരിക.", aMl: "റിഫ്ലക്സ് പ്രവർത്തനം മൂളക്കം ഇടപെടാതെ നടക്കുന്ന വേഗത്തിലുള്ള, അനിഷ്ടാവാഹ്യ, സ്വയംചാലിത പ്രതികരണമാണ്. ഉദാ: ചൂടുള്ള വസ്തു തൊടുമ്പോൾ ഉടൻ കൈ പിൻവലിക്കുന്നു — വേദന അനുഭവിക്കുന്നതിന് മുമ്പ് തന്നെ." },
      { q: "Describe the parts of the human brain and their functions.", a: "The human brain has three main parts: (1) Cerebrum — largest part, controls thinking, memory, speech, intelligence, and voluntary actions. (2) Cerebellum — controls balance, posture, and coordination of body movements. (3) Medulla Oblongata — controls involuntary functions like breathing, heartbeat, vomiting, and coughing. The brain is protected by the skull (cranium) and meninges, and cushioned by cerebrospinal fluid.", qMl: "മനുഷ്യ മൂളക്കത്തിന്റെ ഭാഗങ്ങളും അവയുടെ പ്രവർത്തനങ്ങളും വിവരിക്കുക.", aMl: "മൂളക്കത്തിന് മൂന്ന് പ്രധാന ഭാഗങ്ങൾ: (1) സെറീബ്രം — ഏറ്റവും വലുത്, ചിന്ത, ഓർമ്മ, സംസാരം, ബുദ്ധി നിയന്ത്രിക്കുന്നു. (2) സെറീബെല്ലം — സന്തുലനം, നിൽപ്പ്, ശരീര ചലനങ്ങളുടെ ഏകോപനം നിയന്ത്രിക്കുന്നു. (3) മെഡുല്ല ഓബ്ലോംഗേറ്റ — ശ്വാസം, ഹൃദയമിടിപ്പ്, ഛർദ്ദി എന്നിവ പോലുള്ള അനിഷ്ടാവാഹ്യ പ്രവർത്തനങ്ങൾ നിയന്ത്രിക്കുന്നു." },
    ],
  },
  {
    chapterNumber: 2,
    title: "Knowledge Windows",
    titleMl: "അറിവിന്റെ ജാലകങ്ങൾ",
    summary: "This chapter covers cell biology — the basic unit of life. Cell structure: Cell membrane, cytoplasm, nucleus (with nuclear membrane, nucleolus), mitochondria (powerhouse), endoplasmic reticulum, Golgi apparatus, ribosomes, lysosomes (suicidal bags), plastids (chloroplasts in plants). Cell division: Mitosis (2 daughter cells, same as parent — growth and repair), Meiosis (4 daughter cells, half the chromosomes — reproduction). Difference between plant and animal cells: Plants have cell wall, chloroplasts, large vacuole; animals have centrioles, lysosomes, small vacuoles. Chromosomes carry genes (DNA). DNA contains genetic information. Mendel's laws of inheritance: Dominance, Segregation, Independent Assortment.",
    summaryMl: "കോശ ജീവശാസ്ത്രം — ജീവിതത്തിന്റെ അടിസ്ഥാന യൂണിറ്റ്. കോശ ഘടന: കോശ പെരുമാപ്പ്, സൈറ്റോപ്ലാസം, ന്യൂക്ലിയസ്, മൈറ്റോകോൺഡ്രിയ, റൈബോസോമുകൾ, ലൈസോസോമുകൾ. കോശ വിഭജനം: മൈറ്റോസിസ്, മീയോസിസ്. സസ്യ-മൃഗ കോശങ്ങൾ തമ്മിലുള്ള വ്യത്യാസം. ജനിതക വിവരം. മെൻഡലിന്റെ പൈതൃക നിയമങ്ങൾ.",
    keyPoints: [
      "Cell: Basic unit of life. Animal cell: no cell wall. Plant cell: cell wall, chloroplasts, large vacuole.",
      "Organelles: Nucleus (control center), Mitochondria (energy/ATP), Ribosomes (protein synthesis), Lysosomes (digestion), ER (transport), Golgi (packaging).",
      "Mitosis: 2 identical daughter cells (for growth). Meiosis: 4 different cells, half chromosomes (for gametes).",
      "DNA: Double helix, carries genes. Gene: Segment of DNA that codes for a protein.",
      "Mendel's Laws: Dominance, Segregation, Independent Assortment.",
      "Chromosomes: 23 pairs in humans (46 total). Sex chromosomes: XX (female), XY (male).",
    ],
    keyPointsMl: [
      "കോശം: ജീവിതത്തിന്റെ അടിസ്ഥാന യൂണിറ്റ്. മൃഗ കോശം: കോശഭിത്തി ഇല്ല. സസ്യ കോശം: കോശഭിത്തി, ക്ലോറോപ്ലാസ്റ്റുകൾ, വലിയ വാക്വോൾ.",
      "അങ്കിതങ്ങൾ: ന്യൂക്ലിയസ് (നിയന്ത്രണ കേന്ദ്രം), മൈറ്റോകോൺഡ്രിയ (ഊർജ്ജ), റൈബോസോമുകൾ (പ്രോട്ടീൻ സംശ്ലേഷണം).",
      "മൈറ്റോസിസ്: 2 സമാന കോശങ്ങൾ (വളർച്ചയ്ക്ക്). മീയോസിസ്: 4 വ്യത്യസ്ത കോശങ്ങൾ (ഗാമെറ്റുകൾക്ക്).",
      "DNA: ഇരട്ട ഹെലിക്സ്, ജീനുകൾ ചുമക്കുന്നു.",
      "മെൻഡലിന്റെ നിയമങ്ങൾ: ആധിപത്യം, വേർപിരിയൽ, സ്വതന്ത്ര അനുബന്ധം.",
    ],
    importantQuestions: [
      { q: "What is the difference between mitosis and meiosis?", a: "Mitosis: Cell divides once to produce 2 identical daughter cells with the SAME number of chromosomes as the parent cell. Used for growth and repair. Occurs in somatic cells. Meiosis: Cell divides twice to produce 4 daughter cells with HALF the chromosomes. Used for producing gametes (sperm, egg). Occurs in reproductive cells. Genetic variation is produced.", qMl: "മൈറ്റോസിസും മീയോസിസും തമ്മിലുള്ള വ്യത്യാസം എന്ത്?", aMl: "മൈറ്റോസിസ്: കോശം ഒരിക്കൽ വിഭജിക്കപ്പെട്ട് മാതൃകോശത്തിന്റെ അതേ ക്രോമസോം നമ്പറുള്ള 2 സമാന മകൾ കോശങ്ങൾ ഉത്പാദിപ്പിക്കുന്നു. വളർച്ചയ്ക്കും നന്മപ്പിക്കലിനും. മീയോസിസ്: കോശം രണ്ട് തവണ വിഭജിക്കപ്പെട്ട് പകുതി ക്രോമസോമുകളുള്ള 4 മകൾ കോശങ്ങൾ. ഗാമെറ്റുകൾ ഉത്പാദിപ്പിക്കാൻ." },
    ],
  },
  {
    chapterNumber: 3,
    title: "Keeping Diseases Away",
    titleMl: "രോഗങ്ങളെ അകറ്റി നിർത്തുന്നത്",
    summary: "This chapter covers diseases, immunity, and prevention. Infectious diseases: Caused by pathogens (bacteria, viruses, fungi, protozoa). Examples: Cholera (Vibrio cholerae), TB (Mycobacterium tuberculosis), Malaria (Plasmodium, through mosquito bite), AIDS (HIV virus), COVID-19 (SARS-CoV-2). Non-infectious diseases: Not caused by pathogens (diabetes, cancer, heart disease). Prevention: Vaccination (stimulates immune system to produce antibodies), hygiene (clean water, sanitation, hand washing), balanced diet, exercise. Immunity: Innate (born with, non-specific) vs Adaptive (developed after exposure, specific). Antigens trigger antibody production. Vaccines contain weakened/dead pathogens that train the immune system.",
    summaryMl: "രോഗങ്ങൾ, രോഗപ്രതിരോധം, പ്രതിരോധം ഈ അധ്യായം ഉൾക്കൊള്ളുന്നു. സാംക്രമിക രോഗങ്ങൾ: രോഗാണുക്കൾ മൂലം. ഉദാ: കോളര, TB, മലേറിയ, AIDS, COVID-19. സാംക്രമികമല്ലാത്ത രോഗങ്ങൾ: പ്രമേഹം, കാൻസർ. പ്രതിരോധം: വാക്സിനേഷൻ, ശുചിത്വം, സമീലമായ ഭക്ഷണം. പ്രതിരോധശേഷി: ജന്മജാതവും അനുഭവജന്യവും.",
    keyPoints: [
      "Infectious diseases: Spread through pathogens (bacteria, viruses, fungi, protozoa).",
      "Cholera → bacteria (Vibrio), Malaria → protozoa (Plasmodium via Anopheles mosquito), AIDS → virus (HIV).",
      "Vaccination: Introduces weakened/dead pathogens → immune system produces antibodies.",
      "Immunity: Innate (non-specific, from birth) vs Adaptive (specific, developed after exposure).",
      "Antigens: Foreign substances that trigger immune response. Antibodies: Proteins that fight antigens.",
      "Prevention: Clean water, sanitation, vaccination, balanced diet, exercise, hand washing.",
      "Non-communicable diseases: Diabetes, cancer, heart disease (not caused by pathogens).",
    ],
    keyPointsMl: [
      "സാംക്രമിക രോഗങ്ങൾ: രോഗാണുക്കൾ വഴി പകരുന്നു.",
      "കോളര → ബാക്ടീരിയ, മലേറിയ → പ്രോട്ടോസോവ (അണീഓഫിലസ് കൊതുക് വഴി), AIDS → വൈറസ് (HIV).",
      "വാക്സിനേഷൻ: ദുർബലപ്പെടുത്തിയ രോഗാണുക്കൾ → പ്രതിരോധ സംവിധാനം ആൻ്റിബോഡികൾ ഉത്പാദിപ്പിക്കുന്നു.",
      "രോഗപ്രതിരോധം: ജന്മജാത (വിശിഷ്ടമല്ലാത്തത്) vs അനുഭവജന്യ (വിശിഷ്ടം).",
      "ആൻ്റിജൻസ്: പ്രതിരോധ പ്രതികരണം ഉത്തേജിപ്പിക്കുന്ന പരാന്നജീവി പദാർത്ഥങ്ങൾ.",
    ],
    importantQuestions: [
      { q: "How does vaccination work?", a: "Vaccination introduces a weakened or dead form of a pathogen (or its toxin) into the body. This stimulates the immune system to produce antibodies against that specific pathogen. The immune system also creates memory cells. If the same pathogen enters the body later, the memory cells quickly produce antibodies to fight it, preventing disease. This is how smallpox was eradicated and how polio is being controlled.", qMl: "വാക്സിനേഷൻ എങ്ങനെ പ്രവർത്തിക്കുന്നു?", aMl: "വാക്സിനേഷൻ ശരീരത്തിൽ ഒരു രോഗാണുവിന്റെ ദുർബലമോ മരിച്ചതോ ആയ രൂപം അവതരിപ്പിക്കുന്നു. ഇത് പ്രതിരോധ സംവിധാനത്തെ ആൻ്റിബോഡികൾ ഉത്പാദിപ്പിക്കാൻ പ്രേരിപ്പിക്കുന്നു. അതേ രോഗാണു പിന്നീട് ശരീരത്തിൽ കടക്കുമ്പോൾ മെമ്മറി കോശങ്ങൾ വേഗത്തിൽ ആൻ്റിബോഡികൾ ഉത്പാദിപ്പിക്കുന്നു." },
    ],
  },
  {
    chapterNumber: 4,
    title: "Defense mechanisms",
    titleMl: "പ്രതിരോധ സംവിധാനങ്ങൾ",
    summary: "This chapter covers the immune system's defense mechanisms in detail. First line of defense: Skin (physical barrier), mucus membranes, tears (lysozyme enzyme), stomach acid (HCl kills bacteria). Second line of defense: White blood cells (phagocytes engulf pathogens), inflammation, fever, antimicrobial substances. Third line of defense: Adaptive immunity — T-cells (destroy infected cells), B-cells (produce antibodies). Types of immunity: Innate (non-specific), Active acquired (after infection/vaccination), Passive acquired (antibodies from mother/serum). Allergies: Overreaction of immune system to harmless substances. Autoimmune diseases: Immune system attacks own body (e.g., rheumatoid arthritis, type 1 diabetes). AIDS: HIV attacks T-helper cells, destroying the immune system.",
    summaryMl: "രോഗപ്രതിരോധ സംവിധാനത്തിന്റെ പ്രതിരോധ സംവിധാനങ്ങൾ വിശദമായി ഈ അധ്യായം ഉൾക്കൊള്ളുന്നു. ആദ്യ നിര പ്രതിരോധം: ചർമ്മം, മ്യൂക്കസ് മെംബ്രേൻ, കണ്ണുനീർ. രണ്ടാമത്തെ നിര: വെള്ള രക്താണുക്കൾ, പനി. മൂന്നാമത്തെ നിര: അനുഭവജന്യ പ്രതിരോധം — T-കോശങ്ങൾ, B-കോശങ്ങൾ. അലർജി, സ്വയംരോഗപ്രതിരോധ രോഗങ്ങൾ, AIDS.",
    keyPoints: [
      "1st line: Skin, mucus, tears, stomach acid (non-specific barriers).",
      "2nd line: Phagocytes (white blood cells), inflammation, fever (non-specific internal).",
      "3rd line: Adaptive immunity — T-cells (cell-mediated), B-cells (antibody-mediated / humoral).",
      "Active immunity: Body produces its own antibodies (after infection or vaccination).",
      "Passive immunity: Pre-made antibodies given externally (mother's milk, antiserum injection).",
      "Allergy: Overreaction to harmless antigens (pollen, dust). Histamine causes symptoms.",
      "AIDS: HIV destroys T-helper cells → immune system collapses → opportunistic infections.",
    ],
    keyPointsMl: [
      "1-ാം നിര: ചർമ്മം, മ്യൂക്കസ്, കണ്ണുനീർ, വയർ ആസിഡ്.",
      "2-ാം നിര: ഫാഗോസൈറ്റുകൾ, വീക്കം, പനി.",
      "3-ാം നിര: T-കോശങ്ങൾ (കോശ-മധ്യസ്ഥ), B-കോശങ്ങൾ (ആൻ്റിബോഡി-മധ്യസ്ഥ).",
      "സജീവ പ്രതിരോധം: ശരീരം സ്വന്തം ആൻ്റിബോഡികൾ ഉത്പാദിപ്പിക്കുന്നു.",
      "നിഷ്ക്രിയ പ്രതിരോധം: മുൻകൂട്ടി നിർമ്മിച്ച ആൻ്റിബോഡികൾ പുറത്ത് നിന്ന് നൽകുന്നു.",
      "AIDS: HIV T-സഹായക കോശങ്ങളെ നശിപ്പിക്കുന്നു → പ്രതിരോധ സംവിധാനം തകരുന്നു.",
    ],
    importantQuestions: [
      { q: "What are the three lines of defense in the human body?", a: "1st Line: Physical barriers — skin (prevents entry), mucus (traps pathogens), tears (lysozyme kills bacteria), stomach acid (HCl kills ingested pathogens). 2nd Line: Non-specific internal defense — white blood cells (phagocytes engulf pathogens), inflammation, fever, antimicrobial proteins. 3rd Line: Adaptive/specific immunity — T-cells destroy infected cells directly, B-cells produce antibodies specific to each pathogen. This provides long-lasting memory.", qMl: "മനുഷ്യ ശരീരത്തിലെ മൂന്ന് പ്രതിരോധ നിരകൾ ഏത്?", aMl: "1-ാം നിര: ഭൗതിക തടസ്സങ്ങൾ — ചർമ്മം, മ്യൂക്കസ്, കണ്ണുനീർ, വയർ ആസിഡ്. 2-ാം നിര: അനിഷ്ടാവാഹ്യ ആന്തരിക പ്രതിരോധം — വെള്ള രക്താണുക്കൾ, വീക്കം, പനി. 3-ാം നിര: അനുഭവജന്യ/വിശിഷ്ട പ്രതിരോധം — T-കോശങ്ങളും B-കോശങ്ങളും പ്രത്യേക രോഗാണുക്കൾക്കെതിരെ പ്രവർത്തിക്കുന്നു. ദീർഘകാല ഓർമ്മ നൽകുന്നു." },
    ],
  },
  {
    chapterNumber: 5,
    title: "Genetics",
    titleMl: "ജനിതകശാസ്ത്രം",
    summary: "This chapter covers heredity and genetics. Mendel's experiments with pea plants: Monohybrid cross (one trait — tall vs dwarf), Dihybrid cross (two traits). Law of Dominance: In a heterozygous pair, the dominant allele is expressed. Law of Segregation: Alleles separate during gamete formation. Law of Independent Assortment: Genes for different traits assort independently. Genotype (genetic makeup — TT, Tt, tt) vs Phenotype (physical appearance — tall/dwarf). Homozygous (TT or tt) vs Heterozygous (Tt). Sex determination: XX = female, XY = male. Chromosomal disorders: Down syndrome (extra chromosome 21), Turner syndrome (missing X), Klinefelter syndrome (extra X).",
    summaryMl: "പരമ്പരാഗതവും ജനിതകശാസ്ത്രവും. മെൻഡലിന്റെ പരീക്ഷണങ്ങൾ: ഏകസങ്കരണം (ഒരു ഗുണം), ദ്വിസങ്കരണം (രണ്ട് ഗുണങ്ങൾ). ആധിപത്യ നിയമം, വേർപിരിയൽ നിയമം, സ്വതന്ത്ര അനുബന്ധ നിയമം. ജീനോടൈപ്പ് vs ഫീനോടൈപ്പ്. ലിംഗ നിർണ്ണയം: XX = സ്ത്രീ, XY = പുരുഷൻ. ക്രോമസോം രോഗങ്ങൾ.",
    keyPoints: [
      "Mendel used pea plants to study inheritance of traits.",
      "Monohybrid cross: Tt × Tt → TT, Tt, tt (3:1 phenotypic ratio).",
      "Genotype: Genetic makeup (TT, Tt, tt). Phenotype: Physical appearance (tall, dwarf).",
      "Law of Dominance: Dominant allele (T) masks recessive (t) in heterozygous (Tt).",
      "Law of Segregation: Two alleles separate during gamete formation.",
      "Sex determination: Father decides (X from mother + X/Y from father → XX or XY).",
      "Chromosomal disorders: Down syndrome (trisomy 21), Turner (45, XO), Klinefelter (47, XXY).",
    ],
    keyPointsMl: [
      "മെൻഡൽ മധുരക്കിഴങ്ങ് ചെടികൾ ഉപയോഗിച്ച് ഗുണങ്ങളുടെ പരമ്പരാഗതം പഠിച്ചു.",
      "ഏകസങ്കരണം: Tt × Tt → TT, Tt, tt (3:1 ഫീനോടൈപ്പിക് അനുപാതം).",
      "ജീനോടൈപ്പ്: ജനിതക രൂപം. ഫീനോടൈപ്പ്: ഭൗതിക രൂപം.",
      "ആധിപത്യ നിയമം: ആധിപത്യ അലീൽ ഹെറ്ററോസൈഗസിൽ പിൻതള്ളൽ അലീലിനെ മറയ്ക്കുന്നു.",
      "വേർപിരിയൽ നിയമം: രണ്ട് അലീലുകൾ ഗാമെറ്റ് രൂപീകരണത്തിൽ വേർപിരിയുന്നു.",
      "ലിംഗ നിർണ്ണയം: അച്ഛൻ തീരുമാനിക്കുന്നു (X/Y അച്ഛനിൽ നിന്ന്).",
      "ക്രോമസോം രോഗങ്ങൾ: ഡൗൺ സിൻഡ്രോം (ട്രൈസോമി 21), ടർണർ, ക്ലൈൻഫെൽറ്റർ.",
    ],
    importantQuestions: [
      { q: "What is the difference between genotype and phenotype?", a: "Genotype is the genetic makeup of an organism — the actual combination of alleles (e.g., TT, Tt, tt). Phenotype is the physical expression or appearance of the genotype — what we observe (e.g., tall or dwarf). The same phenotype (tall) can have different genotypes (TT or Tt).", qMl: "ജീനോടൈപ്പും ഫീനോടൈപ്പും തമ്മിലുള്ള വ്യത്യാസം എന്ത്?", aMl: "ജീനോടൈപ്പ് ഒരു ജീവിയുടെ ജനിതക രൂപമാണ് — അലീലുകളുടെ യഥാർത്ഥ സംയോജനം (ഉദാ: TT, Tt, tt). ഫീനോടൈപ്പ് ജീനോടൈപ്പിന്റെ ഭൗതിക പ്രകടനമോ രൂപമോ ആണ് — നമ്മൾ കാണുന്നത് (ഉദാ: നെട്ടയ അല്ലെങ്കിൽ കുള്ളൻ). ഒരേ ഫീനോടൈപ്പിന് വ്യത്യസ്ത ജീനോടൈപ്പുകൾ ഉണ്ടാകാം." },
    ],
  },
  {
    chapterNumber: 6,
    title: "Evolution",
    titleMl: "പരിണാമം",
    summary: "This chapter covers the theory of evolution and evidence for it. Darwin's Theory of Natural Selection: Organisms with favorable variations survive and reproduce more (survival of the fittest). Evidence: Fossils (remains of ancient organisms), Homologous organs (same structure, different function — human hand and whale flipper), Vestigial organs (reduced function — appendix, ear muscles in humans), Molecular biology (DNA similarities). Lamarckism: Use and disuse theory (acquired characteristics are inherited — now largely discredited). Modern Synthetic Theory: Evolution occurs through natural selection, genetic drift, mutation, and gene flow. Human evolution: From common ancestor with apes, through stages like Australopithecus, Homo habilis, Homo erectus, to Homo sapiens.",
    summaryMl: "പരിണാമ സിദ്ധാന്തവും അതിനുള്ള തെളിവുകളും. ഡാർവിന്റെ സ്വാഭാവിക തെരഞ്ഞെടുപ്പ് സിദ്ധാന്തം: അനുകൂല വ്യതിയാനങ്ങളുള്ള ജീവികൾ അധികം നിലനിൽക്കുകയും പ്രജനനം ചെയ്യുകയും ചെയ്യുന്നു. തെളിവുകൾ: ജീവാവശിഷ്ടങ്ങൾ, സമരൂപ അവയവങ്ങൾ, അവശേഷ അവയവങ്ങൾ, തന്ത്രജ്ഞാന ജീവശാസ്ത്രം. മനുഷ്യ പരിണാമം.",
    keyPoints: [
      "Darwin's Theory: Natural selection — organisms with favorable traits survive and reproduce more.",
      "Fossils: Preserved remains of ancient organisms. Found in sedimentary rocks.",
      "Homologous organs: Same basic structure, different function (human arm, whale flipper, bat wing).",
      "Vestigial organs: Reduced/lost function (appendix in humans, ear muscles).",
      "Lamarckism: Use and disuse theory — largely discredited but historically important.",
      "Human evolution: Australopithecus → Homo habilis → Homo erectus → Homo sapiens.",
      "DNA evidence: All living organisms share DNA, showing common ancestry.",
    ],
    keyPointsMl: [
      "ഡാർവിൻ സിദ്ധാന്തം: സ്വാഭാവിക തെരഞ്ഞെടുപ്പ് — അനുകൂല ഗുണങ്ങളുള്ള ജീവികൾ നിലനിൽക്കുന്നു.",
      "ജീവാവശിഷ്ടങ്ങൾ: പ്രാചീന ജീവികളുടെ സംരക്ഷിത അവശിഷ്ടങ്ങൾ.",
      "സമരൂപ അവയവങ്ങൾ: ഒരേ അടിസ്ഥാന ഘടന, വ്യത്യസ്ത പ്രവർത്തനം.",
      "അവശേഷ അവയവങ്ങൾ: കുറഞ്ഞ/നഷ്ടപ്പെട്ട പ്രവർത്തനം.",
      "മനുഷ്യ പരിണാമം: ഓസ്ട്രലോപ്പിതെക്കസ് → ഹോമോ ഹാബിലിസ് → ഹോമോ ഇറെക്റ്റസ് → ഹോമോ സാപ്പിയൻസ്.",
    ],
    importantQuestions: [
      { q: "What is natural selection? Explain with an example.", a: "Natural selection is Darwin's theory that organisms with favorable variations (traits that help them survive in their environment) are more likely to survive and reproduce. Over many generations, these favorable traits become more common in the population. Example: In a population of beetles, green beetles may be better camouflaged on leaves than brown beetles. Birds eat more brown beetles. Over time, green beetles survive more and reproduce, making the population greener.", qMl: "സ്വാഭാവിക തെരഞ്ഞെടുപ്പ് എന്ത്? ഒരു ഉദാഹരണത്തിലൂടെ വിശദീകരിക്കുക.", aMl: "അനുകൂല വ്യതിയാനങ്ങളുള്ള ജീവികൾ കൂടുതൽ നിലനിൽക്കുകയും പ്രജനനം ചെയ്യുകയും ചെയ്യുന്നു എന്ന ഡാർവിന്റെ സിദ്ധാന്തമാണ് സ്വാഭാവിക തെരഞ്ഞെടുപ്പ്. ഉദാ: ഇലകളിൽ പച്ച വെള്ളയിലകൾ ചെറുത്ത് നിൽക്കാൻ കഴിയും. പക്ഷികൾ തവിട്ട് വെള്ളയിലകളെ കൂടുതൽ തിന്നുന്നു. കാലക്രമേണ പച്ച വെള്ളയിലകൾ കൂടുതൽ നിലനിൽക്കുന്നു." },
    ],
  },
];
