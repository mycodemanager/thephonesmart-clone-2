<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProductStore } from '../stores/productStore';
import { useCartStore } from '../stores/cartStore';
import ProductCard from '../components/products/ProductCard.vue';

const route = useRoute();
const router = useRouter();
const productStore = useProductStore();
const cartStore = useCartStore();

const product = computed(() => {
  const id = Number(route.params.id);
  const foundProduct = productStore.getProductById(id);

  if (!foundProduct) {
    router.push('/shop');
  }

  return foundProduct;
});

// Format price function
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PKR',
    minimumFractionDigits: 2,
  }).format(price).replace('PKR', 'Rs');
};

// Product quantity
const quantity = ref(1);

// Increase quantity
const increaseQuantity = () => {
  quantity.value++;
};

// Decrease quantity
const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

// Check if product is in wishlist
const isInWishlist = computed(() => {
  if (!product.value) return false;
  return cartStore.isInWishlist(product.value.id);
});

// Add to cart
const addToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value, quantity.value);
  }
};

// Toggle wishlist
const toggleWishlist = () => {
  if (product.value) {
    cartStore.toggleWishlist(product.value);
  }
};

// Related products (same category or brand)
const relatedProducts = computed(() => {
  if (!product.value) return [];

  return productStore.products
    .filter(p =>
      (p.category === product.value?.category || p.brand === product.value?.brand) &&
      p.id !== product.value?.id
    )
    .slice(0, 4);
});

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <div v-if="product" class="product-detail">
    <!-- Page Header -->
    <div class="page-header">
      <div class="container">
        <h1>{{ product.name }}</h1>
        <div class="breadcrumbs">
          <router-link to="/">Home</router-link>
          <span>/</span>
          <router-link to="/shop">Shop</router-link>
          <span>/</span>
          <span>{{ product.name }}</span>
        </div>
      </div>
    </div>

    <div class="container">
      <!-- Product Info Section -->
      <div class="product-info-section">
        <div class="product-image">
          <img :src="product.image" :alt="product.name">
        </div>
        <div class="product-details">
          <h2 class="product-title">{{ product.name }}</h2>
          <div class="product-price">{{ formatPrice(product.price) }}</div>
          <div class="product-description">
            <p>{{ product.description }}</p>
          </div>

          <div class="product-meta">
            <div class="meta-item">
              <span class="meta-label">Category:</span>
              <router-link :to="`/shop?category=${product.category}`">{{ product.category }}</router-link>
            </div>
            <div class="meta-item">
              <span class="meta-label">Brand:</span>
              <router-link :to="`/shop?brand=${product.brand}`">{{ product.brand }}</router-link>
            </div>
          </div>

          <div class="product-actions">
            <div class="quantity-selector">
              <button @click="decreaseQuantity" class="quantity-btn">-</button>
              <input type="number" v-model="quantity" min="1" class="quantity-input">
              <button @click="increaseQuantity" class="quantity-btn">+</button>
            </div>
            <button @click="addToCart" class="btn add-to-cart-btn">Add to cart</button>
            <button
              @click="toggleWishlist"
              class="btn wishlist-btn"
              :class="{ 'active': isInWishlist }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path v-if="isInWishlist" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                <path v-else d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
              </svg>
              <span>{{ isInWishlist ? 'Remove from wishlist' : 'Add to wishlist' }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Related Products Section -->
      <div class="related-products">
        <h2 class="section-title">Related Products</h2>
        <div class="products-grid">
          <ProductCard
            v-for="relatedProduct in relatedProducts"
            :key="relatedProduct.id"
            :product="relatedProduct"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-header {
  background-color: #f5f5f5;
  padding: 30px 0;
  margin-bottom: 40px;
  text-align: center;

  h1 {
    font-size: 32px;
    margin-bottom: 10px;
  }

  .breadcrumbs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #666;

    a {
      color: var(--accent-color);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.product-info-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
}

.product-image {
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
}

.product-details {
  .product-title {
    font-size: 28px;
    margin-bottom: 15px;
  }

  .product-price {
    font-size: 24px;
    font-weight: 600;
    color: var(--accent-color);
    margin-bottom: 20px;
  }

  .product-description {
    margin-bottom: 25px;
    color: #666;
    line-height: 1.6;
  }

  .product-meta {
    margin-bottom: 25px;
    padding-bottom: 25px;
    border-bottom: 1px solid var(--border-color);

    .meta-item {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 5px;

      .meta-label {
        font-weight: 500;
      }

      a {
        color: var(--accent-color);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .product-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }

  .quantity-selector {
    display: flex;
    align-items: center;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    overflow: hidden;

    .quantity-btn {
      width: 36px;
      height: 36px;
      border: none;
      background-color: #f5f5f5;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: bold;
      transition: background-color 0.3s;

      &:hover {
        background-color: var(--border-color);
      }
    }

    .quantity-input {
      width: 60px;
      height: 36px;
      border: none;
      border-left: 1px solid var(--border-color);
      border-right: 1px solid var(--border-color);
      text-align: center;
      font-size: 14px;
    }
  }

  .add-to-cart-btn {
    height: 36px;
    padding: 0 20px;
  }

  .wishlist-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 36px;
    padding: 0 15px;
    background-color: transparent;
    border: 1px solid var(--border-color);
    color: var(--text-color);

    &:hover {
      background-color: #f5f5f5;
    }

    &.active {
      color: var(--accent-color);
      border-color: var(--accent-color);
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
}

.section-title {
  font-size: 24px;
  margin-bottom: 25px;
  text-align: center;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

@media (max-width: 992px) {
  .product-info-section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .product-actions {
    flex-direction: column;
    width: 100%;

    .quantity-selector {
      width: 100%;
      justify-content: center;
    }

    .add-to-cart-btn, .wishlist-btn {
      width: 100%;
    }
  }
}
</style>
