import { Product, Category } from './types';

export const PRODUCTS: Product[] = [
  // Limpieza
  {
    id: 'flora-liv',
    name: 'FLORA LIV',
    category: Category.CLEANSE,
    description: 'Alimento en polvo a base de pulpa de granadilla con fibra prebiótica.',
    flavor: 'Granadilla',
    prices: { large: 75, small: 28, labelLarge: '28 Sticks', labelSmall: '7 Sticks' },
    registrationCode: 'NSA-004661-2018',
    benefits: ['Regenera flora intestinal', 'Combate estreñimiento', 'Mejora digestión', 'Fortalece inmunidad'],
    color: '#F7931E', // Orange
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_147559_EXT_05072024_224159_MAIN.jpg',
    ingredients: 'Pulpa de granadilla, fibra prebiótica, cultivos probióticos.',
    weight: '5g por sobre',
    preparation: '1 stick en agua fría (mañana).',
    extraInfo: '10 mil millones de probióticos por toma; recomendado para niños y adultos.'
  },
  {
    id: 'liquid-fiber',
    name: 'LIQUID FIBER',
    category: Category.CLEANSE,
    description: 'Alimento a base de limón en polvo, fibra prebiótica para preparar bebida.',
    flavor: 'Limón',
    prices: { large: 53, labelLarge: '28 Sticks' },
    registrationCode: 'NSA-0008858-2020',
    benefits: ['Depuración intestinal', 'Regula absorción de azúcar/grasas', 'Promueve evacuaciones'],
    color: '#8CC63F', // Green
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_147562_EXT_24012025_222738_MAIN.jpg',
    ingredients: 'Limón, fibra prebiótica (inulina, oligofructosa), vitaminas, minerales.',
    weight: '5g por sobre',
    preparation: '1 stick en agua.',
    extraInfo: 'Ideal para dietas no balanceadas.'
  },
  {
    id: 'prunex1',
    name: 'PRUNEX 1',
    category: Category.CLEANSE,
    description: 'Alimento en polvo a base de linaza.',
    flavor: 'Guindón',
    prices: { large: 64, small: 26, labelLarge: '28 Sticks', labelSmall: '7 Sticks' },
    registrationCode: 'NSA-004660-2018',
    benefits: ['Limpia colon', 'Combate estreñimiento', 'Desintoxica', 'Alto contenido de fibra'],
    color: '#5E2645', // Dark Maroon
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/productDetails/CO/CO_149137_EXT_28082025_205810_MAIN.jpg',
    video: 'https://i.vimeocdn.com/video/688253501-2e39a2453a0fe66df5786e0e50616f7f05e3767010015c7945ed2c76c26a56c5-d?mw=1000&mh=563&q=70',
    ingredients: 'Mix de fibras (psyllium, inulina de achicoria, mucílago de linaza), extracto de guindón, kelp, anís estrella.',
    weight: '5g por sobre',
    preparation: '1 stick en agua caliente (noche).',
    extraInfo: 'Acción regularizante digestiva.'
  },
  {
    id: 'berry-balance',
    name: 'BERRY BALANCE',
    category: Category.CLEANSE,
    description: 'Alimento en polvo a base de cranberry.',
    flavor: 'Cranberry Piña',
    prices: { large: 80, labelLarge: '28 Sticks' },
    registrationCode: 'NSA-004661-2018',
    benefits: ['Equilibrio urinario', 'Antioxidante', 'Previene infecciones', 'Elimina líquidos'],
    color: '#ED1C24', // Red
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_147640_EXT_08072025_161851_MAIN.jpg',
    ingredients: 'Extracto de arándanos, cranberry, blueberry, camu camu, piña, probióticos.',
    weight: '5g por sobre',
    preparation: '1 stick en agua.',
    extraInfo: 'Ayuda a mujeres, efecto diurético.'
  },
  {
    id: 'alpha-balance',
    name: 'ALPHA BALANCE',
    category: Category.CLEANSE,
    description: 'Mezcla en polvo a base de espinaca y vegetales verdes.',
    flavor: 'Manzana Verde',
    prices: { large: 64, labelLarge: '28 Sticks' },
    registrationCode: 'NSA-0008768-2020',
    benefits: ['Alcaliniza', 'Depura toxinas', 'Equilibra pH', 'Fortalece inmunidad'],
    color: '#8CC63F', // Green
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_147646_EXT_24012025_222538_MAIN.jpg',
    ingredients: 'Chlorella, espirulina, alfalfa, espinaca, pasto de trigo, jengibre, manzana verde, magnesio, zinc.',
    weight: '5g por sobre',
    preparation: '1 stick en agua.',
    extraInfo: 'Libre de gluten, saludable y energético.'
  },
  {
    id: 'rexet',
    name: 'REXET',
    category: Category.CLEANSE,
    description: 'Mix de extractos vegetales, aminoácidos, minerales y vitaminas. Refresco efervescente.',
    flavor: 'Tuna Roja',
    prices: { large: 64, labelLarge: '28 Sticks' },
    registrationCode: 'RSA-0019370-2022',
    benefits: ['Desintoxica hígado', 'Revitaliza', 'Efecto efervescente', 'Protege y rehidrata'],
    color: '#D6A461', // Gold/Yellow
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_147564_EXT_24012025_234351_MAIN.jpg',
    ingredients: 'Tuna roja, alcachofa, acerola, perejil, clorofila de algas, complejo B, vitamina C y D, taurina, minerales.',
    weight: '5g por sobre',
    preparation: '1 stick en agua.',
    extraInfo: 'Favorece metabolismo hepático, confort digestivo.'
  },

  // Regeneracion
  {
    id: 'biopro-plus',
    name: 'BIOPRO+ TECT',
    category: Category.REGENERATE,
    description: 'Alimento en polvo a base de maltodextrina. Alto contenido de proteínas.',
    flavor: 'Vainilla Francesa',
    prices: { large: 61, labelLarge: '14 Sticks' },
    registrationCode: 'RSiA 03I10411',
    benefits: ['Protege y nutre sistema inmunológico', 'Crecimiento muscular', 'Regeneración celular'],
    color: '#F7931E', // Orange
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_143219_EXT_11092025_152616_MAIN.jpg',
    nutritionalTable: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/nutritionalInformation/CO/IN_CO_55308_ES_08072024_171157.jpg',
    ingredients: 'Proteína de calostro bovino, suero lácteo, soya, albúmina de huevo, bioferrin, aminoácidos, DHA y ARA.',
    weight: '25g por sobre',
    preparation: 'En agua, batido proteico.',
    extraInfo: 'Alta biodisponibilidad.'
  },
  {
    id: 'protein-active',
    name: 'BIOPRO X ACTIVE',
    category: Category.REGENERATE,
    description: 'Proteína vegetal a base de almidón de yuca.',
    flavor: 'Vainilla / Chocolate',
    prices: { large: 69, labelLarge: '14 Sticks' },
    registrationCode: 'NSA-0017474-2022',
    benefits: ['Nutre sistema inmune', 'Antioxidante', 'Crecimiento y recuperación muscular'],
    color: '#8CC63F', // Green
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_146662_EXT_12082024_164322_MAIN.jpg',
    nutritionalTable: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/nutritionalInformation/CO/IN_CO_58882_ES_12082024_164422.jpg',
    ingredients: 'Proteína vegetal (quinua germinada, arroz integral, arveja, algas), aceites, DHA y ARA.',
    weight: '25g por sobre',
    preparation: 'En agua, batido proteico.',
    extraInfo: '100% vegetal.'
  },

  // Inmunologico
  {
    id: 'nutraday',
    name: 'NUTRADAY',
    category: Category.IMMUNE,
    description: 'Mezcla en polvo de Moringa, Camu Camu, Acai Berry y Vitaminas.',
    flavor: 'Fresa',
    prices: { large: 64, labelLarge: '28 Sticks' },
    registrationCode: 'RSA-0014223-2021',
    benefits: ['Bebida nutritiva para todas las edades', 'Antioxidante', 'Fortalece defensas'],
    color: '#F7931E', // Orange
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_147565_EXT_18072024_153552_MAIN.jpg',
    ingredients: 'Moringa, camu camu, açaí, limón, acerola, vitaminas C, B3, A, D, B6, B1, B9, B12; calcio, magnesio, zinc, hierro.',
    weight: '5g por sobre',
    preparation: '1 stick en agua.',
    extraInfo: '25x más hierro que espinaca, 17x más calcio que leche.'
  },
  {
    id: 'vita-xtra',
    name: 'VITA XTRA T+',
    category: Category.IMMUNE,
    description: 'Bebida energizante natural a base de maíz morado y maca.',
    flavor: 'Chicha Morada',
    prices: { large: 64, small: 24, labelLarge: '28 Sticks', labelSmall: '7 Sticks' },
    registrationCode: 'RSA-005587-2018',
    benefits: ['Energizante prolongado', 'Reduce fatiga', 'Mejora concentración y físico'],
    color: '#662D91', // Purple
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_147320_EXT_08072024_171559_MAIN.jpg',
    nutritionalTable: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/nutritionalInformation/CO/IN_CO_55428_ES_08072024_171501.jpg',
    ingredients: 'Maca, ginseng, guayusa, té verde, açaí, goji berry, cordyceps, antocianina de maíz morado, vitaminas, minerales.',
    weight: '5g por sobre',
    preparation: '1 stick en agua.',
    extraInfo: 'Energía natural.'
  },
  {
    id: 'vera-plus',
    name: 'VERA+',
    category: Category.IMMUNE,
    description: 'Alimento a base de Aloe Vera con betaglucanos.',
    flavor: 'Menta',
    prices: { large: 81, small: 28, labelLarge: '28 Sticks', labelSmall: '7 Sticks' },
    registrationCode: 'NSA-004670-2018',
    benefits: ['Fortalece sistema inmunológico', 'Previene alergias y virus', 'Antioxidante'],
    color: '#8CC63F', // Green
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_147645_EXT_24012025_234157_MAIN.jpg',
    nutritionalTable: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/nutritionalInformation/CO/IN_CO_60381_ES_24012025_234249.jpg',
    ingredients: 'Aloe vera, betaglucanos, levadura de cerveza, aminoácidos, oliva, amalaki, vitamina C.',
    weight: '5g por sobre',
    preparation: '1 stick en agua.',
    extraInfo: 'Ideal para alergias y sistema respiratorio.'
  },
  {
    id: 'ganomas-cappuccino',
    name: 'GANOMÁS CAPPUCCINO',
    category: Category.IMMUNE,
    description: 'Café cappuccino con Ganoderma Lucidum.',
    flavor: 'Cappuccino',
    prices: { large: 48, labelLarge: '28 Sticks' },
    registrationCode: 'RSiA 03I10411',
    benefits: ['Antiinflamatorio', 'Antioxidante', 'Regula defensas', 'Protege hígado'],
    color: '#8B5A2B', // Brown
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/productDetails/CO/CO_147561_EXT_15112024_220032_MAIN.jpg',
    ingredients: 'Ganoderma lucidum, quillay, micronutrientes, maltodextrina, café instantáneo.',
    weight: '7.5g por sobre',
    preparation: 'En agua caliente/fría.',
    extraInfo: 'Eleva defensas.'
  },

  // Control de Peso
  {
    id: 'biopro-fit',
    name: 'BIOPRO+ FIT',
    category: Category.WEIGHT,
    description: 'Batido proteico bajo en calorías para control de peso.',
    flavor: 'Vainilla Francesa',
    prices: { large: 55, labelLarge: '14 Sticks' },
    registrationCode: 'RSiA01I34012',
    benefits: ['Mantén el peso', 'Grasa corporal en estado óptimo', 'Sacia apetito'],
    color: '#009FE3', // Blue
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_143218_EXT_11092025_152757_MAIN.jpg',
    nutritionalTable: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/nutritionalInformation/CO/IN_CO_56208_ES_08072024_212732.jpg',
    ingredients: 'Proteína de calostro bovino, suero lácteo, soya, albúmina de huevo, prolibra, aminoácidos, tamarindo malabar, vitaminas, DHA y ARA.',
    weight: '25g por sobre',
    preparation: 'Batido en agua.',
    extraInfo: 'Ayuda a quemar grasa.'
  },
  {
    id: 'protein-active-fit',
    name: 'BIOPRO X ACTIVE FIT',
    category: Category.WEIGHT,
    description: 'Proteína vegana para control de peso.',
    flavor: 'Vainilla / Chocolate',
    prices: { large: 73, labelLarge: '14 Sticks' },
    registrationCode: 'RSA-0015002-2021',
    benefits: ['Mantén el peso ideal', 'Proteína 100% vegetal', 'Acelera metabolismo'],
    color: '#8CC63F', // Green
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_146663_EXT_12082024_164523_MAIN.jpg',
    nutritionalTable: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/nutritionalInformation/CO/IN_CO_58883_ES_12082024_164625.jpg',
    ingredients: 'Proteína vegetal (quinua germinada, arroz integral, arveja, algas), aminoácidos, enzimas, L-carnitina, tamarindo malabar, vitaminas, calcio, cromo y zinc.',
    weight: '25g por sobre',
    preparation: 'Batido en agua.',
    extraInfo: 'Vegano, libre de alérgenos.'
  },
  {
    id: 'thermo-t3',
    name: 'THERMO T3',
    category: Category.WEIGHT,
    description: 'Té quemador de grasa con Té Verde, Rojo y Negro.',
    flavor: 'Té Limón',
    prices: { large: 64, small: 25, labelLarge: '28 Sticks', labelSmall: '7 Sticks' },
    registrationCode: 'RSA-005586-2018',
    benefits: ['Quema grasa', 'Acelera metabolismo', 'Reduce colesterol', 'Transforma grasa en energía'],
    color: '#009FE3', // Cyan/Blue
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_149135_EXT_20102025_224741_MAIN.jpg',
    ingredients: 'Té verde, té negro, té rojo, cromo, camu camu, ácido alfa lipoico, ácido pantoténico.',
    weight: '5g por sobre',
    preparation: '1 stick en agua.',
    extraInfo: 'Excelente para hígado graso y colesterol.'
  },
  {
    id: 'nocarb-t',
    name: 'NOCARB-T',
    category: Category.WEIGHT,
    description: 'Inhibidor de carbohidratos a base de Yacón.',
    flavor: 'Manzana Canela',
    prices: { large: 64, small: 25, labelLarge: '28 Sticks', labelSmall: '7 Sticks' },
    registrationCode: 'PSA-001379-2018',
    benefits: ['Reduce absorción de carbohidratos', 'Regula glucosa', 'Apoya dieta'],
    color: '#D55C19', // Rust Orange
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/productDetails/CO/CO_147764_EXT_22072024_205824_MAIN.jpg',
    ingredients: 'Extracto de yacón, inulina, achicoria, té verde, canela, cromo.',
    weight: '5g por sobre',
    preparation: '1 stick en agua.',
    extraInfo: 'Ideal para diabéticos y dietas keto.'
  },
  {
    id: 'cafe-fit',
    name: 'CAFÉ & CAFÉ FIT',
    category: Category.WEIGHT,
    description: 'Café tostado liofilizado con Café Verde (Svetol).',
    flavor: 'Café',
    prices: { large: 79, labelLarge: '28 Sticks' },
    registrationCode: 'NSA00232-2015',
    benefits: ['Apoya control de peso', 'Regula azúcar', 'Elimina celulitis y grasas'],
    color: '#6f4e37', // Brown
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_141906_EXT_05052025_214106_MAIN.jpg',
    ingredients: 'Café gourmet liofilizado, café verde, Svetol.',
    weight: '5g por sobre',
    preparation: 'En agua caliente/fría.',
    extraInfo: '100% café colombiano.'
  },
  {
    id: 'chocolate-fit',
    name: 'CHOCOLATE FIT',
    category: Category.WEIGHT,
    description: 'Bebida de chocolate baja en calorías con CLA.',
    flavor: 'Chocolate Negro',
    prices: { large: 48, labelLarge: '14 Sticks' },
    registrationCode: 'NSA-005972-2018',
    benefits: ['Reduce ansiedad por dulce', 'Promueve pérdida de medidas', 'Antioxidante'],
    color: '#6f4e37', // Brown
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_147079_EXT_11122023_214953_MAIN.jpg',
    nutritionalTable: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/nutritionalInformation/CO/IN_CO_147079_ES_04082023_003323.jpg',
    ingredients: 'Cacao puro del Amazonas, proteína vegetal, café verde, CLA, cromo orgánico.',
    weight: '15g por sobre',
    preparation: 'En agua/leche, batido.',
    extraInfo: 'Ayuda a tonificar músculo.'
  },
  {
    id: 'pack-5-14',
    name: 'PACK 5-14',
    category: Category.PACKS,
    description: 'Programa integral para bajar 5 kilos en 14 días.',
    flavor: 'Varios',
    prices: { pack: 183, labelLarge: 'Caja Pack' },
    benefits: ['Plan nutricional', 'Productos completos'],
    color: '#009FE3', // Blue
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_144168_EXT_02012024_184043_MAIN.jpg',
    nutritionalTable: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/nutritionalInformation/CO/IN_CO_55350_ES_16092020_232225.jpg',
    ingredients: '4 Prunex1 + 28 Bioprofit + 14 Vitaxtrat + 14 Thermo T3 + 28 Nocarb.',
    weight: 'Pack completo',
    preparation: 'Seguir guía nutricional.',
    extraInfo: 'Programa detox y pérdida de peso intensivo.'
  },

  // Anti Edad
  {
    id: 'hgh',
    name: 'HGH',
    category: Category.ANTI_AGE,
    description: 'Bebida con Resveratrol y antioxidantes.',
    flavor: 'Uva',
    prices: { large: 64, labelLarge: '28 Sticks' },
    registrationCode: 'NSA-004661-2018',
    benefits: ['Nutre glándula pituitaria', 'Retarda envejecimiento', 'Mejora piel y sueño'],
    color: '#662D91', // Purple
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/productDetails/CO/CO_147650_EXT_21022025_203548_MAIN.jpg',
    ingredients: 'Aminoácidos, antioxidantes, resveratrol 98%, glutation, amalaki, optiberry.',
    weight: '5g por sobre',
    preparation: '1 stick en agua.',
    extraInfo: 'Vive tu juventud por más tiempo.'
  },
  {
    id: 'passion',
    name: 'PASSION',
    category: Category.ANTI_AGE,
    description: 'Bebida vigorizante con Jalea Real, Maca y Zinc.',
    flavor: 'Guaraná',
    prices: { large: 64, labelLarge: '28 Sticks' },
    registrationCode: 'NSA-004662-2018',
    benefits: ['Aumenta energía y vigor sexual', 'Favorece circulación', 'Reduce migraña'],
    color: '#ED1C24', // Red/Orange
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_147643_EXT_08112024_202806_MAIN.jpg',
    ingredients: 'Guaraná, jalea real, maca, ginseng, té negro, zinc orgánico.',
    weight: '5g por sobre',
    preparation: '1 stick en agua.',
    extraInfo: 'Apoya fertilidad.'
  },
  {
    id: 'golden-flx',
    name: 'GOLDEN FLX',
    category: Category.ANTI_AGE,
    description: 'Leche dorada con Cúrcuma, Jengibre y Cardamomo.',
    flavor: 'Vainilla',
    prices: { large: 69, labelLarge: '28 Sticks' },
    registrationCode: 'NSA-004663-2018',
    benefits: ['Protege articulaciones', 'Antiinflamatorio', 'Mejora movilidad y flexibilidad'],
    color: '#D6A461', // Gold
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_147642_EXT_08072025_165450_MAIN.jpg',
    ingredients: 'Leche de coco, cúrcuma, jengibre, cardamomo, pimienta negra, canela.',
    weight: '5g por sobre',
    preparation: 'En agua o leche.',
    extraInfo: 'Fuente natural de antioxidantes.'
  },
  {
    id: 'probal',
    name: 'PROBAL',
    category: Category.ANTI_AGE,
    description: 'Protector hormonal con Isoflavonas de Soya.',
    flavor: 'Orégano y Cidrón',
    prices: { large: 78, labelLarge: '28 Sticks' },
    registrationCode: 'NSA-0011329-2021',
    benefits: ['Equilibrio hormonal', 'Regula ciclo menstrual', 'Protege sistema urogenital'],
    color: '#662D91', // Purple
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_147641_EXT_24012025_223335_MAIN.jpg',
    nutritionalTable: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/nutritionalInformation/CO/IN_CO_60380_ES_24012025_223416.jpg',
    ingredients: 'Orégano, cedrón, agua de aguaje, dong quai, té negro, triptófano, magnesio, calcio, camu camu.',
    weight: '5g por sobre',
    preparation: 'En agua como infusión.',
    extraInfo: 'Especial menopausia.'
  },
  {
    id: 'cool-age',
    name: 'COOL AGE',
    category: Category.ANTI_AGE,
    description: 'Colágeno hidrolizado para piel y articulaciones.',
    flavor: 'Guayaba',
    prices: { large: 78, labelLarge: '28 Sticks' },
    registrationCode: 'NSA-004661-2018',
    benefits: ['Mejora piel, elasticidad', 'Fortalece cabello y uñas', 'Antienvejecimiento'],
    color: '#EC008C', // Pink
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_147560_EXT_08072024_213313_MAIN.jpg',
    ingredients: 'Guayaba, colágeno tipo 1 y 3, coenzima Q10, biotina, aminoácidos, camu camu, vitamina C y E, zinc.',
    weight: '5g por sobre',
    preparation: 'En agua, batido o bebida.',
    extraInfo: 'El secreto de la verdadera belleza viene desde adentro.'
  },

  // Vigor Mental
  {
    id: 'on',
    name: 'ON',
    category: Category.MENTAL,
    description: 'Activador mental natural con Acai Berry y Camu Camu.',
    flavor: 'Frutal',
    prices: { large: 53, small: 22, labelLarge: '28 Sticks', labelSmall: '7 Sticks' },
    registrationCode: 'NSA-004661-2018',
    benefits: ['Mejora concentración', 'Memoria', 'Energía mental'],
    color: '#ED1C24', // Red
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_147563_EXT_27052024_013351_MAIN.png',
    ingredients: 'Açaí berry, cafeína, vitaminas complejo B, camu camu, yerba mate, colina.',
    weight: '5g por sobre',
    preparation: '1 stick en agua.',
    extraInfo: 'Recomendado para estudiantes y trabajo intenso.'
  },
  {
    id: 'off',
    name: 'OFF',
    category: Category.MENTAL,
    description: 'Bebida relajante con Aminoácidos (GABA) y Amalaki.',
    flavor: 'Mandarina Durazno',
    prices: { large: 69, small: 25, labelLarge: '28 Sticks', labelSmall: '7 Sticks' },
    registrationCode: 'NSA-004661-2018',
    benefits: ['Relajante', 'Regula estrés', 'Mejora sueño', 'Mantiene enfoque'],
    color: '#F7931E', // Orange
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_147649_EXT_08072025_150731_MAIN.jpg',
    nutritionalTable: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/nutritionalInformation/CO/IN_CO_61013_ES_08072025_150848.jpg',
    ingredients: 'Ashwagandha, amalaki, triptófano, magnesio, vitaminas complejo B, limones, extractos frutales.',
    weight: '5g por sobre',
    preparation: 'En agua, batido.',
    extraInfo: 'Mente sin estrés, relajada y enfocada.'
  },

  // Deporte
  {
    id: 'biopro-sport',
    name: 'BIOPRO+ SPORT',
    category: Category.SPORT,
    description: 'Proteína de alto valor biológico para deportistas.',
    flavor: 'Vainilla Francesa',
    prices: { large: 67, labelLarge: '14 Sticks' },
    registrationCode: 'RSiA01I34012',
    benefits: ['Incrementa masa muscular magra', 'Recupera fibras', 'Fortalece huesos'],
    color: '#D6A461', // Gold
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_143968_EXT_11092025_153132_MAIN.jpg',
    nutritionalTable: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/nutritionalInformation/CO/IN_CO_55309_ES_03092018_204217.jpg',
    ingredients: 'Proteína de calostro bovino, suero lácteo, soya, albúmina de huevo, actinos, DHA, mineraless.',
    weight: '25g por sobre',
    preparation: 'En agua, batido proteico.',
    extraInfo: 'Especial para atletas.'
  },
  {
    id: 'biopro-x-active-sport',
    name: 'BIOPRO X ACTIVE SPORT',
    category: Category.SPORT,
    description: 'Proteína vegana para deportistas.',
    flavor: 'Vainilla / Chocolate',
    prices: { large: 75, labelLarge: '14 Sticks' },
    registrationCode: 'RSA-001488-2016',
    benefits: ['Nutre sistema inmune', 'Crecimiento y recuperación muscular', '100% vegetal'],
    color: '#8CC63F', // Green
    image: './assets/biopro-x-active-sport.png',
    ingredients: 'Proteína vegetal (quinua, arroz integral, arveja, algas), aceites, DHA y ARA.',
    weight: '25g por sobre',
    preparation: 'En agua, batido proteico.',
    extraInfo: 'La proteína que le cae bien a todos.'
  },
  {
    id: 'pre-sport',
    name: 'PRESPRT',
    category: Category.SPORT,
    description: 'Energizante deportivo con Creatina y Sales rehidratantes.',
    flavor: 'Sandía',
    prices: { large: 69, labelLarge: '28 Sticks' },
    registrationCode: 'NSA-0011874-2022',
    benefits: ['Rehidratante', 'Mejora rendimiento', 'Protege articulaciones'],
    color: '#EC008C', // Pink
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_146661_EXT_11122023_213706_MAIN.jpg',
    nutritionalTable: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/nutritionalInformation/CO/IN_CO_146661_ES_12012023_181309.png',
    ingredients: 'Sandía, yerba mate, aminoácidos, minerales.',
    weight: '5g por sobre',
    preparation: 'En agua, antes de entrenar.',
    extraInfo: 'Energía explosiva y natural.'
  },
  {
    id: 'post-sport',
    name: 'POSTSPORT',
    category: Category.SPORT,
    description: 'Recuperador muscular con Glutamina y Achiote.',
    flavor: 'Granada',
    prices: { large: 69, labelLarge: '28 Sticks' },
    registrationCode: 'NSA-0011874-2022',
    benefits: ['Reconstituye', 'Fortalece fibras', 'Repone electrolitos'],
    color: '#ED1C24', // Red
    image: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/imageProducts/CO/CO_144955_EXT_12082024_162928_MAIN.jpg',
    nutritionalTable: 'https://fuxionstorage.blob.core.windows.net/vhdfuxionoffix/newOffix/nutritionalInformation/CO/IN_CO_58513_ES_12082024_163038.jpg',
    ingredients: 'BCAAs, agua de coco, granada, acerola, cromo.',
    weight: '5g por sobre',
    preparation: 'En agua, después de entrenar.',
    extraInfo: 'Protege articulaciones.'
  }
];