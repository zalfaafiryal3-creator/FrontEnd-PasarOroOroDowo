export interface ProductItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  unit: string;
  rating: string;
  reviews: string;
  image: string;
  badge?: string | null;
}

export interface ReviewItem {
  id: string;
  user: string;
  rating: number;
  date: string;
  status: string;
  body: string;
}

export interface StoreDetail {
  id: string;
  name: string;
  category: string;
  displayCategory: string;
  badge: string;
  rating: string;
  reviewsCount: string;
  openHours: string;
  kiosCode: string;
  address: string;
  sinceYear: string;
  aboutText: string;
  coverImage: string;
  avatarImage: string;
  galleryPhotos: string[];
  products: ProductItem[];
  reviews: ReviewItem[];
}

export const storeDetailsMap: Record<string, StoreDetail> = {
  'lumpur-kentang-27': {
    id: 'lumpur-kentang-27',
    name: 'Lumpur Kentang 27',
    category: 'Makanan',
    displayCategory: 'Makanan',
    badge: 'Makanan',
    rating: '4.9',
    reviewsCount: '854+',
    openHours: '06.00 - 17.00',
    kiosCode: 'KIOS 4-15',
    address: 'PASAR ORO-ORO DOWO, BLOK A NO. 17, KLOJEN, MALANG',
    sinceYear: 'Sejak 1997',
    aboutText:
      'Lumpur Kentang Wira/Wiwik 27 adalah lapak kuliner legendaris dan viral di Pasar Rakyat Oro-Oro Dowo, Kota Malang, yang menyajikan kue lumpur tradisional berbahan dasar kentang dengan tekstur sangat lembut dan wangi khas.',
    coverImage: 'lumpur kentang 27.jpeg',
    avatarImage: 'lumpur kentang 27.jpeg',
    galleryPhotos: ['1377a.png', '204f2.png', 'kue lumpur 27.jpeg'],
    products: [
      {
        id: 'klasik',
        name: 'Klasik',
        desc: 'Topping kismis dengan rasa asam manis',
        price: 'Rp 7.000',
        unit: '/pcs',
        rating: '4.9',
        reviews: '112',
        image: 'kue lumpur 27.jpeg',
      },
      {
        id: 'keju',
        name: 'Keju',
        desc: 'Topping keju dengan rasa manis asin',
        price: 'Rp 7.000',
        unit: '/pcs',
        rating: '4.8',
        reviews: '45',
        image: 'lumpur kentang 27.jpeg',
        badge: 'Laris',
      },
      {
        id: 'kelapa',
        name: 'Kelapa',
        desc: 'Topping kelapa dengan rasa manis gurih',
        price: 'Rp 7.000',
        unit: '/pcs',
        rating: '4.9',
        reviews: '28',
        image: 'promo cake.jpg',
      },
      {
        id: 'bikang-puji',
        name: 'Bikang Puji',
        desc: 'Rasanya Enak',
        price: 'Rp 4.000',
        unit: '/pcs',
        rating: '4.9',
        reviews: '84',
        image: 'jajanan pasar.jpg',
      },
      {
        id: 'lemper-ayam',
        name: 'Lemper Ayam',
        desc: 'Rasanya Enak',
        price: 'Rp 7.000',
        unit: '/pcs',
        rating: '4.8',
        reviews: '19',
        image: 'promo tahu bakso.jpg',
      },
    ],
    reviews: [
      {
        id: 'rev-1',
        user: 'Yuli Maya Lestari',
        rating: 5,
        date: '1 minggu yang lalu',
        status: 'Terverifikasi',
        body: 'Kue lumpur kentang ter-enak! Bahan-bahannya lembut/hangat, selalu wajib diikutsertakan lewat kunjungan pasar, dapat lembaran daun 25 menit. Bu Yayuk juga ramah sekali dan teksturnya memang juara banget...',
      },
      {
        id: 'rev-2',
        user: 'Dimas Priyambodo',
        rating: 5,
        date: '1 minggu yang lalu',
        status: 'Pasien Kios Kategori',
        body: 'Kemudahan dan sangat berkualitas variannya, rasanya selalu konsisten manisnya. Pilihan belanja terpercaya di Pasar Oro-Oro Dowo...',
      },
    ],
  },
  'bakso-goreng-bangkit': {
    id: 'bakso-goreng-bangkit',
    name: 'Bakso Goreng Ayam Bangkit',
    category: 'Makanan',
    displayCategory: 'Makanan',
    badge: 'Makanan',
    rating: '4.8',
    reviewsCount: '620+',
    openHours: '07.00 - 16.30',
    kiosCode: 'KIOS 2-08',
    address: 'PASAR ORO-ORO DOWO, BLOK B NO. 08, KLOJEN, MALANG',
    sinceYear: 'Sejak 2005',
    aboutText:
      'Bakso Goreng Ayam Bangkit menyajikan bakso goreng renyah di luar dan lembut di dalam berbahan dasar olahan ayam pilihan segar dengan rempah khas resep keluarga yang selalu disajikan hangat.',
    coverImage: 'bangkit bakso goreng.jpeg',
    avatarImage: 'bangkit bakso goreng.jpeg',
    galleryPhotos: ['bangkit bakso goreng.jpeg', '1377a.png', 'jajanan pasar.jpg'],
    products: [
      {
        id: 'bg-super',
        name: 'Bakso Goreng Super',
        desc: 'Gurih renyah berukuran jumbo',
        price: 'Rp 7.000',
        unit: '/pcs',
        rating: '4.8',
        reviews: '96',
        image: 'bangkit bakso goreng.jpeg',
        badge: 'Favorit',
      },
      {
        id: 'bg-keju',
        name: 'Bakso Goreng Isu Keju',
        desc: 'Isian keju lumer yang lezat',
        price: 'Rp 8.000',
        unit: '/pcs',
        rating: '4.9',
        reviews: '52',
        image: '1377a.png',
      },
      {
        id: 'bg-crispy',
        name: 'Bakso Crispy Pedas',
        desc: 'Sensasi pedas gurih nagih',
        price: 'Rp 7.000',
        unit: '/pcs',
        rating: '4.7',
        reviews: '34',
        image: 'promo gado gado.jpg',
      },
    ],
    reviews: [
      {
        id: 'rev-bg1',
        user: 'Rian Prasetya',
        rating: 5,
        date: '3 hari yang lalu',
        status: 'Terverifikasi',
        body: 'Bakso gorengnya renyah banget dan nggak pelit daging! Pelayanannya cepat dan selalu hangat saat disajikan.',
      },
      {
        id: 'rev-bg2',
        user: 'Siti Rahma',
        rating: 5,
        date: '5 hari yang lalu',
        status: 'Pengunjung Setia',
        body: 'Favorit keluarga setiap kali jalan-jalan pagi ke Pasar Oro-Oro Dowo. Wajib beli waktu masih panas!',
      },
    ],
  },
  'klepon-ku': {
    id: 'klepon-ku',
    name: 'Klepon-ku',
    category: 'Makanan',
    displayCategory: 'Makanan',
    badge: 'Makanan',
    rating: '4.8',
    reviewsCount: '410+',
    openHours: '06.00 - 15.00',
    kiosCode: 'KIOS 1-12',
    address: 'PASAR ORO-ORO DOWO, LORONG UTAMA NO. 12, MALANG',
    sinceYear: 'Sejak 2012',
    aboutText:
      'Klepon-ku menyajikan kue basah klepon ketan segar khas Malang dengan isian gula merah cair asli yang meletup nikmat di mulut, ditaburi kelapa parut gurih.',
    coverImage: 'klepon.png',
    avatarImage: 'klepon.png',
    galleryPhotos: ['klepon.png', 'kue lumpur 27.jpeg', 'jajanan pasar.jpg'],
    products: [
      {
        id: 'klepon-ori',
        name: 'Klepon Gula Merah',
        desc: 'Lelehan gula aren murni',
        price: 'Rp 6.000',
        unit: '/porsi',
        rating: '4.8',
        reviews: '78',
        image: 'klepon.png',
        badge: 'Best Seller',
      },
      {
        id: 'klepon-pandan',
        name: 'Klepon Pandan Wangi',
        desc: 'Aroma daun pandan alami',
        price: 'Rp 7.000',
        unit: '/porsi',
        rating: '4.9',
        reviews: '31',
        image: 'promo cake.jpg',
      },
    ],
    reviews: [
      {
        id: 'rev-kl1',
        user: 'Anisa Wulandari',
        rating: 5,
        date: 'Kemarin',
        status: 'Terverifikasi',
        body: 'Gula merahnya beneran meletup! Kelapanya gurih dan masih segar. Cocok banget buat teman minum teh.',
      },
    ],
  },
  'pangsit-mie-arema': {
    id: 'pangsit-mie-arema',
    name: 'Pangsit Mie Arema',
    category: 'Makanan',
    displayCategory: 'Makanan',
    badge: 'Makanan',
    rating: '4.9',
    reviewsCount: '980+',
    openHours: '07.30 - 16.00',
    kiosCode: 'KIOS 3-05',
    address: 'PASAR ORO-ORO DOWO, KULINER REJO NO. 05, MALANG',
    sinceYear: 'Sejak 1988',
    aboutText:
      'Pangsit Mie Arema menyajikan mi buatan sendiri yang kenyal dengan bumbu ayam cincang gurih khas Malang, pangsit goreng renyah, dan kuah kaldu sapi bening.',
    coverImage: 'pangsit mie arema.png',
    avatarImage: 'pangsit mie arema.png',
    galleryPhotos: ['pangsit mie arema.png', 'promo mie ayam.jpg', '1377a.png'],
    products: [
      {
        id: 'pm-special',
        name: 'Pangsit Mie Ayam Special',
        desc: 'Mi kenyal dengan bumbu pangsit gurih',
        price: 'Rp 14.000',
        unit: '/porsi',
        rating: '4.9',
        reviews: '150',
        image: 'pangsit mie arema.png',
        badge: 'Legendaris',
      },
      {
        id: 'pm-bakso',
        name: 'Pangsit Mie Bakso',
        desc: 'Dilengkapi bakso halus pilihan',
        price: 'Rp 16.000',
        unit: '/porsi',
        rating: '4.8',
        reviews: '89',
        image: 'promo mie ayam.jpg',
      },
    ],
    reviews: [
      {
        id: 'rev-pm1',
        user: 'Budi Santoso',
        rating: 5,
        date: '2 hari lalu',
        status: 'Pengunjung Setia',
        body: 'Salah satu mie pangsit terenak di Malang. Minya buatan sendiri kenyal dan bumbunya meresap sempurna.',
      },
    ],
  },
  'bagoplek-bakso-goreng': {
    id: 'bagoplek-bakso-goreng',
    name: 'Bagoplek Bakso Goreng',
    category: 'Makanan',
    displayCategory: 'Makanan',
    badge: 'Makanan',
    rating: '4.9',
    reviewsCount: '320+',
    openHours: '08.00 - 17.00',
    kiosCode: 'KIOS 2-10',
    address: 'PASAR ORO-ORO DOWO, BLOK B NO. 10, MALANG',
    sinceYear: 'Sejak 2018',
    aboutText:
      'Bagoplek menyajikan olahan bakso goreng mekar renyah dengan cocolan saus sambal racikan pedas manis yang menggugah selera.',
    coverImage: '1377a.png',
    avatarImage: '1377a.png',
    galleryPhotos: ['1377a.png', 'bangkit bakso goreng.jpeg'],
    products: [
      {
        id: 'bagoplek-ori',
        name: 'Bagoplek Original',
        desc: 'Renyah gurih bikin ketagihan',
        price: 'Rp 8.000',
        unit: '/pcs',
        rating: '4.9',
        reviews: '65',
        image: '1377a.png',
      },
    ],
    reviews: [
      {
        id: 'rev-bgp1',
        user: 'Dewi Fitri',
        rating: 5,
        date: '4 hari lalu',
        status: 'Terverifikasi',
        body: 'Cemilan wajib kalau ke pasar! Sausnya nagih banget.',
      },
    ],
  },
  'fresgreen-organic': {
    id: 'fresgreen-organic',
    name: 'FresGreen Organic',
    category: 'Sayur & Buah',
    displayCategory: 'Makanan & Minuman',
    badge: 'Makanan & Minuman',
    rating: '4.8',
    reviewsCount: '290+',
    openHours: '06.00 - 14.00',
    kiosCode: 'KIOS SAYUR 01',
    address: 'PASAR ORO-ORO DOWO, BLOK SAYUR NO. 01, MALANG',
    sinceYear: 'Sejak 2016',
    aboutText:
      'FresGreen Organic menyediakan beragam pilihan sayur hidroponik, buah segar lokal dan impor tanpa pestisida berbahaya langsung dari petani binaan.',
    coverImage: '3a328.png',
    avatarImage: '3a328.png',
    galleryPhotos: ['3a328.png', 'tempe segar.jpg'],
    products: [
      {
        id: 'sayur-bayam',
        name: 'Bayam Hidroponik Segar',
        desc: 'Bebas pestisida kaya nutrisi',
        price: 'Rp 5.000',
        unit: '/ikat',
        rating: '4.8',
        reviews: '42',
        image: '3a328.png',
      },
      {
        id: 'apel-malang',
        name: 'Apel Manalagi Segar',
        desc: 'Apel khas Batu Malang',
        price: 'Rp 22.000',
        unit: '/kg',
        rating: '4.9',
        reviews: '88',
        image: 'promo gado gado.jpg',
      },
    ],
    reviews: [
      {
        id: 'rev-fg1',
        user: 'Hendra Gunawan',
        rating: 5,
        date: 'Kemarin',
        status: 'Terverifikasi',
        body: 'Sayurnya bersih-bersih banget dan segar. Selalu puas belanja sayur bulanan di sini.',
      },
    ],
  },
  'sego-liwet-kemangi': {
    id: 'sego-liwet-kemangi',
    name: 'Sego liwet Bakar Kemangi',
    category: 'Kuliner Legendaris',
    displayCategory: 'Makanan',
    badge: 'Makanan',
    rating: '4.8',
    reviewsCount: '510+',
    openHours: '06.30 - 15.30',
    kiosCode: 'KIOS KULINER 04',
    address: 'PASAR ORO-ORO DOWO, BLOK C NO. 04, MALANG',
    sinceYear: 'Sejak 2008',
    aboutText:
      'Sego Liwet Bakar Kemangi menyajikan nasi bakar gurih beraroma rempah nusantara dengan pilihan lauk ayam suwir pedas, cumi asin, dan sambal terasi lezat.',
    coverImage: 'jajanan pasar.jpg',
    avatarImage: 'jajanan pasar.jpg',
    galleryPhotos: ['jajanan pasar.jpg', 'kue lumpur 27.jpeg'],
    products: [
      {
        id: 'sego-ayam',
        name: 'Nasi Bakar Ayam Kemangi',
        desc: 'Wangi daun pisang & kemangi segar',
        price: 'Rp 12.000',
        unit: '/porsi',
        rating: '4.8',
        reviews: '102',
        image: 'jajanan pasar.jpg',
      },
    ],
    reviews: [
      {
        id: 'rev-sl1',
        user: 'Mega Kusuma',
        rating: 5,
        date: '3 hari lalu',
        status: 'Pengunjung Setia',
        body: 'Aromanya wangi beneran bakar daun pisang! Lauknya banyak dan gurih.',
      },
    ],
  },
  norriture: {
    id: 'norriture',
    name: 'Norriture',
    category: 'Daging & Ikan',
    displayCategory: 'Daging',
    badge: 'Makanan',
    rating: '4.9',
    reviewsCount: '180+',
    openHours: '05.30 - 13.00',
    kiosCode: 'KIOS DAGING 02',
    address: 'PASAR ORO-ORO DOWO, BLOK DAGING NO. 02, MALANG',
    sinceYear: 'Sejak 2010',
    aboutText:
      'Norriture adalah supplier dan kios pemotongan daging sapi dan ayam potong segar harian bersertifikat halal dengan standar pemotongan higienis.',
    coverImage: 'tempe segar.jpg',
    avatarImage: 'tempe segar.jpg',
    galleryPhotos: ['tempe segar.jpg', '3a328.png'],
    products: [
      {
        id: 'daging-sapi',
        name: 'Daging Sapi Segar Rendang',
        desc: 'Potongan daging pilihan higienis',
        price: 'Rp 125.000',
        unit: '/kg',
        rating: '4.9',
        reviews: '55',
        image: 'tempe segar.jpg',
      },
    ],
    reviews: [
      {
        id: 'rev-nor1',
        user: 'Pak Bambang',
        rating: 5,
        date: '5 hari lalu',
        status: 'Terverifikasi',
        body: 'Dagingnya selalu segar baru potong pagi hari. Langganan buat usaha katering keluarga.',
      },
    ],
  },
  'toko-sembako-barokah': {
    id: 'toko-sembako-barokah',
    name: 'Toko Sembako Barokah',
    category: 'Sembako & Perabotan',
    displayCategory: 'Sembako & Perabotan',
    badge: 'Sembako',
    rating: '4.9',
    reviewsCount: '750+',
    openHours: '06.00 - 17.00',
    kiosCode: 'KIOS SEMBAKO 07',
    address: 'PASAR ORO-ORO DOWO, BLOK SEMBAKO NO. 07, MALANG',
    sinceYear: 'Sejak 2001',
    aboutText:
      'Toko Sembako Barokah menyediakan kebutuhan pokok beras, minyak goreng, gula, tepung, telur, serta peralatan rumah tangga eceran dan grosir terjangkau.',
    coverImage: '204f2.png',
    avatarImage: '204f2.png',
    galleryPhotos: ['204f2.png', '3a328.png'],
    products: [
      {
        id: 'beras-5kg',
        name: 'Beras Super Premium 5kg',
        desc: 'Beras putih pulen dan wangi',
        price: 'Rp 68.000',
        unit: '/karung',
        rating: '4.9',
        reviews: '130',
        image: '204f2.png',
      },
    ],
    reviews: [
      {
        id: 'rev-sb1',
        user: 'Ibu Ratna',
        rating: 5,
        date: 'Kemarin',
        status: 'Pengunjung Setia',
        body: 'Harganya bersaing banget dan bisa diantar ke tempat parkir. Penjualnya juga ramah.',
      },
    ],
  },
  'kios-mainan-baju': {
    id: 'kios-mainan-baju',
    name: 'Kios Mainan & Baju Ceria',
    category: 'Mainan & Baju',
    displayCategory: 'Mainan & Baju',
    badge: 'Mainan & Baju',
    rating: '4.7',
    reviewsCount: '210+',
    openHours: '08.00 - 16.30',
    kiosCode: 'KIOS ANEX 03',
    address: 'PASAR ORO-ORO DOWO, BLOK ANEX NO. 03, MALANG',
    sinceYear: 'Sejak 2017',
    aboutText:
      'Kios Mainan & Baju Ceria menyediakan beraneka pakaian anak, baju bayi berbahan adem, serta mainan anak edukatif yang aman dan berkualitas.',
    coverImage: '2312e.png',
    avatarImage: '2312e.png',
    galleryPhotos: ['2312e.png', '204f2.png'],
    products: [
      {
        id: 'setelan-anak',
        name: 'Setelan Baju Anak Cotton',
        desc: 'Bahan katun adem & lembut',
        price: 'Rp 35.000',
        unit: '/stel',
        rating: '4.7',
        reviews: '48',
        image: '2312e.png',
      },
    ],
    reviews: [
      {
        id: 'rev-km1',
        user: 'Siska Amelia',
        rating: 5,
        date: '4 hari lalu',
        status: 'Terverifikasi',
        body: 'Baju anak-anaknya lucu-lucu dan harganya murah meriah. Pas banget buat kado saudara.',
      },
    ],
  },
};

export function getStoreDetail(id?: string): StoreDetail {
  if (!id) return storeDetailsMap['lumpur-kentang-27'];
  return storeDetailsMap[id] || storeDetailsMap['lumpur-kentang-27'];
}
