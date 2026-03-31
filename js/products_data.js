const PRODUCTS_DATA = Object.freeze([
  {
    "id": 1,
    "title": "Rolex Submariner",
    "price": 9500,
    "category": "watches",
    "image": "https://cdn.dribbble.com/userupload/25527139/file/original-67835ede7ed6ac0d933c426e44174754.png?resize=1024x768&vertical=center",
    "description": "Iconic luxury dive watch with automatic movement, stainless steel case, and water resistance up to 300m.",
    "rating": 5,
    "stock": 3,
    "specs": { "brand": "Rolex", "movement": "Automatic", "caseMaterial": "Stainless Steel", "waterResistance": "300m" }
  },
  {
    "id": 2,
    "title": "Apple Watch Series 9",
    "price": 399,
    "category": "watches",
    "image": "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/apple-watch-series-9.png",
    "description": "Advanced fitness tracking, health monitoring, and seamless iPhone integration with always-on display.",
    "rating": 5,
    "stock": 15,
    "specs": { "brand": "Apple", "movement": "Electronic", "caseMaterial": "Aluminum", "waterResistance": "50m" }
  },
  {
    "id": 3,
    "title": "Sony WH-1000XM5",
    "price": 349,
    "category": "Accessories",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    "description": "Industry-leading noise canceling headphones with exceptional sound quality and 30-hour battery life.",
    "rating": 4,
    "stock": 10,
    "specs": { "brand": "Sony", "connectivity": "Bluetooth 5.2", "batteryLife": "30h", "noiseCancelling": "Yes" }
  },
  {
    "id": 4,
    "title": "MacBook Pro 14 M3",
    "price": 1599,
    "category": "Accessories",
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
    "description": "Powerful laptop for professionals featuring the M3 chip and stunning Liquid Retina XDR display.",
    "rating": 5,
    "stock": 5,
    "specs": { "brand": "Apple", "processor": "M3 Pro", "ram": "18GB", "storage": "512GB SSD" }
  },
  {
    "id": 5,
    "title": "Omega Seamaster",
    "price": 5200,
    "category": "watches",
    "image": "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500&h=500&fit=crop",
    "description": "Professional diver's watch with co-axial master chronometer movement and wave-pattern dial.",
    "rating": 5,
    "stock": 4,
    "specs": { "brand": "Omega", "movement": "Automatic", "caseMaterial": "Stainless Steel", "waterResistance": "300m" }
  },
  {
    "id": 6,
    "title": "Canon EOS R5",
    "price": 3899,
    "category": "Accessories",
    "image": "https://creativeschoolarabia.com/wp-content/uploads/2020/03/canon-eos-r5-creative-school-arabia-%D9%83%D8%A7%D9%86%D9%88%D9%86-%D8%AA%D8%B5%D9%88%D9%8A%D8%B1-%D9%83%D8%A7%D9%85%D9%8A%D8%B1%D8%A7-%D9%85%D8%AF%D8%B1%D8%B3%D8%A9-%D8%A7%D9%84%D8%A7%D9%95%D8%A8%D8%AF%D8%A7%D8%B9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D8%A7%D9%95%D8%B9%D9%84%D8%A7%D9%86-%D8%B9%D9%86-%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA-%D9%83%D8%A7%D9%85%D9%8A%D8%B1%D8%A7-%D9%83%D8%A7%D9%86%D9%88%D9%86-EOS-R5-%D8%A8%D8%AA%D8%B5%D9%88%D9%8A%D8%B1-%D9%81%D9%8A%D8%AF%D9%8A%D9%88-8K-%D9%81%D9%84-%D9%81%D8%B1%D9%8A%D9%853-780x470.jpg",
    "description": "Full-frame mirrorless camera with 45MP sensor, 8K video recording, and advanced autofocus.",
    "rating": 4,
    "stock": 2,
    "specs": { "brand": "Canon", "sensor": "Full Frame", "resolution": "45MP", "video": "8K Raw" }
  },
  {
    "id": 7,
    "title": "Tissot Le Locle",
    "price": 650,
    "category": "watches",
    "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop",
    "description": "Elegant automatic dress watch with guilloche dial and Roman numerals.",
    "rating": 4,
    "stock": 8,
    "specs": { "brand": "Tissot", "movement": "Automatic", "caseMaterial": "Steel", "waterResistance": "30m" }
  },
  {
    "id": 8,
    "title": "DJI Mavic 3 Pro",
    "price": 2199,
    "category": "electronics",
    "image": "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:238,cw:1523,ch:857,q:80,w:1523/MY9NZ5SVPaZFJi4YAxtCDo.jpg",
    "description": "Flagship drone with triple-camera system, 43-min flight time, and omnidirectional obstacle sensing.",
    "rating": 5,
    "stock": 3,
    "specs": { "brand": "DJI", "camera": "Hasselblad", "flightTime": "43min", "range": "15km" }
  },
  {
    "id": 9,
    "title": "iPad Pro 12.9",
    "price": 1099,
    "category": "electronics",
    "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop",
    "description": "Ultimate tablet experience with M2 chip, Liquid Retina XDR display, and Thunderbolt support.",
    "rating": 5,
    "stock": 12,
    "specs": { "brand": "Apple", "chip": "M2", "display": "Mini-LED", "warranty": "1 Year" }
  },
  {
    "id": 10,
    "title": "Cartier Santos",
    "price": 7200,
    "category": "watches",
    "image": "https://i0.wp.com/bluediamondwatch.com/wp-content/uploads/2022/05/wp-1651438283282.jpg?fit=800%2C800&ssl=1",
    "description": "Iconic luxury sports watch with distinctive square case and elegant design.",
    "rating": 5,
    "stock": 1,
    "specs": { "brand": "Cartier", "movement": "Automatic", "caseMaterial": "18K Gold", "waterResistance": "100m" }
  },
  {
    "id": 11,
    "title": "Breitling Navitimer",
    "price": 8500,
    "category": "watches",
    "image": "https://monochrome-watches.com/app/uploads/2018/03/Breitling-Navitimer-Super-8-Baselworld-2018-1.jpg",
    "description": "Professional chronograph with slide rule and legendary heritage.",
    "rating": 5,
    "stock": 2,
    "specs": { "brand": "Breitling", "movement": "B01 Automatic", "caseMaterial": "Steel", "waterResistance": "30m" }
  }
]);
