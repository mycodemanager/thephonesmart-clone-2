import { defineStore } from 'pinia';
import { ref, computed } from 'vue';


export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([]);
  const wishlist = ref([]);

  // Add item to cart
  const addToCart = (product, quantity: number = 1) => {
    const existingItem = cartItems.value.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cartItems.value.push({ product, quantity });
    }
  };

  // Remove item from cart
  const removeFromCart = (productId: number) => {
    cartItems.value = cartItems.value.filter(item => item.product.id !== productId);
  };

  // Update item quantity
  const updateQuantity = (productId: number, quantity: number) => {
    const item = cartItems.value.find(item => item.product.id === productId);

    if (item) {
      if (quantity <= 0) {
        removeFromCart(productId);
      } else {
        item.quantity = quantity;
      }
    }
  };

  // Toggle wishlist
  const toggleWishlist = (product: Product) => {
    const index = wishlist.value.findIndex(item => item.id === product.id);

    if (index !== -1) {
      wishlist.value.splice(index, 1);
    } else {
      wishlist.value.push(product);
    }
  };

  // Check if product is in wishlist
  const isInWishlist = (productId: number) => {
    return wishlist.value.some(item => item.id === productId);
  };

  // Calculate total price
  const totalPrice = computed(() => {
    return cartItems.value.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  });

  // Get cart items count
  const cartCount = computed(() => {
    return cartItems.value.reduce((count, item) => count + item.quantity, 0);
  });

  // Get wishlist count
  const wishlistCount = computed(() => {
    return wishlist.value.length;
  });

  return {
    cartItems,
    wishlist,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleWishlist,
    isInWishlist,
    totalPrice,
    cartCount,
    wishlistCount
  };
});
