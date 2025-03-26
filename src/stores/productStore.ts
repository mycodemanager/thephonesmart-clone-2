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
      name: 'Xiaomi 12',
      description: 'Xiaomi 12- A Most Powerful Machine In The Planet Smart tech Xiaomi',
      price: 179999.00,
      image: 'https://ext.same-assets.com/3564519495/319261870.jpeg',
      category: 'Phones',
      brand: 'Xiaomi',
    },
    {
      id: 2,
      name: 'Xiaomi 14 Ultra',
      description: 'The Xiaomi 14 Ultra is a flagship smartphone that combines cutting-edge technology with sleek design.',
      price: 369599.00,
      image: 'https://ext.same-assets.com/3564519495/1025530523.jpeg',
      category: 'Phones',
      brand: 'Xiaomi',
    },
    {
      id: 3,
      name: 'Xiaomi Mi 80W Wireless Charging Stand',
      description: 'The Xiaomi Mi 80W Wireless Charging Stand is an ultra-fast wireless charging stand that delivers up to 80W of power for compatible Xiaomi devices.',
      price: 12000.00,
      image: 'https://ext.same-assets.com/3564519495/3398436893.jpeg',
      category: 'Accessories',
      brand: 'Xiaomi',
    },
    {
      id: 4,
      name: 'Apple iPhone 15',
      description: 'The Apple iPhone 15, released in September 2023, offers a blend of advanced technology and sleek design.',
      price: 409999.00,
      image: 'https://ext.same-assets.com/3564519495/1375549937.jpeg',
      category: 'Phones',
      brand: 'Apple',
    },
    {
      id: 5,
      name: 'Samsung Galaxy S25',
      description: 'The Samsung Galaxy S25 is the latest addition to Samsung\'s flagship lineup, offering a blend of cutting-edge technology and sleek design.',
      price: 314999.00,
      image: 'https://ext.same-assets.com/3564519495/2234701654.jpeg',
      category: 'Phones',
      brand: 'Samsung',
    },
    {
      id: 6,
      name: 'Samsung Galaxy S23 Ultra',
      description: 'The Samsung Galaxy S23 Ultra is a flagship smartphone that combines cutting-edge technology with a sleek design.',
      price: 389999.00,
      image: 'https://ext.same-assets.com/3564519495/3114989565.webp',
      category: 'Phones',
      brand: 'Samsung',
    },
    {
      id: 7,
      name: 'Samsung Galaxy A23',
      description: 'Samsung Galaxy A23 Another Member Of A-Series Samsung will unveil its all-new Galaxy A23 smartphone to the market soon.',
      price: 78499.00,
      image: 'https://ext.same-assets.com/3564519495/3887080861.jpeg',
      category: 'Phones',
      brand: 'Samsung',
    },
    {
      id: 8,
      name: 'Samsung 50W Wireless Charging Stand',
      description: 'The Samsung 50W Wireless Charging Stand is a powerful wireless charging stand that supports fast charging up to 50W for compatible Samsung devices.',
      price: 10000.00,
      image: 'https://ext.same-assets.com/3564519495/3887080861.jpeg',
      category: 'Accessories',
      brand: 'Samsung',
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
