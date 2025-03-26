<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '../stores/productStore';
import ProductCard from '../components/products/ProductCard.vue';

const productStore = useProductStore();
const route = useRoute();

// Filtering options
const selectedCategory = ref('');
const selectedBrand = ref('');
const searchQuery = ref('');
const viewMode = ref('grid'); // 'grid' or 'list'
const itemsPerPage = ref(12);
const currentPage = ref(1);

// Get query parameters from URL
onMounted(() => {
  const queryCategory = route.query.category as string;
  const queryBrand = route.query.brand as string;
  const querySearch = route.query.search as string;

  if (queryCategory) {
    selectedCategory.value = queryCategory;
  }

  if (queryBrand) {
    selectedBrand.value = queryBrand;
  }

  if (querySearch) {
    searchQuery.value = querySearch;
  }
});

// Watch for changes in route query params
watch(() => route.query, (newQuery) => {
  const queryCategory = newQuery.category as string;
  const queryBrand = newQuery.brand as string;
  const querySearch = newQuery.search as string;

  if (queryCategory) {
    selectedCategory.value = queryCategory;
  }

  if (queryBrand) {
    selectedBrand.value = queryBrand;
  }

  if (querySearch) {
    searchQuery.value = querySearch;
  }
});

// Compute filtered products
const filteredProducts = computed(() => {
  let filtered = [...productStore.products];

  // Filter by category
  if (selectedCategory.value) {
    filtered = filtered.filter(
      product => product.category.toLowerCase() === selectedCategory.value.toLowerCase()
    );
  }

  // Filter by brand
  if (selectedBrand.value) {
    filtered = filtered.filter(
      product => product.brand.toLowerCase() === selectedBrand.value.toLowerCase()
    );
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
  }

  return filtered;
});

// Compute paginated products
const paginatedProducts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value;
  const endIndex = startIndex + itemsPerPage.value;
  return filteredProducts.value.slice(startIndex, endIndex);
});

// Compute total pages
const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / itemsPerPage.value);
});

// Change page
const changePage = (page: number) => {
  currentPage.value = page;
  window.scrollTo(0, 0);
};

// Change view mode
const changeViewMode = (mode: string) => {
  viewMode.value = mode;
};

// Reset filters
const resetFilters = () => {
  selectedCategory.value = '';
  selectedBrand.value = '';
  searchQuery.value = '';
  currentPage.value = 1;
};

// Available categories
const categories = computed(() => {
  const categorySet = new Set(productStore.products.map(product => product.category));
  return Array.from(categorySet);
});

// Available brands
const brands = computed(() => {
  const brandSet = new Set(productStore.products.map(product => product.brand));
  return Array.from(brandSet);
});
</script>

<template>
  <div class="shop">
    <!-- Page Header -->
    <div class="page-header">
      <div class="container">
        <h1>Shop</h1>
        <div class="breadcrumbs">
          <router-link to="/">Home</router-link>
          <span>/</span>
          <span>Shop</span>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="shop-content">
        <!-- Filters Sidebar -->
        <aside class="shop-sidebar">
          <div class="filter-section">
            <h3>Categories</h3>
            <div class="filter-options">
              <div
                v-for="category in categories"
                :key="category"
                class="filter-option"
                :class="{ active: selectedCategory === category }"
                @click="selectedCategory = category; currentPage = 1;"
              >
                {{ category }}
              </div>
            </div>
          </div>

          <div class="filter-section">
            <h3>Brands</h3>
            <div class="filter-options">
              <div
                v-for="brand in brands"
                :key="brand"
                class="filter-option"
                :class="{ active: selectedBrand === brand }"
                @click="selectedBrand = brand; currentPage = 1;"
              >
                {{ brand }}
              </div>
            </div>
          </div>

          <div class="filter-section">
            <h3>Search</h3>
            <div class="search-filter">
              <input
                type="text"
                v-model="searchQuery"
                placeholder="Search products..."
                @input="currentPage = 1"
              >
            </div>
          </div>

          <button class="btn reset-filters" @click="resetFilters">Reset Filters</button>
        </aside>

        <!-- Products Grid -->
        <div class="shop-products">
          <div class="shop-toolbar">
            <div class="results-count">
              Showing {{ filteredProducts.length }} products
            </div>
            <div class="view-options">
              <div class="items-per-page">
                <span>Show:</span>
                <select v-model="itemsPerPage" @change="currentPage = 1">
                  <option :value="6">6</option>
                  <option :value="12">12</option>
                  <option :value="24">24</option>
                  <option :value="36">36</option>
                </select>
              </div>
              <div class="view-switcher">
                <button
                  :class="{ active: viewMode === 'grid' }"
                  @click="changeViewMode('grid')"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-3z"/>
                  </svg>
                </button>
                <button
                  :class="{ active: viewMode === 'list' }"
                  @click="changeViewMode('list')"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- No Products Message -->
          <div v-if="filteredProducts.length === 0" class="no-products">
            <p>No products found. Try adjusting your filters.</p>
            <button class="btn" @click="resetFilters">Clear Filters</button>
          </div>

          <!-- Products Grid View -->
          <div
            v-else
            class="products-grid"
            :class="{ 'list-view': viewMode === 'list' }"
          >
            <ProductCard
              v-for="product in paginatedProducts"
              :key="product.id"
              :product="product"
            />
          </div>

          <!-- Pagination -->
          <div v-if="filteredProducts.length > 0" class="pagination">
            <button
              :disabled="currentPage === 1"
              @click="changePage(currentPage - 1)"
              class="page-btn prev"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
              </svg>
            </button>

            <button
              v-for="page in totalPages"
              :key="page"
              :class="{ active: currentPage === page }"
              @click="changePage(page)"
              class="page-btn"
            >
              {{ page }}
            </button>

            <button
              :disabled="currentPage === totalPages"
              @click="changePage(currentPage + 1)"
              class="page-btn next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
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

.shop-content {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 30px;
  margin-bottom: 50px;
}

// Shop Sidebar Styles
.shop-sidebar {
  .filter-section {
    margin-bottom: 25px;

    h3 {
      font-size: 18px;
      margin-bottom: 15px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--border-color);
    }
  }

  .filter-options {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .filter-option {
    padding: 6px 10px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      color: var(--accent-color);
    }

    &.active {
      background-color: var(--accent-color);
      color: white;
    }
  }

  .search-filter {
    input {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      font-family: 'Poppins', sans-serif;

      &:focus {
        outline: none;
        border-color: var(--accent-color);
      }
    }
  }

  .reset-filters {
    width: 100%;
    background-color: transparent;
    border: 1px solid var(--border-color);
    color: var(--text-color);

    &:hover {
      background-color: var(--accent-color);
      color: white;
      border-color: var(--accent-color);
    }
  }
}

// Shop Products Styles
.shop-products {
  .shop-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--border-color);
  }

  .results-count {
    font-size: 14px;
    color: #666;
  }

  .view-options {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .items-per-page {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;

    select {
      padding: 4px 8px;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      background-color: white;
    }
  }

  .view-switcher {
    display: flex;
    gap: 5px;

    button {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--border-color);
      background-color: white;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s;

      &:hover, &.active {
        background-color: var(--accent-color);
        color: white;
        border-color: var(--accent-color);
      }
    }
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 20px;
    margin-bottom: 30px;

    &.list-view {
      grid-template-columns: 1fr;
    }
  }

  .no-products {
    text-align: center;
    padding: 40px 0;

    p {
      font-size: 16px;
      margin-bottom: 15px;
      color: #666;
    }
  }
}

// Pagination Styles
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 30px;

  .page-btn {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover:not(:disabled), &.active {
      background-color: var(--accent-color);
      color: white;
      border-color: var(--accent-color);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &.prev, &.next {
      svg {
        width: 14px;
        height: 14px;
      }
    }
  }
}

@media (max-width: 992px) {
  .shop-content {
    grid-template-columns: 1fr;
  }

  .shop-sidebar {
    margin-bottom: 30px;
  }
}

@media (max-width: 576px) {
  .shop-toolbar {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }

  .view-options {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
