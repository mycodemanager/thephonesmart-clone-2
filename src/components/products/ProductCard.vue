<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '../../stores/cartStore';
import { type Product } from '../../stores/productStore';

// Define props
interface Props {
  product: Product;
}

const props = defineProps<Props>();
const cartStore = useCartStore();

// Format price function
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PKR',
    minimumFractionDigits: 2,
  }).format(price).replace('PKR', 'Rs');
};

const formattedPrice = computed(() => formatPrice(props.product.price));

// Handle add to cart
const addToCart = () => {
  cartStore.addToCart(props.product);
};

// Handle toggle wishlist
const toggleWishlist = () => {
  cartStore.toggleWishlist(props.product);
};

const isInWishlist = computed(() => {
  return cartStore.isInWishlist(props.product.id);
});
</script>

<template>
  <div class="product-card">
    <div class="product-image">
      <router-link :to="'/product/' + product.id">
        <img :src="product.image" :alt="product.name">
      </router-link>
      <div class="product-actions">
        <button class="action-btn add-to-cart" @click="addToCart">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
        </button>
        <router-link :to="'/product/' + product.id" class="action-btn view-product">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
          </svg>
        </router-link>
        <button class="action-btn toggle-wishlist" :class="{ 'active': isInWishlist }" @click="toggleWishlist">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path v-if="isInWishlist" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            <path v-else d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="product-info">
      <h3 class="product-title">
        <router-link :to="'/product/' + product.id">{{ product.name }}</router-link>
      </h3>
      <p class="product-description">{{ product.description.substring(0, 80) }}...</p>
      <div class="product-price">{{ formattedPrice }}</div>
      <button class="btn add-to-cart-btn" @click="addToCart">Add to cart</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    .product-actions {
      opacity: 1;
    }
  }
}

.product-image {
  position: relative;
  padding-top: 100%;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }

  &:hover img {
    transform: scale(1.05);
  }
}

.product-actions {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.3s;
}

.action-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #fff;
  color: var(--text-color);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: var(--accent-color);
    color: #fff;
    transform: translateY(-3px);
  }

  &.active {
    background-color: var(--accent-color);
    color: #fff;
  }

  svg {
    width: 16px;
    height: 16px;
  }
}

.product-info {
  padding: 15px;
}

.product-title {
  margin: 0 0 8px;
  font-size: 16px;

  a {
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: var(--accent-color);
    }
  }
}

.product-description {
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-price {
  font-size: 18px;
  font-weight: 600;
  color: var(--accent-color);
  margin-bottom: 15px;
}

.add-to-cart-btn {
  width: 100%;
  padding: 8px;
  background-color: var(--accent-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1e7cc7;
  }
}
</style>
