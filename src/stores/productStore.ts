import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  brand: string;
}

export const useProductStore = defineStore('products', () => {
  const products = ref<Product[]>([
    {
      id: 1,
      name: 'Redmi Note 13 Pro',
      description: 'Redmi Note 13 Pro - 108MP camera with 120Hz AMOLED display and Snapdragon 7s Gen 2',
      price: 24999.00,
      image: 'https://i.ytimg.com/vi/dIaTSYXrmmA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC9Ryb5vCrxcll19sYbzIeJ7BiQGw',
      category: 'Phones',
      brand: 'Xiaomi',
    },
    {
      id: 2,
      name: 'Samsung Galaxy A54',
      description: 'Samsung Galaxy A54 - 50MP OIS camera, 6.4" Super AMOLED display with powerful Exynos 1380',
      price: 29999.00,
      image: 'https://assets.thehansindia.com/h-upload/2024/12/02/1502422-garena-free-fire-max-redeem-codes-for-december-2-win-diamonds-pets-cool-skins-and-more-rewards-today-5.webp',
      category: 'Phones',
      brand: 'Samsung',
    },
    {
      id: 3,
      name: 'OnePlus Nord CE 4',
      description: 'OnePlus Nord CE 4 - Snapdragon 7 Gen 3, 50MP Sony camera with OxygenOS and 5000mAh battery',
      price: 27999.00,
      image: 'https://i.ytimg.com/vi/BGjOhXhdow4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBwtShBvziq2V3yeO_3M6Vcmvaqtg',
      category: 'Phones',
      brand: 'OnePlus',
    },
    {
      id: 4,
      name: 'Poco F6',
      description: 'Poco F6 - Snapdragon 8s Gen 3, 50MP camera with OIS and 120W fast charging technology',
      price: 29999.00,
      image: 'https://cdn.beebom.com/mobile/2024/03/Poco-F6.png',
      category: 'Phones',
      brand: 'Poco',
    },
    {
      id: 5,
      name: 'iQOO Z9',
      description: 'iQOO Z9 - MediaTek Dimensity 7200, 64MP OIS camera and 120Hz AMOLED display',
      price: 19999.00,
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/iqoo-12-190536879-16x9_0.png?VersionId=pB1KoKFPxcJ4l8ML1ax5HJ7tqUfDHXxh&size=690:388',
      category: 'Phones',
      brand: 'iQOO',
    },
    {
      id: 6,
      name: 'Realme GT Neo 5 SE',
      description: 'Realme GT Neo 5 SE - Snapdragon 7+ Gen 2, 50MP Sony IMX890 camera and 100W fast charging',
      price: 32999.00,
      image: 'https://i.ytimg.com/vi/dIaTSYXrmmA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC9Ryb5vCrxcll19sYbzIeJ7BiQGw',
      category: 'Phones',
      brand: 'Realme',
    },
    {
      id: 7,
      name: 'Nothing Phone 2a',
      description: 'Nothing Phone 2a - MediaTek Dimensity 7200 Pro, Glyph interface and clean NothingOS experience',
      price: 25999.00,
      image: 'https://i.ytimg.com/vi/BGjOhXhdow4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBwtShBvziq2V3yeO_3M6Vcmvaqtg',
      category: 'Phones',
      brand: 'Nothing',
    },
    {
      id: 8,
      name: 'Motorola Edge 50 Pro',
      description: 'Motorola Edge 50 Pro - Snapdragon 7 Gen 3, 50MP camera with Pantone validated display',
      price: 34999.00,
      image: 'https://i.ytimg.com/vi/BGjOhXhdow4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBwtShBvziq2V3yeO_3M6Vcmvaqtg',
      category: 'Phones',
      brand: 'Motorola',
    },
    {
      id: 9,
      name: 'Vivo V30 Pro',
      description: 'Vivo V30 Pro - MediaTek Dimensity 8200, Zeiss optics camera and 3D curved display',
      price: 46999.00,
      image: 'https://i.ytimg.com/vi/BGjOhXhdow4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBwtShBvziq2V3yeO_3M6Vcmvaqtg',
      category: 'Phones',
      brand: 'Vivo',
    },
    {
      id: 10,
      name: 'OPPO Reno 11 Pro',
      description: 'OPPO Reno 11 Pro - MediaTek Dimensity 8200, 50MP Sony IMX890 camera and ColorOS 14',
      price: 43999.00,
      image: 'https://i.ytimg.com/vi/STuiGCfBWc8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLATuR9w6_CSB2QUMp8v5UKvkSvdUA',
      category: 'Phones',
      brand: 'OPPO',
    },
    {
      id: 11,
      name: 'Xiaomi 13T',
      description: 'Xiaomi 13T - MediaTek Dimensity 8200 Ultra, Leica optics and MIUI 14 with 67W charging',
      price: 39999.00,
      image: 'https://www.techadvisor.com/wp-content/uploads/2025/03/best-mid-range-phones-2024-main-2.jpg?quality=50&strip=all&w=1024',
      category: 'Phones',
      brand: 'Xiaomi',
    },
    {
      id: 12,
      name: 'Samsung Galaxy S23 FE',
      description: 'Samsung Galaxy S23 FE - Exynos 2200, 50MP camera with 8K video and wireless charging support',
      price: 49999.00,
      image: 'https://www.techadvisor.com/wp-content/uploads/2025/03/best-mid-range-phones-2024-main-2.jpg?quality=50&strip=all&w=1024',
      category: 'Phones',
      brand: 'Samsung',
    },
    {
      id: 13,
      name: 'OnePlus 12R',
      description: 'OnePlus 12R - Snapdragon 8 Gen 2, 50MP Sony sensor and 100W SUPERVOOC charging',
      price: 42999.00,
      image: 'https://www.livemint.com/lm-img/img/2024/07/16/600x338/nord_4_1721150978222_1721150986952.png',
      category: 'Phones',
      brand: 'OnePlus',
    },
    {
      id: 14,
      name: 'Tecno Phantom V Fold',
      description: 'Tecno Phantom V Fold - MediaTek Dimensity 9000+, foldable AMOLED display with 50MP camera',
      price: 49999.00,
      image: 'https://i.ebayimg.com/images/g/DM8AAOSw-0VlcZjC/s-l1200.jpg',
      category: 'Phones',
      brand: 'Tecno',
    },
    {
      id: 15,
      name: 'Poco X6 Pro',
      description: 'Poco X6 Pro - MediaTek Dimensity 8300 Ultra, 108MP camera with 67W turbo charging',
      price: 26999.00,
      image: 'https://www.livemint.com/lm-img/img/2024/07/08/600x338/1718895357589_1718897863947_1720429060523.jpg',
      category: 'Phones',
      brand: 'Poco',
    },
    {
      id: 16,
      name: 'iQOO Neo 9 Pro',
      description: 'iQOO Neo 9 Pro - Snapdragon 8 Gen 2, 50MP V2 chip camera and 120W FlashCharge',
      price: 36999.00,
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/iqoo-12-190536879-16x9_0.png?VersionId=pB1KoKFPxcJ4l8ML1ax5HJ7tqUfDHXxh&size=690:388',
      category: 'Phones',
      brand: 'iQOO',
    },
    {
      id: 17,
      name: 'Realme GT 5 Pro',
      description: 'Realme GT 5 Pro - Snapdragon 8 Gen 3, 50MP periscope telephoto lens and 120W charging',
      price: 49999.00,
      image: 'https://i.ytimg.com/vi/dIaTSYXrmmA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC9Ryb5vCrxcll19sYbzIeJ7BiQGw',
      category: 'Phones',
      brand: 'Realme',
    },
    {
      id: 18,
      name: 'Google Pixel 7a',
      description: 'Google Pixel 7a - Google Tensor G2, 64MP camera with pure Android experience',
      price: 43999.00,
      image: 'https://i.ytimg.com/vi/STuiGCfBWc8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLATuR9w6_CSB2QUMp8v5UKvkSvdUA',
      category: 'Phones',
      brand: 'Google',
    },
    {
      id: 19,
      name: 'Motorola Razr 40',
      description: 'Motorola Razr 40 - Snapdragon 7 Gen 1, foldable AMOLED display with 64MP camera',
      price: 49999.00,
      image: 'https://i.ytimg.com/vi/BGjOhXhdow4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBwtShBvziq2V3yeO_3M6Vcmvaqtg',
      category: 'Phones',
      brand: 'Motorola',
    },
    {
      id: 20,
      name: 'Xiaomi Redmi K70',
      description: 'Xiaomi Redmi K70 - Snapdragon 8 Gen 2, 50MP main camera with 120W HyperCharge',
      price: 33999.00,
      image: 'https://ext.same-assets.com/3564519495/319261870.jpeg',
      category: 'Phones',
      brand: 'Xiaomi',
    },
    {
      id: 21,
      name: 'Samsung Galaxy A73',
      description: 'Samsung Galaxy A73 - Snapdragon 778G, 108MP camera with optical image stabilization',
      price: 33999.00,
      image: 'https://www.techadvisor.com/wp-content/uploads/2025/03/best-mid-range-phones-2024-main-2.jpg?quality=50&strip=all&w=1024',
      category: 'Phones',
      brand: 'Samsung',
    },
    {
      id: 22,
      name: 'Vivo V40',
      description: 'Vivo V40 - MediaTek Dimensity 9200+, ZEISS co-engineered camera system and 120Hz AMOLED',
      price: 35999.00,
      image: 'https://static.sociofyme.com/thumb/113632886/113632886.jpg?imgsize=1028240&width=420&height=746&resizemode=76',
      category: 'Phones',
      brand: 'Vivo',
    },
    {
      id: 23,
      name: 'OPPO Find X6',
      description: 'OPPO Find X6 - MediaTek Dimensity 9200, Hasselblad camera system and 80W SuperVOOC',
      price: 48999.00,
      image: 'https://i.ytimg.com/vi/STuiGCfBWc8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLATuR9w6_CSB2QUMp8v5UKvkSvdUA',
      category: 'Phones',
      brand: 'OPPO',
    },
    {
      id: 24,
      name: 'Nothing Phone 2',
      description: 'Nothing Phone 2 - Snapdragon 8+ Gen 1, Glyph Interface 2.0 and 50MP dual camera',
      price: 39999.00,
      image: 'https://i.ytimg.com/vi/BGjOhXhdow4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBwtShBvziq2V3yeO_3M6Vcmvaqtg',
      category: 'Phones',
      brand: 'Nothing',
    },
    {
      id: 25,
      name: 'Tecno Phantom X2',
      description: 'Tecno Phantom X2 - MediaTek Dimensity 9000, 64MP RGBW camera with optical image stabilization',
      price: 36999.00,
      image: 'https://i.ytimg.com/vi/sQkeUT5WVSs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB-k5YEFPpTsZoXNd0p_MrlpGqCqA',
      category: 'Phones',
      brand: 'Tecno',
    },
    {
      id: 26,
      name: 'Infinix Zero 30',
      description: 'Infinix Zero 30 - MediaTek Dimensity 8020, 108MP camera with 4K 60fps front video',
      price: 23999.00,
      image: 'https://pbs.twimg.com/media/GnRHPamaEAAtKQV.jpg:large',
      category: 'Phones',
      brand: 'Infinix',
    },
    {
      id: 27,
      name: 'Honor 90',
      description: 'Honor 90 - Snapdragon 7 Gen 1, 200MP main camera and 5000mAh battery with 66W charging',
      price: 37999.00,
      image: 'https://i.ytimg.com/vi/sQkeUT5WVSs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB-k5YEFPpTsZoXNd0p_MrlpGqCqA',
      category: 'Phones',
      brand: 'Honor',
    },
    {
      id: 28,
      name: 'Nokia X30',
      description: 'Nokia X30 - Snapdragon 695, PureView 50MP camera and eco-friendly recycled aluminum design',
      price: 32999.00,
      image: 'https://i.ytimg.com/vi/STuiGCfBWc8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLATuR9w6_CSB2QUMp8v5UKvkSvdUA',
      category: 'Phones',
      brand: 'Nokia',
    },
    {
      id: 29,
      name: 'Lava Agni 2',
      description: 'Lava Agni 2 - MediaTek Dimensity 7050, 50MP quad camera and 66W fast charging',
      price: 21999.00,
      image: 'https://i.ytimg.com/vi/STuiGCfBWc8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLATuR9w6_CSB2QUMp8v5UKvkSvdUA',
      category: 'Phones',
      brand: 'Lava',
    },
    {
      id: 30,
      name: 'OnePlus Nord 4',
      description: 'OnePlus Nord 4 - Snapdragon 7+ Gen 3, 50MP Sony camera and 100W SUPERVOOC charging',
      price: 34999.00,
      image: 'https://www.livemint.com/lm-img/img/2024/07/16/600x338/nord_4_1721150978222_1721150986952.png',
      category: 'Phones',
      brand: 'OnePlus',
    },
    {
      id: 31,
      name: 'Xiaomi POCO F6 Pro',
      description: 'Xiaomi POCO F6 Pro - Snapdragon 8 Gen 2, 50MP camera with OIS and 120W HyperCharge',
      price: 38999.00,
      image: 'https://cdn.beebom.com/mobile/2024/03/Poco-F6.png',
      category: 'Phones',
      brand: 'Xiaomi',
    },
    {
      id: 32,
      name: 'Realme 12 Pro+',
      description: 'Realme 12 Pro+ - Snapdragon 7s Gen 2, Sony IMX890 camera with 3X periscope telephoto',
      price: 29999.00,
      image: 'https://i.ytimg.com/vi/dIaTSYXrmmA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC9Ryb5vCrxcll19sYbzIeJ7BiQGw',
      category: 'Phones',
      brand: 'Realme',
    },
    {
      id: 33,
      name: 'Samsung Galaxy M54',
      description: 'Samsung Galaxy M54 - Exynos 1380, 108MP main camera and 6000mAh massive battery',
      price: 26999.00,
      image: 'https://assets.thehansindia.com/h-upload/2024/12/02/1502422-garena-free-fire-max-redeem-codes-for-december-2-win-diamonds-pets-cool-skins-and-more-rewards-today-5.webp',
      category: 'Phones',
      brand: 'Samsung',
    },
    {
      id: 34,
      name: 'Vivo T3 Pro',
      description: 'Vivo T3 Pro - MediaTek Dimensity 7300, 50MP Sony camera and 80W FlashCharge',
      price: 23999.00,
      image: 'https://static.sociofyme.com/thumb/113632886/113632886.jpg?imgsize=1028240&width=420&height=746&resizemode=76',
      category: 'Phones',
      brand: 'Vivo',
    },
    {
      id: 35,
      name: 'Redmi Note 13 Pro+',
      description: 'Redmi Note 13 Pro+ - MediaTek Dimensity 7200 Ultra, 200MP main camera and IP68 rating',
      price: 31999.00,
      image: 'https://i.ytimg.com/vi/dIaTSYXrmmA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC9Ryb5vCrxcll19sYbzIeJ7BiQGw',
      category: 'Phones',
      brand: 'Xiaomi',
    },
    {
      id: 36,
      name: 'OPPO F25 Pro',
      description: 'OPPO F25 Pro - MediaTek Dimensity 7050, 64MP main camera and 67W SUPERVOOC charging',
      price: 25999.00,
      image: 'https://i.ytimg.com/vi/STuiGCfBWc8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLATuR9w6_CSB2QUMp8v5UKvkSvdUA',
      category: 'Phones',
      brand: 'OPPO',
    },
    {
      id: 37,
      name: 'iQOO Z9 Turbo',
      description: 'iQOO Z9 Turbo - Snapdragon 7 Gen 3, 50MP Sony camera and 80W FlashCharge technology',
      price: 24999.00,
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/iqoo-12-190536879-16x9_0.png?VersionId=pB1KoKFPxcJ4l8ML1ax5HJ7tqUfDHXxh&size=690:388',
      category: 'Phones',
      brand: 'iQOO',
    },
    {
      id: 38,
      name: 'Motorola Edge 40',
      description: 'Motorola Edge 40 - MediaTek Dimensity 8020, 50MP main camera and IP68 water resistance',
      price: 29999.00,
      image: 'https://i.ytimg.com/vi/BGjOhXhdow4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBwtShBvziq2V3yeO_3M6Vcmvaqtg',
      category: 'Phones',
      brand: 'Motorola',
    },
    {
      id: 39,
      name: 'Nothing Phone 1',
      description: 'Nothing Phone 1 - Snapdragon 778G+, Glyph Interface and 50MP dual camera system',
      price: 27999.00,
      image: 'https://i.ytimg.com/vi/BGjOhXhdow4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBwtShBvziq2V3yeO_3M6Vcmvaqtg',
      category: 'Phones',
      brand: 'Nothing',
    },
    {
      id: 40,
      name: 'Tecno Camon 20 Premier',
      description: 'Tecno Camon 20 Premier - MediaTek Helio G99, 108MP camera and 5000mAh battery',
      price: 22999.00,
      image: 'https://i.ebayimg.com/images/g/DM8AAOSw-0VlcZjC/s-l1200.jpg',
      category: 'Phones',
      brand: 'Tecno',
    },
    {
      id: 41,
      name: 'Samsung Galaxy F54',
      description: 'Samsung Galaxy F54 - Exynos 1380, 108MP camera with OIS and 6000mAh battery',
      price: 28999.00,
      image: 'https://assets.thehansindia.com/h-upload/2024/12/02/1502422-garena-free-fire-max-redeem-codes-for-december-2-win-diamonds-pets-cool-skins-and-more-rewards-today-5.webp',
      category: 'Phones',
      brand: 'Samsung',
    },
    {
      id: 42,
      name: 'OnePlus Ace 3',
      description: 'OnePlus Ace 3 - Snapdragon 8 Gen 2, 50MP main camera and 100W SUPERVOOC charging',
      price: 39999.00,
      image: 'https://www.livemint.com/lm-img/img/2024/07/16/600x338/nord_4_1721150978222_1721150986952.png',
      category: 'Phones',
      brand: 'OnePlus',
    },
    {
      id: 43,
      name: 'Realme Narzo 70 Pro',
      description: 'Realme Narzo 70 Pro - MediaTek Dimensity 7050, 50MP Sony camera and 67W fast charging',
      price: 19999.00,
      image: 'https://assets.thehansindia.com/h-upload/2024/12/02/1502422-garena-free-fire-max-redeem-codes-for-december-2-win-diamonds-pets-cool-skins-and-more-rewards-today-5.webp',
      category: 'Phones',
      brand: 'Realme',
    },
    {
      id: 44,
      name: 'POCO X6',
      description: 'POCO X6 - Snapdragon 7s Gen 2, 64MP main camera and 67W turbo charging',
      price: 21999.00,
      image: 'https://www.livemint.com/lm-img/img/2024/07/08/600x338/1718895357589_1718897863947_1720429060523.jpg',
      category: 'Phones',
      brand: 'POCO',
    },
    {
      id: 45,
      name: 'Xiaomi 12T',
      description: 'Xiaomi 12T - MediaTek Dimensity 8100 Ultra, 108MP camera with OIS and 120W HyperCharge',
      price: 37999.00,
      image: 'https://ext.same-assets.com/3564519495/319261870.jpeg',
      category: 'Phones',
      brand: 'Xiaomi',
    },
  ]);

  const featuredProducts = ref<Product[]>([]);
  const topProducts = ref<Product[]>([]);

  // Initialize featured and top products
  const initializeProducts = () => {
    featuredProducts.value = products.value.slice(0, 8);
    topProducts.value = products.value.slice(0, 3);
  };

  // Get product by id
  const getProductById = (id: number) => {
    return products.value.find((product) => product.id === id);
  };

  // Filter products by category
  const filterByCategory = (category: string) => {
    return products.value.filter((product) => product.category === category);
  };

  // Filter products by brand
  const filterByBrand = (brand: string) => {
    return products.value.filter((product) => product.brand === brand);
  };

  // Initialize on store creation
  initializeProducts();

  return {
    products,
    featuredProducts,
    topProducts,
    getProductById,
    filterByCategory,
    filterByBrand
  };
});
