const products = [
  {
    name: "Apple iPhone 15 Pro",
    image: "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_SX679_.jpg",
    basePrice: 134900,
    description: "Forged in titanium and featuring the groundbreaking A17 Pro chip.",
    variants: [
      { name: "128GB Blue Titanium", price: 134900 },
      { name: "256GB Blue Titanium", price: 144900 }
    ],
    emiOptions: [
      { durationMonths: 3, interestRate: 0, monthlyInstallment: 44966 },
      { durationMonths: 6, interestRate: 0, monthlyInstallment: 22483 },
      { durationMonths: 9, interestRate: 8, monthlyInstallment: 15495 }
    ]
  },
  {
    name: "Sony WH-1000XM5",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=400",
    basePrice: 29990,
    description: "Industry leading noise canceling headphones.",
    variants: [
      { name: "Black", price: 29990 },
      { name: "Silver", price: 29990 }
    ],
    emiOptions: [
      { durationMonths: 3, interestRate: 0, monthlyInstallment: 9996 },
      { durationMonths: 6, interestRate: 0, monthlyInstallment: 4998 }
    ]
  },
  {
    name: "Apple MacBook Air M2",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=400&hei=400&fmt=jpeg&qlt=90",
    basePrice: 114900,
    description: "Supercharged by M2. Strikingly thin design with all-day battery life.",
    variants: [
      { name: "8GB RAM, 256GB SSD", price: 114900 }
    ],
    emiOptions: [
      { durationMonths: 3, interestRate: 0, monthlyInstallment: 38300 },
      { durationMonths: 6, interestRate: 0, monthlyInstallment: 19150 }
    ]
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=400",
    basePrice: 129999,
    description: "Welcome to the era of mobile AI. Empower yourself.",
    variants: [
      { name: "256GB Titanium Gray", price: 129999 }
    ],
    emiOptions: [
      { durationMonths: 3, interestRate: 0, monthlyInstallment: 43333 }
    ]
  },
  {
    name: "Apple iPad Air (5th Gen)",
    image: "https://iclusters.in/cdn/shop/files/264352_j5lh0u.webp?v=1772366317",
    basePrice: 59900,
    description: "Light. Bright. Full of might. Powered by the Apple M1 chip.",
    variants: [
      { name: "64GB Wi-Fi Space Grey", price: 59900 }
    ],
    emiOptions: [
      { durationMonths: 3, interestRate: 0, monthlyInstallment: 19966 },
      { durationMonths: 6, interestRate: 0, monthlyInstallment: 9983 }
    ]
  },
  {
    name: "Nintendo Switch OLED Model",
    image: "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?q=80&w=400",
    basePrice: 34990,
    description: "Play at home or on the go with a vibrant 7-inch OLED screen.",
    variants: [
      { name: "Neon Red/Blue Joy-Con", price: 34990 }
    ],
    emiOptions: [
      { durationMonths: 3, interestRate: 0, monthlyInstallment: 11663 }
    ]
  },
  {
    name: "Dyson V12 Detect Slim",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=400",
    basePrice: 55900,
    description: "Lightweight cordless vacuum with laser dust detection.",
    variants: [
      { name: "V12 Detect Slim Absolute", price: 55900 }
    ],
    emiOptions: [
      { durationMonths: 6, interestRate: 0, monthlyInstallment: 9316 }
    ]
  },
  {
    name: "GoPro HERO12 Black",
    image: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T1/images/I/611pNKLfqaL._SX679_.jpg",
    basePrice: 37990,
    description: "Incredible image quality, even better HyperSmooth stabilization.",
    variants: [
      { name: "Camera Only", price: 37990 }
    ],
    emiOptions: [
      { durationMonths: 6, interestRate: 8, monthlyInstallment: 6648 }
    ]
  },
  {
    name: "LG C3 55-inch 4K OLED TV",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=400",
    basePrice: 139990,
    description: "Experience infinite contrast and perfect black levels.",
    variants: [
      { name: "55-inch", price: 139990 }
    ],
    emiOptions: [
      { durationMonths: 12, interestRate: 0, monthlyInstallment: 11665 }
    ]
  },
  {
    name: "Garmin Fenix 7X Pro Solar",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400",
    basePrice: 98990,
    description: "Ultimate multisport GPS smartwatch with solar charging.",
    variants: [
      { name: "Slate Gray", price: 98990 }
    ],
    emiOptions: [
      { durationMonths: 6, interestRate: 0, monthlyInstallment: 16498 }
    ]
  }
];

export default products;