import { Skills } from '@/types'

export const a: Array<Skills> = [
  {
    id: 1,
    world: 'a',
    skills: {
      art: [
        {
          name: 'Artistry',
          description:
            'Artistry creates works of art using materials. These creations include traditional subjects, calligraphy, drawings, sculpture, glassblowing, painting, pottery, and large-scale installations. Additions in modern genres include mixed media, cinematic media, photography, and digital media.',
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
            'Deception promotes or detracts information from governments, groups, and individuals. A person intentionally misinterprets facts for ulterior motives. Altered event interpretation changed identity or background, hiding objects, lies, propaganda, and misinformation are tools of deception. Deception is essential for spies, scoundrels, and those working the criminal underworld.',
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
            { skill: 'Badm', description: 'Embezzlement' },
            { skill: 'Padm', description: 'Smuggling' },
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
            'Etiquette represents manners, means of address, and other social skills. Table manners, mode of speech, specific vocabulary, dress, hairstyle, political and social awareness, breadth and depth of experiences (such as acquaintances and travel) rely on Etiquette. First impressions often call for Etiquette rolls.',
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
            'Music may be taken multiple times, one time for each separate musical instrument group. Musical groups are vocals, horns, strings, percussion, electronic, woodwinds, or other skills specific to a particular genre. The Hero also may compose music with this skill.',
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
            'Thespianism encompasses acting, mimicry, impersonation, general knowledge of stage management, stagecraft, lighting, and makeup. Performances range from miming to comic improvisation. Impersonation in a covert operation requires skill combination with Deception',
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
      build: [
        {
          base: 'Memory',
          description:
            'Architecture is knowledge of structural design. Heroes plan draft, and oversee construction of buildings, vehicles, ships, space-faring modules, and so on. This skill functions with skill combination.',
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
            'Construction includes carpentry, plumbing, and in applicable genres, basic electrical wiring. It enables rudimentary objects (including paper) and structures to be made from basic materials at hand. Construction builds most things out of wood or even adobe. Skill combination is necessary for complicated projects, with combinations determined by the Guide. Fine detail may be achieved, with shifts. Guides assign shifts to specific projects, depending on resources available and time spend. Construction is a key skill used in creating traps.',
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
            'Electronics covers knowledge of electric inventions, including design, application, and repair. Rulings are genre-specific. Some genres utilize Electronics for vacuum-tube technology to transistor technology. Other genres use chips of silicon, transistor boards, and nanotechnology. Other genres may use advances technology like magnetically suspended energy portals, living electricity, etc. Construction of electronic items usually requires skill combination. Other skill combinations include bio-genetic, computers, neuropathway replication, and nanotechnology',
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
            'Farm covers all agricultural activities, including raising crops, animals, or other organisms.',
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
            'Leather-work enables curing of animal skins and hides to produce leather. Skill use covers cobbling, tanning, taxidermy, and manufacturing of clothing and armor. Skill combination is necessary for mummification, dyed goods, and studded equipment.',
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
            'Manufacturing is knowledge of process and methodology for production of products, composition to assembly lines. Skill combination pairs Manufacturing with other skills to allow mass production, such as mass agriculture, and mass textile production.',
          limit: 'Exclusive',
        },
        {
          name: 'Masonry',
          base: 'Strength',
          limit: 'Acclimatable',
          description:
            'Masonry allows the use of cut stone to build structures from mortar, stone, and brick.',
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
            'Mechanics creates, repairs, and manipulates mechanical moving objects, such as locks, engines, and appliances. Inventions with moving parts embody this skill. Applications vary from combustion engines to locks.',
          experts: {
            style: ['lock-picking', 'household', 'traps', 'transmissions'],
            engine: ['combustion', 'fusion', 'hyper-drive', 'steam'],
          },
        },
        {
          base: 'Memory',
          description:
            'Pharmaceuticals permits extraction, dispensing, identification, and administration of various chemicals for live organisms. Further genre expansions describe medication, drugs, and poisons. Professionals provide details of pharmaceutical interactions, reactions, and safety administration data. Creation of refined pharmaceuticals, drugs, and toxins requires a laboratory, equipment, and skill combination with Chemistry.',
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
            'Textiles creates and manipulates fibers to construct objects such as bags, baskets, books, carpets, clothing, paper, ropes, rugs, sandals, and other woven items.',
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
      buy: [
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
            'Finance promotes lending and investing in genres with credit systems or monetary exchanges. The management and investment of stock, bonds, futures, options, commodities, and other accounting methods provide profit. A further use of this skill is to cure financial addictions and Wealth diseases. This procedure-base skill cures damaged Wealth at a rate of 1d6/10 rank and can only be used once per day per patient; such use also removes all non-lethal damage. Target numbers are TN100, TN50 using the appropriate equipment and environment. Other modifiers apply according to Guide discretion. Consultation with this skill restores temporary Capital and Employability damage one point per hour up to rank modifier. Clients can sustain only one session per day. Target number is TN150, TN100 using the appropriate equipment and environment.',
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
            'Games wealth applies theory and practice of games involving money. Topics include gambling and events used to generate money. The Guide decides the shifts for each individual situation. Successful gambling temporarily raises Capital for the duration as the Guide deems fit, typically for the adventure. Losses incur permanent Capital damage. Be warned, many institutions use methods that cause negative shifts. A skill combination with Perception may spot cheaters of games (TN150). Unless otherwise noted, this mechanic can only be used once per adventure. TN200-Temporarily raise Capital 2d6, TN150-Temporarily raise Capital 1d6, TN100-Temporarily raise Capital 1d3, Failure-Permanent lose Capital 1d6',
          experts: {
            game: ['blackjack', 'horse races', 'craps', 'baccarat'],
          },
        },
      ],
      camp: [
        {
          base: 'Mind/2',
          limit: 'Exclusive',
          name: 'Extreme Environments',
          description:
            'Extreme Environments comprises knowledge of various extreme and hostile environments. This skill is used with skill combinations. Whereas Hunt covers normal environments, Extreme Environments handles adverse, abnormal environments of the genre.',
          pairs: [
            {
              skill: 'Hunt',
              description: 'Ice fishing',
            },
            {
              description: 'Skiing; Ice skating; Deep see diving',
              skill: 'Athletics',
            },
            { description: 'Bobsled; Astronaut navigation', skill: 'Driving' },
            { skill: 'Geology', description: 'Volcanism; Mining the moon' },
          ],
        },
        {
          base: 'Body/2',
          description:
            "Hunt embodies hiking, climbing, jumping, and the ability to survive in a variety of environments. A hero can construct shelters in the wild. Additionally, the Hero can make or disarm snares and earthen pits with this skill area. Normal TN for a day's existence would be TN100, subject to Guide discretion. Rolls are made daily. TN50-Temporary lean-to shelter, TN75-Temporary ice shelter, TN100-Food and water for one person's existence in the wild, TN125-Food and water for two people existing in the wild, TN150-Food and water for eight people existing in the wild. Tracking prey depends on weather, terrain, mode of transport, age of tracks, and season with shifts begin at TN100. 3 shifts easier-Group(12+); Size7, 2 shifts easier-Group(6-12); Size5 to Size6, 1 shift easier-Group(3-6); Size3 to Size4, 1 shift harder-Rocky terrain; poor visibility; size-1 to size-2, 2 shifts harder-precipitation; Size-3 to Size-4, 3 shifts harder-Waterways; Size-5 or smaller. Difficulty in following tracks depends on environmental conditions. Wind, moisture, soil hardness, traffic, and plant growth all factor into determination of TN. For the sake of simplicity, the following chart describes modifiers for a temperate woodland. For example mud holds tracks longer and may warrant two adjustments; a day old track in mud is one shift easier. 3 shifts easier-Subjects in sight, 2 shifts easier-Subjects heard, 1 shift easier-Minutes old, no shift-Hours old, 1 shift harder-One day old, 2 shifts harder-Days old, 3 shifts harder-A week or more old.",
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
            'Mountaineering Caving includes speleology, squeezing, tunneling, climbing, and underground exploration. An individual with Mountaineering can squeeze through a space that fits their head (TN100)',
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
            'Travel is the ability to survive and flourish in various urban conditions, outside a normal place of residence. Heroes determine logical location of people, places, or items in a city setting. Normal TN for living off the street is TN100. Trailing is following in an urban setting. Trailing a crowd (TN100) does not require a paired skill, but trailing on a highway requires skill combinations (Drive TN125). Investigating a cold trail is possible with other skills (Police work TN150 or Criminology TN150). Downtrodden Heroes construct shelters in the city and know how to avoid local authorities, ordinances, and trouble. Every city will have its own rules and opportunities. TN100-Temporary cardboard quarters in alleyway, TN125-Temporary crate under stairs or overpass, TN150-Semi-permanent in sewers or abandoned dwellings.',
          limit: 'Exclusive',
          name: 'Travel',
          experts: {
            city: ['New York City', 'Centropolis'],
          },
        },
      ],
      fight: [
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
            'Combat Environmental Expertise is a combination skill of Combat Environmental Expertise and Extreme Environments, where all three skills have crested. This skill at rank 40 negates one penalty shift from fighting in adverse environments. The Hero chooses the environment. Example include: aerial, aquatic, cold, heat, weightless, etc',
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
          // pg 30
        },
      ],
    },
  },
]
