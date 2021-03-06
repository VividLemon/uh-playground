import { GameSkills } from '@/types'

export const a: Array<GameSkills> = [
  {
    id: 1,
    world: 'Universal Horizons',
    classes: {
      art: {
        description: 'Art encompasses skills that entertain and handle crowds',
        skills: [
          {
            name: 'Artistry',
            description:
              'Artistry creates works of art using materials. These creations include traditional subjects, calligraphy, drawings, sculpture, glassblowing, painting, pottery, and large-scale installations. Additions in modern genres include mixed media, cinematic media, photography, and digital media',
            limit: 'Universal',
            base: 'Dexterity',
            experts: {
              medium: [
                'oils',
                'photographs',
                'sculpture',
                'glass',
                'stained glass',
                'chalk',
                'fibers',
                'metal',
                'pastels',
                'watercolor',
              ],
              style: ['cubism', 'pointillism', 'impressionism', 'installation'],
            },
          },
          {
            name: 'Dance',
            description:
              'Dance includes a variety of styles such as competitive, social, ballroom, tai chi, club, modern, and ballet. Thespianism and Dance in skill combination create interpretive dance',
            limit: 'Universal',
            base: 'Dexterity',
            experts: {
              folk: ['Nation'],
              style: ['ballet', 'jazz', 'hip-hop', 'tap', 'ballroom', 'square'],
            },
          },
          {
            name: 'Deception',
            base: 'Deduction',
            limit: 'Universal',
            description:
              'Deception promotes or detracts information from governments, groups, and individuals. A person intentionally misinterprets facts for ulterior motives. Altered event interpretation changed identity or background, hiding objects, lies, propaganda, and misinformation are tools of deception. Deception is essential for spies, scoundrels, and those working the criminal underworld... Using TN match, skill combination applies. Shifts applied depend on scheme complexity, opportunity, environment, and resources of both the deceiver and those to be deceived. As per combination rules, use incurs a one-shift penalty... Bluffing is an Influence roll skill combination with Deception, using the most appropriate resource for the prevarication. Best Perception counters a bluff... Mind Influence-Lying, Body Influence-Feigning death, Soul Influence-Fake worship, Wealth Influence-Hiding wealth... Best Perception counters Deception attempts. Other skills may apply or add shifts as the Guide interprets the situation',
            pairs: [
              {
                skill: 'Domestics',
                description: 'Redecorate an apartment for con job',
              },
              {
                skill: 'Domestics',
                description: 'Hair, make-up part of disguise',
              },
              {
                skill: 'Thespianism',
                description: 'Make-up, impersonation with disguise',
              },
              {
                skill: 'Laws',
                description: 'False evidence to win a court case',
              },
              {
                skill: 'Geography',
                description: 'Spot site for border crossing',
              },
              { skill: 'Psychology', description: 'Simulating torture' },
              { skill: 'Business Administration', description: 'Embezzlement' },
              { skill: 'Public Administration', description: 'Smuggling' },
              {
                skill: 'Textiles',
                description: 'Concealment of items in clothing',
              },
              { skill: 'Hunt', description: 'Concealment of items in woods' },
            ],
          },
          {
            base: 'Memory',
            limit: 'Exclusive',
            name: 'Etiquette',
            description:
              "Etiquette represents manners, means of address, and other social skills. Table manners, mode of speech, specific vocabulary, dress, hairstyle, political and social awareness, breadth and depth of experiences (such as acquaintances and travel) rely on Etiquette. First impressions often call for Etiquette rolls... Etiquette temporarily modifies the target's attitude for the duration of the encounter. Memory can be used instead, with a two-shift penalty... Changes in attitude for Public Speaking and Influence: two shift penalty-<TN50, one shift penalty-TN50, no shift-TN75, one shift bonus-TN100, two shift bonus-TN125+",
            experts: {
              style: ['dress', 'grooming', 'greetings'],
              nationality: ['Nation'],
              manors: ['table', 'location', 'event'],
            },
          },
          {
            base: 'Dexterity',
            limit: 'Acclimatable',
            description:
              'Music may be taken multiple times, one time for each separate musical instrument group. Musical groups are vocals, horns, strings, percussion, electronic, woodwinds, or other skills specific to a particular genre. The Hero also may compose music with this skill',
            name: 'Music, {group}',
            experts: {
              instrument: [
                'trombone',
                'bugle',
                'lyre',
                'harpsichord',
                'bongo',
                'balalaika',
                'gong',
                'keyboard',
                'drum set',
                'snare',
                'voice',
              ],
              period: [
                'classical',
                'jazz',
                'rock',
                'modern',
                'romantic',
                'symphonic',
                'baroque',
                'madrigal',
              ],
            },
          },
          {
            base: 'Imagination',
            limit: 'Universal',
            name: 'Thespianism',
            description:
              'Thespianism encompasses acting, mimicry, impersonation, general knowledge of stage management, stagecraft, lighting, and makeup. Performances range from miming to comic improvisation. Impersonation in a covert operation requires skill combination with Deception... TN50-Miming, reading lines, TN75-Lighting, sound, TN100-Feign death, rehearsed performance, TN125-Directing, TN150-Improvisation',
            experts: {
              genre: [
                'daytime drama',
                'opera',
                'mime',
                'musicals',
                'sci-fi',
                'slap-stick',
                'westerns',
              ],
              style: [
                'blocking',
                'costumes',
                'directing',
                'makeup',
                'mimery',
                'impersonation',
                'sound board',
                'stage lighting',
              ],
            },
          },
        ],
      },
      build: {
        description:
          'Building encompasses fields of integrated systems or physical sciences that make something or create tools and devices',
        skills: [
          {
            base: 'Memory',
            description:
              'Architecture is knowledge of structural design. Heroes plan draft, and oversee construction of buildings, vehicles, ships, space-faring modules, and so on. This skill functions with skill combination... With advanced technologies in particular genres, more skills may be needed. Designing a spacecraft horticultural module requires skills in Farming, Architecture, Mechanics, Engineering, and Extreme Environments. Beyond this, knowledge of Architecture also gives the ability to detect secret rooms or passages at base TN100 if actively searching',
            limit: 'Acclimatable',
            name: 'Architecture',
            pairs: [
              {
                skill: 'Construction',
                description: 'Home construction; cinder block',
              },
              {
                skill: 'Masonry',
                description: 'Brick; marble; cut stone structure',
              },
              { skill: 'Mechanics | Manufacturing', description: 'Vehicle' },
              { skill: 'Geography | Travel', description: 'Civil planning' },
              {
                skill: 'Military | Construction',
                description: 'City walls and defenses',
              },
              { skill: 'Military | Masonry', description: 'Castle' },
              { skill: 'Mechanics | Physics', description: 'Space drive' },
            ],
          },
          {
            base: 'Strength',
            name: 'Construction',
            description:
              'Construction includes carpentry, plumbing, and in applicable genres, basic electrical wiring. It enables rudimentary objects (including paper) and structures to be made from basic materials at hand. Construction builds most things out of wood or even adobe. Skill combination is necessary for complicated projects, with combinations determined by the Guide. Fine detail may be achieved, with shifts. Guides assign shifts to specific projects, depending on resources available and time spend. Construction is a key skill used in creating traps',
            limit: 'Acclimatable',
            experts: {
              material: ['ash', 'pine', 'oak', 'granite', 'sandstone', 'tin'],
              style: ['plumbing', 'wiring', 'furniture', 'traps'],
              vehicle: ['car', 'ship', 'star-ship', 'plane', 'hovercraft'],
            },
          },
          {
            base: 'Dexterity',
            name: 'Cooking',
            description:
              'Cook encompasses processing food into meals and consumable products. At lower ranks, cook creates meals while higher ranks allow production of refined wines, gourmet foods, and specialized ales. Perfume creation is skill combination of Botany and Cook',
            limit: 'Acclimatable',
            experts: {
              course: ['desserts', 'soups', 'salads', 'main'],
              cultural: ['nationality'],
              beverages: ['wines', 'beers', 'soda', 'mixers', 'juices'],
              catering: ['event', 'mobile', 'trail'],
              style: ['restaurant'],
            },
          },
          {
            base: 'Mind/2',
            name: 'Electronics',
            limit: 'Exclusive',
            description:
              'Electronics covers knowledge of electric inventions, including design, application, and repair. Rulings are genre-specific. Some genres utilize Electronics for vacuum-tube technology to transistor technology. Other genres use chips of silicon, transistor boards, and nanotechnology. Other genres may use advances technology like magnetically suspended energy portals, living electricity, etc. Construction of electronic items usually requires skill combination. Other skill combinations include bio-genetic, computers, neuropathway replication, and nanotechnology... In some genres, Electronics is considered magical, grants spells, may be broken up, or combined with other skills',
            experts: {
              style: [
                'appliances',
                'communication',
                'energy conversion',
                'generators',
                'guidance',
                'electrical transmission',
              ],
              vehicle: ['type'],
              weapons: ['type'],
            },
          },
          {
            base: 'Body/2',
            description:
              'Farm covers all agricultural activities, including raising crops, animals, or other organisms',
            name: 'Farming',
            limit: 'Exclusive',
            experts: {
              style: ['hydroponics', 'viticulture', 'micro-culture', 'organic'],
              crop: ['trees', 'fruits', 'grains', 'domesticated animals'],
            },
          },
          {
            base: 'Body/2',
            name: 'Leather-work',
            description:
              'Leather-work enables curing of animal skins and hides to produce leather. Skill use covers cobbling, tanning, taxidermy, and manufacturing of clothing and armor. Skill combination is necessary for mummification, dyed goods, and studded equipment',
            limit: 'Exclusive',
            experts: {
              style: ['tanning', 'accessories', 'shields'],
              armor: ['leather', 'hide', 'resin', 'carapace'],
              weapon: ['type'],
              taxidermy: ['vermin', 'animals', 'dragons', 'plants'],
            },
          },
          {
            base: 'Mind/2',
            name: 'Manufacturing',
            description:
              'Manufacturing is knowledge of process and methodology for production of products, composition to assembly lines. Skill combination pairs Manufacturing with other skills to allow mass production, such as mass agriculture, and mass textile production',
            limit: 'Exclusive',
          },
          {
            name: 'Masonry',
            base: 'Strength',
            limit: 'Acclimatable',
            description:
              'Masonry allows the use of cut stone to build structures from mortar, stone, and brick',
            experts: {
              style: [
                'monument',
                'hearth',
                'foundation',
                'tile',
                'residential',
                'castle',
                'free-standing walls',
                'tunnels',
                'traps',
              ],
            },
          },
          {
            name: 'Mechanics/Lock-picking',
            base: 'Body/2',
            limit: 'Exclusive',
            description:
              'Mechanics creates, repairs, and manipulates mechanical moving objects, such as locks, engines, and appliances. Inventions with moving parts embody this skill. Applications vary from combustion engines to locks... TNs against picking a lock: two shift penalty-No lock-picks, one shift penalty-Simple tools, no shift-Lock-picks, one shift bonus-Exceptional lock-picks... Quality of locks ranges from TN100 to TN200 or higher. Skill combination with Construction and Mechanics create or disarm traps. Other combinations with Engineering and Electronics are necessary to build and repair complex machines',
            experts: {
              style: ['lock-picking', 'household', 'traps', 'transmissions'],
              engine: ['combustion', 'fusion', 'hyper-drive', 'steam'],
            },
          },
          {
            base: 'Memory',
            description:
              'Pharmaceuticals permits extraction, dispensing, identification, and administration of various chemicals for live organisms. Further genre expansions describe medication, drugs, and poisons. Professionals provide details of pharmaceutical interactions, reactions, and safety administration data. Creation of refined pharmaceuticals, drugs, and toxins requires a laboratory, equipment, and skill combination with Chemistry... Heroes with Pharmaceuticals can identify poisons (TN150). A proper lab, case history, examination, and exposure samples each add a shift. Rarity and similarity to other diseases may add negative shifts. Magical poisons also add two negative shifts... Antidotes for ability damage can be created with appropriate resources, skill, and setting (TN150) at one ability point per ten rank',
            limit: 'Exclusive',
            name: 'Pharmaceuticals/Toxicology',
            experts: {
              style: ['identification', 'drug interactions'],
              toxin: ['animal', 'dragon', 'plant', 'vermin'],
            },
          },
          {
            base: 'Mind/2',
            name: 'Robotics',
            description:
              'Robotics allows identification, maintenance, and operation of robots. Robots are non-biological and artificial; they have no Soul. Skill combinations are useful in reprogramming (Computer Science), construction (Construction; Manufacturing), or repair (Mechanics). At very high rank, designs of new robotic prototypes are possible',
            limit: 'Exclusive',
            experts: {
              environment: [
                'arctic',
                'space',
                'nanotechnology',
                'underwater',
                'extreme heat',
              ],
            },
          },
          {
            base: 'Strength',
            name: 'Smithing/Armoring',
            description:
              'Smithing transforms raw materials and ore into metals using a forge. Smithing creates metallic armors, weapons, parts, and refined materials (including welding solder). Welding is a common use. Jewelry and artwork use skill combination with Artistry. Smelting is a skill combination with Geology',
            limit: 'Exclusive',
            experts: {
              metal: [
                'iron',
                'steel',
                'gold',
                'silver',
                'titanium',
                'adamantium',
                'mithril',
              ],
              item: [
                'ship hull',
                'katana',
                'flails',
                'gears',
                'wheels',
                'shields',
                'banded mail',
                'plate mail',
                'rings',
                'necklaces',
                'dental tools',
                'scalpels',
                'utensils',
              ],
            },
          },
          {
            name: 'Textiles',
            base: 'Dexterity',
            description:
              'Textiles creates and manipulates fibers to construct objects such as bags, baskets, books, carpets, clothing, paper, ropes, rugs, sandals, and other woven items',
            limit: 'Exclusive',
            experts: {
              fiber: ['cotton', 'hemp', 'nylon', 'reed', 'silk'],
              item: [
                'bags',
                'pants',
                'poncho',
                'paper',
                'papyrus',
                'rope',
                'rugs',
                'sandals',
                'shawl',
              ],
            },
          },
        ],
      },
      buy: {
        description:
          'Buying encompasses the generation of wealth and estimation of value',
        skills: [
          {
            base: 'Deduction',
            name: 'Appraisal',
            description:
              'Appraisal identifies monetary value of goods and services. Appraisal uses skill combination and employs concealed rolls. Players choose the applicable skill and Guides assign shifts dependent on the rank. A failed roll allows the Guide to fabricate values above or below the true value',
            limit: 'Exclusive',
          },
          {
            base: 'Wealth/2',
            description:
              'Business Administration is accounting, management, and marketing of companies. Heroes with this skill maximize efficiency and income, manage guilds as clients, and discover the current financial health of other businesses. This skill is used with skill combination. For instance, a floral shop manager would require this skill and Botany',
            limit: 'Exclusive',
            name: 'Business Administration',
          },
          {
            name: 'Mercantilism',
            base: 'Wealth/2',
            description:
              'Economics analyzes markets and commodities used for bartering and monetary exchange. Merchants maximize profits through distribution and delivery to starving markets. Economics can predict how likely supply and demand affect both the micro- and macro-economic environments',
            limit: 'Acclimatable',
            experts: {
              commodity: [
                'gold',
                'corn',
                'oil',
                'textiles',
                'produce',
                'beef',
                'pork',
                'waste',
                'nuclear byproducts',
              ],
            },
          },
          {
            base: 'Wealth/2',
            description:
              'Finance promotes lending and investing in genres with credit systems or monetary exchanges. The management and investment of stock, bonds, futures, options, commodities, and other accounting methods provide profit... A further use of this skill is to cure financial addictions and Wealth diseases. This procedure-base skill cures damaged Wealth at a rate of 1d6/10 rank and can only be used once per day per patient; such use also removes all non-lethal damage. Target numbers are TN100, TN50 using the appropriate equipment and environment. Other modifiers apply according to Guide discretion... Consultation with this skill restores temporary Capital and Employability damage one point per hour up to rank modifier. Clients can sustain only one session per day. Target number is TN150, TN100 using the appropriate equipment and environment',
            limit: 'Acclimatable',
            name: 'Finance',
            experts: {
              diseases: ['shopping', 'gambling', 'hoarding', 'MMORG Addiction'],
            },
          },
          {
            name: 'Games, Wealth',
            base: 'Wealth/2',
            limit: 'Acclimatable',
            description:
              'Games wealth applies theory and practice of games involving money. Topics include gambling and events used to generate money. The Guide decides the shifts for each individual situation... Successful gambling temporarily raises Capital for the duration as the Guide deems fit, typically for the adventure. Losses incur permanent Capital damage. Be warned, many institutions use methods that cause negative shifts. A skill combination with Perception may spot cheaters of games (TN150). Unless otherwise noted, this mechanic can only be used once per adventure... TN200-Temporarily raise Capital 2d6, TN150-Temporarily raise Capital 1d6, TN100-Temporarily raise Capital 1d3, Failure-Permanent lose Capital 1d6',
            experts: {
              game: ['blackjack', 'horse races', 'craps', 'baccarat'],
            },
          },
        ],
      },
      camp: {
        description:
          'This area of skills provides information for the Hero to survive and interact in various environments',
        skills: [
          {
            base: 'Mind/2',
            limit: 'Exclusive',
            name: 'Extreme Environments',
            description:
              'Extreme Environments comprises knowledge of various extreme and hostile environments. This skill is used with skill combinations. Whereas Hunt covers normal environments, Extreme Environments handles adverse, abnormal environments of the genre',
            pairs: [
              {
                skill: 'Hunt',
                description: 'Ice fishing',
              },
              {
                description: 'Skiing; Ice skating; Deep see diving',
                skill: 'Athletics',
              },
              {
                description: 'Bobsled; Astronaut navigation',
                skill: 'Driving',
              },
              { skill: 'Geology', description: 'Volcanism; Mining the moon' },
            ],
          },
          {
            base: 'Body/2',
            description:
              "Hunt embodies hiking, climbing, jumping, and the ability to survive in a variety of environments. A hero can construct shelters in the wild. Additionally, the Hero can make or disarm snares and earthen pits with this skill area. Normal TN for a day's existence would be TN100, subject to Guide discretion. Rolls are made daily... TN50-Temporary lean-to shelter, TN75-Temporary ice shelter, TN100-Food and water for one person's existence in the wild, TN125-Food and water for two people existing in the wild, TN150-Food and water for eight people existing in the wild... Tracking prey depends on weather, terrain, mode of transport, age of tracks, and season with shifts begin at TN100... 3 shifts easier-Group(12+); Size7, 2 shifts easier-Group(6-12); Size5 to Size6, 1 shift easier-Group(3-6); Size3 to Size4, 1 shift harder-Rocky terrain; poor visibility; size-1 to size-2, 2 shifts harder-precipitation; Size-3 to Size-4, 3 shifts harder-Waterways; Size-5 or smaller... Difficulty in following tracks depends on environmental conditions. Wind, moisture, soil hardness, traffic, and plant growth all factor into determination of TN. For the sake of simplicity, the following chart describes modifiers for a temperate woodland. For example mud holds tracks longer and may warrant two adjustments; a day old track in mud is one shift easier... 3 shifts easier-Subjects in sight, 2 shifts easier-Subjects heard, 1 shift easier-Minutes old, no shift-Hours old, 1 shift harder-One day old, 2 shifts harder-Days old, 3 shifts harder-A week or more old",
            limit: 'Acclimatable',
            name: 'Hunting/Tracking',
            experts: {
              style: ['fishing', 'trapping', 'weather'],
              creature: [
                'vampire',
                'werewolf',
                'human',
                'whale',
                'shrimp',
                'deer',
                'lions',
              ],
            },
          },
          {
            base: 'Strength',
            description:
              'Mountaineering Caving includes speleology, squeezing, tunneling, climbing, and underground exploration... An individual with Mountaineering can squeeze through a space that fits their head (TN100)',
            limit: 'Acclimatable',
            name: 'Mountaineering/Caving',
            experts: {
              style: [
                'climbing',
                'navigation',
                'spelunking',
                'squeezing',
                'tunneling',
                'underground orientation',
              ],
            },
          },
          {
            base: 'Body/2',
            description:
              'Travel is the ability to survive and flourish in various urban conditions, outside a normal place of residence. Heroes determine logical location of people, places, or items in a city setting. Normal TN for living off the street is TN100... Trailing is following in an urban setting. Trailing a crowd (TN100) does not require a paired skill, but trailing on a highway requires skill combinations (Drive TN125). Investigating a cold trail is possible with other skills (Police work TN150 or Criminology TN150)... Downtrodden Heroes construct shelters in the city and know how to avoid local authorities, ordinances, and trouble. Every city will have its own rules and opportunities... TN100-Temporary cardboard quarters in alleyway, TN125-Temporary crate under stairs or overpass, TN150-Semi-permanent in sewers or abandoned dwellings',
            limit: 'Exclusive',
            name: 'Travel',
            experts: {
              city: ['New York City', 'Centropolis'],
            },
          },
        ],
      },
      fight: {
        description:
          "This category of skills covers all Body combat forms. Combat skills with Strength as the base resource add strength ability modifier to weapon damage rolls... Skill Expertise is not allowed for any combat area. Instead, CWEXP is allowed by utilizing a specific weapon. The weapon may be utilized across genres. The weapon must be identical and purpose, have the same name, and be operated in the same manor. For example, CWEXP (assault rifle) will not allow a bonus to a sniper's rifle. However, it may be allowed for a pulse rifle. Although both titles have rifle in them, the skill set for an assault rifle compared to a sniper's rifle is quite different. The Guide has the final say. CWEXP is not allowed in conjunction with combat general skills... Combat general skills represent proficiency with a large group of weapons without having every separate combat area. The penalty for such access is one shift. Proficient weapons gained from combat general skills cannot have expertise. Combat general skills are mutually exclusive and do not allow weapon access from other combat general skills. Thus, a person with Combat Grenades is not proficient in grenade launchers",
        skills: [
          {
            base: 'Varies',
            description:
              'Combat Combinations combines a non-combat skill with a combat skill. This skill removes the one-shift penalty incurred by skill combination rules. The lowest of all ranks is still used for the base roll',
            limit: 'Universal',
            name: 'Combat Combinations',
          },
          {
            base: 'Body/2',
            description:
              'Combat Contagion represents the ability of a disease to infect another (TN100). It does not represent the strength of the disease. The disease must be sufficiently communicated to the recipient through proper exposure. The subject does not have a facing penalty',
            limit: 'Universal',
            name: 'Combat Contagion',
          },
          {
            base: 'Dexterity',
            description:
              'Combat Energy Emanation directs energy emanating from a specific source. This source can be a mouth, a held hose, or in some cases a hand invoking a spell. Combat Energy Emanation can be used to launch ray spells at a two-shifts penalty (TN125)',
            limit: 'Universal',
            name: 'Combat Energy Emanation',
          },
          {
            base: 'Body/2',
            description:
              'Combat Envenomation represents the ability of a poison to take effect (TN100). It does not represent the strength of the poison. The poison must be sufficiently communicated to the recipient through proper application, ingestion, or inhalation. The subject does not have a facing penalty',
            limit: 'Universal',
            name: 'Combat Envenomation',
          },
          {
            base: 'Mind/2',
            description:
              'Combat Environmental Expertise is a combination skill of Combat Environmental Expertise and Extreme Environments, where all three skills have crested. This skill at rank 40 negates one penalty shift from fighting in adverse environments... The Hero chooses the environment. Example include: aerial, aquatic, cold, heat, weightless, etc',
            limit: 'Acclimatable',
            name: 'Combat Environmental Expertise (Environment)',
          },
          {
            base: 'Body/2',
            description:
              'Combat Garrote represents use of garrotes. Examples across multiple genres include chain, net, noose, wire, whip, and laser wire. This skill does not provide the ability to strangle, trip, or grapple',
            limit: 'Universal',
            name: 'Combat Garrote',
          },
          {
            base: 'Mind/2',
            description:
              'Combat General Bomb/Siege covers ranged attacks that launch damaging energy or objects at stationary target(s). Attacks with this skill, using a proper implement, are TN125. Range shifts may apply',
            limit: 'Acclimatable',
            name: 'Combat General Bomb/Siege',
          },
          {
            base: 'Strength',
            description:
              'Combat General Melee focuses on the art and tactics of melee combat. Attacks with this skill are TN125. Any melee weapon can be used in this fashion. This allows improvisation of any object as a melee weapon including natural weapons. Combat General Melee can be used for melee touch spells (TN100) but does not cause additional damage from Strength',
            limit: 'Universal',
            name: 'Combat General Melee',
          },
          {
            base: 'Dexterity',
            description:
              'Combat General Range focuses on the art and tactics of projectile combat. Attacks with this skill are TN125. A Hero with skill gains improvisation of any object as a thrown weapon. Combat General Range also gains proficiency in all projectile and grenade weapons. To be clear, self-projected weapons, siege machines, and mounted weapons are covered in other Combat General skills. Strength modifiers do not apply to damage. Combat General Range can be used to launch ray spells (TN100)',
            limit: 'Universal',
            name: 'Combat General Range',
          },
          {
            base: 'Deduction',
            description:
              'Combat General Tactical permits attacks against targets seen directly and indirectly, using instrumentation and guidance systems. These self-propelled weapons include ICBMs, patriot missile systems, group-based PPCs, rail guns, grenade launchers, phalanx defense system, wire-guided missiles, etc. Attacks with this skill are TN125',
            limit: 'Acclimatable',
            name: 'Combat General Tactical',
          },
          {
            base: 'Body/2',
            description:
              'Combat General Trample includes all trampling, whether with a car, elephant, or tank. Attacks with this skill are TN125',
            limit: 'Acclimatable',
            name: 'Combat General Trample',
          },
          {
            base: 'Dexterity',
            description:
              'Combat General Vehicle uses mounted weapons designed to hit objects or other moving vehicles. Attacks with this skill are TN125',
            limit: 'Acclimatable',
            name: 'Combat General Vehicle',
          },
          {
            base: 'Dexterity',
            description:
              'Combat Grenades covers the use of grenades including: concussion grenades, vials of holy water, and dynamite. Weapons in this group are designed to active upon landing on or near the target. In addition to primary damage, splash damage affects each adjacent space. Spells use Combat Grenade to launch ray spells at two shifts penalty (TN125)',
            limit: 'Universal',
            name: 'Combat Grenades',
          },
          {
            base: 'Strength',
            description:
              'Combat Natural Weapons includes use of natural weapons. Examples across multiple genres include claw, bite, tail, pseudo-pod, slam, tentacle, tail, wing buffet, and head-butt',
            limit: 'Universal',
            name: 'Combat Natural Weapons, weapon',
          },
          {
            base: 'Strength',
            description:
              'Combat One Hand Blade covers use of one-handed blades. Examples across multiple genres include laser sword, whip with blades attached, stiletto, dagger, some swords, and axes',
            limit: 'Universal',
            name: 'Combat One Hand Blade',
          },
          {
            base: 'Strength',
            description:
              'Combat One Hand Blunt/Pierce include use of one-handed blunt or piercing weapons. Examples across multiple genres include mace flail, short spear, shield, and sap',
            limit: 'Universal',
            name: 'Combat One Hand Blunt/Pierce',
          },
          {
            base: 'Dexterity',
            description:
              'Combat One Hand Projectile covers use of one-handed projectile weapons, using a tool or device to propel a weapon. Examples across multiple genres include pistol, hand crossbow, small blowguns, and laser blaster',
            limit: 'Universal',
            name: 'Combat One Hand Projectile',
          },
          {
            base: 'Strength',
            description:
              'Combat One Hand Thrown includes use of one-handed thrown weapons. Examples across multiple genres include dagger, knife, boomerang, tomahawk, tracking devices, rocks, and shuriken. Weapons in this group are designed to injure the target through penetration or impact. Attack rates are under the thrown category, with some exceptions. For example shuriken use the rapid missile and rocks use melee combat tables',
            limit: 'Universal',
            name: 'Combat One Hand Thrown',
          },
          {
            base: 'Strength',
            description:
              'Combat Pole Arms comprises use of pole arms. Examples across multiple genres include gaff, halberd, lance, poleaxe, trident and others. Weapons in this category need two hands without the use of an apparatus or holster as with a lance. These weapons attack and threaten one space beyond normal melee, including the diagonal. Spaces adjacent to the wielder have penalties, explained below... The wielder may chose the weapon to attack adjacent squares at one negative shift. Pole arms suffer a two-shift penalty attacking opponents in their occupied space. Negative shifts apply to disarming, weapon damage, and similar attacks. Leaving adjacent squares provokes parting shots at one negative shift... Opponents charging through threatened spaces incur a parting shot; however, moving through these spaces cautiously negates the parting shot',
            limit: 'Universal',
            name: 'Combat Pole Arms',
          },
          {
            base: 'Strength',
            description:
              'Combat Two Hand Blade includes use of two-handed blades. Examples across multiple genres include double bladed laser sword, bayonet, and claymores',
            limit: 'Universal',
            name: 'Combat Two Hand Blade',
          },
          {
            base: 'Strength',
            description:
              'Combat Two Hand Blunt/Pierce represents knowledge and use of two-handed blunt weapons. Examples across multiple genres include heavy flail, spear, staff, and large club',
            limit: 'Universal',
            name: 'Combat Two Hand Blunt/Pierce',
          },
          {
            base: 'Dexterity',
            description:
              "Combat Two Hand Projectile represents use of two-handed projectile weapons, using a tool or device to propel a weapon. Examples across multiple genres include most bows, laser rifle, assault rifle, sniper's rifle, machine gun, and larger blowguns",
            limit: 'Universal',
            name: 'Combat Two Hand Projectile',
          },
          {
            base: 'Strength',
            description:
              'Combat Two Hand Thrown covers use of two-handed thrown weapons. Examples across multiple genres include dwarf, caber, and boulders. Weapons in this group are designed to injure the target through penetration or impact. Attack rates are under the thrown category, with some exceptions. Some are limited to one object per round',
            limit: 'Universal',
            name: 'Combat Two Hand Thrown',
          },
          {
            base: 'Body/2',
            description:
              'Combat Unarmed is based on various forms of unarmed combat, including wrestling, boxing, street-fighting, and judo. Various techniques may change for these styles, and includes use of body parts not normally designed for combat: head-butting, punching, kicking, etc. The combatant may choose to do regular or non-lethal damage. Brass knuckles is an example of an available weapon... Expertise in Combat Unarmed does not specialize in a particular form of karate or the like. Instead, the core system allows expertise by specifying a specific body part such as hand, leg, body, or head. The Hero should be mindful in their selection if they expand with tricks such as sunder, trip, push, or knockout',
            limit: 'Universal',
            name: 'Combat Unarmed',
          },
          {
            base: 'Varies',
            description:
              'Combat Weapon Expertise teaches advantages for one specific weapon type providing bonus shifts. The first bonus is received at rank 20 as a shift with weapon use. At rank 40, this increases by partial shift. At rank 60, the expertise bonus becomes two shifts. These skills are subject to the skill combination rules... The Hero may take this skill multiple times in different weapons. When using a combination of skills with skill expertise, the Hero must use the lowest rank',
            limit: 'Universal',
            name: 'Combat Weapon Expertise, specific weapon',
          },
          {
            base: 'Varies',
            description:
              "Combat Weapon Mastery represents pinnacle use of a specific weapon and it's detailed in genre handbooks for specific genres that allow it's use. This skill provides tricks at rank 20, 40, and 60 without using the normal skill combination, prerequisites skills, or skill chain rules. Acquired tricks are gained from trainers and are genre exclusive. Alternatively, expertise may substitute for the first acquired trick... When this skill is used in conjunction with any other skill, skill combination rules apply similarly as expertise. Weapon access has the same restrictions as CWEXP",
            limit: 'Exclusive',
            name: 'Combat Weapon Mastery, weapon',
          },
          {
            base: 'Varies',
            description:
              "Combat Weapon Tricks enables one trick to be learned with one specific weapon type, not with a weapon class. It can be learned for more than one weapon, each with it's separate rank. This skill is subject to skill combination rules... Example tricks that can be learned in this system are disarm, sunder (prerequisite of disarm), trip, grapple (prerequisite of trip), shove, overrun (prerequisite of shove). Use in an atypical manner (throwing a bastard sword, triggering a machine gun and having it go off while it falls down the stairs), or drawing the weapon quickly",
            limit: 'Universal',
            name: 'Combat Weapon Tricks, weapon',
          },
        ],
      },
      heal: {
        description:
          'This category of skills has the theme of fixing, evolving, or repairing living systems. Unless otherwise stated, recovery lost resource by use of the appropriate skill consumes one minute per d6 healed with a minimum of ten minutes. Binding wounds or analyzing conditions takes one round. The species affected by the skill is the same as the practitioner, unless designated',
        skills: [
          {
            base: 'Mind/2',
            description:
              'Androtics allows Heroes to identify kind, type, and purpose of androids (completely artificial biology, in contrast to cyborgs, which are part biological and part robotic). With Skill Combination, this allows reprogramming (Language and Computer Science) and construction/repair (Construction or Mechanics). At very high ranks, design of new android prototypes is possible',
            limit: 'Acclimatable',
            name: 'Androtics',
            experts: {
              systems: [
                'eyes',
                'ears',
                'heart',
                'arms',
                'legs',
                'skin',
                'spinal chord',
              ],
              creature: ['A.D.A.M.14', 'Oreman One', 'R.O.V.E.R', 'the dog'],
            },
          },
          {
            base: 'Deduction',
            description:
              'Cybernetics encompasses creation, maintenance, and repair of cybernetic organisms (cyborgs), and living creatures with implants, with a specific genres. Some genres may create amalgamation of magic technology, or other things (such as biological parts) to create merged organisms',
            limit: 'Exclusive',
            name: 'Cybernetics',
            experts: {
              system: [
                'eyes',
                'ears',
                'heart',
                'arms',
                'legs',
                'skin',
                'spinal chord',
              ],
            },
          },
          {
            base: 'Body/2',
            description:
              'First Aid relieves Body stress from trauma. This may include resuscitation, triage of injured patients, or removal of foreign bodies. Use of this skill is specific to race, and shift(s) apply as per the Guide... Functions include stabilizing dying characters in any of Mind/Body/Soul and assistance in recovering Resource while resting (TN50, subject to other modifiers per Guide discretion). Stabilization can be done only once per character per five minutes without special equipment (TN100 in combat, TN50 if not). Characters can care for on other person per 10 rank... Heroes apply First Aid to general populations with implementation of correct hygiene procedure. Application does not cure disease, however, it may prevent the onset and severity of infections. First Aid treats symptoms; it does not cure diseases... TN25-Heimlich maneuver; tourniquet, TN50-Cauterize wounds; bind wounds; stabilization, TN75-Remove barbs and shrapnel; remove giant leech, TN100-Slow poison; field tracheotomy, TN125-Remove tape worms, TN150-Remove hook worms from muscle',
            limit: 'Universal',
            name: 'First Aid, species',
            experts: {
              style: [
                'antitoxin',
                'barb removal',
                'binding',
                'hygiene',
                'triage',
                'parasites',
              ],
            },
          },
          {
            base: 'Mind/2',
            description:
              'Medicine is the academic anatomy, biochemistry, and medical care of a single sentient race. This skill enables acute repair and long-term care of chronic ailments, as well as acute severe infections. This skill differs from First Aid as it is used for problems like diseases, surgery, and medications. Medicine can function as First Aid with an additional two-shift penalty... Medicine can identify diseases (TN150). A proper lab, family history, examination, and x-rays each add a shift. Rarity and similarity to other diseases may add negative shifts. Magical diseases are two-shifts higher to detect without obvious symptoms... This procedure-based skill cures damaged Body at a rate of 1d6/10 Rank and can only be used once per day per patient such use also removes all non-lethal damage. Target numbers are TN100, TN50 using the appropriate equipment and environment. The appropriate environment to practice Medicine is a hospital... Practice restores Dexterity and Strength damage one point per hour up to rank modifier. Patients can sustain only one session per day. Target number is TN150, TN100 using the appropriate equipment and environment',
            limit: 'Acclimatable',
            name: 'Medicine, species',
            experts: {
              disease: ['cancer'],
              organ: [
                'eyes',
                'ears',
                'heart',
                'arms',
                'legs',
                'skin',
                'spinal chord',
              ],
            },
          },
          {
            name: 'Meditation/Therapy, species',
            base: 'Soul/2',
            description:
              'Meditation Therapy is long-term spiritual care of chronic spiritual ailments and acute spiritual diseases. This procedure-based skill cures damaged Soul at a rate of 1d6/10 Rank and can only be used once per day per patient; such use also removes all non-lethal damage (TN100, TN50 using the appropriate equipment and environment conducive to calm relaxation.)... Therapy with this skill restores Faith and Imagination damage one point per hour up to rank modifier. Patients can sustain only one session per day. Target number is TN150, TN100 using appropriate equipment and environment',
            limit: 'Acclimatable',
            experts: {
              setting: ['grove', 'monastery', 'office', 'temple', 'waterfall'],
            },
          },
          {
            base: 'Mind/2',
            description:
              'Psychology is long term mental care of chronic mental ailments and acute severe mental illnesses/insanity. This procedure-based skill cures damaged Mind at a rate of 1d6/10 Rank and can only be used once per day per patient; such use also removes all non-lethal damage (TN100, TN50 using the appropriate equipment and environment conducive to uninterrupted conversation.) Other modifiers apply according to Guide discretion... Therapy with this skill restores Deduction and Memory damage one point per hour up to rank modifier. Patients can sustain only one session per day (TN150, TN100 using the appropriate equipment and environment.)',
            limit: 'Acclimatable',
            name: 'Psychology',
            experts: {
              ailment: ['bipolar', 'schizophrenia', 'depression', 'autism'],
            },
          },
          {
            base: 'Faith',
            description:
              'Spiritual Medicine integrates a conceptualization of Mind, Body, and Soul as one entity to heal the Hero. By tapping into all resource energies, a practitioner may heal Mind/Body/Soul. Various examples include chiropractic, hypnosis, reflexology, macrobiotics, energy medicine, phrenology, sweat lodges, biorhythms, joss/incense, paper-burning, acupuncture, chakra hot stones, homeopathy, cupping, and coining... Spiritual Medicine heals appropriate Resource at a rank of 1d6/10 Rank per patient to heal all three Resources once per day as determined by the recipient; such use also removes all non-lethal damage (TN150). The best use of this skill controls the senses through appropriate equipment and environment (TN100). Examples of control are trickling water, therapeutic cushions, specialized oils, applied medicinal therapy, and calming music. Other modifiers apply according to Guide discretion',
            limit: 'Exclusive',
            name: 'Spiritual Medicine, species',
            experts: {
              setting: ['Temple of Chi', 'Ironwood Serenity Grove'],
              mind: ['only'],
              body: ['only'],
              soul: ['only'],
            },
          },
          {
            base: 'Sum of all resources / 4',
            description:
              'Yoga includes body manipulation and mental meditation to enable a higher state of relaxation and awareness. Daily practice yields bonus recovery of resources equal to rank dividing among Mind/Body/Soul. Different genres may also allow additional abilities/powers... This procedure-based skill cures damaged Mind/Body/Soul at a rate of 1d6/10 Rank and can only be used once per day; such use also removes all non-lethal damage. It cannot be used on others without skill combination or skill tricks. Target numbers are TN100, TN50 using the appropriate equipment and environment conducive to calm relaxation. Other modifiers apply according to Guide discretion. If any ability score is at zero, Yoga cannot be performed',
            limit: 'Acclimatable',
            name: 'Transcendence/Yoga',
          },
          {
            base: 'Memory',
            description:
              'Veterinary Sciences include academic anatomy, biochemistry, and medical care of non-sentient creatures within a genre. Practitioners provide acute repair and long-term care of chronic ailments, as well as acute severe infections. This procedure-based skill cures damaged Mind, Body, or Soul of a non-sentient creature at a rate of 1d6/10 Rank and can only be used once per day per patient; such use removes all non-lethal damage. Target numbers are TN100, TN50 using the appropriate equipment and environment. Other modifiers apply according to Guide discretion',
            limit: 'Exclusive',
            name: 'Veterinary Sciences',
            experts: {
              classes: [
                'canines',
                'felines',
                'raptors',
                'owls',
                'sharks',
                'tropical fish',
                'whales',
                'bovines',
              ],
            },
          },
        ],
      },
      learn: {
        description: 'This category of skills covers information sciences',
        skills: [
          {
            base: 'Memory',
            description:
              'Antiquities concerns knowledge of well-known, valuable items. It allows identification, history, and legends of significance that unlock secrets',
            limit: 'Exclusive',
            name: 'Antiquities',
            experts: {
              type: ['rings', 'paintings', 'rapiers', 'cars'],
              nationality: ['Nation'],
            },
          },
          {
            base: 'Mind/2',
            description:
              'Education teaches and develops skills and uses HePs during training or tutoring sessions. A tutoring session of three months can be conducted for one student per ten rank (TN50). Classes of one student per rank could also be taught (TN100)... Other bonus shifts certainly apply: 2 shifts bonus-Exact coursework has been taught previously, 1 shift bonus-Institute of learning; use of technology; access to reference material; team taught, 1 shift penalty-Frequent distractions; lack of materials, 2 shift penalty-Obstinate students; subject is beyond learner... For every three months of tutoring, the teacher gains one point in the skill taught, limited to rank in Education (TN100). The point may be applied to Education instead. Teaching can be used in conjunction with Employability to gain Capital... When tutoring a skill, the student is limited to lesser of the two ranks. Primary educators may deliver instruction up to Rank 10 in any skill deemed necessary by more than half the population of their genre of origin',
            limit: 'Universal',
            name: 'Education',
            experts: {
              style: ['learning disabilities', 'emotional disabilities'],
              skill: ['math', 'engineering', 'psychology'],
            },
          },
          {
            base: 'Mind/2',
            description:
              'Games, Mind includes games based on deduction and memory. Examples of this include chess, tabletop games, parlor games, and computer games... Guides are encouraged to use skill combination rules when plausible. For example, billiards, darts, and croquette could use Games, Mind and Physics. In a stretch, Mind Perception and Body Dexterity could be used with additional shifts. Standard skill combination rules apply',
            limit: 'Exclusive',
            name: 'Games, Mind',
            experts: {
              game: ['chess', 'Universal Horizons'],
            },
          },
          {
            base: 'Memory',
            description:
              'Geography/Mapping includes cartography, topography, and location famous geographical features. Navigation, planning, and plotting courses utilize this skill',
            limit: 'Exclusive',
            name: 'Geography/Mapping',
            experts: {
              region: ['Genre'],
              style: [
                'trip planning',
                'obscure locales',
                'cartography',
                'topography',
              ],
            },
          },
          {
            base: 'Memory',
            description:
              'History concerns important past events and allows construction of timelines that references noteworthy occasions, significant individuals, and places. Knowledge of history depends on references such as computers, libraries, or data implants... Historians of specific skills used skill combination rules. Examples include Math, Artistry, and Medicine. An expert may consider creating a combination skill',
            limit: 'Exclusive',
            name: 'History',
            experts: {
              nationality: ['Nation'],
              period: ['stone age', 'renaissance', "60's"],
            },
          },
          {
            base: 'Deduction',
            description:
              'Library Science/Information Networks efficiently and effectively retrieves and categorizes information. Discovering obscure facts within catacombs of data depends on the organization, classification, and retrieval methods',
            limit: 'Acclimatable',
            name: 'Library Science/Information Networks',
            experts: {
              database: [
                'NYC Public Library',
                'Library of Congress',
                'Encyclopedia',
                'CD Rom',
              ],
            },
          },
          {
            base: 'Mind/2',
            description:
              'Military Science covers strategy, tactics, training, deployment, logistics and execution of military battles and campaigns',
            limit: 'Acclimatable',
            name: 'Military Science',
            experts: {
              unit: [
                'militia',
                'snipers',
                'phalanx',
                'cavalry type',
                'infantry type',
                'tanks',
                'fighter jets',
              ],
            },
          },
          {
            base: 'Soul/2',
            description:
              'Occult Sciences provides information and insight into creatures and castings of magical nature. The user must have experienced or knowingly interacted with the spell in question. When analyzing creatures, Occult Sciences identifies ubiquitous abilities of the target creature. The Guide controls how often information may be disseminated... Additional information about a spell is gathered from higher TN rolls, TN50-Casting area, TN75-Casting level, TN100-Casting name; creature has magical ability, TN125-Level of magical ability of creature, TN150-One specific magical ability of creature, TN175-d3 additional magical abilities of creature',
            limit: 'Exclusive',
            name: 'Occult Sciences',
            experts: {
              style: ['Creature', 'Casting Skill'],
            },
          },
        ],
      },
      life: {
        description:
          'This category of skills has the theme of understanding living systems. Different genres have skills for life forms varying significantly from core skills. In genres where vastly different worlds and cultures exist, a parenthesis is listed after the skill. Martian Zoology and Earth Biology could be present in a genre where Martian culture exists along with Earth. These are labeled Zoology (Martian) and Biology (Earth)',
        skills: [
          {
            base: 'Imagination',
            description:
              "Animal Handling calms and trains normal non-sentient non-evolved animals. Animal Handling calms animals; the disposition of an animal depends on its current situation, demeanor, and status. For wild animals, the attitude change will last one day, at most... If befriending wild animals, Soul Influence is used in skill combination with Animal Handling. This process takes a day. Difficult breads, mishandled, or poor disposition may take many days or weeks. Teaching commands to befriended animals gains a one-shift bonus... Once an animal is befriended, the animal is under-command and may perform commands. Commands use Animal Handling directly... Without training, a befriended animal may: Carry-Permits tethered transportation of objects, Feed-Directs the timing and object to be consumed, Defend owner*-Animal attacks threatening foes, Untrained commands may be attempted at two shifts harder... Any Hero may have one befriended animal. More animals may be attracted using Leadership. A befriended animal may be trained in five additional commands, plus one per five of the animal's Memory. The time needed to train a trick is one week per 50TN of difficulty, after modifiers... Animals are limited to a certain number of tricks. Once that limit is reached, a current trick must be untaught (TN150) before another one can replace it... Every command must use one of four components: vocal, motion, consumable, and focus. Each additional component adds a bonus shift. A vocal command can be words, clicks, or whistle. A motion can be a gesture, nod, or expression. Consumables include treats, food, fire, or other desired items. Foci can be rods, whips, spurs, leashes, banners, harness, saddle, or toys... Teaching a command is two shifts harder and requires one week per 50TN of difficulty. The TN of difficulty is listed after every trick. Training creatures other than animals requires skill combination with the appropriate skill used to identify the creature, usually requiring additional shifts. Commands suffer the same TN in and out of command... *Once a command is established it is persistent without a TN check. Owner must redirect to stop or change the action... Using command tricks -- These commands require the animal to gain the skills in question. Once the animal has the skill, they may be directed to use that skill. Using tricks untrained imposes a four-shift penalty without the appropriate command. Owners cannot command the animal to perform command tricks if the animal does not have rank in the skill trick",
            limit: 'Exclusive',
            name: 'Animal Handling',
            experts: {
              style: ['Creature', 'Command'],
            },
          },
          {
            base: 'Memory',
            description:
              'Biology encompasses general knowledge, identity, and functions of living systems. This skill provides specific information on living organisms not covered under Zoology and Botany, such as protozoans, diatoms, or fungi (TN50). Biology can mimic Botany, Ecology, or Zoology at one shift penalty for identification',
            limit: 'Exclusive',
            name: 'Biology',
            experts: {
              creature: [
                'algae',
                'bacteria',
                'diatoms',
                'fungi',
                'jellies',
                'prions',
                'protozoans',
                'slimes',
                'viruses',
              ],
            },
          },
          {
            base: 'Memory',
            description:
              'Botany involves knowledge about plant life. The individual can discover use of plants, including edibility, curative and harmful properties, and sentience',
            limit: 'Exclusive',
            name: 'Botany',
            experts: {
              style: [
                'botinary',
                'forestry',
                'herbology',
                'pathology',
                'seeds',
              ],
              species: ['angiosperms', 'conifers', 'ferns', 'mosses'],
            },
          },
          {
            base: 'Memory',
            description:
              'Ecology embraces environmental systems, interactions, influences, and various environmental issues. Ecologists analyze creatures and how their populations affect biomes. Use includes discovering oddities in nature, determining the cause, and recommending the remedy. TNs depend on setting, genre of origin, and other variables as per the Guide',
            limit: 'Acclimatable',
            name: 'Ecology',
            experts: {
              style: ['biome', 'elemental creature type'],
            },
          },
          {
            base: 'Memory',
            description:
              'Genetics incorporates knowledge of genes, genetic design, and genetic manipulation. Genetic engineering is skill combination of Genetics and Engineering',
            limit: 'Exclusive',
            name: 'Genetics',
            experts: {
              species: ['Species'],
            },
          },
          {
            base: 'Memory',
            description:
              "Xenomorphology provides knowledge of one alien species, with general anatomy, physiology, behaviors, vulnerabilities, and habitats. Through skill combination Medicine, Psychology, and other species specific skills can be applied to the alien species. Xenomorphology can be learned for more that one species, each with it's separate Rank... In some worlds, Xenomorphology is a single skill area covering all alien life, possibly considered a charlatan study if the general public does not recognize the existence of aliens",
            limit: 'Exclusive',
            name: 'Xenomorphology',
            experts: {
              species: ['Species'],
            },
          },
          {
            base: 'Memory',
            description:
              'Zoology embodies knowledge of non-sentient species, the natures of many different types of creatures, their habits and habitats. Successful rolls can detect weaknesses, behaviors, anatomy, value of components, and physiology',
            limit: 'Exclusive',
            name: 'Zoology',
            experts: {
              species: [
                'fish',
                'mammals',
                'insects',
                'worms',
                'amphibians',
                'avian',
                'reptiles',
              ],
              style: ['pathology'],
            },
          },
        ],
      },
      magic: {
        description:
          "This category covers skills using Magic. All of these skills use castings that are detailed in Universal Horizon's Spells. Each genre treats magic differently. Genre handbooks detail specific use, expertise, and parameters of each skill",
        skills: [
          {
            base: 'Memory',
            description:
              'Alchemy allows creation of magical concoctions, potions, and elixirs with underlying principles based on the theory of five elements... Alchemy of Araqunidia??? is explained in the Araqunidia??? Genre Handbook and differs greatly from traditional alchemy',
            limit: 'Exclusive',
            name: 'Alchemy',
          },
          {
            base: 'Soul/2',
            description:
              'Astrology utilizes castings of a celestial nature, with horoscopes, celestial constellations, and conjunctions',
            limit: 'Exclusive',
            name: 'Astrology',
          },
          {
            base: 'Wealth/2',
            description:
              'Banking exists in genres that utilize currency. This skill includes familiarity with practices of investment, loans, and monetary exchange with castings',
            limit: 'Exclusive',
            name: 'Banking',
          },
          {
            base: 'Sum of all resources / 4',
            description:
              'Binding comprises enchantment of individuals and items with magical effects, both temporary and permanent',
            limit: 'Exclusive',
            name: 'Binding',
          },
          {
            base: 'Faith',
            description:
              'Exorcism uses cleansing rituals to restore Heroes and victims to their natural state',
            limit: 'Exclusive',
            name: 'Exorcism',
          },
          {
            base: 'Soul/2',
            description:
              'Foretelling reveals information about individuals, including their background, attitudes, and future. The fore-teller is "certain" readings are correct , but often does not provide 100% accurate information... Charlatans color the reputation of this skill by falsely pretending to read the future of clients, patrons, and passersby, using Thespianism, Legerdemain, Deception, and Deduction',
            limit: 'Exclusive',
            name: 'Foretelling',
          },
          {
            base: 'Soul/2',
            description:
              'Kinesis allows casting of magic by motion and movement',
            limit: 'Exclusive',
            name: 'Kinesis',
          },
          {
            base: 'Sum of all resources / 4',
            description:
              'Melodic Magic uses rhythm, chanting, and music to cast spells',
            limit: 'Exclusive',
            name: 'Melodic Magic',
          },
          {
            base: 'Body/2',
            description:
              'Molding/Grafting allows the animation, creation, and grafting of parts of golems and prosthetics in a magical fashion',
            limit: 'Exclusive',
            name: 'Molding/Grafting',
          },
          {
            base: 'Faith',
            description:
              'Necromancy deals with dead creatures and their parts. This skill manipulates the physical forms, not the soul, of the creatures so enchanted',
            limit: 'Exclusive',
            name: 'Necromancy',
          },
          {
            base: 'Mind/2',
            description:
              'Numerology transforms energy into mass by creating items, folding dimensions, and transforming subjects',
            limit: 'Exclusive',
            name: 'Numerology',
          },
          {
            base: 'Sum of all resources / 4',
            description:
              'Runecraft enchants areas with magical glyphs through drawings, paintings, and other etchings',
            limit: 'Exclusive',
            name: 'Runecraft',
          },
          {
            base: 'Soul/2',
            description:
              'Shamanism encompasses faith-based castings of utilitarian nature to protect tribal societies',
            limit: 'Exclusive',
            name: 'Shamanism',
          },
          {
            base: 'Imagination',
            description:
              'Spiritology is the study of spirits, the Spirit World, and its native inhabitants. Castings are used to influence, bind, consult, and summon spirits',
            limit: 'Exclusive',
            name: 'Spiritology',
          },
          {
            base: 'Faith',
            description: 'Summoning can summon items, auras, and creatures',
            limit: 'Exclusive',
            name: 'Summoning',
          },
          {
            base: 'Faith',
            description:
              'Theology possesses a belief system with associated castings',
            limit: 'Exclusive',
            name: 'Theology',
          },
          {
            base: 'Soul/2',
            description:
              'Vision reveals information about specific places and things',
            limit: 'Exclusive',
            name: 'Vision',
          },
          {
            base: 'Imagination',
            description:
              "Voodoo comprises castings that influence another's beliefs and fears through illusions",
            limit: 'Exclusive',
            name: 'Voodoo',
          },
          {
            base: 'Mind/2',
            description:
              'Warding defends the caster and their constituency. Castings deal with prevention, exclusion, and repulsion of ill effects',
            limit: 'Exclusive',
            name: 'Warding',
          },
          {
            base: 'Imagination',
            description: 'Wicca charms and manipulation of others',
            limit: 'Exclusive',
            name: 'Wicca',
          },
          {
            base: 'Memory',
            description:
              'Wizardry is the academic, scholastic, and taught method of magic emulation and manipulation',
            limit: 'Exclusive',
            name: 'Wizardry',
          },
        ],
      },
      move: {
        description:
          'This category of skills encompasses modes of transportation involving animals, devices, and vehicles. Genre expansion books describe movement means and how these skills operate',
        skills: [
          {
            base: 'Dexterity',
            description:
              'Driving enables use of a vehicle in two dimensions, on surfaces such as land or water',
            limit: 'Acclimatable',
            name: 'Driving',
            experts: {
              vehicle: ["Abram's Tank", 'Iowa class battleship', 'Mustang'],
            },
          },
          {
            base: 'Wealth/2',
            description:
              'Movement Expertise modifies a specific aspect of a movement that cannot be defined in a skill. Movement Expertise is offered and limited in genres',
            limit: 'Any',
            name: 'Movement Expertise',
          },
          {
            base: 'Body/2',
            description:
              'Movement Tricks allows tricks with certain type of movement. It may be taken multiple times for different movements or tricks. This skill can be used to gain a movement speed provided means or ability. Another example of Movement Tricks is to increase movement speed of an existing movement type for specific situations. Movement Tricks is offered and limited in specific genres',
            limit: 'Any',
            name: 'Movement Tricks, movement type',
          },
          {
            base: 'Faith',
            description:
              "Multiversal Portals incorporates a basic understanding of the current genre's attached planes, portals, and general cosmology. This skill provides limited information of portal access",
            limit: 'Exclusive',
            name: 'Multiversal Portals',
            experts: {
              style: ['Specific Portal', 'Specific Plane'],
            },
          },
          {
            base: 'Dexterity',
            description:
              'Piloting enables use of a vehicle in three dimensions, including air, vacuum, or water',
            limit: 'Acclimatable',
            name: 'Piloting',
            experts: {
              vehicle: ['F-18', 'Cessna 150', 'Dallas class sub'],
            },
          },
          {
            base: 'Dexterity',
            description:
              'Riding allows movement commands through gestures, vocalizations, or other means. The mount must have Deduction and the Hero is considered a passenger, thus does not need driving or piloting. Animal mounts require training with Animal Handling. Genre handbooks supersede these rules',
            limit: 'Exclusive',
            name: 'Riding',
            experts: {
              style: ['combat', 'racing', 'teamstering'],
              mount: ['Bessie', 'SS Moocher'],
            },
          },
        ],
      },
      people: {
        description:
          "This category embodies the origin, function, development, organization, and social interaction of various intelligent life systems. The specific world may need to be listed in parenthesis to differentiate different world's interactions",
        skills: [
          {
            base: 'Memory',
            description:
              'Anthropology encompasses general and specific information regarding cultural, social, and physical anthropology. Skill use includes determination of culture, era, and development of prior civilizations using artifacts and ruins',
            limit: 'Exclusive',
            name: 'Anthropology',
            experts: {
              nationality: ['Nation', 'Culture'],
            },
          },
          {
            base: 'Memory',
            description:
              'Biography covers life histories and lineage of families and individuals, approximate Capital score, and trace family history. Access to research material, literature, and connections with time greatly enhance the results',
            limit: 'Exclusive',
            name: 'Biography/Genealogy',
            experts: {
              nationality: ['Nation'],
            },
          },
          {
            base: 'Deduction',
            description:
              "Criminology covers intricacies, motivation, and patterns of behaviors of villains to predict potential future behaviors, plots and clues about crimes. Skill use may discover and interpret anomalies (clues) in a criminal setting... Guides assign situational modifiers based on how clues are connected and how prominent the media has made the crime. The criminal's motive affects the outcome dependent on their predictability, connectivity to society, and passion to the crime. Lastly, investigators must gather and have the appropriate skills to interpret the evidence. A Hero can narrow as long list of possibilities to two to four alternatives... Crime scenes vary in interpretation from where the murder was committed, how bodies or evidence were transported, where evidence is disposed, and where crimes are conceived... Plots complexity can be one scene, one mod, one adventure, or whole campaign. TN50-Identifies crime scene, TN75-Identifies object of crime; list of possible plots, TN100 Narrows background of criminal; leads to other crime scenes; detects planted or tampered evidence, TN125-Narrows motives; possible locales of criminal; narrows possible plots, TN150-Predicts locale of crime scene; identifies skills of criminal; identifies profession of criminal; identifies primary crime scene, TN175-Locale visited by criminal (past or present); identifies false plot, TN200-Identifies criminal, TN225-Identifies master plot... 2 shift bonus-One-week investigation; visual recording or witnessed crime, 1 shift bonus-One-day investigation; detailed record with all clues recovered and preserved; fresh scene or first to arrive, no bonus-One-hour investigation; most clues recovered and preserved; sealed crime scene, 1 shift penalty-ten-minute investigation; few clues recovered; scene partially investigated, 2 shift penalty-One-minute investigation; no clues recovered; scene compromised with heavy traffic",
            limit: 'Universal',
            name: 'Criminology',
            experts: {
              locale: ['Bronx', 'Nottingham forest'],
              type: ['domestics', 'fraud', 'murder', 'theft', 'vice'],
            },
          },
          {
            base: 'Deduction',
            description:
              'Culture embodies knowledge of customs and attitudes of a culture and its people including cultural movements, sub-cultures, and traditional attitudes',
            limit: 'Exclusive',
            name: 'Culture/Sociology',
            experts: {
              nationality: ['Nation'],
            },
          },
          {
            base: 'Mind/2',
            description:
              'Domestics comprises the knowledge of personal services including grooming, barbering, coiffure, massage, cosmetic application, and other similar topics. Dentistry uses skill combination with Medicine',
            limit: 'Acclimatable',
            name: 'Domestics',
            experts: {
              nationality: ['Nation'],
              service: [
                'bathing',
                'barbering',
                'coiffure',
                'cosmetics',
                'household management',
                'massage',
              ],
            },
          },
          {
            base: 'Body/2',
            description:
              'Handiworks crafts and designs simple articles and performs services from commonly found materials. It mimics of a variety of skills at one-shift penalty including Domestics, Masonry, Farming, Geology, Hunting, Leather-work, Construction, and Textiles',
            limit: 'Acclimatable',
            name: 'Handiworks',
          },
          {
            base: 'Soul/2',
            description:
              'Games, Soul involves games using spiritual forces, posing moral dilemmas, and otherwise referencing occult and paranormal powers. As such, they are culture-based and laden with hidden meanings and truisms',
            limit: 'Exclusive',
            name: 'Games, Soul',
            experts: {
              game: ['Game'],
            },
          },
          {
            base: 'Mind/2',
            description:
              'Laws grant knowledge of laws covering civil, criminal, government and tax issues',
            limit: 'Exclusive',
            name: 'Law',
            experts: {
              type: ['civil', 'criminal', 'contract', 'tax'],
            },
          },
          {
            base: 'Faith',
            description:
              'Leadership is the ability to command other sentient beings. With this skill, Heroes direct people in emergency situations, gain followers, and organize others. Leaders slowly acquire followers over time and extensive game play. Leaders acquire charges based on military rank or business organizations. Rolls are necessary for tests of loyalty, morale, and rallying subjects... TNs based on overall attitude: TN50-Revered, honored, TN75-Zealous, devoted, TN100-Sympathetic, considerate, TN125-impartial, apathetic, TN150-Antagonistic, annoyed, TN175-Offensive, spiteful, TN200-Hateful, abhorred... 2 bonus shift-LoC 1 week, elites, rewards, 1 bonus shift-LoC 1 day, regulars, paid, no bonus-LoC 1 hour, enlisted, no pay, 1 penalty shift-LoC 10 min, conscripts, indentured, 2 penalty shift-LoC 1 min, commoners, taxes, combat, 3 penalty shift-LoC 1 round, slaves... LoC ??? Length of command is the time the Hero has been instructing the crowd, troops, or followers... Heroes gain sidekicks with expertise in this skill after negotiating other costs with Guides. The sidekick is not gained until rank 20 is reached. Sidekicks may be human or animal. TN50 is the base roll for commanding followers to perform dangerous, risky, or selfless actions... The following modifiers may assist Guides in their final determination: 2 bonus shift-Gifts above share*; exemplary leader; returned follower from death; LoC one year, 1 bonus shift-Full share of treasure*; benevolent leader; risks life for follower; other sidekicks present; LoC one month, no bonus-Partial share of treasure*; kind leader; honest, 1 penalty shift-No share*; callous leader; breaks oath; leader is incapacitated, 2 penalty shifts-Uncompensated losses; cruel leader; defiler; combat, 3 penalty shifts-Ruthless leader; torture or killed followers... *Animals use special feed and treats instead of shares',
            limit: 'Universal',
            name: 'Leadership',
            experts: {
              rally: ['Military Type'],
              person: ['Specific Follower'],
            },
          },
          {
            base: 'Faith',
            description:
              'Pantheology includes understanding of common religions of the genre. Study in this skill reveals factions, cults, and schisms (TN150). Expertise is not allowed; it is Religion',
            limit: 'Exclusive',
            name: 'Pantheology',
          },
          {
            base: 'Faith',
            description:
              'Philosophy is the study of existence, ethics, reason, the mind and soul based upon great icons of past and present. This skill enables resistance of Influence',
            limit: 'Exclusive',
            name: 'Philosophy',
            experts: {
              icon: ['Freud', 'Aristotle', 'Sun-Tsu'],
            },
          },
          {
            base: 'Body/2',
            limit: 'Exclusive',
            name: 'Police Work',
            description:
              'Police Work enforces laws of that society through investigation, interrogation, and evidence gathering',
            experts: {
              region: ['Region'],
            },
          },
          {
            base: 'Mind/2',
            description:
              'Political Science covers structures, responsibilities, and operations of varied political systems. Heroes know current political trends, world leaders, and political views of government (TN100)',
            limit: 'Exclusive',
            name: 'Political Science',
            experts: {
              nation: ['Nation'],
            },
          },
          {
            base: 'Employability',
            description:
              "Presentation represents the Hero's capacity to gain another's interest by use of speaking, body language, and gestures. Use of this skill often needs preparation of props, attire, and printed materials. Once interest is gained, Influence comes into play... A good Presentation is the best way to make first impression; however, making contact and peaking interest is just the beginning. The Hero initiates contact with Presentation... Presentation uses skill combination with one-shift bonus. The paired skill infers knowledge of subject area infused into the performance. This skill differs form Etiquette by requiring some form of preparation. Examples may include research, grooming, or creating media materials. Many social situations necessitate both Presentation and Etiquette... TNs based on overall attitude: TN50-Revered, honored, TN75-Zealous, devoted, TN100-Sympathetic, considerate, TN125-impartial, apathetic, TN150-Antagonistic, annoyed, TN175-Offensive, spiteful, TN200-Hateful, abhorred",
            limit: 'Universal',
            name: 'Presentation',
          },
          {
            base: 'Employability',
            description:
              'Profiteering includes scams, frauds, and other criminal acts involving wealth and monetary systems. For example, Profiteering determines the target to bribe, an appropriate amount, and route for payment. Entrance to a nightclub may require a bribe, but the doorman might not be the right target. Other skill use includes embezzlement, fencing, fraud, gambling operations, misappropriation, money laundering, racketeering, vice... Specific actions may have many parameters used to determine TNs. TN50-Assess appropriate bribe, TN75-Detect opportunity for target criminal action, TN100-Lower bribe by 50%, picking wealthy target, TN125-Access profit from target criminal action, TN150-Avoid bribe, set up a racket, determine appropriate ransom; perform fraud on uninvestigated claim, TN175-Predict success of criminal action, TN200-Nearly untraceable sway of public official... Using skill combination, Heroes gain employment. Success produces money from Employability +5, however, there is always a chance to get caught',
            limit: 'Universal',
            name: 'Profiteering',
            experts: {
              organization: [
                'bribing Centropolis police department',
                'embezzling from ACME Goods',
              ],
            },
            pairs: [
              { skill: 'Games, Wealth', description: 'Gambling' },
              { description: 'Money laundering', skill: 'Banking' },
              { description: 'Fencing', skill: 'Economics' },
              {
                description: 'Vice, drug ring',
                skill: 'Pharmaceuticals/Toxicology',
              },
              {
                description: 'Embezzlement',
                skill: 'Business Administration',
              },
            ],
          },
          {
            base: 'Deduction',
            description:
              'Public Administration talents to manage a political post, ranging from a small office to an entire country. Establishing contacts bypassing regulations, and maneuvering bureaucracies are practiced',
            limit: 'Exclusive',
            name: 'Public Administration',
            experts: {
              location: ["NY mayor's office", 'Chicago post office'],
            },
          },
          {
            base: 'Faith',
            description:
              'Religion is the study of one specific religion. This includes the basis for the religion, its holy services and artifacts, in teachings, and moral codes, and its hierarchy',
            limit: 'Exclusive',
            name: 'Religion',
            experts: {
              location: ['Oaken Grove', 'Sand Oaks Graveyard', 'Grace Church'],
            },
            pairs: [
              { description: 'Church hierarchy', skill: 'Political Science' },
              {
                description: 'Religious items and icons',
                skill: 'Antiquities',
              },
              {
                description: 'Background, origins, and development',
                skill: 'History',
              },
              {
                description: 'Specific temples layouts',
                skill: 'Architecture',
              },
              {
                description: 'Economic structure',
                skill: 'Business Administration',
              },
              {
                description: 'Making appointments, avoid red-tape',
                skill: 'Public Administration',
              },
            ],
          },
          {
            base: 'Deduction',
            description:
              'Xenosociology embodies knowledge of customs and attitudes of an alien culture. The person may also be familiar with non-traditional attitudes, sub-cultures, and similar movements within a culture',
            limit: 'Exclusive',
            name: 'Xenosociology, species',
            experts: {
              varies: ['Varies'],
            },
          },
        ],
      },
      powers: {
        description:
          'This category of skills involves abilities that mimic magical abilities using other sources of power. Acquisition, development, advancement, tricks, and stunts will be detailed in a future expansion',
        skills: [
          {
            base: 'Mind/2',
            description:
              'Power, Mind, spell enables use of a spell or spell-like abilities',
            limit: 'Exclusive',
            name: 'Power, Mind, spell',
          },
          {
            base: 'Body/2',
            description:
              'Power, Body, spell enables use of a spell or spell-like abilities',
            limit: 'Exclusive',
            name: 'Power, Body, spell',
          },
          {
            base: 'Soul/2',
            description:
              'Power, Soul, spell enables use of a spell or spell-like abilities',
            limit: 'Exclusive',
            name: 'Power, Soul, spell',
          },
          {
            base: 'Wealth/2',
            description:
              'Power, Wealth, spell enables use of a spell or spell-like abilities',
            limit: 'Exclusive',
            name: 'Power, Wealth, spell',
          },
        ],
      },
      science: {
        description:
          'This category of skills embodies understanding the evolution and relationships of physical materials and compounds',
        skills: [
          {
            base: 'Memory',
            description:
              'Astronomy is the study and identification of celestial objects. Astronomy identifies the movement of moons, planets, and stars. It predicts conjunctions, eclipses, seasons, and tides. This includes lunar phases and basic navigation by stars (TN100)... Space-faring and technologically advanced genres studies include knowledge of black holes, dark matter, mapping, quasars, spectral analysis, and stellar observation... This skill facilitates the operation of technologies associated with stars in that genre, including telescopes, radio telescopes, and galactic navigating computers',
            limit: 'Exclusive',
            name: 'Astronomy',
            experts: {
              instrument: ['radio', 'probes', 'refractor', 'pulse'],
            },
            pairs: [
              { description: 'Astrophysics', skill: 'Physics' },
              { description: 'Astronavigation', skill: 'Geography' },
              { description: 'Star composition', skill: 'Chemistry' },
              {
                description: 'Spacewalk and exploration',
                skill: 'Extreme Environments',
              },
            ],
          },
          {
            base: 'Deduction',
            description:
              'Chemistry covers knowledge and use of elements and compounds. Application include use of and creation of explosives... Creation of weapons from this skill requires time, resources, knowledge, and specific preparation. Players must make previous arrangements with Guides with preparation and research. Weapons of this sort have shelf lives from minutes to years. Creation requires a lab, a delivery system, and materials (TN100). Extensive costs cause permanent wealth damage... A substance, grenade, or spray can cause 1d6 per 10 SL. Special effects, such as oil slicks or smoke bombs, must be negotiated with Guide before play',
            limit: 'Acclimatable',
            name: 'Chemistry',
            experts: {
              types: [
                'acids',
                'bases',
                'catalysts',
                'dyes',
                'organic',
                'explosives',
                'molecular',
                'nuclear',
                'polymers',
                'salts',
              ],
            },
          },
          {
            base: 'Memory',
            description:
              'Gemology incorporates location and information of gems and precious stones. Heroes identify precious and semi-precious stones by physical appearance in their raw, refined, and cut forms. It also includes knowledge of gem cutting',
            limit: 'Exclusive',
            name: 'Gemology',
            experts: {
              types: ['Specific Stone'],
            },
          },
          {
            base: 'Memory',
            description:
              'Geology includes extraction of minerals, ores, and gems from the earth as well as exploration of terrain for mineral deposits, seismic faults, and volcanic activity. Skilled users know location, identity, and use of non-precious stones and minerals in raw, refined and smelted forms. Smelting is a skill combination of Geology and Smithing. This skill is used to remove gems from substrate',
            limit: 'Acclimatable',
            name: 'Geology/Mining',
            experts: {
              style: ['Specific Mine', 'Specific Mineral Type'],
            },
          },
          {
            base: 'Mind/2',
            description:
              'Mathematics measures capability with basic and advanced mathematics. Heroes estimate distance and travel time, calculate projectile motion for sighting trajectory, or determine billing to ensure no charge overage. In some genres, Mathematics is the Linguistics of Computer Science and may be used at a one-shift penalty',
            limit: 'Acclimatable',
            name: 'Mathematics',
            experts: {
              style: [
                'computation',
                'measuring',
                'probability',
                'spatial',
                'statistics',
                'theoretical',
                'chaos theory',
              ],
            },
          },
          {
            base: 'Faith',
            description:
              'Parapsychology embodies use of technology to detect, classify and identify creatures and castings of magical nature, including ghosts, haunts, curses, and spirits (TN100). It also covers description and study of supernatural qualities and magical entities (TN100). It is not considered a serious academic pursuit by most of the learned',
            limit: 'Exclusive',
            name: 'Parapsychology',
            experts: {
              style: ['Specific Creature', 'Specific Casting Skill'],
            },
          },
          {
            base: 'Deduction',
            description:
              'Physics covers knowledge and use of matter, energy, motion, and sub-atomic particles',
            limit: 'Acclimatable',
            name: 'Physics',
            experts: {
              style: [
                'lasers',
                'light',
                'nuclear',
                'particle',
                'projectiles',
                'simple motion',
                'theoretical',
              ],
            },
          },
        ],
      },
      sneak: {
        description:
          'This area covers skills used so the Hero is not noticed... Sneak skills are used for stealth, vanishing, and concealment. Hide details the ability a Hero has to remain unnoticed. Legerdemain handles objects disappearing through hand motions or gestures. Concealment of objects uses skill combination in conjunction with Deception to create hidden compartments, sheaths, or areas. Hide and Legerdemain are described under their skill descriptions. Removing something from view is an effective way of hiding it that does not need a skill; a book in a backpack is hidden. Hiding in a closet is stealth by position, not skill; however, stealth may be required to remain quiet... Concealing objects uses skill combination of Deception and the appropriate skill. Use skill match rules versus Perception with one negative shift from the combination effort. Guides assign appropriate shifts from size and creativity',
        skills: [
          {
            base: 'Dexterity',
            description:
              'Hide embodies how to stay out of visual sight. Examples include: ducking into shadows or using terrain to cover to stay hidden. Moving generates penalty shifts depending on speed... Experts, using special equipment, can also disguise other senses (smell, taste, touch, and hearing). Vision and sound are the two most common senses masked. Masking scent requires SL 40. Taste and touch require SL 60. In order to not leave tracks, use skill combination with Hunt. Guides should consider additional penalty shifts for each sense masked... Hide uses the TN Match rules for resolution versus Perception. It is impossible to Hide if under casual or direct observation; a momentary distraction may justify use... The mechanic used for Hide is TN match with best Perception. The observer needs to match the TN established by the hider to see the person hiding. If they miss by one shift, they know the space is occupied. If the observer misses by two shifts, they know the direction someone is hiding. If they TN match is missed by more than two shifts, the person is concealed... Observing hidden foes: TN or more-Not hidden, TN25-Identifies the space the target is in, TN50-Identifies the direction of the target, TN50-Concealment of target... Movement modifiers include: 2 shift bonus-Under size 0, no light, no sound, 1 shift bonus-Size 0, under one-half speed, low light, obscured, no bonus-Size 1, one-half speed, 1 shift penalty-Size 2, over one-half speed, 2 shift penalty-Over size 2, running, charging',
            limit: 'Universal',
            name: 'Hide',
            experts: {
              location: [
                'Queens',
                'Bronx',
                'Sherwood Forest',
                'USS Nimitz',
                "Druid's Grove",
              ],
            },
          },
          {
            base: 'Dexterity',
            description:
              'Legerdemain is for hiding objects and performing tricks through distraction and quick movements. Examples would be juggling, sleight of hand, shell games, palming, stage magic/magic tricks (using special props), and pick pocketing... Spell casting with Legerdemain uses TN Match versus Perception to prevent motions from being seen... Escaping ropes, snares, and grapples/pins uses TN match mechanics. A Hero incurs a two-shift penalty for nets and ropes, and a four-shift penalty for standard manacles and squeezing through an area that fits the head but not shoulders... Escaping from rope bindings, manacles, or other restraints requires one minute. Escaping from a net or grapple/pin is a closing stance. Squeezing through tight spaces takes one minute, maybe longer, depending on space length (TN50)... Pick-pocketing with Legerdemain uses skill match with Perception. A two-shift penalty is assessed without employing a distraction... A practitioner vanishes an item of their size minus 5 or smaller without penalty. A human could vanish a size(-4) item, roughly the size of a hummingbird. The object must have a destination that is concealed from view. This space must be within or adjacent to where it is vanished... One size greater is one shift, two sizes great is three shifts, three sizes greater is six shifts, four sizes greater is nine shifts, same size is twelve shifts',
            limit: 'Universal',
            name: 'Legerdemain',
            experts: {
              escape: ['chain', 'handcuff', 'rope', 'straitjacket'],
              hide: ['coin', 'bird', 'eggs', 'rabbits', 'wallet'],
            },
          },
        ],
      },
      sports: {
        description:
          'This category of skills involves physical activities meant for competition, pleasure, or entertainment',
        skills: [
          {
            base: 'Body/2',
            description:
              'Aerosports enables performance of skydiving, parasailing, parachuting, wing walking, and free-falling with better control... Combat while performing such activities normally requires a further shift. This shift is negated with Aerosports (TN100) and is made at least once per encounter',
            limit: 'Acclimatable',
            name: 'Aerosports',
            experts: {
              style: ['skydiving', 'parasailing', 'parachuting'],
            },
          },
          {
            base: 'Body/2',
            description:
              'Aquatics enables performance of water ballet, swimming, diving, scuba diving, snorkeling, water-skiing, wake-boarding... Combat while performing such activities normally requires a further shift. This shift is negated with Aquatics (TN100) and is made at least once per encounter',
            limit: 'Acclimatable',
            name: 'Aquatics',
            experts: {
              style: [
                'water ballet',
                'swimming',
                'diving',
                'scuba diving',
                'snorkeling',
                'water-skiing',
                'wake-boarding',
              ],
            },
          },
          {
            base: 'Body/2',
            description:
              'Athletics allows the user to successfully complete and participate in physical individual and team sports. Other uses include running, pole-vaulting over a fence, and jumping. Athletes have rigorous training to develop endurance in such activities may maintain such for prolonged effect (TN100). Extraordinary feats of endurance may add shifts',
            limit: 'Acclimatable',
            name: 'Athletics',
            experts: {
              sport: ['Specific Sport'],
            },
            pairs: [
              { description: 'Competitive swimming', skill: 'Aquatics' },
              {
                description: 'Skiing; Ice skating',
                skill: 'Extreme Environments',
              },
              { description: 'Wrestling', skill: 'Combat Unarmed' },
              { description: 'Biking; Sledding', skill: 'Drive' },
            ],
          },
          {
            base: 'Body/2',
            description:
              'Gymnastics enables performance of extreme feats of physical prowess, such as tightrope walking, balance beam, climbing, parallel bars (even and uneven), rings, flexibility stretching, trapeze, bungee cord jumping, and tumbling. This area does not allow sustained flight. The Guide will determine the TN depending on the difficulty of attempted routine... TN25-Somersault, TN50-Handstand; cartwheel; tumbling, TN75-Splits; Walking on hands, TN100-Giants; aerials; climbing vertical wall, TN125-Full rotation flip, TN150-Tightrope; combination of three maneuvers, TN200-Combination of four maneuvers',
            limit: 'Universal',
            name: 'Gymnastics',
            experts: {
              competitive: [
                'balance beam',
                'rings',
                'spring floor',
                'uneven bars',
                'vault',
              ],
              style: [
                'bungee cord jumping',
                'climbing',
                'tightrope walking',
                'trapeze',
                'tumbling',
              ],
            },
            pairs: [
              { description: 'Competitive floor', skill: 'Dance' },
              { description: 'Competitive vault', skill: 'Athletics' },
            ],
          },
        ],
      },
      talk: {
        description: 'This category of skills involves communication',
        skills: [
          {
            base: 'Deduction',
            description:
              'Computer Science involves programming in integrated technology. Use includes analog, computing machine design, techniques of program processes and implementation, databases, software, hardware, and computer system security. Computer Science allows programming in pseudo-code and flow-charting. Most systems interface with a computer language in some form. Computer languages are covered under Language',
            limit: 'Acclimatable',
            name: 'Computer Science',
            experts: {
              system: ['Specific Operating System'],
            },
            pairs: [
              {
                description: 'Artificial intelligence',
                skill: 'Mathematics & Philosophy',
              },
              { description: 'Informatics', skill: 'Library Networking' },
              { description: 'Robot command code', skill: 'Robotics' },
              { description: 'Security', skill: 'Cryptography' },
              {
                description: 'Video gaming',
                skill: 'Military Science & Language',
              },
            ],
          },
          {
            base: 'Mind/2',
            description:
              'Cryptography is the art of making and breaking codes. This skill is used in skill combination with Mathematics or Language. Math pairs with numeric codes; Language pairs for riddling games. Some rare codes may be based on History, Artistry (pictures), or Geography (maps)... 2 shift bonus-Possess key codes, 1 shift bonus-Use of cipher device; reference material, no shift-No key or partial list of keys, 1 shift penalty-Math skill below rank 20, 2 shift penalty-Shifting symbols based on time reference... Base TN, TN50-Transposition cipher, TN75-Substitution cipher, TN100-Cryptosystem, replacement meaning code, TN150-Cryptosystem with variable keys, TN200-Algorithmic (integer factorization, logarithmic)',
            limit: 'Universal',
            name: 'Cryptography',
          },
          {
            base: 'Mind/2',
            description:
              'Journalism embodies representation of events in public media. The means of disseminating information to the public includes newspaper, cinema, television, radio, internet, and holographic through photography, publication, and printing. Skill combination with Deception may disseminate misinformation or produce counterfeit documents',
            limit: 'Acclimatable',
            name: 'Journalism/Media',
            experts: {
              style: [
                'blog',
                'cinema',
                'newspaper',
                'novels',
                'radio',
                'television',
                'webcasting',
                'photography',
              ],
            },
          },
          {
            base: 'Memory',
            description:
              "Language includes but is not restricted to computer languages, semaphore, lip reading, regional languages (pidgin), guild languages (beggars' or thugs'), arcane, deaf/mute/signs language, and military language... Language provides the ability to speak, understand, and read a specific language depending on the forms of the language available. Not all languages have both written and spoken forms. This skill must be acquired for each desired language Proficiency is determined by rank... Rolls for Language are required if rank is under 20. TNs depend on level of communication desired, per Guide discretion. The goal TN is two shifts (50 higher) than the communication rank desired... Example: Elena has a rank 15 in Spanish. She wishes fluent conversation. This requires 20 (fluent) + 50 = TN70. Elena needs a die roll of 55. Suppose Elena wanted to appear native with a dialect (Rank 50). A roll of 50 + 50 = TN100 is required, with a die roll of 85 needed... Proficiency: 1 to 14-Grammar and Middle School levels, 15 to 19-Nearly fluent; High School level, 20 to 29-Fluent; Collegiate level, 30 to 39-Can speak without accent, use idioms and cliches of a particular language, 40 to 49-Speaks so well as to be able to disguise as a native of the particular country, 50+ Fully fluent and literate with sophisticated vocabulary; can now imitate multiple dialects in the language... Use of and exposure to non-native languages during a campaign may grant HiPs... Lip reading is a skill combination with Perception and a standard one shift penalty, barring any other mitigating circumstances",
            limit: 'Exclusive',
            name: 'Language',
            experts: {
              dialect: ['Specific Dialect', 'Ancient Dialect', 'Lip Reading'],
            },
          },
          {
            base: 'Deduction',
            description:
              'Linguistics covers knowledge of the structure and phonics of various languages. Skill use can establish basic communication with anyone, regardless of languages spoken, and even translate to a small extent. It includes grammar and developmental history of a language, but not cultural intertwining... Rolls for Linguistics are resolved similar to that of Language. Goal TNs are two shifts higher (50 higher) than the communication rank desired... Rank 70 allows fluency (fluency 20, 20+50 = 70) in all languages, provided that sounds and gestures required can be imitated. More difficult languages may require higher rank to achieve fluency. Some xenophobic races and societies purposely make communication difficult, requiring touch with specialized appendages or other challenges, to learn the language. Such cultures also ignore others trying to converse... Linguistics is a means of communication and does not replace any specific tongue. Use identifies the speaker and non-native... Genres rarely extend Linguistics to computer languages, but in such rare instances require sophisticated equipment such as a special keyboard. Mathematics may also be considered instead of Linguistics for computers in some genres',
            limit: 'Universal',
            name: 'Linguistics',
          },
          {
            base: 'Memory',
            description:
              'Literature encompasses knowledge about all types of literature, including classic works, modern literature, lyrics, creative writing, and poetry. Skill measures ability to understand such works, and processes of constructing books, and writing',
            limit: 'Exclusive',
            name: 'Literature',
            experts: {
              style: ['restoration'],
              author: ['Poe', 'Twain'],
            },
          },
          {
            base: 'Memory',
            description:
              'All speaking creatures have Native Tongue at rank 20 if this skill is not listed. Once the Hero or creature advances it beyond rank 20, then Native Tongue is recorded on their character sheet and contributes to Talk. Alternatively, those creatures comparatively deficient in language have Native Tongue recorded at a lower rank',
            limit: 'Exclusive',
            name: 'Native Tongue',
            experts: {
              dialect: ['Specific Dialect', 'Ancient Dialect', 'Lip Reading'],
            },
          },
          {
            base: 'Deduction',
            description:
              "Public Speaking involves speech delivery to a group of people, a target audience, or other listeners to hold interest. Unlike Etiquette and Presentation, Public Speaking is the skill used to hold attention over some period of time and may require multiple rolls. In some genres, presentations involve other media besides talking... In gatherings, a Hero may use Presentation to gain the targets' attention. Etiquette modifies the targets' reaction. Lastly, Public Speaking holds the targets' attention to convey a message. At some later point, Influence may change the target's attitude toward the Hero... TNs based on overall attitude TN50-Revered, honored, TN75-Zealous, devoted, TN100-Sympathetic, considerate, TN125-impartial, apathetic, TN150-Antagonistic, annoyed, TN175-Offensive, spiteful, TN200-Hateful, abhorred... Speakers of specific skills use skill combination rules. Examples include Laws, Theology, and Artistry. An expert may consider creating a combination skill",
            limit: 'Universal',
            name: 'Public Speaking',
            experts: {
              topic: ['passivism', 'motivation', 'weight'],
            },
          },
        ],
      },
      expertise: {
        description:
          'Skill expertise focuses on a specific aspect of one skill providing bonus shifts. The first bonus is received at rank 20 as a shift on skill use of the specific parameter. At rank 40, this increases by partial shift. At rank 60, the expertise bonus becomes two shifts. Expertise shifts for a single action do not stack. Combat Expertise is listed under fight. Movement Expertise is listed under move... The Hero may broaden his expertise by taking multiple expertise of the same skill, each with its own rank',
        skills: [
          {
            base: 'Mind/2',
            description:
              'Mind Skill Expertise modifies a specific aspect of a Mind skill special to that character',
            limit: 'Any',
            name: 'Mind Skill Expertise',
          },
          {
            base: 'Body/2',
            description:
              'Body Skill Expertise modifies a specific aspect of a Body skill special to that character',
            limit: 'Any',
            name: 'Body Skill Expertise',
          },
          {
            base: 'Soul/2',
            description:
              'Soul Skill Expertise modifies a specific aspect of a Soul skill special to that character',
            limit: 'Any',
            name: 'Soul Skill Expertise',
          },
          {
            base: 'Wealth/2',
            description:
              'Wealth Skill Expertise modifies a specific aspect of a Wealth skill special to that character',
            limit: 'Any',
            name: 'Wealth Skill Expertise',
          },
          {
            base: 'Sum of all resources / 8',
            description:
              'All Resources Skill Expertise modifies a specific aspect of an All resources skill special to that character',
            limit: 'Any',
            name: 'All Resources Skill Expertise',
          },
        ],
      },
      trick: {
        description:
          'Skill tricks represent a diverse group of specialized skills. Tricks are maneuvers and abilities that are exceptions to the rules. Many tricks require prerequisite skills that are subject to the skill combination rules. These are described as trick chains. A trick chain is the group of skills necessary to access a skill trick... Combat Tricks are listed with other combat skills. These skills are only useful with one very specific weapon... Tricks are very specific and highly specialized. They require a limiting parameter of access. Core access is limited to only a few initial tricks; however, more tricks will become available in expansions',
        skills: [
          {
            base: 'Mind/2',
            description:
              'Mind Skill Tricks is use of a Mind skill special to that character',
            limit: 'Any',
            name: 'Mind Skill Tricks, trick name',
          },
          {
            base: 'Body/2',
            description:
              'Body Skill Tricks is use of a Body skill special to that character',
            limit: 'Any',
            name: 'Body Skill Tricks, trick name',
          },
          {
            base: 'Soul/2',
            description:
              'Soul Skill Tricks is use of a Soul skill special to that character',
            limit: 'Any',
            name: 'Soul Skill Tricks, trick name',
          },
          {
            base: 'Wealth/2',
            description:
              'Wealth Skill Tricks is use of a Wealth skill special to that character',
            limit: 'Any',
            name: 'Wealth Skill Tricks, trick name',
          },
          {
            base: 'Sum of all resources / 8',
            description:
              'All Resources Skill Tricks is use of an All Resources skill special to that character',
            limit: 'Any',
            name: 'All Resources Skill Tricks, trick name',
          },
        ],
      },
    },
  },
]
