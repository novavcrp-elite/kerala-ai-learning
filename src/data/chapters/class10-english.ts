// Class 10 English — Kerala SCERT 2025 Revised Syllabus
// Source: SCERT Kerala, samagra.kite.kerala.gov.in

export interface ChapterContent {
  chapterNumber: number;
  title: string;
  titleMl: string;
  author?: string;
  type: string; // prose, poetry, drama
  summary: string;
  summaryMl: string;
  characters?: string[];
  keyPoints: string[];
  keyPointsMl: string[];
  importantQuestions: { q: string; a: string; qMl: string; aMl: string }[];
  definitions?: { term: string; meaning: string; termMl: string; meaningMl: string }[];
  themes?: string[];
}

export const class10EnglishChapters: ChapterContent[] = [
  // ──── UNIT 1 ────
  {
    chapterNumber: 1,
    title: "A Very Old Man with Enormous Wings",
    titleMl: "വലിയ ചിറകുകളുള്ള വളരെ മുത്തശ്ശൻ",
    author: "Gabriel García Márquez",
    type: "prose",
    summary: "Avery Old Man with Enormous Wings is a magical realist short story by Gabriel García Márquez. The story begins when Pelayo and his wife Elisenda discover a very old man with enormous wings lying in their courtyard during a heavy rainstorm. Their newborn child is sick with a fever. A neighbour tells them the old man is an angel who has come for their sick child. They lock him in their chicken coop. A crowd gathers to see the angel. Father Gonzaga arrives and suspects the old man is not an angel because he does not speak Latin and looks too human. The old man is put on trial. People come from far away to see him and throw stones at him. Elisenda gets the idea to charge admission. They become rich. The old man heals people — a blind man grows three new teeth, a paralytic almost wins the lottery, and a leper's sores heal. Eventually the old man recovers his health and grows new feathers. One day he flies away. Elisenda watches him disappear over the horizon and feels relief that she will no longer have to deal with him.",
    summaryMl: "ഗബ്രിയേൽ ഗാർസിയ മാർക്വേസ് രചിച്ച മാജിക്കൽ റിയലിസം കഥ. പെലായോയും ഭാര്യ എലിസെൻഡയും കനത്ത മഴയുടെ സമയം തങ്ങളുടെ മുറ്റത്ത് വലിയ ചിറകുകളുള്ള ഒരു വളരെ മുത്തശ്ശനെ കണ്ടെത്തുന്നു. അവരുടെ കുഞ്ഞിന് പനിയാണ്. അയൽക്കാരി പറയുന്നു ഇത് കുഞ്ഞിനെ വരാൻ വന്ന മാലാഖയാണെന്ന്. അവർ അയാളെ കോഴിക്കൂട്ടിൽ പൂട്ടുന്നു. വൈദികൻ ഗോൺസാഗ സംശയിക്കുന്നു. ജനങ്ങൾ കാണാൻ വരുന്നു. എലിസെൻഡ പ്രവേശന ഫീസ് ഈടാക്കുന്നു. അവർ സമ്പന്നരാകുന്നു. മുത്തശ്ശൻ രോഗികളെ സൗഖ്യമാക്കുന്നു. ഒടുവിൽ ചിറക് വളർന്ന് അയാൾ പറന്നുപോകുന്നു.",
    characters: [
      "Pelayo (പെലായോ) — A poor man who finds the old man in his courtyard",
      "Elisenda (എലിസെൻഡ) — Pelayo's wife, practical and shrewd",
      "The Very Old Man (വളരെ മുത്തശ്ശൻ) — The mysterious old man with enormous wings, believed to be an angel",
      "Father Gonzaga (ഫാദർ ഗോൺസാഗ) — The parish priest who questions the old man's authenticity",
      "The Neighbour (അയൽക്കാരി) — The woman who declares the old man is an angel",
      "The Child (കുഞ്ഞ്) — Pelayo and Elisenda's sick newborn",
      "The Spider Woman (സ്പൈഡർ വുമൺ) — A woman who was transformed into a giant tarantula for disobeying her parents",
    ],
    keyPoints: [
      "Magical Realism: The story blends realistic and fantastical elements — an old man with wings appears in a normal village setting.",
      "Theme of Exploitation: Pelayo and Elisenda exploit the old man for money, charging admission to see him.",
      "Questioning of Faith: Father Gonzaga questions whether the old man is truly an angel because he doesn't conform to religious expectations.",
      "Human Cruelty: The villagers throw stones at the old man, burn him with a branding iron, and generally mistreat him.",
      "Contrast with Spider Woman: The spider woman attracts more visitors because she has a clear story, while the angel's origin is mysterious.",
      "Symbolism of Wings: The wings represent divinity, freedom, and the supernatural breaking into ordinary life.",
      "Irony: The family becomes wealthy through the old man, yet they treat him poorly.",
      "The old man eventually flies away — symbolizing the departure of wonder/miracles from a world that cannot appreciate them.",
      "Gabriel García Márquez uses this story to critique organized religion, human greed, and the treatment of the 'other'.",
    ],
    keyPointsMl: [
      "മാജിക്കൽ റിയലിസം: യഥാർത്ഥവും അത്ഭുതവുമായ ഘടകങ്ങൾ സമന്വയിപ്പിക്കുന്നു.",
      "ചൂഷണ പ്രമേയം: പെലായോയും എലിസെൻഡയും മുത്തശ്ശനെ പണത്തിനായി ഉപയോഗിക്കുന്നു.",
      "വിശ്വാസത്തിന്റെ ചോദ്യം: ഫാദർ ഗോൺസാഗ മുത്തശ്ശൻ യഥാർത്ഥ മാലാഖയാണോ എന്ന് സംശയിക്കുന്നു.",
      "മനുഷ്യ ക്രൂരത: നാട്ടുകാർ മുത്തശ്ശനെ കല്ലെറിയുന്നു.",
      "ചിറകുകളുടെ പ്രതീകാത്മകത: ദൈവികത, സ്വാതന്ത്ര്യം, അത്ഭുതം എന്നിവ പ്രതിനിധീകരിക്കുന്നു.",
      "വൈരുദ്ധ്യം: കുടുംബം മുത്തശ്ശൻ മൂലം സമ്പന്നരാകുന്നു, പക്ഷേ മോശമായി പെരുമാറുന്നു.",
      "ഒടുവിൽ മുത്തശ്ശൻ പറന്നുപോകുന്നു — അത്ഭുതങ്ങളെ വിലമതിക്കാത്ത ലോകത്തിന്റെ പ്രതീകം.",
    ],
    importantQuestions: [
      { q: "Who are the main characters in the story?", a: "The main characters are Pelayo (a poor villager), his wife Elisenda, the Very Old Man with Enormous Wings (believed to be an angel), Father Gonzaga (the parish priest), and the neighbour who identifies the old man as an angel.", qMl: "കഥയിലെ പ്രധാന കഥാപാത്രങ്ങൾ ആരൊക്കെ?", aMl: "പ്രധാന കഥാപാത്രങ്ങൾ: പെലായോ (ഒരു ദരിദ്ര ഗ്രാമവാസി), അദ്ദേഹത്തിന്റെ ഭാര്യ എലിസെൻഡ, വലിയ ചിറകുകളുള്ള വളരെ മുത്തശ്ശൻ (മാലാഖ എന്ന് വിശ്വസിക്കപ്പെടുന്നു), ഫാദർ ഗോൺസാഗ (ഇടവക വൈദികൻ), മുത്തശ്ശനെ മാലാഖ എന്ന് തിരിച്ചറിയുന്ന അയൽക്കാരി." },
      { q: "How does the story begin?", a: "The story begins during a rainstorm when Pelayo finds a very old man with enormous wings lying face down in the mud of his courtyard. His newborn child has been sick for three days with a fever.", qMl: "കഥ എങ്ങനെ ആരംഭിക്കുന്നു?", aMl: "കനത്ത മഴയുടെ സമയം പെലായോ തന്റെ മുറ്റത്ത് വലിയ ചിറകുകളുള്ള ഒരു വളരെ മുത്തശ്ശനെ ചെളിയിൽ മുഖം കുത്തി കിടക്കുന്നത് കണ്ടെത്തുന്നു. അവരുടെ പുതുമോൻ മൂന്ന് ദിവസമായി പനിയിലാണ്." },
      { q: "Why does Father Gonzaga doubt the old man is an angel?", a: "Father Gonzaga doubts the old man is an angel because: (1) He does not speak Latin (the language of God), (2) He looks too human and frail, (3) He does not conform to the Church's descriptions of angels, (4) He seems too natural and ordinary to be supernatural.", qMl: "ഫാദർ ഗോൺസാഗ മുത്തശ്ശൻ മാലാഖയാണെന്ന് സംശയിക്കുന്നത് എന്തുകൊണ്ട്?", aMl: "(1) അദ്ദേഹം ലാറ്റിൻ സംസാരിക്കുന്നില്ല, (2) മനുഷ്യരെപ്പോലെ തോന്നുന്നു, (3) സഭയുടെ വിവരണങ്ങളോട് പൊരുത്തപ്പെടുന്നില്ല, (4) അത്ഭുതകരമായ കാര്യങ്ങൾക്ക് വളരെ സാധാരണമായി തോന്നുന്നു." },
      { q: "What is the significance of the Spider Woman episode?", a: "The Spider Woman is a woman who was turned into a giant tarantula by lightning for disobeying her parents. She attracts more visitors than the angel because she has a clear, moral story — her punishment was deliberate and understandable. In contrast, the angel's presence is mysterious and lacks a simple explanation. This contrast highlights how people prefer stories with clear moral lessons over genuine mystery.", qMl: "സ്പൈഡർ വുമൺ എപ്പിസോഡിന്റെ പ്രാധാന്യം എന്ത്?", aMl: "സ്പൈഡർ വുമൺ മാതാപിതാക്കളെ അനുസരിക്കാത്തതിന് ഇടിമിന്നലിൽ ഒരു ഭീമൻ തേലീച്ചയാക്കപ്പെട്ട സ്ത്രീയാണ്. അവൾക്ക് വ്യക്തമായ നൈതിക കഥ ഉള്ളതിനാൽ മാലാഖയേക്കാൾ കൂടുതൽ സന്ദർശകരെ ആകർഷിക്കുന്നു. ഇത് ആളുകൾ യഥാർത്ഥ അത്ഭുതത്തേക്കാൾ വ്യക്തമായ നൈതിക പാഠങ്ങൾ ഇഷ്ടപ്പെടുന്നു എന്ന് എടുത്തുകാണിക്കുന്നു." },
      { q: "How do Pelayo and Elisenda exploit the old man?", a: "Pelayo and Elisenda exploit the old man by charging admission money to see him. They build a mansion with the earnings. Elisenda becomes wealthy and puts the old man in a chicken coop. They treat him as a source of income rather than as a human being or angel.", qMl: "പെലായോയും എലിസെൻഡയും മുത്തശ്ശനെ എങ്ങനെ ചൂഷണം ചെയ്യുന്നു?", aMl: "അവർ മുത്തശ്ശനെ കാണാൻ പ്രവേശന ഫീസ് ഈടാക്കി ചൂഷണം ചെയ്യുന്നു. വരുമാനം കൊണ്ട് ഒരു മാളിക പണിയുന്നു. എലിസെൻഡ സമ്പന്നയാകുന്നു. അവർ മുത്തശ്ശനെ മനുഷ്യനോ മാലാഖയോ എന്ന നിലയിൽ അല്ലാതെ വരുമാന സ്രോതസ്സായി കൈകാര്യം ചെയ്യുന്നു." },
      { q: "What happens at the end of the story?", a: "The old man's wings heal and he grows new feathers. One day, while Elisenda is cutting vegetables in the kitchen, she sees the old man clumsily trying to fly. He finally succeeds and flies away over the horizon. Elisenda watches him disappear and feels relieved that she will no longer have to deal with the burden of his presence.", qMl: "കഥയുടെ അവസാനം എന്ത് സംഭവിക്കുന്നു?", aMl: "മുത്തശ്ശന്റെ ചിറക് സൗഖ്യമാകുന്നു, പുതിയ പീത്സ വളരുന്നു. ഒരു ദിവസം എലിസെൻഡ അടുക്കളയിൽ പച്ചക്കറി മുറിക്കുമ്പോൾ മുത്തശ്ശൻ അലംഭാവമായി പറക്കാൻ ശ്രമിക്കുന്നത് കാണുന്നു. ഒടുവിൽ അയാൾ വിജയിച്ച് ചൊക്കത്തിലൂടെ പറന്നുപോകുന്നു. എലിസെൻഡ അയാൾ മറയുന്നത് നോക്കി ആശ്വാസം അനുഭവിക്കുന്നു." },
      { q: "What is Magical Realism? How is it seen in this story?", a: "Magical Realism is a literary genre where magical or supernatural elements are presented in an otherwise realistic, everyday setting. In this story, the magical element is the old man with enormous wings — he is treated as a real, ordinary person despite being supernatural. The villagers react to him with curiosity and cruelty rather than awe. García Márquez presents the miraculous as mundane and the mundane as miraculous.", qMl: "മാജിക്കൽ റിയലിസം എന്ത്? ഈ കഥയിൽ അത് എങ്ങനെ കാണാം?", aMl: "മാജിക്കൽ റിയലിസം എന്നത് അത്ഭുതകരമോ അതിപ്രകൃതിയോ ആയ ഘടകങ്ങൾ യഥാർത്ഥ സാഹചര്യത്തിൽ അവതരിപ്പിക്കുന്ന സാഹിത്യ വിഭാഗമാണ്. ഈ കഥയിൽ അത്ഭുതകരമായ ഘടകം വലിയ ചിറകുകളുള്ള മുത്തശ്ശനാണ് — അയാൾ അതിപ്രകൃതിയായിട്ടും സാധാരണ മനുഷ്യനായി കൈകാര്യം ചെയ്യപ്പെടുന്നു." },
    ],
    themes: ["Magical Realism", "Exploitation and Greed", "Faith vs Doubt", "Human Cruelty", "Treatment of the Other", "The Mundane and the Miraculous"],
  },
  {
    chapterNumber: 2,
    title: "In the Attic",
    titleMl: "മേൽക്കൂരയിൽ",
    author: "Shashi Tharoor",
    type: "prose",
    summary: "In the Attic is a personal essay by Shashi Tharoor about his childhood experience of discovering old, forgotten objects in the attic of his grandparents' house in Palakkad, Kerala. Young Shashi would explore the attic and find fascinating items — old trunks, yellowed photographs, vintage books, and discarded belongings. Through these objects, he connects with the past and learns about his family history. The attic becomes a metaphor for memory and the passage of time. Tharoor reflects on how the objects we discard and forget hold stories of the people who once used them. The essay explores themes of nostalgia, the weight of the past, and how material objects connect us to our roots and heritage.",
    summaryMl: "ശശി തരൂരിന്റെ ഒരു വ്യക്തിഗത പ്രബന്ധം. പാലക്കാട്ടെ മുത്തച്ഛന്റെ വീട്ടിലെ മേൽക്കൂരയിൽ പഴയ, മറന്നുപോയ വസ്തുക്കൾ കണ്ടെത്തുന്ന ബാല്യകാല അനുഭവമാണ് തരൂർ വിവരിക്കുന്നത്. ചെറിയ ശശി മേൽക്കൂര പര്യവേക്ഷണം ചെയ്യുകയും പഴയ പെട്ടികൾ, മഞ്ഞനിറമായ ഫോട്ടോകൾ, പഴയ പുസ്തകങ്ങൾ എന്നിവ കണ്ടെത്തുകയും ചെയ്യുന്നു. ഈ വസ്തുക്കളിലൂടെ അദ്ദേഹം കഴിഞ്ഞ കാലവുമായി ബന്ധപ്പെടുകയും കുടുംബ ചരിത്രം അറിയുകയും ചെയ്യുന്നു.",
    characters: ["Shashi Tharoor (ശശി തരൂർ) — The author as a young boy exploring the attic", "Grandparents (മുത്തച്ഛനും മുത്തശ്ശിയും) — The owners of the house in Palakkad"],
    keyPoints: [
      "The attic is a metaphor for memory, the subconscious, and the past.",
      "Objects carry stories — each forgotten item in the attic represents a chapter of family history.",
      "Nostalgia: The essay evokes a deep sense of longing for a past that cannot be recovered.",
      "The passage of time: Things once valued become forgotten, but they still hold meaning.",
      "Connection to roots: The attic connects the author to his Kerala heritage and family identity.",
      "Tharoor's prose style is rich, descriptive, and reflective — characteristic of literary English.",
      "The essay explores how childhood curiosity leads to self-discovery and understanding of one's heritage.",
    ],
    keyPointsMl: [
      "മേൽക്കൂര ഓർമ്മയുടെയും കഴിഞ്ഞ കാലത്തിന്റെയും പ്രതീകമാണ്.",
      "വസ്തുക്കൾ കഥകൾ ചുമക്കുന്നു — ഓരോ മറന്നുപോയ വസ്തുവും കുടുംബ ചരിത്രത്തിന്റെ ഒരു അധ്യായം പ്രതിനിധീകരിക്കുന്നു.",
      "നോസ്റ്റാൾജിയ: തിരിച്ചെടുക്കാൻ കഴിയാത്ത കഴിഞ്ഞ കാലത്തോടുള്ള ആഴത്തിലുള്ള ആഗ്രഹം.",
      "കാലത്തിന്റെ കടന്നുപോകൽ: ഒരിക്കൽ വിലമതിച്ചിരുന്നവ മറന്നുപോകുന്നു, പക്ഷേ അർത്ഥം നിലനിർത്തുന്നു.",
      "വേരുകളുമായുള്ള ബന്ധം: മേൽക്കൂര തന്റെ കേരള പൈതൃകവുമായി ബന്ധിപ്പിക്കുന്നു.",
    ],
    importantQuestions: [
      { q: "What is the central theme of 'In the Attic'?", a: "The central theme is the connection between material objects and memory — how forgotten items in an attic can transport us back in time and connect us to our family heritage and roots.", qMl: "'മേൽക്കൂരയിലെ' കേന്ദ്ര പ്രമേയം എന്ത്?", aMl: "വസ്തുക്കളും ഓർമ്മയും തമ്മിലുള്ള ബന്ധമാണ് കേന്ദ്ര പ്രമേയം — മേൽക്കൂരയിലെ മറന്നുപോയ വസ്തുക്കൾ നമ്മെ കഴിഞ്ഞ കാലത്തേക്ക് കൊണ്ടുപോകുകയും കുടുംബ പൈതൃകവുമായി ബന്ധിപ്പിക്കുകയും ചെയ്യുന്നു." },
      { q: "Why is the attic significant in the essay?", a: "The attic serves as a physical space where the past is preserved through forgotten objects. It symbolizes memory, the subconscious, and the layers of family history. For young Tharoor, it was a space of discovery and wonder.", qMl: "പ്രബന്ധത്തിൽ മേൽക്കൂര എന്തുകൊണ്ട് പ്രധാനമാണ്?", aMl: "മറന്നുപോയ വസ്തുക്കളിലൂടെ കഴിഞ്ഞ കാലം സംരക്ഷിക്കപ്പെടുന്ന ഭൗതിക ഇടമാണ് മേൽക്കൂര. ഇത് ഓർമ്മയുടെയും കുടുംബ ചരിത്രത്തിന്റെ പാളികളുടെയും പ്രതീകമാണ്." },
      { q: "How does Tharoor connect objects to stories?", a: "Tharoor shows that each object in the attic — old trunks, photographs, books — has a story behind it. These objects are witnesses to the lives of the people who owned them. By examining them, the author reconstructs fragments of family history and connects with ancestors he never knew.", qMl: "തരൂർ വസ്തുക്കളെ കഥകളുമായി എങ്ങനെ ബന്ധിപ്പിക്കുന്നു?", aMl: "മേൽക്കൂരയിലെ ഓരോ വസ്തുവിനും — പഴയ പെട്ടികൾ, ഫോട്ടോകൾ, പുസ്തകങ്ങൾ — അതിനുപിന്നിൽ ഒരു കഥയുണ്ട്. ഈ വസ്തുക്കൾ ഉടമകളുടെ ജീവിതത്തിന്റെ സാക്ഷികളാണ്. അവ പരിശോധിക്കുന്നതിലൂടെ കുടുംബ ചരിത്രത്തിന്റെ ഭാഗങ്ങൾ പുനഃസൃഷ്ടിക്കുന്നു." },
    ],
    themes: ["Memory and Nostalgia", "Family Heritage", "The Passage of Time", "Discovery and Curiosity", "Material Objects and Meaning"],
  },
  {
    chapterNumber: 3,
    title: "Shākuntalam",
    titleMl: "ശാകുന്തളം",
    author: "Kalidasa (adapted)",
    type: "drama",
    summary: "Shākuntalam is adapted from Kalidasa's famous Sanskrit play Abhijnāna Shākuntalam (The Recognition of Shakuntala). The story is about King Dushyanta who meets Shakuntala, the foster daughter of sage Kanva, while hunting in a forest. They fall in love and Dushyanta marries Shakuntala with the Gandharva form of marriage. He gives her a signet ring as a token. When Shakuntala goes to Dushyanta's court, the king fails to recognize her because a sage's curse has made him forget her. The signet ring is swallowed by a fish. After many trials, the ring is found and Dushyanta remembers Shakuntala. They are reunited with their son Bharata, who later gives his name to India (Bharat). The play explores themes of love, memory, nature, and the power of recognition.",
    summaryMl: "കാളിദാസന്റെ പ്രശസ്ത സംസ്കൃത നാടകമായ അഭിജ്ഞാന ശാകുന്തലത്തിന്റെ രൂപാന്തരീകരണം. രാജാവ് ദുഷ്യന്തൻ വേട്ടയാടുമ്പോൾ ഋഷി കണ്വയുടെ വളർത്തുമകൾ ശാകുന്തലയെ കാട്ടിൽ കണ്ടുമുട്ടുന്നു. അവർ പരസ്പരം ഇഷ്ടപ്പെടുകയും ഗന്ധർവ വിവാഹം ചെയ്യുകയും ചെയ്യുന്നു. ദുഷ്യന്തൻ ഒരു മോതിരം നൽകുന്നു. ഋഷിയുടെ ശാപം മൂലം ദുഷ്യന്തൻ ശാകുന്തലയെ മറക്കുന്നു. മീൻ മോതിരം വിഴുങ്ങുന്നു. ഒടുവിൽ മോതിരം കണ്ടെത്തി ഓർമ്മ തിരിച്ചുവരുന്നു. അവർ മകൻ ഭരതനുമായി വീണ്ടും ഒന്നിക്കുന്നു.",
    characters: [
      "King Dushyanta (ദുഷ്യന്തൻ) — The king of the Lunar dynasty who falls in love with Shakuntala",
      "Shakuntala (ശാകുന്തള) — The foster daughter of Sage Kanva, born of celestial dancer Menaka",
      "Sage Kanva (കണ്വ മുനി) — The sage who raised Shakuntala",
      "Vidushaka (വിദൂഷകൻ) — The king's court jester and comic companion",
      "Sage Durvasa (ദുർവാസ മുനി) — The angry sage whose curse makes Dushyanta forget Shakuntala",
      "Bharata (ഭരതൻ) — The son of Dushyanta and Shakuntala, ancestor of the Bharata dynasty",
    ],
    keyPoints: [
      "One of the greatest works of Sanskrit literature by Kalidasa (4th-5th century CE).",
      "The ring (signet ring) is the key symbol — it represents memory, recognition, and the proof of love.",
      "Durvasa's curse: When Shakuntala leaves for the king's court, the sage Durvasa curses that Dushyanta will forget her until he sees the ring again.",
      "Nature plays a major role — the forest setting symbolizes innocence, love, and natural beauty.",
      "The play has seven acts (saptakas) and moves from the forest to the court.",
      "Shakuntala is one of the earliest and most celebrated portrayals of a strong, dignified woman in Indian literature.",
      "The story is the origin of the name 'Bharat' for India — King Bharata was their son.",
      "Kalidasa's language is elegant, poetic, and deeply descriptive of nature.",
    ],
    keyPointsMl: [
      "കാളിദാസന്റെ സംസ്കൃത സാഹിത്യത്തിലെ ഏറ്റവും മഹത്ത്വമുള്ള കൃതികളിലൊന്ന്.",
      "മോതിരം പ്രധാന പ്രതീകമാണ് — ഓർമ്മ, തിരിച്ചറിവ്, പ്രേമത്തിന്റെ തെളിവ് എന്നിവ പ്രതിനിധീകരിക്കുന്നു.",
      "ദുർവാസ മുനിയുടെ ശാപം: ദുഷ്യന്തൻ മോതിരം വീണ്ടും കാണുന്നത് വരെ ശാകുന്തലയെ മറക്കുന്നു.",
      "പ്രകൃതി പ്രധാന പങ്ക് വഹിക്കുന്നു — കാട്ടിലെ സജ്ജീകരണം നിഷ്കളങ്കതയുടെയും സൗന്ദര്യത്തിന്റെയും പ്രതീകമാണ്.",
      "ഭരതൻ എന്ന പേര് ഇന്ത്യയുടെ 'ഭാരതം' എന്ന പേരിന്റെ ഉത്ഭവമാണ്.",
    ],
    importantQuestions: [
      { q: "Who are Dushyanta and Shakuntala?", a: "Dushyanta is the king of the Lunar dynasty (Chandravamsha) and the hero of the play. Shakuntala is the foster-daughter of Sage Kanva, born to the celestial dancer Menaka. She is the heroine — beautiful, strong, and dignified.", qMl: "ദുഷ്യന്തനും ശാകുന്തളയും ആര്?", aMl: "ദുഷ്യന്തൻ ചന്ദ്രവംശത്തിലെ രാജാവും നാടകത്തിലെ നായകനുമാണ്. ശാകുന്തള ഋഷി കണ്വയുടെ വളർത്തുമകളും സ്വർഗീയ നർത്തകി മേനകയുടെ മകളുമാണ്." },
      { q: "Why does Dushyanta forget Shakuntala?", a: "Sage Durvasa curses Dushyanta to forget Shakuntala when he is distracted and fails to honor her properly as she departs. The curse is broken only when Dushyanta sees the signet ring again.", qMl: "ദുഷ്യന്തൻ ശാകുന്തലയെ എന്തുകൊണ്ട് മറക്കുന്നു?", aMl: "ദുർവാസ മുനി ദുഷ്യന്തനെ ശപിക്കുന്നു — അവൻ ശ്രദ്ധ തെറ്റി ശാകുന്തലയെ യോഗ്യമായി ആദരിക്കാത്തതിനാൽ. ദുഷ്യന്തൻ മോതിരം വീണ്ടും കാണുമ്പോൾ മാത്രമേ ശാപം അഴിയുന്നുള്ളൂ." },
      { q: "What is the significance of the ring?", a: "The ring (signet ring) is the most important symbol in the play. It represents: (1) Memory — it is the proof of their love, (2) Recognition — Dushyanta remembers only when he sees it, (3) Identity — it proves Shakuntala's claim, (4) Fate — when lost, it causes all the suffering, and when found, it restores everything.", qMl: "മോതിരത്തിന്റെ പ്രാധാന്യം എന്ത്?", aMl: "മോതിരം നാടകത്തിലെ ഏറ്റവും പ്രധാന പ്രതീകമാണ്. ഇത് ഓർമ്മയും തിരിച്ചറിവും തെളിവും വിധിയും പ്രതിനിധീകരിക്കുന്നു." },
    ],
    themes: ["Love and Recognition", "Memory and Forgetting", "Nature and Innocence", "The Power of Identity", "Fate and Destiny"],
  },
  {
    chapterNumber: 4,
    title: "Mirror",
    titleMl: "കണ്ണാടി",
    author: "Sylvia Plath",
    type: "poetry",
    summary: "Mirror is a poem by Sylvia Plath where a mirror speaks in first person, describing itself as honest and truthful. The mirror has no preconceptions — it simply reflects whatever is placed before it. The mirror sits on a wall, swallowing what it sees like a dark corners. A woman comes to it every morning, searching for her face. She turns away in distress as she ages. The mirror, now变成 a lake, shows her the image of a drowned woman — herself as she really is. The poem explores themes of truth, self-perception, aging, vanity, and the relationship between appearance and reality. The mirror is a symbol of objective truth that cannot lie or flatter.",
    summaryMl: "സിൽവിയ പ്ലാത്തിന്റെ ഒരു കവിത. കണ്ണാടി ഒന്നാം പുരുഷയിൽ സംസാരിക്കുന്നു. കണ്ണാടി നേർഡയാണ്, മുൻവിധികളില്ല — മുന്നിൽ വയ്ക്കുന്നത് മാത്രം പ്രതിഫലിപ്പിക്കുന്നു. ഓരോ രാവിലെയും ഒരു സ്ത്രീ അതിന്റെ മുന്നിൽ വരുന്നു, തന്റെ മുഖം തിരയുന്നു. പ്രായമാകുന്നതോർത്ത് അവൾ അസ്വസ്ഥയായി തിരിഞ്ഞുപോകുന്നു. കണ്ണാടി ഇപ്പോൾ ഒരു തടാകമായി മാറുന്നു, മുങ്ങിമരിച്ച ഒരു സ്ത്രീയുടെ രൂപം കാണിക്കുന്നു — യഥാർത്ഥ അവളുടെ രൂപം. സത്യം, സ്വയം വീക്ഷണം, പ്രായമാകൽ, വ്യാജത്വം എന്നിവ പ്രമേയങ്ങളാണ്.",
    characters: [],
    keyPoints: [
      "The Mirror speaks in first person — personification is the main poetic device.",
      "The mirror claims to be honest and not prej udice — 'I am not cruel, only truthful'.",
      "The woman who looks into the mirror is aging and distressed by her reflections.",
      "The mirror becomes a lake — a deeper, more frightening reflection of truth.",
      "'In me she has drowned a young girl' — the mirror shows how time destroys beauty and youth.",
      "The poem explores the fear of aging, especially in women in a society that values youth.",
      "The mirror is objective truth — it cannot lie, flatter, or distort.",
      "Plath uses the mirror to comment on vanity, self-image, and the relationship between appearance and reality.",
    ],
    keyPointsMl: [
      "കണ്ണാടി ഒന്നാം പുരുഷയിൽ സംസാരിക്കുന്നു — വ്യക്തിവത്കരണം പ്രധാന കവിതാ ഉപകരണമാണ്.",
      "കണ്ണാടി നേർഡയാണെന്ന് അവകാശപ്പെടുന്നു — 'ഞാൻ ക്രൂരനല്ല, ന്യായമാണ്'.",
      "ഒരു സ്ത്രീ പ്രായമാകുന്നതോർത്ത് അസ്വസ്ഥയായി കണ്ണാടിയിലേക്ക് നോക്കുന്നു.",
      "കണ്ണാടി ഒരു തടാകമായി മാറുന്നു — സത്യത്തിന്റെ കൂടുതൽ ഭയപ്പെടുത്തുന്ന പ്രതിഫലനം.",
      "പ്രായമാകുന്നതിനെക്കുറിച്ചുള്ള ഭയം, പ്രത്യേകിച്ച് യുവാക്കളെ വിലമതിക്കുന്ന സമൂഹത്തിലെ സ്ത്രീകൾ.",
    ],
    importantQuestions: [
      { q: "Why does the mirror compare itself to a lake?", a: "The mirror compares itself to a lake to show a deeper, more profound level of truth-telling. While a mirror on a wall reflects surfaces, a lake reflects the entire being. The lake metaphor suggests drowning — the woman is 'drowning' in the reality of her aging. It also represents the unconscious mind.", qMl: "കണ്ണാടി തന്നെ ഒരു തടാകവുമായി എന്തുകൊണ്ട് താരതമ്യം ചെയ്യുന്നു?", aMl: "കൂടുതൽ ആഴത്തിലുള്ള സത്യം കാണിക്കാൻ. ഭിത്തിയിലെ കണ്ണാടി ഉപരിതലം മാത്രം പ്രതിഫലിപ്പിക്കുമ്പോൾ, തടാകം സമ്പൂർണ്ണ ജീവിതം പ്രതിഫലിപ്പിക്കുന്നു. മുങ്ങിമരിക്കൽ എന്ന രൂപകം പ്രായമാകുന്ന യാഥാർത്ഥ്യത്തിൽ 'മുങ്ങുക' എന്ന അർത്ഥം നൽകുന്നു." },
      { q: "What does the mirror symbolize?", a: "The mirror symbolizes: (1) Objective truth — it cannot lie or distort, (2) Time — it marks the passage of years, (3) Self-perception — how we see ourselves, (4) Vanity and the fear of aging, (5) The relationship between appearance and reality.", qMl: "കണ്ണാടി എന്ത് പ്രതീകവത്കരിക്കുന്നു?", aMl: "(1) നിഷ്പക്ഷ സത്യം, (2) കാലം — വർഷങ്ങളുടെ കടന്നുപോകൽ, (3) സ്വയം വീക്ഷണം, (4) വ്യാജത്വവും പ്രായമാകുന്നതിനെക്കുറിച്ചുള്ള ഭയവും, (5) പുറംകാഴ്ചയും യാഥാർത്ഥ്യവും തമ്മിലുള്ള ബന്ധം." },
    ],
    themes: ["Truth and Honesty", "Aging and Vanity", "Self-Perception", "Appearance vs Reality", "The Fear of Time"],
  },
  // ──── UNIT 2 ────
  {
    chapterNumber: 5,
    title: "The Hack Driver",
    titleMl: "ഹാക് ഡ്രൈവർ",
    author: "Luther S. Lister (adapted)",
    type: "prose",
    summary: "The Hack Driver is a humorous account of the author's experience as a young lawyer who goes to the small town of Brilliant, Wisconsin to serve a summons. He hires a hack driver (Oliver Lutts) to take him around. The driver, whom the author nicknames 'the hack driver', is a jovial, talkative man who knows everyone in town. He tells amusing stories about each person they visit. The hack driver drives the author around all day but cleverly avoids serving the summons on the person he is looking for. By the end of the day, the author realizes the hack driver himself is the person he was supposed to serve! The hack driver cleverly evaded the summons while entertaining the young lawyer. The story explores themes of wisdom vs book-learning, rural life, humor, and the art of deception.",
    summaryMl: "വിസ്കോൺസിനിലെ ബ്രില്യന്റ് എന്ന ചെറിയ പട്ടണത്തിൽ സമൻസ് നൽകാൻ പോകുന്ന ഒരു ചെറിയ വക്കീലിന്റെ അനുഭവമാണ് രസകരമായി വിവരിക്കുന്നത്. അദ്ദേഹം ഒരു ഹാക് ഡ്രൈവറെ (ഒലിവർ ലുട്ട്സ്) കൂട്ടിന് നിയോഗിക്കുന്നു. ഡ്രൈവർ എല്ലാവരെയും അറിയുന്ന സന്തോഷവാനും സംസാരപ്രിയനുമാണ്. ദിവസം മുഴുവൻ ചുറ്റിക്കറങ്ങിയ ശേഷം, ലേഖകൻ മനസ്സിലാക്കുന്നു — താൻ തിരയുന്ന വ്യക്തി തന്നെയാണ് ഈ ഹാക് ഡ്രൈവർ!",
    characters: [
      "The Author/Narrator (ലേഖകൻ) — A young lawyer sent to serve a summons",
      "Oliver Lutts / The Hack Driver (ഒലിവർ ലുട്ട്സ് / ഹാക് ഡ്രൈവർ) — A jovial, clever man who is actually the person to be served",
      "The townspeople of Brilliant (ബ്രില്യന്റ് നിവാസികൾ) — Various characters the driver tells stories about",
    ],
    keyPoints: [
      "Dramatic Irony: The reader/author gradually realizes the truth about the hack driver's identity.",
      "Rural vs Urban Wisdom: The hack driver represents practical, street-smart wisdom vs the author's book-learning.",
      "Humor and Storytelling: The hack driver is a masterful storyteller who keeps the author entertained.",
      "The Art of Deception: The hack driver evades the summons through clever misdirection.",
      "Small-town Life: The story paints a warm portrait of rural American life and its close-knit community.",
      "The author admires the hack driver's knowledge of people and places, which is more practical than his legal education.",
    ],
    keyPointsMl: [
      "വൈരുദ്ധ്യം: ഹാക് ഡ്രൈവറുടെ യഥാർത്ഥ സ്വത്വം ക്രമേണ മനസ്സിലാകുന്നു.",
      "ഗ്രാമീണ ബുദ്ധി vs നഗര ബുദ്ധി: ഹാക് ഡ്രൈവർ പ്രായോഗിക ബുദ്ധിയെ പ്രതിനിധീകരിക്കുന്നു.",
      "രസകരമായ കഥപറച്ചിൽ: ഡ്രൈവർ മികച്ച കഥാകാരനാണ്.",
      "ചെറിയ പട്ടണ ജീവിതം: ഗ്രാമീണ ജീവിതത്തിന്റെ ഊഷ്മള ചിത്രം.",
    ],
    importantQuestions: [
      { q: "Who is the hack driver?", a: "The hack driver is Oliver Lutts, a jovial and clever man whom the author hires to help him serve a summons. Ironically, Oliver Lutts is actually the person the author was trying to serve the summons on. He cleverly avoids being served while keeping the author entertained all day.", qMl: "ഹാക് ഡ്രൈവർ ആര്?", aMl: "ഹാക് ഡ്രൈവർ ഒലിവർ ലുട്ട്സ് ആണ് — സമൻസ് നൽകാൻ സഹായിക്കാൻ ലേഖകൻ നിയോഗിച്ച ഒരു സന്തോഷവാനും തന്ത്രശാലിയുമായ മനുഷ്യൻ. വിരോധാഭാസമെന്ന് പറയട്ടെ, ഒലിവർ ലുട്ട്സ് തന്നെയാണ് ലേഖകൻ സമൻസ് നൽകാൻ തിരഞ്ഞിരുന്ന വ്യക്തി." },
      { q: "What is the central irony of the story?", a: "The central irony is that the person the author has been searching for all day — the person he needs to serve the summons on — is the very man who has been driving him around and entertaining him. The hack driver cleverly misdirected the author while appearing to help him.", qMl: "കഥയുടെ കേന്ദ്ര വിരോധാഭാസം എന്ത്?", aMl: "ലേഖകൻ ഒരു ദിവസം മുഴുവൻ തിരഞ്ഞ വ്യക്തി — സമൻസ് നൽകേണ്ട വ്യക്തി — തന്നെയാണ് അദ്ദേഹത്തെ ചുറ്റിക്കറക്കുകയും വിനോദിപ്പിക്കുകയും ചെയ്ത മനുഷ്യൻ." },
    ],
    themes: ["Wisdom vs Book-learning", "Rural Life", "Humor and Storytelling", "Deception and Cleverness", "Small-town Character"],
  },
  {
    chapterNumber: 6,
    title: "The Sermon at Benares",
    titleMl: "ബെനാരസിലെ പ്രഭാഷണം",
    author: "Adapted from Buddhist scriptures",
    type: "prose",
    summary: "The Sermon at Benares tells the story of Kisa Gotami, a young woman who loses her only son and is overwhelmed with grief. She carries his dead body and goes from house to house, begging for medicine to bring him back to life. A wise man tells her to go to the Buddha for help. The Buddha asks her to bring a mustard seed from a house where no one has died. She goes door to door but realizes that death is universal — every household has experienced loss. She finally understands the First Noble Truth of Buddhism: that suffering (dukkha) is a natural part of life and that attachment to things that are impermanent leads to suffering. She becomes a Buddhist nun and attains enlightenment. The Buddha's sermon at Benares (Sarnath) established the Four Noble Truths and the Eightfold Path.",
    summaryMl: "കിസ ഗോതമി എന്ന യുവതി തന്റെ ഏക മകനെ നഷ്ടപ്പെടുത്തി ദുഃഖം നിറഞ്ഞവളാകുന്നു. മരിച്ച മൃതശരീരം ചുമന്ന് മരുന്ന് തേടി വീടുകളിൽ നടക്കുന്നു. ഒരു ജ്ഞാനി ബുദ്ധനെ കാണാൻ പറയുന്നു. ബുദ്ധൻ പറയുന്നു — മരണമില്ലാത്ത വീട്ടിൽ നിന്ന് കടുംപിടിത്ത വിത്ത് കൊണ്ടുവരൂ. അവൾ ഓരോ വീട്ടിലും ചെല്ലുമ്പോൾ മരണം സാർവത്രികമാണെന്ന് മനസ്സിലാക്കുന്നു. ബുദ്ധന്റെ ആദ്യ നോബിൾ ട്രൂത്ത് — ദുഃഖം ജീവിതത്തിന്റെ സ്വാഭാവിക ഭാഗമാണ്. അവൾ ബുദ്ധ സന്ന്യാസിനിയാകുന്നു.",
    characters: [
      "Kisa Gotami (കിസ ഗോതമി) — A young mother who loses her only son",
      "Gautama Buddha (ഗൗതമ ബുദ്ധൻ) — The teacher who helps Kisa Gotami understand the nature of suffering",
      "The Dead Son (മരിച്ച മകൻ) — Kisa Gotami's only child whose death triggers her journey",
    ],
    keyPoints: [
      "The Four Noble Truths: (1) Life involves suffering (Dukkha), (2) Suffering is caused by desire/attachment (Samudaya), (3) Suffering can end (Nirodha), (4) The Eightfold Path leads to the end of suffering (Magga).",
      "The mustard seed test: Buddha sends Kisa Gotami to find a mustard seed from a house untouched by death — she discovers death is universal.",
      "Kisa Gotami's transformation: From a grieving mother to an enlightened Buddhist nun.",
      "The Sermon at Benares (Sarnath) is considered the Buddha's first teaching after enlightenment.",
      "Impermanence (Anicca): Everything in life is temporary — attachment to impermanent things causes suffering.",
      "The story teaches compassion, acceptance, and the universal nature of death and loss.",
    ],
    keyPointsMl: [
      "നാല് നോബിൾ ട്രൂത്തുകൾ: (1) ജീവിതം ദുഃഖം ഉൾക്കൊള്ളുന്നു, (2) ആഗ്രഹം/അനുബന്ധം ദുഃഖത്തിന് കാരണമാണ്, (3) ദുഃഖം അവസാനിപ്പിക്കാം, (4) എട്ട് മാർഗ്ഗം ദുഃഖ അവസാനത്തിലേക്ക് നയിക്കുന്നു.",
      "കടുംപിടിത്ത വിത്ത് പരീക്ഷ: മരണം സ്പർശിക്കാത്ത വീട്ടിൽ നിന്ന് വിത്ത് കൊണ്ടുവരാൻ പറയുന്നു.",
      "കിസ ഗോതമിയുടെ രൂപാന്തരം: ദുഃഖിതയായ അമ്മ നിർമ്മല ബുദ്ധ സന്ന്യാസിനിയാകുന്നു.",
      "അനിച്ച (അശാശ്വതം): ജീവിതത്തിലെ എല്ലാം താത്കാലികമാണ്.",
    ],
    importantQuestions: [
      { q: "What did the Buddha ask Kisa Gotami to do?", a: "The Buddha asked Kisa Gotami to bring a mustard seed from a house where no one had ever died. This was his way of teaching her that death is universal and that every family experiences loss.", qMl: "ബുദ്ധൻ കിസ ഗോതമിയോട് എന്ത് ചെയ്യാൻ പറഞ്ഞു?", aMl: "മരണമില്ലാത്ത വീട്ടിൽ നിന്ന് കടുംപിടിത്ത വിത്ത് കൊണ്ടുവരാൻ പറഞ്ഞു. മരണം സാർവത്രികമാണെന്നും ഓരോ കുടുംബവും നഷ്ടം അനുഭവിക്കുന്നു എന്നും അവളെ പഠിപ്പിക്കാനുള്ള അദ്ദേഹത്തിന്റെ മാർഗ്ഗമായിരുന്നു അത്." },
      { q: "What are the Four Noble Truths?", a: "The Four Noble Truths are: (1) Dukkha — life involves suffering and dissatisfaction, (2) Samudaya — suffering is caused by craving and attachment, (3) Nirodha — suffering can be ended by letting go of attachment, (4) Magga — the Noble Eightfold Path (right view, right thought, right speech, right action, right livelihood, right effort, right mindfulness, right concentration) leads to the cessation of suffering.", qMl: "നാല് നോബിൾ ട്രൂത്തുകൾ എന്ത്?", aMl: "(1) ദുഃഖം — ജീവിതം ദുഃഖവും അതൃപ്തിയും ഉൾക്കൊള്ളുന്നു, (2) സമുദയ — ആഗ്രഹവും അനുബന്ധവും ദുഃഖത്തിന് കാരണമാണ്, (3) നിർണ്ണയ — അനുബന്ധം ഉപേക്ഷിക്കുന്നതിലൂടെ ദുഃഖം അവസാനിപ്പിക്കാം, (4) മാർഗ്ഗ — എട്ട് മാർഗ്ഗം ദുഃഖ നിർമ്മോചനത്തിലേക്ക് നയിക്കുന്നു." },
      { q: "How does Kisa Gotami change by the end of the story?", a: "Kisa Gotami transforms from a grief-stricken mother who denies death's reality to an enlightened woman who accepts the universal nature of suffering. She becomes a Buddhist nun and eventually attains enlightenment. Her journey is from ignorance to wisdom.", qMl: "കഥയുടെ അവസാനം കിസ ഗോതമി എങ്ങനെ മാറുന്നു?", aMl: "മരണ യാഥാർത്ഥ്യം നിഷേധിക്കുന്ന ദുഃഖിതയായ അമ്മയിൽ നിന്ന് ദുഃഖത്തിന്റെ സാർവത്രിക സ്വഭാവം സ്വീകരിക്കുന്ന നിർമ്മലയായ സ്ത്രീയായി രൂപാന്തരപ്പെടുന്നു. അവൾ ബുദ്ധ സന്ന്യാസിനിയാകുകയും ഒടുവിൽ നിർവ്വാണം നേടുകയും ചെയ്യുന്നു." },
    ],
    themes: ["Suffering and Loss", "Impermanence", "Wisdom and Enlightenment", "Compassion", "The Universal Nature of Death"],
  },
  // ──── UNIT 3 ────
  {
    chapterNumber: 7,
    title: "The Proposal",
    titleMl: "പ്രൊപ്പോസൽ (ജീവിതത്തിലെ അബദ്ധം)",
    author: "Anton Chekhov",
    type: "drama",
    summary: "The Proposal is a one-act comedic play by Anton Chekhov. Lomov, a wealthy but hypochondriac landowner, visits his neighbor Chubukov to propose marriage to Chubukov's daughter Natalya. Lomov and Natalya are both stubborn and argumentative. As soon as the proposal is made, they start arguing about which land is better — Lomov's Oxen Meadows or Natalya's. They shout and quarrel. Chubukov gets angry and asks Lomov to leave. But Lomov's dog and Natalya's dog fight. After Lomov leaves, Natalya realizes she actually wants to marry Lomov and begs her father to bring him back. Lomov is brought back, and they start arguing again — this time about whose dog is better. Despite all the quarreling, they eventually agree to marry. The play satirizes the petty concerns of the landowning class and the absurdity of marriage arranged purely for property and status.",
    summaryMl: "ആന്റൺ ചെക്കോവിന്റെ ഒരു അംഗ ഹാസ്യ നാടകം. സമ്പന്നനും അമിത ആരോഗ്യഭ്രാന്തനുമായ ഭൂവുടമ ലൊമോവ് അയൽക്കാരനായ ചുബുക്കോവിന്റെ മകൾ നതാല്യയെ വിവാഹം ചെയ്യാൻ വരുന്നു. ലൊമോവും നതാല്യയും രണ്ടുപേരും തർക്കിക്കുന്നവരാണ്. പ്രൊപ്പോസൽ നടത്തിയ ഉടൻ ഏത് ഭൂമി നല്ലത് എന്നതിനെക്കുറിച്ച് തർക്കം തുടങ്ങുന്നു. നായകൾ തമ്മിൽ അടിക്കുന്നു. നതാല്യ ലൊമോവിനെ വീണ്ടും കൊണ്ടുവരാൻ അഭ്യർത്ഥിക്കുന്നു. വീണ്ടും തർക്കം, പക്ഷേ ഒടുവിൽ വിവാഹം സമ്മതിക്കുന്നു.",
    characters: [
      "Lomov (ലൊമോവ്) — A wealthy, hypochondriac landowner who comes to propose",
      "Natalya Stepanovna (നതാല്യ സ്റ്റെപ്പാനോവ്ന) — Chubukov's daughter, strong-willed and argumentative",
      "Chubukov (ചുബുക്കോവ്) — Natalya's father, who wants his daughter to be married",
      "Squeak (സ്ക്വീക്ക്) — Lomov's old hunting dog",
      "Guess (ഗസ്) — Natalya's dog",
    ],
    keyPoints: [
      "Satire: Chekhov satirizes the petty concerns of the landowning class — they quarrel over minor property issues while ignoring the important things in life.",
      "Character Contrast: Both Lomov and Natalya are stubborn, hot-tempered, and absurd — they are perfectly matched.",
      "Irony: Despite their constant fighting, they agree to marry — suggesting that marriage in their class is more about property than love.",
      "The quarrels escalate from land to dogs to everything — showing how trivial disputes can become all-consuming.",
      "Comic relief: The constant fighting is meant to be funny, but it also reveals deep insecurities.",
      "The play is set in 19th-century rural Russia and reflects the social norms of the time.",
    ],
    keyPointsMl: [
      "വിമർശനം: ഭൂവുടമകളുടെ ചെറിയ ആശങ്കകളെ വിമർശിക്കുന്നു.",
      "കഥാപാത്ര വൈരുദ്ധ്യം: ലൊമോവും നതാല്യയും രണ്ടും തർക്കിക്കുന്നവരാണ് — അവർ പൂർണ്ണമായി പൊരുത്തപ്പെടുന്നു.",
      "വിരോധാഭാസം: നിരന്തര പോരാട്ടം ഉണ്ടായിട്ടും വിവാഹം സമ്മതിക്കുന്നു — സ്നേഹത്തേക്കാൾ സമ്പത്താണ് പ്രധാനം.",
      "തർക്കങ്ങൾ ഭൂമിയിൽ നിന്ന് നായകളിലേക്ക് — ചെറിയ തർക്കങ്ങൾ എത്ര വലുതാകാമെന്ന് കാണിക്കുന്നു.",
    ],
    importantQuestions: [
      { q: "Why does Lomov come to Chubukov's house?", a: "Lomov comes to propose marriage to Natalya, Chubukov's daughter. He is a wealthy neighbor and wants to marry for practical reasons — to have a 'suitable' wife who manages his household.", qMl: "ലൊമോവ് ചുബുക്കോവിന്റെ വീട്ടിലേക്ക് എന്തിന് വരുന്നു?", aMl: "ചുബുക്കോവിന്റെ മകൾ നതാല്യയെ വിവാഹം ചെയ്യാൻ പ്രൊപ്പോസൽ നടത്താൻ. അദ്ദേഹം ഒരു സമ്പന്നൻ അയൽക്കാരനാണ്, പ്രായോഗിക കാരണങ്ങളാൽ വിവാഹം ചെയ്യാൻ ആഗ്രഹിക്കുന്നു." },
      { q: "What do Lomov and Natalya argue about?", a: "They argue about: (1) Whose land is better — Lomov's Oxen Meadows or Natalya's Vassilevskoe, (2) Whose dog is better — Lomov's Squeak or Natalya's Guess, (3) Various petty issues. Their arguments are absurd and escalating, showing how trivial matters consume them.", qMl: "ലൊമോവും നതാല്യയും എന്തിനെക്കുറിച്ച് തർക്കിക്കുന്നു?", aMl: "(1) ഏത് ഭൂമി നല്ലത് — ലൊമോവിന്റെ ഓക്സൺ മീഡോസോ നതാല്യയുടെ വാസിലെവ്സ്കോയോ, (2) ഏത് നായ നല്ലത് — ലൊമോവിന്റെ സ്ക്വീക്കോ നതാല്യയുടെ ഗസ്സോ." },
    ],
    themes: ["Property and Materialism", "The Absurdity of Social Norms", "Stubbornness and Pride", "Marriage as Transaction", "Comedy of Manners"],
  },
  {
    chapterNumber: 8,
    title: "Poison",
    titleMl: "വിഷം",
    author: "Robert Louis Stevenson",
    type: "prose",
    summary: "Poison is a short story by Robert Louis Stevenson. Two Englishmen, Harry Hartley and Dick Vendale, are sitting in a café in Paris. Dick tells Harry about his unhappy love for Isobel Strong, a beautiful woman he wants to marry. Harry is shocked to learn that Isobel has been poisoned — she was bitten by a krait (a venomous snake) while sleeping, and the poison is slowly killing her. The doctors have given up hope. Dick is desperate to save her. Harry asks about the snake bite location and realizes that Isobel may still be alive because of where the bite occurred. They rush to find Isobel. The story builds tension as they discover Isobel is alive and that the snake may still be in the house. The krait is eventually found — it was sleeping on Isobel's chest and was kept warm by her body heat. The snake is killed and Isobel is saved. The story explores themes of love, courage, fear, and the thin line between life and death.",
    summaryMl: "�ോബർട്ട് ലൂയി സ്റ്റീവൻസണിന്റെ ഹ്രസ്വ കഥ. പാരീസിലെ ഒരു കഫേയിൽ ഇരിക്കുന്ന രണ്ട് ഇംഗ്ലീഷുകാരായ ഹാരി ഹാർട്ട്ലിയും ഡിക്ക് വെൻഡെയലും സംസാരിക്കുന്നു. ഡിക്ക് തന്റെ അസന്തുഷ്ട പ്രേമത്തെക്കുറിച്ച് പറയുന്നു — ഇസോബൽ സ്ട്രോങ്ങിനോടുള്ള സ്നേഹം. ഇസോബലിനെ ഒരു ക്രൈറ്റ് (വിഷപ്പാമ്പ്) കടിച്ചിരിക്കുന്നു, വിഷം മെല്ലെ അവളെ കൊല്ലുന്നു. ഡോക്ടർമാർ പ്രതീക്ഷ ഉപേക്ഷിച്ചു. ഹാരി പാമ്പിന്റെ കടിയുടെ സ്ഥാനം ചോദിക്കുന്നു. ഒടുവിൽ പാമ്പ് ഇസോബലിന്റെ നെഞ്ചിൽ ഉറങ്ങുകയായിരുന്നു — അവളുടെ ശരീര ഊഷ്മാവ് അതിനെ ചൂടാക്കി. പാമ്പ് കൊല്ലപ്പെടുകയും ഇസോബൽ രക്ഷിക്കപ്പെടുകയും ചെയ്യുന്നു.",
    characters: [
      "Harry Hartley (ഹാരി ഹാർട്ട്ലി) — One of the two Englishmen, who has medical knowledge",
      "Dick Vendale (ഡിക്ക് വെൻഡെയൽ) — A man desperately in love with Isobel",
      "Isobel Strong (ഇസോബൽ സ്ട്രോങ്) — The beautiful woman who has been poisoned by a krait",
      "The Krait (ക്രൈറ്റ്) — A venomous snake that has been biting Isobel while she sleeps",
    ],
    keyPoints: [
      "Suspense and Tension: The story builds tension gradually — first through the conversation, then through the discovery.",
      "The Krait: A highly venomous snake native to India and Southeast Asia. Kraits are nocturnal and often bite people while they sleep.",
      "Medical Knowledge: Harry's knowledge of snake bites and their effects helps save Isobel's life.",
      "Love and Sacrifice: Dick's love for Isobel drives him to desperate measures to save her.",
      "The snake was kept warm by Isobel's body heat, which is why it stayed — this is a detail that adds realism.",
      "The story explores the thin line between life and death, and how quick thinking can save lives.",
      "Stevenson uses vivid descriptions to create a sense of danger and urgency.",
    ],
    keyPointsMl: [
      "സസ്പെൻസും സംഘർഷവും: കഥ ക്രമേണ സംഘർഷം വർദ്ധിപ്പിക്കുന്നു.",
      "ക്രൈറ്റ്: ഇന്ത്യയിലും തെക്കൻ ഏഷ്യയിലും കാണപ്പെടുന്ന അതിവിഷപ്പാമ്പ്.",
      "വൈദ്യശാസ്ത്ര അറിവ്: ഹാരിയുടെ അറിവ് ഇസോബലിനെ രക്ഷിക്കാൻ സഹായിക്കുന്നു.",
      "സ്നേഹവും ത്യാഗവും: ഡിക്കിന്റെ സ്നേഹം ഇസോബലിനെ രക്ഷിക്കാൻ പ്രേരിപ്പിക്കുന്നു.",
    ],
    importantQuestions: [
      { q: "What is the significance of the krait in the story?", a: "The krait is a venomous snake that has been biting Isobel while she sleeps. Its significance is both literal (it is the source of the poison threatening Isobel's life) and symbolic (it represents the hidden dangers that lurk in seemingly safe places). The krait's tendency to bite sleeping people makes it a perfect metaphor for threats that come when we are most vulnerable.", qMl: "കഥയിൽ ക്രൈറ്റിന്റെ പ്രാധാന്യം എന്ത്?", aMl: "ക്രൈറ്റ് ഇസോബലിനെ ഉറങ്ങുമ്പോൾ കടിക്കുന്ന ഒരു വിഷപ്പാമ്പാണ്. ഇത് ഇസോബലിന്റെ ജീവൻ ഭീഷണിപ്പെടുത്തുന്ന വിഷത്തിന്റെ ഉറവിടമാണ്, സുരക്ഷിതമെന്ന് തോന്നുന്ന സ്ഥലങ്ങളിൽ ഒളിഞ്ഞിരിക്കുന്ന അപകടങ്ങളുടെ പ്രതീകവുമാണ്." },
      { q: "How is Isobel saved?", a: "Isobel is saved when: (1) Harry realizes that the krait's bite location suggests she may still be alive, (2) They rush to her and find the snake still on her chest, (3) The snake was kept warm by her body heat, which is why it stayed, (4) The snake is killed and removed, allowing the doctors to treat her. Quick thinking and medical knowledge save her life.", qMl: "ഇസോബൽ എങ്ങനെ രക്ഷിക്കപ്പെടുന്നു?", aMl: "(1) ഹാരി കടിയുടെ സ്ഥാനം ശ്രദ്ധിക്കുന്നു, (2) അവർ ഓടി ചെല്ലുമ്പോൾ പാമ്പ് ഇപ്പോഴും നെഞ്ചിലുണ്ട്, (3) ശരീര ഊഷ്മാവ് പാമ്പിനെ ചൂടാക്കി, (4) പാമ്പ് കൊല്ലപ്പെടുകയും ഡോക്ടർമാർ ചികിത്സിക്കുകയും ചെയ്യുന്നു." },
    ],
    themes: ["Love and Desperation", "Hidden Dangers", "Courage and Quick Thinking", "Life and Death", "Medical Knowledge"],
  },
];
