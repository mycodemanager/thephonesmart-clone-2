<script setup lang="ts">
import { onMounted } from 'vue';
import { useProductStore } from '../stores/productStore';
import ProductCard from '../components/products/ProductCard.vue';

const productStore = useProductStore();

onMounted(() => {
  // Any initialization logic for the home page
});
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1>The watch that has it all</h1>
            <p>Bethemes is ready for your ecommerce business</p>
            <router-link to="/shop" class="btn">View details</router-link>
          </div>
          <div class="hero-image">
            <img src="https://ext.same-assets.com/3564519495/938065547.png" alt="Smart Watch">
          </div>
        </div>
      </div>
    </section>

    <!-- Smartphone Banner -->
    <section class="smartphone-banner">
      <div class="container">
        <div class="banner-content">
          <div class="banner-text">
            <h2>Smart Phones Just for You</h2>
          </div>
          <div class="banner-text">
            <h3>Choose Smart</h3>
            <p>Upgrade to the latest smartphone with top features and unbeatable prices.</p>
            <p>Shop now for the best deals and fast delivery!</p>
            <router-link to="/shop" class="btn btn-outline">shop now!</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="featured-products">
      <div class="container">
        <h2 class="section-title">Featured products</h2>
        <div class="products-grid">
          <ProductCard
            v-for="product in productStore.featuredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
        <div class="view-more">
          <router-link to="/shop" class="btn btn-outline">Browse more</router-link>
        </div>
      </div>
    </section>

    <!-- Benefits Banner -->
    <section class="benefits-banner">
      <div class="container">
        <h2 class="section-title">Get the latest smartphone at the best price</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <img src="https://ext.same-assets.com/3564519495/56385501.webp" alt="Quick order">
            <h5>Quick order</h5>
            <p>Place your order effortlessly with our fast and hassle-free process.</p>
          </div>
          <div class="benefit-card">
            <img src="https://ext.same-assets.com/3564519495/467746837.webp" alt="Free delivery">
            <h5>Free delivery</h5>
            <p>Enjoy free and swift delivery straight to your doorstep.</p>
          </div>
          <div class="benefit-card">
            <img src="https://ext.same-assets.com/3564519495/1160973317.webp" alt="50 day return">
            <h5>50 day return</h5>
            <p>Shop with confidence - easy returns within 50 days.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Oriented Banner -->
    <section class="tech-banner">
      <div class="container">
        <div class="tech-content">
          <div class="tech-text">
            <h2>Almost 100% of our products are new technology oriented</h2>
            <router-link to="/shop" class="btn">Browse products</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="container">
        <div class="about-grid">
          <div class="about-card">
            <h4>Our product for you</h4>
            <p>Discover top-quality products designed to meet your needs. From cutting-edge technology to everyday essentials, we bring you the best selection at unbeatable prices. Shop with confidence and enjoy premium quality with every purchase.</p>
          </div>
          <div class="about-card">
            <h4>About the shop</h4>
            <p>We are committed to providing the best shopping experience with high-quality products, excellent customer service, and fast delivery. Our mission is to bring you top brands and the latest trends, ensuring satisfaction with every order.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.section-title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 600;
}

// Hero Section
.hero {
  background-color: #f5f5f5;
  padding: 60px 0;

  .hero-content {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .hero-text {
    flex: 1;

    h1 {
      font-size: 42px;
      margin-bottom: 15px;
      font-weight: 700;
    }

    p {
      font-size: 18px;
      margin-bottom: 25px;
      color: #666;
    }
  }

  .hero-image {
    flex: 1;
    display: flex;
    justify-content: center;

    img {
      max-width: 100%;
      height: auto;
    }
  }
}

// Top Products Section
.top-products {
  padding: 60px 0;
}

.products-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.showcase-card {
  position: relative;
  min-height: 300px;
  border-radius: 10px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6));
    z-index: 1;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .card-content {
    position: relative;
    z-index: 2;
    padding: 30px;
    color: white;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;

    h3 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    p {
      margin-bottom: 20px;
    }

    .btn {
      align-self: flex-start;
      background-color: white;
      color: var(--text-color);

      &:hover {
        background-color: var(--accent-color);
        color: white;
      }
    }
  }
}

// Smartphone Banner
.smartphone-banner {
  background-color: #f5f5f5;
  padding: 60px 0;

  .banner-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    align-items: center;
  }

  .banner-text {
    h2 {
      font-size: 32px;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 24px;
      margin-bottom: 15px;
    }

    p {
      margin-bottom: 10px;
      color: #666;
    }

    .btn {
      margin-top: 15px;
    }
  }
}

// Featured Products Section
.featured-products {
  padding: 60px 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.view-more {
  text-align: center;
}

.btn-outline {
  background-color: transparent;
  border: 2px solid var(--accent-color);
  color: var(--accent-color);

  &:hover {
    background-color: var(--accent-color);
    color: white;
  }
}

// Benefits Banner
.benefits-banner {
  background-color: #f5f5f5;
  padding: 60px 0;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.benefit-card {
  text-align: center;

  img {
    width: 80px;
    height: 80px;
    margin-bottom: 15px;
  }

  h5 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    color: #666;
  }
}

// Tech Banner
.tech-banner {
  background-color: var(--primary-color);
  color: white;
  padding: 60px 0;

  .tech-content {
    display: flex;
    justify-content: center;
  }

  .tech-text {
    max-width: 600px;
    text-align: center;

    h2 {
      font-size: 28px;
      margin-bottom: 20px;
    }

    .btn {
      background-color: white;
      color: var(--primary-color);

      &:hover {
        background-color: var(--accent-color);
        color: white;
      }
    }
  }
}

// About Section
.about-section {
  padding: 60px 0;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.about-card {
  h4 {
    font-size: 20px;
    margin-bottom: 15px;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
}

@media (max-width: 768px) {
  .hero {
    .hero-content {
      flex-direction: column;
      text-align: center;

      .hero-text {
        order: 2;
      }

      .hero-image {
        order: 1;
        margin-bottom: 30px;
      }

      .btn {
        margin: 0 auto;
      }
    }
  }

  .smartphone-banner {
    .banner-content {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
}
</style>
