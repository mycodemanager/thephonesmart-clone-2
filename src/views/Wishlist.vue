<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '../stores/cartStore';

const cartStore = useCartStore();

// Format price function
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PKR',
    minimumFractionDigits: 2,
  }).format(price).replace('PKR', 'Rs');
};

// Add to cart
const addToCart = (productId: number) => {
  const product = cartStore.wishlist.find(item => item.id === productId);
  if (product) {
    cartStore.addToCart(product);
  }
};

// Remove from wishlist
const removeFromWishlist = (productId: number) => {
  const product = cartStore.wishlist.find(item => item.id === productId);
  if (product) {
    cartStore.toggleWishlist(product);
  }
};

// Empty wishlist
const isWishlistEmpty = computed(() => {
  return cartStore.wishlist.length === 0;
});
</script>

<template>
  <div class="wishlist-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="container">
        <h1>Wishlist</h1>
        <div class="breadcrumbs">
          <router-link to="/">Home</router-link>
          <span>/</span>
          <span>Wishlist</span>
        </div>
      </div>
    </div>

    <div class="container">
      <div v-if="isWishlistEmpty" class="empty-wishlist">
        <div class="empty-message">
          <h2>Your wishlist is empty</h2>
          <p>Save items you like to your wishlist to buy them later or share with your friends.</p>
          <router-link to="/shop" class="btn">Continue Shopping</router-link>
        </div>
      </div>

      <div v-else class="wishlist-content">
        <div class="wishlist-items">
          <div class="wishlist-header">
            <div class="header-product">Product</div>
            <div class="header-price">Price</div>
            <div class="header-stock">Stock Status</div>
            <div class="header-actions">Actions</div>
          </div>

          <div v-for="product in cartStore.wishlist" :key="product.id" class="wishlist-item">
            <div class="item-product">
              <div class="product-image">
                <router-link :to="`/product/${product.id}`">
                  <img :src="product.image" :alt="product.name">
                </router-link>
              </div>
              <div class="product-info">
                <h3 class="product-name">
                  <router-link :to="`/product/${product.id}`">{{ product.name }}</router-link>
                </h3>
                <div class="product-meta">
                  <span class="product-brand">{{ product.brand }}</span>
                </div>
              </div>
            </div>

            <div class="item-price">
              {{ formatPrice(product.price) }}
            </div>

            <div class="item-stock">
              <span class="in-stock">In Stock</span>
            </div>

            <div class="item-actions">
              <button @click="addToCart(product.id)" class="btn action-btn add-to-cart-btn">
                Add to Cart
              </button>
              <button @click="removeFromWishlist(product.id)" class="btn action-btn remove-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
                Remove
              </button>
            </div>
          </div>
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

.empty-wishlist {
  padding: 60px 0;
  text-align: center;

  .empty-message {
    max-width: 600px;
    margin: 0 auto;

    h2 {
      font-size: 24px;
      margin-bottom: 15px;
    }

    p {
      color: #666;
      margin-bottom: 25px;
    }
  }
}

.wishlist-content {
  margin-bottom: 60px;
}

.wishlist-items {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
}

.wishlist-header {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 2fr;
  padding: 15px;
  background-color: #f5f5f5;
  font-weight: 600;
  border-bottom: 1px solid var(--border-color);
}

.wishlist-item {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 2fr;
  padding: 15px;
  border-bottom: 1px solid var(--border-color);
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
}

.item-product {
  display: flex;
  align-items: center;
  gap: 15px;

  .product-image {
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 4px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .product-name {
    font-size: 16px;
    margin-bottom: 5px;

    a {
      color: var(--text-color);
      text-decoration: none;

      &:hover {
        color: var(--accent-color);
      }
    }
  }

  .product-meta {
    font-size: 14px;
    color: #666;
  }
}

.item-stock {
  .in-stock {
    display: inline-block;
    padding: 4px 8px;
    background-color: rgba(0, 150, 0, 0.1);
    color: rgb(0, 120, 0);
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
  }
}

.item-actions {
  display: flex;
  gap: 10px;

  .action-btn {
    padding: 8px 15px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 5px;

    &.remove-btn {
      background-color: transparent;
      border: 1px solid var(--border-color);
      color: var(--text-color);

      &:hover {
        background-color: #f5f5f5;
        color: #ff4d4d;
      }

      svg {
        width: 14px;
        height: 14px;
      }
    }
  }
}

@media (max-width: 992px) {
  .wishlist-header {
    display: none;
  }

  .wishlist-item {
    grid-template-columns: 1fr;
    grid-template-areas:
      "product"
      "price"
      "stock"
      "actions";
    gap: 15px;
  }

  .item-product {
    grid-area: product;
  }

  .item-price {
    grid-area: price;
    &::before {
      content: "Price: ";
      font-weight: 600;
      margin-right: 5px;
    }
  }

  .item-stock {
    grid-area: stock;
    &::before {
      content: "Status: ";
      font-weight: 600;
      margin-right: 5px;
    }
  }

  .item-actions {
    grid-area: actions;
    flex-wrap: wrap;

    .action-btn {
      flex: 1;
      justify-content: center;
    }
  }
}
</style>
