// Class 10 Chemistry — Kerala SCERT 2025 Revised Syllabus

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

export const class10ChemistryChapters: ChapterContent[] = [
  {
    chapterNumber: 1,
    title: "Periodic Table and Periodicity",
    titleMl: "ആവർത്തന പട്ടികയും ആവർത്തന പ്രവണതയും",
    summary: "This chapter covers the modern periodic table and periodic properties. Mendeleev's periodic table organized elements by atomic mass; Moseley's modern table uses atomic number (Z). Periodic properties: Atomic radius (decreases across a period, increases down a group), Ionization energy (increases across a period), Electron affinity (increases across a period), Electronegativity (increases across a period). The table has 7 periods and 18 groups. Elements in the same group have similar chemical properties. s-block (Groups 1-2), p-block (Groups 13-18), d-block (Groups 3-12, transition metals), f-block (lanthanides and actinides).",
    summaryMl: "ആധുനിക ആവർത്തന പട്ടികയും ആവർത്തന ഗുണങ്ങളും ഈ അധ്യായം ഉൾക്കൊള്ളുന്നു. മെൻഡലീഫിന്റെ പട്ടിക പരമാണു ദ്രവ്യമാനം അടിസ്ഥാനമാക്കി; മോസ്ലിയുടെ ആധുനിക പട്ടിക പരമാണു സംഖ്യ (Z) ഉപയോഗിക്കുന്നു. ആവർത്തന ഗുണങ്ങൾ: പരമാണു ആകാരം, അയോണൈസേഷൻ ഊർജ്ജം, ഇലക്ട്രോൺ ആകർഷണം, ഇലക്ട്രോനെഗറ്റിവിറ്റി.",
    keyPoints: [
      "Moseley's law: Properties are periodic functions of atomic number (Z), not atomic mass.",
      "7 periods, 18 groups in the modern periodic table.",
      "Atomic radius: Decreases across a period (left → right), increases down a group (top → bottom).",
      "Ionization energy: Energy to remove the outermost electron. Increases across a period.",
      "Electron affinity: Energy change when an electron is added to a neutral atom.",
      "Electronegativity: Ability to attract shared electrons. F is most electronegative (4.0).",
      "Metals: Left side of table (low IE, lose electrons easily). Non-metals: Right side (high EA, gain electrons).",
      "Metalloids: B, Si, Ge, As, Sb, Te — have properties of both metals and non-metals.",
    ],
    keyPointsMl: [
      "മോസ്ലിയുടെ നിയമം: ഗുണങ്ങൾ പരമാണു സംഖ്യയുടെ (Z) ആവർത്തന പ്രവണതകളാണ്.",
      "ആധുനിക ആവർത്തന പട്ടികയിൽ 7 പീരിയഡുകളും 18 ഗ്രൂപ്പുകളും ഉണ്ട്.",
      "പരമാണു ആകാരം: പീരിയഡിലൂടെ കുറയുന്നു, ഗ്രൂപ്പിലൂടെ വർദ്ധിക്കുന്നു.",
      "അയോണൈസേഷൻ ഊർജ്ജം: പുറത്തെ ഇലക്ട്രോൺ നീക്കം ചെയ്യുന്ന ഊർജ്ജം. പീരിയഡിലൂടെ വർദ്ധിക്കുന്നു.",
      "ലോഹങ്ങൾ: പട്ടികയുടെ ഇടത് ഭാഗം. അലോഹങ്ങൾ: വലത് ഭാഗം.",
      "മെറ്റലോയിഡുകൾ: B, Si, Ge, As, Sb, Te — ലോഹ-അലോഹ ഗുണങ്ങൾ ഉണ്ട്.",
    ],
    importantQuestions: [
      { q: "How does atomic radius change across a period?", a: "Atomic radius DECREASES across a period (left to right). This is because as atomic number increases, more protons are added to the nucleus, pulling electrons closer. The number of electron shells remains the same across a period, but nuclear charge increases, making the atom smaller.", qMl: "പീരിയഡിലൂടെ പരമാണു ആകാരം എങ്ങനെ മാറുന്നു?", aMl: "പീരിയഡിലൂടെ പരമാണു ആകാരം കുറയുന്നു. പരമാണു സംഖ്യ വർദ്ധിക്കുമ്പോൾ ന്യൂക്ലിയസിൽ കൂടുതൽ പ്രോട്ടോണുകൾ ചേർക്കപ്പെടുന്നു, ഇലക്ട്രോണുകളെ അടുത്തേക്ക് വലിക്കുന്നു." },
      { q: "What is the difference between Mendeleev's and the modern periodic table?", a: "Mendeleev's table (1869): Organized elements by atomic mass, had gaps for undiscovered elements, some elements were out of order. Modern table (Moseley): Organized by atomic number (Z), 7 periods and 18 groups, no gaps, correct placement of all elements. The modern table also explains the electronic configuration of elements.", qMl: "മെൻഡലീഫിന്റെയും ആധുനിക ആവർത്തന പട്ടികയും തമ്മിലുള്ള വ്യത്യാസം എന്ത്?", aMl: "മെൻഡലീഫ് (1869): പരമാണു ദ്രവ്യമാനം അടിസ്ഥാനമാക്കി, കണ്ടെത്താത്ത മൂലകങ്ങൾക്ക് ശൂന്യങ്ങൾ ഉണ്ടായിരുന്നു. ആധുനിക പട്ടിക (മോസ്ലി): പരമാണു സംഖ്യ അടിസ്ഥാനമാക്കി, 7 പീരിയഡുകളും 18 ഗ്രൂപ്പുകളും, ശൂന്യങ്ങൾ ഇല്ല." },
    ],
  },
  {
    chapterNumber: 2,
    title: "Gas Laws",
    titleMl: "വാതക നിയമങ്ങൾ",
    summary: "This chapter covers the behaviour of gases and their laws. Boyle's Law: At constant temperature, volume is inversely proportional to pressure (PV = k). Charles's Law: At constant pressure, volume is directly proportional to temperature in Kelvin (V/T = k). Gay-Lussac's Law: At constant volume, pressure is directly proportional to temperature (P/T = k). Ideal Gas Equation: PV = nRT (R = 8.314 J/mol·K). Avogadro's Law: Equal volumes of gases at same T and P contain equal number of moles. Graham's Law of Diffusion: Rate of diffusion ∝ 1/√M (inversely proportional to square root of molar mass).",
    summaryMl: "വാതകങ്ങളുടെ പെരുമാറ്റവും നിയമങ്ങളും ഈ അധ്യായം ഉൾക്കൊള്ളുന്നു. ബോയിൽസ് നിയമം: PV = k. ചാർലിസ് നിയമം: V/T = k. ഗേ-ലൂസാക്കിന്റെ നിയമം: P/T = k. ഐഡിയൽ ഗാസ് സമവാക്യം: PV = nRT. അവോഗാഡ്രോയുടെ നിയമം. ഗ്രഹാമിന്റെ വ്യാപന നിയമം.",
    keyPoints: [
      "Boyle's Law: P₁V₁ = P₂V₂ (at constant T)",
      "Charles's Law: V₁/T₁ = V₂/T₂ (at constant P, T in Kelvin)",
      "Gay-Lussac's Law: P₁/T₁ = P₂/T₂ (at constant V)",
      "Ideal Gas Equation: PV = nRT, R = 8.314 J/mol·K",
      "Avogadro's hypothesis: Equal volumes of gases at same T, P have equal number of molecules.",
      "Graham's Law: Rate₁/Rate₂ = √(M₂/M₁) — lighter gases diffuse faster.",
      "Standard Temperature and Pressure (STP): 0°C (273 K) and 1 atm. 1 mole of gas = 22.4 L at STP.",
    ],
    keyPointsMl: [
      "ബോയിൽസ് നിയമം: P₁V₁ = P₂V₂ (T നിജമായി)",
      "ചാർലിസ് നിയമം: V₁/T₁ = V₂/T₂ (P നിജമായി, T കെൽവിനിൽ)",
      "ഗേ-ലൂസാക്ക് നിയമം: P₁/T₁ = P₂/T₂ (V നിജമായി)",
      "ഐഡിയൽ ഗാസ് സമവാക്യം: PV = nRT, R = 8.314 J/mol·K",
      "അവോഗാഡ്രോ: ഒരേ T, P-യിൽ ഒരേ വ്യാപ്തിയുള്ള വാതകങ്ങൾക്ക് ഒരേ അണുക്കൾ.",
      "ഗ്രഹാം നിയമം: ഭാരം കുറഞ്ഞ വാതകങ്ങൾ വേഗത്തിൽ വ്യാപിക്കുന്നു.",
      "STP: 0°C (273 K) 1 atm. STP-യിൽ 1 മോൾ വാതകം = 22.4 L.",
    ],
    importantQuestions: [
      { q: "State Boyle's Law and explain it.", a: "Boyle's Law: At constant temperature, the volume of a fixed mass of gas is inversely proportional to its pressure. PV = k or P₁V₁ = P₂V₂. When pressure increases, volume decreases and vice versa. Example: Compressing a syringe — pushing the plunger reduces volume because pressure increases.", qMl: "ബോയിൽസ് നിയമം എഴുതുകയും വിശദീകരിക്കുകയും ചെയ്യുക.", aMl: "ബോയിൽസ് നിയമം: താപനില നിജമായി, വാതകത്തിന്റെ വ്യാപ്തി അതിന്റെ മർദ്ദത്തോട് വിപരീത അനുപാതത്തിലാണ്. PV = k അല്ലെങ്കിൽ P₁V₁ = P₂V₂. മർദ്ദം വർദ്ധിക്കുമ്പോൾ വ്യാപ്തി കുറയുന്നു." },
      { q: "What is the Ideal Gas Equation?", a: "PV = nRT, where P = pressure, V = volume, n = number of moles, R = universal gas constant (8.314 J/mol·K), T = temperature in Kelvin. It combines Boyle's, Charles's, and Gay-Lussac's laws into one equation.", qMl: "ഐഡിയൽ ഗാസ് സമവാക്യം എന്ത്?", aMl: "PV = nRT, ഇവിടെ P = മർദ്ദം, V = വ്യാപ്തി, n = മോളുകളുടെ എണ്ണം, R = സാർവത്രിക വാതക സ്ഥിരാങ്കം (8.314 J/mol·K), T = കെൽവിനിലെ താപനില. ബോയിൽസ്, ചാർലിസ്, ഗേ-ലൂസാക്ക് നിയമങ്ങളെ ഒരു സമവാക്യത്തിൽ സംയോജിപ്പിക്കുന്നു." },
    ],
  },
  {
    chapterNumber: 3,
    title: "Reactivity Series of Metals",
    titleMl: "ലോഹങ്ങളുടെ പ്രതിക്രിയാശീല ശ്രേണി",
    summary: "The reactivity series arranges metals in order of decreasing reactivity: K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Hg > Ag > Au. More reactive metals displace less reactive metals from their salt solutions. Displacement reactions: Zn + CuSO₄ → ZnSO₄ + Cu (Zn displaces Cu because Zn is more reactive). Metals above hydrogen can displace hydrogen from acids. Extraction of metals: Electrolysis (for reactive metals like Na, Al), Reduction with carbon (for moderately reactive metals like Fe), Heating alone (for unreactive metals like Hg, Au). Corrosion: Rusting of iron (Fe + O₂ + H₂O → Fe₂O₃·xH₂O). Prevention: galvanizing, painting, oiling, alloying.",
    summaryMl: "പ്രതിക്രിയാശീല ശ്രേണി ലോഹങ്ങളെ പ്രതിക്രിയാശീലത കുറയുന്ന ക്രമത്തിൽ അടുക്കുന്നു: K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Hg > Ag > Au. കൂടുതൽ പ്രതിക്രിയാശീലമുള്ള ലോഹങ്ങൾ കുറവുള്ളവയെ തള്ളുന്നു. ജംഗക്രിയകൾ. ലോഹങ്ങളുടെ വേർപെടുത്തൽ. മങ്കലം: ഇരുമ്പിന്റെ മങ്കലം (റസ്റ്റിംഗ്).",
    keyPoints: [
      "Reactivity Series: K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Hg > Ag > Au",
      "Displacement: More reactive metal displaces less reactive from its salt solution.",
      "Zn + CuSO₄ → ZnSO₄ + Cu (Zn is more reactive than Cu)",
      "Metals above H can displace H₂ from dilute acids; metals below H cannot.",
      "Extraction: Electrolysis (Na, Al), Carbon reduction (Fe, Zn), Heating (Hg, Au).",
      "Corrosion: Iron rusts (Fe₂O₃·xH₂O). Prevention: galvanizing (Zn coating), painting, alloys.",
      "Alloys: Mixtures of metals with improved properties (brass = Cu+Zn, bronze = Cu+Sn, steel = Fe+C).",
    ],
    keyPointsMl: [
      "പ്രതിക്രിയാശീല ശ്രേണി: K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Hg > Ag > Au",
      "തള്ളൽ പ്രതിക്രിയ: കൂടുതൽ പ്രതിക്രിയാശീലമുള്ള ലോഹം കുറവുള്ളതിനെ തള്ളുന്നു.",
      "Zn + CuSO₄ → ZnSO₄ + Cu (Zn Cu-യേക്കാൾ കൂടുതൽ പ്രതിക്രിയാശീലം)",
      "H-യ്ക്ക് മുകളിലുള്ള ലോഹങ്ങൾ ആസിഡുകളിൽ നിന്ന് H₂ തള്ളാം.",
      "വേർപെടുത്തൽ: ഇലക്ട്രോലൈസിസ് (Na, Al), കാർബൺ കുറയ്ക്കൽ (Fe, Zn), ചൂടാക്കൽ (Hg, Au).",
      "മങ്കലം: ഇരുമ്പ് റസ്റ്റ് ചെയ്യുന്നു. തടയൽ: ഗാൽവനൈസിംഗ്, പെയിന്റിംഗ്, ലോഹമിശ്രിതങ്ങൾ.",
      "ലോഹമിശ്രിതങ്ങൾ: മെച്ചപ്പെടുത്തിയ ഗുണങ്ങളുള്ള ലോഹ മിശ്രിതങ്ങൾ (ബ്രാസ് = Cu+Zn, ബ്രോൺസ് = Cu+Sn).",
    ],
    importantQuestions: [
      { q: "What is the reactivity series? Why is it important?", a: "The reactivity series is a list of metals arranged in decreasing order of reactivity: K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Hg > Ag > Au. It is important because it helps predict: (1) displacement reactions, (2) which metals can be extracted by which method, (3) which metals react with acids, (4) which metals corrode easily.", qMl: "പ്രതിക്രിയാശീല ശ്രേണി എന്ത്? അത് എന്തുകൊണ്ട് പ്രധാനമാണ്?", aMl: "ലോഹങ്ങളെ പ്രതിക്രിയാശീലത കുറയുന്ന ക്രമത്തിൽ അടുക്കിയ പട്ടികയാണ് പ്രതിക്രിയാശീല ശ്രേണി. ഇത് പ്രധാനമാണ്: (1) തള്ളൽ പ്രതിക്രിയകൾ പ്രവചിക്കാൻ, (2) ഏത് രീതിയിൽ വേർപെടുത്താം, (3) ഏത് ലോഹങ്ങൾ ആസിഡുകളുമായി പ്രതികരിക്കും." },
    ],
  },
  {
    chapterNumber: 4,
    title: "Acids, Bases, and Salts",
    titleMl: "ആസിഡുകൾ, ബേസുകൾ, ലവണങ്ങൾ",
    summary: "Acids taste sour, turn blue litmus red, produce H⁺ ions. Bases taste bitter, turn red litmus blue, produce OH⁻ ions. pH scale: 0-14 (7 = neutral, <7 = acidic, >7 = basic). pH = -log[H⁺]. Neutralization: Acid + Base → Salt + Water. Examples: HCl + NaOH → NaCl + H₂O. Salts: Products of neutralization. Types: normal salt (NaCl), acid salt (NaHCO₃), basic salt, double salt (washing soda Na₂CO₃·10H₂O, baking soda NaHCO₃). Common indicators: litmus, phenolphthalein, methyl orange.",
    summaryMl: "ആസിഡുകൾ പുളിപ്പ് രുചി, നീല ലിറ്റ്മസ് ചുവപ്പാക്കുന്നു, H⁺ അയോണുകൾ ഉത്പാദിപ്പിക്കുന്നു. ബേസുകൾ കൈപ്പ് രുചി, ചുവപ്പ് ലിറ്റ്മസ് നീലയാക്കുന്നു, OH⁻ അയോണുകൾ. pH സ്കെയിൽ: 0-14. ന്യൂട്രലൈസേഷൻ: ആസിഡ് + ബേസ് → ലവണം + വെള്ളം.",
    keyPoints: [
      "Acids: Sour taste, turn blue litmus red, produce H⁺ ions (e.g., HCl, H₂SO₄, CH₃COOH)",
      "Bases: Bitter taste, turn red litmus blue, produce OH⁻ ions (e.g., NaOH, Ca(OH)₂)",
      "pH Scale: 0-14. pH = 7 is neutral. pH < 7 is acidic. pH > 7 is basic.",
      "pH = -log[H⁺] — lower pH means more acidic.",
      "Neutralization: Acid + Base → Salt + Water (exothermic reaction)",
      "Common salts: NaCl (table salt), NaHCO₃ (baking soda), Na₂CO₃·10H₂O (washing soda)",
      "Indicators: Litmus (blue→red in acid), Phenolphthalein (colorless in acid, pink in base), Methyl orange (red in acid, yellow in base).",
    ],
    keyPointsMl: [
      "ആസിഡുകൾ: പുളിപ്പ് രുചി, നീല ലിറ്റ്മസ് ചുവപ്പാക്കുന്നു, H⁺ അയോണുകൾ.",
      "ബേസുകൾ: കൈപ്പ് രുചി, ചുവപ്പ് ലിറ്റ്മസ് നീലയാക്കുന്നു, OH⁻ അയോണുകൾ.",
      "pH സ്കെയിൽ: 0-14. pH = 7 ന്യൂട്രൽ. <7 ആസിഡിക്. >7 ബേസിക്.",
      "ന്യൂട്രലൈസേഷൻ: ആസിഡ് + ബേസ് → ലവണം + വെള്ളം (എക്സോതെർമിക്)",
      "ലിറ്റ്മസ് (ആസിഡിൽ നീല→ചുവപ്പ്), ഫീനോൾഫ്തലീൻ, മെത്തിൽ ഓറഞ്ച്.",
    ],
    importantQuestions: [
      { q: "What is the pH scale? What does pH = 7 mean?", a: "The pH scale measures how acidic or basic a solution is, ranging from 0 to 14. pH = -log[H⁺]. pH = 7 means the solution is NEUTRAL (pure water). pH < 7 means acidic (e.g., pH 3 = strong acid). pH > 7 means basic/alkaline (e.g., pH 13 = strong base). Each unit change in pH represents a 10-fold change in H⁺ concentration.", qMl: "pH സ്കെയിൽ എന്ത്? pH = 7 എന്ത് അർത്ഥമാക്കുന്നു?", aMl: "pH സ്കെയിൽ ഒരു ലായനം എത്ര ആസിഡിക് അല്ലെങ്കിൽ ബേസിക് ആണെന്ന് അളക്കുന്നു, 0 മുതൽ 14 വരെ. pH = 7 എന്നത് ലായനം ന്യൂട്രലാണെന്ന് അർത്ഥമാക്കുന്നു. pH < 7 ആസിഡിക്. pH > 7 ബേസിക്." },
    ],
  },
  {
    chapterNumber: 5,
    title: "Metals and Non-metals",
    titleMl: "ലോഹങ്ങളും അലോഹങ്ങളും",
    summary: "Metals: Good conductors of heat and electricity, shiny, malleable, ductile, high melting point (except mercury). They lose electrons to form positive ions (cations). Non-metals: Poor conductors, dull, brittle (if solid), low melting point. They gain electrons to form negative ions (anions). Metalloids (B, Si, Ge) have properties of both. Chemical properties: Metals react with oxygen (metal oxides are basic), acids (produce salt + H₂ gas), water. Ionic compounds: Formed by transfer of electrons (metal + non-metal → ionic bond). Properties of ionic compounds: high melting point, soluble in water, conduct electricity when dissolved/melted.",
    summaryMl: "ലോഹങ്ങൾ: ചൂട്, വൈദ്യുതി നല്ല കണ്ടക്ടറുകൾ, തിളക്കം, മൃദുവാക്കാവുന്നത്, ദാരണ്യം. ധനാത്മക അയോണുകൾ (കാറ്റ്യൺസ്) രൂപപ്പെടുത്തുന്നു. അലോഹങ്ങൾ: ദുർബല കണ്ടക്ടറുകൾ, മങ്ങിയ, പൊട്ടുന്നത്. ഋണാത്മക അയോണുകൾ (ആനയൺസ്). അയോണിക് സംയോജനങ്ങൾ.",
    keyPoints: [
      "Metals: Conductors, malleable, ductile, lustrous. Non-metals: Insulators, brittle, dull.",
      "Metals → cations (positive ions). Non-metals → anions (negative ions).",
      "Metal + O₂ → Metal oxide (basic in nature)",
      "Metal + dilute acid → Salt + H₂ gas",
      "Ionic bond: Transfer of electrons from metal to non-metal.",
      "Ionic compounds: High MP, soluble in water, conduct in solution/melt.",
      "Covalent bond: Sharing of electrons (between non-metals).",
    ],
    keyPointsMl: [
      "ലോഹങ്ങൾ: കണ്ടക്ടറുകൾ, മൃദുവാക്കാവുന്നത്, ദാരണ്യം, തിളക്കം.",
      "ലോഹങ്ങൾ → കാറ്റ്യൺസ്. അലോഹങ്ങൾ → ആനയൺസ്.",
      "ലോഹം + O₂ → ലോഹ ഓക്സൈഡ് (ബേസിക്)",
      "ലോഹം + വിയർ ആസിഡ് → ലവണം + H₂ വാതകം",
      "അയോണിക് ബോണ്ട്: ലോഹത്തിൽ നിന്ന് അലോഹത്തിലേക്ക് ഇലക്ട്രോൺ കൈമാറ്റം.",
      "കോവലന്റ് ബോണ്ട്: ഇലക്ട്രോണുകൾ പങ്കിടൽ (അലോഹങ്ങൾ തമ്മിൽ).",
    ],
    importantQuestions: [
      { q: "How do metals react with dilute acids?", a: "Metals above hydrogen in the reactivity series react with dilute acids to produce salt and hydrogen gas. Example: Zn + 2HCl → ZnCl₂ + H₂↑. The more reactive the metal, the more vigorously it reacts. Metals below hydrogen (Cu, Ag, Au) do not react with dilute acids.", qMl: "ലോഹങ്ങൾ വിയർ ആസിഡുകളുമായി എങ്ങനെ പ്രതികരിക്കുന്നു?", aMl: "പ്രതിക്രിയാശീല ശ്രേണിയിൽ H-യ്ക്ക് മുകളിലുള്ള ലോഹങ്ങൾ വിയർ ആസിഡുകളുമായി പ്രതികരിച്ച് ലവണവും ഹൈഡ്രോജൻ വാതകവും ഉത്പാദിപ്പിക്കുന്നു. ഉദാ: Zn + 2HCl → ZnCl₂ + H₂↑. H-യ്ക്ക് താഴെയുള്ള ലോഹങ്ങൾ (Cu, Ag, Au) പ്രതികരിക്കില്ല." },
    ],
  },
  {
    chapterNumber: 6,
    title: "Nomenclature of Organic Compounds",
    titleMl: "ജൈവ സംയോജനങ്ങളുടെ നാമകരണം",
    summary: "Organic chemistry is the study of carbon compounds. Carbon forms 4 covalent bonds (tetravalent). Hydrocarbons: Alkanes (CₙH₂ₙ₊₂, single bonds, -ane suffix), Alkenes (CₙH₂ₙ, double bond, -ene), Alkynes (CₙH₂ₙ₋₂, triple bond, -yne). Functional groups: -OH (alcohol), -CHO (aldehyde), -COOH (carboxylic acid), -NH₂ (amine). IUPAC naming: Identify longest carbon chain, number from the end nearest to functional group, add prefix for substituents and suffix for functional group. Examples: CH₃OH = Methanol, CH₃CHO = Ethanal, CH₃COOH = Ethanoic acid.",
    summaryMl: "ജൈവ രസത്തശാസ്ത്രം കാർബൺ സംയോജനങ്ങളുടെ പഠനമാണ്. കാർബൺ 4 കോവലന്റ് ബോണ്ടുകൾ രൂപപ്പെടുത്തുന്നു. ഹൈഡ്രോകാർബണുകൾ: അൽക്കേനുകൾ (CₙH₂ₙ₊₂), അൽക്കീനുകൾ (CₙH₂ₙ), അൽക്കൈനുകൾ (CₙH₂ₙ₋₂). ഫംഗ്ഷണൽ ഗ്രൂപ്പുകൾ: -OH (ആൽക്കഹോൾ), -CHO (അൽഡിഹൈഡ്), -COOH (കാർബോക്സിലിക് ആസിഡ്). IUPAC നാമകരണം.",
    keyPoints: [
      "Carbon is tetravalent — forms 4 covalent bonds.",
      "Alkanes: CₙH₂ₙ₊₂ (single bond, -ane): Methane CH₄, Ethane C₂H₆, Propane C₃H₈",
      "Alkenes: CₙH₂ₙ (double bond, -ene): Ethene C₂H₄, Propene C₃H₆",
      "Alkynes: CₙH₂ₙ₋₂ (triple bond, -yne): Ethyne C₂H₂",
      "Functional groups: -OH (alcohol), -CHO (aldehyde), -COOH (acid), -CO- (ketone), -NH₂ (amine)",
      "IUPAC naming rules: Longest chain + number + prefix (substituent) + suffix (functional group)",
    ],
    keyPointsMl: [
      "കാർബൺ ചതുർബന്ധമാണ് — 4 കോവലന്റ് ബോണ്ടുകൾ.",
      "അൽക്കേനുകൾ: CₙH₂ₙ₊₂ (ഒറ്റ ബോണ്ട്, -ane): മെത്തേൻ CH₄",
      "അൽക്കീനുകൾ: CₙH₂ₙ (ഇരട്ട ബോണ്ട്, -ene): എത്തീൻ C₂H₄",
      "അൽക്കൈനുകൾ: CₙH₂ₙ₋₂ (മൂന്നിരട്ട ബോണ്ട്, -yne): എത്തൈൻ C₂H₂",
      "ഫംഗ്ഷണൽ ഗ്രൂപ്പുകൾ: -OH, -CHO, -COOH, -CO-, -NH₂",
      "IUPAC നാമകരണ നിയമങ്ങൾ: ഏറ്റവും നീണ്ട ചെയിൻ + നമ്പർ + പ്രീഫിക്സ് + സഫിക്സ്",
    ],
    importantQuestions: [
      { q: "What is the difference between alkanes, alkenes, and alkynes?", a: "Alkanes: Saturated hydrocarbons with only single bonds. General formula CₙH₂ₙ₊₂. Suffix: -ane (e.g., Methane CH₄). Alkenes: Unsaturated hydrocarbons with at least one double bond. Formula CₙH₂ₙ. Suffix: -ene (e.g., Ethene C₂H₄). Alkynes: Unsaturated hydrocarbons with at least one triple bond. Formula CₙH₂ₙ₋₂. Suffix: -yne (e.g., Ethyne C₂H₂).", qMl: "അൽക്കേനുകളും അൽക്കീനുകളും അൽക്കൈനുകളും തമ്മിലുള്ള വ്യത്യാസം എന്ത്?", aMl: "അൽക്കേനുകൾ: ഒറ്റ ബോണ്ടുകൾ മാത്രമുള്ള സംതൃപ്ത ഹൈഡ്രോകാർബണുകൾ. CₙH₂ₙ₊₂. -ane. അൽക്കീനുകൾ: ഇരട്ട ബോണ്ട് ഉള്ള അസംതൃപ്ത ഹൈഡ്രോകാർബണുകൾ. CₙH₂ₙ. -ene. അൽക്കൈനുകൾ: മൂന്നിരട്ട ബോണ്ട് ഉള്ള അസംതൃപ്ത ഹൈഡ്രോകാർബണുകൾ. CₙH₂ₙ₋₂. -yne." },
    ],
  },
  {
    chapterNumber: 7,
    title: "Organic Reactions",
    titleMl: "ജൈവ പ്രതിക്രിയകൾ",
    summary: "This chapter covers the main types of organic reactions: Addition reactions (unsaturated → saturated, e.g., ethene + H₂ → ethane), Substitution reactions (one atom replaced by another, e.g., CH₄ + Cl₂ → CH₃Cl + HCl), Elimination reactions (removal of atoms to form double/triple bond, e.g., ethanol → ethene), Oxidation reactions (alcohol → aldehyde → carboxylic acid). Polymerization: Joining of small molecules (monomers) to form large molecules (polymers). Examples: polyethene, PVC, nylon.",
    summaryMl: "ചേർക്കൽ പ്രതിക്രിയകൾ (അസംതൃപ്ത → സംതൃപ്ത), പ്രതിസ്ഥാപന പ്രതിക്രിയകൾ (ഒരു ആറ്റം മറ്റൊന്ന് കൊണ്ട് മാറ്റിയെഴുതൽ), ഒഴിവാക്കൽ പ്രതിക്രിയകൾ, ഓക്സീകരണ പ്രതിക്രിയകൾ. പോളിമൈസേഷൻ: ചെറിയ അണുക്കൾ (മോണോമറുകൾ) വലിയ അണുക്കളായി ചേരുന്നു.",
    keyPoints: [
      "Addition: CH₂=CH₂ + H₂ → CH₃-CH₃ (unsaturated → saturated)",
      "Substitution: CH₄ + Cl₂ → CH₃Cl + HCl (one atom replaced)",
      "Elimination: CH₃CH₂OH → CH₂=CH₂ + H₂O (double bond formed)",
      "Oxidation: CH₃CH₂OH → CH₃CHO → CH₃COOH (alcohol → aldehyde → acid)",
      "Polymerization: Monomers → Polymer (e.g., nCH₂=CH₂ → [-CH₂-CH₂-]ₙ)",
      "Polymers: Polyethene, PVC, Nylon, Teflon, Buna-S",
    ],
    keyPointsMl: [
      "ചേർക്കൽ: CH₂=CH₂ + H₂ → CH₃-CH₃",
      "പ്രതിസ്ഥാപനം: CH₄ + Cl₂ → CH₃Cl + HCl",
      "ഒഴിവാക്കൽ: CH₃CH₂OH → CH₂=CH₂ + H₂O",
      "ഓക്സീകരണം: ആൽക്കഹോൾ → അൽഡിഹൈഡ് → ആസിഡ്",
      "പോളിമൈസേഷൻ: മോണോമറുകൾ → പോളിമർ",
    ],
    importantQuestions: [
      { q: "What is an addition reaction? Give an example.", a: "An addition reaction is when atoms are added across a double or triple bond in an unsaturated compound, converting it to a saturated compound. Example: CH₂=CH₂ (ethene) + H₂ → CH₃-CH₃ (ethane). Hydrogen is added across the double bond.", qMl: "ചേർക്കൽ പ്രതിക്രിയ എന്ത്? ഒരു ഉദാഹരണം തരിക.", aMl: "അസംതൃപ്ത സംയോജനത്തിലെ ഇരട്ട/മൂന്നിരട്ട ബോണ്ടിലൂടെ ആറ്റങ്ങൾ ചേർക്കപ്പെടുന്ന പ്രതിക്രിയയാണ് ചേർക്കൽ. ഉദാ: CH₂=CH₂ (എത്തീൻ) + H₂ → CH₃-CH₃ (എത്തേൻ). ഇരട്ട ബോണ്ടിലൂടെ ഹൈഡ്രോജൻ ചേർക്കപ്പെടുന്നു." },
    ],
  },
];
