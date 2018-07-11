


export const phbRaces = [
	{ value: 'dragonborn', label: 'Dragonborn' },
	{ value: 'dwarfh', label: 'Dwarf (Hill)'},
	{ value: 'dwarfm', label: 'Dwarf (Mountain)'},
	{ value: 'elfd', label: 'Elf (Drow)'},
	{ value: 'elfg', label: 'Elf (High)'},
	{ value: 'elfw', label: 'Elf (Wood)'},
	{ value: 'gnomef', label: 'Gnome (Forest)'},
	{ value: 'gnomer', label: 'Gnome (Rock)'},
	{ value: 'halfelf', label: 'Half-Elf'},
	{ value: 'human', label: 'Human'},
	{ value: 'humanv', label: 'Human (Variant)'},
	{ value: 'halflingl', label: 'Halfling (Lightfoot)'},
	{ value: 'halflings', label: 'Halfling (Stout)'},
	{ value: 'tiefling', label: 'Tiefling'}
  ];

  export const scagRaces = [
	{ value: 'halfelfa', label: 'Half-Elf (Aquatic Elf Descent)' },
	{ value: 'halfelfd', label: 'Half-Elf (Drow Descent)'},
	{ value: 'halfelfm', label: 'Half-Elf (Moon Elf or Sun Elf Descent)'},
	{ value: 'halfelfw', label: 'Half-Elf (Wood Elf Descent)'},
	{ value: 'halfingg', label: 'Halfling (Ghostwise)'},
	{ value: 'tieflingv', label: 'Tiefling (Variant)'},
  ];

  export const eepcRaces = [
    { value: 'aarakocra', label: 'Aarakocra' },
    { value: 'genasia', label: 'Genasi (Air)'},
    { value: 'genasie', label: 'Genasi (Earth)'},
    { value: 'genasif', label: 'Genasi (Fire)'},
    { value: 'genasiw', label: 'Genasi (Water)'},
    { value: 'goliath', label: 'Goliath'},
  ];

export const vgmRaces = [
    { value: 'aasimarf', label: 'Aasimar (Fallen)' },
    { value: 'aasimarp', label: 'Aasimar (Protector)'},
    { value: 'aasimars', label: 'Aasimar (Scourge)'},
    { value: 'bugbear', label: 'Bugbear'},
    { value: 'firbolg', label: 'Firbolg'},
    { value: 'goblin', label: 'Goblin'},
    { value: 'hobgoblin', label: 'Hobgoblin'},
    { value: 'kenku', label: 'Kenku'},
    { value: 'kobold', label: 'Kobold'},
    { value: 'lizardfolk', label: 'Lizardfolk'},
    { value: 'orc', label: 'Orc'},
    { value: 'tabaxi', label: 'Tabaxi'},
    { value: 'triton', label: 'Triton'},
  ];

  export const ttpRaces = [
    { value: 'tortle', label: 'Tortle' },
  ];

  export const uaRaces = [
    {value: 'centaur', label: 'Centaur'},
    {value: 'changeling', label: 'Changeling'},
    {value: 'elfa', label: 'Elf (Avariel'},
    {value: 'elfg', label: 'Elf (Grugach)'},
    {value: 'minotaur', label: 'Minotaur'},
    {value: 'minotaur', label: 'Minotaur (Krynn)'},
    {value: 'revenant', label: 'Revenant'},
    {value: 'shifterb', label: 'Shifter (Beasthide)'},
    {value: 'shifterc', label: 'Shifter (Cliffwalk)'},
    {value: 'shifterls', label: 'Shifter (Longstride)'},
    {value: 'shifterlt', label: 'Shifter (Longtooth)'},
    {value: 'shifterr', label: 'Shifter (Razorclaw)'},
    {value: 'shifterw', label: 'Shifter (Wildhunt)'},
    {value: 'tieflingab', label: 'Tiefling (Abyssal)'},
    {value: 'warforged', label: 'Warforged'},
  ];

  export const mtfRaces = [
    {value: 'dwarfd', label: 'Dwarf (Duergar)'},
    {value: 'elfe', label: 'Elf (Eladrin)'},
    {value: 'elfsea', label: 'Elf (Sea)'},
    {value: 'elfshadar', label: 'Elf (Shadar-kai)'},
    {value: 'githy', label: 'Gith (Githyanki)'},
    {value: 'githz', label: 'Gith (Githzerai)'},
    {value: 'gnomed', label: 'Gnome (Deep)'},
    {value: 'tieflingas', label: 'Tiefling (Asmodeus)'},
    {value: 'tieflingba', label: 'Tiefling (Baalzebul)'},
    {value: 'tieflingd', label: 'Tiefling (Dispater'},
    {value: 'tieflingf', label: 'Tiefling (Fierna)'},
    {value: 'tieflingg', label: 'Tiefling (Glasya'},
    {value: 'tieflingl', label: 'Tiefling (Levistus)'},
    {value: 'tieflingma', label: 'Tiefling (Mammon)'},
    {value: 'tieflingme', label: 'Tiefling (Mephistopheles)'},
    {value: 'tieflingz', label: 'Tiefling (Zariel)'},
  ];


export const groupedOptions = [
	{
	  label: 'Player\'s Handbook',
	  options: phbRaces
	},
	{
	  label: 'Sword Coast\' Adventurer\'s Guide',
	  options: scagRaces
	},
	{
    label: 'Elemental Evil Player\'s Companion',
    options: eepcRaces
  },
  {
    label: 'Volo Guide\'s of Monsters',
    options: vgmRaces
  },
  {
    label: 'The Tortle Package',
    options: ttpRaces 
  },
  
  {
    label: 'Unearthed Arcana',
    options: uaRaces 
  },
  
  {
    label: 'mordenkainen\'s  Tome of Foes',
    options: mtfRaces 
	},
];