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
    image: "https://m.media-amazon.com/images/I/51aXvjzcukL._SX522_.jpg",
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
    image: "https://m.media-amazon.com/images/I/71f5Eu5lJ4L._SX679_.jpg",
    basePrice: 114900,
    description: "Supercharged by M2. Strikingly thin design with all-day battery life.",
    variants: [
      { name: "8GB RAM, 256GB SSD Space Grey", price: 114900 },
      { name: "8GB RAM, 512GB SSD Space Grey", price: 134900 }
    ],
    emiOptions: [
      { durationMonths: 3, interestRate: 0, monthlyInstallment: 38300 },
      { durationMonths: 6, interestRate: 0, monthlyInstallment: 19150 },
      { durationMonths: 12, interestRate: 10, monthlyInstallment: 10532 }
    ]
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    image: "https://m.media-amazon.com/images/I/71WcjZXO-aL._SX679_.jpg",
    basePrice: 129999,
    description: "Welcome to the era of mobile AI. Empower yourself with the Galaxy S24 Ultra.",
    variants: [
      { name: "12GB RAM, 256GB Titanium Gray", price: 129999 },
      { name: "12GB RAM, 512GB Titanium Gray", price: 139999 }
    ],
    emiOptions: [
      { durationMonths: 3, interestRate: 0, monthlyInstallment: 43333 },
      { durationMonths: 6, interestRate: 0, monthlyInstallment: 21666 }
    ]
  },
  {
    name: "Apple iPad Air (5th Gen)",
    image: "https://m.media-amazon.com/images/I/61XZQXFQeVL._SX679_.jpg",
    basePrice: 59900,
    description: "Light. Bright. Full of might. Powered by the Apple M1 chip.",
    variants: [
      { name: "64GB Wi-Fi Space Grey", price: 59900 },
      { name: "256GB Wi-Fi Space Grey", price: 74900 }
    ],
    emiOptions: [
      { durationMonths: 3, interestRate: 0, monthlyInstallment: 19966 },
      { durationMonths: 6, interestRate: 0, monthlyInstallment: 9983 }
    ]
  },
  {
    name: "Nintendo Switch OLED Model",
    image: "https://m.media-amazon.com/images/I/51yJ+OqCZbL._SX679_.jpg",
    basePrice: 34990,
    description: "Play at home or on the go with a vibrant 7-inch OLED screen.",
    variants: [
      { name: "White Joy-Con", price: 34990 },
      { name: "Neon Red/Blue Joy-Con", price: 34990 }
    ],
    emiOptions: [
      { durationMonths: 3, interestRate: 0, monthlyInstallment: 11663 },
      { durationMonths: 6, interestRate: 8, monthlyInstallment: 6123 }
    ]
  },
  {
    name: "Dyson V12 Detect Slim",
    image: "https://m.media-amazon.com/images/I/51wB7-M6WvL._SX679_.jpg",
    basePrice: 55900,
    description: "Lightweight cordless vacuum with laser dust detection.",
    variants: [
      { name: "V12 Detect Slim Absolute", price: 55900 },
      { name: "V12 Detect Slim Extra", price: 59900 }
    ],
    emiOptions: [
      { durationMonths: 3, interestRate: 0, monthlyInstallment: 18633 },
      { durationMonths: 6, interestRate: 0, monthlyInstallment: 9316 }
    ]
  },
  {
    name: "GoPro HERO12 Black",
    image: "https://m.media-amazon.com/images/I/61T+NItF+9L._SX679_.jpg",
    basePrice: 37990,
    description: "Incredible image quality, even better HyperSmooth video stabilization.",
    variants: [
      { name: "Camera Only", price: 37990 },
      { name: "Creator Edition", price: 57990 }
    ],
    emiOptions: [
      { durationMonths: 3, interestRate: 0, monthlyInstallment: 12663 },
      { durationMonths: 6, interestRate: 8, monthlyInstallment: 6648 }
    ]
  },
  {
    name: "LG C3 55-inch 4K OLED Smart TV",
    image: "https://m.media-amazon.com/images/I/81xUhw-o21L._SX679_.jpg",
    basePrice: 139990,
    description: "Experience infinite contrast and perfect black levels.",
    variants: [
      { name: "55-inch", price: 139990 },
      { name: "65-inch", price: 189990 }
    ],
    emiOptions: [
      { durationMonths: 6, interestRate: 0, monthlyInstallment: 23331 },
      { durationMonths: 12, interestRate: 0, monthlyInstallment: 11665 }
    ]
  },
  {
    name: "Garmin Fenix 7X Pro Solar",
    image: "https://m.media-amazon.com/images/I/61b17V2-GGL._SX679_.jpg",
    basePrice: 98990,
    description: "Ultimate multisport GPS smartwatch with solar charging.",
    variants: [
      { name: "Slate Gray with Black Band", price: 98990 },
      { name: "Titanium with Titanium Band", price: 119990 }
    ],
    emiOptions: [
      { durationMonths: 3, interestRate: 0, monthlyInstallment: 32996 },
      { durationMonths: 6, interestRate: 0, monthlyInstallment: 16498 },
      { durationMonths: 9, interestRate: 8, monthlyInstallment: 11370 }
    ]
  }
];

export default products;