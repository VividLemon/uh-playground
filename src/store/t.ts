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
            'Artistry creates works of art using materials. These creations include traditional subjects, calligraphy, drawings, sculpture, glassblowing, painting, pottery, and large-scale installations. Additions in modern genres include mixed media, cinematic media, photography, and digitial media.',
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
            'Deception promotes or detracts information from governments, groups, and individuals. A person intentionally misinterprets facts for ulterior motives. Altered event interpretation changed identity or background, hiding objects, lies, propoganda, and misinformation are tools of deception. Deception is essential for spies, scoundrels, and those working the criminal underwold.',
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
            'Architecture is knowledge of structural design. Heroes plan draft, and oversee construction of buildings, vehicles, ships, spacefaring modules, and so on. This skill functions with skill combination.',
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
            vehicle: ['car', 'ship', 'starship', 'plane', 'hovercraft'],
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
            'Electronics covers knowledge of electric inventions, including design, application, and repair. Rulings are genre-specific. Some genres utilize Electronics for vacuum-tube technology to transitor technology. Other genres use chips of silicon, transitor boards, and nanotechnology. Other genres may use advances technology like magnetically suspended energy portals, living electricity, etc. Construction of elecctronic items usually requires skill combination. Other skill combinations include biogenetic, computers, neuropathway replication, and nanotechnology',
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
            style: ['hydroponics', 'viticulture', 'microculture', 'organic'],
            crop: ['trees', 'fruits', 'grains', 'domesticated animals'],
          },
        },
        {
          base: 'Body/2',
          name: 'Leatherwork',
          description:
            'Leatherwork enables curing of animal skins and hides to produce leather. Skill use covers cobbling, tanning, taxidermy, and manufacturing of clothing and armor. Skill combination is necessary for mummification, dyed goods, and studded equipment.',
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
          name: 'Mechanics/Lockpicking',
          base: 'Body/2',
          limit: 'Exclusive',
          description:
            'Mechanics creates, repairs, and manipulates mechanical moving objects, such as locks, engines, and appliances. Inventions with moving parts embody this skill. Applications vary from combustion engines to locks.',
          experts: {
            style: ['lockpicking', 'household', 'traps', 'transmissions'],
            engine: ['combustion', 'fusion', 'hyperdrive', 'steam'],
          },
        },
        {
          base: 'Memory',
          description:
            'Pharmaceuticals permits extraction, dispensing, identification, and administration of various chemicals for live organisms. Further genre expansions describe medication, drugs, and poisons. Professionals provide details of pharmaceutical interactions, reactions, and safety administration data. Creation of refined pharmaceuticals, drugs, and toxins requires a laboratory, equipment, and skill combination with Chemistry.',
          limit: 'Exclusive',
          name: 'Pharmceuticals/Toxicology',
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
              'artic',
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
              'nechlaces',
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
            'Business Administration is accounting, management, and marketing of companies. Heroes with this skill maximize efficiency and income, manage guilds as clients, and discover the current finaancial health of other businesses. This skill is used with skill combination. For instance, a floral shop manager would require this skill and Botany',
          limit: 'Exclusive',
          name: 'Business Administration',
        },
      ],
    },
  },
]
