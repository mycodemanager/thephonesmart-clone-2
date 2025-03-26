<script setup lang="ts">
import { ref } from 'vue';
import { useCartStore } from '../../stores/cartStore';

const cartStore = useCartStore();
const searchQuery = ref('');
const showSearchResults = ref(false);

const toggleSearchResults = () => {
  showSearchResults.value = !showSearchResults.value;
};

const handleSearch = () => {
  // Implement search functionality
  console.log('Searching for:', searchQuery.value);
};
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <!-- Logo -->
        <div class="logo">
          <router-link to="/">
            <img src="https://ext.same-assets.com/3564519495/1817041638.png" alt="THE PHONES MART" />
          </router-link>
        </div>

        <!-- Search -->
        <div class="search-container">
          <div class="search-box">
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Enter your search"
              @focus="toggleSearchResults"
            />
            <button @click="handleSearch">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
          </div>
          <!-- Search Results (hidden by default) -->
          <div class="search-results" v-if="showSearchResults">
            <div class="search-results-content">
              <p>No results</p>
              <router-link to="/shop">See all results</router-link>
            </div>
          </div>
        </div>

        <!-- User Menu -->
        <div class="user-menu">
          <router-link to="/account" class="icon-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            </svg>
          </router-link>
          <router-link to="/wishlist" class="icon-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
            <span class="badge" v-if="cartStore.wishlistCount">{{ cartStore.wishlistCount }}</span>
          </router-link>
          <router-link to="/cart" class="icon-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <span class="badge" v-if="cartStore.cartCount">{{ cartStore.cartCount }}</span>
          </router-link>
        </div>
      </div>

      <!-- Navigation Menu -->
      <nav class="main-nav">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li class="has-dropdown">
            <router-link to="/shop">Shop</router-link>
            <div class="dropdown-menu">
              <ul>
                <li><router-link to="/shop?category=phones">Phones</router-link></li>
                <li><router-link to="/shop?category=accessories">Accessories</router-link></li>
              </ul>
            </div>
          </li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/contact">Contact Us</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}

.logo {
  flex: 0 0 auto;
  img {
    max-height: 40px;
    display: block;
  }
}

.search-container {
  flex: 1;
  margin: 0 20px;
  position: relative;
}

.search-box {
  display: flex;
  border: 1px solid var(--light-gray);
  border-radius: 4px;
  overflow: hidden;

  input {
    flex: 1;
    padding: 10px 15px;
    border: none;
    outline: none;
    background-color: transparent;
    font-family: 'Poppins', sans-serif;
  }

  button {
    background: transparent;
    border: none;
    padding: 0 15px;
    cursor: pointer;
    color: var(--primary-color);
  }
}

.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid var(--light-gray);
  border-radius: 0 0 4px 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  .search-results-content {
    padding: 15px;

    p {
      margin-bottom: 10px;
    }

    a {
      color: var(--accent-color);
      font-weight: 500;
    }
  }
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 15px;
}

.icon-btn {
  position: relative;
  color: var(--primary-color);

  .badge {
    position: absolute;
    top: -5px;
    right: -8px;
    background: var(--accent-color);
    color: white;
    font-size: 10px;
    font-weight: bold;
    padding: 2px 5px;
    border-radius: 10px;
    min-width: 15px;
    text-align: center;
  }

  svg {
    width: 18px;
    height: 18px;
  }
}

.main-nav {
  ul {
    display: flex;
    gap: 20px;
  }

  li {
    position: relative;

    a {
      display: block;
      padding: 5px 0;
      font-weight: 500;
      transition: color 0.3s;

      &:hover, &.router-link-active {
        color: var(--accent-color);
      }
    }
  }

  .has-dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    min-width: 150px;
    padding: 10px 0;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: all 0.3s;

    ul {
      display: block;
    }

    li {
      a {
        padding: 8px 15px;
        display: block;

        &:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .header-content {
    flex-wrap: wrap;
  }

  .search-container {
    order: 3;
    width: 100%;
    margin: 15px 0 0;
  }

  .main-nav ul {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
