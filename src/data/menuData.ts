import { MenuItem, LagosZone } from '../types';

export const VENDOR_INFO = {
  name: 'Ebun D Foodie',
  tiktokHandle: '@ebundfoodie1',
  tiktokUrl: 'https://www.tiktok.com/@ebundfoodie1',
  phone: '09077230897',
  internationalPhone: '+2349077230897',
  whatsappUrl: 'https://wa.me/2349077230897',
  location: 'LASU (Lagos State University) Corridor, Ojo / Igando Axis, Lagos State, Nigeria',
  tagline: 'Artisanal Nigerian Small Chops & Smoky Firewood Party Jollof',
  hours: 'Mon – Sat: 8:00 AM – 9:00 PM | Sun: Event Catering Only',
  freshnessGuarantee: 'Made Fresh Per Order · Crisp Within 40 Minutes of Frying'
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'solo-pack',
    name: 'Solo Chops Experience Pack',
    category: 'chops',
    priceNgn: 3500,
    priceUsd: 3.50,
    description: 'Crispy seasoned minced beef samosas, flaky golden spring rolls, warm pillowy sweet puff-puffs, and tender slow-glazed peppered beef.',
    pieces: '15 Pieces Total',
    image: '/src/assets/images/hero_ebun_smallchops_1791148072759.jpg',
    popular: true,
    spicyLevel: 'Spicy',
    ingredients: ['4x Beef Samosas', '4x Spring Rolls', '6x Golden Puff-Puff', '1x Peppered Beef Chunk', 'Ebun House Pepper Dip']
  },
  {
    id: 'deluxe-chops-platter',
    name: 'Deluxe Celebration Chops Platter',
    category: 'platters',
    priceNgn: 9500,
    priceUsd: 9.50,
    description: 'Generous sharing platter crafted with crispy beef samosas, crunchy spring rolls, fluffy golden puff-puffs, seasoned spicy gizdodo, and peppered chicken bites.',
    pieces: '35 Pieces Total',
    image: '/src/assets/images/product_chops_mega_platter_1791148093011.jpg',
    popular: true,
    spicyLevel: 'Spicy',
    ingredients: ['10x Crispy Beef Samosas', '10x Flaky Spring Rolls', '12x Sweet Puff-Puffs', '3x Peppered Chicken Bites', 'Gourmet Gizdodo']
  },
  {
    id: 'smoky-party-jollof',
    name: 'Smoky Lagos Party Jollof Tray',
    category: 'jollof',
    priceNgn: 18000,
    priceUsd: 18.00,
    description: 'Authentic Lagos firewood smoky jollof rice made with rich scotch bonnet and bell pepper reduction, accompanied by sweet fried dodo (plantain) and deep-seasoned grilled peppered chicken.',
    pieces: 'Serves 4 - 6 People',
    image: '/src/assets/images/product_party_jollof_1791148083205.jpg',
    popular: true,
    spicyLevel: 'Spicy',
    ingredients: ['Smoky Firewood Jollof', 'Sweet Fried Dodo', '4x Jumbo Peppered Chicken Quarters', 'Spiced Coleslaw', 'Shito Dip']
  },
  {
    id: 'basmati-fried-rice-combo',
    name: 'Basmati Special Fried Rice & Wings',
    category: 'jollof',
    priceNgn: 20000,
    priceUsd: 20.00,
    description: 'Fragrant basmati rice wok-tossed with baby shrimp, liver chunks, sweet corn, bell peppers, served alongside sticky peppered wings and golden plantain.',
    pieces: 'Serves 4 - 6 People',
    image: '/src/assets/images/product_party_jollof_1791148083205.jpg',
    spicyLevel: 'Mild',
    ingredients: ['Special Basmati Fried Rice', 'Shrimp & Liver Bits', '6x Sticky Peppered Wings', 'Golden Fried Dodo']
  },
  {
    id: 'grand-event-mega-box',
    name: '100-Piece Grand Event Small Chops Box',
    category: 'platters',
    priceNgn: 45000,
    priceUsd: 45.00,
    description: 'The ultimate party centerpiece. Loaded with crisp samosas, golden spring rolls, hot sugary puff-puffs, grilled barbecue chicken wings, and spicy peppered beef cubes with dipping sauces.',
    pieces: '100 Pieces Total',
    image: '/src/assets/images/product_chops_mega_platter_1791148093011.jpg',
    popular: true,
    spicyLevel: 'Spicy',
    ingredients: ['30x Beef Samosas', '30x Spring Rolls', '30x Sweet Puff-Puffs', '10x Peppered Wings & Beef Cubes', 'Dual Ramekin Dips']
  },
  {
    id: 'gourmet-gizdodo-bowl',
    name: 'Gourmet Gizdodo Special Bowl',
    category: 'combos',
    priceNgn: 6500,
    priceUsd: 6.50,
    description: 'Caramelized ripe plantain cubes paired with tender, spiced chicken gizzards tossed in an intensely flavorful scotch bonnet, onion, and red bell pepper reduction.',
    pieces: 'Family Bowl (750ml)',
    image: '/src/assets/images/hero_ebun_smallchops_1791148072759.jpg',
    spicyLevel: 'Fire',
    ingredients: ['Sweet Fried Dodo Cubes', 'Tender Marinated Gizzards', 'Coarse Ata Rodo Pepper Base', 'Spring Onion Garnish']
  },
  {
    id: 'puff-puff-golden-bucket',
    name: 'Golden Puff-Puff Sweet Bucket',
    category: 'chops',
    priceNgn: 5000,
    priceUsd: 5.00,
    description: 'Freshly fried golden brown dough balls with crisp outer crust and cloud-soft, naturally sweetened interior. Sprinkled with cinnamon sugar or served with chili dip.',
    pieces: '40 Sweet Balls',
    image: '/src/assets/images/reel_tiktok_showcase_1791148113302.jpg',
    spicyLevel: 'Mild',
    ingredients: ['40x Golden Fried Dough Balls', 'Nutmeg & Vanilla Infusion', 'Optional Cinnamon Sugar Glaze']
  },
  {
    id: 'executive-chops-jollof-combo',
    name: 'Executive Chops & Smoky Jollof Lunchbox',
    category: 'combos',
    priceNgn: 6000,
    priceUsd: 6.00,
    description: 'The complete Lagos lunch experience: a personal portion of firewood smoky jollof rice, 2 beef samosas, 2 spring rolls, 3 puff-puffs, sweet dodo, and 1 peppered chicken drumstick.',
    pieces: 'Complete Individual Lunchbox',
    image: '/src/assets/images/product_party_jollof_1791148083205.jpg',
    popular: true,
    spicyLevel: 'Spicy',
    ingredients: ['Firewood Jollof Rice', '2x Samosas', '2x Spring Rolls', '3x Puff-Puffs', '1x Peppered Chicken', 'Dodo']
  }
];

export const LAGOS_ZONES: LagosZone[] = [
  { name: 'LASU Axis / Ojo / Iba / Igando', axis: 'Mainland West (Base)', estimatedTime: '30 - 45 mins', feeNgn: 1000 },
  { name: 'Festac / Mile 2 / Satellite Town', axis: 'Mainland West', estimatedTime: '45 - 60 mins', feeNgn: 2000 },
  { name: 'Alimosho / Egbeda / Iyana Ipaja', axis: 'Mainland West', estimatedTime: '45 - 60 mins', feeNgn: 2000 },
  { name: 'Surulere / Yaba / Akoka / UNILAG', axis: 'Mainland Central', estimatedTime: '60 - 75 mins', feeNgn: 3000 },
  { name: 'Ikeja / Maryland / Opebi / Allen', axis: 'Mainland North', estimatedTime: '60 - 80 mins', feeNgn: 3500 },
  { name: 'Lekki Phase 1 / Victoria Island / Ikoyi', axis: 'Island Axis', estimatedTime: '75 - 90 mins', feeNgn: 4500 },
  { name: 'Chevron / Ajah / Sangotedo', axis: 'Island East', estimatedTime: '90 - 120 mins', feeNgn: 5500 }
];

export const TIKTOK_VIDEOS = [
  {
    id: 'v1',
    title: 'The Viral 100-Piece Chops Platter Assemble',
    views: '48.2K',
    likes: '4.8K',
    sound: 'Original Sound - Ebun D Foodie',
    duration: '0:34',
    aspectRatio: '9:16',
    thumbnail: '/src/assets/images/reel_tiktok_showcase_1791148113302.jpg',
    caption: 'Packing 100 pieces of fresh small chops for a LASU law faculty dinner! Listen to that crunch! 🤤🔥 #smallchops #ebundfoodie #lagosfoodie #lasu'
  },
  {
    id: 'v2',
    title: 'That Real Lagos Firewood Jollof Aroma',
    views: '62.7K',
    likes: '6.1K',
    sound: 'Afrobeats Party Mix - Lagos Vibes',
    duration: '0:45',
    aspectRatio: '9:16',
    thumbnail: '/src/assets/images/product_party_jollof_1791148083205.jpg',
    caption: 'You can never fake bottom pot firewood aroma. Our secret red pepper reduction simmering slow! #jollofrice #nigerianjollof #ebundfoodie'
  },
  {
    id: 'v3',
    title: 'Cloud-Soft Sweet Puff-Puff Fry Day',
    views: '35.4K',
    likes: '3.9K',
    sound: 'Amapiano Beats - Ebun Kitchen',
    duration: '0:28',
    aspectRatio: '9:16',
    thumbnail: '/src/assets/images/hero_ebun_smallchops_1791148072759.jpg',
    caption: 'Golden spheres dropping in hot oil. Never oily, always fluffy and sweet! Order yours via DM or WhatsApp! #puffpuff #smallchopsinlagos'
  },
  {
    id: 'v4',
    title: 'Catering 300 Guests in Festac Town',
    views: '89.1K',
    likes: '9.4K',
    sound: 'Highlife Wedding Special',
    duration: '0:58',
    aspectRatio: '9:16',
    thumbnail: '/src/assets/images/product_catering_event_1791148102647.jpg',
    caption: 'Live small chops frying bar at Mrs. Adeleke 50th birthday! Fresh chops handed straight to guests piping hot. #eventcatering #lagoswedding'
  }
];

export const TESTIMONIALS = [
  {
    author: 'Blessing Adebayo',
    role: 'LASU Student Union Executive',
    location: 'LASU Ojo Campus',
    text: 'Ebun D Foodie has saved us so many times during department symposiums and student week! The samosas are always bursting with seasoned beef and not hollow air. The puff puff is unmatched in the whole LASU axis.',
    rating: 5,
    order: '50-Piece Chops Tray & Jollof Packs'
  },
  {
    author: 'Engr. Femi Ogundele',
    role: 'Corporate Project Manager',
    location: 'Ikeja GRA, Lagos',
    text: 'We booked Ebun D Foodie for our year-end corporate summit. Delivered promptly in thermal heat-retention boxes. The firewood jollof had that distinct party flavour everyone kept raving about. Professional service!',
    rating: 5,
    order: '150-Guest Office Catering'
  },
  {
    author: 'Kemi & Tunde Alabi',
    role: 'Wedding Celebrants',
    location: 'Festac Town, Lagos',
    text: 'Our wedding cocktail hour was a hit thanks to Ebun D Foodie! The small chops were crisp, golden, and piping hot. Everyone wanted the vendor contact before reception started!',
    rating: 5,
    order: 'Live Frying Small Chops Bar'
  }
];
