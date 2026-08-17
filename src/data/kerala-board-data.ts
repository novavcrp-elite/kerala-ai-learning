// Kerala State Board (SCERT) textbook data — 2024-25 REvised syllabus
// Source: samagra.kite.kerala.gov.in, byjus.com/kbpe, textbooksall.blogspot.com
// Updated to match the NEW SCERT textbooks (not old NCERT)

export interface SubjectData {
  name: string;
  nameMl: string;
  code: string;
  sourceUrl?: string;
  parts: PartData[];
}
export interface PartData {
  partNumber: number;
  title: string;
  titleMl: string;
  chapters: ChapterData[];
}
export interface ChapterData {
  chapterNumber: number;
  title: string;
  titleMl: string;
  pageStart?: number;
  pageEnd?: number;
  headings: string[];
}
export interface ClassData {
  number: number;
  name: string;
  description: string;
  subjects: SubjectData[];
}

const S = "https://samagra.kite.kerala.gov.in";

export const keralaBoardData: ClassData[] = [
  // ─────── CLASS 6 ───────
  {
    number: 6, name: "Class 6", description: "Sixth Standard – Kerala SCERT (2024-25)",
    subjects: [
      { name: "English", nameMl: "ഇംഗ്ലീഷ്", code: "ENG", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "Who Did Patrick's Homework?", titleMl: "പാട്രിക്കിന്റെ ഹോംവർക്ക് ആര് ചെയ്തു?", headings: ["Imagination", "Effort"] },
          { chapterNumber: 2, title: "How the Dog Found Himself a New Master", titleMl: "നായ എങ്ങനെ പുതിയ യജമാനനെ കണ്ടെത്തി", headings: ["Fable", "Loyalty", "Contentment"] },
          { chapterNumber: 3, title: "Taro's Reward", titleMl: "താറോയുടെ സമ്മാനം", headings: ["Folk Tale", "Filial Piety"] },
          { chapterNumber: 4, title: "An Indian-American Woman in Space", titleMl: "ഇന്ത്യൻ-അമേരിക്കൻ വനിത – ബഹിരാകാശത്ത്", headings: ["Kalpana Chawla", "Space"] },
          { chapterNumber: 5, title: "A Different Kind of School", titleMl: "മറ്റൊരു തരം സ്കൂൾ", headings: ["Inclusive Education", "Empathy"] },
          { chapterNumber: 6, title: "Who I Am", titleMl: "ഞാൻ ആരാണ്", headings: ["Identity", "Self-Discovery"] },
          { chapterNumber: 7, title: "Fair Play", titleMl: "ന്യായമായ കളി", headings: ["Sportsmanship", "Justice"] },
          { chapterNumber: 8, title: "The Banyan Tree", titleMl: "ആൽമരം", headings: ["Nature", "Childhood"] },
          { chapterNumber: 9, title: "The Wonder Called Sleep", titleMl: "ഉറക്കം എന്ന അത്ഭുതം", headings: ["Sleep", "Science"] },
          { chapterNumber: 10, title: "The Sound of the Musical Instruments", titleMl: "സംഗീതോപകരണങ്ങളുടെ ശബ്ദം", headings: ["Music", "Instruments"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 1, title: "What Happened to the Protectors of Ploughing", titleMl: "കൃഷി സംരക്ഷകർക്ക് എന്ത് സംഭവിച്ചു", headings: ["Agriculture"] },
          { chapterNumber: 2, title: "The Squirrel", titleMl: "ഉറുമ്പ്", headings: ["Poetry", "Nature"] },
          { chapterNumber: 3, title: "A House, A Home", titleMl: "ഒരു വീട്, ഒരു ആഹ്ലാദം", headings: ["Home", "Poetry"] },
          { chapterNumber: 4, title: "Virdika – The Story of a Jute Bag", titleMl: "വീർദിക്ക – ഒരു ചണ സഞ്ചിയുടെ കഥ", headings: ["Eco-friendly", "Recycling"] },
          { chapterNumber: 5, title: "Tolstoy and the Black Bag", titleMl: "ടോൾസ്റ്റോയിയും കറുത്ത ബാഗും", headings: ["Wisdom"] },
        ]},
      ]},
      { name: "Malayalam", nameMl: "മലയാളം", code: "ML", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "അക്ഷരം", titleMl: "അക്ഷരം", headings: ["ലിപി"] },
          { chapterNumber: 2, title: "മഴ", titleMl: "മഴ", headings: ["കവിത"] },
          { chapterNumber: 3, title: "നന്മ", titleMl: "നന്മ", headings: ["നീതികഥ"] },
          { chapterNumber: 4, title: "ഭാഷാ പരിചയം", titleMl: "ഭാഷാ പരിചയം", headings: ["വ്യാകരണം"] },
          { chapterNumber: 5, title: "പ്രകൃതി", titleMl: "പ്രകൃതി", headings: ["പ്രകൃതി വർണ്ണന"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 1, title: "കഥകൾ", titleMl: "കഥകൾ", headings: ["ചെറുകഥകൾ"] },
          { chapterNumber: 2, title: "കവിതാ സമാഹാരം", titleMl: "കവിതാ സമാഹാരം", headings: ["കവിതകൾ"] },
          { chapterNumber: 3, title: "ചരിത്രം", titleMl: "ചരിത്രം", headings: ["കേരള ചരിത്രം"] },
          { chapterNumber: 4, title: "ഭാഷാ പ്രയോഗം", titleMl: "ഭാഷാ പ്രയോഗം", headings: ["ലഘുകഥ", "ലേഖനം"] },
        ]},
      ]},
      { name: "Mathematics", nameMl: "ഗണിതം", code: "MATH", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "Knowing Our Numbers", titleMl: "നമ്മുടെ സംഖ്യകൾ അറിയാം", headings: ["Large Numbers", "Place Value", "Estimation"] },
          { chapterNumber: 2, title: "Whole Numbers", titleMl: "പൂർണ്ണ സംഖ്യകൾ", headings: ["Number Line", "Properties"] },
          { chapterNumber: 3, title: "Playing with Numbers", titleMl: "സംഖ്യകളുമായി കളിക്കാം", headings: ["Factors", "Multiples", "LCM", "HCF"] },
          { chapterNumber: 4, title: "Basic Geometrical Ideas", titleMl: "ജ്യാമിതിയുടെ അടിസ്ഥാന ആശയങ്ങൾ", headings: ["Points", "Lines", "Rays", "Angles"] },
          { chapterNumber: 5, title: "Understanding Elementary Shapes", titleMl: "അടിസ്ഥാന രൂപങ്ങൾ", headings: ["2D Shapes", "3D Shapes", "Types of Angles"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 1, title: "Integers", titleMl: "പൂർണ്ണ സംഖ്യകൾ", headings: ["Positive", "Negative", "Number Line"] },
          { chapterNumber: 2, title: "Fractions", titleMl: "ഭിന്നങ്ങൾ", headings: ["Proper", "Improper", "Mixed", "Operations"] },
          { chapterNumber: 3, title: "Decimals", titleMl: "ദശമലങ്ങൾ", headings: ["Place Value", "Operations"] },
          { chapterNumber: 4, title: "Data Handling", titleMl: "ഡാറ്റ കൈകാര്യം", headings: ["Pictograph", "Bar Graph"] },
          { chapterNumber: 5, title: "Mensuration", titleMl: "അളക്കൽ", headings: ["Perimeter", "Area"] },
        ]},
      ]},
      { name: "Basic Science", nameMl: "ബേസിക് സയൻസ്", code: "BS", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "Food: Where Does It Come From?", titleMl: "ഭക്ഷണം: എവിടെ നിന്ന്?", headings: ["Food Sources"] },
          { chapterNumber: 2, title: "Components of Food", titleMl: "ഭക്ഷണത്തിന്റെ ഘടകങ്ങൾ", headings: ["Nutrients", "Vitamins"] },
          { chapterNumber: 3, title: "Fibre to Fabric", titleMl: "നാര് മുതൽ തുണിവരെ", headings: ["Fibres", "Weaving"] },
          { chapterNumber: 4, title: "Sorting Materials into Groups", titleMl: "വസ്തുക്കൾ തിരിക്കൽ", headings: ["States of Matter", "Properties"] },
          { chapterNumber: 6, title: "Changes Around Us", titleMl: "മാറ്റങ്ങൾ", headings: ["Reversible", "Irreversible"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 7, title: "Getting to Know Plants", titleMl: "സസ്യങ്ങളെ അറിയാം", headings: ["Herbs", "Shrubs", "Trees"] },
          { chapterNumber: 8, title: "Body Movements", titleMl: "ശരീര ചലനങ്ങൾ", headings: ["Joints", "Skeletal System"] },
          { chapterNumber: 9, title: "The Living Organisms and Their Surroundings", titleMl: "ജീവികളും ചുറ്റുപാടും", headings: ["Habitat", "Adaptation"] },
          { chapterNumber: 11, title: "Light, Shadows and Reflections", titleMl: "പ്രകാശം, നിഴൽ, പ്രതിബിംബം", headings: ["Light Sources", "Mirrors"] },
          { chapterNumber: 13, title: "Water: A Precious Resource", titleMl: "ജലം: വിലപ്പെട്ട വിഭവം", headings: ["Water Cycle", "Groundwater"] },
        ]},
      ]},
      { name: "Social Science", nameMl: "സോഷ്യൽ സയൻസ്", code: "SS", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "What, Where, How and When?", titleMl: "എന്ത്, എവിടെ, എങ്ങനെ, എപ്പോൾ?", headings: ["History", "Sources"] },
          { chapterNumber: 2, title: "On the Trail of the Earliest People", titleMl: "ഏറ്റവും ആദ്യത്തെ മനുഷ്യർ", headings: ["Stone Age", "Tools"] },
          { chapterNumber: 3, title: "From Gathering to Growing Food", titleMl: "ശേഖരണത്തിൽ നിന്ന് കൃഷിയിലേക്ക്", headings: ["Agriculture"] },
          { chapterNumber: 4, title: "In the Earliest Cities", titleMl: "ഏറ്റവും പുരാതന നഗരങ്ങൾ", headings: ["Indus Valley", "Harappa"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 1, title: "The Earth in the Solar System", titleMl: "സൗരയൂഥത്തിലെ ഭൂമി", headings: ["Planets", "Moon", "Stars"] },
          { chapterNumber: 2, title: "Globe: Latitudes and Longitudes", titleMl: "ഭൂമിഗോളം", headings: ["Latitude", "Longitude"] },
          { chapterNumber: 3, title: "Motions of the Earth", titleMl: "ഭൂമിയുടെ ചലനങ്ങൾ", headings: ["Rotation", "Revolution"] },
        ]},
      ]},
    ],
  },
  // ─────── CLASS 7 ───────
  {
    number: 7, name: "Class 7", description: "Seventh Standard – Kerala SCERT (2024-25)",
    subjects: [
      { name: "English", nameMl: "ഇംഗ്ലീഷ്", code: "ENG", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "Three Questions", titleMl: "മൂന്ന് ചോദ്യങ്ങൾ", headings: ["Tolstoy", "Wisdom"] },
          { chapterNumber: 2, title: "A Gift of Chappals", titleMl: "ചെപ്പലുകളുടെ സമ്മാനം", headings: ["Compassion"] },
          { chapterNumber: 3, title: "Gopal and the Hilsa Fish", titleMl: "ഗോപാലും ഹിൽസ മീനും", headings: ["Wit", "Wisdom"] },
          { chapterNumber: 4, title: "The Ashes That Made Trees Bloom", titleMl: "മരങ്ങൾ പൂവിടാൻ ചെയ്ത ചാരം", headings: ["Japanese Folktale"] },
          { chapterNumber: 5, title: "Quality", titleMl: "ഗുണനിലവാരം", headings: ["Craftsmanship"] },
          { chapterNumber: 6, title: "Expert Detectives", titleMl: "വൈദഗ്ധ്യമുള്ള അന്വേഷകർ", headings: ["Detective Story"] },
          { chapterNumber: 7, title: "The Invention of Vita-Wonk", titleMl: "വിറ്റ-വോങ്ക്", headings: ["Roald Dahl", "Fantasy"] },
          { chapterNumber: 8, title: "Fire: Friend and Foe", titleMl: "തീ: സുഹൃത്തും ശത്രുവും", headings: ["Fire", "Safety"] },
          { chapterNumber: 9, title: "A Bicycle in Good Repair", titleMl: "സൈക്കിൾ", headings: ["Humour"] },
          { chapterNumber: 10, title: "The Story of Cricket", titleMl: "ക്രിക്കറ്റിന്റെ കഥ", headings: ["Cricket History"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 1, title: "A Cherry Blossom in Kyoto", titleMl: "ക്യോട്ടോയിലെ ചെറി പൂവ്", headings: ["Travel"] },
          { chapterNumber: 2, title: "The Cop and the Anthem", titleMl: "പോലീസുകാരനും ദേശീയഗാനവും", headings: ["O. Henry"] },
          { chapterNumber: 3, title: "Great Stories Come Alive", titleMl: "കഥകൾ ജീവസ്സുറ്റതാകുന്നു", headings: ["Literature"] },
          { chapterNumber: 4, title: "Garden Fence", titleMl: "തോട്ടത്തിന്റെ വേലി", headings: ["Nature"] },
        ]},
      ]},
      { name: "Malayalam", nameMl: "മലയാളം", code: "ML", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "ബന്ധുക്കൾ", titleMl: "ബന്ധുക്കൾ", headings: ["കഥ"] },
          { chapterNumber: 2, title: "മഴനീല", titleMl: "മഴനീല", headings: ["കവിത"] },
          { chapterNumber: 3, title: "പുതുമഴ", titleMl: "പുതുമഴ", headings: ["കഥ"] },
          { chapterNumber: 4, title: "ജീവിതം", titleMl: "ജീവിതം", headings: ["കവിത"] },
          { chapterNumber: 5, title: "കേരളീയം", titleMl: "കേരളീയം", headings: ["കേരള സംസ്കാരം"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 1, title: "കഥകൾ", titleMl: "കഥകൾ", headings: ["ചെറുകഥകൾ"] },
          { chapterNumber: 2, title: "കവിതാ സമാഹാരം", titleMl: "കവിതാ സമാഹാരം", headings: ["കവിതകൾ"] },
          { chapterNumber: 3, title: "ലേഖനങ്ങൾ", titleMl: "ലേഖനങ്ങൾ", headings: ["പ്രബന്ധം"] },
          { chapterNumber: 4, title: "വ്യാകരണം", titleMl: "വ്യാകരണം", headings: ["വാക്യം"] },
        ]},
      ]},
      { name: "Mathematics", nameMl: "ഗണിതം", code: "MATH", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "Integers", titleMl: "പൂർണ്ണ സംഖ്യകൾ", headings: ["Addition", "Subtraction", "Multiplication"] },
          { chapterNumber: 2, title: "Fractions and Decimals", titleMl: "ഭിന്നങ്ങളും ദശമലങ്ങളും", headings: ["Multiplication", "Division"] },
          { chapterNumber: 3, title: "Data Handling", titleMl: "ഡാറ്റ കൈകാര്യം", headings: ["Mean", "Median", "Mode", "Probability"] },
          { chapterNumber: 4, title: "Simple Equations", titleMl: "ലളിത സമവാക്യങ്ങൾ", headings: ["Variables", "Solving"] },
          { chapterNumber: 5, title: "Lines and Angles", titleMl: "രേഖകളും കോണുകളും", headings: ["Parallel Lines"] },
          { chapterNumber: 6, title: "The Triangle and its Properties", titleMl: "ത്രികോണം", headings: ["Pythagoras"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 7, title: "Congruence of Triangles", titleMl: "ത്രികോണ സമത്വം", headings: ["SSS", "SAS", "ASA", "RHS"] },
          { chapterNumber: 8, title: "Comparing Quantities", titleMl: "താരതമ്യം", headings: ["Ratio", "Percentage", "Profit Loss"] },
          { chapterNumber: 9, title: "Rational Numbers", titleMl: "ബീജഗണിത സംഖ്യകൾ", headings: ["Properties", "Operations"] },
          { chapterNumber: 10, title: "Practical Geometry", titleMl: "പ്രായോഗിക ജ്യാമിതി", headings: ["Construction"] },
          { chapterNumber: 11, title: "Perimeter and Area", titleMl: "ചുറ്റളവും വ്യാപ്തിയും", headings: ["Rectangle", "Triangle", "Circle"] },
          { chapterNumber: 12, title: "Algebraic Expressions", titleMl: "ബീജഗണിത വ്യഞ്ജകങ്ങൾ", headings: ["Terms", "Coefficients"] },
        ]},
      ]},
      { name: "Basic Science", nameMl: "ബേസിക് സയൻസ്", code: "BS", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "Nutrition in Plants", titleMl: "സസ്യങ്ങളിലെ പോഷണം", headings: ["Photosynthesis"] },
          { chapterNumber: 2, title: "Nutrition in Animals", titleMl: "മൃഗങ്ങളിലെ പോഷണം", headings: ["Digestive System"] },
          { chapterNumber: 3, title: "Fibre to Fabric", titleMl: "നാര് മുതൽ തുണിവരെ", headings: ["Silk", "Wool"] },
          { chapterNumber: 4, title: "Heat", titleMl: "ചൂട്", headings: ["Conduction", "Convection", "Radiation"] },
          { chapterNumber: 5, title: "Acids, Bases and Salts", titleMl: "ആസിഡുകൾ, ബേസുകൾ, ഉപ്പുകൾ", headings: ["Indicators", "Neutralization"] },
          { chapterNumber: 6, title: "Physical and Chemical Changes", titleMl: "ഭൗതികവും രാസ മാറ്റങ്ങൾ", headings: ["Reversible", "Irreversible"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 7, title: "Weather, Climate and Adaptations", titleMl: "കാലാവസ്ഥയും പൊരുത്തപ്പെടലും", headings: ["Weather", "Climate"] },
          { chapterNumber: 8, title: "Winds, Storms and Cyclones", titleMl: "കാറ്റും കൊടുങ്കാറ്റും", headings: ["Air Pressure", "Cyclone"] },
          { chapterNumber: 9, title: "Soil", titleMl: "മണ്ണ്", headings: ["Types", "Erosion"] },
          { chapterNumber: 10, title: "Respiration in Organisms", titleMl: "ശ്വസനം", headings: ["Breathing", "Aerobic"] },
          { chapterNumber: 11, title: "Transportation in Animals and Plants", titleMl: "ഗതാഗതം", headings: ["Circulatory System"] },
          { chapterNumber: 12, title: "Reproduction in Plants", titleMl: "പ്രജനനം", headings: ["Seeds", "Flowers"] },
        ]},
      ]},
      { name: "Social Science", nameMl: "സോഷ്യൽ സയൻസ്", code: "SS", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "Tracing Changes Through a Thousand Years", titleMl: "ആയിരം വർഷങ്ങൾ", headings: ["Medieval Period"] },
          { chapterNumber: 2, title: "New Kings and Kingdoms", titleMl: "പുതിയ രാജാക്കന്മാർ", headings: ["Cholas", "Palas"] },
          { chapterNumber: 3, title: "The Delhi Sultans", titleMl: "ഡൽഹി സുൽത്താന്മാർ", headings: ["Slave Dynasty", "Tughlaq"] },
          { chapterNumber: 4, title: "The Mughal Empire", titleMl: "മുഘൽ സാമ്രാജ്യം", headings: ["Babur", "Akbar"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 1, title: "Environment", titleMl: "പരിസരം", headings: ["Ecosystem"] },
          { chapterNumber: 2, title: "Inside Our Earth", titleMl: "ഭൂമിക്കുള്ളിൽ", headings: ["Layers", "Rocks"] },
          { chapterNumber: 3, title: "Our Changing Earth", titleMl: "മാറുന്ന ഭൂമി", headings: ["Plate Tectonics"] },
          { chapterNumber: 4, title: "Air", titleMl: "വായു", headings: ["Atmosphere"] },
          { chapterNumber: 5, title: "Water", titleMl: "ജലം", headings: ["Water Cycle"] },
        ]},
      ]},
    ],
  },
  // ─────── CLASS 8 ───────
  {
    number: 8, name: "Class 8", description: "Eighth Standard – Kerala SCERT (2025)",
    subjects: [
      { name: "English", nameMl: "ഇംഗ്ലീഷ്", code: "ENG", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "The Best Christmas Present in the World", titleMl: "ലോകത്തിലെ ഏറ്റവും നല്ല ക്രിസ്മസ് സമ്മാനം", headings: ["War", "Letters"] },
          { chapterNumber: 2, title: "The Tsunami", titleMl: "സുനാമി", headings: ["Natural Disaster", "Survival"] },
          { chapterNumber: 3, title: "Glimpses of the Past", titleMl: "കഴിഞ്ഞകാലത്തിന്റെ ഝലകങ്ങൾ", headings: ["Freedom Struggle"] },
          { chapterNumber: 4, title: "Bepin Choudhury's Lapse of Memory", titleMl: "ബേപ്പിൻ ചൗധരിയുടെ ഓർമ്മ നഷ്ടം", headings: ["Mystery"] },
          { chapterNumber: 5, title: "The Summit Within", titleMl: "ഉള്ളിലെ ശിഖരം", headings: ["Mountaineering"] },
          { chapterNumber: 6, title: "This Is Jody's Fawn", titleMl: "ജോഡിയുടെ മാൻ", headings: ["Compassion"] },
          { chapterNumber: 7, title: "A Visit to Cambridge", titleMl: "കേംബ്രിഡ്ജ് സന്ദർശനം", headings: ["Stephen Hawking"] },
          { chapterNumber: 8, title: "A Short Monsoon Diary", titleMl: "മഴക്കാല ഡയറി", headings: ["Ruskin Bond"] },
          { chapterNumber: 9, title: "The Great Stone Face – I & II", titleMl: "മഹാൻ കല്ലുമുഖം", headings: ["Hawthorne"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 1, title: "The Third Level", titleMl: "മൂന്നാമത്തെ നില", headings: ["Science Fiction"] },
          { chapterNumber: 2, title: "The Old Army Horse", titleMl: "പഴയ സൈനിക കുതിര", headings: ["Loyalty"] },
          { chapterNumber: 3, title: "Pack Rat", titleMl: "പാക്ക് റാറ്റ്", headings: ["Minimalism"] },
          { chapterNumber: 4, title: "The Treasure Within", titleMl: "ഉള്ളിലെ നിധി", headings: ["Education"] },
        ]},
      ]},
      { name: "Malayalam", nameMl: "മലയാളം", code: "ML", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "അമ്മ", titleMl: "അമ്മ", headings: ["കവിത"] },
          { chapterNumber: 2, title: "വെള്ളാന കളി", titleMl: "വെള്ളാന കളി", headings: ["കഥ"] },
          { chapterNumber: 3, title: "ജീവിതം", titleMl: "ജീവിതം", headings: ["നിരീക്ഷണം"] },
          { chapterNumber: 4, title: "കണ്ണാടി", titleMl: "കണ്ണാടി", headings: ["കവിത"] },
          { chapterNumber: 5, title: "കേരളപാണിനീയം", titleMl: "കേരളപാണിനീയം", headings: ["കേരള ചരിത്രം"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 1, title: "യാത്രക്കാരൻ", titleMl: "യാത്രക്കാരൻ", headings: ["കഥ"] },
          { chapterNumber: 2, title: "കവിതകൾ", titleMl: "കവിതകൾ", headings: ["ആധുനിക കവിതകൾ"] },
          { chapterNumber: 3, title: "ഭാഷാ പ്രയോഗം", titleMl: "ഭാഷാ പ്രയോഗം", headings: ["ലേഖനം"] },
          { chapterNumber: 4, title: "ചരിത്രം", titleMl: "ചരിത്രം", headings: ["കേരള ചരിത്രം"] },
        ]},
      ]},
      { name: "Mathematics", nameMl: "ഗണിതം", code: "MATH", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "Rational Numbers", titleMl: "ബീജഗണിത സംഖ്യകൾ", headings: ["Properties", "Operations"] },
          { chapterNumber: 2, title: "Linear Equations in One Variable", titleMl: "ഒരു ചരത്തിലെ രേഖീയ സമവാക്യം", headings: ["Solving"] },
          { chapterNumber: 3, title: "Understanding Quadrilaterals", titleMl: "ചതുർഭുജങ്ങൾ", headings: ["Types", "Properties"] },
          { chapterNumber: 4, title: "Practical Geometry", titleMl: "പ്രായോഗിക ജ്യാമിതി", headings: ["Construction"] },
          { chapterNumber: 5, title: "Data Handling", titleMl: "ഡാറ്റ കൈകാര്യം", headings: ["Pie Chart", "Probability"] },
          { chapterNumber: 6, title: "Squares and Square Roots", titleMl: "വർഗ്ഗങ്ങളും വർഗ്ഗമൂലവും", headings: ["Square Numbers", "Patterns"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 7, title: "Cubes and Cube Roots", titleMl: "ഘനങ്ങളും ഘനമൂലവും", headings: ["Cube Numbers"] },
          { chapterNumber: 8, title: "Comparing Quantities", titleMl: "താരതമ്യം", headings: ["Percentage", "Profit Loss", "Compound Interest"] },
          { chapterNumber: 9, title: "Algebraic Expressions and Identities", titleMl: "ബീജഗണിത വ്യഞ്ജകങ്ങൾ", headings: ["Like Terms", "Identities"] },
          { chapterNumber: 10, title: "Visualising Solid Shapes", titleMl: "ഘന രൂപങ്ങൾ", headings: ["3D Shapes", "Euler's Formula"] },
          { chapterNumber: 11, title: "Mensuration", titleMl: "അളക്കൽ", headings: ["Area", "Volume", "Surface Area"] },
          { chapterNumber: 12, title: "Exponents and Powers", titleMl: "ഘാതങ്ങൾ", headings: ["Laws", "Standard Form"] },
          { chapterNumber: 14, title: "Factorisation", titleMl: "ഘടക സംഖ്യാഗണന", headings: ["Common Factors"] },
          { chapterNumber: 15, title: "Introduction to Graphs", titleMl: "ഗ്രാഫുകൾ", headings: ["Bar Graph", "Coordinates"] },
          { chapterNumber: 16, title: "Playing with Numbers", titleMl: "സംഖ്യാ കളികൾ", headings: ["Divisibility"] },
        ]},
      ]},
      { name: "Basic Science", nameMl: "ബേസിക് സയൻസ്", code: "BS", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "Crop Production and Management", titleMl: "വിള ഉത്പാദനം", headings: ["Agriculture", "Irrigation"] },
          { chapterNumber: 2, title: "Microorganisms", titleMl: "സൂക്ഷ്മജീവികൾ", headings: ["Bacteria", "Virus", "Fungi"] },
          { chapterNumber: 3, title: "Synthetic Fibres and Plastics", titleMl: "സിന്തറ്റിക് നാരുകളും പ്ലാസ്റ്റിക്കും", headings: ["Types", "Environmental Impact"] },
          { chapterNumber: 4, title: "Materials: Metals and Non-Metals", titleMl: "ലോഹങ്ങളും അല്ലോഹങ്ങളും", headings: ["Properties", "Reactivity"] },
          { chapterNumber: 5, title: "Coal and Petroleum", titleMl: "കല്ലുക്കരിയും പെട്രോളിയവും", headings: ["Fossil Fuels"] },
          { chapterNumber: 7, title: "Conservation of Plants and Animals", titleMl: "സസ്യ-മൃഗ സംരക്ഷണം", headings: ["Biodiversity"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 9, title: "Reproduction in Animals", titleMl: "പ്രജനനം", headings: ["Sexual", "Asexual"] },
          { chapterNumber: 10, title: "Reaching the Age of Adolescence", titleMl: "കൗമാരപ്രായം", headings: ["Puberty", "Hormones"] },
          { chapterNumber: 11, title: "Force and Pressure", titleMl: "ബലവും മർദ്ദവും", headings: ["Types of Force", "Buoyancy"] },
          { chapterNumber: 12, title: "Friction", titleMl: "ഘർഷണം", headings: ["Types", "Factors"] },
          { chapterNumber: 13, title: "Sound", titleMl: "ശബ്ദം", headings: ["Production", "Echo"] },
          { chapterNumber: 14, title: "Chemical Effects of Electric Current", titleMl: "വൈദ്യുതധാര - രാസ പ്രഭാവം", headings: ["Electroplating"] },
          { chapterNumber: 15, title: "Some Natural Phenomena", titleMl: "പ്രകൃതിദത്ത പ്രതിഭാസങ്ങൾ", headings: ["Lightning", "Earthquake"] },
          { chapterNumber: 16, title: "Light", titleMl: "പ്രകാശം", headings: ["Reflection", "Mirrors"] },
        ]},
      ]},
      { name: "Social Science", nameMl: "സോഷ്യൽ സയൻസ്", code: "SS", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "How, When and Where", titleMl: "എങ്ങനെ, എപ്പോൾ, എവിടെ", headings: ["Colonial Records"] },
          { chapterNumber: 2, title: "From Trade to Territory", titleMl: "വ്യാപാരത്തിൽ നിന്ന് പ്രദേശത്തിലേക്ക്", headings: ["East India Company"] },
          { chapterNumber: 3, title: "Ruling the Countryside", titleMl: "ഗ്രാമങ്ങൾ ഭരിക്കുന്നു", headings: ["Permanent Settlement"] },
          { chapterNumber: 4, title: "Tribals, Dikus and the Vision of a Golden Age", titleMl: "വനവാസികൾ, ദികുകൾ", headings: ["Tribal Society"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 1, title: "Resources and Development", titleMl: "വിഭവങ്ങളും വികസനവും", headings: ["Conservation"] },
          { chapterNumber: 2, title: "Land, Soil, Water, Natural Vegetation and Wildlife", titleMl: "ഭൂമി, മണ്ണ്, ജലം", headings: ["Soil Types"] },
          { chapterNumber: 3, title: "Mineral and Power Resources", titleMl: "ധാതുക്കളും ഊർജ്ജവും", headings: ["Minerals", "Energy"] },
          { chapterNumber: 4, title: "Agriculture", titleMl: "കൃഷി", headings: ["Farming", "Green Revolution"] },
          { chapterNumber: 5, title: "Industries", titleMl: "വ്യവസായങ്ങൾ", headings: ["Types", "Location"] },
        ]},
      ]},
    ],
  },
  // ─────── CLASS 9 ───────
  {
    number: 9, name: "Class 9", description: "Ninth Standard – Kerala SCERT (2024-25)",
    subjects: [
      { name: "English", nameMl: "ഇംഗ്ലീഷ്", code: "ENG", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "The Fun They Had", titleMl: "അവർ ആസ്വദിച്ച രസം", headings: ["Asimov", "Education"] },
          { chapterNumber: 2, title: "The Sound of Music", titleMl: "സംഗീതത്തിന്റെ ശബ്ദം", headings: ["Evelyn Glennie", "Bismillah Khan"] },
          { chapterNumber: 3, title: "The Little Girl", titleMl: "ചെറിയ പെൺകുട്ടി", headings: ["Katherine Mansfield"] },
          { chapterNumber: 4, title: "A Truly Beautiful Mind", titleMl: "സുന്ദരമായ മനസ്സ്", headings: ["Albert Einstein"] },
          { chapterNumber: 5, title: "The Snake and the Mirror", titleMl: "പാമ്പും കണ്ണാടിയും", headings: ["Basheer", "Humour"] },
          { chapterNumber: 6, title: "My Childhood", titleMl: "എന്റെ ബാല്യകാലം", headings: ["A.P.J. Abdul Kalam"] },
          { chapterNumber: 7, title: "Packing", titleMl: "പാക്കിംഗ്", headings: ["Jerome K. Jerome"] },
          { chapterNumber: 8, title: "Reach for the Top", titleMl: "ഉച്ചസ്ഥായിയിലേക്ക്", headings: ["Santosh Yadav", "Mary Kom"] },
          { chapterNumber: 9, title: "The Bond of Love", titleMl: "സ്നേഹബന്ധം", headings: ["Kenneth Anderson"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 1, title: "The Happy Prince", titleMl: "സന്തോഷമുള്ള രാജാവ്", headings: ["Oscar Wilde"] },
          { chapterNumber: 2, title: "Weathering the Storm in Ersama", titleMl: "എർസാമയിൽ കൊടുങ്കാറ്റ്", headings: ["Survival"] },
          { chapterNumber: 3, title: "The Story of My Life", titleMl: "എന്റെ ജീവിതക്കഥ", headings: ["Helen Keller"] },
          { chapterNumber: 4, title: "A Legend of the Northland", titleMl: "വടക്കൻ നാടിന്റെ ഐതിഹ്യം", headings: ["Phoebe Cary"] },
          { chapterNumber: 5, title: "No Men Are Foreign", titleMl: "യാതൊരു മനുഷ്യനും വിദേശികളല്ല", headings: ["Brotherhood"] },
          { chapterNumber: 6, title: "On Killing a Tree", titleMl: "ഒരു മരം കൊല്ലുന്നത്", headings: ["Environment"] },
          { chapterNumber: 7, title: "A Slumber Did My Spirit Seal", titleMl: "ഒരു മയക്കം", headings: ["Wordsworth"] },
          { chapterNumber: 8, title: "The Lake Isle of Innisfree", titleMl: "ഇന്നിസ്ഫ്രീ ദ്വീപ്", headings: ["W.B. Yeats"] },
        ]},
      ]},
      { name: "Malayalam", nameMl: "മലയാളം", code: "ML", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "പ്രകൃതിയോട് സംവദിക്കുമ്പോൾ", titleMl: "പ്രകൃതിയോട് സംവദിക്കുമ്പോൾ", headings: ["കവിത"] },
          { chapterNumber: 2, title: "ഇരുളും വെളിച്ചവും", titleMl: "ഇരുളും വെളിച്ചവും", headings: ["കവിത"] },
          { chapterNumber: 3, title: "ശാപമോക്ഷം", titleMl: "ശാപമോക്ഷം", headings: ["VS"] },
          { chapterNumber: 4, title: "നാരീമണി", titleMl: "നാരീമണി", headings: ["കവിത"] },
          { chapterNumber: 5, title: "മുല്ല", titleMl: "മുല്ല", headings: ["നാടകം"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 1, title: "കഥകൾ", titleMl: "കഥകൾ", headings: ["ചെറുകഥകൾ"] },
          { chapterNumber: 2, title: "ലേഖനങ്ങൾ", titleMl: "ലേഖനങ്ങൾ", headings: ["ശാസ്ത്രലേഖനം"] },
          { chapterNumber: 3, title: "കവിതാ സമാഹാരം", titleMl: "കവിതാ സമാഹാരം", headings: ["കവിതകൾ"] },
          { chapterNumber: 4, title: "ഭാഷാ പ്രയോഗം", titleMl: "ഭാഷാ പ്രയോഗം", headings: ["ലഘുരചനകൾ"] },
        ]},
      ]},
      { name: "Mathematics", nameMl: "ഗണിതം", code: "MATH", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "Number Systems", titleMl: "സംഖ്യാ പദ്ധതികൾ", headings: ["Real Numbers", "Irrational"] },
          { chapterNumber: 2, title: "Polynomials", titleMl: "ബഹുപദങ്ങൾ", headings: ["Zeroes", "Factor Theorem"] },
          { chapterNumber: 3, title: "Coordinate Geometry", titleMl: "കോ-ഓർഡിനേറ്റ് ജ്യാമിതി", headings: ["Cartesian Plane"] },
          { chapterNumber: 4, title: "Linear Equations in Two Variables", titleMl: "രണ്ട് ചരങ്ങളിലെ രേഖീയ സമവാക്യം", headings: ["Solutions", "Graphing"] },
          { chapterNumber: 5, title: "Introduction to Euclid's Geometry", titleMl: "യൂക്ലിഡ് ജ്യാമിതി", headings: ["Axioms", "Postulates"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 6, title: "Lines and Angles", titleMl: "രേഖകളും കോണുകളും", headings: ["Parallel Lines"] },
          { chapterNumber: 7, title: "Triangles", titleMl: "ത്രികോണങ്ങൾ", headings: ["Congruence", "Inequalities"] },
          { chapterNumber: 8, title: "Quadrilaterals", titleMl: "ചതുർഭുജങ്ങൾ", headings: ["Parallelogram", "Mid-point Theorem"] },
          { chapterNumber: 9, title: "Areas of Parallelograms and Triangles", titleMl: "വ്യാപ്തി", headings: ["Area Formulas"] },
          { chapterNumber: 10, title: "Circles", titleMl: "വൃത്തങ്ങൾ", headings: ["Chord", "Arc"] },
          { chapterNumber: 12, title: "Heron's Formula", titleMl: "ഹീറോയുടെ സൂത്രവാക്യം", headings: ["Semiperimeter"] },
          { chapterNumber: 13, title: "Surface Areas and Volumes", titleMl: "ഉപരിതല വ്യാപ്തി", headings: ["Cuboid", "Cylinder", "Cone"] },
          { chapterNumber: 14, title: "Statistics", titleMl: "സ്ഥിതിശാസ്ത്രം", headings: ["Mean", "Median", "Mode"] },
          { chapterNumber: 15, title: "Probability", titleMl: "സാധ്യത", headings: ["Events", "Formula"] },
        ]},
      ]},
      { name: "Physics", nameMl: "ഭൗതികശാസ്ത്രം", code: "PHY", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "Motion", titleMl: "ചലനം", headings: ["Velocity", "Acceleration", "Graphs"] },
          { chapterNumber: 2, title: "Force and Laws of Motion", titleMl: "ബലവും ചലന നിയമങ്ങളും", headings: ["Newton's Laws", "Inertia"] },
          { chapterNumber: 3, title: "Gravitation", titleMl: "ഗുരുത്വാകർഷണം", headings: ["Free Fall", "Weight", "Buoyancy"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 4, title: "Work and Energy", titleMl: "ജോലിയും ഊർജ്ജവും", headings: ["Power", "KE", "PE"] },
          { chapterNumber: 5, title: "Sound", titleMl: "ശബ്ദം", headings: ["Wave Propagation", "Echo"] },
        ]},
      ]},
      { name: "Chemistry", nameMl: "രസതന്ത്രം", code: "CHE", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "Matter in Our Surroundings", titleMl: "പദാർത്ഥം", headings: ["States", "Evaporation"] },
          { chapterNumber: 2, title: "Is Matter Around Us Pure?", titleMl: "ശുദ്ധം എന്ന്?", headings: ["Mixtures", "Separation"] },
          { chapterNumber: 3, title: "Atoms and Molecules", titleMl: "ആറ്റങ്ങളും അണുക്കളും", headings: ["Dalton", "Mole Concept"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 4, title: "Structure of the Atom", titleMl: "ആറ്റിന്റെ ഘടന", headings: ["Bohr's Model"] },
          { chapterNumber: 5, title: "The Fundamental Unit of Life", titleMl: "ജീവന്റെ അടിസ്ഥാന യൂണിറ്റ്", headings: ["Cell", "Organelles"] },
          { chapterNumber: 6, title: "Tissues", titleMl: "കലകൾ", headings: ["Plant", "Animal"] },
        ]},
      ]},
      { name: "Biology", nameMl: "ജീവശാസ്ത്രം", code: "BIO", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 7, title: "Diversity in Living Organisms", titleMl: "ജീവികളിലെ വൈവിധ്യം", headings: ["Classification", "Kingdoms"] },
          { chapterNumber: 8, title: "Why Do We Fall Ill?", titleMl: "അസുഖം", headings: ["Diseases", "Immunity"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 1, title: "Natural Resources", titleMl: "പ്രകൃതിവിഭവങ്ങൾ", headings: ["Forest", "Water", "Air"] },
        ]},
      ]},
      { name: "Social Science", nameMl: "സോഷ്യൽ സയൻസ്", code: "SS", sourceUrl: S, parts: [
        { partNumber: 1, title: "History", titleMl: "ചരിത്രം", chapters: [
          { chapterNumber: 1, title: "The French Revolution", titleMl: "ഫ്രഞ്ച് വിപ്ലവം", headings: ["Causes", "Napoleon"] },
          { chapterNumber: 2, title: "Socialism in Europe and the Russian Revolution", titleMl: "സോഷ്യലിസവും റഷ്യൻ വിപ്ലവവും", headings: ["Marx", "Lenin"] },
          { chapterNumber: 3, title: "Nazism and the Rise of Hitler", titleMl: "നാസിസവും ഹിറ്റ്ലറും", headings: ["Holocaust", "WWII"] },
          { chapterNumber: 4, title: "Forest Society and Colonialism", titleMl: "വന സമൂഹവും ഉപനിവേശവും", headings: ["Deforestation"] },
          { chapterNumber: 5, title: "Pastoralists in the Modern World", titleMl: "ആധുനിക ലോകത്തെ ഇടയ്ക്കിടയ്ക്ക് കൂടുമാറുന്നവർ", headings: ["Nomadic Life"] },
        ]},
        { partNumber: 2, title: "Geography", titleMl: "ഭൂമിശാസ്ത്രം", chapters: [
          { chapterNumber: 1, title: "India - Size and Location", titleMl: "ഇന്ത്യ", headings: ["Location", "Borders"] },
          { chapterNumber: 2, title: "Physical Features of India", titleMl: "ഭൌതിക സവിശേഷതകൾ", headings: ["Himalayas", "Plateau"] },
          { chapterNumber: 3, title: "Drainage", titleMl: "ജലനിർഗ്ഗമനം", headings: ["Rivers", "Basins"] },
          { chapterNumber: 4, title: "Climate", titleMl: "കാലാവസ്ഥ", headings: ["Monsoon"] },
          { chapterNumber: 5, title: "Natural Vegetation and Wild Life", titleMl: "സസ്യജാലങ്ങളും വന്യജീവികളും", headings: ["Forest Types"] },
          { chapterNumber: 6, title: "Population", titleMl: "ജനസംഖ്യ", headings: ["Growth", "Density"] },
        ]},
        { partNumber: 3, title: "Economics", titleMl: "സമ്പദ്ശാസ്ത്രം", chapters: [
          { chapterNumber: 1, title: "The Story of Village Palampur", titleMl: "പാലമ്പൂർ ഗ്രാമം", headings: ["Village Economy"] },
          { chapterNumber: 2, title: "People as Resource", titleMl: "ജനങ്ങൾ ഒരു വിഭവം", headings: ["Human Capital"] },
          { chapterNumber: 3, title: "Poverty as a Challenge", titleMl: "ദാരിദ്ര്യം", headings: ["Poverty Line"] },
        ]},
        { partNumber: 4, title: "Political Science", titleMl: "രാഷ്ട്രശാസ്ത്രം", chapters: [
          { chapterNumber: 1, title: "Democracy in the Contemporary World", titleMl: "ജനാധിപത്യം", headings: ["Features"] },
          { chapterNumber: 2, title: "Constitutional Design", titleMl: "ഭരണഘടനാ രൂപകല്പന", headings: ["Ambedkar"] },
          { chapterNumber: 3, title: "Electoral Politics", titleMl: "തിരഞ്ഞെടുപ്പ് രാഷ്ട്രീയം", headings: ["Elections", "ECI"] },
          { chapterNumber: 4, title: "Working of Institutions", titleMl: "സ്ഥാപനങ്ങൾ", headings: ["Parliament", "Judiciary"] },
          { chapterNumber: 5, title: "Democratic Rights", titleMl: "ജനാധിപത്യ അവകാശങ്ങൾ", headings: ["Fundamental Rights"] },
        ]},
      ]},
    ],
  },
  // ─────── CLASS 10 (NEW 2025 SCERT) ───────
  {
    number: 10, name: "Class 10", description: "Tenth Standard – Kerala SCERT SSLC (2025 Revised)",
    subjects: [
      // ══════ ENGLISH (NEW 2025) ══════
      { name: "English", nameMl: "ഇംഗ്ലീഷ്", code: "ENG", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "A Very Old Man with Enormous Wings", titleMl: "വലിയ ചിറകുകളുള്ള ഒരു പ്രായം ചെന്ന മനുഷ്യൻ", headings: ["Gabriel García Márquez", "Magical Realism", "Unit I: Trials and Triumphs"] },
          { chapterNumber: 2, title: "In the Attic", titleMl: "അറ്റിക്കിൽ", headings: ["Memory", "Nostalgia", "Unit I: Trials and Triumphs"] },
          { chapterNumber: 3, title: "\"Friends, Romans, Countrymen...\"", titleMl: "\"സുഹൃത്തുക്കളേ, റോമാക്കാരേ, നാട്ടുകാരേ...\"", headings: ["Shakespeare", "Julius Caesar", "Unit I: Trials and Triumphs"] },
          { chapterNumber: 4, title: "Breaking Barriers, I Will Fly", titleMl: "തടസ്സങ്ങൾ ഭേദിച്ച്, ഞാൻ പറക്കും", headings: ["Kiran Bedi", "Determination", "Unit II: Paths to Progress"] },
          { chapterNumber: 5, title: "A Phoenix Rises", titleMl: "ഫീനിക്സ് ഉയരുന്നു", headings: ["Resilience", "Success", "Unit II: Paths to Progress"] },
          { chapterNumber: 6, title: "The Seedling", titleMl: "നാമ്പ്", headings: ["Poetry", "Growth", "Unit II: Paths to Progress"] },
          { chapterNumber: 7, title: "Another Day in Paradise", titleMl: "സ്വർഗ്ഗത്തിലെ മറ്റൊരു ദിവസം", headings: ["Social Reality", "Unit III: The Trumpets of Change"] },
          { chapterNumber: 8, title: "War", titleMl: "യുദ്ധം", headings: ["Conflict", "Humanity", "Unit III: The Trumpets of Change"] },
          { chapterNumber: 9, title: "A Piece of String", titleMl: "ഒരു കയർ", headings: ["Maupassant", "Trust", "Unit III: The Trumpets of Change"] },
          { chapterNumber: 10, title: "Shākuntalam", titleMl: "ശാകുന്തലം", headings: ["Kalidasa", "Sanskrit Drama", "Unit IV: Woodland Whispers"] },
          { chapterNumber: 11, title: "Trills and Thrills: Birdwatching in India", titleMl: "പക്ഷിനിരീക്ഷണം", headings: ["Birdwatching", "Nature", "Unit IV: Woodland Whispers"] },
          { chapterNumber: 12, title: "The Wild Swans at Coole", titleMl: "കൂളയിലെ കാട്ടുഹംസുകൾ", headings: ["W.B. Yeats", "Poetry", "Unit IV: Woodland Whispers"] },
          { chapterNumber: 13, title: "Beloved Boles", titleMl: "പ്രിയപ്പെട്ട ബോൾസ്", headings: ["Identity", "Poetry", "Unit V: Songs of the Self"] },
          { chapterNumber: 14, title: "Préférence Nationale", titleMl: "പ്രെഫെറൻസ് നാഷനാലിറ്റി", headings: ["Language", "Identity", "Unit V: Songs of the Self"] },
          { chapterNumber: 15, title: "Mirror", titleMl: "കണ്ണാടി", headings: ["Sylvia Plath", "Self-reflection", "Unit V: Songs of the Self"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 1, title: "The Scholarship Jacket", titleMl: "സ്കോളർഷിപ്പ് ജാക്കറ്റ്", headings: ["Justice", "Education"] },
          { chapterNumber: 2, title: "Poetry (Selected)", titleMl: "കവിതകൾ", headings: ["Selected Poems"] },
          { chapterNumber: 3, title: "The Never Never Nest", titleMl: "ഒരിക്കലും ഇല്ലാത്ത കൂട്", headings: ["Humour", "Finance"] },
          { chapterNumber: 4, title: "Vanka", titleMl: "വാങ്ക", headings: ["Chekhov", "Childhood"] },
          { chapterNumber: 5, title: "Mother to Son", titleMl: "അമ്മയുടെ മകന്", headings: ["Langston Hughes", "Perseverance"] },
          { chapterNumber: 6, title: "The Castaway", titleMl: "കടലെറിഞ്ഞവൻ", headings: ["Survival", "Adventure"] },
        ]},
      ]},
      // ══════ MALAYALAM (Kerala Padavali + Adisthana Padavali) ══════
      { name: "Malayalam", nameMl: "മലയാളം", code: "ML", sourceUrl: S, parts: [
        { partNumber: 1, title: "Kerala Padavali", titleMl: "കേരള പദാവലി", chapters: [
          { chapterNumber: 1, title: "ഖദീജ", titleMl: "ഖദീജ", headings: ["കവിത"] },
          { chapterNumber: 2, title: "കടൽ", titleMl: "കടൽ", headings: ["കവിത"] },
          { chapterNumber: 3, title: "സ്വാതന്ത്ര്യം", titleMl: "സ്വാതന്ത്ര്യം", headings: ["കവിത"] },
          { chapterNumber: 4, title: "ഓർമ്മയുടെ തീരത്ത്", titleMl: "ഓർമ്മയുടെ തീരത്ത്", headings: ["കഥ"] },
          { chapterNumber: 5, title: "വിവേകാനന്ദൻ", titleMl: "വിവേകാനന്ദൻ", headings: ["ജീവചരിത്രം"] },
          { chapterNumber: 6, title: "തോട്ടുവാരം", titleMl: "തോട്ടുവാരം", headings: ["കവിത"] },
        ]},
        { partNumber: 2, title: "Adisthana Padavali", titleMl: "അടിസ്ഥാന പദാവലി", chapters: [
          { chapterNumber: 1, title: "കഥകൾ", titleMl: "കഥകൾ", headings: ["നവോത്ഥാന കഥകൾ"] },
          { chapterNumber: 2, title: "ലേഖനങ്ങൾ", titleMl: "ലേഖനങ്ങൾ", headings: ["ശാസ്ത്രലേഖനം"] },
          { chapterNumber: 3, title: "കവിതാ സമാഹാരം", titleMl: "കവിതാ സമാഹാരം", headings: ["പുതുകവിത", "ചങ്ങമ്പുഴ"] },
          { chapterNumber: 4, title: "നാടകം", titleMl: "നാടകം", headings: ["നാടകം"] },
          { chapterNumber: 5, title: "ഭാഷാ പ്രയോഗം", titleMl: "ഭാഷാ പ്രയോഗം", headings: ["വ്യാകരണം"] },
        ]},
      ]},
      // ══════ MATHS (NEW 2025 SCERT) ══════
      { name: "Mathematics", nameMl: "ഗണിതം", code: "MATH", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "Arithmetic Sequences", titleMl: "സാമാന്തര ശ്രേണികൾ", headings: ["Common Difference", "nth Term", "Sum"] },
          { chapterNumber: 2, title: "Circles", titleMl: "വൃത്തങ്ങൾ", headings: ["Chord", "Tangent", "Angle Properties"] },
          { chapterNumber: 3, title: "Algebra", titleMl: "ബീജഗണിതം", headings: ["Polynomials", "Equations", "Identities"] },
          { chapterNumber: 4, title: "Mathematics of Chance", titleMl: "സാധ്യതയുടെ ഗണിതം", headings: ["Probability", "Events", "Experiments"] },
          { chapterNumber: 5, title: "Trigonometry", titleMl: "ത്രികോണമിതി", headings: ["Ratios", "Values", "Identities"] },
          { chapterNumber: 6, title: "Coordinates", titleMl: "കോ-ഓർഡിനേറ്റുകൾ", headings: ["Distance", "Section Formula", "Area"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 7, title: "Tangents", titleMl: "സ്പർശരേഖകൾ", headings: ["Tangent Properties", "Length of Tangent"] },
          { chapterNumber: 8, title: "Polynomials", titleMl: "ബഹുപദങ്ങൾ", headings: ["Zeroes", "Division Algorithm"] },
          { chapterNumber: 9, title: "Geometry and Algebra", titleMl: "ജ്യാമിതിയും ബീജഗണിതവും", headings: ["Similarity", "Construction"] },
          { chapterNumber: 10, title: "Statistics", titleMl: "സ്ഥിതിശാസ്ത്രം", headings: ["Mean", "Median", "Mode", "Ogive"] },
        ]},
      ]},
      // ══════ PHYSICS (NEW 2025) ══════
      { name: "Physics", nameMl: "ഭൗതികശാസ്ത്രം", code: "PHY", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "Effects of Electric Current", titleMl: "വൈദ്യുതധാരയുടെ പ്രഭാവങ്ങൾ", headings: ["Ohm's Law", "Resistance", "Series", "Parallel", "Heating Effect"] },
          { chapterNumber: 2, title: "Magnetic Effect of Electric Current", titleMl: "വൈദ്യുതധാരയുടെ ചുംബക പ്രഭാവം", headings: ["Magnetic Field", "Solenoid", "Right Hand Thumb Rule"] },
          { chapterNumber: 3, title: "Electromagnetic Induction", titleMl: "വൈദ്യുതകാന്തീയ പ്രേരണം", headings: ["Faraday's Law", "Lenz's Law", "Generator"] },
          { chapterNumber: 4, title: "Reflection of Light", titleMl: "പ്രകാശത്തിന്റെ പ്രതിബിംബം", headings: ["Laws of Reflection", "Mirrors", "Image Formation"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 5, title: "Refraction of Light", titleMl: "പ്രകാശത്തിന്റെ അപവർത്തനം", headings: ["Snell's Law", "Lens", "Refractive Index"] },
          { chapterNumber: 6, title: "Vision and the World of Colours", titleMl: "കാഴ്ചയും വർണ്ണലോകവും", headings: ["Eye Structure", "Defects", "Prism", "Dispersion", "Scattering"] },
          { chapterNumber: 7, title: "Energy Management", titleMl: "ഊർജ്ജ മാനേജ്മെന്റ്", headings: ["Energy Sources", "Renewable", "Conservation"] },
        ]},
      ]},
      // ══════ CHEMISTRY (NEW 2025) ══════
      { name: "Chemistry", nameMl: "രസതന്ത്രം", code: "CHE", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "Periodic Table and Electronic Configuration", titleMl: "ആവർത്തന പട്ടികയും ഇലക്ട്രോണിക് ക്രമീകരണവും", headings: ["Groups", "Periods", "Valency", "Electronic Configuration"] },
          { chapterNumber: 2, title: "Gas Laws and Mole Concepts", titleMl: "വാതക നിയമങ്ങളും മോൾ സംഖ്യകളും", headings: ["Boyle's Law", "Charles's Law", "Mole", "Avogadro"] },
          { chapterNumber: 3, title: "Reactivity Series and Electrochemistry", titleMl: "പ്രതിപ്രവർത്തക ശ്രേണിയും ഇലക്ട്രോ രസതന്ത്രവും", headings: ["Metal Reactivity", "Galvanic Cell", "Electroplating"] },
          { chapterNumber: 4, title: "Production of Metals", titleMl: "ലോഹങ്ങളുടെ ഉത്പാദനം", headings: ["Extraction", "Smelting", "Refining"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 5, title: "Compounds of Non-metals", titleMl: "അല്ലോഹങ്ങളുടെ സംയോജനങ്ങൾ", headings: ["Acids", "Bases", "Salts", "pH"] },
          { chapterNumber: 6, title: "Nomenclature of Organic Compounds and Isomerism", titleMl: "ഓർഗാനിക് സംയോജനങ്ങളുടെ നാമകരണം", headings: ["IUPAC", "Hydrocarbons", "Functional Groups", "Isomers"] },
          { chapterNumber: 7, title: "Chemical Reactions of Organic Compounds", titleMl: "ഓർഗാനിക് സംയോജനങ്ങളുടെ രാസ പ്രതികരണങ്ങൾ", headings: ["Substitution", "Addition", "Combustion", "Soaps"] },
        ]},
      ]},
      // ══════ BIOLOGY (NEW 2025) ══════
      { name: "Biology", nameMl: "ജീവശാസ്ത്രം", code: "BIO", sourceUrl: S, parts: [
        { partNumber: 1, title: "Part 1", titleMl: "ഭാഗം 1", chapters: [
          { chapterNumber: 1, title: "Sensations and Responses", titleMl: "ഉത്തേജനങ്ങളും പ്രതികരണങ്ങളും", headings: ["Nervous System", "Reflex Action", "Brain", "Senses"] },
          { chapterNumber: 2, title: "Windows of Knowledge", titleMl: "അറിവിന്റെ ജാലകങ്ങൾ", headings: ["Eye", "Ear", "Sense Organs"] },
          { chapterNumber: 3, title: "Chemical Message of Homeostasis", titleMl: "സമത്വസ്ഥിതിയുടെ രാസ സന്ദേശം", headings: ["Hormones", "Endocrine System", "Thyroid", "Adrenaline"] },
          { chapterNumber: 4, title: "Keeping Diseases Away", titleMl: "രോഗങ്ങളെ അകറ്റി നിർത്തുന്നു", headings: ["Immunity", "Vaccination", "Diseases", "AIDS", "Hygiene"] },
        ]},
        { partNumber: 2, title: "Part 2", titleMl: "ഭാഗം 2", chapters: [
          { chapterNumber: 5, title: "Soldiers of Defense", titleMl: "പ്രതിരോധ സൈനികർ", headings: ["WBC", "Immune System", "Antibodies"] },
          { chapterNumber: 6, title: "Unravelling Genetic Mysteries", titleMl: "ജനിതക രഹസ്യങ്ങൾ തുറന്നിടുന്നു", headings: ["DNA", "Chromosomes", "Genes", "Mendel"] },
          { chapterNumber: 7, title: "Genetics of the Future", titleMl: "ഭാവിയുടെ ജനിതകശാസ്ത്രം", headings: ["Biotechnology", "DNA Fingerprinting", "Cloning", "GM Crops"] },
          { chapterNumber: 8, title: "The Paths Traversed by Life", titleMl: "ജീവൻ താണ്ടിയ വഴികൾ", headings: ["Evolution", "Natural Selection", "Fossils", "Speciation"] },
        ]},
      ]},
      // ══════ SOCIAL SCIENCE (NEW 2025) ══════
      { name: "Social Science", nameMl: "സോഷ്യൽ സയൻസ്", code: "SS", sourceUrl: S, parts: [
        { partNumber: 1, title: "Social Science 1 – History & Political Science", titleMl: "സോഷ്യൽ സയൻസ് 1", chapters: [
          { chapterNumber: 1, title: "Revolutions that Influenced the World", titleMl: "ലോകത്തെ സ്വാധീനിച്ച വിപ്ലവങ്ങൾ", headings: ["French Revolution", "Russian Revolution"] },
          { chapterNumber: 2, title: "World in the Twentieth Century", titleMl: "ഇരുപതാം നൂറ്റാണ്ടിലെ ലോകം", headings: ["WWI", "WWII", "Cold War"] },
          { chapterNumber: 3, title: "Public Administration", titleMl: "പൊതുഭരണം", headings: ["Administration", "Governance"] },
          { chapterNumber: 4, title: "British Exploitation and Resistance", titleMl: "ബ്രിട്ടീഷ് ചൂഷണവും പ്രതിരോധവും", headings: ["Indigo Revolt", "Quit India"] },
          { chapterNumber: 5, title: "Culture and Nationalism", titleMl: "സംസ്കാരവും ദേശീയവാദവും", headings: ["Renaissance", "Reform Movements"] },
          { chapterNumber: 6, title: "Struggle and Freedom", titleMl: "സമരവും സ്വാതന്ത്ര്യവും", headings: ["Freedom Movement", "Independence"] },
          { chapterNumber: 7, title: "India after Independence", titleMl: "സ്വാതന്ത്ര്യാനന്തര ഇന്ത്യ", headings: ["Nehru", "Linguistic States", "Reforms"] },
          { chapterNumber: 8, title: "Kerala towards Modernity", titleMl: "ആധുനികതയിലേക്കുള്ള കേരളം", headings: ["Social Reform", "Renaissance", "Vikram Sarabhai"] },
          { chapterNumber: 9, title: "The State and Political Science", titleMl: "രാജ്യവും രാഷ്ട്രശാസ്ത്രവും", headings: ["State", "Sovereignty", "Democracy"] },
          { chapterNumber: 10, title: "Civic Consciousness", titleMl: "പൗരബോധം", headings: ["Rights", "Duties", "Constitution"] },
          { chapterNumber: 11, title: "Sociology: What? Why?", titleMl: "സോഷ്യോളജി: എന്ത്? എന്തിന്?", headings: ["Society", "Social Structure", "Culture"] },
        ]},
        { partNumber: 2, title: "Social Science 2 – Geography & Economics", titleMl: "സോഷ്യൽ സയൻസ് 2", chapters: [
          { chapterNumber: 1, title: "Seasons and Time", titleMl: "ഋതുക്കളും സമയവും", headings: ["Climate", "Seasons", "Time Zones"] },
          { chapterNumber: 2, title: "In Search of the Source of the Wind", titleMl: "കാറ്റിന്റെ ഉറവിടം തേടി", headings: ["Atmosphere", "Pressure", "Wind"] },
          { chapterNumber: 3, title: "Human Resources Development in India", titleMl: "ഇന്ത്യയിലെ മനുഷ്യവിഭവ വികസനം", headings: ["Population", "Census", "Demography"] },
          { chapterNumber: 4, title: "Landscape Analysis through Maps", titleMl: "ഭൂപടങ്ങളിലൂടെ ഭൂപ്രകൃതി വിശകലനം", headings: ["Topographic Maps", "Scale", "Contour"] },
          { chapterNumber: 5, title: "Public Expenditure and Public Revenue", titleMl: "പൊതു ചെലവും പൊതു വരുമാനവും", headings: ["Budget", "Taxation", "Fiscal Policy"] },
          { chapterNumber: 6, title: "Eyes in the Sky and Data Analysis", titleMl: "ആകാശത്തെ കണ്ണുകളും ഡാറ്റാ വിശകലനവും", headings: ["Remote Sensing", "GIS", "GPS"] },
          { chapterNumber: 7, title: "India: The Land of Diversities", titleMl: "ഇന്ത്യ: വൈവിധ്യങ്ങളുടെ നാട്", headings: ["Physical Divisions", "Cultural Diversity"] },
          { chapterNumber: 8, title: "Resource Wealth of India", titleMl: "ഇന്ത്യയുടെ വിഭവ സമ്പത്ത്", headings: ["Minerals", "Energy", "Water", "Forest"] },
          { chapterNumber: 9, title: "Financial Institutions and Services", titleMl: "ധനകാര്യ സ്ഥാപനങ്ങളും സേവനങ്ങളും", headings: ["Banks", "RBI", "Insurance", "Stock Market"] },
          { chapterNumber: 10, title: "Consumer: Satisfaction and Protection", titleMl: "ഉപഭോക്താവ്: സംതൃപ്തിയും സംരക്ഷണവും", headings: ["Consumer Rights", "COPRA", "Consumer Courts"] },
        ]},
      ]},
    ],
  },
];

export const markSchemes9_10 = [
  { classNumber: 9, subjectCode: "SS", totalMarks: 80, duration: 150 },
  { classNumber: 9, subjectCode: "MATH", totalMarks: 80, duration: 150 },
  { classNumber: 9, subjectCode: "ENG", totalMarks: 80, duration: 150 },
  { classNumber: 9, subjectCode: "PHY", totalMarks: 80, duration: 150 },
  { classNumber: 9, subjectCode: "CHE", totalMarks: 80, duration: 150 },
  { classNumber: 9, subjectCode: "BIO", totalMarks: 80, duration: 150 },
  { classNumber: 10, subjectCode: "SS", totalMarks: 80, duration: 150 },
  { classNumber: 10, subjectCode: "MATH", totalMarks: 80, duration: 150 },
  { classNumber: 10, subjectCode: "ENG", totalMarks: 80, duration: 150 },
  { classNumber: 10, subjectCode: "PHY", totalMarks: 80, duration: 150 },
  { classNumber: 10, subjectCode: "CHE", totalMarks: 80, duration: 150 },
  { classNumber: 10, subjectCode: "BIO", totalMarks: 80, duration: 150 },
  { classNumber: 10, subjectCode: "ML", totalMarks: 80, duration: 150 },
];

export const defaultMarkSchemes: Record<number, { totalMarks: number; duration: number }> = {
  1: { totalMarks: 50, duration: 60 },
  2: { totalMarks: 50, duration: 60 },
  3: { totalMarks: 50, duration: 90 },
  4: { totalMarks: 60, duration: 90 },
  5: { totalMarks: 60, duration: 90 },
  6: { totalMarks: 60, duration: 90 },
  7: { totalMarks: 70, duration: 120 },
  8: { totalMarks: 70, duration: 120 },
};

// ═══════════════════════════════════════════════
// CLASSES 1-5 (SCERT Kerala Revised 2024-25)
// ═══════════════════════════════════════════════

// Inject Classes 1-5 into keralaBoardData
const classes1to5: ClassData[] = [
  {
    number: 1, name: "Class 1", description: "First Standard – Kerala SCERT (2024-25)",
    subjects: [
      { name: "English", nameMl: "ഇംഗ്ലീഷ്", code: "ENG", sourceUrl: S, parts: [
        { partNumber: 1, title: "Term 1", titleMl: "ഒന്നാം ടേം", chapters: [
          { chapterNumber: 1, title: "Hello", titleMl: "ഹലോ", headings: ["Greetings"] },
          { chapterNumber: 2, title: "After a Bath", titleMl: "കുളിക്കുശേഷം", headings: ["Actions", "Daily Routine"] },
          { chapterNumber: 3, title: "One Little Finger", titleMl: "ഒരു ചെറിയ വിരൽ", headings: ["Body Parts"] },
          { chapterNumber: 4, title: "I Am Lucky", titleMl: "ഞാൻ ഭാഗ്യവാൻ", headings: ["Feelings"] },
          { chapterNumber: 5, title: "A Happy Child", titleMl: "ഒരു സന്തോഷമുള്ള കുട്ടി", headings: ["Daily Activities"] },
        ]},
        { partNumber: 2, title: "Term 2", titleMl: "രണ്ടാം ടേം", chapters: [
          { chapterNumber: 1, title: "In the Class", titleMl: "ക്ലാസ്സിൽ", headings: ["Classroom"] },
          { chapterNumber: 2, title: "I Can Do This", titleMl: "ഞാൻ ഇത് ചെയ്യാൻ പറ്റും", headings: ["Abilities"] },
          { chapterNumber: 3, title: "Where Is It?", titleMl: "അത് എവിടെ?", headings: ["Prepositions"] },
          { chapterNumber: 4, title: "Curly Hair", titleMl: "കുറുകുറുത്ത മുടി", headings: ["Describing People"] },
          { chapterNumber: 5, title: "My Family", titleMl: "എന്റെ കുടുംബം", headings: ["Family"] },
        ]},
      ]},
      { name: "Malayalam", nameMl: "മലയാളം", code: "ML", sourceUrl: S, parts: [
        { partNumber: 1, title: "Term 1", titleMl: "ഒന്നാം ടേം", chapters: [
          { chapterNumber: 1, title: "നമസ്കാരം", titleMl: "നമസ്കാരം", headings: ["അക്ഷരങ്ങൾ"] },
          { chapterNumber: 2, title: "വീട്", titleMl: "വീട്", headings: ["കുടുംബം"] },
          { chapterNumber: 3, title: "പൂക്കൾ", titleMl: "പൂക്കൾ", headings: ["നിറുകൾ"] },
          { chapterNumber: 4, title: "മൃഗങ്ങൾ", titleMl: "മൃഗങ്ങൾ", headings: ["വീട്ടുമൃഗങ്ങൾ"] },
          { chapterNumber: 5, title: "ഫലങ്ങൾ", titleMl: "ഫലങ്ങൾ", headings: ["പഴങ്ങൾ"] },
        ]},
        { partNumber: 2, title: "Term 2", titleMl: "രണ്ടാം ടേം", chapters: [
          { chapterNumber: 1, title: "കഥകൾ", titleMl: "കഥകൾ", headings: ["നീതികഥകൾ"] },
          { chapterNumber: 2, title: "കവിതകൾ", titleMl: "കവിതകൾ", headings: ["ബാലകവിതകൾ"] },
          { chapterNumber: 3, title: "എണ്ണപ്പാട്ട്", titleMl: "എണ്ണപ്പാട്ട്", headings: ["എണ്ണം"] },
          { chapterNumber: 4, title: "തൊഴിലുകൾ", titleMl: "തൊഴിലുകൾ", headings: ["തൊഴിലുകൾ"] },
          { chapterNumber: 5, title: "ഹരിതഗ്രാമം", titleMl: "ഹരിതഗ്രാമം", headings: ["പരിസര സംരക്ഷണം"] },
        ]},
      ]},
      { name: "Mathematics", nameMl: "ഗണിതം", code: "MATH", sourceUrl: S, parts: [
        { partNumber: 1, title: "Term 1", titleMl: "ഒന്നാം ടേം", chapters: [
          { chapterNumber: 1, title: "Numbers up to 20", titleMl: "20 വരെയുള്ള സംഖ്യകൾ", headings: ["Counting"] },
          { chapterNumber: 2, title: "Addition", titleMl: "തുകകൂട്ടൽ", headings: ["Single Digit"] },
          { chapterNumber: 3, title: "Subtraction", titleMl: "കിഴിക്കൽ", headings: ["Single Digit"] },
          { chapterNumber: 4, title: "Measurement", titleMl: "അളക്കൽ", headings: ["Length", "Weight"] },
        ]},
        { partNumber: 2, title: "Term 2", titleMl: "രണ്ടാം ടേം", chapters: [
          { chapterNumber: 1, title: "Numbers up to 100", titleMl: "100 വരെ സംഖ്യകൾ", headings: ["Place Value"] },
          { chapterNumber: 2, title: "Shapes", titleMl: "രൂപങ്ങൾ", headings: ["Circle", "Triangle"] },
          { chapterNumber: 3, title: "Patterns", titleMl: "രൂപങ്ങൾ", headings: ["Number Patterns"] },
          { chapterNumber: 4, title: "Time", titleMl: "സമയം", headings: ["Days", "Months"] },
        ]},
      ]},
    ],
  },
  {
    number: 2, name: "Class 2", description: "Second Standard – Kerala SCERT (2024-25)",
    subjects: [
      { name: "English", nameMl: "ഇംഗ്ലീഷ്", code: "ENG", sourceUrl: S, parts: [
        { partNumber: 1, title: "Term 1", titleMl: "ഒന്നാം ടേം", chapters: [
          { chapterNumber: 1, title: "First Day at School", titleMl: "സ്കൂളിലെ ആദ്യ ദിവസം", headings: ["School Life"] },
          { chapterNumber: 2, title: "I Am Lucky", titleMl: "ഞാൻ ഭാഗ്യവാൻ", headings: ["Poem"] },
          { chapterNumber: 3, title: "A Gift of a Librarian", titleMl: "ലൈബ്രേറിയന്റെ സമ്മാനം", headings: ["Reading"] },
          { chapterNumber: 4, title: "Our Homes", titleMl: "നമ്മുടെ വീടുകൾ", headings: ["Houses"] },
        ]},
        { partNumber: 2, title: "Term 2", titleMl: "രണ്ടാം ടേം", chapters: [
          { chapterNumber: 1, title: "The Searching Kid", titleMl: "തിരയുന്ന കുട്ടി", headings: ["Curiosity"] },
          { chapterNumber: 2, title: "Rain in Town", titleMl: "നഗരത്തിൽ മഴ", headings: ["Weather"] },
          { chapterNumber: 3, title: "My Sweet Orange Tree", titleMl: "മധുര ഓറഞ്ച് മരം", headings: ["Trees"] },
          { chapterNumber: 4, title: "My Brother", titleMl: "എന്റെ സഹോദരൻ", headings: ["Family"] },
        ]},
      ]},
      { name: "Malayalam", nameMl: "മലയാളം", code: "ML", sourceUrl: S, parts: [
        { partNumber: 1, title: "Term 1", titleMl: "ഒന്നാം ടേം", chapters: [
          { chapterNumber: 1, title: "മഴ", titleMl: "മഴ", headings: ["മഴക്കാലം"] },
          { chapterNumber: 2, title: "കളികൾ", titleMl: "കളികൾ", headings: ["കുട്ടികളുടെ കളികൾ"] },
          { chapterNumber: 3, title: "മൃഗങ്ങൾ", titleMl: "മൃഗങ്ങൾ", headings: ["മൃഗങ്ങളുടെ ശബ്ദം"] },
          { chapterNumber: 4, title: "പാട്ടുകൾ", titleMl: "പാട്ടുകൾ", headings: ["ലാലിപാട്ടുകൾ"] },
        ]},
        { partNumber: 2, title: "Term 2", titleMl: "രണ്ടാം ടേം", chapters: [
          { chapterNumber: 1, title: "പ്രകൃതി", titleMl: "പ്രകൃതി", headings: ["പ്രകൃതി സൗന്ദര്യം"] },
          { chapterNumber: 2, title: "നാടൻ കഥകൾ", titleMl: "നാടൻ കഥകൾ", headings: ["ജനകീയ കഥകൾ"] },
          { chapterNumber: 3, title: "ചിത്രരചന", titleMl: "ചിത്രരചന", headings: ["ചിത്രങ്ങൾ വരയ്ക്കൽ"] },
          { chapterNumber: 4, title: "കത്തുകൾ", titleMl: "കത്തുകൾ", headings: ["ലഘുകത്തുകൾ"] },
        ]},
      ]},
      { name: "Mathematics", nameMl: "ഗണിതം", code: "MATH", sourceUrl: S, parts: [
        { partNumber: 1, title: "Term 1", titleMl: "ഒന്നാം ടേം", chapters: [
          { chapterNumber: 1, title: "Numbers up to 999", titleMl: "999 വരെ സംഖ്യകൾ", headings: ["Place Value"] },
          { chapterNumber: 2, title: "Addition and Subtraction", titleMl: "തുകകൂട്ടലും കിഴിക്കലും", headings: ["Two Digit"] },
          { chapterNumber: 3, title: "Multiplication", titleMl: "ഗുണനം", headings: ["Tables"] },
          { chapterNumber: 4, title: "Measurement", titleMl: "അളക്കൽ", headings: ["Metres", "Kg"] },
        ]},
        { partNumber: 2, title: "Term 2", titleMl: "രണ്ടാം ടേം", chapters: [
          { chapterNumber: 1, title: "Fractions", titleMl: "ഭിന്നങ്ങൾ", headings: ["Halves"] },
          { chapterNumber: 2, title: "Time and Money", titleMl: "സമയവും പണവും", headings: ["Clock"] },
          { chapterNumber: 3, title: "Data Handling", titleMl: "ഡാറ്റ കൈകാര്യം", headings: ["Tally Marks"] },
          { chapterNumber: 4, title: "Patterns and Shapes", titleMl: "രൂപങ്ങളും ചിഹ്നങ്ങളും", headings: ["Symmetry"] },
        ]},
      ]},
    ],
  },
  {
    number: 3, name: "Class 3", description: "Third Standard – Kerala SCERT (2024-25)",
    subjects: [
      { name: "English", nameMl: "ഇംഗ്ലീഷ്", code: "ENG", sourceUrl: S, parts: [
        { partNumber: 1, title: "Term 1", titleMl: "ഒന്നാം ടേം", chapters: [
          { chapterNumber: 1, title: "What a Lesson!", titleMl: "എന്തൊരു പാഠം!", headings: ["Classroom"] },
          { chapterNumber: 2, title: "The Enormous Turnip", titleMl: "വലിയ മുള്ളങ്കി", headings: ["Cooperation"] },
          { chapterNumber: 3, title: "Puppet Show", titleMl: "പാപ്പറ്റ് ഷോ", headings: ["Drama"] },
          { chapterNumber: 4, title: "At the Library", titleMl: "ലൈബ്രറിയിൽ", headings: ["Reading"] },
          { chapterNumber: 5, title: "The Secret Garden", titleMl: "രഹസ്യ പൂന്തോട്ടം", headings: ["Nature"] },
        ]},
        { partNumber: 2, title: "Term 2", titleMl: "രണ്ടാം ടേം", chapters: [
          { chapterNumber: 1, title: "The Naughty Goat", titleMl: "കുസൃതി ആട്", headings: ["Animal Story"] },
          { chapterNumber: 2, title: "The Monster", titleMl: "രാക്ഷസൻ", headings: ["Fantasy"] },
          { chapterNumber: 3, title: "Magic Garden", titleMl: "മാന്ത്രിക തോട്ടം", headings: ["Poetry"] },
          { chapterNumber: 4, title: "A Journey by Train", titleMl: "ട്രെയിനിൽ യാത്ര", headings: ["Travel"] },
        ]},
      ]},
      { name: "Malayalam", nameMl: "മലയാളം", code: "ML", sourceUrl: S, parts: [
        { partNumber: 1, title: "Term 1", titleMl: "ഒന്നാം ടേം", chapters: [
          { chapterNumber: 1, title: "സ്കൂൾ", titleMl: "സ്കൂൾ", headings: ["വിദ്യാഭ്യാസം"] },
          { chapterNumber: 2, title: "മഴവെളളം", titleMl: "മഴവെളളം", headings: ["ജലസംരക്ഷണം"] },
          { chapterNumber: 3, title: "പക്ഷികൾ", titleMl: "പക്ഷികൾ", headings: ["നാട്ടുപക്ഷികൾ"] },
          { chapterNumber: 4, title: "കഥകൾ", titleMl: "കഥകൾ", headings: ["നീതികഥകൾ"] },
          { chapterNumber: 5, title: "ഹരിതാലയം", titleMl: "ഹരിതാലയം", headings: ["പച്ചപ്പ്"] },
        ]},
        { partNumber: 2, title: "Term 2", titleMl: "രണ്ടാം ടേം", chapters: [
          { chapterNumber: 1, title: "കലകൾ", titleMl: "കലകൾ", headings: ["നൃത്തം", "സംഗീതം"] },
          { chapterNumber: 2, title: "യാത്രകൾ", titleMl: "യാത്രകൾ", headings: ["യാത്രാവിവരണം"] },
          { chapterNumber: 3, title: "ഉപ്പും മുളകും", titleMl: "ഉപ്പും മുളകും", headings: ["പാചകം"] },
          { chapterNumber: 4, title: "കവിതകൾ", titleMl: "കവിതകൾ", headings: ["ബാലകവിതകൾ"] },
        ]},
      ]},
      { name: "Mathematics", nameMl: "ഗണിതം", code: "MATH", sourceUrl: S, parts: [
        { partNumber: 1, title: "Term 1", titleMl: "ഒന്നാം ടേം", chapters: [
          { chapterNumber: 1, title: "Addition and Subtraction", titleMl: "തുകകൂട്ടലും കിഴിക്കലും", headings: ["3 Digit"] },
          { chapterNumber: 2, title: "Multiplication", titleMl: "ഗുണനം", headings: ["Tables"] },
          { chapterNumber: 3, title: "Division", titleMl: "ഭാഗഹരം", headings: ["Equal Sharing"] },
          { chapterNumber: 4, title: "Measurement", titleMl: "അളക്കൽ", headings: ["Length", "Mass"] },
        ]},
        { partNumber: 2, title: "Term 2", titleMl: "രണ്ടാം ടേം", chapters: [
          { chapterNumber: 1, title: "Shapes", titleMl: "രൂപങ്ങൾ", headings: ["2D", "3D"] },
          { chapterNumber: 2, title: "Data Handling", titleMl: "ഡാറ്റ കൈകാര്യം", headings: ["Bar Graphs"] },
          { chapterNumber: 3, title: "Fractions", titleMl: "ഭിന്നങ്ങൾ", headings: ["Halves", "Quarters"] },
          { chapterNumber: 4, title: "Time", titleMl: "സമയം", headings: ["Clock", "Calendar"] },
        ]},
      ]},
      { name: "Environmental Studies", nameMl: "പരിസരപഠനം", code: "EVS", sourceUrl: S, parts: [
        { partNumber: 1, title: "Term 1", titleMl: "ഒന്നാം ടേം", chapters: [
          { chapterNumber: 1, title: "Our Neighbourhood", titleMl: "നമ്മുടെ അയൽപക്കം", headings: ["Community"] },
          { chapterNumber: 2, title: "Plants Around Us", titleMl: "സസ്യങ്ങൾ", headings: ["Types of Plants"] },
          { chapterNumber: 3, title: "Water", titleMl: "ജലം", headings: ["Sources"] },
          { chapterNumber: 4, title: "Our Food", titleMl: "നമ്മുടെ ഭക്ഷണം", headings: ["Food Groups"] },
        ]},
        { partNumber: 2, title: "Term 2", titleMl: "രണ്ടാം ടേം", chapters: [
          { chapterNumber: 1, title: "Animal Kingdom", titleMl: "മൃഗലോകം", headings: ["Domestic", "Wild"] },
          { chapterNumber: 2, title: "Our Body", titleMl: "നമ്മുടെ ശരീരം", headings: ["Body Parts"] },
          { chapterNumber: 3, title: "Seasons", titleMl: "ഋതുക്കൾ", headings: ["Monsoon"] },
          { chapterNumber: 4, title: "Festivals", titleMl: "ഉത്സവങ്ങൾ", headings: ["Onam", "Vishu"] },
        ]},
      ]},
    ],
  },
  {
    number: 4, name: "Class 4", description: "Fourth Standard – Kerala SCERT (2024-25)",
    subjects: [
      { name: "English", nameMl: "ഇംഗ്ലീഷ്", code: "ENG", sourceUrl: S, parts: [
        { partNumber: 1, title: "Term 1", titleMl: "ഒന്നാം ടേം", chapters: [
          { chapterNumber: 1, title: "Fun with Learning", titleMl: "പഠനത്തിലെ രസം", headings: ["Learning Methods"] },
          { chapterNumber: 2, title: "The Magic Porridge Pot", titleMl: "മാന്ത്രിക കഞ്ഞി കലം", headings: ["Fairy Tale"] },
          { chapterNumber: 3, title: "Martha", titleMl: "മാർത്ത", headings: ["Story"] },
          { chapterNumber: 4, title: "The Wooden Horse", titleMl: "മര കുതിര", headings: ["Craft"] },
          { chapterNumber: 5, title: "All Things Bright and Beautiful", titleMl: "സകല സുന്ദര വസ്തുക്കളും", headings: ["Poetry"] },
        ]},
        { partNumber: 2, title: "Term 2", titleMl: "രണ്ടാം ടേം", chapters: [
          { chapterNumber: 1, title: "The Blue Bird", titleMl: "നീല പക്ഷി", headings: ["Story"] },
          { chapterNumber: 2, title: "Dr. Ambedkar", titleMl: "ഡോ. അംബേദ്കർ", headings: ["Biography"] },
          { chapterNumber: 3, title: "The Shoemaker and the Elves", titleMl: "ചെരുപ്പുകുത്തനും എൽവുകളും", headings: ["Fairy Tale"] },
          { chapterNumber: 4, title: "My Dream", titleMl: "എന്റെ സ്വപ്നം", headings: ["Poetry"] },
        ]},
      ]},
      { name: "Malayalam", nameMl: "മലയാളം", code: "ML", sourceUrl: S, parts: [
        { partNumber: 1, title: "Term 1", titleMl: "ഒന്നാം ടേം", chapters: [
          { chapterNumber: 1, title: "മഴ", titleMl: "മഴ", headings: ["കവിത"] },
          { chapterNumber: 2, title: "ശുഭ്രപൂർണ്ണിമ", titleMl: "ശുഭ്രപൂർണ്ണിമ", headings: ["നിലാവ്"] },
          { chapterNumber: 3, title: "നന്മയുടെ വഴി", titleMl: "നന്മയുടെ വഴി", headings: ["നീതി"] },
          { chapterNumber: 4, title: "കായൽത്തീരത്ത്", titleMl: "കായൽത്തീരത്ത്", headings: ["കായൽ"] },
          { chapterNumber: 5, title: "വിശേഷണം", titleMl: "വിശേഷണം", headings: ["വ്യാകരണം"] },
        ]},
        { partNumber: 2, title: "Term 2", titleMl: "രണ്ടാം ടേം", chapters: [
          { chapterNumber: 1, title: "യാത്ര", titleMl: "യാത്ര", headings: ["യാത്രാവിവരണം"] },
          { chapterNumber: 2, title: "കുഞ്ഞുകൂട്ട്", titleMl: "കുഞ്ഞുകൂട്ട്", headings: ["കുട്ടികൾ"] },
          { chapterNumber: 3, title: "ജലയോഗം", titleMl: "ജലയോഗം", headings: ["നീന്തൽ"] },
          { chapterNumber: 4, title: "ഓണം", titleMl: "ഓണം", headings: ["ഓണ ആഘോഷം"] },
        ]},
      ]},
      { name: "Mathematics", nameMl: "ഗണിതം", code: "MATH", sourceUrl: S, parts: [
        { partNumber: 1, title: "Term 1", titleMl: "ഒന്നാം ടേം", chapters: [
          { chapterNumber: 1, title: "Large Numbers", titleMl: "വലിയ സംഖ്യകൾ", headings: ["Thousands"] },
          { chapterNumber: 2, title: "Addition and Subtraction", titleMl: "തുകകൂട്ടലും കിഴിക്കലും", headings: ["4 Digit"] },
          { chapterNumber: 3, title: "Multiplication", titleMl: "ഗുണനം", headings: ["2 Digit"] },
          { chapterNumber: 4, title: "Division", titleMl: "ഭാഗഹരം", headings: ["Long Division"] },
        ]},
        { partNumber: 2, title: "Term 2", titleMl: "രണ്ടാം ടേം", chapters: [
          { chapterNumber: 1, title: "Fractions and Decimals", titleMl: "ഭിന്നങ്ങളും ദശമലങ്ങളും", headings: ["Equivalent"] },
          { chapterNumber: 2, title: "Money and Time", titleMl: "പണവും സമയവും", headings: ["Currency"] },
          { chapterNumber: 3, title: "Measurement", titleMl: "അളക്കൽ", headings: ["Perimeter", "Area"] },
          { chapterNumber: 4, title: "Geometry", titleMl: "ജ്യാമിതി", headings: ["Angles"] },
        ]},
      ]},
      { name: "Environmental Studies", nameMl: "പരിസരപഠനം", code: "EVS", sourceUrl: S, parts: [
        { partNumber: 1, title: "Term 1", titleMl: "ഒന്നാം ടേം", chapters: [
          { chapterNumber: 1, title: "Our Village", titleMl: "നമ്മുടെ ഗ്രാമം", headings: ["Village Life"] },
          { chapterNumber: 2, title: "Clothes We Wear", titleMl: "വസ്ത്രങ്ങൾ", headings: ["Fabrics"] },
          { chapterNumber: 3, title: "Things We Make and Do", titleMl: "നമ്മൾ ഉണ്ടാക്കുന്നതും", headings: ["Crafts"] },
          { chapterNumber: 4, title: "Services We Use", titleMl: "സേവനങ്ങൾ", headings: ["Public Services"] },
        ]},
        { partNumber: 2, title: "Term 2", titleMl: "രണ്ടാം ടേം", chapters: [
          { chapterNumber: 1, title: "Our Earth", titleMl: "നമ്മുടെ ഭൂമി", headings: ["Continents"] },
          { chapterNumber: 2, title: "The World Around Us", titleMl: "നമുക്ക് ചുറ്റുമുള്ള ലോകം", headings: ["Environment"] },
          { chapterNumber: 3, title: "Sharing Our Planet", titleMl: "ഗ്രഹം പങ്കിടുന്നു", headings: ["Wildlife"] },
          { chapterNumber: 4, title: "Travel and Tourism", titleMl: "യാത്രയും ടൂറിസവും", headings: ["Tourism"] },
        ]},
      ]},
    ],
  },
  {
    number: 5, name: "Class 5", description: "Fifth Standard – Kerala SCERT (2024-25)",
    subjects: [
      { name: "English", nameMl: "ഇംഗ്ലീഷ്", code: "ENG", sourceUrl: S, parts: [
        { partNumber: 1, title: "Term 1", titleMl: "ഒന്നാം ടേം", chapters: [
          { chapterNumber: 1, title: "The Twins", titleMl: "ഇരട്ടകൾ", headings: ["Identity"] },
          { chapterNumber: 2, title: "Crying in the Chapel", titleMl: "ചാപ്പലിൽ കരയുന്നു", headings: ["Poetry"] },
          { chapterNumber: 3, title: "Don Quixote", titleMl: "ഡോൺ ക്വിക്സോട്ട്", headings: ["Adventure"] },
          { chapterNumber: 4, title: "My Brother's Special Trousers", titleMl: "പ്രത്യേക പാന്റ്സ്", headings: ["Humour"] },
          { chapterNumber: 5, title: "My Country", titleMl: "എന്റെ രാജ്യം", headings: ["Patriotism"] },
        ]},
        { partNumber: 2, title: "Term 2", titleMl: "രണ്ടാം ടേം", chapters: [
          { chapterNumber: 1, title: "The Old Man and the Market", titleMl: "വൃദ്ധനും മാർക്കറ്റും", headings: ["Wisdom"] },
          { chapterNumber: 2, title: "Saving the Children", titleMl: "കുട്ടികളെ രക്ഷിക്കുന്നു", headings: ["Social Reform"] },
          { chapterNumber: 3, title: "The Proud Street Dog", titleMl: "അഹങ്കാരി നായ", headings: ["Fable"] },
          { chapterNumber: 4, title: "Trees", titleMl: "മരങ്ങൾ", headings: ["Environment"] },
          { chapterNumber: 5, title: "A Great Inventor", titleMl: "മഹാൻ ആവിഷ്കാരകൻ", headings: ["Edison"] },
        ]},
      ]},
      { name: "Malayalam", nameMl: "മലയാളം", code: "ML", sourceUrl: S, parts: [
        { partNumber: 1, title: "Term 1", titleMl: "ഒന്നാം ടേം", chapters: [
          { chapterNumber: 1, title: "ജൈവവൈവിധ്യം", titleMl: "ജൈവവൈവിധ്യം", headings: ["പ്രകൃതി"] },
          { chapterNumber: 2, title: "നീലക്കുയിൽ", titleMl: "നീലക്കുയിൽ", headings: ["കവിത"] },
          { chapterNumber: 3, title: "മരുഭൂമി", titleMl: "മരുഭൂമി", headings: ["മരുപ്രദേശം"] },
          { chapterNumber: 4, title: "നാടൻ പാട്ടുകൾ", titleMl: "നാടൻ പാട്ടുകൾ", headings: ["ലോകഗാനങ്ങൾ"] },
          { chapterNumber: 5, title: "ഭാവന", titleMl: "ഭാവന", headings: ["കഥ"] },
        ]},
        { partNumber: 2, title: "Term 2", titleMl: "രണ്ടാം ടേം", chapters: [
          { chapterNumber: 1, title: "ജീവിതഗന്ധം", titleMl: "ജീവിതഗന്ധം", headings: ["ജീവിതാനുഭവം"] },
          { chapterNumber: 2, title: "കവിതകൾ", titleMl: "കവിതകൾ", headings: ["ഖണ്ഡകവിതകൾ"] },
          { chapterNumber: 3, title: "സംഭാഷണം", titleMl: "സംഭാഷണം", headings: ["രചന"] },
          { chapterNumber: 4, title: "വ്യാകരണം", titleMl: "വ്യാകരണം", headings: ["വിഭക്തി"] },
        ]},
      ]},
      { name: "Mathematics", nameMl: "ഗണിതം", code: "MATH", sourceUrl: S, parts: [
        { partNumber: 1, title: "Term 1", titleMl: "ഒന്നാം ടേം", chapters: [
          { chapterNumber: 1, title: "Knowing Our Numbers", titleMl: "നമ്മുടെ സംഖ്യകൾ", headings: ["Large Numbers"] },
          { chapterNumber: 2, title: "Whole Numbers", titleMl: "പൂർണ്ണ സംഖ്യകൾ", headings: ["Number Line"] },
          { chapterNumber: 3, title: "Playing with Numbers", titleMl: "സംഖ്യാ കളികൾ", headings: ["Factors", "Multiples"] },
          { chapterNumber: 4, title: "Basic Geometrical Ideas", titleMl: "ജ്യാമിതി", headings: ["Points", "Lines"] },
        ]},
        { partNumber: 2, title: "Term 2", titleMl: "രണ്ടാം ടേം", chapters: [
          { chapterNumber: 1, title: "Fractions", titleMl: "ഭിന്നങ്ങൾ", headings: ["Proper", "Improper"] },
          { chapterNumber: 2, title: "Decimals", titleMl: "ദശമലങ്ങൾ", headings: ["Place Value"] },
          { chapterNumber: 3, title: "Data Handling", titleMl: "ഡാറ്റ കൈകാര്യം", headings: ["Bar Graph"] },
          { chapterNumber: 4, title: "Measurements", titleMl: "അളക്കലുകൾ", headings: ["Length", "Weight"] },
        ]},
      ]},
      { name: "Environmental Studies", nameMl: "പരിസരപഠനം", code: "EVS", sourceUrl: S, parts: [
        { partNumber: 1, title: "Term 1", titleMl: "ഒന്നാം ടേം", chapters: [
          { chapterNumber: 1, title: "Knowing Our Surroundings", titleMl: "നമ്മുടെ ചുറ്റുപാട്", headings: ["Map Reading"] },
          { chapterNumber: 2, title: "Human Body and Health", titleMl: "ശരീരവും ആരോഗ്യവും", headings: ["Organ Systems"] },
          { chapterNumber: 3, title: "Our Country - India", titleMl: "നമ്മുടെ രാജ്യം", headings: ["States"] },
          { chapterNumber: 4, title: "Food and Nutrition", titleMl: "ഭക്ഷണവും പോഷണവും", headings: ["Balanced Diet"] },
        ]},
        { partNumber: 2, title: "Term 2", titleMl: "രണ്ടാം ടേം", chapters: [
          { chapterNumber: 1, title: "Shelter", titleMl: "ഭവനം", headings: ["Types"] },
          { chapterNumber: 2, title: "Water", titleMl: "ജലം", headings: ["Water Cycle"] },
          { chapterNumber: 3, title: "Waste Management", titleMl: "മാലിന്യ സംസ്കരണം", headings: ["Recycling"] },
          { chapterNumber: 4, title: "Natural Resources", titleMl: "പ്രകൃതിവിഭവങ്ങൾ", headings: ["Forests"] },
        ]},
      ]},
    ],
  },
];

// Prepend Classes 1-5 to the main array
keralaBoardData.unshift(...classes1to5);
