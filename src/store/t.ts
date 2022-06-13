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
          base: 'Strength',
          description:
            'Combat General Melee focuses on the art and tactics of melee combat. Attacks with this skill are TN125. Any melee weapon can be used in this fashion. This allows improvisation of any object as a melee weapon including natural weapons. Combat General Melee can be used for melee touch spells (TN100) but does not cause additional damage from Strength',
          limit: 'Universal',
          name: 'Combat General Melee',
        },
        {
          base: 'Dexterity',
          description:
            'Combat General Range focuses on the art and tactices of projectile combat. Attacks with this skill are TN125. A Hero with skill gains improvisation of any object as a thrown weapon. Combat General Range also gains proficiency in all projectile and grenade weapons. To be clear, self-projected weapons, siege machines, and mounted weapons are covered in other Combat General skills. Strength modifiers do not apply to damage. Combat General Range can be used to launch ray spells (TN100)',
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
            'Combat Grenades covers the use of grenades icnluding: concussion grenades, vials of holy water, and dynamite. Weapons in this group are designed to active upon landing on or near the target. In addition to primary damage, splash damage affects each adjacent space. Spells use Combat Grenade to launch ray spells at two shifts penalty (TN125)',
          limit: 'Universal',
          name: 'Combat Grenades',
        },
        {
          base: 'Strength',
          description:
            'Combat Natural Weapons includes use of natural weapons. Examples across multiple genres include claw, bite, tail, pseudopod, slam, tentacle, tail, wing buffet, and head-butt',
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
            'Combat Pole Arms comprises use of pole arms. Examples across multiple genres include gaff, halberd, lance, poleaxe, trident and others. Weapons in this category need two hands without the use of an apparatus or holster as with a lance. These weapons attack and threaten one space beyond normal melee, including the diagonal. Spaces adjacent to the wielder have penalties, explained next. The wielder may chose the weapon to attack adjacent squares at one negative shift. Pole arms suffer a two-shift penalty attacking opponents in their occupied space. Negative shifts apply to disarming, weapon damage, and similar attacks. Leaving adjacent squares provokes parting shots at one negative shift. Opponents charging through threatened spaces incur a parting shot; however, moving through these spaces cautiously negates the parting shot.',
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
            'Combat Two Hand Blunt/Pierce represents knowledge and use of two-handed blunt weapons. Examples across multiple genres include heavy flail, spear, staff, and large club.',
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
            'Combat Unarmed is based on various forms of unarmed combat, including wrestling, boxing, street-fighting, and judo. Various techniques may change for these styles, and includes use of body parts not normally designed for combat: head-butting, punching, kicking, etc. The combatant may choose to do regular or non-lethal damage. Brass knuckles is an example of an available weapon. Expertise in Combat Unarmed does not specialize in a particular form of karate or the like. Instead, the core system allows expertise by specifying a specific body part such as hand, leg, body, or head. The Hero should be mindful in tehir selection if they expand with tricks such as sunder, trip, push, or knockout.',
          limit: 'Universal',
          name: 'Combat Unarmed',
        },
        {
          base: 'Varies',
          description:
            'Combat Weapon Expertise teaches advantages for one specific weapon type providing bonus shifts. The first bonus is received at rank 20 as a shift with weapon use. At rank 40, this increases by partial shift. At rank 60, the expertise bonus becomes two shifts. These skills are subject to the skill combination rules. The Hero may take this skill multiple times in different weapons. When using a combination of skills with skill expertise, the Hero must use the lowest rank',
          limit: 'Universal',
          name: 'Combat Weapon Expertise, specific weapon',
        },
        {
          base: 'Varies',
          description:
            "Combat Weapon Mastery represents pinnacle use of a specific weapon and it's detailed in genre handbooks for specific genres that allow it's use. This skill provides tricks at rank 20, 40, and 60 without using the normal skill combination, prerequisites skills, or skill chain rules. Acquired tricks are gained from trainers and are genre exclusive. Alternatively, expertise may substitute for the first acquired trick. When this skill is used in conjuction with any other skill, skill combination rules apply similarly as expertise. Weapon access has the same restrictions as CWEXP",
          limit: 'Exclusive',
          name: 'Combat Weapon Mastery, weapon',
        },
        {
          base: 'Varies',
          description:
            "Combat Weapon Tricks enables one trick to be learned with one specific weapon type, not with a weapon class. It can be learned for more than one weapon, each with it's separate rank. This skill is subject to skil combination rules. Example tricks that can be learned in this system are disarm, sunder (prerequisite of disarm), trip, grapple (prerequisite of trip), shove, overrun (prerequisite of shove). Use in an atypical manner (throwing a bastard sword, triggering a machine gun and having it go off while it falls down the stairs), or drawing the weapon quickly",
          limit: 'Universal',
          name: 'Combat Weapon Tricks, weapon',
        },
      ],
      heal: [
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
            creature: ['A.D.A.M.14', 'Oreman One', 'R.O.V.E.R.', 'the dog'],
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
            'First Aid relieves Body stress from trauma. This may include resuscitation, triage of injured patients, or removal of foreign bodies. Use of this skill is specific to race, and shift(s) apply as per the Guide. Functions include stabilizing dying characters in any of Mind/Body/Soul and assistance in recovering Resource while resting (TN50, subject to toher modifiers per Guide discretion). Stabiliziation can be done only once per character per five minutes without special equipment (TN100 in combat, TN50 if not). Characters can care for on other person per 10 rank. Heroes apply First Aid to general populations with implementation of correct hygiene procedure. Application does not cure disease, however, it may prevent the onset and severity of infections. First Aid treats symptoms; it does not cure diseases. TN25-Heimlich maneuver; tourniquet, TN50-Cauterize wounds; bind wounds; stabilization, TN75-Remove barbs and shrapnel; remove giant leech, TN100-Slow poison; field tracheostomy, TN125-Remove tape worms, TN150-Remove hook worms from muscle',
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
            'Medicine is the academic anatomy, biochemistry, and medical care of a single sentient race. This skill enables acute repair and long-term care of chronic ailments, as well as acute severe infections. This skill differs from First Aid as it is used for problems like diseases, surgery, and medications. Medicine can function as First Aid with an additional two-shift penalty. Medicine can identify diseases (TN150). A proper lab, family history, examination, and x-rays each add a shift. Rarity and similarity to other diseases may add negative shifts. Magical diseases are two-shifts higher to detect without obvious symptoms. This producedure-based skill cures damaged Body at a rate of 1d6/10 Rank and can only be used once per day per patient such use also removes all non-lethal damage. Target numbers are TN100, TN50 using the appropriate equipment and environment. The appropriate environment to practice Medicine is a hospital. Practice restores Dexterity and Strength damage one point per hour up to rank modifier. Patients can sustain only one session per day. Target number is TN150, TN100 using the appropriate equipment and environment',
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
            'Meditation Therapy is long-term spiritual care of chronic spiritual ailments and acute spiritual diseases. This procedure-based skill cures damaged Soul at a rate of 1d6/10 Rank and can only be used once per day per patient; such use also removes all non-lethal damage (TN100, TN50 using the appropriate equipment and environment conducive to calm relaxation.). Therapy with this skill restores Faith and Imagination damage one point per hour up to rank modifier. Patients can sustain only one session per day. Target number is TN150, TN100 using appropriate equipment and environment',
          limit: 'Acclimatable',
          experts: {
            setting: ['grove', 'monastery', 'office', 'temple', 'waterfall'],
          },
        },
        {
          base: 'Mind/2',
          description:
            'Psychology is long term mental care of chronic mental ailments and acute severe mental illnesses/insanities. This procedure-based skill cures damaged Mind at a rate of 1d6/10 Rank and can only be used once per day per patient; such use also removes all non-lethal damage (TN100, TN50 using the appropriate equipment and environment conducive to uninterrupted conversation.) Other modifiers apply according to Guide discretion. Therapy with this skill restores Deduction and Memory damage one point per hour up to rank modifier. Patients can sustain only one session per day (TN150, TN100 using the appropriate equipment and environment.)',
          limit: 'Acclimatable',
          name: 'Psychology',
          experts: {
            ailment: ['bipolar', 'schizophrenia', 'depression', 'autism'],
          },
        },
        {
          base: 'Faith',
          description:
            'Spiritual Medicine integrates a conceptualization of Mind, Body, and Soul as one entity to heal the Hero. By tapping into all resource energies, a practitioner may heal Mind/Body/Soul. Various examples include chiropractic, hypnosis, reflexology, macrobiotics, energy medicine, phrenology, sweat lodges, biorhythms, joss/incense, paperburning, acupuncture, chakra hot stones, homeopathy, cupping, and coining. Spiritual Medicine heals appropriate Resource at a rank of 1d6/10 Rank per patient to heal all three Resources once per day as determined by the recipient; such use also removes all non-lethal damage (TN150). The best use of this skill controls the senses through appropriate equipment and environment (TN100). Examples of control are trickling water, therapeutic cushions, specialized oils, applied medicinal therapy, and calming music. Other modifiers apply according to Guide discretion',
          limit: 'Exclusive',
          name: 'Spiritual Therapy, species',
          experts: {
            setting: ['Temple of Chi', 'Ironwood Serenity Grove'],
            mind: ['only'],
            body: ['only'],
            soul: ['only'],
          },
        },
        {
          base: 'All 4 Resources/4',
          description:
            'Yoga includes boody manipulation and mental meditation to enable a higher state of relaxation and awareness. Daily practice yields bonus recovery of resources equal to rank dividing amongs Mind/Body/Soul. Different genres may also allow additional abilities/powers. This procedure-based skill cures damaged Mind/Body/Soul at a rate of 1d6/10 Rank and can only be used once per day; such use also removes all non-lethal damage. It cannot be used on others without skill combination or skill tricks. Target numbers are TN100, TN50 using the appropriate equipment and environment conducive to calm relaxation. Other modifiers apply according to Guide discretion. If any ability score is at zero, Yoga cannot be performed',
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
      learn: [
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
            'Education teaches and develops skills and uses HePs during training or tutoring sessions. A tutoring session of three months can be conducted for one student per ten rank (TN50). Classes of one student per rank could also be taught (TN100). Other bonus shifts certainly apply: 2 shifts bonus-Exact coursework has been taught previously, 1 shift bonus-Institute of learning; use of technology; access to reference material; team taught, 1 shift penalty-Frequent distractions; lack of materials, 2 shift penalty-Obstinate students; subject is beyond learner. For every three months of tutoring, the teacher gains one point in the skill taught, limited to rank in Education (TN100). The point may be applied to Education instead. Teaching can be used in conjunction with Employability to gain Capital. When tutoring a skill, the student is limited to lesser of the two ranks. Primary educators may deliver instruction up to Rank 10 in any skill deemed necessary by more than half the population of their genre of origin',
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
            'Games, Mind includes games based on deduction and memory. Examples of this include chess, tabletop games, parlor games, and computer games. Guides are encouraged to use skill combination rules when plausible. For example, billiards, darts, and croquette could use Games, Mind and Physics. In a stretch, Mind Perception and Body Dexterity could be used with additional shifts. Standard skill combination rules apply',
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
            'History concerns important past events and allows construction of timelines that references noteworthy occasions, significant individuals, and places. Knowledge of history depends on references such as computers, libraries, or data implants. Historians of specific skills used skill combination rules. Examples include Math, Artistry, and Medicine. An expert may consider creating a combination skill',
          limit: 'Exclusive',
          name: 'History',
          experts: {
            nationality: ['Nation'],
            period: ['stone age', 'renaisssance', "60's"],
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
              'figher jets',
            ],
          },
        },
        {
          base: 'Soul/2',
          description:
            'Occult Sciences provides information and insight into creatures and castings of magical nature. The user must have experienced or knowingly interacted with the spell in question. When analyzing creatures, Occult Sciences identifies ubiquitous abilities of the target creature. The Guide controls how often information may be disseminated. Additional information about a spell is gathered from higher TN rolls, TN50-Casting area, TN75-Casting level, TN100-Casting name; creature has magical ability, TN125-Level of magical ability of creature, TN150-One specific magical ability of creature, TN175-d3 additonal magical abilities of creature',
          limit: 'Exclusive',
          name: 'Occult Sciences',
          experts: {
            style: ['Creature', 'Casting Skill'],
          },
        },
      ],
      life: [
        {
          base: 'Imagination',
          description:
            "Animal Handling calms and trains normal non-sentient non-evolved animals. Animal Handling calms animals; the disposition of an animal depends on its current situation, demeanor, and status. For wild animals, the attitude change will last one day, at most. If befriending wild animals, Soul Influence is used in skill combination with Animal Handling. This process takes a day. Difficult breads, mishandled, or poor disposition may take many days or weeks. Teaching commands to befriended animals gains a one-shift bonus. Once an animal is befriended, teh animal is under-command and may perform commands. Commands use Animal Handling directly. Without training, a befriended animal may: Carry-Permits tethered transportation of objects, Feed-Directs the timing and object to be consumed, Defend owner*-Animal attacks threaning foes, Untrained commands may be attempted at two shifts harder. Any Hero may have one befriended animal. More animals may be attracted using Leadership. A befriended animal may be trained in five additional commands, plus one per five of the animal's Memory. The time needed to train a trick is one week per 50TN of difficulty, after modifiers. Animals are limited to a certain number of tricks. Once that limit is reached, a current trick must be untaught (TN150) before another one can replace it.",
          limit: 'Exclusive',
          name: 'Animal Handling',
          experts: {
            style: ['Creature', 'Command'],
          },
        },
        {
          base: 'Memory',
          description:
            'Biology encompasses general knowledge, identity, and functions of living systems. This skill provides specific information on living organisms not convered under Zoology and Botany, such as protozoans, diatoms, or fungi (TN50). Biology can mimic Botany, Ecology, or Zoology at one shift penalty for identification',
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
            'Botanty involves knowledge about plant life. The individual can discover use of plants, including edibility, curative and harmful properties, and sentience',
          limit: 'Exclusive',
          name: 'Botany',
          experts: {
            style: ['botinary', 'forestry', 'herbology', 'pathology', 'seeds'],
            species: ['angiosperms', 'conifers', 'ferns', 'mosses'],
          },
        },
        {
          base: 'Memory',
          description:
            'Ecology embraces environmental systems, interactions, influences, and various environmental issues. Ecologists analyze creatures and how their populations affect biomes. Use includes discovering oddities in nature, determining the cause, and recomending the remedy. TNs depend on setting, genre of origin, and other variables as per the Guide',
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
            "Xenomorphology provides knowledge of one alien species, with general anatomy, phsyiology, behaviors, vulnerabilites, and habitats. Through skill combination Medicine, Psychology, and other species specific skills can be applied to the alien species. Xenomorphology can be learned for more that one species, each with it's separate Rank. In some worlds, Xenomorphology is a single skill area covering all alien life, possibly considered a charlatan study if the general public does not recognize the existence of aliens",
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
              'avians',
              'reptiles',
            ],
            style: ['pathology'],
          },
        },
      ],
      magic: [
        {
          base: 'Memory',
          description:
            'Alchemy allows creation of magical concoctions, potions, and elixers with underlying principles based on the theory of five elements. Alchemy of Araqunidia™ is explained in the Araqunidia™ Genre Handbook and differs greatly from traditional alchemy',
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
            'Banking exists in genres that utilize currency. This skill includes familliarity with practices of investment, loands, and monetary exchange with castings',
          limit: 'Exclusive',
          name: 'Banking',
        },
        {
          base: 'All 4 Resources/4',
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
            'Foretelling reveals information about individuals, including their background, attitudes, and future. The foreteller is "certain" readings are correct , but often does not provide 100% accurate information. Charlatans color the repuation of this skill by falsely pretending to read the future of clients, patrons, and passersby, using Thespianism, Legerdemain, Deception, and Deduction',
          limit: 'Exclusive',
          name: 'Foretelling',
        },
        {
          base: 'Soul/2',
          description: 'Kinesis allows casting of magic by motion and movement',
          limit: 'Exclusive',
          name: 'Kinesis',
        },
        {
          base: 'All 4 Resources/4',
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
          base: 'All 4 Resources/4',
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
            'Wizardry is the academic, scholasitc, and taught method of magic emulation and manipulation',
          limit: 'Exclusive',
          name: 'Wizardry',
        },
      ],
      move: [
        {
          base: 'Dexterity',
          description:
            'Driving enables use of a vehicle in two dimensions, on surfaces such as land or water',
          limit: 'Acclimatable',
          name: 'Driving',
          experts: {
            vehicle: ["Abram's Tank", 'Iowa class battleship', 'Mustange'],
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
          limit: 'Universal',
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
            vehicle: ['F-18', 'Cessna 150', 'Dallas class sub.'],
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
  },
]
