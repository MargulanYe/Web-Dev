import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [

  // ===== SMARTPHONES (1–5) =====

  {
    id: 1,
    name: 'Apple iPhone 16 Pro Max 256Gb',
    description: 'Флагманский iPhone.',
    price: 799990,
    rating: 4.9,
    likes: 0,
    categoryId: 1,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h96/ha4/87295491735582.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h3c/h66/87295491768350.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/'
  },

  {
    id: 2,
    name: 'Samsung Galaxy S25 12/256',
    description: 'Android-флагман.',
    price: 549990,
    rating: 4.8,
    likes: 0,
    categoryId: 1,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p56/p03/20107707.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p56/p03/20107707.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p39/p03/20107708.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p41/p00/20107714.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/'
  },

  {
    id: 3,
    name: 'Xiaomi Redmi Note 13 Pro',
    description: 'AMOLED экран и мощная камера.',
    price: 199990,
    rating: 4.6,
    likes: 0,
    categoryId: 1,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pdd/15562935.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p77/pdd/15562935.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p5b/pdd/15562936.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p3f/pdd/15562937.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/'
  },

  {
    id: 11,
    name: 'iPhone 15 128Gb',
    description: 'Мощный iPhone нового поколения.',
    price: 599990,
    rating: 4.8,
    likes: 0,
    categoryId: 1,
    image: 'https://placehold.co/600x400?text=iPhone15',
    images: [
      'https://placehold.co/600x400?text=iPhone15+1',
      'https://placehold.co/600x400?text=iPhone15+2',
      'https://placehold.co/600x400?text=iPhone15+3'
    ],
    link: 'https://kaspi.kz/shop/'
  },

  {
    id: 12,
    name: 'Samsung Galaxy A55',
    description: 'Сбалансированный смартфон.',
    price: 289990,
    rating: 4.6,
    likes: 0,
    categoryId: 1,
    image: 'https://placehold.co/600x400?text=GalaxyA55',
    images: [
      'https://placehold.co/600x400?text=A55+1',
      'https://placehold.co/600x400?text=A55+2',
      'https://placehold.co/600x400?text=A55+3'
    ],
    link: 'https://kaspi.kz/shop/'
  },

  // ===== WEARABLES (2) =====

  {
    id: 4,
    name: 'Xiaomi Mi Band 7',
    description: 'Фитнес-браслет.',
    price: 24990,
    rating: 4.7,
    likes: 0,
    categoryId: 2,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hfd/h66/65114258571294.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hfd/h66/65114258571294.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hdd/hb1/65114261323806.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h51/hbe/65114264207390.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/'
  },

  {
    id: 5,
    name: 'Samsung Galaxy Watch 6',
    description: 'Умные часы.',
    price: 149990,
    rating: 4.8,
    likes: 0,
    categoryId: 2,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h31/82569351266334.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h76/h31/82569351266334.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hb6/hc3/82569351299102.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hd6/haf/82569351331870.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/'
  },

  {
    id: 13,
    name: 'Apple Watch Series 9',
    description: 'Премиальные часы Apple.',
    price: 249990,
    rating: 4.9,
    likes: 0,
    categoryId: 2,
    image: 'https://placehold.co/600x400?text=AppleWatch',
    images: [
      'https://placehold.co/600x400?text=AppleWatch+1',
      'https://placehold.co/600x400?text=AppleWatch+2',
      'https://placehold.co/600x400?text=AppleWatch+3'
    ],
    link: 'https://kaspi.kz/shop/'
  },

  {
    id: 14,
    name: 'Xiaomi Smart Watch S1',
    description: 'Стильные умные часы.',
    price: 119990,
    rating: 4.7,
    likes: 0,
    categoryId: 2,
    image: 'https://placehold.co/600x400?text=WatchS1',
    images: [
      'https://placehold.co/600x400?text=WatchS1+1',
      'https://placehold.co/600x400?text=WatchS1+2',
      'https://placehold.co/600x400?text=WatchS1+3'
    ],
    link: 'https://kaspi.kz/shop/'
  },

  // ===== COMPUTERS (3) =====

  {
    id: 6,
    name: 'PlayStation 5',
    description: 'Игровая консоль.',
    price: 299990,
    rating: 5.0,
    likes: 0,
    categoryId: 3,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/'
  },

  {
    id: 7,
    name: 'HP Pavilion Laptop',
    description: 'Надёжный ноутбук.',
    price: 359990,
    rating: 4.5,
    likes: 0,
    categoryId: 3,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p2b/pfa/12037040.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p2b/pfa/12037040.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p47/pfa/12037041.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p63/pfa/12037042.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/'
  },

  {
    id: 15,
    name: 'Lenovo IdeaPad 5',
    description: 'Ноутбук для работы.',
    price: 429990,
    rating: 4.5,
    likes: 0,
    categoryId: 3,
    image: 'https://placehold.co/600x400?text=Lenovo',
    images: [
      'https://placehold.co/600x400?text=Lenovo+1',
      'https://placehold.co/600x400?text=Lenovo+2',
      'https://placehold.co/600x400?text=Lenovo+3'
    ],
    link: 'https://kaspi.kz/shop/'
  },

  {
    id: 16,
    name: 'MacBook Air M3',
    description: 'Мощный MacBook.',
    price: 699990,
    rating: 5.0,
    likes: 0,
    categoryId: 3,
    image: 'https://placehold.co/600x400?text=MacBook',
    images: [
      'https://placehold.co/600x400?text=MacBook+1',
      'https://placehold.co/600x400?text=MacBook+2',
      'https://placehold.co/600x400?text=MacBook+3'
    ],
    link: 'https://kaspi.kz/shop/'
  },

  // ===== ACCESSORIES (4) =====

  {
    id: 8,
    name: 'Apple AirPods Pro',
    description: 'Беспроводные наушники.',
    price: 129990,
    rating: 4.9,
    likes: 0,
    categoryId: 4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p89/pc5/64466278.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p89/pc5/64466278.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p6d/pc5/64466277.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p12/pc8/64466280.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/'
  },

  {
    id: 9,
    name: 'Logitech MX Master 3',
    description: 'Беспроводная мышь.',
    price: 59990,
    rating: 4.9,
    likes: 0,
    categoryId: 4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p14/p9d/59285363.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p14/p9d/59285363.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p14/p9d/59285363.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p14/p9d/59285363.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/'
  },

  {
    id: 10,
    name: 'Mechanical Gaming Keyboard',
    description: 'Механическая клавиатура.',
    price: 49990,
    rating: 4.7,
    likes: 0,
    categoryId: 4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/68965773.bin?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/68965773.bin?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p58/p38/68965774.bin?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pe5/p38/68965779.bin?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/'
  }

];
