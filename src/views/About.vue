<script setup lang="ts">
// About page
</script>

<template>
  <div class="about-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="container">
        <h1>About Us</h1>
        <div class="breadcrumbs">
          <router-link to="/">Home</router-link>
          <span>/</span>
          <span>About Us</span>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="about-content">
        <div class="about-section">
          <div class="about-image">
            <img src="https://ext.same-assets.com/3564519495/3040050777.jpeg" alt="About The Phone Smart">
          </div>
          <div class="about-text">
            <h2>Welcome to The Phone Smart</h2>
            <p>
              Established in 2022, The Phone Smart has quickly become a leading provider of smartphones and accessories in Pakistan.
              We pride ourselves on offering the latest technology at competitive prices, ensuring our customers always have access
              to cutting-edge devices and accessories.
            </p>
            <p>
              Our mission is to deliver high-quality products with exceptional customer service. We believe in building lasting
              relationships with our customers by providing reliable products and unmatched after-sales support.
            </p>
          </div>
        </div>

        <div class="values-section">
          <h2>Our Core Values</h2>
          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                </svg>
              </div>
              <h3>Quality Assurance</h3>
              <p>
                We source our products directly from authorized manufacturers to ensure the highest quality standards.
                Every product we sell undergoes rigorous quality checks before reaching our customers.
              </p>
            </div>
            <div class="value-card">
              <div class="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
              </div>
              <h3>Fast Delivery</h3>
              <p>
                We understand the excitement of receiving new technology, which is why we've optimized our logistics
                to deliver your products as quickly as possible. Most orders are processed and dispatched within 24 hours.
              </p>
            </div>
            <div class="value-card">
              <div class="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
              </div>
              <h3>Customer Support</h3>
              <p>
                Our dedicated support team is available to assist you with any queries or concerns.
                We believe in transparent communication and are committed to resolving issues promptly.
              </p>
            </div>
            <div class="value-card">
              <div class="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                  <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z"/>
                </svg>
              </div>
              <h3>Innovation</h3>
              <p>
                Technology evolves rapidly, and so do we. We continuously update our product range to include
                the latest devices and accessories, keeping our customers at the forefront of technological advancement.
              </p>
            </div>
          </div>
        </div>

        <div class="team-section">
          <h2>Meet Our Team</h2>
          <div class="team-description">
            <p>
              Behind The Phone Smart is a team of technology enthusiasts and experts who are passionate about providing
              the best smartphone experience to our customers. Our team combines years of experience in the tech industry
              with a deep understanding of customer needs to deliver exceptional service.
            </p>
            <p>
              From our product specialists who carefully select the items we offer, to our customer service representatives
              who ensure your satisfaction, each member of our team is committed to upholding our values and exceeding your expectations.
            </p>
          </div>
        </div>

        <div class="cta-section">
          <h2>Shop with Confidence</h2>
          <p>
            Experience the difference with The Phone Smart. Browse our extensive collection of smartphones and accessories,
            and discover why we're the preferred choice for tech-savvy customers across Pakistan.
          </p>
          <router-link to="/shop" class="btn">Explore Our Products</router-link>
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

.about-content {
  margin-bottom: 60px;

  h2 {
    font-size: 28px;
    margin-bottom: 20px;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 50px;
      height: 3px;
      background-color: var(--accent-color);
      margin-top: 10px;
    }
  }

  p {
    margin-bottom: 15px;
    line-height: 1.6;
    color: #555;
  }
}

.about-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;

  .about-image {
    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
  }
}

.values-section {
  margin-bottom: 60px;
  text-align: center;

  h2 {
    &::after {
      margin: 10px auto;
    }
  }
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.value-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  .value-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: rgba(38, 147, 228, 0.1);
    color: var(--accent-color);
    border-radius: 50%;
    margin: 0 auto 20px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 15px;
  }

  p {
    font-size: 14px;
  }
}

.team-section {
  margin-bottom: 60px;

  .team-description {
    max-width: 800px;
    margin: 0 auto;
  }
}

.cta-section {
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 8px;
  text-align: center;

  h2 {
    &::after {
      margin: 10px auto;
    }
  }

  p {
    max-width: 700px;
    margin: 0 auto 25px;
  }

  .btn {
    display: inline-block;
    padding: 12px 25px;
  }
}

@media (max-width: 992px) {
  .about-section {
    grid-template-columns: 1fr;
  }
}
</style>
