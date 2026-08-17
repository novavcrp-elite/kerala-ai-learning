// Complete Kerala State Board textbook data for Classes 1-10
// This data represents the actual Kerala Board curriculum structure

export interface SubjectData {
  name: string;
  nameMl: string;
  code: string;
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

export const keralaBoardData: ClassData[] = [
  // ==================== CLASS 1 ====================
  {
    number: 1,
    name: "Class 1",
    description: "First Standard - Kerala State Board",
    subjects: [
      {
        name: "English",
        nameMl: "ഇംഗ്ലീഷ്",
        code: "ENG",
        parts: [
          {
            partNumber: 1,
            title: "Term 1",
            titleMl: "ഒന്നാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "Hello",
                titleMl: "ഹലോ",
                headings: ["Greetings", "Introducing Yourself", "Say Hello"],
              },
              {
                chapterNumber: 2,
                title: "After a Bath",
                titleMl: "കുളിക്കുശേഷം",
                headings: ["Actions", "Daily Routine", "Poem"],
              },
              {
                chapterNumber: 3,
                title: "One Little Finger",
                titleMl: "ഒരു ചെറിയ വിരൽ",
                headings: ["Body Parts", "Action Song", "Finger Play"],
              },
              {
                chapterNumber: 4,
                title: "I Am Lucky",
                titleMl: "ഞാൻ ഭാഗ്യവാൻ",
                headings: ["Feelings", "Lucky Things", "Poem"],
              },
              {
                chapterNumber: 5,
                title: "A Happy Child",
                titleMl: "ഒരു സന്തോഷമുള്ള കുട്ടി",
                headings: ["Happy Feelings", "Daily Activities", "Poem"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Term 2",
            titleMl: "രണ്ടാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "In the Class",
                titleMl: "ക്ലാസ്സിൽ",
                headings: ["Classroom Objects", "School Activities"],
              },
              {
                chapterNumber: 2,
                title: "I Can Do This",
                titleMl: "ഞാൻ ഇത് ചെയ്യാൻ പറ്റും",
                headings: ["Abilities", "Can and Can't"],
              },
              {
                chapterNumber: 3,
                title: "Where Is It?",
                titleMl: "അത് എവിടെ?",
                headings: ["Prepositions", "Position Words"],
              },
              {
                chapterNumber: 4,
                title: "Curly Hair",
                titleMl: "കുറുകുറുത്ത മുടി",
                headings: ["Describing People", "Hair Types"],
              },
              {
                chapterNumber: 5,
                title: "My Family",
                titleMl: "എന്റെ കുടുംബം",
                headings: ["Family Members", "Relations"],
              },
            ],
          },
        ],
      },
      {
        name: "Malayalam",
        nameMl: "മലയാളം",
        code: "ML",
        parts: [
          {
            partNumber: 1,
            title: "Term 1",
            titleMl: "ഒന്നാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "നമസ്കാരം",
                titleMl: "നമസ്കാരം",
                headings: ["അക്ഷരങ്ങൾ", "ചില്ലുകൾ"],
              },
              {
                chapterNumber: 2,
                title: "വീട്",
                titleMl: "വീട്",
                headings: ["വീട്ടുപകരണങ്ങൾ", "കുടുംബം"],
              },
              {
                chapterNumber: 3,
                title: "പൂക്കൾ",
                titleMl: "പൂക്കൾ",
                headings: ["പൂക്കളുടെ പേരുകൾ", "നിറുകൾ"],
              },
              {
                chapterNumber: 4,
                title: "മൃഗങ്ങൾ",
                titleMl: "മൃഗങ്ങൾ",
                headings: ["വീട്ടുമൃഗങ്ങൾ", "കാട്ടുമൃഗങ്ങൾ"],
              },
              {
                chapterNumber: 5,
                title: "ഫലങ്ങൾ",
                titleMl: "ഫലങ്ങൾ",
                headings: ["പഴങ്ങൾ", "പച്ചക്കറികൾ"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Term 2",
            titleMl: "രണ്ടാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "കഥകൾ",
                titleMl: "കഥകൾ",
                headings: ["ചെറുകഥകൾ", "നീതികഥകൾ"],
              },
              {
                chapterNumber: 2,
                title: "കവിതകൾ",
                titleMl: "കവിതകൾ",
                headings: ["ബാലകവിതകൾ"],
              },
              {
                chapterNumber: 3,
                title: "എണ്ണപ്പാട്ട്",
                titleMl: "എണ്ണപ്പാട്ട്",
                headings: ["എണ്ണം", "കണക്ക്"],
              },
              {
                chapterNumber: 4,
                title: "തൊഴിലുകൾ",
                titleMl: "തൊഴിലുകൾ",
                headings: ["തൊഴിലുകളുടെ പേരുകൾ"],
              },
              {
                chapterNumber: 5,
                title: "ഹരിതഗ്രാമം",
                titleMl: "ഹരിതഗ്രാമം",
                headings: ["പ്രകൃതി", "പരിസര സംരക്ഷണം"],
              },
            ],
          },
        ],
      },
      {
        name: "Mathematics",
        nameMl: "ഗണിതശാസ്ത്രം",
        code: "MATH",
        parts: [
          {
            partNumber: 1,
            title: "Term 1",
            titleMl: "ഒന്നാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "Numbers up to 20",
                titleMl: "20 വരെയുള്ള സംഖ്യകൾ",
                headings: ["Counting", "Number Names", "Before After Between"],
              },
              {
                chapterNumber: 2,
                title: "Addition",
                titleMl: "തുകകൂട്ടൽ",
                headings: ["Single Digit Addition", "Addition Facts"],
              },
              {
                chapterNumber: 3,
                title: "Subtraction",
                titleMl: "കിഴിക്കൽ",
                headings: ["Single Digit Subtraction", "Subtraction Facts"],
              },
              {
                chapterNumber: 4,
                title: "Measurement",
                titleMl: "അളക്കൽ",
                headings: ["Length", "Weight", "Capacity"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Term 2",
            titleMl: "രണ്ടാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "Numbers up to 100",
                titleMl: "100 വരെയുള്ള സംഖ്യകൾ",
                headings: ["Tens and Ones", "Place Value"],
              },
              {
                chapterNumber: 2,
                title: "Shapes",
                titleMl: "രൂപങ്ങൾ",
                headings: ["Circle", "Triangle", "Square", "Rectangle"],
              },
              {
                chapterNumber: 3,
                title: "Patterns",
                titleMl: "രൂപങ്ങൾ",
                headings: ["Number Patterns", "Shape Patterns", "Growing Patterns"],
              },
              {
                chapterNumber: 4,
                title: "Time",
                titleMl: "സമയം",
                headings: ["Days", "Months", "Seasons"],
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== CLASS 2 ====================
  {
    number: 2,
    name: "Class 2",
    description: "Second Standard - Kerala State Board",
    subjects: [
      {
        name: "English",
        nameMl: "ഇംഗ്ലീഷ്",
        code: "ENG",
        parts: [
          {
            partNumber: 1,
            title: "Term 1",
            titleMl: "ഒന്നാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "First Day at School",
                titleMl: "സ്കൂളിലെ ആദ്യ ദിവസം",
                headings: ["School Life", "New Friends"],
              },
              {
                chapterNumber: 2,
                title: "I Am Lucky",
                titleMl: "ഞാൻ ഭാഗ്യവാൻ",
                headings: ["Poem", "Gratitude"],
              },
              {
                chapterNumber: 3,
                title: "A Gift of a Librarian",
                titleMl: "ഒരു ലൈബ്രേറിയന്റെ സമ്മാനം",
                headings: ["Books", "Library", "Reading"],
              },
              {
                chapterNumber: 4,
                title: "Our Homes",
                titleMl: "നമ്മുടെ വീടുകൾ",
                headings: ["Types of Houses", "Home"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Term 2",
            titleMl: "രണ്ടാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "The Searching Kid",
                titleMl: "തിരയുന്ന കുട്ടി",
                headings: ["Exploring", "Curiosity"],
              },
              {
                chapterNumber: 2,
                title: "Rain in Town",
                titleMl: "നഗരത്തിൽ മഴ",
                headings: ["Weather", "Rain", "Seasons"],
              },
              {
                chapterNumber: 3,
                title: "My Sweet Orange Tree",
                titleMl: "എന്റെ മധുര ഓറഞ്ച് മരം",
                headings: ["Trees", "Nature"],
              },
              {
                chapterNumber: 4,
                title: "My Brother",
                titleMl: "എന്റെ സഹോദരൻ",
                headings: ["Family", "Siblings"],
              },
            ],
          },
        ],
      },
      {
        name: "Malayalam",
        nameMl: "മലയാളം",
        code: "ML",
        parts: [
          {
            partNumber: 1,
            title: "Term 1",
            titleMl: "ഒന്നാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "മഴ",
                titleMl: "മഴ",
                headings: ["മഴക്കാലം", "മഴവെളളച്ചാലുകൾ"],
              },
              {
                chapterNumber: 2,
                title: "കളികൾ",
                titleMl: "കളികൾ",
                headings: ["കുട്ടികളുടെ കളികൾ"],
              },
              {
                chapterNumber: 3,
                title: "മൃഗങ്ങൾ",
                titleMl: "മൃഗങ്ങൾ",
                headings: ["മൃഗങ്ങളുടെ ശബ്ദം", "സംരക്ഷണം"],
              },
              {
                chapterNumber: 4,
                title: "പാട്ടുകൾ",
                titleMl: "പാട്ടുകൾ",
                headings: ["ലാലിപാട്ടുകൾ", "ജനപ്രിയഗാനങ്ങൾ"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Term 2",
            titleMl: "രണ്ടാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "പ്രകൃതി",
                titleMl: "പ്രകൃതി",
                headings: ["പ്രകൃതി സൗന്ദര്യം"],
              },
              {
                chapterNumber: 2,
                title: "നാടൻ കഥകൾ",
                titleMl: "നാടൻ കഥകൾ",
                headings: ["ജനകീയ കഥകൾ"],
              },
              {
                chapterNumber: 3,
                title: "ചിത്രരചന",
                titleMl: "ചിത്രരചന",
                headings: ["ചിത്രങ്ങൾ വരയ്ക്കൽ"],
              },
              {
                chapterNumber: 4,
                title: "കത്തുകൾ",
                titleMl: "കത്തുകൾ",
                headings: ["ലഘുകത്തുകൾ"],
              },
            ],
          },
        ],
      },
      {
        name: "Mathematics",
        nameMl: "ഗണിതശാസ്ത്രം",
        code: "MATH",
        parts: [
          {
            partNumber: 1,
            title: "Term 1",
            titleMl: "ഒന്നാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "Numbers up to 999",
                titleMl: "999 വരെയുള്ള സംഖ്യകൾ",
                headings: ["Place Value", "Expanded Form"],
              },
              {
                chapterNumber: 2,
                title: "Addition and Subtraction",
                titleMl: "തുകകൂട്ടലും കിഴിക്കലും",
                headings: ["Two Digit Addition", "Two Digit Subtraction"],
              },
              {
                chapterNumber: 3,
                title: "Multiplication",
                titleMl: "ഗുണനം",
                headings: ["Tables", "Repeated Addition"],
              },
              {
                chapterNumber: 4,
                title: "Measurement",
                titleMl: "അളക്കൽ",
                headings: ["Metres", "Kilograms", "Litres"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Term 2",
            titleMl: "രണ്ടാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "Fractions",
                titleMl: "ഭിന്നങ്ങൾ",
                headings: ["Halves", "Quarters", "Equal Parts"],
              },
              {
                chapterNumber: 2,
                title: "Time and Money",
                titleMl: "സമയവും പണവും",
                headings: ["Clock", "Calendar", "Currency"],
              },
              {
                chapterNumber: 3,
                title: "Data Handling",
                titleMl: "ഡാറ്റ കൈകാര്യം ചെയ്യൽ",
                headings: ["Pictographs", "Tally Marks"],
              },
              {
                chapterNumber: 4,
                title: "Patterns and Shapes",
                titleMl: "രൂപങ്ങളും ചിഹ്നങ്ങളും",
                headings: ["Symmetry", "3D Shapes"],
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== CLASS 3 ====================
  {
    number: 3,
    name: "Class 3",
    description: "Third Standard - Kerala State Board",
    subjects: [
      {
        name: "English",
        nameMl: "ഇംഗ്ലീഷ്",
        code: "ENG",
        parts: [
          {
            partNumber: 1,
            title: "Term 1",
            titleMl: "ഒന്നാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "What a Lesson!",
                titleMl: "എന്തൊരു പാഠം!",
                headings: ["Classroom", "Learning"],
              },
              {
                chapterNumber: 2,
                title: "The Enormous Turnip",
                titleMl: "വലിയ മുള്ളങ്കി",
                headings: ["Story", "Cooperation", "Teamwork"],
              },
              {
                chapterNumber: 3,
                title: "Puppet Show",
                titleMl: "പാപ്പറ്റ് ഷോ",
                headings: ["Puppets", "Stories", "Drama"],
              },
              {
                chapterNumber: 4,
                title: "At the Library",
                titleMl: "ലൈബ്രറിയിൽ",
                headings: ["Books", "Reading Habits"],
              },
              {
                chapterNumber: 5,
                title: "The Secret Garden",
                titleMl: "രഹസ്യ പൂന്തോട്ടം",
                headings: ["Garden", "Nature", "Growth"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Term 2",
            titleMl: "രണ്ടാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "The Naughty Goat",
                titleMl: "കുസൃതി ആട്",
                headings: ["Animal Story", "Adventure"],
              },
              {
                chapterNumber: 2,
                title: "The Monster",
                titleMl: "രാക്ഷസൻ",
                headings: ["Imagination", "Fantasy"],
              },
              {
                chapterNumber: 3,
                title: "Magic Garden",
                titleMl: "മാന്ത്രിക തോട്ടം",
                headings: ["Poetry", "Nature"],
              },
              {
                chapterNumber: 4,
                title: "A Journey by Train",
                titleMl: "ട്രെയിനിൽ ഒരു യാത്ര",
                headings: ["Travel", "Transport"],
              },
            ],
          },
        ],
      },
      {
        name: "Malayalam",
        nameMl: "മലയാളം",
        code: "ML",
        parts: [
          {
            partNumber: 1,
            title: "Term 1",
            titleMl: "ഒന്നാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "സ്കൂൾ",
                titleMl: "സ്കൂൾ",
                headings: ["വിദ്യാഭ്യാസം", "സ്കൂൾ ജീവിതം"],
              },
              {
                chapterNumber: 2,
                title: "മഴവെളളം",
                titleMl: "മഴവെളളം",
                headings: ["മഴ", "ജലസംരക്ഷണം"],
              },
              {
                chapterNumber: 3,
                title: "പക്ഷികൾ",
                titleMl: "പക്ഷികൾ",
                headings: ["നാട്ടുപക്ഷികൾ", "സംരക്ഷണം"],
              },
              {
                chapterNumber: 4,
                title: "കഥകൾ",
                titleMl: "കഥകൾ",
                headings: ["നീതികഥകൾ", "ഉപദേശകഥകൾ"],
              },
              {
                chapterNumber: 5,
                title: "ഹരിതാലയം",
                titleMl: "ഹരിതാലയം",
                headings: ["പച്ചപ്പ്", "വനം"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Term 2",
            titleMl: "രണ്ടാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "കലകൾ",
                titleMl: "കലകൾ",
                headings: ["നൃത്തം", "സംഗീതം", "ചിത്രകല"],
              },
              {
                chapterNumber: 2,
                title: "യാത്രകൾ",
                titleMl: "യാത്രകൾ",
                headings: ["യാത്രാവിവരണം"],
              },
              {
                chapterNumber: 3,
                title: "ഉപ്പും മുളകും",
                titleMl: "ഉപ്പും മുളകും",
                headings: ["പാചകം", "വിഭവങ്ങൾ"],
              },
              {
                chapterNumber: 4,
                title: "കവിതകൾ",
                titleMl: "കവിതകൾ",
                headings: ["ബാലകവിതകൾ"],
              },
            ],
          },
        ],
      },
      {
        name: "Mathematics",
        nameMl: "ഗണിതശാസ്ത്രം",
        code: "MATH",
        parts: [
          {
            partNumber: 1,
            title: "Term 1",
            titleMl: "ഒന്നാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "Addition and Subtraction",
                titleMl: "തുകകൂട്ടലും കിഴിക്കലും",
                headings: ["3 Digit Numbers", "Regrouping"],
              },
              {
                chapterNumber: 2,
                title: "Multiplication",
                titleMl: "ഗുണനം",
                headings: ["Single Digit Multiplier", "Multiplication Tables"],
              },
              {
                chapterNumber: 3,
                title: "Division",
                titleMl: "ഭാഗഹരം",
                headings: ["Equal Sharing", "Division Facts"],
              },
              {
                chapterNumber: 4,
                title: "Measurement",
                titleMl: "അളക്കൽ",
                headings: ["Length", "Mass", "Volume"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Term 2",
            titleMl: "രണ്ടാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "Shapes",
                titleMl: "രൂപങ്ങൾ",
                headings: ["2D Shapes", "3D Objects", "Symmetry"],
              },
              {
                chapterNumber: 2,
                title: "Data Handling",
                titleMl: "ഡാറ്റ കൈകാര്യം",
                headings: ["Bar Graphs", "Pictographs"],
              },
              {
                chapterNumber: 3,
                title: "Fractions",
                titleMl: "ഭിന്നങ്ങൾ",
                headings: ["Halves", "Thirds", "Quarters", "Equivalents"],
              },
              {
                chapterNumber: 4,
                title: "Time",
                titleMl: "സമയം",
                headings: ["Reading Clock", "Calendar", "Duration"],
              },
            ],
          },
        ],
      },
      {
        name: "Environmental Studies",
        nameMl: "പരിസരപഠനം",
        code: "EVS",
        parts: [
          {
            partNumber: 1,
            title: "Term 1",
            titleMl: "ഒന്നാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "Our Neighbourhood",
                titleMl: "നമ്മുടെ അയൽപക്കം",
                headings: ["Community", "Local Places"],
              },
              {
                chapterNumber: 2,
                title: "Plants Around Us",
                titleMl: "നമുക്ക് ചുറ്റുമുള്ള സസ്യങ്ങൾ",
                headings: ["Types of Plants", "Parts of Plants"],
              },
              {
                chapterNumber: 3,
                title: "Water",
                titleMl: "ജലം",
                headings: ["Sources of Water", "Water Conservation"],
              },
              {
                chapterNumber: 4,
                title: "Our Food",
                titleMl: "നമ്മുടെ ഭക്ഷണം",
                headings: ["Food Groups", "Nutrition"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Term 2",
            titleMl: "രണ്ടാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "Animal Kingdom",
                titleMl: "മൃഗലോകം",
                headings: ["Domestic Animals", "Wild Animals"],
              },
              {
                chapterNumber: 2,
                title: "Our Body",
                titleMl: "നമ്മുടെ ശരീരം",
                headings: ["Body Parts", "Senses", "Health"],
              },
              {
                chapterNumber: 3,
                title: "Seasons",
                titleMl: "ഋതുക്കൾ",
                headings: ["Monsoon", "Summer", "Winter"],
              },
              {
                chapterNumber: 4,
                title: "Festivals",
                titleMl: "ഉത്സവങ്ങൾ",
                headings: ["Onam", "Vishu", "Christmas"],
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== CLASS 4 ====================
  {
    number: 4,
    name: "Class 4",
    description: "Fourth Standard - Kerala State Board",
    subjects: [
      {
        name: "English",
        nameMl: "ഇംഗ്ലീഷ്",
        code: "ENG",
        parts: [
          {
            partNumber: 1,
            title: "Term 1",
            titleMl: "ഒന്നാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "Fun with Learning",
                titleMl: "പഠനത്തിലെ രസം",
                headings: ["Learning Methods", "Study Skills"],
              },
              {
                chapterNumber: 2,
                title: "The Magic Porridge Pot",
                titleMl: "മാന്ത്രിക കഞ്ഞി കലം",
                headings: ["Fairy Tale", "Magic", "Generosity"],
              },
              {
                chapterNumber: 3,
                title: "Martha",
                titleMl: "മാർത്ത",
                headings: ["Story", "Character Study"],
              },
              {
                chapterNumber: 4,
                title: "The Wooden Horse",
                titleMl: "മര കുതിര",
                headings: ["Craft", "Creativity", "Invention"],
              },
              {
                chapterNumber: 5,
                title: "All Things Bright and Beautiful",
                titleMl: "സകല സുന്ദര വസ്തുക്കളും",
                headings: ["Poetry", "Nature", "Appreciation"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Term 2",
            titleMl: "രണ്ടാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "The Blue Bird",
                titleMl: "നീല പക്ഷി",
                headings: ["Story", "Happiness", "Search"],
              },
              {
                chapterNumber: 2,
                title: "Dr. Ambedkar",
                titleMl: "ഡോ. അംബേദ്കർ",
                headings: ["Biography", "Social Reform"],
              },
              {
                chapterNumber: 3,
                title: "The Shoemaker and the Elves",
                titleMl: "ചെരുപ്പുകുത്തനും എൽവുകളും",
                headings: ["Fairy Tale", "Kindness", "Hard Work"],
              },
              {
                chapterNumber: 4,
                title: "My Dream",
                titleMl: "എന്റെ സ്വപ്നം",
                headings: ["Aspirations", "Poetry"],
              },
            ],
          },
        ],
      },
      {
        name: "Malayalam",
        nameMl: "മലയാളം",
        code: "ML",
        parts: [
          {
            partNumber: 1,
            title: "Term 1",
            titleMl: "ഒന്നാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "മഴ",
                titleMl: "മഴ",
                headings: ["കവിത", "മഴക്കാല വർണ്ണന"],
              },
              {
                chapterNumber: 2,
                title: "ശുഭ്രപൂർണ്ണിമ",
                titleMl: "ശുഭ്രപൂർണ്ണിമ",
                headings: ["നിലാവ്", "രാത്രി", "കവിത"],
              },
              {
                chapterNumber: 3,
                title: "നന്മയുടെ വഴി",
                titleMl: "നന്മയുടെ വഴി",
                headings: ["നീതി", "സദാചാരം"],
              },
              {
                chapterNumber: 4,
                title: "കായൽത്തീരത്ത്",
                titleMl: "കായൽത്തീരത്ത്",
                headings: ["പ്രകൃതി വർണ്ണന", "കായൽ"],
              },
              {
                chapterNumber: 5,
                title: "വിശേഷണം",
                titleMl: "വിശേഷണം",
                headings: ["വ്യാകരണം", "വിശേഷണങ്ങൾ"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Term 2",
            titleMl: "രണ്ടാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "യാത്ര",
                titleMl: "യാത്ര",
                headings: ["യാത്രാവിവരണം"],
              },
              {
                chapterNumber: 2,
                title: "കുഞ്ഞുകൂട്ട്",
                titleMl: "കുഞ്ഞുകൂട്ട്",
                headings: ["കുട്ടികളുടെ ജീവിതം"],
              },
              {
                chapterNumber: 3,
                title: "ജലയോഗം",
                titleMl: "ജലയോഗം",
                headings: ["നീന്തൽ", "ജലം"],
              },
              {
                chapterNumber: 4,
                title: "ഓണം",
                titleMl: "ഓണം",
                headings: ["ഓണ ആഘോഷം", "പൂക്കളം"],
              },
            ],
          },
        ],
      },
      {
        name: "Mathematics",
        nameMl: "ഗണിതശാസ്ത്രം",
        code: "MATH",
        parts: [
          {
            partNumber: 1,
            title: "Term 1",
            titleMl: "ഒന്നാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "Large Numbers",
                titleMl: "വലിയ സംഖ്യകൾ",
                headings: ["Thousands", "Place Value", "Comparison"],
              },
              {
                chapterNumber: 2,
                title: "Addition and Subtraction",
                titleMl: "തുകകൂട്ടലും കിഴിക്കലും",
                headings: ["4 Digit Numbers", "Word Problems"],
              },
              {
                chapterNumber: 3,
                title: "Multiplication",
                titleMl: "ഗുണനം",
                headings: ["2 Digit Multiplier", "Properties"],
              },
              {
                chapterNumber: 4,
                title: "Division",
                titleMl: "ഭാഗഹരം",
                headings: ["Division with Remainder", "Long Division"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Term 2",
            titleMl: "രണ്ടാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "Fractions and Decimals",
                titleMl: "ഭിന്നങ്ങളും ദശമലങ്ങളും",
                headings: ["Equivalent Fractions", "Decimal Notation"],
              },
              {
                chapterNumber: 2,
                title: "Money and Time",
                titleMl: "പണവും സമയവും",
                headings: ["Currency", "Profit Loss", "Time"],
              },
              {
                chapterNumber: 3,
                title: "Measurement",
                titleMl: "അളക്കൽ",
                headings: ["Perimeter", "Area", "Volume"],
              },
              {
                chapterNumber: 4,
                title: "Geometry",
                titleMl: "ജ്യാമിതി",
                headings: ["Angles", "Lines", "Polygons"],
              },
            ],
          },
        ],
      },
      {
        name: "Environmental Studies",
        nameMl: "പരിസരപഠനം",
        code: "EVS",
        parts: [
          {
            partNumber: 1,
            title: "Term 1",
            titleMl: "ഒന്നാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "Our Village",
                titleMl: "നമ്മുടെ ഗ്രാമം",
                headings: ["Village Life", "Occupations"],
              },
              {
                chapterNumber: 2,
                title: "Clothes We Wear",
                titleMl: "നമ്മൾ ധരിക്കുന്ന വസ്ത്രങ്ങൾ",
                headings: ["Fabrics", "Materials"],
              },
              {
                chapterNumber: 3,
                title: "Things We Make and Do",
                titleMl: "നമ്മൾ ഉണ്ടാക്കുന്നതും ചെയ്യുന്നതും",
                headings: ["Crafts", "Activities"],
              },
              {
                chapterNumber: 4,
                title: "Services We Use",
                titleMl: "നമ്മൾ ഉപയോഗിക്കുന്ന സേവനങ്ങൾ",
                headings: ["Public Services", "Community Helpers"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Term 2",
            titleMl: "രണ്ടാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "Our Earth",
                titleMl: "നമ്മുടെ ഭൂമി",
                headings: ["Continents", "Oceans", "Globe"],
              },
              {
                chapterNumber: 2,
                title: "The World Around Us",
                titleMl: "നമുക്ക് ചുറ്റുമുള്ള ലോകം",
                headings: ["Environment", "Pollution"],
              },
              {
                chapterNumber: 3,
                title: "Sharing Our Planet",
                titleMl: "നമ്മുടെ ഗ്രഹം പങ്കിടുന്നു",
                headings: ["Wildlife", "Conservation"],
              },
              {
                chapterNumber: 4,
                title: "Travel and Tourism",
                titleMl: "യാത്രയും ടൂറിസവും",
                headings: ["Famous Places", "Tourism"],
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== CLASS 5 ====================
  {
    number: 5,
    name: "Class 5",
    description: "Fifth Standard - Kerala State Board",
    subjects: [
      {
        name: "English",
        nameMl: "ഇംഗ്ലീഷ്",
        code: "ENG",
        parts: [
          {
            partNumber: 1,
            title: "Term 1",
            titleMl: "ഒന്നാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "The Twins",
                titleMl: "ഇരട്ടകൾ",
                headings: ["Story", "Identity", "Individuality"],
              },
              {
                chapterNumber: 2,
                title: "Crying in the Chapel",
                titleMl: "ചാപ്പലിൽ കരയുന്നു",
                headings: ["Poetry", "Peace", "Prayer"],
              },
              {
                chapterNumber: 3,
                title: "Don Quixote",
                titleMl: "ഡോൺ ക്വിക്സോട്ട്",
                headings: ["Classic Literature", "Adventure"],
              },
              {
                chapterNumber: 4,
                title: "My Brother's Special Trousers",
                titleMl: "എന്റെ സഹോദരന്റെ പ്രത്യേക പാന്റ്സ്",
                headings: ["Humour", "Family"],
              },
              {
                chapterNumber: 5,
                title: "My Country",
                titleMl: "എന്റെ രാജ്യം",
                headings: ["Patriotism", "India", "Poetry"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Term 2",
            titleMl: "രണ്ടാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "The Old Man and the Market",
                titleMl: "വൃദ്ധനും മാർക്കറ്റും",
                headings: ["Story", "Experience", "Wisdom"],
              },
              {
                chapterNumber: 2,
                title: "Saving the Children",
                titleMl: "കുട്ടികളെ രക്ഷിക്കുന്നു",
                headings: ["Social Reform", "Kuriyedath Tatri"],
              },
              {
                chapterNumber: 3,
                title: "The Proud Street Dog",
                titleMl: "അഹങ്കാരിയായ നായ",
                headings: ["Fable", "Pride", "Humility"],
              },
              {
                chapterNumber: 4,
                title: "Trees",
                titleMl: "മരങ്ങൾ",
                headings: ["Poetry", "Nature", "Environment"],
              },
              {
                chapterNumber: 5,
                title: "A Great Inventor",
                titleMl: "ഒരു മഹാനായ ആവിഷ്കാരകൻ",
                headings: ["Invention", "Innovation", "Thomas Edison"],
              },
            ],
          },
        ],
      },
      {
        name: "Malayalam",
        nameMl: "മലയാളം",
        code: "ML",
        parts: [
          {
            partNumber: 1,
            title: "Term 1",
            titleMl: "ഒന്നാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "ജൈവവൈവിധ്യം",
                titleMl: "ജൈവവൈവിധ്യം",
                headings: ["പ്രകൃതി", "സസ്യങ്ങൾ", "മൃഗങ്ങൾ"],
              },
              {
                chapterNumber: 2,
                title: "നീലക്കുയിൽ",
                titleMl: "നീലക്കുയിൽ",
                headings: ["കവിത", "പക്ഷി"],
              },
              {
                chapterNumber: 3,
                title: "മരുഭൂമി",
                titleMl: "മരുഭൂമി",
                headings: ["മരുപ്രദേശം", "ജീവികൾ"],
              },
              {
                chapterNumber: 4,
                title: "നാടൻ പാട്ടുകൾ",
                titleMl: "നാടൻ പാട്ടുകൾ",
                headings: ["ലോകഗാനങ്ങൾ", "ജനപ്രിയഗാനങ്ങൾ"],
              },
              {
                chapterNumber: 5,
                title: "ഭാവന",
                titleMl: "ഭാവന",
                headings: ["കഥ", "കല്പന"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Term 2",
            titleMl: "രണ്ടാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "ജീവിതഗന്ധം",
                titleMl: "ജീവിതഗന്ധം",
                headings: ["ജീവിതാനുഭവം"],
              },
              {
                chapterNumber: 2,
                title: "കവിതകൾ",
                titleMl: "കവിതകൾ",
                headings: ["ഖണ്ഡകവിതകൾ"],
              },
              {
                chapterNumber: 3,
                title: "സംഭാഷണം",
                titleMl: "സംഭാഷണം",
                headings: ["സംഭാഷണ രചന"],
              },
              {
                chapterNumber: 4,
                title: "വ്യാകരണം",
                titleMl: "വ്യാകരണം",
                headings: ["വിഭക്തി", "ക്രിയ", "നാമം"],
              },
            ],
          },
        ],
      },
      {
        name: "Mathematics",
        nameMl: "ഗണിതശാസ്ത്രം",
        code: "MATH",
        parts: [
          {
            partNumber: 1,
            title: "Term 1",
            titleMl: "ഒന്നാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "Knowing Our Numbers",
                titleMl: "നമ്മുടെ സംഖ്യകൾ അറിയാം",
                headings: ["Large Numbers", "Roman Numerals", "Estimation"],
              },
              {
                chapterNumber: 2,
                title: "Whole Numbers",
                titleMl: "പൂർണ്ണ സംഖ്യകൾ",
                headings: ["Number Line", "Properties", "Patterns"],
              },
              {
                chapterNumber: 3,
                title: "Playing with Numbers",
                titleMl: "സംഖ്യകളുമായി കളിക്കാം",
                headings: ["Factors", "Multiples", "Prime Numbers"],
              },
              {
                chapterNumber: 4,
                title: "Basic Geometrical Ideas",
                titleMl: "ജ്യാമിതിയുടെ അടിസ്ഥാന ആശയങ്ങൾ",
                headings: ["Points", "Lines", "Angles", "Shapes"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Term 2",
            titleMl: "രണ്ടാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "Fractions",
                titleMl: "ഭിന്നങ്ങൾ",
                headings: ["Proper Fractions", "Improper", "Mixed Numbers"],
              },
              {
                chapterNumber: 2,
                title: "Decimals",
                titleMl: "ദശമലങ്ങൾ",
                headings: ["Decimal Place Value", "Operations"],
              },
              {
                chapterNumber: 3,
                title: "Data Handling",
                titleMl: "ഡാറ്റ കൈകാര്യം",
                headings: ["Pictograph", "Bar Graph", "Average"],
              },
              {
                chapterNumber: 4,
                title: "Measurements",
                titleMl: "അളക്കലുകൾ",
                headings: ["Length", "Weight", "Capacity", "Conversions"],
              },
            ],
          },
        ],
      },
      {
        name: "Environmental Studies",
        nameMl: "പരിസരപഠനം",
        code: "EVS",
        parts: [
          {
            partNumber: 1,
            title: "Term 1",
            titleMl: "ഒന്നാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "Knowing Our Surroundings",
                titleMl: "നമ്മുടെ ചുറ്റുപാട് അറിയാം",
                headings: ["Local Area", "Map Reading"],
              },
              {
                chapterNumber: 2,
                title: "Human Body and Health",
                titleMl: "മനുഷ്യശരീരവും ആരോഗ്യവും",
                headings: ["Organ Systems", "Hygiene", "Diseases"],
              },
              {
                chapterNumber: 3,
                title: "Our Country - India",
                titleMl: "നമ്മുടെ രാജ്യം - ഇന്ത്യ",
                headings: ["States", "Capitals", "Geography"],
              },
              {
                chapterNumber: 4,
                title: "Food and Nutrition",
                titleMl: "ഭക്ഷണവും പോഷണവും",
                headings: ["Balanced Diet", "Nutrients", "Deficiency"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Term 2",
            titleMl: "രണ്ടാം ടേം",
            chapters: [
              {
                chapterNumber: 1,
                title: "Shelter",
                titleMl: "ഭവനം",
                headings: ["Types of Shelter", "Animal Shelters"],
              },
              {
                chapterNumber: 2,
                title: "Water",
                titleMl: "ജലം",
                headings: ["Water Cycle", "Rainwater Harvesting", "Purification"],
              },
              {
                chapterNumber: 3,
                title: "Waste Management",
                titleMl: "മാലിന്യ സംസ്കരണം",
                headings: ["Waste Sorting", "Recycling", "Composting"],
              },
              {
                chapterNumber: 4,
                title: "Natural Resources",
                titleMl: "പ്രകൃതിവിഭവങ്ങൾ",
                headings: ["Forests", "Minerals", "Conservation"],
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== CLASS 6 ====================
  {
    number: 6,
    name: "Class 6",
    description: "Sixth Standard - Kerala State Board",
    subjects: [
      {
        name: "English",
        nameMl: "ഇംഗ്ലീഷ്",
        code: "ENG",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "Who Did Patrick's Homework?",
                titleMl: "പാട്രിക്കിന്റെ ഹോംവർക്ക് ആര് ചെയ്തു?",
                headings: ["Imagination", "Effort", "Homework"],
              },
              {
                chapterNumber: 2,
                title: "How the Dog Found Himself a New Master",
                titleMl: "നായ എങ്ങനെ ഒരു പുതിയ യജമാനനെ കണ്ടെത്തി",
                headings: ["Fable", "Loyalty", "Contentment"],
              },
              {
                chapterNumber: 3,
                title: "Taro's Reward",
                titleMl: "താറോയുടെ സമ്മാനം",
                headings: ["Folk Tale", "Filial Piety", "Japan"],
              },
              {
                chapterNumber: 4,
                title: "An Indian-American Woman in Space",
                titleMl: "ഇടവിളയിൽ ഒരു ഇന്ത്യൻ-അമേരിക്കൻ വനിത",
                headings: ["Kalpana Chawla", "Space", "Inspiration"],
              },
              {
                chapterNumber: 5,
                title: "A Different Kind of School",
                titleMl: "മറ്റൊരു തരം സ്കൂൾ",
                headings: ["Inclusive Education", "Empathy", "Helen Keller"],
              },
              {
                chapterNumber: 6,
                title: "Who I Am",
                titleMl: "ഞാൻ ആരാണ്",
                headings: ["Identity", "Self-Discovery", "Poetry"],
              },
              {
                chapterNumber: 7,
                title: "Fair Play",
                titleMl: "ന്യായമായ കളി",
                headings: ["Sportsmanship", "Justice", "Brotherhood"],
              },
              {
                chapterNumber: 8,
                title: "The Banyan Tree",
                titleMl: "ആൽമരം",
                headings: ["Nature", "Childhood", "Story"],
              },
              {
                chapterNumber: 9,
                title: "The Wonder Called Sleep",
                titleMl: "ഉറക്കം എന്ന അത്ഭുതം",
                headings: ["Sleep", "Science", "Dreams"],
              },
              {
                chapterNumber: 10,
                title: "The Sound of the Musical Instruments",
                titleMl: "സംഗീതോപകരണങ്ങളുടെ ശബ്ദം",
                headings: ["Music", "Instruments", "Culture"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 1,
                title: "What Happened to the Protectors of Ploughing",
                titleMl: "കൃഷി സംരക്ഷകർക്ക് എന്ത് സംഭവിച്ചു",
                headings: ["Agriculture", "Farming"],
              },
              {
                chapterNumber: 2,
                title: "The Squirrel",
                titleMl: "ഉറുമ്പ്",
                headings: ["Poetry", "Nature", "Animal Behaviour"],
              },
              {
                chapterNumber: 3,
                title: "A House, A Home",
                titleMl: "ഒരു വീട്, ഒരു ആഹ്ലാദം",
                headings: ["Home", "Family", "Poetry"],
              },
              {
                chapterNumber: 4,
                title: "Virdika - The Story of a Jute Bag",
                titleMl: "വീർദിക്ക - ഒരു ചണ സഞ്ചിയുടെ കഥ",
                headings: ["Eco-friendly", "Recycling"],
              },
              {
                chapterNumber: 5,
                title: "Tolstoy and the Black Bag",
                titleMl: "ടോൾസ്റ്റോയിയും കറുത്ത ബാഗും",
                headings: ["Tolstoy", "Story", "Wisdom"],
              },
            ],
          },
        ],
      },
      {
        name: "Malayalam",
        nameMl: "മലയാളം",
        code: "ML",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "അക്ഷരം",
                titleMl: "അക്ഷരം",
                headings: ["അക്ഷരങ്ങളുടെ ചരിത്രം", "ലിപി"],
              },
              {
                chapterNumber: 2,
                title: "മഴ",
                titleMl: "മഴ",
                headings: ["കവിത", "മഴയുടെ വർണ്ണന"],
              },
              {
                chapterNumber: 3,
                title: "നന്മ",
                titleMl: "നന്മ",
                headings: ["നീതികഥ", "ധാർമികത"],
              },
              {
                chapterNumber: 4,
                title: "ഭാഷാ പരിചയം",
                titleMl: "ഭാഷാ പരിചയം",
                headings: ["വ്യാകരണം", "വാക്യം"],
              },
              {
                chapterNumber: 5,
                title: "പ്രകൃതി",
                titleMl: "പ്രകൃതി",
                headings: ["പ്രകൃതി വർണ്ണന", "സസ്യങ്ങൾ"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 1,
                title: "കഥകൾ",
                titleMl: "കഥകൾ",
                headings: ["ചെറുകഥകൾ", "നോവലെറ്റുകൾ"],
              },
              {
                chapterNumber: 2,
                title: "കവിതാ സമാഹാരം",
                titleMl: "കവിതാ സമാഹാരം",
                headings: ["കവിതകൾ", "ഗദ്യം"],
              },
              {
                chapterNumber: 3,
                title: "ചരിത്രം",
                titleMl: "ചരിത്രം",
                headings: ["കേരള ചരിത്രം", "സ്വാതന്ത്ര്യ സമരം"],
              },
              {
                chapterNumber: 4,
                title: "ഭാഷാ പ്രയോഗം",
                titleMl: "ഭാഷാ പ്രയോഗം",
                headings: ["ലഘുകഥ", "ലേഖനം", "വാർത്ത"],
              },
            ],
          },
        ],
      },
      {
        name: "Mathematics",
        nameMl: "ഗണിതശാസ്ത്രം",
        code: "MATH",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "Knowing Our Numbers",
                titleMl: "നമ്മുടെ സംഖ്യകൾ അറിയാം",
                headings: ["Large Numbers", "Place Value", "Estimation", "Roman Numerals"],
              },
              {
                chapterNumber: 2,
                title: "Whole Numbers",
                titleMl: "പൂർണ്ണ സംഖ്യകൾ",
                headings: ["Number Line", "Properties of Whole Numbers", "Patterns"],
              },
              {
                chapterNumber: 3,
                title: "Playing with Numbers",
                titleMl: "സംഖ്യകളുമായി കളിക്കാം",
                headings: ["Factors and Multiples", "Prime and Composite", "LCM", "HCF"],
              },
              {
                chapterNumber: 4,
                title: "Basic Geometrical Ideas",
                titleMl: "ജ്യാമിതിയുടെ അടിസ്ഥാന ആശയങ്ങൾ",
                headings: ["Points", "Lines", "Rays", "Segments", "Angles"],
              },
              {
                chapterNumber: 5,
                title: "Understanding Elementary Shapes",
                titleMl: "അടിസ്ഥാന രൂപങ്ങൾ മനസ്സിലാക്കാം",
                headings: ["2D Shapes", "3D Shapes", "Types of Angles"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 1,
                title: "Integers",
                titleMl: "പൂർണ്ണ സംഖ്യകൾ",
                headings: ["Positive Numbers", "Negative Numbers", "Number Line"],
              },
              {
                chapterNumber: 2,
                title: "Fractions",
                titleMl: "ഭിന്നങ്ങൾ",
                headings: ["Proper", "Improper", "Mixed", "Number Line", "Operations"],
              },
              {
                chapterNumber: 3,
                title: "Decimals",
                titleMl: "ദശമലങ്ങൾ",
                headings: ["Place Value", "Comparison", "Operations"],
              },
              {
                chapterNumber: 4,
                title: "Data Handling",
                titleMl: "ഡാറ്റ കൈകാര്യം ചെയ്യൽ",
                headings: ["Pictograph", "Bar Graph", "Pie Chart"],
              },
              {
                chapterNumber: 5,
                title: "Mensuration",
                titleMl: "അളക്കൽ",
                headings: ["Perimeter", "Area", "Formulas"],
              },
            ],
          },
        ],
      },
      {
        name: "Science",
        nameMl: "ശാസ്ത്രം",
        code: "SCI",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "Food: Where Does It Come From?",
                titleMl: "ഭക്ഷണം: ഇത് എവിടെ നിന്ന് വരുന്നു?",
                headings: ["Food Sources", "Plant Parts as Food", "Animals as Food"],
              },
              {
                chapterNumber: 2,
                title: "Components of Food",
                titleMl: "ഭക്ഷണത്തിന്റെ ഘടകങ്ങൾ",
                headings: ["Nutrients", "Carbohydrates", "Proteins", "Fats", "Vitamins"],
              },
              {
                chapterNumber: 3,
                title: "Fibre to Fabric",
                titleMl: "നാര് മുതൽ തുണിവരെ",
                headings: ["Fibres", "Plant Fibres", "Animal Fibres", "Weaving"],
              },
              {
                chapterNumber: 4,
                title: "Sorting Materials into Groups",
                titleMl: "വസ്തുക്കൾ ഗ്രൂപ്പുകളായി തിരിക്കൽ",
                headings: ["States of Matter", "Properties", "Solubility"],
              },
              {
                chapterNumber: 6,
                title: "Changes Around Us",
                titleMl: "നമുക്ക് ചുറ്റുമുള്ള മാറ്റങ്ങൾ",
                headings: ["Reversible Changes", "Irreversible Changes"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 7,
                title: "Getting to Know Plants",
                titleMl: "സസ്യങ്ങളെ അറിയാം",
                headings: ["Herbs", "Shrubs", "Trees", "Parts of Plants"],
              },
              {
                chapterNumber: 8,
                title: "Body Movements",
                titleMl: "ശരീര ചലനങ്ങൾ",
                headings: ["Joints", "Skeletal System", "Muscles"],
              },
              {
                chapterNumber: 9,
                title: "The Living Organisms and Their Surroundings",
                titleMl: "ജീവികളും അവയുടെ ചുറ്റുപാടും",
                headings: ["Habitat", "Adaptation", "Land and Water Organisms"],
              },
              {
                chapterNumber: 11,
                title: "Light, Shadows and Reflections",
                titleMl: "പ്രകാശവും നിഴലും പ്രതിബിംബവും",
                headings: ["Light Sources", "Transparent", "Opaque", "Mirrors"],
              },
              {
                chapterNumber: 13,
                title: "Water: A Precious Resource",
                titleMl: "ജലം: ഒരു വിലപ്പെട്ട വിഭവം",
                headings: ["Water Cycle", "Groundwater", "Water Scarcity"],
              },
            ],
          },
        ],
      },
      {
        name: "Social Science",
        nameMl: "സോഷ്യൽ സയൻസ്",
        code: "SS",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "What, Where, How and When?",
                titleMl: "എന്ത്, എവിടെ, എങ്ങനെ, എപ്പോൾ?",
                headings: ["History", "Sources", "Chronology"],
              },
              {
                chapterNumber: 2,
                title: "On the Trail of the Earliest People",
                titleMl: "ഏറ്റവും ആദ്യത്തെ മനുഷ്യരുടെ പാദചിഹ്നത്തിൽ",
                headings: ["Stone Age", "Early Humans", "Tools"],
              },
              {
                chapterNumber: 3,
                title: "From Gathering to Growing Food",
                titleMl: "ശേഖരണത്തിൽ നിന്ന് കൃഷിയിലേക്ക്",
                headings: ["Agriculture", "Neolithic Revolution"],
              },
              {
                chapterNumber: 4,
                title: "In the Earliest Cities",
                titleMl: "ഏറ്റവും പുരാതന നഗരങ്ങളിൽ",
                headings: ["Indus Valley", "Harappa", "Mohenjo-daro"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 1,
                title: "The Earth in the Solar System",
                titleMl: "സൗരയൂഥത്തിലെ ഭൂമി",
                headings: ["Solar System", "Planets", "Moon", "Stars"],
              },
              {
                chapterNumber: 2,
                title: "Globe: Latitudes and Longitudes",
                titleMl: "ഭൂമിഗോളം: അക്ഷാംശവും രേഖാംശവും",
                headings: ["Latitude", "Longitude", "Equator", "Poles"],
              },
              {
                chapterNumber: 3,
                title: "Motions of the Earth",
                titleMl: "ഭൂമിയുടെ ചലനങ്ങൾ",
                headings: ["Rotation", "Revolution", "Day and Night", "Seasons"],
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== CLASS 7 ====================
  {
    number: 7,
    name: "Class 7",
    description: "Seventh Standard - Kerala State Board",
    subjects: [
      {
        name: "English",
        nameMl: "ഇംഗ്ലീഷ്",
        code: "ENG",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "Three Questions",
                titleMl: "മൂന്ന് ചോദ്യങ്ങൾ",
                headings: ["Tolstoy", "Wisdom", "Present Moment"],
              },
              {
                chapterNumber: 2,
                title: "A Gift of Chappals",
                titleMl: "ചെപ്പലുകളുടെ സമ്മാനം",
                headings: ["Compassion", "Sharing", "Kindness"],
              },
              {
                chapterNumber: 3,
                title: "Gopal and the Hilsa Fish",
                titleMl: "ഗോപാലും ഹിൽസ മീനും",
                headings: ["Wit", "Wisdom", "Court"],
              },
              {
                chapterNumber: 4,
                title: "The Ashes That Made Trees Bloom",
                titleMl: "മരങ്ങൾ പൂവിടാൻ ചെയ്ത ചാരം",
                headings: ["Japanese Folktale", "Kindness", "Justice"],
              },
              {
                chapterNumber: 5,
                title: "Quality",
                titleMl: "ഗുണനിലവാരം",
                headings: ["Craftsmanship", "Shoemaker", "Quality"],
              },
              {
                chapterNumber: 6,
                title: "Expert Detectives",
                titleMl: "വൈദഗ്ധ്യമുള്ള അന്വേഷകർ",
                headings: ["Detective Story", "Problem Solving"],
              },
              {
                chapterNumber: 7,
                title: "The Invention of Vita-Wonk",
                titleMl: "വിറ്റ-വോങ്കിന്റെ കണ്ടുപിടിത്തം",
                headings: ["Roald Dahl", "Fantasy", "Invention"],
              },
              {
                chapterNumber: 8,
                title: "Fire: Friend and Foe",
                titleMl: "തീ: സുഹൃത്തും ശത്രുവും",
                headings: ["Fire", "Safety", "Science"],
              },
              {
                chapterNumber: 9,
                title: "A Bicycle in Good Repair",
                titleMl: "നല്ല അറ്റകുറ്റപ്പണിയുള്ള സൈക്കിൾ",
                headings: ["Humour", "Experience", "Machinery"],
              },
              {
                chapterNumber: 10,
                title: "The Story of Cricket",
                titleMl: "ക്രിക്കറ്റിന്റെ കഥ",
                headings: ["Cricket History", "Evolution of Sport"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 1,
                title: "A Cherry Blossom in Kyoto",
                titleMl: "ക്യോട്ടോയിലെ ഒരു ചെറി പൂവ്",
                headings: ["Travel", "Japan", "Culture"],
              },
              {
                chapterNumber: 2,
                title: "The Cop and the Anthem",
                titleMl: "പോലീസുകാരനും ദേശീയഗാനവും",
                headings: ["O. Henry", "Irony", "Story"],
              },
              {
                chapterNumber: 3,
                title: "Great Stories Come Alive",
                titleMl: "മഹാന്മാരുടെ കഥകൾ ജീവസ്സുറ്റതാകുന്നു",
                headings: ["Literature", "Storytelling"],
              },
              {
                chapterNumber: 4,
                title: "Garden Fence",
                titleMl: "തോട്ടത്തിന്റെ വേലി",
                headings: ["Nature", "Boundaries", "Poetry"],
              },
            ],
          },
        ],
      },
      {
        name: "Malayalam",
        nameMl: "മലയാളം",
        code: "ML",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "ബന്ധുക്കൾ",
                titleMl: "ബന്ധുക്കൾ",
                headings: ["കഥ", "കുടുംബബന്ധം"],
              },
              {
                chapterNumber: 2,
                title: "മഴനീല",
                titleMl: "മഴനീല",
                headings: ["കവിത", "പ്രകൃതി"],
              },
              {
                chapterNumber: 3,
                title: "പുതുമഴ",
                titleMl: "പുതുമഴ",
                headings: ["കഥ", "മഴക്കാലം"],
              },
              {
                chapterNumber: 4,
                title: "ജീവിതം",
                titleMl: "ജീവിതം",
                headings: ["കവിത", "ജീവിതചിന്ത"],
              },
              {
                chapterNumber: 5,
                title: "കേരളീയം",
                titleMl: "കേരളീയം",
                headings: ["കേരള സംസ്കാരം", "ചരിത്രം"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 1,
                title: "കഥകൾ",
                titleMl: "കഥകൾ",
                headings: ["ചെറുകഥകൾ", "തീര്ച്ചന്മാരുടെ കഥ"],
              },
              {
                chapterNumber: 2,
                title: "കവിതാ സമാഹാരം",
                titleMl: "കവിതാ സമാഹാരം",
                headings: ["ആധുനിക കവിതകൾ"],
              },
              {
                chapterNumber: 3,
                title: "ലേഖനങ്ങൾ",
                titleMl: "ലേഖനങ്ങൾ",
                headings: ["പ്രബന്ധം", "റിപ്പോർട്ട്"],
              },
              {
                chapterNumber: 4,
                title: "വ്യാകരണം",
                titleMl: "വ്യാകരണം",
                headings: ["വാക്യം", "സമാസം", "വിശേഷണം"],
              },
            ],
          },
        ],
      },
      {
        name: "Mathematics",
        nameMl: "ഗണിതശാസ്ത്രം",
        code: "MATH",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "Integers",
                titleMl: "പൂർണ്ണ സംഖ്യകൾ",
                headings: ["Addition", "Subtraction", "Multiplication", "Division of Integers"],
              },
              {
                chapterNumber: 2,
                title: "Fractions and Decimals",
                titleMl: "ഭിന്നങ്ങളും ദശമലങ്ങളും",
                headings: ["Multiplication of Fractions", "Division of Decimals"],
              },
              {
                chapterNumber: 3,
                title: "Data Handling",
                titleMl: "ഡാറ്റ കൈകാര്യം ചെയ്യൽ",
                headings: ["Mean", "Median", "Mode", "Bar Graph", "Probability"],
              },
              {
                chapterNumber: 4,
                title: "Simple Equations",
                titleMl: "ലളിത സമവാക്യങ്ങൾ",
                headings: ["Variables", "Equations", "Solving Equations"],
              },
              {
                chapterNumber: 5,
                title: "Lines and Angles",
                titleMl: "രേഖകളും കോണുകളും",
                headings: ["Complementary", "Supplementary", "Vertically Opposite", "Parallel Lines"],
              },
              {
                chapterNumber: 6,
                title: "The Triangle and its Properties",
                titleMl: "ത്രികോണവും അതിന്റെ ഗുണങ്ങളും",
                headings: ["Angle Sum Property", "Exterior Angle", "Pythagoras Theorem"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 7,
                title: "Congruence of Triangles",
                titleMl: "ത്രികോണങ്ങളുടെ സമത്വം",
                headings: ["SSS", "SAS", "ASA", "RHS Congruence"],
              },
              {
                chapterNumber: 8,
                title: "Comparing Quantities",
                titleMl: "അളവുകൾ താരതമ്യം ചെയ്യൽ",
                headings: ["Ratio", "Proportion", "Percentage", "Profit Loss"],
              },
              {
                chapterNumber: 9,
                title: "Rational Numbers",
                titleMl: "ബീജഗണിത സംഖ്യകൾ",
                headings: ["Properties", "Number Line", "Operations"],
              },
              {
                chapterNumber: 10,
                title: "Practical Geometry",
                titleMl: "പ്രായോഗിക ജ്യാമിതി",
                headings: ["Construction", "Bisector", "Perpendicular"],
              },
              {
                chapterNumber: 11,
                title: "Perimeter and Area",
                titleMl: "ചുറ്റളവും വ്യാപ്തിയും",
                headings: ["Rectangle", "Triangle", "Parallelogram", "Circle"],
              },
              {
                chapterNumber: 12,
                title: "Algebraic Expressions",
                titleMl: "ബീജഗണിത വ്യഞ്ജകങ്ങൾ",
                headings: ["Terms", "Coefficients", "Like Terms", "Addition"],
              },
            ],
          },
        ],
      },
      {
        name: "Science",
        nameMl: "ശാസ്ത്രം",
        code: "SCI",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "Nutrition in Plants",
                titleMl: "സസ്യങ്ങളിലെ പോഷണം",
                headings: ["Photosynthesis", "Autotrophs", "Heterotrophs", "Parasites"],
              },
              {
                chapterNumber: 2,
                title: "Nutrition in Animals",
                titleMl: "മൃഗങ്ങളിലെ പോഷണം",
                headings: ["Digestive System", "Digestion Process", "Organs"],
              },
              {
                chapterNumber: 3,
                title: "Fibre to Fabric",
                titleMl: "നാര് മുതൽ തുണിവരെ",
                headings: ["Silk", "Wool", "Processing Fibres"],
              },
              {
                chapterNumber: 4,
                title: "Heat",
                titleMl: "ചൂട്",
                headings: ["Conduction", "Convection", "Radiation", "Thermometer"],
              },
              {
                chapterNumber: 5,
                title: "Acids, Bases and Salts",
                titleMl: "ആസിഡുകൾ, ബേസുകൾ, ഉപ്പുകൾ",
                headings: ["Indicators", "Neutralization", "Properties"],
              },
              {
                chapterNumber: 6,
                title: "Physical and Chemical Changes",
                titleMl: "ഭൗതികവും രാസപരവുമായ മാറ്റങ്ങൾ",
                headings: ["Reversible", "Irreversible", "Rusting", "Crystallization"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 7,
                title: "Weather, Climate and Adaptations",
                titleMl: "കാലാവസ്ഥ, പ്രകൃതി, പൊരുത്തപ്പെടൽ",
                headings: ["Weather", "Climate", "Adaptations"],
              },
              {
                chapterNumber: 8,
                title: "Winds, Storms and Cyclones",
                titleMl: "കാറ്റ്, കൊടുങ്കാറ്റ്, ചുഴലിക്കാറ്റ്",
                headings: ["Air Pressure", "Wind", "Cyclone", "Disaster Management"],
              },
              {
                chapterNumber: 9,
                title: "Soil",
                titleMl: "മണ്ണ്",
                headings: ["Types of Soil", "Soil Properties", "Soil Erosion"],
              },
              {
                chapterNumber: 10,
                title: "Respiration in Organisms",
                titleMl: "ജീവികളിലെ ശ്വസനം",
                headings: ["Breathing", "Respiratory System", "Aerobic", "Anaerobic"],
              },
              {
                chapterNumber: 11,
                title: "Transportation in Animals and Plants",
                titleMl: "മൃഗങ്ങളിലും സസ്യങ്ങളിലും ഗതാഗതം",
                headings: ["Circulatory System", "Heart", "Transport in Plants"],
              },
              {
                chapterNumber: 12,
                title: "Reproduction in Plants",
                titleMl: "സസ്യങ്ങളിലെ പ്രജനനം",
                headings: ["Asexual Reproduction", "Sexual Reproduction", "Seeds", "Flowers"],
              },
            ],
          },
        ],
      },
      {
        name: "Social Science",
        nameMl: "സോഷ്യൽ സയൻസ്",
        code: "SS",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "Tracing Changes Through a Thousand Years",
                titleMl: "ആയിരം വർഷങ്ങളിലൂടെ മാറ്റങ്ങൾ",
                headings: ["Medieval Period", "Sources", "Historiography"],
              },
              {
                chapterNumber: 2,
                title: "New Kings and Kingdoms",
                titleMl: "പുതിയ രാജാക്കന്മാരും രാജ്യങ്ങളും",
                headings: ["Cholas", "Palas", "Pratiharas", "Administration"],
              },
              {
                chapterNumber: 3,
                title: "The Delhi Sultans",
                titleMl: "ഡൽഹി സുൽത്താന്മാർ",
                headings: ["Slave Dynasty", "Khilji", "Tughlaq", "Administration"],
              },
              {
                chapterNumber: 4,
                title: "The Mughal Empire",
                titleMl: "മുഘൽ സാമ്രാജ്യം",
                headings: ["Babur", "Akbar", "Architecture", "Culture"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 1,
                title: "Environment",
                titleMl: "പരിസരം",
                headings: ["Natural Environment", "Biotic", "Abiotic", "Ecosystem"],
              },
              {
                chapterNumber: 2,
                title: "Inside Our Earth",
                titleMl: "നമ്മുടെ ഭൂമിക്കുള്ളിൽ",
                headings: ["Layers of Earth", "Rocks", "Minerals", "Volcanic Activity"],
              },
              {
                chapterNumber: 3,
                title: "Our Changing Earth",
                titleMl: "മാറുന്ന നമ്മുടെ ഭൂമി",
                headings: ["Plate Tectonics", "Earthquakes", "Weathering", "Erosion"],
              },
              {
                chapterNumber: 4,
                title: "Air",
                titleMl: "വായു",
                headings: ["Atmosphere", "Composition", "Air Pollution"],
              },
              {
                chapterNumber: 5,
                title: "Water",
                titleMl: "ജലം",
                headings: ["Water Cycle", "Ocean Currents", "Water Scarcity", "Conservation"],
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== CLASS 8 ====================
  {
    number: 8,
    name: "Class 8",
    description: "Eighth Standard - Kerala State Board",
    subjects: [
      {
        name: "English",
        nameMl: "ഇംഗ്ലീഷ്",
        code: "ENG",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "The Best Christmas Present in the World",
                titleMl: "ലോകത്തിലെ ഏറ്റവും നല്ല ക്രിസ്മസ് സമ്മാനം",
                headings: ["War", "Letters", "Friendship", "History"],
              },
              {
                chapterNumber: 2,
                title: "The Tsunami",
                titleMl: "സുനാമി",
                headings: ["Natural Disaster", "Survival", "2004 Tsunami"],
              },
              {
                chapterNumber: 3,
                title: "Glimpses of the Past",
                titleMl: "കഴിഞ്ഞകാലത്തിന്റെ ഝലകങ്ങൾ",
                headings: ["Indian History", "Freedom Struggle", "Social Reforms"],
              },
              {
                chapterNumber: 4,
                title: "Bepin Choudhury's Lapse of Memory",
                titleMl: "ബേപ്പിൻ ചൗധരിയുടെ ഓർമ്മ നഷ്ടം",
                headings: ["Satyajit Ray", "Mystery", "Story"],
              },
              {
                chapterNumber: 5,
                title: "The Summit Within",
                titleMl: "ഉള്ളിലെ ശിഖരം",
                headings: ["Mountaineering", "Courage", "Inner Strength"],
              },
              {
                chapterNumber: 6,
                title: "This Is Jody's Fawn",
                titleMl: "ഇത് ജോഡിയുടെ മാൻ കുട്ടിയാണ്",
                headings: ["Compassion", "Animals", "Story"],
              },
              {
                chapterNumber: 7,
                title: "A Visit to Cambridge",
                titleMl: "കേംബ്രിഡ്ജിലേക്കുള്ള സന്ദർശനം",
                headings: ["Stephen Hawking", "Inspiration", "Determination"],
              },
              {
                chapterNumber: 8,
                title: "A Short Monsoon Diary",
                titleMl: "ഒരു ചെറിയ മഴക്കാല ഡയറി",
                headings: ["Monsoon", "Nature", "Ruskin Bond"],
              },
              {
                chapterNumber: 9,
                title: "The Great Stone Face - I",
                titleMl: "മഹാൻ കല്ലുമുഖം - I",
                headings: ["Hawthorne", "Character", "Kindness"],
              },
              {
                chapterNumber: 10,
                title: "The Great Stone Face - II",
                titleMl: "മഹാൻ കല്ലുമുഖം - II",
                headings: ["Conclusion", "Moral", "Character"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 1,
                title: "The Third Level",
                titleMl: "മൂന്നാമത്തെ നില",
                headings: ["Jack Finney", "Science Fiction", "Time Travel"],
              },
              {
                chapterNumber: 2,
                title: "The Old Army Horse",
                titleMl: "പഴയ സൈനിക കുതിര",
                headings: ["War Horse", "Loyalty", "History"],
              },
              {
                chapterNumber: 3,
                title: "Pack Rat",
                titleMl: "പാക്ക് റാറ്റ്",
                headings: ["Hoarding", "Minimalism", "Story"],
              },
              {
                chapterNumber: 4,
                title: "The Treasure Within",
                titleMl: "ഉള്ളിലെ നിധി",
                headings: ["Learning", "Education", "Inspiration"],
              },
            ],
          },
        ],
      },
      {
        name: "Malayalam",
        nameMl: "മലയാളം",
        code: "ML",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "അമ്മ",
                titleMl: "അമ്മ",
                headings: ["കവിത", "മാതൃത്വം"],
              },
              {
                chapterNumber: 2,
                title: "വെള്ളാന കളി",
                titleMl: "വെള്ളാന കളി",
                headings: ["കഥ", "ജീവിതം"],
              },
              {
                chapterNumber: 3,
                title: "ജീവിതം",
                titleMl: "ജീവിതം",
                headings: ["നിരീക്ഷണം", "ചിന്ത"],
              },
              {
                chapterNumber: 4,
                title: "കണ്ണാടി",
                titleMl: "കണ്ണാടി",
                headings: ["കവിത", "ചിന്ത"],
              },
              {
                chapterNumber: 5,
                title: "കേരളപാണിനീയം",
                titleMl: "കേരളപാണിനീയം",
                headings: ["കേരള ചരിത്രം", "സംസ്കാരം"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 1,
                title: "യാത്രക്കാരൻ",
                titleMl: "യാത്രക്കാരൻ",
                headings: ["കഥ", "യാത്ര"],
              },
              {
                chapterNumber: 2,
                title: "കവിതകൾ",
                titleMl: "കവിതകൾ",
                headings: ["ആധുനിക കവിതകൾ"],
              },
              {
                chapterNumber: 3,
                title: "ഭാഷാ പ്രയോഗം",
                titleMl: "ഭാഷാ പ്രയോഗം",
                headings: ["സംഭാഷണം", "ലേഖനം"],
              },
              {
                chapterNumber: 4,
                title: "ചരിത്രം",
                titleMl: "ചരിത്രം",
                headings: ["കേരള ചരിത്രം", "സ്വാതന്ത്ര്യ സമരം"],
              },
            ],
          },
        ],
      },
      {
        name: "Mathematics",
        nameMl: "ഗണിതശാസ്ത്രം",
        code: "MATH",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "Rational Numbers",
                titleMl: "ബീജഗണിത സംഖ്യകൾ",
                headings: ["Properties", "Operations", "Number Line", "Reciprocals"],
              },
              {
                chapterNumber: 2,
                title: "Linear Equations in One Variable",
                titleMl: "ഒരു ചരത്തിലെ രേഖീയ സമവാക്യങ്ങൾ",
                headings: ["Solving Equations", "Cross Multiplication", "Word Problems"],
              },
              {
                chapterNumber: 3,
                title: "Understanding Quadrilaterals",
                titleMl: "ചതുർഭുജങ്ങൾ മനസ്സിലാക്കാം",
                headings: ["Types", "Properties", "Angle Sum", "Parallelogram"],
              },
              {
                chapterNumber: 4,
                title: "Practical Geometry",
                titleMl: "പ്രായോഗിക ജ്യാമിതി",
                headings: ["Construction", "Given Conditions", "Quadrilaterals"],
              },
              {
                chapterNumber: 5,
                title: "Data Handling",
                titleMl: "ഡാറ്റ കൈകാര്യം ചെയ്യൽ",
                headings: ["Pie Chart", "Probability", "Organizing Data"],
              },
              {
                chapterNumber: 6,
                title: "Squares and Square Roots",
                titleMl: "വർഗ്ഗങ്ങളും വർഗ്ഗമൂലങ്ങളും",
                headings: ["Square Numbers", "Patterns", "Square Root", "Estimation"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 7,
                title: "Cubes and Cube Roots",
                titleMl: "ഘനങ്ങളും ഘനമൂലങ്ങളും",
                headings: ["Cube Numbers", "Patterns", "Cube Root"],
              },
              {
                chapterNumber: 8,
                title: "Comparing Quantities",
                titleMl: "അളവുകൾ താരതമ്യം ചെയ്യൽ",
                headings: ["Percentage", "Profit Loss", "Discount", "Compound Interest"],
              },
              {
                chapterNumber: 9,
                title: "Algebraic Expressions and Identities",
                titleMl: "ബീജഗണിത വ്യഞ്ജകങ്ങളും സമവാക്യങ്ങളും",
                headings: ["Like Terms", "Addition", "Multiplication", "Identities"],
              },
              {
                chapterNumber: 10,
                title: "Visualising Solid Shapes",
                titleMl: "ഘന രൂപങ്ങൾ കാണുന്നു",
                headings: ["3D Shapes", "Faces", "Edges", "Vertices", "Euler's Formula"],
              },
              {
                chapterNumber: 11,
                title: "Mensuration",
                titleMl: "അളക്കൽ",
                headings: ["Area", "Volume", "Surface Area", "Capacity"],
              },
              {
                chapterNumber: 12,
                title: "Exponents and Powers",
                titleMl: "ഘാതങ്ങളും ഘാതസംഖ്യകളും",
                headings: ["Laws of Exponents", "Negative Exponents", "Standard Form"],
              },
              {
                chapterNumber: 14,
                title: "Factorisation",
                titleMl: "ഘടക സംഖ്യാഗണന",
                headings: ["Common Factors", "Algebraic Expressions", "Division"],
              },
              {
                chapterNumber: 15,
                title: "Introduction to Graphs",
                titleMl: "ഗ്രാഫുകളുടെ ആമുഖം",
                headings: ["Bar Graph", "Line Graph", "Pie Chart", "Coordinates"],
              },
              {
                chapterNumber: 16,
                title: "Playing with Numbers",
                titleMl: "സംഖ്യകളുമായി കളിക്കാം",
                headings: ["Number Patterns", "Divisibility Rules", "Games"],
              },
            ],
          },
        ],
      },
      {
        name: "Science",
        nameMl: "ശാസ്ത്രം",
        code: "SCI",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "Crop Production and Management",
                titleMl: "വിള ഉത്പാദനവും കൈകാര്യം ചെയ്യലും",
                headings: ["Agricultural Practices", "Irrigation", "Fertilizers", "Harvesting"],
              },
              {
                chapterNumber: 2,
                title: "Microorganisms",
                titleMl: "സൂക്ഷ്മജീവികൾ",
                headings: ["Bacteria", "Virus", "Fungi", "Uses", "Harmful Effects"],
              },
              {
                chapterNumber: 3,
                title: "Synthetic Fibres and Plastics",
                titleMl: "സിന്തറ്റിക് നാരുകളും പ്ലാസ്റ്റിക്കും",
                headings: ["Types", "Properties", "Environmental Impact"],
              },
              {
                chapterNumber: 4,
                title: "Materials: Metals and Non-Metals",
                titleMl: "വസ്തുക്കൾ: ലോഹങ്ങളും അല്ലോഹങ്ങളും",
                headings: ["Properties", "Reactivity", "Uses", "Alloys"],
              },
              {
                chapterNumber: 5,
                title: "Coal and Petroleum",
                titleMl: "കല്ലുക്കരിയും പെട്രോളിയവും",
                headings: ["Fossil Fuels", "Formation", "Uses", "Conservation"],
              },
              {
                chapterNumber: 7,
                title: "Conservation of Plants and Animals",
                titleMl: "സസ്യങ്ങളും മൃഗങ്ങളും സംരക്ഷണം",
                headings: ["Biodiversity", "Deforestation", "Endangered Species", "Sanctuaries"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 9,
                title: "Reproduction in Animals",
                titleMl: "മൃഗങ്ങളിലെ പ്രജനനം",
                headings: ["Sexual Reproduction", "Asexual Reproduction", "Fertilization"],
              },
              {
                chapterNumber: 10,
                title: "Reaching the Age of Adolescence",
                titleMl: "കൗമാരപ്രായത്തിലേക്ക്",
                headings: ["Puberty", "Changes", "Hormones", "Adolescence"],
              },
              {
                chapterNumber: 11,
                title: "Force and Pressure",
                titleMl: "ബലവും മർദ്ദവും",
                headings: ["Types of Force", "Pressure", "Atmospheric Pressure", "Buoyancy"],
              },
              {
                chapterNumber: 12,
                title: "Friction",
                titleMl: "ഘർഷണം",
                headings: ["Types", "Factors", "Increasing Friction", "Reducing Friction"],
              },
              {
                chapterNumber: 13,
                title: "Sound",
                titleMl: "ശബ്ദം",
                headings: ["Production", "Propagation", "Echo", "Noise", "Sound Waves"],
              },
              {
                chapterNumber: 14,
                title: "Chemical Effects of Electric Current",
                titleMl: "വൈദ്യുതധാരയുടെ രാസ പ്രഭാവം",
                headings: ["Conductors", "Electroplating", "Electrolysis"],
              },
              {
                chapterNumber: 15,
                title: "Some Natural Phenomena",
                titleMl: "ചില പ്രകൃതിദത്ത പ്രതിഭാസങ്ങൾ",
                headings: ["Lightning", "Earthquake", "Disaster Management"],
              },
              {
                chapterNumber: 16,
                title: "Light",
                titleMl: "പ്രകാശം",
                headings: ["Reflection", "Laws of Reflection", "Mirrors", "Prism", "Dispersion"],
              },
            ],
          },
        ],
      },
      {
        name: "Social Science",
        nameMl: "സോഷ്യൽ സയൻസ്",
        code: "SS",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "How, When and Where",
                titleMl: "എങ്ങനെ, എപ്പോൾ, എവിടെ",
                headings: ["History", "Dates", "Periodization", "Colonial Records"],
              },
              {
                chapterNumber: 2,
                title: "From Trade to Territory",
                titleMl: "വ്യാപാരത്തിൽ നിന്ന് പ്രദേശത്തിലേക്ക്",
                headings: ["East India Company", "Battle of Plassey", "Doctrine of Lapse"],
              },
              {
                chapterNumber: 3,
                title: "Ruling the Countryside",
                titleMl: "ഗ്രാമങ്ങൾ ഭരിക്കുന്നു",
                headings: ["Permanent Settlement", "Ryotwari", "Mahalwari", "Indigo"],
              },
              {
                chapterNumber: 4,
                title: "Tribals, Dikus and the Vision of a Golden Age",
                titleMl: "വനവാസികൾ, ദികുകൾ, സ്വർണ യുഗത്തിന്റെ ദർശനം",
                headings: ["Tribal Society", "Colonial Impact", "Revolts"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 1,
                title: "Resources and Development",
                titleMl: "വിഭവങ്ങളും വികസനവും",
                headings: ["Types of Resources", "Land Use", "Soil", "Conservation"],
              },
              {
                chapterNumber: 2,
                title: "Land, Soil, Water, Natural Vegetation and Wildlife",
                titleMl: "ഭൂമി, മണ്ണ്, ജലം, പ്രകൃതിദത്ത സസ്യജാലങ്ങൾ",
                headings: ["Land Use", "Soil Types", "Water Resources", "Wildlife"],
              },
              {
                chapterNumber: 3,
                title: "Mineral and Power Resources",
                titleMl: "ധാതുക്കളും ഊർജ്ജ വിഭവങ്ങളും",
                headings: ["Minerals", "Fuels", "Conventional Energy", "Non-conventional Energy"],
              },
              {
                chapterNumber: 4,
                title: "Agriculture",
                titleMl: "കൃഷി",
                headings: ["Types of Farming", "Crops", "Irrigation", "Green Revolution"],
              },
              {
                chapterNumber: 5,
                title: "Industries",
                titleMl: "വ്യവസായങ്ങൾ",
                headings: ["Types", "Location Factors", "Agro-based", "Mineral-based"],
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== CLASS 9 ====================
  {
    number: 9,
    name: "Class 9",
    description: "Ninth Standard - Kerala State Board",
    subjects: [
      {
        name: "English",
        nameMl: "ഇംഗ്ലീഷ്",
        code: "ENG",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "The Fun They Had",
                titleMl: "അവർ ആസ്വദിച്ച രസം",
                headings: ["Isaac Asimov", "Future of Education", "Technology"],
              },
              {
                chapterNumber: 2,
                title: "The Sound of Music",
                titleMl: "സംഗീതത്തിന്റെ ശബ്ദം",
                headings: ["Evelyn Glennie", "Bismillah Khan", "Music"],
              },
              {
                chapterNumber: 3,
                title: "The Little Girl",
                titleMl: "ചെറിയ പെൺകുട്ടി",
                headings: ["Katherine Mansfield", "Childhood", "Fear and Love"],
              },
              {
                chapterNumber: 4,
                title: "A Truly Beautiful Mind",
                titleMl: "യഥാർത്ഥത്തിൽ സുന്ദരമായ മനസ്സ്",
                headings: ["Albert Einstein", "Genius", "Imagination"],
              },
              {
                chapterNumber: 5,
                title: "The Snake and the Mirror",
                titleMl: "പാമ്പും കണ്ണാടിയും",
                headings: ["Vaikom Muhammad Basheer", "Humour", "Self-reflection"],
              },
              {
                chapterNumber: 6,
                title: "My Childhood",
                titleMl: "എന്റെ ബാല്യകാലം",
                headings: ["A.P.J. Abdul Kalam", "Early Life", "Inspiration"],
              },
              {
                chapterNumber: 7,
                title: "Packing",
                titleMl: "പാക്കിംഗ്",
                headings: ["Jerome K. Jerome", "Humour", "Adventure"],
              },
              {
                chapterNumber: 8,
                title: "Reach for the Top",
                titleMl: "ഉച്ചസ്ഥായിയിലേക്ക്",
                headings: ["Santosh Yadav", "Mary Kom", "Achievement"],
              },
              {
                chapterNumber: 9,
                title: "The Bond of Love",
                titleMl: "സ്നേഹബന്ധം",
                headings: ["Kenneth Anderson", "Animals", "Compassion"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 1,
                title: "The Happy Prince",
                titleMl: "സന്തോഷമുള്ള രാജാവ്",
                headings: ["Oscar Wilde", "Sacrifice", "Compassion"],
              },
              {
                chapterNumber: 2,
                title: "Weathering the Storm in Ersama",
                titleMl: "എർസാമയിൽ കൊടുങ്കാറ്റ് അതിജീവിക്കുന്നു",
                headings: ["Orissa Cyclone", "Survival", "Hope"],
              },
              {
                chapterNumber: 3,
                title: "The Story of My Life",
                titleMl: "എന്റെ ജീവിതത്തിന്റെ കഥ",
                headings: ["Helen Keller", "Courage", "Determination"],
              },
              {
                chapterNumber: 4,
                title: "A Legend of the Northland",
                titleMl: "വടക്കൻ നാടിന്റെ ഒരു ഐതിഹ്യം",
                headings: ["Phoebe Cary", "Generosity", "Punishment"],
              },
              {
                chapterNumber: 5,
                title: "No Men Are Foreign",
                titleMl: "യാതൊരു മനുഷ്യനും വിദേശികളല്ല",
                headings: ["James Kirkup", "Universal Brotherhood", "Peace"],
              },
              {
                chapterNumber: 6,
                title: "On Killing a Tree",
                titleMl: "ഒരു മരം കൊല്ലുന്നത്",
                headings: ["Gieve Patel", "Environment", "Trees"],
              },
              {
                chapterNumber: 7,
                title: "A Slumber Did My Spirit Seal",
                titleMl: "ഒരു മയക്കം എന്റെ ആത്മാവിനെ മുദ്ര ചെയ്തു",
                headings: ["William Wordsworth", "Death", "Immortality"],
              },
              {
                chapterNumber: 8,
                title: "The Lake Isle of Innisfree",
                titleMl: "ഇന്നിസ്ഫ്രീയുടെ തോട്ടുകര ദ്വീപ്",
                headings: ["W.B. Yeats", "Nature", "Peace", "Longing"],
              },
            ],
          },
        ],
      },
      {
        name: "Malayalam",
        nameMl: "മലയാളം",
        code: "ML",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "പ്രകൃതിയോട് സംവദിക്കുമ്പോൾ",
                titleMl: "പ്രകൃതിയോട് സംവദിക്കുമ്പോൾ",
                headings: ["കവിത", "പ്രകൃതി വർണ്ണന"],
              },
              {
                chapterNumber: 2,
                title: "ഇരുളും വെളിച്ചവും",
                titleMl: "ഇരുളും വെളിച്ചവും",
                headings: ["കവിത", "ഇരുൾ", "വെളിച്ചം"],
              },
              {
                chapterNumber: 3,
                title: "ശാപമോക്ഷം",
                titleMl: "ശാപമോക്ഷം",
                headings: ["നോവലെറ്റ്", "VS", "കേരള ചരിത്രം"],
              },
              {
                chapterNumber: 4,
                title: "നാരീമണി",
                titleMl: "നാരീമണി",
                headings: ["കവിത", "സ്ത്രീ സാന്നിധ്യം"],
              },
              {
                chapterNumber: 5,
                title: "മുല്ല",
                titleMl: "മുല്ല",
                headings: ["നാടകം", "കാളിദാസൻ"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 1,
                title: "കഥകൾ",
                titleMl: "കഥകൾ",
                headings: ["ചെറുകഥകൾ", "ആധുനിക കഥ"],
              },
              {
                chapterNumber: 2,
                title: "ലേഖനങ്ങൾ",
                titleMl: "ലേഖനങ്ങൾ",
                headings: ["പ്രബന്ധം", "ശാസ്ത്രലേഖനം"],
              },
              {
                chapterNumber: 3,
                title: "കവിതാ സമാഹാരം",
                titleMl: "കവിതാ സമാഹാരം",
                headings: ["ആധുനിക കവിത", "�ാവകവിത"],
              },
              {
                chapterNumber: 4,
                title: "ഭാഷാ പ്രയോഗം",
                titleMl: "ഭാഷാ പ്രയോഗം",
                headings: ["വ്യാകരണം", "ലഘുരചനകൾ"],
              },
            ],
          },
        ],
      },
      {
        name: "Mathematics",
        nameMl: "ഗണിതശാസ്ത്രം",
        code: "MATH",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "Number Systems",
                titleMl: "സംഖ്യാ പദ്ധതികൾ",
                headings: ["Real Numbers", "Irrational Numbers", "Number Line", "Roots"],
              },
              {
                chapterNumber: 2,
                title: "Polynomials",
                titleMl: "ബഹുപദങ്ങൾ",
                headings: ["Polynomials", "Degree", "Factor Theorem", "Algebraic Identities"],
              },
              {
                chapterNumber: 3,
                title: "Coordinate Geometry",
                titleMl: "കോ-ഓർഡിനേറ്റ് ജ്യാമിതി",
                headings: ["Cartesian Plane", "Plotting Points", "Quadrants"],
              },
              {
                chapterNumber: 4,
                title: "Linear Equations in Two Variables",
                titleMl: "രണ്ട് ചരങ്ങളിലെ രേഖീയ സമവാക്യങ്ങൾ",
                headings: ["Solutions", "Graphing", "Consistency"],
              },
              {
                chapterNumber: 5,
                title: "Introduction to Euclid's Geometry",
                titleMl: "യൂക്ലിഡിന്റെ ജ്യാമിതി - ആമുഖം",
                headings: ["Axioms", "Postulates", "Proofs"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 6,
                title: "Lines and Angles",
                titleMl: "രേഖകളും കോണുകളും",
                headings: ["Angle Relationships", "Parallel Lines", "Transversal"],
              },
              {
                chapterNumber: 7,
                title: "Triangles",
                titleMl: "ത്രികോണങ്ങൾ",
                headings: ["Congruence", "Inequalities", "Median", "Altitude"],
              },
              {
                chapterNumber: 8,
                title: "Quadrilaterals",
                titleMl: "ചതുർഭുജങ്ങൾ",
                headings: ["Types", "Properties", "Parallelogram", "Mid-point Theorem"],
              },
              {
                chapterNumber: 9,
                title: "Areas of Parallelograms and Triangles",
                titleMl: "സമാന്തര ചതുർഭുജങ്ങളുടെയും ത്രികോണങ്ങളുടെയും വ്യാപ്തി",
                headings: ["Area Formulas", "Same Base", "Between Parallels"],
              },
              {
                chapterNumber: 10,
                title: "Circles",
                titleMl: "വൃത്തങ്ങൾ",
                headings: ["Chord", "Arc", "Angle in Circle", "Cyclic Quadrilateral"],
              },
              {
                chapterNumber: 12,
                title: "Heron's Formula",
                titleMl: "ഹീറോയുടെ സൂത്രവാക്യം",
                headings: ["Area of Triangle", "Semiperimeter"],
              },
              {
                chapterNumber: 13,
                title: "Surface Areas and Volumes",
                titleMl: "ഉപരിതല വ്യാപ്തിയും വ്യാപ്തിയും",
                headings: ["Cuboid", "Cube", "Cylinder", "Cone", "Sphere"],
              },
              {
                chapterNumber: 14,
                title: "Statistics",
                titleMl: "സ്ഥിതിശാസ്ത്രം",
                headings: ["Mean", "Median", "Mode", "Cumulative Frequency"],
              },
              {
                chapterNumber: 15,
                title: "Probability",
                titleMl: "സാധ്യത",
                headings: ["Experiments", "Events", "Probability Formula"],
              },
            ],
          },
        ],
      },
      {
        name: "Science",
        nameMl: "ശാസ്ത്രം",
        code: "SCI",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "Matter in Our Surroundings",
                titleMl: "നമ്മുടെ ചുറ്റുപാടിലെ പദാർത്ഥം",
                headings: ["States of Matter", "Interparticle Space", "Temperature", "Evaporation"],
              },
              {
                chapterNumber: 2,
                title: "Is Matter Around Us Pure?",
                titleMl: "നമുക്ക് ചുറ്റുമുള്ള പദാർത്ഥം ശുദ്ധമാണോ?",
                headings: ["Mixtures", "Pure Substances", "Separation Methods", "Colloids"],
              },
              {
                chapterNumber: 3,
                title: "Atoms and Molecules",
                titleMl: "ആറ്റങ്ങളും അണുക്കളും",
                headings: ["Dalton's Theory", "Atomic Mass", "Molecular Mass", "Mole Concept"],
              },
              {
                chapterNumber: 4,
                title: "Structure of the Atom",
                titleMl: "ആറ്റിന്റെ ഘടന",
                headings: ["Subatomic Particles", "Bohr's Model", "Electronic Configuration"],
              },
              {
                chapterNumber: 5,
                title: "The Fundamental Unit of Life",
                titleMl: "ജീവന്റെ അടിസ്ഥാന യൂണിറ്റ്",
                headings: ["Cell Structure", "Organelles", "Cell Division", "Osmosis"],
              },
              {
                chapterNumber: 6,
                title: "Tissues",
                titleMl: "കലകൾ",
                headings: ["Plant Tissues", "Animal Tissues", "Types", "Functions"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 7,
                title: "Diversity in Living Organisms",
                titleMl: "ജീവികളിലെ വൈവിധ്യം",
                headings: ["Classification", "Taxonomy", "Kingdoms", "Evolution"],
              },
              {
                chapterNumber: 8,
                title: "Motion",
                titleMl: "ചലനം",
                headings: ["Distance", "Displacement", "Velocity", "Acceleration", "Graphs"],
              },
              {
                chapterNumber: 9,
                title: "Force and Laws of Motion",
                titleMl: "ബലവും ചലന നിയമങ്ങളും",
                headings: ["Newton's Laws", "Momentum", "Inertia", "Friction"],
              },
              {
                chapterNumber: 10,
                title: "Gravitation",
                titleMl: "ഗുരുത്വാകർഷണം",
                headings: ["Newton's Law", "Free Fall", "Weight", "Mass", "Buoyancy"],
              },
              {
                chapterNumber: 11,
                title: "Work and Energy",
                titleMl: "ജോലിയും ഊർജ്ജവും",
                headings: ["Work", "Power", "Kinetic Energy", "Potential Energy", "Conservation"],
              },
              {
                chapterNumber: 12,
                title: "Sound",
                titleMl: "ശബ്ദം",
                headings: ["Sound Production", "Wave Propagation", "Echo", "Frequency", "Noise"],
              },
              {
                chapterNumber: 13,
                title: "Why Do We Fall Ill?",
                titleMl: "നമ്മൾ എന്തുകൊണ്ട് അസുഖപ്പെടുന്നു?",
                headings: ["Diseases", "Infection", "Immunity", "Hygiene", "Epidemics"],
              },
            ],
          },
        ],
      },
      {
        name: "Social Science",
        nameMl: "സോഷ്യൽ സയൻസ്",
        code: "SS",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "The French Revolution",
                titleMl: "ഫ്രഞ്ച് വിപ്ലവം",
                headings: ["Causes", "Reign of Terror", "Napoleon", "Impact"],
              },
              {
                chapterNumber: 2,
                title: "Socialism in Europe and the Russian Revolution",
                titleMl: "യൂറോപ്പിലെ സോഷ്യലിസവും റഷ്യൻ വിപ്ലവവും",
                headings: ["Industrial Revolution", "Marx", "Lenin", "October Revolution"],
              },
              {
                chapterNumber: 3,
                title: "Nazism and the Rise of Hitler",
                titleMl: "നാസിസവും ഹിറ്റ്ലറുടെ ഉയർച്ചയും",
                headings: ["Hitler", "Holocaust", "World War II", "Nazi Germany"],
              },
              {
                chapterNumber: 4,
                title: "Forest Society and Colonialism",
                titleMl: "വന സമൂഹവും ഉപനിവേശ ഭരണവും",
                headings: ["Deforestation", "Colonial Forest Policy", "Tribal Life"],
              },
              {
                chapterNumber: 5,
                title: "Pastoralists in the Modern World",
                titleMl: "ആധുനിക ലോകത്തിലെ ഇടയ്ക്കിടയ്ക്ക് കൂടുമാറുന്നവർ",
                headings: ["Nomadic Life", "Colonial Policies", "Modern Changes"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 1,
                title: "India - Size and Location",
                titleMl: "ഇന്ത്യ - വലുപ്പവും സ്ഥാനവും",
                headings: ["Location", "Size", "Borders", "Time Zones"],
              },
              {
                chapterNumber: 2,
                title: "Physical Features of India",
                titleMl: "ഇന്ത്യയുടെ ഭൌതിക സവിശേഷതകൾ",
                headings: ["Himalayas", "Northern Plains", "Peninsular Plateau", "Coasts"],
              },
              {
                chapterNumber: 3,
                title: "Drainage",
                titleMl: "ജലനിർഗ്ഗമനം",
                headings: ["Rivers", "Basins", "Watershed", "Himalayan Rivers", "Peninsular Rivers"],
              },
              {
                chapterNumber: 4,
                title: "Climate",
                titleMl: "കാലാവസ്ഥ",
                headings: ["Monsoon", "Factors", "Seasons", "Distribution"],
              },
              {
                chapterNumber: 5,
                title: "Natural Vegetation and Wild Life",
                titleMl: "പ്രകൃതിദത്ത സസ്യജാലങ്ങളും വന്യജീവികളും",
                headings: ["Forest Types", "Wildlife", "Conservation", "Biosphere Reserves"],
              },
              {
                chapterNumber: 6,
                title: "Population",
                titleMl: "ജനസംഖ്യ",
                headings: ["Growth", "Distribution", "Density", "Census", "Age Composition"],
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== CLASS 10 ====================
  {
    number: 10,
    name: "Class 10",
    description: "Tenth Standard - Kerala State Board",
    subjects: [
      {
        name: "English",
        nameMl: "ഇംഗ്ലീഷ്",
        code: "ENG",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "A Letter to God",
                titleMl: "ദൈവത്തിനുള്ള കത്ത്",
                headings: ["G.L. Fuentes", "Faith", "Irony", "Humour"],
              },
              {
                chapterNumber: 2,
                title: "Nelson Mandela: Long Walk to Freedom",
                titleMl: "നെൽസൺ മാൻഡേല: സ്വാതന്ത്ര്യത്തിലേക്കുള്ള നീണ്ട നടപ്പ്",
                headings: ["Autobiography", "Apartheid", "Freedom Struggle", "Leadership"],
              },
              {
                chapterNumber: 3,
                title: "Two Stories about Flying",
                titleMl: "പറക്കലിനെക്കുറിച്ച് രണ്ട് കഥകൾ",
                headings: ["Black Aeroplane", "Iowa", "Courage", "Adventure"],
              },
              {
                chapterNumber: 4,
                title: "From the Diary of Anne Frank",
                titleMl: "ആൻ ഫ്രാങ്കിന്റെ ഡയറിയിൽ നിന്ന്",
                headings: ["Diary", "Holocaust", "War", "Childhood"],
              },
              {
                chapterNumber: 5,
                title: "The Hundred Dresses - I",
                titleMl: "നൂറ് ഉടുപ്പുകൾ - I",
                headings: ["Eleanor Estes", "Bullying", "Empathy", "Compassion"],
              },
              {
                chapterNumber: 6,
                title: "The Hundred Dresses - II",
                titleMl: "നൂറ് ഉടുപ്പുകൾ - II",
                headings: ["Consequence", "Guilt", "Kindness", "Resolution"],
              },
              {
                chapterNumber: 7,
                title: "Glimpses of India",
                titleMl: "ഇന്ത്യയുടെ ഝലകങ്ങൾ",
                headings: ["Coorg", "Kerala Tea", "Goa", "Assam Tea"],
              },
              {
                chapterNumber: 8,
                title: "Mijbil the Otter",
                titleMl: "ഓട്ടർ മിജ്ബിൽ",
                headings: ["Gavin Maxwell", "Pets", "Otters", "Companionship"],
              },
              {
                chapterNumber: 9,
                title: "Madam Rides the Bus",
                titleMl: "മാഡം ബസ്സിൽ യാത്ര ചെയ്യുന്നു",
                headings: ["Valliammai", "Curiosity", "Adventure", "Childhood"],
              },
              {
                chapterNumber: 10,
                title: "The Sermon at Benares",
                titleMl: "ബേനാരസിലെ പ്രഭോധനം",
                headings: ["Buddha", "Kisa Gotami", "Death", "Grief", "Suffering"],
              },
              {
                chapterNumber: 11,
                title: "The Proposal",
                titleMl: "പ്രൊപ്പോസൽ",
                headings: ["Chekhov", "Comedy", "Marriage", "Social Status"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 1,
                title: "A Triumph of Surgery",
                titleMl: "ശസ്ത്രക്രിയയുടെ വിജയം",
                headings: ["Jerome K. Jerome", "Humour", "Animals", "Treatment"],
              },
              {
                chapterNumber: 2,
                title: "The Thief's Story",
                titleMl: "കള്ളന്റെ കഥ",
                headings: ["Anil", "Hari Singh", "Trust", "Redemption"],
              },
              {
                chapterNumber: 3,
                title: "Footprints Without Feet",
                titleMl: "പാദചിഹ്നങ്ങളില്ലാത്ത കാൽപ്പാടുകൾ",
                headings: ["H.G. Wells", "Science Fiction", "Invisibility"],
              },
              {
                chapterNumber: 4,
                title: "The Necklace",
                titleMl: "മാല",
                headings: ["Guy de Maupassant", "Vanity", "Sacrifice", "Irony"],
              },
              {
                chapterNumber: 5,
                title: "The Hack Driver",
                titleMl: "ഹാക്ക് ഡ്രൈവർ",
                headings: ["Sinclair Lewis", "Humour", "Small Town Life"],
              },
              {
                chapterNumber: 6,
                title: "Bholi",
                titleMl: "ഭോലി",
                headings: ["Education", "Empowerment", "Courage", "Social Reform"],
              },
              {
                chapterNumber: 7,
                title: "The Book That Saved the Earth",
                titleMl: "ഭൂമിയെ രക്ഷിച്ച പുസ്തകം",
                headings: ["Science Fiction", "Humour", "Books", "Mars"],
              },
              {
                chapterNumber: 8,
                title: "Miracles",
                titleMl: "അത്ഭുതങ്ങൾ",
                headings: ["Walter de la Mare", "Poetry", "Wonder"],
              },
              {
                chapterNumber: 9,
                title: "The Ballad of Father and Son",
                titleMl: "പിതാവിന്റെയും പുത്രന്റെയും ബാലഡ്",
                headings: ["Relationship", "Poetry", "Bond"],
              },
              {
                chapterNumber: 10,
                title: "Not Marble, Nor the Gilded Monuments",
                titleMl: "പാറയും സ്വർണ്ണാലങ്കരിച്ച സ്മാരകങ്ങളും അല്ല",
                headings: ["Shakespeare", "Sonnet", "Immortality", "Poetry"],
              },
            ],
          },
        ],
      },
      {
        name: "Malayalam",
        nameMl: "മലയാളം",
        code: "ML",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "ഖദീജ",
                titleMl: "ഖദീജ",
                headings: ["കവിത", "സ്ത്രീ ശാക്തീകരണം"],
              },
              {
                chapterNumber: 2,
                title: "കടൽ",
                titleMl: "കടൽ",
                headings: ["കവിത", "പ്രകൃതി വർണ്ണന"],
              },
              {
                chapterNumber: 3,
                title: "സ്വാതന്ത്ര്യം",
                titleMl: "സ്വാതന്ത്ര്യം",
                headings: ["കവിത", "രാഷ്ട്രീയം"],
              },
              {
                chapterNumber: 4,
                title: "ഓർമ്മയുടെ തീരത്ത്",
                titleMl: "ഓർമ്മയുടെ തീരത്ത്",
                headings: ["കഥ", "ഓർമ്മകൾ"],
              },
              {
                chapterNumber: 5,
                title: "വിവേകാനന്ദൻ",
                titleMl: "വിവേകാനന്ദൻ",
                headings: ["ജീവചരിത്രം", "ദർശനം"],
              },
              {
                chapterNumber: 6,
                title: "തോട്ടുവാരം",
                titleMl: "തോട്ടുവാരം",
                headings: ["കവിത", "ഗ്രാമീണ ജീവിതം"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 1,
                title: "കഥകൾ",
                titleMl: "കഥകൾ",
                headings: ["നവോത്ഥാന കഥകൾ", "യാഥാർഥ്യവാദം"],
              },
              {
                chapterNumber: 2,
                title: "ലേഖനങ്ങൾ",
                titleMl: "ലേഖനങ്ങൾ",
                headings: ["ശാസ്ത്രലേഖനം", "സാമൂഹിക ലേഖനം"],
              },
              {
                chapterNumber: 3,
                title: "കവിതാ സമാഹാരം",
                titleMl: "കവിതാ സമാഹാരം",
                headings: ["പുതുകവിത", "ചങ്ങമ്പുഴ", "ഒളപ്പമണ്ണ"],
              },
              {
                chapterNumber: 4,
                title: "നാടകം",
                titleMl: "നാടകം",
                headings: ["ഒരു ചെറിയ നാടകം", "ജീവിതം"],
              },
              {
                chapterNumber: 5,
                title: "ഭാഷാ പ്രയോഗം",
                titleMl: "ഭാഷാ പ്രയോഗം",
                headings: ["വ്യാകരണം", "രചനാ വൈഭവം"],
              },
            ],
          },
        ],
      },
      {
        name: "Mathematics",
        nameMl: "ഗണിതശാസ്ത്രം",
        code: "MATH",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "Real Numbers",
                titleMl: "വാസ്തവ സംഖ്യകൾ",
                headings: ["Euclid's Division", "Fundamental Theorem", "LCM HCF", "Irrational Numbers"],
              },
              {
                chapterNumber: 2,
                title: "Polynomials",
                titleMl: "ബഹുപദങ്ങൾ",
                headings: ["Zeroes", "Division Algorithm", "Geometric Meaning"],
              },
              {
                chapterNumber: 3,
                title: "Pair of Linear Equations in Two Variables",
                titleMl: "രണ്ട് ചരങ്ങളിലെ രേഖീയ സമവാക്യങ്ങളുടെ ജോഡി",
                headings: ["Graphical Method", "Substitution", "Elimination", "Cross Multiplication"],
              },
              {
                chapterNumber: 4,
                title: "Quadratic Equations",
                titleMl: "ദ്വിഘാത സമവാക്യങ്ങൾ",
                headings: ["Standard Form", "Factorization", "Completing Square", "Quadratic Formula"],
              },
              {
                chapterNumber: 5,
                title: "Arithmetic Progressions",
                titleMl: "അരിത്മറ്റിക് പ്രോഗ്രഷൻ",
                headings: ["Common Difference", "nth Term", "Sum of n Terms"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 6,
                title: "Triangles",
                titleMl: "ത്രികോണങ്ങൾ",
                headings: ["Similarity", "AA Criterion", "BPT", "Areas"],
              },
              {
                chapterNumber: 7,
                title: "Coordinate Geometry",
                titleMl: "കോ-ഓർഡിനേറ്റ് ജ്യാമിതി",
                headings: ["Distance Formula", "Section Formula", "Area of Triangle"],
              },
              {
                chapterNumber: 8,
                title: "Introduction to Trigonometry",
                titleMl: "ത്രികോണമിതി - ആമുഖം",
                headings: ["Ratios", "Values", "Identities", "Complementary Angles"],
              },
              {
                chapterNumber: 9,
                title: "Some Applications of Trigonometry",
                titleMl: "ത്രികോണമിതിയുടെ ചില പ്രയോഗങ്ങൾ",
                headings: ["Heights and Distances", "Angle of Elevation", "Angle of Depression"],
              },
              {
                chapterNumber: 10,
                title: "Circles",
                titleMl: "വൃത്തങ്ങൾ",
                headings: ["Tangent", "Perpendicular", "Number of Tangents"],
              },
              {
                chapterNumber: 11,
                title: "Constructions",
                titleMl: "നിർമ്മാണങ്ങൾ",
                headings: ["Division of Line Segment", "Tangents to Circle", "Similar Triangles"],
              },
              {
                chapterNumber: 12,
                title: "Areas Related to Circles",
                titleMl: "വൃത്തങ്ങളുമായി ബന്ധമുള്ള വ്യാപ്തി",
                headings: ["Sector", "Segment", "Perimeter", "Composite Figures"],
              },
              {
                chapterNumber: 13,
                title: "Surface Areas and Volumes",
                titleMl: "ഉപരിതല വ്യാപ്തിയും വ്യാപ്തിയും",
                headings: ["Combination of Solids", "Frustum", "Conversion"],
              },
              {
                chapterNumber: 14,
                title: "Statistics",
                titleMl: "സ്ഥിതിശാസ്ത്രം",
                headings: ["Mean", "Median", "Mode", "Ogive", "Mode of Grouped Data"],
              },
              {
                chapterNumber: 15,
                title: "Probability",
                titleMl: "സാധ്യത",
                headings: ["Theoretical", "Experimental", "Events", "Complementary Events"],
              },
            ],
          },
        ],
      },
      {
        name: "Science",
        nameMl: "ശാസ്ത്രം",
        code: "SCI",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "Chemical Reactions and Equations",
                titleMl: "രാസ പ്രതികരണങ്ങളും സമവാക്യങ്ങളും",
                headings: ["Types", "Balancing", "Effects of Oxidation", "Corrosion", "Rancidity"],
              },
              {
                chapterNumber: 2,
                title: "Acids, Bases and Salts",
                titleMl: "ആസിഡുകൾ, ബേസുകൾ, ഉപ്പുകൾ",
                headings: ["Properties", "pH Scale", "Neutralization", "Salts", "Common Salt"],
              },
              {
                chapterNumber: 3,
                title: "Metals and Non-metals",
                titleMl: "ലോഹങ്ങളും അല്ലോഹങ്ങളും",
                headings: ["Properties", "Reactivity Series", "Ionic Compounds", "Extraction"],
              },
              {
                chapterNumber: 4,
                title: "Carbon and its Compounds",
                titleMl: "കാർബണും അതിന്റെ സംയോജനങ്ങളും",
                headings: ["Covalent Bond", "Hydrocarbons", "Functional Groups", "Soaps"],
              },
              {
                chapterNumber: 5,
                title: "Life Processes",
                titleMl: "ജീവൻ പ്രക്രിയകൾ",
                headings: ["Nutrition", "Respiration", "Transportation", "Excretion"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 6,
                title: "Control and Coordination",
                titleMl: "നിയന്ത്രണവും ഏകോപനവും",
                headings: ["Nervous System", "Hormones", "Brain", "Spinal Cord", "Reflex Action"],
              },
              {
                chapterNumber: 7,
                title: "How do Organisms Reproduce?",
                titleMl: "ജീവികൾ എങ്ങനെ പ്രജനനം ചെയ്യുന്നു?",
                headings: ["Asexual", "Sexual", "Human Reproduction", "Contraception"],
              },
              {
                chapterNumber: 8,
                title: "Heredity and Evolution",
                titleMl: "പാരമ്പര്യവും പരിണാമവും",
                headings: ["Inheritance", "Mendel", "Sex Determination", "Evolution", "Speciation"],
              },
              {
                chapterNumber: 9,
                title: "Light - Reflection and Refraction",
                titleMl: "പ്രകാശം - പ്രതിബിംബവും അപവർത്തനവും",
                headings: ["Laws of Reflection", "Mirrors", "Lens", "Refraction", "Snell's Law"],
              },
              {
                chapterNumber: 10,
                title: "The Human Eye and the Colourful World",
                titleMl: "മനുഷ്യ കണ്ണും വർണ്ണാഢ്യമായ ലോകവും",
                headings: ["Eye Structure", "Defects", "Prism", "Dispersion", "Scattering"],
              },
              {
                chapterNumber: 11,
                title: "Electricity",
                titleMl: "വൈദ്യുതി",
                headings: ["Current", "Ohm's Law", "Resistance", "Series", "Parallel", "Heating Effect"],
              },
              {
                chapterNumber: 12,
                title: "Magnetic Effects of Electric Current",
                titleMl: "വൈദ്യുതധാരയുടെ ചുംബക പ്രഭാവങ്ങൾ",
                headings: ["Magnetic Field", "Solenoid", "Electromagnetic Induction", "Motor", "Generator"],
              },
              {
                chapterNumber: 13,
                title: "Our Environment",
                titleMl: "നമ്മുടെ പരിസരം",
                headings: ["Ecosystem", "Food Chain", "Ozone Depletion", "Biodegradable", "Waste Management"],
              },
              {
                chapterNumber: 14,
                title: "Sustainable Management of Natural Resources",
                titleMl: "പ്രകൃതിവിഭവങ്ങളുടെ ദീർഘസ്ഥിര കൈകാര്യം",
                headings: ["Forest", "Water", "Coal", "Petroleum", "Conservation"],
              },
            ],
          },
        ],
      },
      {
        name: "Social Science",
        nameMl: "സോഷ്യൽ സയൻസ്",
        code: "SS",
        parts: [
          {
            partNumber: 1,
            title: "Part 1",
            titleMl: "ഭാഗം 1",
            chapters: [
              {
                chapterNumber: 1,
                title: "The Rise of Nationalism in Europe",
                titleMl: "യൂറോപ്പിലെ ദേശീയവാദത്തിന്റെ ഉയർച്ച",
                headings: ["French Revolution", "Nation State", "Unification", "Metternich"],
              },
              {
                chapterNumber: 2,
                title: "Nationalism in India",
                titleMl: "ഇന്ത്യയിലെ ദേശീയവാദം",
                headings: ["Congress", "Gandhi", "Non-cooperation", "Salt March", "Quit India"],
              },
              {
                chapterNumber: 3,
                title: "The Making of a Global World",
                titleMl: "ആഗോള ലോകത്തിന്റെ നിർമ്മാണം",
                headings: ["Silk Routes", "Colonialism", "Industrial Revolution", "WWI", "WWII"],
              },
              {
                chapterNumber: 4,
                title: "The Age of Industrialisation",
                titleMl: "വ്യവസായവൽക്കരണത്തിന്റെ കാലം",
                headings: ["Proto-industrialization", "Factory System", "Industrialisation in India"],
              },
              {
                chapterNumber: 5,
                title: "Print Culture and the Modern World",
                titleMl: "മുദ്രണ സംസ്കാരവും ആധുനിക ലോകവും",
                headings: ["Printing Press", "Newspapers", "Print Revolution", "Censorship"],
              },
            ],
          },
          {
            partNumber: 2,
            title: "Part 2",
            titleMl: "ഭാഗം 2",
            chapters: [
              {
                chapterNumber: 1,
                title: "Development",
                titleMl: "വികസനം",
                headings: ["GDP", "Per Capita Income", "HDI", "Sustainability", "Development Goals"],
              },
              {
                chapterNumber: 2,
                title: "Sectors of the Indian Economy",
                titleMl: "ഇന്ത്യൻ സമ്പദ്വ്യവസ്ഥയുടെ മേഖലകൾ",
                headings: ["Primary", "Secondary", "Tertiary", "Employment", "Informal Sector"],
              },
              {
                chapterNumber: 3,
                title: "Money and Credit",
                titleMl: "പണവും ക്രെഡിറ്റും",
                headings: ["Money", "Credit", "Banks", "Collateral", "Reserve Bank"],
              },
              {
                chapterNumber: 4,
                title: "Globalisation and the Indian Economy",
                titleMl: "ആഗോളവൽക്കരണവും ഇന്ത്യൻ സമ്പദ്വ്യവസ്ഥയും",
                headings: ["MNCs", "Liberalisation", "WTO", "Impact on India"],
              },
              {
                chapterNumber: 5,
                title: "Consumer Rights",
                titleMl: "ഉപഭോക്തൃ അവകാശങ്ങൾ",
                headings: ["Consumer Protection Act", "RTI", "Consumer Courts", "Safety"],
              },
            ],
          },
        ],
      },
    ],
  },
];

// Mark schemes for Class 9 & 10
export const markSchemes9_10 = [
  { classNumber: 9, subjectCode: "SS", totalMarks: 80, duration: 150 },
  { classNumber: 9, subjectCode: "MATH", totalMarks: 80, duration: 150 },
  { classNumber: 9, subjectCode: "ENG", totalMarks: 80, duration: 150 },
  { classNumber: 9, subjectCode: "SCI", totalMarks: 80, duration: 150 },
  { classNumber: 10, subjectCode: "SS", totalMarks: 80, duration: 150 },
  { classNumber: 10, subjectCode: "MATH", totalMarks: 80, duration: 150 },
  { classNumber: 10, subjectCode: "ENG", totalMarks: 80, duration: 150 },
  { classNumber: 10, subjectCode: "SCI", totalMarks: 80, duration: 150 },
  { classNumber: 10, subjectCode: "ML", totalMarks: 80, duration: 150 },
];

// Default mark schemes for other classes
export const defaultMarkSchemes = {
  1: { totalMarks: 50, duration: 60 },
  2: { totalMarks: 50, duration: 60 },
  3: { totalMarks: 50, duration: 90 },
  4: { totalMarks: 60, duration: 90 },
  5: { totalMarks: 60, duration: 90 },
  6: { totalMarks: 60, duration: 90 },
  7: { totalMarks: 70, duration: 120 },
  8: { totalMarks: 70, duration: 120 },
};
