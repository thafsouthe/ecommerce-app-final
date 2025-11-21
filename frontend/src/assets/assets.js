import p_img1 from './p_img1.png'
import p_img2_1 from './p_img2_1.png'
import p_img2_2 from './p_img2_2.png'
import p_img2_3 from './p_img2_3.png'
import p_img2_4 from './p_img2_4.png'
import p_img3 from './p_img3.png'
import p_img4 from './p_img4.png'
import p_img5 from './p_img5.png'
import p_img6 from './p_img6.png'
import p_img7 from './p_img7.png'
import p_img8 from './p_img8.png'
import p_img9 from './p_img9.png'
import p_img10 from './p_img10.png'
import p_img11 from './p_img11.png'
import p_img12 from './p_img12.png'
import p_img13 from './p_img13.png'
import p_img14 from './p_img14.png'
import p_img15 from './p_img15.png'
import p_img16 from './p_img16.png'
import p_img17 from './p_img17.png'
import p_img18 from './p_img18.png'
import p_img19 from './p_img19.png'
import p_img20 from './p_img20.png'
import p_img21 from './p_img21.png'
import p_img22 from './p_img22.png'
import p_img23 from './p_img23.png'
import p_img24 from './p_img24.png'
import p_img25 from './p_img25.png'
import p_img26 from './p_img26.png'
import p_img27 from './p_img27.png'
import p_img28 from './p_img28.png'
import p_img29 from './p_img29.png'
import p_img30 from './p_img30.png'
import p_img31 from './p_img31.png'
import p_img32 from './p_img32.png'
import p_img33 from './p_img33.png'
import p_img34 from './p_img34.png'
import p_img35 from './p_img35.png'
import p_img36 from './p_img36.png'
import p_img37 from './p_img37.png'
import p_img38 from './p_img38.png'
import p_img39 from './p_img39.png'
import p_img40 from './p_img40.png'
import p_img41 from './p_img41.png'
import p_img42 from './p_img42.png'
import p_img43 from './p_img43.png'
import p_img44 from './p_img44.png'
import p_img45 from './p_img45.png'
import p_img46 from './p_img46.png'
import p_img47 from './p_img47.png'
import p_img48 from './p_img48.png'
import p_img49 from './p_img49.png'
import p_img50 from './p_img50.png'
import p_img51 from './p_img51.png'
import p_img52 from './p_img52.png'


import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    {
    _id: "aaaaa",
    name: "Dell OptiPlex Professional PC",
    description: "A high-performance Dell desktop computer designed for professionals. Powered by an Intel Core i7 processor, 16GB RAM, and 512GB SSD for seamless multitasking, reliability, and top-tier productivity.",
    price: 1200,
    image: [p_img1],
    category: "Laptops & Consoles",
    subCategory: "Personal/Student",
    sizes: ["256GB SSD", "512GB SSD", "1TB SSD"],
    date: 1716634345448,
    bestseller: true
},

    {
    _id: "aaaab",
    name: "Amazfit Bip 5 Smartwatch",
    description: "A sleek and lightweight smartwatch designed for everyday use. Features a 1.9-inch AMOLED display, heart-rate and sleep tracking, Bluetooth connectivity, and up to 10 days of battery life — perfect for personal and student lifestyles.",
    price: 90, // realistic USD price
    image: [p_img2_1, p_img2_2, p_img2_3, p_img2_4],
    category: "Smartphones & Smartwatches",
    subCategory: "Personal/Student",
    sizes: ["Black", "Silver", "Rose Gold"], // color options 
    date: 1716621345448,
    bestseller: true
},
   {
    _id: "aaaac",
    name: "Sony WH-CH520 Wireless Headphones",
    description: "Comfortable on-ear Bluetooth headphones designed for personal and student use. Offer up to 50 hours of battery life, quick charging, clear sound, and built-in microphone for calls and online classes.",
    price: 68, // realistic USD price
    image: [p_img3],
    category: "Headphones & Earpodes",
    subCategory: "Personal/Student",
    sizes: ["Black", "Blue", "Beige"], // color options
    date: 1716234545448,
    bestseller: true
},
   {
    _id: "aaaad",
    name: "Apple AirPods 2nd Generation",
    description: "Compact and reliable wireless earpods designed for everyday personal use. Feature high-quality sound, quick Bluetooth pairing, voice assistant support, and over 24 hours of listening time with the charging case.",
    price: 129, // realistic USD price
    image: [p_img4],
    category: "Headphones & Earpodes",
    subCategory: "Personal/Student",
    sizes: ["White", "Black", "Midnight Blue"], // color variations
    date: 1716621345448,
    bestseller: true
},
    {
    _id: "aaaae",
    name: "Samsung Galaxy A15 Smartphone",
    description: "A stylish and reliable smartphone designed for personal and student use. Features a 6.5-inch Super AMOLED display, 128GB storage, 6GB RAM, and a long-lasting 5000mAh battery — perfect for study, entertainment, and everyday tasks.",
    price: 220, // realistic USD price
    image: [p_img5],
    category: "Smartphones & Smartwatches",
    subCategory: "Personal/Student",
    sizes: ["64GB", "128GB", "256GB"], // storage options
    date: 1716622345448,
    bestseller: true
},
    {
    _id: "aaaaf",
    name: "Garmin Venu 3 Smartwatch",
    description: "A premium smartwatch built for productivity and performance. Features a vivid AMOLED display, advanced health tracking, GPS navigation, and compatibility with both Android and iOS devices. Designed to keep professionals connected and active throughout the day.",
    price: 349, // realistic USD price
    image: [p_img6],
    category: "Smartphones & Smartwatches",
    subCategory: "Professional",
    sizes: ["Silver", "Black", "Slate Gray"], // color options
    date: 1716623423448,
    bestseller: true
},

   {
    _id: "aaaag",
    name: "Samsung Galaxy Watch 6 Classic",
    description: "A sophisticated smartwatch that blends style and performance. Equipped with a rotating bezel, AMOLED display, advanced fitness tracking, ECG monitoring, and seamless smartphone integration to help professionals stay organized and connected.",
    price: 399, // realistic USD price
    image: [p_img7],
    category: "Smartphones & Smartwatches",
    subCategory: "Professional",
    sizes: ["Black", "Silver", "Graphite"], // color options
    date: 1716621542448,
    bestseller: false
},

    {
    _id: "aaaah",
    name: "Xiaomi Redmi Watch 4",
    description: "A modern smartwatch featuring a large AMOLED display, precise fitness and sleep tracking, Bluetooth calling, and over 150 sport modes. Offers an excellent balance of performance, comfort, and long battery life.",
    price: 120, // realistic USD price
    image: [p_img8],
    category: "Smartphones & Smartwatches",
    subCategory: "Personal/Student",
    sizes: ["Black", "Gray", "Ivory"], // color options
    date: 1716622345448,
    bestseller: false
},

   {
    _id: "aaaai",
    name: "Oppo A78 5G Smartphone",
    description: "A sleek and efficient smartphone featuring a 6.56-inch HD+ display, MediaTek Dimensity 700 processor, 8GB RAM, and 128GB storage. Offers smooth 5G performance, long-lasting battery life, and a stylish modern design.",
    price: 230, // realistic USD price
    image: [p_img9],
    category: "Smartphones & Smartwatches",
    subCategory: "Personal/Student",
    sizes: ["128GB", "256GB"], // realistic storage options
    date: 1716621235448,
    bestseller: false
},

   {
    _id: "aaaaj",
    name: "Razer BlackShark V2 Gaming Headset",
    description: "High-performance wired gaming headset engineered for clear communication and immersive sound. Features TriForce Titanium 50mm drivers, a detachable noise-cancelling microphone, and advanced audio controls for a superior gaming experience.",
    price: 99, // realistic USD price
    image: [p_img10],
    category: "Headphones & Earpodes",
    subCategory: "Gaming",
    sizes: ["Black", "Green", "White"], // color options
    date: 1716622235448,
    bestseller: false
},

    {
    _id: "aaaak",
    name: "Samsung Galaxy A25 5G Smartphone",
    description: "A stylish mid-range smartphone with a 6.5-inch Super AMOLED display, Exynos 1280 processor, 6GB RAM, and 128GB storage. Delivers smooth 5G connectivity, long-lasting battery life, and high-quality triple camera performance.",
    price: 250, // realistic USD price
    image: [p_img11],
    category: "Smartphones & Smartwatches",
    subCategory: "Personal/Student",
    sizes: ["128GB", "256GB", "512GB"], // realistic storage options
    date: 1716623345448,
    bestseller: false
},

   {
    _id: "aaaal",
    name: "Samsung Galaxy S24 Ultra 5G",
    description: "A flagship smartphone engineered for productivity and performance. Features a 6.8-inch Dynamic AMOLED 2X display, Snapdragon 8 Gen 3 processor, S Pen support, and an advanced 200MP quad camera system for exceptional clarity and detail.",
    price: 1199, // realistic USD price for pro use
    image: [p_img12],
    category: "Smartphones & Smartwatches",
    subCategory: "Professional",
    sizes: ["256GB", "512GB", "1TB"], // realistic storage options
    date: 1716624445448,
    bestseller: false
},

    {
    _id: "aaaam",
    name: "Apple iMac 24-inch (M3, 2024)",
    description: "The Apple iMac 24-inch (M3) combines sleek design with powerful performance. Equipped with the Apple M3 chip, a 4.5K Retina display, and advanced graphics capabilities, it’s ideal for creative professionals, designers, and developers seeking speed and precision in a compact all-in-one desktop.",
    price: 1599, // realistic USD price
    image: [p_img13],
    category: "Laptops & Consoles",
    subCategory: "Professional",
    sizes: ["256GB SSD", "512GB SSD", "1TB SSD"], // realistic configuration options
    date: 1716625545448,
    bestseller: false
},

    {
    _id: "aaaan",
    name: "HP ProBook 450 G10 Laptop",
    description: "The HP ProBook 450 G10 delivers solid performance and reliability for professionals. Featuring a 13th Gen Intel Core i7 processor, 16GB RAM, and fast SSD storage, it’s designed to handle demanding tasks like data analysis, design, and multitasking with ease — all in a sleek and durable chassis.",
    price: 1199, // realistic USD price
    image: [p_img14],
    category: "Laptops & Consoles",
    subCategory: "Professional",
    sizes: ["512GB SSD", "1TB SSD", "2TB SSD"], // realistic configuration options
    date: 1716626645448,
    bestseller: false
},

   {
    _id: "aaaao",
    name: "Lenovo ThinkPad X1 Carbon Gen 11",
    description: "The Lenovo ThinkPad X1 Carbon Gen 11 is a top-tier business laptop built for speed, durability, and productivity. It features a 13th Gen Intel Core i7 processor, ultra-fast SSD storage, and a vivid 14-inch 2.8K display. Its lightweight carbon-fiber design and long battery life make it a reliable companion for demanding professionals.",
    price: 1499, // realistic USD price
    image: [p_img15],
    category: "Laptops & Consoles",
    subCategory: "Professional",
    sizes: ["512GB SSD", "1TB SSD", "2TB SSD", "4TB SSD"], // added 4TB option
    date: 1716627745448,
    bestseller: false
},

   {
    _id: "aaaap",
    name: "Sony DualSense Wireless Controller",
    description: "The Sony DualSense Wireless Controller brings immersive gaming to life with adaptive triggers, haptic feedback, and a refined ergonomic design. Its responsive controls and long battery life make it the perfect companion for PlayStation and PC gamers seeking precision and comfort.",
    price: 69, // realistic USD price
    image: [p_img16],
    category: "Laptops & Consoles",
    subCategory: "Gaming",
    sizes: ["Standard Edition", "Midnight Black", "Cosmic Red", "Galactic Purple"], // realistic color/style options
    date: 1716628845448,
    bestseller: false
},

    {
    _id: "aaaaq",
    name: "Google Pixel 8 Pro",
    description: "The Google Pixel 8 Pro combines intelligent performance with professional-grade photography. Featuring the Google Tensor G3 chip, a brilliant 6.7-inch LTPO OLED display, and an advanced triple-lens camera system, it offers seamless multitasking, AI-enhanced tools, and exceptional image quality for creative and business use.",
    price: 1099, // realistic USD price
    image: [p_img17],
    category: "Smartphones & Smartwatches",
    subCategory: "Professional",
    sizes: ["128GB", "256GB", "512GB", "1TB"], // realistic storage options
    date: 1716629945448,
    bestseller: false
},

   {
    _id: "aaaar",
    name: "Apple iPhone 15",
    description: "The Apple iPhone 15 offers exceptional performance with the A16 Bionic chip, a stunning Super Retina XDR display, and advanced camera technology. Its elegant design, powerful performance, and long battery life make it an excellent choice for everyday communication, photography, and entertainment.",
    price: 899, // realistic USD price
    image: [p_img18],
    category: "Smartphones & Smartwatches",
    subCategory: "Personal/Student",
    sizes: ["128GB", "256GB", "512GB", "1TB"], // realistic storage options
    date: 1716631045448,
    bestseller: false
},

    {
    _id: "aaaas",
    name: "Sony MDR-7506 Studio Headphones",
    description: "The Sony MDR-7506 delivers clear, detailed sound with deep bass and crisp highs. Designed with comfort and durability in mind, these classic wired headphones are ideal for music listening, content creation, and studio monitoring. Their foldable design makes them easy to store and carry anywhere.",
    price: 99, // realistic USD price
    image: [p_img19],
    category: "Headphones & Earpodes",
    subCategory: "Personal/Student",
    sizes: ["Standard Edition", "With Carry Case", "Coiled Cable", "Straight Cable"], // realistic variations
    date: 1716632145448,
    bestseller: false
},

    {
    _id: "aaaat",
    name: "Apple MacBook Air 13-inch (M2, 2023)",
    description: "The Apple MacBook Air 13-inch (M2) delivers exceptional performance in a thin, lightweight design. Featuring the Apple M2 chip, vibrant Retina display, and all-day battery life, it’s perfect for studying, note-taking, and multimedia tasks — combining power and portability in one sleek device.",
    price: 999, // realistic USD price
    image: [p_img20],
    category: "Laptops & Consoles",
    subCategory: "Personal/Student",
    sizes: ["256GB SSD", "512GB SSD", "1TB SSD", "2TB SSD"], // realistic configuration options
    date: 1716633245448,
    bestseller: false
},

    {
    _id: "aaaau",
    name: "Dell Inspiron 14 Laptop",
    description: "The Dell Inspiron 14 offers dependable performance and everyday versatility. Equipped with a 13th Gen Intel Core i5 processor, 8GB RAM, and fast SSD storage, it’s ideal for browsing, streaming, work, and study. Its sleek design, responsive display, and long battery life make it perfect for daily use.",
    price: 679, // realistic USD price
    image: [p_img21],
    category: "Laptops & Consoles",
    subCategory: "Personal/Student",
    sizes: ["256GB SSD", "512GB SSD", "1TB SSD", "2TB SSD"], // realistic configuration options
    date: 1716634345448,
    bestseller: false
},

    {
    _id: "aaaav",
    name: "HP Pavilion 15 Laptop",
    description: "The HP Pavilion 15 delivers smooth performance and portability for studying, projects, and entertainment. Powered by a 13th Gen Intel Core i5 processor, it features a 15.6-inch Full HD display, 16GB RAM, and fast SSD storage. Its lightweight build and long-lasting battery make it an excellent everyday laptop.",
    price: 649, // realistic USD price
    image: [p_img22],
    category: "Laptops & Consoles",
    subCategory: "Personal/Student",
    sizes: ["256GB SSD", "512GB SSD", "1TB SSD", "2TB SSD"], // realistic storage options
    date: 1716635445448,
    bestseller: false
},

   {
    _id: "aaaaw",
    name: "OnePlus 12",
    description: "The OnePlus 12 delivers powerful performance and premium design, making it ideal for daily use. Equipped with the Snapdragon 8 Gen 3 processor, a vibrant 6.8-inch AMOLED display, and a triple-lens camera system, it offers smooth multitasking, exceptional visuals, and long battery life with ultra-fast charging.",
    price: 899, // realistic USD price
    image: [p_img23],
    category: "Smartphones & Smartwatches",
    subCategory: "Personal/Student",
    sizes: ["128GB", "256GB", "512GB", "1TB"], // realistic storage options
    date: 1716636545448,
    bestseller: false
},

   {
    _id: "aaaax",
    name: "Oppo Enco X2 Wireless Earbuds",
    description: "The Oppo Enco X2 Wireless Earbuds deliver studio-quality sound with advanced noise cancellation and dual-device connectivity, making them ideal for professional calls, meetings, and focused work sessions. With a premium design, long battery life, and fast charging, they combine comfort and performance for daily professional use.",
    price: 179,
    image: [p_img24],
    category: "Headphones & Earpodes",
    subCategory: "Professional",
    sizes: ["Black", "White", "Silver", "Matte Gray"], // 4 realistic options
    date: 1716637645448,
    bestseller: false
},

   {
    _id: "aaaay",
    name: "Xiaomi Redmi Note 13 Pro",
    description: "The Xiaomi Redmi Note 13 Pro is a sleek and powerful smartphone designed for personal and student use. Featuring a stunning AMOLED display, high-resolution camera system, and a long-lasting battery, it delivers excellent performance for communication, entertainment, and everyday tasks.",
    price: 349,
    image: [p_img25],
    category: "Smartphones & Smartwatches",
    subCategory: "Personal/Student",
    sizes: ["128GB", "256GB", "512GB", "1TB"], // 4 realistic storage options
    date: 1716638745448,
    bestseller: false
},

  {
    _id: "aaaaz",
    name: "Dell XPS 15 Laptop",
    description: "The Dell XPS 15 is a high-performance laptop designed for professional work. Equipped with a 13th Gen Intel Core i7 processor, 16GB RAM, and fast SSD storage, it features a 15.6-inch 4K OLED display and dedicated graphics for creative tasks, coding, and multitasking. Its sleek, durable design ensures reliability for demanding professionals.",
    price: 1799, // realistic USD price
    image: [p_img26],
    category: "Laptops & Consoles",
    subCategory: "Professional",
    sizes: ["512GB SSD", "1TB SSD", "2TB SSD", "4TB SSD"], // 4 realistic storage options
    date: 1716639845448,
    bestseller: false
},

    {
    _id: "aaaba",
    name: "Realme 12 Pro",
    description: "The Realme 12 Pro is a stylish and powerful smartphone perfect for personal and student use. It features a 6.7-inch AMOLED display, a versatile camera system, and a long-lasting battery with fast charging, providing smooth performance for daily tasks, social media, and entertainment.",
    price: 399, // realistic USD price
    image: [p_img27],
    category: "Smartphones & Smartwatches",
    subCategory: "Personal/Student",
    sizes: ["128GB", "256GB", "512GB", "1TB"], // 4 realistic storage options
    date: 1716640945448,
    bestseller: false
},
    {
    _id: "aaabb",
    name: "Samsung Galaxy Watch 6",
    description: "The Samsung Galaxy Watch 6 combines sleek design with advanced fitness and health tracking features. With a vibrant AMOLED display, heart rate monitoring, sleep tracking, and seamless smartphone connectivity, it’s perfect for personal use and daily activity management.",
    price: 299, // realistic USD price
    image: [p_img28],
    category: "Smartphones & Smartwatches",
    subCategory: "Personal/Student",
    sizes: ["40mm", "44mm", "46mm", "Titanium Edition"], // 4 realistic options
    date: 1716642045448,
    bestseller: false
},

   {
    _id: "aaabc",
    name: "Sony WF-1000XM5 Wireless Earbuds",
    description: "The Sony WF-1000XM5 Wireless Earbuds provide excellent sound quality with Active Noise Cancellation and adaptive sound control. Lightweight and comfortable, they are ideal for music, calls, and everyday personal use, offering long battery life and fast charging.",
    price: 229, // realistic USD price
    image: [p_img29],
    category: "Headphones & Earpodes",
    subCategory: "Personal/Student",
    sizes: ["Black", "Silver", "Blue", "Beige"], // 4 realistic color options
    date: 1716643145448,
    bestseller: false
},

    {
    _id: "aaabd",
    name: "Bose QuietComfort Earbuds II",
    description: "The Bose QuietComfort Earbuds II deliver professional-grade audio with industry-leading Active Noise Cancellation, precise sound calibration, and high-fidelity performance. Designed for professionals on calls, meetings, or content creation, they provide comfort, durability, and extended battery life for all-day use.",
    price: 299, // realistic USD price
    image: [p_img30],
    category: "Headphones & Earpodes",
    subCategory: "Professional",
    sizes: ["Black", "Silver", "Midnight Blue", "Arctic White"], // 4 realistic options
    date: 1716644245448,
    bestseller: false
},

    {
    _id: "aaabe",
    name: "Fitbit Versa 4",
    description: "The Fitbit Versa 4 is a versatile smartwatch designed for personal use. It offers heart rate monitoring, sleep tracking, activity tracking, and smartphone notifications. Lightweight and comfortable, it’s ideal for daily wellness, fitness, and staying connected on the go.",
    price: 199, // realistic USD price
    image: [p_img31],
    category: "Smartphones & Smartwatches",
    subCategory: "Personal/Student",
    sizes: ["Standard Edition", "Graphite", "Pink Clay", "Platinum"], // 4 realistic options
    date: 1716645345448,
    bestseller: false
},

   {
    _id: "aaabf",
    name: "Samsung Galaxy Tab S9 Ultra",
    description: "The Samsung Galaxy Tab S9 Ultra is a high-performance tablet built for professional use. Featuring a 14.6-inch AMOLED display, Snapdragon 8 Gen 3 processor, and S Pen support, it excels in multitasking, creative work, and productivity applications. Its long battery life and premium design make it ideal for professionals on the go.",
    price: 1099, // realistic USD price
    image: [p_img32],
    category: "Smartphones & Smartwatches",
    subCategory: "Professional",
    sizes: ["256GB", "512GB", "1TB", "2TB"], // 4 realistic storage options
    date: 1716646445448,
    bestseller: false
},

    {
    _id: "aaabg",
    name: "Apple iPad Pro 12.9-inch (M2, 2022)",
    description: "The Apple iPad Pro 12.9-inch with the M2 chip offers top-tier performance for professional use. Featuring a Liquid Retina XDR display, advanced camera system, and support for Apple Pencil and Magic Keyboard, it’s perfect for multitasking, creative work, and productivity on the go.",
    price: 1099, // realistic USD price
    image: [p_img33],
    category: "Smartphones & Smartwatches",
    subCategory: "Professional",
    sizes: ["128GB", "256GB", "512GB", "1TB"], // 4 realistic storage options
    date: 1716647545448,
    bestseller: false
},

   {
    _id: "aaabh",
    name: "Apple iMac 24-inch (M1, 2021)",
    description: "The Apple iMac 24-inch with M1 chip delivers powerful performance for personal use. Featuring a stunning 4.5K Retina display, 8-core CPU, 7-core GPU, and fast SSD storage, it’s perfect for browsing, streaming, and creative tasks at home. Its sleek design and vibrant colors make it a stylish addition to any workspace.",
    price: 1299, // realistic USD price
    image: [p_img34],
    category: "Laptops & Consoles",
    subCategory: "Personal/Student",
    sizes: ["256GB SSD", "512GB SSD", "1TB SSD", "2TB SSD"], // 4 realistic storage options
    date: 1716648645448,
    bestseller: false
},

    {
    _id: "aaabi",
    name: "Samsung Galaxy Tab S9+",
    description: "The Samsung Galaxy Tab S9+ is a premium tablet designed for professional use. Featuring a 12.4-inch AMOLED display, Snapdragon 8 Gen 3 processor, and S Pen support, it delivers exceptional performance for multitasking, creative work, and productivity applications. Long battery life and a sleek design make it perfect for professionals on the go.",
    price: 999, // realistic USD price
    image: [p_img35],
    category: "Smartphones & Smartwatches",
    subCategory: "Professional",
    sizes: ["256GB", "512GB", "1TB", "2TB"], // 4 realistic storage options
    date: 1716649745448,
    bestseller: false
},

    {
    _id: "aaabj",
    name: "Alienware Aurora R16 Desktop",
    description: "The Alienware Aurora R16 Desktop is a high-performance PC designed for professional workloads and gaming. Equipped with Intel Core i9 processors, NVIDIA RTX 4090 graphics, up to 128GB RAM, and ultra-fast SSD storage, it excels in 3D rendering, video editing, software development, and other demanding tasks. Its advanced cooling system and customizable RGB lighting ensure both reliability and style for professional setups.",
    price: 2599, // realistic USD price
    image: [p_img36],
    category: "Laptops & Consoles",
    subCategory: "Professional",
    sizes: ["512GB SSD", "1TB SSD", "2TB SSD", "4TB SSD"], // 4 realistic storage options
    date: 1716650845448,
    bestseller: false
},

   {
    _id: "aaabk",
    name: "Sony PlayStation 5 Console",
    description: "The Sony PlayStation 5 is the next-generation gaming console delivering stunning graphics, ultra-fast SSD load times, and immersive gameplay with the DualSense wireless controller. It supports 4K gaming, ray tracing, and a growing library of exclusive titles, making it perfect for both casual and hardcore gamers.",
    price: 499, // realistic USD price
    image: [p_img37],
    category: "Laptops & Consoles",
    subCategory: "Gaming",
    sizes: ["Standard Edition", "Digital Edition", "White", "Black"], // 4 realistic options
    date: 1716651945448,
    bestseller: false
},

   {
    _id: "aaabl",
    name: "Razer BlackShark V2 Pro",
    description: "The Razer BlackShark V2 Pro is a wireless gaming headset designed for immersive gameplay. Featuring THX 7.1 spatial audio, advanced noise-canceling microphone, and ultra-lightweight design, it provides comfort and precision for long gaming sessions. Perfect for both casual and competitive gamers.",
    price: 179, // realistic USD price
    image: [p_img38],
    category: "Headphones & Earpodes",
    subCategory: "Gaming",
    sizes: ["Black", "White", "Green", "Mercury"], // 4 realistic color options
    date: 1716653045448,
    bestseller: false
},

   {
    _id: "aaabm",
    name: "Garmin Venu 3",
    description: "The Garmin Venu 3 is a stylish and versatile smartwatch designed for personal use. It features health and fitness tracking, heart rate monitoring, sleep analysis, and smartphone notifications. Lightweight and comfortable, it’s perfect for daily wellness, activity tracking, and staying connected.",
    price: 349, // realistic USD price
    image: [p_img39],
    category: "Smartphones & Smartwatches",
    subCategory: "Personal/Student",
    sizes: ["Black", "Silver", "Rose Gold", "Slate"], // 4 realistic color options
    date: 1716654145448,
    bestseller: false
},


   {
    _id: "aaabn",
    name: "Sennheiser Momentum True Wireless 3",
    description: "The Sennheiser Momentum True Wireless 3 earbuds deliver professional-grade sound quality with deep bass, clear mids, and crisp highs. Featuring Active Noise Cancellation, customizable touch controls, and long battery life, they are perfect for professionals needing premium audio for calls, music, and content creation.",
    price: 299, // realistic USD price
    image: [p_img40],
    category: "Headphones & Earpodes",
    subCategory: "Professional",
    sizes: ["Black", "Silver", "White", "Copper"], // 4 realistic color options
    date: 1716655245448,
    bestseller: false
},

   {
    _id: "aaabo",
    name: "Sony WF-C500 Wireless Earbuds",
    description: "The Sony WF-C500 Wireless Earbuds offer high-quality sound in a compact and comfortable design. With long battery life, clear audio, and easy connectivity, they are perfect for personal listening, music, and calls on the go.",
    price: 99, // realistic USD price
    image: [p_img41],
    category: "Headphones & Earpodes",
    subCategory: "Personal/Student",
    sizes: ["Black", "White", "Blue", "Pink"], // 4 realistic color options
    date: 1716656345448,
    bestseller: false
},

   {
    _id: "aaabp",
    name: "JBL Tune 230NC TWS",
    description: "The JBL Tune 230NC True Wireless Earbuds deliver crisp audio and active noise cancellation in a compact design. With up to 40 hours of combined playback, touch controls, and a comfortable fit, they are perfect for personal listening, commuting, and everyday use.",
    price: 129, // realistic USD price
    image: [p_img42],
    category: "Headphones & Earpodes",
    subCategory: "Personal/Student",
    sizes: ["Black", "White", "Blue", "Pink"], // 4 realistic color options
    date: 1716657445448,
    bestseller: false
},

   {
    _id: "aaabq",
    name: "Xbox Wireless Controller Series X",
    description: "The Xbox Wireless Controller Series X offers precision, comfort, and durability for gaming enthusiasts. Featuring textured grips, responsive buttons, and Bluetooth connectivity, it works seamlessly with Xbox consoles and PC for an immersive gaming experience.",
    price: 69, // realistic USD price
    image: [p_img43],
    category: "Laptops & Consoles",
    subCategory: "Gaming",
    sizes: ["Carbon Black", "Robot White", "Shock Blue", "Pulse Red"], // 4 realistic color options
    date: 1716658545448,
    bestseller: false
},

   {
    _id: "aaabr",
    name: "Microsoft Xbox Series X",
    description: "The Xbox Series X is a next-generation gaming console delivering 4K gaming, ultra-fast load times, and immersive gameplay. With support for backward compatibility, Quick Resume, and a large library of games, it’s perfect for both casual and hardcore gamers.",
    price: 499, // realistic USD price
    image: [p_img44],
    category: "Laptops & Consoles",
    subCategory: "Gaming",
    sizes: ["Standard Edition", "Digital Edition", "White", "Carbon Black"], // 4 realistic options
    date: 1716659645448,
    bestseller: false
},

   {
    _id: "aaabs",
    name: "iPhone 15",
    description: "The iPhone 15 features a sleek design, advanced camera system, and powerful A17 Bionic chip. With iOS optimization, Face ID, and long battery life, it’s perfect for everyday personal use, photography, streaming, and staying connected.",
    price: 799, // realistic USD price
    image: [p_img45],
    category: "Smartphones & Smartwatches",
    subCategory: "Personal/Student",
    sizes: ["128GB", "256GB", "512GB", "1TB"], // 4 realistic storage options
    date: 1716660745448,
    bestseller: false
},

    {
    _id: "aaabt",
    name: "iPhone 13",
    description: "The iPhone 13 features a powerful A15 Bionic chip, dual-camera system, and Super Retina XDR display. It offers excellent performance, photography capabilities, and battery life, making it ideal for personal use and everyday connectivity.",
    price: 699, // realistic USD price
    image: [p_img46],
    category: "Smartphones & Smartwatches",
    subCategory: "Personal/Student",
    sizes: ["128GB", "256GB", "512GB", "1TB"], // 4 realistic storage options
    date: 1716661845448,
    bestseller: false
},

   {
    _id: "aaabu",
    name: "Alienware x17 R2 Laptop",
    description: "The Alienware x17 R2 is a high-performance laptop designed for professional and gaming workloads. Featuring Intel Core i9 processors, NVIDIA RTX 3080 Ti graphics, up to 64GB RAM, and fast SSD storage, it delivers exceptional performance for 3D rendering, video editing, and software development. Its sleek design and advanced cooling system ensure reliability and style for professional setups.",
    price: 2699, // realistic USD price
    image: [p_img47],
    category: "Laptops & Consoles",
    subCategory: "Professional",
    sizes: ["512GB SSD", "1TB SSD", "2TB SSD", "4TB SSD"], // 4 realistic storage options
    date: 1716662945448,
    bestseller: false
},

   {
    _id: "aaabv",
    name: "iPhone 17 Pro",
    description: "The iPhone 17 Pro features the latest A19 Bionic chip, ProMotion XDR display, and advanced camera system for professional-quality photos and videos. With long battery life, 5G connectivity, and enhanced iOS features, it’s perfect for personal use and staying productive on the go.",
    price: 1199, // realistic USD price
    image: [p_img48],
    category: "Smartphones & Smartwatches",
    subCategory: "Professional",
    sizes: ["128GB", "256GB", "512GB", "1TB"], // 4 realistic storage options
    date: 1716664045448,
    bestseller: false
},
    {
    _id: "aaabw",
    name: "Alienware Aurora R16 Gaming Desktop",
    description: "The Alienware Aurora R16 Gaming Desktop is built for high-performance gaming with Intel Core i9 processors, NVIDIA RTX 4090 graphics, up to 128GB RAM, and ultra-fast SSD storage. It delivers smooth gameplay, stunning visuals, and advanced cooling for extended gaming sessions, perfect for serious gamers.",
    price: 2899, // realistic USD price
    image: [p_img49],
    category: "Laptops & Consoles",
    subCategory: "Gaming",
    sizes: ["512GB SSD", "1TB SSD", "2TB SSD", "4TB SSD"], // 4 realistic storage options
    date: 1716665145448,
    bestseller: false
},

   {
    _id: "aaabx",
    name: "Alienware Aurora R17 Multi-Screen Gaming Desktop",
    description: "The Alienware Aurora R17 Multi-Screen Gaming Desktop is a powerhouse designed for immersive gaming with multi-monitor setups. Equipped with Intel Core i9 processors, NVIDIA RTX 4090 graphics, up to 128GB RAM, and ultra-fast SSD storage, it delivers seamless performance, stunning visuals, and advanced cooling for extended gaming sessions.",
    price: 3299, // realistic USD price
    image: [p_img50],
    category: "Laptops & Consoles",
    subCategory: "Gaming",
    sizes: ["512GB SSD", "1TB SSD", "2TB SSD", "4TB SSD"], // 4 realistic storage options
    date: 1716666245448,
    bestseller: false
},

   {
    _id: "aaaby",
    name: "DualSense Edge Wireless Controller",
    description: "The DualSense Edge Wireless Controller offers precision and customizable controls for an immersive gaming experience. With adaptive triggers, haptic feedback, and interchangeable thumbsticks, it is ideal for professional and casual gamers alike.",
    price: 199, // realistic USD price
    image: [p_img51],
    category: "Laptops & Consoles",
    subCategory: "Gaming",
    sizes: ["Carbon Black", "Cosmic Red", "Starlight White", "Shock Blue"], // 4 realistic color options
    date: 1716667345448,
    bestseller: false
},

   {
    _id: "aaabz",
    name: "iPhone 12",
    description: "The iPhone 12 features a powerful A14 Bionic chip, Super Retina XDR display, and dual-camera system for high-quality photos and videos. With 5G connectivity and long battery life, it’s perfect for personal use, browsing, streaming, and staying connected.",
    price: 599, // realistic USD price
    image: [p_img52],
    category: "Smartphones & Smartwatches",
    subCategory: "Professional",
    sizes: ["64GB", "128GB", "256GB", "512GB"], // 4 realistic storage options
    date: 1716668445448,
    bestseller: false
},

]