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

// Update quantity
const updateQuantity = (productId: number, quantity: number) => {
  cartStore.updateQuantity(productId, quantity);
};

// Remove item
const removeItem = (productId: number) => {
  cartStore.removeFromCart(productId);
};

// Computed item subtotal
const getItemSubtotal = (price: number, quantity: number) => {
  return formatPrice(price * quantity);
};

// Empty cart
const isCartEmpty = computed(() => {
  return cartStore.cartItems.length === 0;
});
</script>

<template>
  <div class="cart-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="container">
        <h1>Shopping Cart</h1>
        <div class="breadcrumbs">
          <router-link to="/">Home</router-link>
          <span>/</span>
          <span>Cart</span>
        </div>
      </div>
    </div>

    <div class="container">
      <div v-if="isCartEmpty" class="empty-cart">
        <div class="empty-message">
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any products to your cart yet.</p>
          <router-link to="/shop" class="btn">Continue Shopping</router-link>
        </div>
      </div>

      <div v-else class="cart-content">
        <!-- Cart Items -->
        <div class="cart-items">
          <div class="cart-header">
            <div class="header-product">Product</div>
            <div class="header-price">Price</div>
            <div class="header-quantity">Quantity</div>
            <div class="header-subtotal">Subtotal</div>
            <div class="header-remove"></div>
          </div>

          <div v-for="item in cartStore.cartItems" :key="item.product.id" class="cart-item">
            <div class="item-product">
              <div class="product-image">
                <router-link :to="`/product/${item.product.id}`">
                  <img :src="item.product.image" :alt="item.product.name">
                </router-link>
              </div>
              <div class="product-info">
                <h3 class="product-name">
                  <router-link :to="`/product/${item.product.id}`">{{ item.product.name }}</router-link>
                </h3>
                <div class="product-meta">
                  <span class="product-brand">{{ item.product.brand }}</span>
                </div>
              </div>
            </div>

            <div class="item-price">
              {{ formatPrice(item.product.price) }}
            </div>

            <div class="item-quantity">
              <div class="quantity-selector">
                <button
                  @click="updateQuantity(item.product.id, item.quantity - 1)"
                  class="quantity-btn"
                  :disabled="item.quantity <= 1"
                >
                  -
                </button>
                <input
                  type="number"
                  :value="item.quantity"
                  min="1"
                  @input="event => updateQuantity(item.product.id, parseInt((event.target as HTMLInputElement).value) || 1)"
                  class="quantity-input"
                >
                <button
                  @click="updateQuantity(item.product.id, item.quantity + 1)"
                  class="quantity-btn"
                >
                  +
                </button>
              </div>
            </div>

            <div class="item-subtotal">
              {{ getItemSubtotal(item.product.price, item.quantity) }}
            </div>

            <div class="item-remove">
              <button @click="removeItem(item.product.id)" class="remove-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Cart Totals -->
        <div class="cart-summary">
          <h2>Cart Totals</h2>
          <div class="summary-row">
            <div class="summary-label">Total</div>
            <div class="summary-value">{{ formatPrice(cartStore.totalPrice) }}</div>
          </div>
          <button class="btn checkout-btn">Proceed to Checkout</button>
          <router-link to="/shop" class="btn continue-shopping">Continue Shopping</router-link>
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

.empty-cart {
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

.cart-content {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 30px;
  margin-bottom: 60px;
}

.cart-items {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
}

.cart-header {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 50px;
  padding: 15px;
  background-color: #f5f5f5;
  font-weight: 600;
  border-bottom: 1px solid var(--border-color);
}

.cart-item {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 50px;
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

.quantity-selector {
  display: flex;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  overflow: hidden;
  max-width: 120px;

  .quantity-btn {
    width: 32px;
    height: 32px;
    border: none;
    background-color: #f5f5f5;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover:not(:disabled) {
      background-color: var(--border-color);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .quantity-input {
    width: 40px;
    height: 32px;
    border: none;
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    text-align: center;
    font-size: 14px;
  }
}

.remove-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  color: #666;

  &:hover {
    background-color: #f5f5f5;
    color: #ff4d4d;
  }
}

.cart-summary {
  padding: 20px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: #f9f9f9;

  h2 {
    font-size: 20px;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--border-color);
  }

  .summary-row {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 20px;

    .summary-label {
      font-weight: 600;
    }

    .summary-value {
      font-size: 18px;
      font-weight: 600;
      color: var(--accent-color);
    }
  }

  .checkout-btn {
    width: 100%;
    margin-bottom: 10px;
    padding: 12px;
    font-size: 16px;
  }

  .continue-shopping {
    width: 100%;
    background-color: transparent;
    border: 1px solid var(--border-color);
    color: var(--text-color);
    padding: 12px;
    font-size: 16px;

    &:hover {
      background-color: #f5f5f5;
    }
  }
}

@media (max-width: 992px) {
  .cart-content {
    grid-template-columns: 1fr;
  }

  .cart-summary {
    max-width: 450px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .cart-header {
    display: none;
  }

  .cart-item {
    grid-template-columns: 1fr;
    grid-template-areas:
      "product"
      "price"
      "quantity"
      "subtotal"
      "remove";
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

  .item-quantity {
    grid-area: quantity;
    &::before {
      content: "Quantity: ";
      font-weight: 600;
      margin-right: 5px;
      display: block;
      margin-bottom: 5px;
    }
  }

  .item-subtotal {
    grid-area: subtotal;
    &::before {
      content: "Subtotal: ";
      font-weight: 600;
      margin-right: 5px;
    }
  }

  .item-remove {
    grid-area: remove;
    text-align: right;
  }
}
</style>
